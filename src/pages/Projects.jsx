import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'



const PROJECTS = [
   {
    title: '🧑‍💻 Personal Portfolio',
    desc: 'Modern responsive developer portfolio with gallery, certificates, resume and premium UI animations.',
    ss: '/assets/skills/portfolio.png',
    tech: ['React', 'Vite', 'CSS', 'Framer Motion'],
    live: 'https://shanmukha-portfolio-three.vercel.app',
    code: 'https://github.com/shannu1653/Shanmukha_Portfolio'
  },
  {
    title: '🎓 MCA Study Hub',
    desc: 'Full-stack academic platform for MCA students to upload, download notes & previous year papers with JWT auth and admin panel.',
    ss: '/assets/skills/mcastudyhub.png',
    tech: ['React', 'Django REST', 'MySQL', 'JWT'],
    live: 'https://mca-study-hub.vercel.app',
    code: 'https://github.com/shannu1653/mca-study-hub.git'
  },
  {
    title: '🎓 Smart EV Station Loc',
    desc: 'Full-stack academic platform for MCA students to upload, download notes & previous year papers with JWT auth and admin panel.',
    ss: '/assets/skills/smartev.png',
    tech: ['Javascript', 'Django REST', 'MySQL', 'JWT'],
    live: 'https://tharun123-dev.github.io/EVStationLocatorr/frontend/index.html',
    code: 'https://github.com/shannu1653/EVStationLocator.git'
  },
  {
    title: '🍽 Smart Canteen Menu',
    desc: 'Food ordering and management system for colleges with admin control and student dashboard.',
    ss: '/assets/skills/smartcanteen.jpeg',
    tech: ['Python', 'Django', 'HTML', 'CSS'],
    live: 'https://smart-menu-canteen.onrender.com/',
    code: 'https://github.com/shannu1653/smart_menu_canteen.git'
  },

  {
    title: '🎫 Premium Eventbrite ',
    desc: 'Event booking platform with auth, wishlist, filters, CRUD events and localStorage powered flow.',
    ss: '/assets/skills/eventhandler.png',
    tech: ['JavaScript', 'HTML', 'CSS','bootstrap'],
    live: 'https://shannu1653.github.io/Event_Handling',
    code: 'https://github.com/shannu1653/Event_Handling.git'
  },

  {
  title: '🚦 Traffic Management System',
  desc: 'Role-based dashboard system for admins, officers and users with charts, analytics and JWT auth.',
  ss: '/assets/skills/smartcanteen.jpeg',
  tech: ['React', 'Django', 'MySQL'],
  live: '#',
  code: 'https://github.com/shannu1653/traffic-management-system-backend.git'
},
  {
    title: '📊 FoodMart',
    desc: 'CSV profiling tool for data analysis and visualization.',
    ss: '/assets/skills/foodmart.png',
    tech: ['Html', 'Css', 'Bootstrap'],
    live: 'https://shannu1653.github.io/Farm2Home/',
    code: 'https://github.com/shannu1653/Farm2Home.git'
  }
]


export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
