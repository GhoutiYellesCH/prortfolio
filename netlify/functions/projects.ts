import { Handler } from '@netlify/functions';
import { connectToDatabase, closeConnection } from './utils/db';
import { getTokenFromEvent, verifyToken } from './utils/auth';
import { ObjectId } from 'mongodb';

const handler: Handler = async (event, context) => {
    // Ensure method is allowed
    if (!['GET', 'POST', 'PUT', 'DELETE'].includes(event.httpMethod)) {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method not allowed' })
        };
    }

    try {
        const db = await connectToDatabase();
        const collection = db.collection('projects');

        switch (event.httpMethod) {
            case 'GET':
                // Handle different GET scenarios
                if (event.path.includes('/api/projects/service/')) {
                    const service = event.path.split('/').pop();
                    const serviceProjects = await collection
                        .find({ service })
                        .toArray();
                    return {
                        statusCode: 200,
                        body: JSON.stringify(serviceProjects)
                    };
                }

                if (event.path.includes('/api/projects/')) {
                    const id = event.path.split('/').pop();
                    let query: any = { };
                    try {
                        query = { _id: new ObjectId(id) };
                    } catch (e) {
                        // fallback to string id
                        query = { _id: id };
                    }
                    const project = await collection.findOne(query);
                    return {
                        statusCode: project ? 200 : 404,
                        body: project ? JSON.stringify(project) : JSON.stringify({ message: 'Project not found' })
                    };
                }

                // Get all projects
                const projects = await collection.find({}).toArray();
                return {
                    statusCode: 200,
                    body: JSON.stringify(projects)
                };

            case 'POST':
                // Protected: require valid JWT
                try {
                    const token = getTokenFromEvent(event);
                    if (!token) return { statusCode: 401, body: JSON.stringify({ message: 'Unauthorized' }) };
                    verifyToken(token);
                } catch (err) {
                    return { statusCode: 401, body: JSON.stringify({ message: 'Invalid token' }) };
                }

                // Create new project
                const newProject = JSON.parse(event.body || '{}');
                const result = await collection.insertOne(newProject);
                return {
                    statusCode: 201,
                    body: JSON.stringify({ 
                        message: 'Project created',
                        id: result.insertedId
                    })
                };

            case 'PUT':
                // Protected: require valid JWT
                try {
                    const token = getTokenFromEvent(event);
                    if (!token) return { statusCode: 401, body: JSON.stringify({ message: 'Unauthorized' }) };
                    verifyToken(token);
                } catch (err) {
                    return { statusCode: 401, body: JSON.stringify({ message: 'Invalid token' }) };
                }

                // Update project
                const id = event.path.split('/').pop();
                const updates = JSON.parse(event.body || '{}');
                let filter: any;
                try {
                    filter = { _id: new ObjectId(id) };
                } catch (e) {
                    filter = { _id: id };
                }
                const updateResult = await collection.updateOne(
                    filter,
                    { $set: updates }
                );
                return {
                    statusCode: updateResult.matchedCount ? 200 : 404,
                    body: JSON.stringify({ 
                        message: updateResult.matchedCount ? 'Project updated' : 'Project not found'
                    })
                };

            case 'DELETE':
                // Protected: require valid JWT
                try {
                    const token = getTokenFromEvent(event);
                    if (!token) return { statusCode: 401, body: JSON.stringify({ message: 'Unauthorized' }) };
                    verifyToken(token);
                } catch (err) {
                    return { statusCode: 401, body: JSON.stringify({ message: 'Invalid token' }) };
                }

                // Delete project
                const projectId = event.path.split('/').pop();
                let delFilter: any;
                try {
                    delFilter = { _id: new ObjectId(projectId) };
                } catch (e) {
                    delFilter = { _id: projectId };
                }
                const deleteResult = await collection.deleteOne(delFilter);
                return {
                    statusCode: deleteResult.deletedCount ? 200 : 404,
                    body: JSON.stringify({ 
                        message: deleteResult.deletedCount ? 'Project deleted' : 'Project not found'
                    })
                };
        }
        // Add a default response if no case matches
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Bad request' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' })
        };
    } finally {
        await closeConnection();
    }
};

export { handler };