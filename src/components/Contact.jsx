import { useState } from 'react';
import { ArrowUpRight, Users, Code2, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('This opens your email app with a draft. It will not send anything automatically.');

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (form.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.trim().length < 10) {
      setStatus('Please enter your name, a valid email address and a message of at least 10 characters.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setStatus('Your email app should open with a draft. Review it and press Send there.');
    window.location.href = `mailto:kesanakurthisangeetha@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="wrap">
        <div className="section-heading reveal">
          <div><p className="eyebrow">06 — LET'S CONNECT</p><h2>Have a question? <span>Say hello.</span></h2></div>
          <p className="section-note">I'm open to connecting with fellow students, developers, mentors and recruiters.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="contact-label">EMAIL</p><a className="contact-email" href="mailto:kesanakurthisangeetha@gmail.com">kesanakurthisangeetha@gmail.com <ArrowUpRight size={14} /></a>
            <p className="contact-label">PHONE</p><a className="contact-phone" href="tel:+919505237853"><Phone size={14} /> +91 95052 37853</a>
            <p className="contact-label">ELSEWHERE ON THE INTERNET</p>
            <div className="contact-socials"><a href="https://www.linkedin.com/in/sangeetha-kesanakurthi/" target="_blank" rel="noreferrer"><Users size={15} /> LinkedIn ↗</a><a href="https://github.com/sangeethakesanakurthi" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub ↗</a></div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Your name<input name="name" value={form.name} onChange={handleChange} placeholder="Name" minLength="2" required /></label>
              <label>Your email<input name="email" value={form.email} onChange={handleChange} placeholder="name@example.com" type="email" required /></label>
            </div>
            <label>Message<textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell me a little about what you'd like to discuss..." minLength="10" required /></label>
            <button className="button primary-button" type="submit">Prepare message <ArrowUpRight size={15} /></button>
            <p className="form-status" aria-live="polite">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
