'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
     <section className="relative overflow-hidden dark:bg-foreground bg-primary/[0.08] pt-24 pb-20 lg:pt-15 lg:pb-20 transition-colors duration-300">
  {/* Adaptive Background Texture */}
  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
    style={{ 
      backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
      backgroundSize: '32px 32px' 
    }}>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        {/* Responsive Heading */}
        <h1 className="text-2xl lg:text-5xl font-bold tracking-tight dark:text-white text-slate-900 mb-6 leading-tight font-heading">
          Contact <span className="text-primary">Us</span>
        </h1>
        {/* Responsive Description */}
        <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
          Get in touch with our team - we're here to help you navigate your 
          academic journey and answer any questions you may have.
        </p>
      </div>

      {/* Elegant Card - Clean Adaptive Version */}
      <div className="">
        <div className="relative p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden backdrop-blur-sm transition-all duration-300">
          <p className="text-slate-600 dark:text-slate-300 italic text-lg leading-relaxed relative z-10 font-sans">
            "Our dedicated support team is committed to providing timely assistance, ensuring that every student and parent feels heard and supported."
          </p>

          <div className="mt-6 flex items-center gap-4 relative z-10">
            {/* Using your secondary orange variable */}
            <div className="h-10 w-1 bg-secondary rounded-full" />
            <span className="text-slate-600 dark:text-background font-bold uppercase tracking-widest text-xs">
              Support Center
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Contact Content */}
     <section className="py-2 bg-primary/[0.08] dark:bg-foreground">
  <div className="max-w-7xl mx-auto px-6">
    {/* The Bordered Container */}
    <div className="relative border border-slate-200 bg-white dark:border-white/10 rounded-[2.5rem] overflow-hidden bg-slate-50/30 dark:bg-background/[0.02] p-8 md:p-16 transition-colors duration-300">
      
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/50 dark:bg-secondary/5 rounded-bl-full -mr-10 -mt-10" />
       
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Side: Contact Info */}
        <div className="lg:col-span-5">
          <div className="inline-block px-4 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Find Us
            </span>
          </div>

          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight font-heading">
            Get in <span className="text-primary">Touch</span>
          </h2>

          <div className="space-y-10">
            {[
              { icon: "📍", title: "Address", desc: "123 College Street, Tech Park, Your City, State 123456" },
              { icon: "📞", title: "Phone", desc: "+91 (XXX) XXX-XXXX", desc2: "+91 (XXX) XXX-YYYY" },
              { icon: "📧", title: "Email", desc: "info@cvrtcollege.com", desc2: "admissions@cvrtcollege.com" },
              { icon: "🕒", title: "Office Hours", desc: "Mon - Fri: 9:00 AM - 6:00 PM", desc2: "Sat: 10:00 AM - 4:00 PM" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="w-12 h-12 shrink-0 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 font-sans text-sm leading-relaxed">
                    {item.desc}
                    {item.desc2 && <><br />{item.desc2}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="lg:col-span-7">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0  dark:bg-foreground  blur-3xl rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 font-heading">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-3 bg-slate-50 dark:bg-foreground border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-3 bg-slate-50 dark:bg-foreground border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-5 py-3 bg-slate-50 dark:bg-foreground border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all font-sans"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3 bg-slate-50 dark:bg-foreground border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none dark:text-white transition-all font-sans resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] font-heading  text-sm"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Map Section */}
     <section className="py-24  bg-primary/[0.08] dark:bg-foreground transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading tracking-tight">
        Located in <span className="text-primary">Ananthapuram</span>
      </h2>
      <div className="mt-4 flex justify-center items-center gap-4">
    <div className="h-[3px] w-30 bg-secondary dark:bg-white/10" />
    
  </div>
    </div>

    {/* The Map Container */}
    <div className="relative group">
      <div className="relative border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden bg-slate-50 dark:bg-background shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all duration-300">
        
        {/* Real Google Map Integration */}
        <div className="w-full h-[500px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61853.51139455322!2d77.55836279999999!3d14.6710434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac450849927%3A0x868d87b3706041f0!2sAnantapur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="dark:invert dark:grayscale dark:contrast-125 dark:opacity-80 transition-all duration-500"
          ></iframe>

          {/* Floating Location Tag Overlay (Bottom Left) */}
          <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-white/10 p-5 rounded-3xl shadow-lg z-20 pointer-events-none">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-bold font-heading text-lg">
              AP
            </div>
            <div>
              <p className="text-xs font-bold text-primary  mb-0.5">Andhra Pradesh</p>
              <p className="text-sm text-slate-900 dark:text-white font-sans font-semibold leading-none">Ananthapuram District</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
