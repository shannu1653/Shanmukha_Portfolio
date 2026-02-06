import React from "react";
import { motion } from "framer-motion";
import "../CSS/Resume.css";

export default function Resume() {
  return (
    <section className="resume-container">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="resume-title">📄 Resume</motion.h2>
        <p className="resume-subtitle">A quick glance at my journey.</p>

        {/* Profile Header */}
        <motion.div className="resume-profile">
          <div className="profile-info">
            <h3>👨‍💻 SHANMUKHA PENTA</h3>
            <p>Master of Computer Applications (MCA) | University Arts and Science College, Kakatiya University</p>
            <p>📍 Hanumakonda, Warangal, Telangana</p>
            <p>✉️ pentashanmukha2002@gmail.com | 📞 +91 8096085857</p>
          </div>

          <div className="profile-summary">
            <strong>Professional Summary:</strong>
            <p>
              MCA graduate with practical experience in Python-based full-stack development,
              including Django, RESTful services, and SQL. Seeking an entry-level role to
              contribute to scalable web applications. I am passionate about learning new
              technologies and seeking opportunities to contribute to real-world software
              projects as a Python Full-Stack Developer.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <div className="resume-section">
          <h4>🎓 Education</h4>
          <ul>
            <li>
              <strong>Master of Computer Applications (MCA)</strong> — U.A.S.C (Kakatiya University, Telangana, 2023–2025)<br/>
              <span>GPA: 7.56</span>
            </li>

            <li>
              <strong>Bachelor of Science (MSCS)</strong> — Maharajah's (Autonomous) College (Andhra University, 2023)<br/>
              <span>Percentage: 80%</span>
            </li>

            <li>
              <strong>12th Board — Vasu Junior College</strong> (Board of Intermediate Education AP, 2020)<br/>
              <span>Percentage: 80%</span>
            </li>

            <li>
              <strong>10th Board — AP Model School</strong> (Board of Secondary Education AP, 2018)<br/>
              <span>Percentage: 93%</span>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div className="resume-section">
          <h4>💼 Projects</h4>
          <ul>
            <li>MCA Study Hub – Academic Notes & Resource Platform</li>
            <li>Smart EV Station Locator – Python Full Stack Application</li>
            <li>Smart Canteen Menu System – Django Full Stack Ordering System</li>
            <li>Personal Portfolio Website – React Application</li>
            <li>Smart Traffic Management System (IoT-Based)</li>
            <li>Food Mart – E-Commerce Web Application</li>
            <li>Event Handler – Event Management Web Application</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h4>⚙️ Skills</h4>

          <div className="skills-list">
            {[
              "Python","Django","React","MySQL","Javascript","DSA","Git","GitHub",
              "Html5","Css3","Bootstrap","Numpy","Pandas","Matplotlib","PowerBi",
              "Problem Solving","Data Visualization","Teamwork","Adaptability","Creativity"
            ].map(skill => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="resume-links">
          <a href="https://leetcode.com/u/Shanmukha1653/" target="_blank">🏆 LeetCode</a>
          <a href="https://github.com/shannu1653" target="_blank">💻 GitHub</a>
          <a href="https://www.linkedin.com/in/shanmukhapenta/" target="_blank">💼 LinkedIn</a>
        </div>

        {/* PDF */}
        <div className="resume-pdf">
          <iframe src="/resume.pdf" title="Resume"></iframe>
        </div>

        {/* Download */}
        <a className="resume-download" href="/resume.pdf" download>
          ⬇️ Download Resume
        </a>
      </motion.div>
    </section>
  );
}
