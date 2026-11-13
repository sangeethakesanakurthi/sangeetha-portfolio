import { Code2, Database, GitBranch, FileCode2, Coffee, Braces, Atom, Server, PanelsTopLeft, Workflow, Terminal, Send, FileSpreadsheet, Network, Boxes } from 'lucide-react';

const groups = [
  {
    number: '01', title: 'Programming & web',
    skills: [
      { name: 'Java', Icon: Coffee, color: 'java' },
      { name: 'Python', Icon: Code2, color: 'python' },
      { name: 'HTML', Icon: PanelsTopLeft, color: 'html' },
      { name: 'CSS', Icon: FileCode2, color: 'css' },
      { name: 'JavaScript', Icon: Braces, color: 'javascript' },
      { name: 'React.js', Icon: Atom, color: 'react' },
      { name: 'Node.js', Icon: Server, color: 'node' },
      { name: 'Express.js', Icon: Workflow, color: 'express' },
      { name: 'REST APIs', Icon: Network, color: 'api' }
    ]
  },
  {
    number: '02', title: 'Database, tools & concepts',
    skills: [
      { name: 'MongoDB', Icon: Database, color: 'mongo' },
      { name: 'SQL', Icon: Database, color: 'sql' },
      { name: 'Git', Icon: GitBranch, color: 'git' },
      { name: 'GitHub', Icon: Code2, color: 'github' },
      { name: 'VS Code', Icon: Terminal, color: 'vscode' },
      { name: 'Postman', Icon: Send, color: 'postman' },
      { name: 'MS Excel', Icon: FileSpreadsheet, color: 'excel' },
      { name: 'DSA basics', Icon: Workflow, color: 'dsa' },
      { name: 'OOP', Icon: Boxes, color: 'oop' }
    ]
  }
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="wrap">
        <div className="section-heading reveal">
          <div><p className="eyebrow">02 — TOOLS I HAVE WORKED WITH</p><h2>My <span>skills</span></h2></div>
          <p className="section-note">A practical list of the languages, technologies and tools mentioned in my resume. I'm always working to improve.</p>
        </div>
        <div className="skill-groups">
          {groups.map((group) => (
            <div className="skill-panel reveal" key={group.number}>
              <div className="panel-heading"><span>{group.number}</span><h3>{group.title}</h3></div>
              <div className="skill-grid">
                {group.skills.map(({ name, Icon, color }) => (
                  <div className="skill-card" key={name}>
                    <span className={`skill-icon ${color}`}><Icon size={25} strokeWidth={1.8} /></span>
                    <h5>{name}</h5>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="skill-footnote">I list the technologies I've studied or used in my coursework and project. I'm still growing my confidence with them.</p>
      </div>
    </section>
  );
}
