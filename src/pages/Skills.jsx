import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://static.cdnlogo.com/logos/d/3/django.svg" },
  { name: "Django REST Framework", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/djangorest/djangorest-original.svg" },

  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Framer Motion", logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },

  { name: "Render", logo: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4" },


  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },

  { name: "JWT Authentication", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },

  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  { name: "Power BI", logo: "https://logo.svgcdn.com/logos/microsoft-power-bi.svg" },
];

const ROWS = [
  [
    {
      title: "Programming Languages",
      items: ["Python", "JavaScript (ES6+)",],
    },
    {
      title: "Frontend Technologies",
      items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Framer Motion"],
    },
    {
      title: "Backend Technologies",
      items: ["Django", "Django REST Framework", "JWT Authentication", "REST APIs"],
    },
    {
      title: "Databases & DevOps",
      items: ["MySQL (Aiven)", "SQLite", "Supabase", "Git", "GitHub", "Render"],
    },
  ],
  [
    {
      title: "Core Technical Skills",
      items: [
        "Full Stack Web Development",
        "API Development",
        "Authentication & Authorization",
        "Admin Dashboard Development",
        "Cloud Deployment",
      ],
    },
    {
      title: "Professional Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Clean Code Practices",
        "Time Management",
        "Continuous Learning",
        "Leadership Quality"
      ],
    },
  ],
];


export default function Skills() {
  const stageRef = useRef();
  const isMobile = window.innerWidth <= 768;


  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * (isMobile ? 30 : 100);
      const dy = (Math.random() - 0.5) * (isMobile ? 30 : 100);

      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 5000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }, []);

return (
  <section className="skills-container" id="skills">

    {/* Header */}
    <motion.div
      className="skills-header"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl text-cyan-400 font-semibold mb-3">My Skills</h2>
      <div className="w-28 h-[2px] bg-cyan-400 mx-auto mb-6"></div>
      <p className="text-gray-400 text-lg max-w-xl mx-auto">
        ✨ Technical expertise blended with creativity — explore my core competencies below.
      </p>
    </motion.div>

    {/* Floating Skills */}
    <motion.div
      className="skills-stage relative mx-auto mb-20"
      ref={stageRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        width: "100%",
        height: isMobile ? "230px" : "550px",
        borderRadius: "25px",
        background: "radial-gradient(circle at 50% 50%, #0a0a0a, #101010)",
        overflow: "hidden",
        boxShadow: "inset 0 0 60px rgba(0,255,255,0.07)",
        position: "relative",
      }}
    >
      {SKILLS.map((s, i) => (
        <motion.div
          key={s.name}
          className="skill-circle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          whileHover={!isMobile ? {
            scale: 1.3,
            boxShadow: "0 0 35px 10px rgba(0,255,255,0.6)",
            background: "rgba(0,255,255,0.12)",
          } : {}}
          style={{
            width: isMobile ? "34px" : "110px",
            height: isMobile ? "34px" : "110px",
            borderRadius: "50%",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,255,255,0.06)",
            border: "1px solid rgba(0,255,255,0.25)",
            backdropFilter: "blur(8px)",
            cursor: "pointer",
          }}
        >
          <motion.img
            src={s.logo}
            alt={s.name}
            style={{
              width: isMobile ? "16px" : "50px",
              height: isMobile ? "16px" : "50px",
              objectFit: "contain",
              marginBottom: isMobile ? "2px" : "5px",
            }}
          />

          <span
            style={{
              color: "rgba(180,255,255,0.9)",
              fontSize: isMobile ? "6px" : "13px",
              fontWeight: 500,
            }}
          >
            {s.name}
          </span>
        </motion.div>
      ))}
    </motion.div>

    {/* Skills Table */}
    <div className="skills-table">
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="skills-row">
          {row.map((col, colIndex) => (
            <motion.div
              key={col.title}
              className="skill-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.6,
                delay: (rowIndex + colIndex) * 0.1,
              }}
            >
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item, i) => (
                  <motion.li key={i} whileHover={{ x: 6, color: "#00ffc8" }}>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      ))}
    </div>

  </section>
);

}
