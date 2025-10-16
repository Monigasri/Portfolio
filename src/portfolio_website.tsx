import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Users, Award, BookOpen, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const projects = [
  
  {
    icon: '❓',
    category: 'Web App',
    title: 'TryQuizz',
    description: 'Interactive quiz application with customizable questions, scoring system, and instant feedback for learners.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    icon: '👗',
    category: 'AI Project',
    title: 'StyleBot',
    description: 'AI-driven chatbot that provides personalized fashion tips and outfit suggestions.',
    tags: ['React', 'Node.js', 'OpenAI API', 'TailwindCSS']
  },
  {
    icon: '🌍',
    category: 'Full Stack',
    title: 'AI Trip Planner',
    description: 'Generates personalized travel itineraries with places to visit, stay, and eat, based on duration and city.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API']
  },
  // {
  //   icon: '🔢',
  //   category: 'Frontend',
  //   title: 'Guess the Number',
  //   description: 'Fun browser-based game where users guess a randomly generated number with hints.',
  //   tags: ['HTML', 'CSS', 'JavaScript']
  // },
  {
    icon: '📅',
    category: 'Frontend',
    title: 'Simple Calendar',
    description: 'Lightweight web calendar to view and manage dates in a clean interface.',
    tags: ['HTML', 'CSS']
  },
  {
    icon: '� qr',
    category: 'Web App',
    title: 'QR Generator',
    description: 'Web application to generate QR codes instantly from text or URLs.',
    tags: ['PHP', 'HTML', 'CSS']
  },
  {
    icon: '📝',
    category: 'Frontend',
    title: 'Thoughts',
    description: 'A simple notes app to record and organize personal thoughts with a clean interface.',
    tags: ['HTML', 'CSS', 'JavaScript']
  }
];


  const skills = {
    Frontend: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    Backend: ['Node.js', 'Express.js', 'Python', 'Java', 'REST APIs', 'GraphQL'],
    Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
    'Tools & Others': ['Git', 'Figma', 'VS Code']
  };

  

  const certifications = [
  {
    icon: '🟦',
    title: 'Introduction to Node.js (LFW111)',
    issuer: 'The Linux Foundation',
    date: 'September 2024',
    description: 'Completed Introduction to Node.js certification, gaining foundational knowledge in Node.js development.',
    tags: ['Node.js', 'JavaScript', 'Backend']
  },
  {
    icon: '💡',
    title: "CodHer'25 Participation",
    issuer: 'ACM-CEG, Anna University',
    date: 'February 2025',
    description: "Participated in CodHer'25, a 12-hour hackathon, showcasing teamwork and innovative problem-solving skills.",
    tags: ['Hackathon', 'Teamwork', 'Problem Solving']
  },
  {
    icon: '🌍',
    title: 'Ideathon 2025 Participation',
    issuer: 'SCRS USA Center, Florida International University (FIU)',
    date: 'March 2025',
    description: 'Active participation in IDEATHON 2025 as part of Team Ladybugs, presenting innovative solutions to real-world challenges.',
    tags: ['Innovation', 'Collaboration', 'Global Challenge']
  },
  {
    icon: '🐍',
    title: 'The Joy of Computing using Python',
    issuer: 'NPTEL (IIT Madras)',
    date: 'Jan - Apr 2025',
    description: 'Completed 12-week NPTEL course "The Joy of Computing using Python" with strong performance and practical coding experience.',
    tags: ['Python', 'Programming', 'Problem Solving']
  },
  {
    icon: '🚓',
    title: 'Hackathon 2025 — Certificate of Appreciation',
    issuer: 'Thoothukudi District Police',
    date: 'April 12, 2025',
    description: 'Certificate of Appreciation for submitting a working prototype at Hackathon 2025; recognized for innovation and dedication.',
    tags: ['Hackathon', 'Prototype', 'Innovation']
  },
  {
    icon: '🌦️',
    title: 'Climate Data Analysis with Python',
    issuer: 'UKCEH LearnWorlds',
    date: 'November 2024',
    description: 'Successfully completed training on Climate Data Analysis with Python, gaining hands-on experience in data science for climate research.',
    tags: ['Python', 'Climate Data', 'Data Science']
  },
  {
    icon: '🟩',
    title: 'Getting Started with MongoDB Atlas',
    issuer: 'MongoDB, Inc.',
    date: 'July 2024',
    description: 'Successfully completed "Getting Started with MongoDB Atlas".',
    tags: ['MongoDB', 'Databases', 'Cloud']
  },
  {
    icon: '🧑‍💻',
    title: 'Web Development',
    issuer: 'Tech Vedhu',
    date: 'Jan - Feb 2025',
    description: 'Successfully completed "Web Development" training; demonstrated keen enthusiasm and practical web development skills.',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript']
  },
  {
    icon: '☁️',
    title: 'Getting Started with Azure DevOps Boards',
    issuer: 'Coursera Project Network',
    date: 'October 5, 2023',
    description: 'Completed online Coursera project "Getting Started with Azure DevOps Boards", gaining foundational knowledge in agile project tracking and DevOps boards.',
    tags: ['Azure DevOps', 'Agile', 'Project Management']
  }
];





  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0e1a', color: '#e2e8f0', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: isScrolled ? 'rgba(10, 14, 26, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.2)' : 'none',
        padding: '1rem 2rem',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>MS</div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.toLowerCase() ? '#8b5cf6' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                onMouseLeave={(e) => e.currentTarget.style.color = activeSection === item.toLowerCase() ? '#8b5cf6' : '#94a3b8'}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
              const footer = document.querySelector('footer');
              if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
              }
              }}
              style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
              }}
            >
              <Mail size={18} /> Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ padding: '8rem 2rem 4rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            {/* <div style={{ fontSize: '1rem', color: '#8b5cf6', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>MGM</div> */}
            <h1 style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2'
            }}>
              MONIGASRI<br />MUTHUKRISHNAN
            </h1>
            <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '1rem' }}>Full Stack Developer & Problem Solver</p>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem', lineHeight: '1.8' }}>
              Passionate about creating innovative solutions and building scalable applications with modern technologies. Let's turn ideas into reality.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => scrollToSection('projects')}
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Github size={20} /> View Projects
              </button>
                <button
                  onClick={() => {
                  // Force download by creating a temporary link to the direct download URL
                  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1MyR74_MUUeEC_kbKmbKEbnj_Be1nU9Ik';
                  const a = document.createElement('a');
                  a.href = downloadUrl;
                  a.download = 'Monigasri_CV.pdf';
                  a.target = '_blank';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  }}
                  style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '2px solid #8b5cf6',
                  color: '#8b5cf6',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                  }}
                >
                  <Mail size={20} /> Download CV
                </button>
                <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: '#1e293b',
                  border: 'none',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                >
                <Mail size={20} /> Contact Me
                </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: '#1e293b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8rem'
              }}>
                👨‍💻
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '50px',
              right: '50px',
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              👨
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={32} color="#8b5cf6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '4rem 2rem', background: '#0f172a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, white 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            About <span style={{ color: '#8b5cf6' }}>Me</span>
          </h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <p style={{
                textAlign: 'center',
                color: '#cbd5e1',
                fontSize: '1.15rem',
                lineHeight: '1.8',
                margin: 0,
                letterSpacing: '0.04em',
                maxWidth: '1300px'
                }}>
                I am <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Monigasri Muthukrishnan</span>, a B.E. Computer Science and Engineering student with a keen interest in growth, learning, and professional development. I am passionate about building my career with dedication, creativity, and a positive approach, aspiring to contribute meaningfully as a <span style={{ color: '#8b5cf6', fontWeight: 600 }}>Software Engineer</span>.
                </p>
            </div>

          {/* Education */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem', marginBottom: '2rem', color: '#8b5cf6' }}>
              <BookOpen size={32} /> Education
            </h3>
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.5rem', color: 'white' }}>Bachelor of Engineering in Computer Science</h4>
                <span style={{ color: '#8b5cf6', fontSize: '1.1rem', fontWeight: 'bold' }}>2023-2027</span>
              </div>
              <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>Bannari Amman Institue Of Technology, Sathyamangalam</p>
              <p style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>CGPA: 8/10</p>
              <p style={{ color: '#64748b' }}>Specialized in Software Engineering, UI/UX Designer, Fullstack Devolper.</p>
            </div>
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '1.5rem', color: 'white' }}>Higher Secondary Certificate</h4>
                <span style={{ color: '#8b5cf6', fontSize: '1.1rem', fontWeight: 'bold' }}>2021-2023</span>
              </div>
              <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>S.E.V Higher Secondary School</p>
              <p style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>91.3%</p>
              <p style={{ color: '#64748b' }}>Mathematics, Physics, Chemistry with Computer Science</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem', marginBottom: '2rem', color: '#8b5cf6' }}>
              <Code size={32} /> Technical Skills
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} style={{
                  background: '#1e293b',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <h4 style={{ color: '#8b5cf6', fontSize: '1.3rem', marginBottom: '1rem' }}>{category}</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {items.map(skill => (
                      <span key={skill} style={{
                        background: 'rgba(139, 92, 246, 0.1)',
                        color: '#94a3b8',
                        padding: '0.5rem 1rem',
                        borderRadius: '6px',
                        fontSize: '0.9rem'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            My <span style={{ color: '#8b5cf6' }}>Projects</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', fontSize: '1.1rem' }}>
            A collection of projects that showcase my skills and passion for development. Each project represents a unique challenge and learning experience.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {projects.map((project, idx) => (
              <div key={idx} style={{
                background: '#1e293b',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>{project.icon}</div>
                  <div>
                    <span style={{
                      background: 'rgba(139, 92, 246, 0.2)',
                      color: '#8b5cf6',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem'
                    }}>
                      <Code size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: '#94a3b8',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
  {/* GitHub Code Button */}
  <button
    style={{
      background: 'transparent',
      border: '2px solid #8b5cf6',
      color: '#8b5cf6',
      padding: '0.6rem 1.2rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flex: 1,
    }}
    onClick={() => {
      const codeLinks = [
        "https://github.com/Monigasri/TryQuizz",
        "https://github.com/Monigasri/stylebot",
        "https://github.com/Monigasri/travel",
        "https://github.com/Monigasri/simple-Calender-",
        "https://github.com/Monigasri/QR-CODE-GENERATOR",
        "https://github.com/Monigasri/thought",
      ];
      window.open(codeLinks[idx], "_blank");
    }}
  >
    <Github size={16} /> Code
  </button>

  {/* Live Demo Button */}
  <button
    style={{
      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      border: 'none',
      color: 'white',
      padding: '0.6rem 1.2rem',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      flex: 1,
    }}
    onClick={() => {
      const liveLinks = [
        "https://monigasri.github.io/TryQuizz/",
        "https://monigasri.github.io/stylebot/",
        "https://monigasri.github.io/travel/",
        "https://monigasri.github.io/simple-Calender-/",
        "https://monigasri.github.io/QR-CODE-GENERATOR/",
        "https://monigasri.github.io/thought/",
      ];
      window.open(liveLinks[idx], "_blank");
    }}
  >
    Live
  </button>
</div>

              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              border: 'none',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
              }}
              onClick={() => window.open('https://github.com/Monigasri', '_blank')}
            >
              <Github size={20} /> View All on GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" style={{ padding: '4rem 2rem', background: '#0f172a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Certificates & <span style={{ color: '#8b5cf6' }}>Achievements</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Continuous learning and professional development through industry-recognized certifications and specialized training programs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {certifications.map((cert, idx) => (
              <div key={idx} style={{
                background: '#1e293b',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    flexShrink: 0
                  }}>
                    {cert.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                      <h3 style={{ color: 'white', fontSize: '1.3rem' }}>{cert.title}</h3>
                    </div>
                    <p style={{ color: '#8b5cf6', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                      <Award size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.6' }}>{cert.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {cert.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: '#94a3b8',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  style={{
                  background: 'transparent',
                  border: '2px solid #8b5cf6',
                  color: '#8b5cf6',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  justifyContent: 'center'
                  }}
                  onClick={() => {
                  const certLinks = [
                    "https://drive.google.com/file/d/145M6cyRK5v3UtNppHd7NXJ7J4ZrIpRPM/view?usp=sharing",
                    "https://drive.google.com/file/d/1iHogxq8zy25atYAOcJynHwDl27c8AOLy/view?usp=sharing",
                    "https://drive.google.com/file/d/1HObFWM6X_1Ee_-qsCdVXcjDT-WXLzbQB/view?usp=sharing",
                    "https://drive.google.com/file/d/1J08rKS8fDWn1-iKu_0q03_PGionJg1b7/view?usp=sharing",
                    "https://drive.google.com/file/d/19RKfRzli9Z6gdceUdvKXRUYbCTuP7eA0/view?usp=sharing",
                    "https://drive.google.com/file/d/1ZWXpFM9LOwpYneW1cEa3y4Dbmx_q0_4q/view?usp=sharing",
                    "https://drive.google.com/file/d/1o25vlWk4DHeNnuaLI79mtLAqAezRCVCM/view?usp=sharing",
                    "https://drive.google.com/file/d/1QiPOlgZNG6abwVste-TkRpk__5vAfYBO/view?usp=sharing",
                    "https://drive.google.com/file/d/17vhBK15HDpRHBKBzU8sAG9_IGTqcFkNI/view?usp=sharing"
                  ];
                  window.open(certLinks[idx], "_blank");
                  }}
                >
                  <Award size={16} /> View Credential
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Get In <span style={{ color: '#8b5cf6' }}>Touch</span>
          </h2><br></br>
          {/* <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p> */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Let's Connect</h3>
              <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.6' }}>
                I'm always interested in new opportunities and exciting projects. Whether you're looking for a developer to join your team or have a project you'd like to discuss, I'd love to hear from you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{
                  background: '#1e293b',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={24} color="#8b5cf6" />
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Email</div>
                    <div style={{ color: 'white', fontSize: '1.1rem' }}>monigasri07@gmail.com</div>
                  </div>
                </div>
                <div style={{
                  background: '#1e293b',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={24} color="#8b5cf6" />
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Phone</div>
                    <div style={{ color: 'white', fontSize: '1.1rem' }}>+91 7904634576</div>
                  </div>
                </div>
                <div style={{
                  background: '#1e293b',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={24} color="#8b5cf6" />
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Location</div>
                    <div style={{ color: 'white', fontSize: '1.1rem' }}>Madurai, Tamil Nadu</div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              background: '#1e293b',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Send a Message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ color: '#cbd5e1', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  Contact me if you are interested in hiring me or want to discuss job opportunities.
                </p>
                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Your Name</label>
                  <input type="text" placeholder="Your Name" style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#0f172a',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '1rem'
                  }} />
                </div>
                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Email</label>
                  <input type="email" placeholder="your.email@example.com" style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#0f172a',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '1rem'
                  }} />
                </div>
                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Message</label>
                  <textarea placeholder="Let me know how I can help you..." rows={5} style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#0f172a',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }} />
                </div>
                <button type="submit" style={{
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', background: '#0f172a', borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '3rem', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                <span style={{ color: '#8b5cf6' }}>MONIGASRI</span> MUTHUKRISHNAN
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.6' }}>
                Full Stack Developer passionate about creating innovative solutions and building scalable applications with modern technologies.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://github.com/Monigasri"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6',
                    textDecoration: 'none'
                  }}
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/monigasri-m-9281a12b0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6',
                    textDecoration: 'none'
                  }}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:monigasri07@gmail.com"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(139, 92, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map(link => (
                  <button key={link} onClick={() => scrollToSection(link.toLowerCase())} style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '1rem',
                    padding: '0.25rem 0'
                  }}>
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>Get In Touch</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  <div style={{ marginBottom: '0.25rem', fontWeight: 'bold', color: 'white' }}>Email</div>
                  monigasri07@gmail.com
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  <div style={{ marginBottom: '0.25rem', fontWeight: 'bold', color: 'white' }}>Location</div>
                  Maduarai, Tamil Nadu
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  <div style={{ marginBottom: '0.25rem', fontWeight: 'bold', color: 'white' }}>Available for</div>
                  Full-time & Freelance projects
                </div>
              </div>
            </div>
          </div>
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#94a3b8',
            fontSize: '0.95rem'
          }}>
            <div>© 2025 Monigasri Muthukrishnan. Made with ❤️ & React.js</div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
              background: 'none',
              border: 'none',
              color: '#8b5cf6',
              cursor: 'pointer',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #8b5cf6;
        }
        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}