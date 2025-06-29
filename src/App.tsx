import React, { useState } from 'react';
import { Container, Nav, Navbar, Card, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faUniversity, faCode, faTools, faSignature, faMicrochip, faUsers, faSnowboarding, faSwimmer, faBook, faGamepad, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWeixin, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import profilePic from './static/canada_mary.jpg';

const courses = [
  { name: 'Artificial Intelligence', grade: 'A+' },
  { name: 'Machine Learning', grade: 'A+' },
  { name: 'Computer Networks', grade: 'A' },
  { name: 'Operating Systems', grade: 'A-' },
  { name: 'Information Security', grade: 'A-' },
  { name: 'Software Design', grade: 'B+' },
  { name: 'Programming on the Web', grade: 'B+' },
  { name: 'Parallel Programming', grade: 'C+' },
  { name: 'Database', grade: 'N/A' },
  { name: 'Data Structures', grade: 'N/A' },
  { name: 'Principle of Programming Language', grade: 'N/A' },
];

const getGradeClass = (grade: string) => {
  if (grade.startsWith('A')) return 'grade-a';
  if (grade.startsWith('B')) return 'grade-b';
  if (grade.startsWith('C')) return 'grade-c';
  return 'grade-none';
};

interface CopyableContactProps {
  icon: any; // FontAwesomeIconDefinition
  text: string;
  value: string;
}

const CopyableContact = ({ icon, text, value }: CopyableContactProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-item" onClick={handleCopy}>
      <FontAwesomeIcon icon={icon} className="me-3" />
      <span>{copied ? 'Copied!' : text}</span>
    </div>
  );
};

