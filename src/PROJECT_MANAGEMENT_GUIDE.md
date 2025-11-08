# Project Management Guide

## Overview

Your portfolio now has a complete project management system with:
- Individual project pages for each service
- A main page showing only the 3 most recent projects
- An admin dashboard accessible by URL only

## How to Use

### Viewing Projects

#### Main Page
- The homepage now shows only the **3 most recent projects** in the "Latest Projects" section
- All other project sections have been removed from the main page

#### Service Project Pages
- Each service has an "Explore projects" button
- Clicking it takes you to a dedicated page showing all projects for that service
- Access URLs: `#service/fullstack-dev`, `#service/red-team`, etc.

### Admin Dashboard

#### Accessing the Dashboard
Navigate to: `#admin-dashboard` (add this to your URL)
Example: `https://yoursite.com/#admin-dashboard`

#### Managing Projects

**Add New Project:**
1. Click "Add Project" button
2. Fill in the form:
   - Title (required)
   - Service (required - select from dropdown)
   - Description (required)
   - Image URL (required)
   - Technologies (required - comma separated)
   - Live URL (optional)
   - GitHub URL (optional)
   - Featured checkbox (check to show on homepage)
3. Click "Add Project"

**Edit Project:**
1. Click the edit icon (pencil) on any project
2. Modify the fields
3. Click "Update Project"

**Delete Project:**
1. Click the delete icon (trash) on any project
2. Confirm deletion

**Return to Home:**
- Click "Back to Home" button

## Available Service Slugs

1. `fullstack-dev` - Full-Stack Development
2. `system-design` - System Design & Cloud Infrastructure
3. `ai-finetuning` - AI & Machine Learning Fine-tuning
4. `network-infrastructure` - Network & Infrastructure Setup
5. `ui-ux-design` - UI/UX Design & System Development
6. `teaching-writing` - Teaching, Research & Technical Writing
7. `red-team` - Red Team Operations
8. `blue-team` - Blue Team Defense

## Sample Projects

The system comes pre-loaded with 6 sample projects:
- E-Commerce Platform (Full-Stack, Featured)
- Cloud Infrastructure Migration (System Design, Featured)
- AI Document Analyzer (AI, Featured)
- Enterprise Network Setup (Network Infrastructure)
- Bug Bounty - XSS to Account Takeover (Red Team, Featured)
- Enterprise SIEM Deployment (Blue Team, Featured)

## Notes

- Projects are stored in browser state (will reset on refresh)
- To persist projects, you'll need to integrate with a backend/database
- The dashboard is accessible by URL only - no navigation link (for security)
- Recent projects are automatically sorted by creation date
- You can mark projects as "Featured" to highlight them

## Tips

1. Use high-quality images from Unsplash or your own hosted images
2. Keep descriptions concise but informative
3. List 3-5 key technologies per project
4. Use the Featured checkbox sparingly for your best work
5. Keep the creation date current for proper sorting
