import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Calendar, Twitter, MessageSquare } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Set up backend mail action
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This form will be connected to a backend soon.');
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-[#0F1724]/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="font-mono text-xs text-[#7FD3FF] mb-8 tracking-wider">
          [04] GET IN TOUCH
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-mono text-3xl lg:text-5xl text-[#E6EEF6]">
              Let's build something
            </h2>
            <p className="text-lg text-[#9AA6B2]">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact card */}
          <div className="rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 p-8 lg:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-sm text-[#7FD3FF]">
                    NAME
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-[#0B0F17] border-[#00E0FF]/20 text-[#E6EEF6] placeholder:text-[#9AA6B2]/50 focus:border-[#00E0FF] focus:ring-[#00E0FF]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-sm text-[#7FD3FF]">
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="bg-[#0B0F17] border-[#00E0FF]/20 text-[#E6EEF6] placeholder:text-[#9AA6B2]/50 focus:border-[#00E0FF] focus:ring-[#00E0FF]/20"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="font-mono text-sm text-[#7FD3FF]">
                  SUBJECT
                </label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="What's this about?"
                  required
                  className="bg-[#0B0F17] border-[#00E0FF]/20 text-[#E6EEF6] placeholder:text-[#9AA6B2]/50 focus:border-[#00E0FF] focus:ring-[#00E0FF]/20"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-sm text-[#7FD3FF]">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="bg-[#0B0F17] border-[#00E0FF]/20 text-[#E6EEF6] placeholder:text-[#9AA6B2]/50 focus:border-[#00E0FF] focus:ring-[#00E0FF]/20 resize-none"
                />
              </div>

              {/* File upload (optional) */}
              <div className="space-y-2">
                <label htmlFor="file" className="font-mono text-sm text-[#7FD3FF]">
                  ATTACHMENT (OPTIONAL)
                </label>
                <Input
                  id="file"
                  type="file"
                  className="bg-[#0B0F17] border-[#00E0FF]/20 text-[#E6EEF6] file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gradient-to-r file:from-[#2B50FF] file:to-[#6A00FF] file:text-[#E6EEF6] file:cursor-pointer hover:file:shadow-[0_0_20px_rgba(43,80,255,0.4)]"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2B50FF] to-[#6A00FF] text-[#E6EEF6] hover:shadow-[0_0_30px_rgba(43,80,255,0.4)] transition-all duration-300 h-12"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>

              {/* Privacy note */}
              <p className="text-xs text-center text-[#9AA6B2] font-mono">
                → I reply within 48 hours — no spam.
              </p>
            </form>
          </div>

          {/* Secondary actions */}
          <div className="mt-12 space-y-6">
            <div className="text-center">
              <p className="text-[#9AA6B2] mb-4">Or connect with me directly:</p>
              
              {/* Social links */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 text-[#E6EEF6] hover:border-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 text-[#E6EEF6] hover:border-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 text-[#E6EEF6] hover:border-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>

                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F1724] border border-[#00E0FF]/20 text-[#E6EEF6] hover:border-[#00E0FF] hover:bg-[#00E0FF]/10 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Telegram</span>
                </a>
              </div>

              {/* Schedule call */}
              <div className="mt-6">
                <a
                  href="https://calendly.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF]/10 hover:shadow-[0_0_20px_rgba(0,224,255,0.3)] transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule a call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}