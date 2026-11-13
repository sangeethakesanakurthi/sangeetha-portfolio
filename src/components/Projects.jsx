import { ArrowUpRight, MapPin, CalendarDays, Users, Search } from 'lucide-react';

export default function Projects() {
  return (
    <section className="section wrap" id="projects">
      <div className="section-heading reveal">
        <div><p className="eyebrow">03 — LEARNING BY DOING</p><h2>Projects I've <span>worked on</span></h2></div>
        <p className="section-note">One main academic project, explained clearly. I'll add more as I complete them.</p>
      </div>
      <article className="project-card reveal">
        <div className="project-visual">
          <div className="project-visual-label"><span>PROJECT INTERFACE PREVIEW</span><span>01 / 01</span></div>
          <div className="browser-window">
            <div className="browser-bar"><i /><i /><i /><span>tripstay · booking experience</span></div>
            <div className="trip-ui">
              <div className="trip-nav"><strong>✦ trip<span>stay</span></strong><small>Explore　 Stays　 My bookings　 <b>Sign in</b></small></div>
              <div className="trip-hero"><div><small>YOUR NEXT JOURNEY STARTS HERE</small><h3>Find your<br />kind of <em>escape.</em></h3><p>Discover stays and plan a trip you'll remember.</p></div><div className="trip-sun" /><div className="trip-hill hill-back" /><div className="trip-hill hill-front" /></div>
              <div className="booking-bar">
                <div><small><MapPin size={9} /> DESTINATION</small><b>Where are you going?</b></div>
                <div><small><CalendarDays size={9} /> CHECK IN</small><b>Choose date</b></div>
                <div><small><Users size={9} /> GUESTS</small><b>2 travellers</b></div>
                <span className="mock-search"><Search size={10} /> Search</span>
              </div>
              <div className="trip-bottom"><b>Popular places</b><span>Explore destinations →</span></div>
              <div className="trip-place-row"><i /><i /><i /></div>
            </div>
          </div>
        </div>
        <div className="project-details">
          <p className="project-kicker">FULL-STACK ACADEMIC PROJECT</p>
          <h3>Trip Agency & Hotel Management System</h3>
          <p>A full-stack application for hotel booking and trip planning, with separate experiences for customers and admins. I worked on user login and registration with JWT authentication, and REST API endpoints for bookings, user data and admin operations.</p>
          <div className="tech-tags">{['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="project-links"><a href="https://github.com/sangeethakesanakurthi" target="_blank" rel="noreferrer">My GitHub profile <ArrowUpRight size={13} /></a><span>Project repository link not added yet</span></div>
        </div>
      </article>
      <div className="next-project reveal"><strong>02</strong><div><p className="project-kicker">UP NEXT</p><h3>More projects, one step at a time.</h3><p>I'll add my next project here after I build it, test it and can explain how it works.</p></div><span className="next-star">✳</span></div>
    </section>
  );
}
