  
 import React, { useState } from 'react';
 import { createRoot } from 'react-dom/client';
 import { motion } from 'framer-motion';
 import {
   Menu, X, Download, ArrowRight, ArrowUpRight, Linkedin, Github,
   Mail, Phone, Monitor, Code2, ClipboardCheck, Database, Wrench,
   BrainCircuit, Users, BriefcaseBusiness, GraduationCap, Trophy,
   CheckCircle2, MapPin, Send
 } from 'lucide-react';
 import { MessageCircle } from 'lucide-react';
 import './styles.css';
 
 const resumePath = '/Rahul_Kumar_QA.pdf';
 
 const skills = [
   {
     icon: ClipboardCheck,
     title: 'Manual Testing',
     items: 'STLC, SDLC, Functional Testing, Smoke, Sanity, Regression, UAT, Test Cases, BVA, EP'
   },
   {
     icon: Code2,
     title: 'Automation Testing',
     items: 'Selenium WebDriver, Java, TestNG, Maven, XPath, CSS Selectors, Waits'
   },
   {
     icon: Database,
     title: 'API & Database',
     items: 'Postman, SQL, SELECT, JOINs, Subqueries'
   },
   {
     icon: Wrench,
     title: 'Tools',
     items: 'Jira, Git/GitHub, Eclipse, IntelliJ, VS Code'
   },
   {
     icon: BrainCircuit,
     title: 'AI Model Testing',
     items: 'Accuracy, Prompt Validation, Regression, Functional and Safety Testing; exposure to TestSigma and FireFlink'
   },
   {
     icon: Users,
     title: 'Soft Skills',
     items: 'Communication, Teamwork, Problem Solving, Analytical Thinking'
   }
 ];
 
 const experience = [
   {
     role: 'QA Intern',
     company: 'Nickelfox Technologies Pvt. Ltd.',
     dates: 'Aug 2026 – Present',
     points: [
       'Tested the IFSTA production mobile application across Android and iOS.',
       'Validated Audiobooks, Flashcards, Exam Prep, Identification and Interactive Skill Videos.',
       'Reported functional and UI defects; performed sanity and regression testing.'
     ]
   },
   {
     role: 'Software Tester Intern',
     company: 'RoboWaves',
     dates: 'Nov 2025 – Dec 2025',
     points: [
       'Tested a villa-booking application with 10K+ Play Store downloads.',
       'Performed manual and automation testing for Search, Filters and Booking.',
       'Designed test cases for price, location and amenities; reported functional/UI defects.'
     ]
   },
   {
     role: 'Automation Testing Trainee',
     company: 'QSpiders',
     dates: 'Jul 2025 – Dec 2025',
     points: [
       'Trained in manual and automation testing using Selenium WebDriver with Java.',
       'Designed and executed test scenarios for the Vtiger CRM application.',
       'Practiced Selenium scripts with TestNG and Maven, plus SQL, Postman and Jira.'
     ]
   }
 ];
 
 const projects = [
   {
     title: 'ShoppersStack',
     type: 'Web Testing',
     category: 'web',
     subtitle: 'E-commerce web application',
     tags: ['Manual Testing', 'Functional Testing', 'UI Testing', 'Negative Testing', 'Regression Testing'],
     modules: 'Login, Product Search, Product Details, Cart, Wishlist & Checkout.',
     tools: 'Browser-based testing, test scenarios/cases and structured defect reporting',
     description: 'Validated core shopping flows, UI consistency, and functional behavior; identified and reported functional/UI issues.',
     image: '/project-images/shopper.png',
     imageAlt: 'ShoppersStack e-commerce website screenshot',
     link: 'https://www.shoppersstack.com/',
     linkLabel: 'Visit Live Website',
     layout: 'split'
   },
   {
     title: 'StayVista',
     type: 'Web Testing',
     category: 'web',
     subtitle: 'Villa booking web platform',
     tags: ['Manual Testing', 'Functional Testing', 'UI Testing', 'Regression Testing'],
     modules: 'Location Search, Date & Guest Selection, Price & Amenity Filters, Property Details & Booking',
     tools: 'Manual Testing, Automation Testing by FireFlink',
     description: 'Validated villa search, filters, booking flow, and UI functionality; tracked defects and retested fixes.',
     image: '/project-images/stayvista_dark.png',
     imageAlt: 'StayVista villa booking website screenshot',
     link: 'https://www.stayvista.com/',
     linkLabel: 'Visit Live Website',
     layout: 'split'
   },
   {
     title: 'IFSTA Mobile Application',
     type: 'Mobile App Testing · Android & iOS',
     category: 'mobile',
     subtitle: 'Production fire-service learning application',
     tags: ['Manual Testing', 'Functional Testing', 'UI Testing', 'Sanity Testing', 'Regression Testing'],
     modules: 'Content library, audiobooks, flashcards, exam prep, identification and interactive skill videos',
     tools: 'Android production build, latest iOS build, scenario-based checks and regression/sanity validation',
     description: 'Validated Android and iOS apps for functionality, UI, navigation, and interactive learning features in line with business requirements.',
     image: '/project-images/IFSTA.png',
     imageAlt: 'IFSTA app screens and Google Play listing overview',
     link: 'https://play.google.com/store/apps/details?id=org.ifsta.unified',
     linkLabel: 'Google Play',
     layout: 'stacked'
   }
 ];
 
 function App() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [filter, setFilter] = useState('all');
   const [form, setForm] = useState({
     name: '',
     email: '',
     subject: 'Job opportunity',
     message: ''
   });
   const [formMessage, setFormMessage] = useState('');
   const [sending, setSending] = useState(false);
 
   // Home and Skills are removed from the navbar only.
   const navItems = [
     ['ABOUT', '#about'],
     ['EXPERIENCE', '#experience'],
     ['PROJECTS', '#projects'],
     ['CONTACT', '#contact']
   ];
 
   const scrollTo = (id) => {
     setMenuOpen(false);
     document.querySelector(id)?.scrollIntoView({
       behavior: 'smooth'
     });
   };
 
   // Sends the contact form through FormSubmit.
   const submitContact = async (e) => {
     e.preventDefault();
 
     if (sending) return;
 
     setSending(true);
     setFormMessage('Sending message...');
 
     try {
       const response = await fetch(
         'https://formsubmit.co/ajax/rahulbscc455@gmail.com',
         {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json'
           },
           body: JSON.stringify({
             name: form.name,
             email: form.email,
             subject: form.subject,
             message: form.message,
             _subject: `Portfolio Contact: ${form.subject}`,
             _template: 'table'
           })
         }
       );
 
       const result = await response.json();
 
       if (!response.ok || String(result.success).toLowerCase() !== 'true') {
         throw new Error(
           result.message || 'Message could not be sent'
         );
       }
 
       setFormMessage('Message sent successfully! Thank you for contacting me.');
 
       setForm({
         name: '',
         email: '',
         subject: 'Job opportunity',
         message: ''
       });
     } catch (error) {
       console.error('Contact form error:', error);
 
       setFormMessage(
         'Message could not be sent. Please check your internet connection or try again later.'
       );
     } finally {
       setSending(false);
     }
   };
 
   return (
     <div className="site-shell">
       <header className="navbar">
         <a
           className="brand"
           href="#home"
           onClick={(e) => {
             e.preventDefault();
             scrollTo('#home');
           }}
         >
           RAHUL <span>KUMAR</span>
         </a>
 
         <nav
           className={menuOpen ? 'nav-links open' : 'nav-links'}
           aria-label="Main navigation"
         >
           {navItems.map(([label, href]) => (
             <a
               key={label}
               href={href}
               onClick={() => setMenuOpen(false)}
             >
               {label}
             </a>
           ))}
 
           <a
             className="mobile-cv"
             href={resumePath}
             download="Rahul_Kumar_QA.pdf"
           >
             <Download size={15} /> Download CV
           </a>
         </nav>
 
         <a
           className="button button-brown nav-cv"
           href={resumePath}
           download="Rahul_Kumar_QA.pdf"
         >
           <Download size={16} /> Download CV
         </a>
 
         <button
           className="menu-toggle"
           aria-label={menuOpen ? 'Close menu' : 'Open menu'}
           onClick={() => setMenuOpen(!menuOpen)}
         >
           {menuOpen ? <X /> : <Menu />}
         </button>
       </header>
 
       <main>
         {/* HOME / HERO */}
         <section className="hero section-wrap" id="home">
           <div className="hero-copy">
             <motion.p
               className="eyebrow"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
             >
               Hello, I'm
             </motion.p>
 
             <motion.h1
               initial={{ opacity: 0, y: 16 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.08 }}
             >
               Rahul <span>Kumar</span>
             </motion.h1>
 
             <motion.h2
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
             >
               Software Test Engineer
             </motion.h2>
 
             <motion.p
               className="hero-description"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.25 }}
             >
               Delivering reliable, bug-free, and user-friendly software
               through quality testing.
             </motion.p>
 
             <motion.div
               className="hero-actions"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.35 }}
             >
               <a
                 className="button button-brown"
                 href={resumePath}
                 download="Rahul_Kumar_QA.pdf"
               >
                 <Download size={16} /> Download CV
               </a>
 
               <button
                 className="button button-outline"
                 onClick={() => scrollTo('#projects')}
               >
                 View My Work <ArrowRight size={16} />
               </button>
             </motion.div>
 
             <div className="social-row">
               <a
                 href="https://www.linkedin.com/"
                 target="_blank"
                 rel="noreferrer"
                 aria-label="LinkedIn profile"
               >
                 <Linkedin />
               </a>
 
               <a
                 href="https://github.com/mr-rahulthecoder"
                 target="_blank"
                 rel="noreferrer"
                 aria-label="GitHub profile"
               >
                 <Github />
               </a>
 
               
 <a
   href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulbscc455@gmail.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Email Rahul"
 >
   <Mail />
 </a>
 
 
               <a
                 href="tel:+918864068856"
                 aria-label="Call Rahul"
               >
                 <Phone />
               </a>
             </div>
           </div>
 
           <motion.div
             className="hero-art"
             initial={{ opacity: 0, scale: 0.94 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.65, delay: 0.15 }}
           >
             <div className="portrait-placeholder">
               <img
                 src="/rahul.png"
                 alt="Rahul Kumar"
                 className="profile-photo"
               />
             </div>
 
             <div className="orbit orbit-one"></div>
             <div className="orbit orbit-two"></div>
 
             <div className="hero-note">
               Quality<br />
               Builds<br />
               <b>Trust.</b>
             </div>
 
             <span className="decor-dot"></span>
           </motion.div>
         </section>
 
         {/* ABOUT AND SKILLS: CONTENT RETAINED */}
        
 <section className="section-wrap about-skills" id="about">
   <motion.div
     className="about-block"
     initial={{ opacity: 0, y: 18 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.15 }}
     transition={{ duration: 0.45 }}
   >
     <SectionHeading icon={Users} title="About Me" />
 
     <p className="body-copy">
       I am passionate about software quality and dedicated to
       delivering high-quality, reliable, and user-friendly web and
       mobile applications through effective testing.
     </p>
 
     <div className="about-tech-stack">
       <SectionHeading icon={Wrench} title="Tech Stack" />
 
       <div className="skills-grid">
         {skills.map(({ icon: Icon, title, items }) => (
           <div className="skill-card" key={title}>
             <div className="skill-icon">
               <Icon size={19} />
             </div>
 
             <div>
               <h3>{title}</h3>
               <p>{items}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   </motion.div>
 </section>
 
 
         {/* EXPERIENCE */}
         <section
           className="section-wrap section-block"
           id="experience"
         >
           <SectionHeading
             icon={BriefcaseBusiness}
             title="Experience & Training"
           />
 
           <div className="experience-grid">
             {experience.map((job, i) => (
               <motion.article
                 className="experience-card"
                 key={job.company}
                 initial={{ opacity: 0, y: 18 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.12 }}
                 transition={{ duration: 0.4, delay: i * 0.08 }}
               >
                 <div className="timeline-dot"></div>
 
                 <div className="experience-top">
                   <div>
                     <h3>{job.role}</h3>
                     <p>{job.company}</p>
                   </div>
 
                   <span>{job.dates}</span>
                 </div>
 
                 <ul>
                   {job.points.map((point) => (
                     <li key={point}>{point}</li>
                   ))}
                 </ul>
               </motion.article>
             ))}
           </div>
         </section>
 
         {/* PROJECTS */}
         <section
           className="section-wrap section-block"
           id="projects"
         >
           <div className="section-title-row">
             <SectionHeading icon={Monitor} title="Projects" />
           </div>
 
           <div className="filter-row" role="group" aria-label="Filter projects">
             {[
               ['all', 'All Projects'],
               ['web', 'Web Testing'],
               ['mobile', 'Mobile Testing']
             ].map(([value, label]) => (
               <button
                 key={value}
                 className={
                   filter === value
                     ? 'filter-chip active'
                     : 'filter-chip'
                 }
                 onClick={() => setFilter(value)}
               >
                 {label}
               </button>
             ))}
           </div>
 
           <div className="projects-grid">
             {projects
               .filter(
                 (project) =>
                   filter === 'all' || project.category === filter
               )
               .map((project, i) => (
                 <motion.article
                   className={`project-card ${project.layout === 'stacked' ? 'project-card-stacked' : ''}`}
                   key={project.title}
                   layout
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, amount: 0.08 }}
                   transition={{ duration: 0.35, delay: i * 0.06 }}
                 >
                   <ProjectArt image={project.image} title={project.title} alt={project.imageAlt} />
 
                   <div className="project-content">
                     <div className="project-heading">
                       <div>
                         <span className="project-type">
                           {project.type}
                         </span>
 
                         <h3>{project.title}</h3>
                         <p>{project.subtitle}</p>
                       </div>
 
                       <ArrowUpRight size={19} />
                     </div>
 
                     <div className="tag-row">
                       {project.tags.map((tag) => (
                         <span className="tag" key={tag}>
                           {tag}
                         </span>
                       ))}
                     </div>
 
                     <p className="project-description">
                       {project.description}
                     </p>
 
                     <p className="project-meta">
                       <b>Tested modules:</b> {project.modules}
                     </p>
 
                     <p className="project-meta">
                       <b>Tools / approach:</b> {project.tools}
                     </p>
 
                     <div className="project-actions">
                       {project.category === 'mobile' ? (
                         <a
                           className="google-play-badge"
                           href={project.link}
                           target="_blank"
                           rel="noreferrer"
                           aria-label="Get IFSTA Mobile Application on Google Play"
                         >
                           <svg className="google-play-icon" viewBox="0 0 32 36" aria-hidden="true">
                             <path d="M2 1.8 18.1 18 2 34.2c-.5-.5-.8-1.2-.8-2.1V3.9c0-.9.3-1.6.8-2.1Z" fill="#34A853" />
                             <path d="m2 1.8 19.4 11.1-3.3 5.1L2 1.8Z" fill="#4285F4" />
                             <path d="m18.1 18 3.3-5.1 7.1 4.1c1.8 1 1.8 2.8 0 3.8l-7.1 4.1-3.3-6.9Z" fill="#FBBC04" />
                             <path d="m2 34.2 19.4-11.1-3.3-5.1L2 34.2Z" fill="#EA4335" />
                           </svg>
                           <span><small>GET IT ON</small><strong>Google Play</strong></span>
                         </a>
                       ) : (
                         <a
                           className="project-visit"
                           href={project.link}
                           target="_blank"
                           rel="noreferrer"
                         >
                           {project.linkLabel} <ArrowUpRight size={16} />
                         </a>
                       )}
 
                       <button
                         className="text-link"
                         onClick={() => scrollTo('#contact')}
                       >
                         Discuss this project <ArrowRight size={15} />
                       </button>
                     </div>
                   </div>
                 </motion.article>
               ))}
           </div>

         </section>

         {/* CONTACT */}
          
         <section
           className="section-wrap contact-section"
           id="contact"
         >
           <div className="contact-info">
             <SectionHeading icon={Mail} title="Get In Touch" />
 
             <p className="body-copy">
               Open to QA Engineer, Automation Engineer and Software Testing
               opportunities.
             </p>
              <a
               className="contact-line"
               href="mailto:rahulbscc455@gmail.com"
             >
               <Mail />

 
               <span>
                 <b>Email</b>
                 <small>rahulbscc455@gmail.com</small>
               </span>
             </a>
 
             <a
               className="contact-line"
               href="tel:+918864068856"
             >
               <Phone />
 
               <span>
                 <b>Phone</b>
                 <small>+91 88640 68856</small>
               </span>
             </a>
 
             <div className="contact-social">
               <span>Social links</span>
 
               <a
                 href="https://www.linkedin.com/"
                 target="_blank"
                 rel="noreferrer"
               >
                 <Linkedin /> LinkedIn
               </a>
 
               <a
                 href="https://github.com/mr-rahulthecoder"
                 target="_blank"
                 rel="noreferrer"
               >
                 <Github /> GitHub
               </a>
               <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulbscc455@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email Rahul"
>
  <Mail />
  <span>Email</span>
</a>

<a
  href="https://wa.me/918864068856"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp Rahul"
>
  <MessageCircle />
  <span>WhatsApp</span>
</a>
             </div>
           </div>
 
        <form
  className="contact-form"
  action="https://formsubmit.co/rahulbscc455@gmail.com"
  method="POST"
  target="_blank"
>
  <input
    type="hidden"
    name="_subject"
    value="Portfolio Contact Form"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <div className="form-row">
    <label>
      Name *
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        placeholder="Your name"
        autoComplete="name"
        required
      />
    </label>

    <label>
      Email *
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
        placeholder="you@email.com"
        autoComplete="email"
        required
      />
    </label>
  </div>

  <label>
    Subject *
    <select
      name="subject"
      value={form.subject}
      onChange={(e) =>
        setForm({ ...form, subject: e.target.value })
      }
      required
    >
      <option value="Job opportunity">Job opportunity</option>
      <option value="Project discussion">Project discussion</option>
      <option value="Freelance work">Freelance work</option>
      <option value="Other">Other</option>
    </select>
  </label>

  <label>
    Message *
    <textarea
      name="message"
      rows={4}
      value={form.message}
      onChange={(e) =>
        setForm({ ...form, message: e.target.value })
      }
      placeholder="Write your message..."
      required
    />
  </label>

  <button className="button button-brown" type="submit">
    <Send size={15} />
    Send Message
  </button>

  <p className="form-hint">
    Your message will be submitted through FormSubmit.
    You can also email me directly at{' '}
    <a href="mailto:rahulbscc455@gmail.com">
      rahulbscc455@gmail.com
    </a>.
  </p>
</form>
         </section>
       </main>
 
       {/* FOOTER */}
       <footer className="footer section-wrap">
         <a className="brand footer-brand" href="#home">
           Rahul <span>Kumar</span><i>.</i>
         </a>
 
         <p>QA Engineer · Noida, India</p>
 
         <div className="footer-social">
           <a
             href="https://www.linkedin.com/"
             target="_blank"
             rel="noreferrer"
             aria-label="LinkedIn"
           >
             <Linkedin />
           </a>
 
           <a
             href="https://github.com/mr-rahulthecoder"
             target="_blank"
             rel="noreferrer"
             aria-label="GitHub"
           >
             <Github />
           </a>
 
            <a
   href="https://mail.google.com/mail/?view=cm&fs=1&to=rahulbscc455@gmail.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Email Rahul"
 > 
   <Mail />
 </a>
         </div>
 
         <small>
           © {new Date().getFullYear()} Rahul Kumar. All rights reserved.
         </small>
       </footer>
     </div>
   );
 }
 
 function SectionHeading({ icon: Icon, title }) {
   return (
     <div className="section-heading">
       <span className="heading-icon">
         <Icon size={20} />
       </span>
       <h2>{title}</h2>
     </div>
   );
 }
 
 function Fact({ icon: Icon, title, detail }) {
   return (
     <div className="fact">
       <span>
         <Icon size={17} />
       </span>
 
       <div>
         <b>{title}</b>
         <small>{detail}</small>
       </div>
     </div>
   );
 }
 
 function ProjectArt({ image, title, alt }) {
   return (
     <div className="project-art">
       <img src={image} alt={alt || `${title} project screenshot`} loading="lazy" />
     </div>
   );
 }
 
 createRoot(document.getElementById('root')).render(<App />);
 