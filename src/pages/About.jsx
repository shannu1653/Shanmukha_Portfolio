import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* --- About Me + Education Section --- */}
      <motion.div className="about-card"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>

        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Shanmukha Penta</strong> — an aspiring{" "}
          <strong>Python Fullstack Developer</strong> and{" "}
          <strong>Django Learning enthusiast</strong> I enjoy transforming ideas into efficient and user-friendly web applications.
          I’m deeply focused on building intelligent systems that solve real-world problems through data and automation.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond coding, I focus on building efficient backend systems using <strong>Django,</strong> designing <strong>RESTful APIs,</strong> and managing structured data with <strong>SQL databases.</strong>{" "}          
          I work on clean architecture, secure authentication, and smooth frontend–backend integration to deliver scalable and maintainable web applications.        
          </p>

        <p>
            Recently completed MCA graduate with practical knowledge of Python, Django, REST APIs, and SQL databases.
            Interested in building scalable web applications and learning industry-level development practices.
        </p>

        {/* --- Education Section --- */}
        <motion.div className="education-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div className="education-cards">

            {/* --- Education Card 1 --- */}
            <motion.div className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
             
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  M.C.A (Master of Computer Applications)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>University Arts and Science College (Kakatiya University)</strong> — Hanumakonda,
                  Telangana
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Kakatiya University | GPA: 7.56
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>2023 – 2025</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div className="edu-card"

              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Undergraduate Degree (UG): Bachelor of Science (MSCS)
                  (Mathematics, Statistics, Computer Science) 
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Maharajah's (Autonomous) College</strong> — Vizianagaram
                  Vizianagaram, Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Andhra University | Percentage: 85%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2023</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div className="edu-card"

              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Intermediate (10+2) – MPC
                  (Mathematics, Physics, Chemistry)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Vasu Junior College</strong> — Bobbili,
                  Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Board of Intermediate Education, Andhra Pradesh | Percentage: 80%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div className="edu-card"

              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary School Certificate (SSC) – 10th
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>AP Model School</strong> — Perumali,
                  Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Board of Secondary Education, Andhra Pradesh| Percentage: 93%
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2018</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