function App() {
  return (
    <div className="App tokyo-night">
      <Navbar variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home" className="nav-brand-custom">// Mary's Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#interests">Interests</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-container">
        <section id="home" className="min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={5} className="text-center">
                <Image src={profilePic} fluid className="profile-pic-custom" />
              </Col>
              <Col md={7}>
                <h1 className="display-3 fw-bold">Hi, I'm Ruili </h1>
                <div className="lead-custom">
                  <p><FontAwesomeIcon icon={faSignature} className="me-2 text-accent" /> Ruili Xu / 徐瑞骊 / Mary <span className='text-accent'>(</span>yea please just call me<span className='text-accent'> Mary:D </span> </p>
                  <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-accent" /> Mississauga, Canada / Shanghai, China</p>
                  <p><FontAwesomeIcon icon={faBriefcase} className="me-2 text-accent" /> Open to new opportunities</p>
                </div>
                <p className="mt-4">
                  A passionate developer with a love for <span className="highlight">clean code</span>, <span className="highlight">elegant design</span>, and exploring the depths of <span className="highlight">computer networks</span> and <span className="highlight">operating systems</span>. Welcome to my digital space.
                </p>
                <div className="contact-list mt-4">
                  <CopyableContact icon={faEnvelope} text="mary4net@gmail.com" value="mary4net@gmail.com" />
                  <CopyableContact icon={faPhone} text="+1 (437) 261 0631" value="+14372610631" />
                  <CopyableContact icon={faWeixin} text="WeChat ID: rui_xrl" value="rui_xrl" />
                  <CopyableContact icon={faWeixin} text="+86 177 2117 1937" value="+8617721171937" />
                  <a href="https://github.com/mary4net" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FontAwesomeIcon icon={faGithub} className="me-3" />
                    <span>github.com/mary4net</span>
                  </a>
                  <a href="https://www.linkedin.com/in/ruili-xu-3413102a0/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FontAwesomeIcon icon={faLinkedin} className="me-3" />
                    <span>linkedin.com/in/ruili-xu-3413102a0</span>
                  </a>
                  <a href="https://www.instagram.com/maryruiliii/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FontAwesomeIcon icon={faInstagram} className="me-3" />
                    <span>instagram.com/maryruiliii</span>

                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="education" className="py-5">
          <h2><span className="text-accent">//</span> Education</h2>
          <Card className="card-custom">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faUniversity} className="me-2" /> University of Toronto</Card.Title>
              <Card.Subtitle className="mb-2 text-muted-custom">Bachelor of Science in Computer Science, 2022 - 2026</Card.Subtitle>
              <div className="coursework-title">Relevant Coursework:</div>
              <div className="course-pills">
                {courses.map(course => (
                  <span key={course.name} className={`course-pill ${getGradeClass(course.grade)}`}>
                    {course.name} {course.grade !== 'N/A' && `(${course.grade})`}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        </section>

        <section id="projects" className="py-5">
          <h2><span className="text-accent">//</span> Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <Card.Title>Flight Booking Web App</Card.Title>
                  <div className="project-lang">// JavaScript, Next.js</div>
                  <Card.Text>
                    <span className="highlight">Full-stack</span> flight and hotel booking application with an <span className="highlight">intelligent recommendation</span> system. Features automated testing, user/owner portals, and <span className="highlight">Dockerized deployment</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <Card.Title>User-Level Thread Library</Card.Title>
                  <div className="project-lang">// C</div>
                  <Card.Text>
                    A <span className="highlight">preemptive thread</span> library supporting FCFS/random <span className="highlight">scheduling</span>, with <span className="highlight">locks</span> and <span className="highlight">condition variables</span> for synchronization and <span className="highlight">priority control</span> via sleep queues.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <Card.Title>Proxy Server with Socket</Card.Title>
                  <div className="project-lang">// C++</div>
                  <Card.Text>
                    An <span className="highlight">HTTP/HTTPS proxy</span> using select-based I/O multiplexing to handle <span className="highlight">concurrent connections</span>, featuring a <span className="highlight">response cache</span> with a <span className="highlight">timeout mechanism</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="card-custom h-100">
                <Card.Body>
                  <Card.Title>ARP/IP Protocol Simulator</Card.Title>
                  <div className="project-lang">// C++</div>
                  <Card.Text>
                    Simulated core <span className="highlight">IPv4</span> and <span className="highlight">ARP</span> protocol stack functionalities, including <span className="highlight">Ethernet frame construction</span> and <span className="highlight">ARP request/response</span> handling <span className="highlight">with caching</span>.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section id="experience" className="py-5">
          <h2><span className="text-accent">//</span> Experience</h2>
          <Card className="card-custom mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faBriefcase} className="me-2" /> Software Development Intern</Card.Title>
              <Card.Subtitle className="mb-2 text-muted-custom">May - June 2025 — Shanghai UCloud Information Technology</Card.Subtitle>
              <ul className="experience-list">
                <li>Developed features by integrating internal <span className="highlight">APIs</span> and manipulating the <span className="highlight">database</span></li>
                <li>Refined requirements and designed solutions with product and cross-team members</li>
                <li>Maintained code quality through <span className="highlight">code reviews</span> and team discussions</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="card-custom">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faBriefcase} className="me-2" /> Digital Verification Intern</Card.Title>
              <Card.Subtitle className="mb-2 text-muted-custom">May – Aug 2024 — Shanghai Yunmai Xinlian Technology</Card.Subtitle>
              <ul className="experience-list">
                <li>Designed and tested hardware verification tools for <span className="highlight">NIC</span> development</li>
                <li>Wrote automation scripts (<span className="highlight">Python</span>, <span className="highlight">Bash</span>) to generate Verilog I/O</li>
                <li>Collaborated with engineers to meet functional specs and debugged <span className="highlight">Verilog</span> modules</li>
              </ul>
            </Card.Body>
          </Card>
        </section>

        <section id="skills" className="py-5">
          <h2><span className="text-accent">//</span> Skills</h2>
          <Card className="card-custom">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <div className="skill-category"><FontAwesomeIcon icon={faCode} className="me-2" /> Languages</div>
                  <p>Python, PostgreSQL, C/C++, Java, JavaScript, Lua</p>
                  <div className="skill-category"><FontAwesomeIcon icon={faTools} className="me-2" /> Tools & Systems</div>
                  <p>Linux (Arch/Ubuntu), Docker, Git, Vim/Neovim</p>
                </Col>
                <Col md={6}>
                  <div className="skill-category"><FontAwesomeIcon icon={faMicrochip} className="me-2" /> Hardware</div>
                  <p>Oscilloscope, Logic Analyzer, Multimeter, Soldering</p>
                  <div className="skill-category"><FontAwesomeIcon icon={faUsers} className="me-2" /> Soft Skills</div>
                  <p>Effective Communicator, Multitasking</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>

        <section id="interests" className="py-5">
          <h2><span className="text-accent">//</span> Interests</h2>
          <ul className="interests-list">
            <li><FontAwesomeIcon icon={faSnowboarding} className="me-2 text-accent" /> Snowboarding & Swimming</li>
            <li><FontAwesomeIcon icon={faGamepad} className="me-2 text-accent" /> Genshin Impact & Palworld & Elden's Ring & watching others play Dyson Sphere</li>
            <li><FontAwesomeIcon icon={faBook} className="me-2 text-accent" /> Reading Novels</li>
            <li><FontAwesomeIcon icon={faCode} className="me-2 text-accent" /> Config my Arch Linux & Neovim </li>
            <li><FontAwesomeIcon icon={faInstagram} className="me-2 text-accent" /> <a href="https://www.instagram.com/cakesssss_ruili/" target="_blank" rel="noopener noreferrer">Baking Instagram</a></li>
          </ul>
        </section>

      </Container>

      <footer className="footer-custom text-center py-4">
        <Container>
          <p>Designed & Built by Mary, 2025</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
