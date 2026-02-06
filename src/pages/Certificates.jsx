import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../CSS/Certificates.css";


// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Webathon – 2nd Prize",
      org: "10Coders",
      date: "2025",
      img: "/certs/webathon.jpg",
      link: "/certs/webathon.jpg",
    },
    {
      title: "Coding Challenge – 2nd Prize",
      org: "College Technical Event",
      date: "2025",
      img: "/certs/codingchallenge.jpg",
      link: "/certs/codingchallenge.jpg",
    },
    {
      title: "Cisco Data Analytics",
      org: "Cisco Networking Academy",
      date: "2025",
      img: "/certs/cisco-data-analytics.jpg",
      link: "/certs/cisco-data-analytics.jpg",
    },
    {
      title: "Frontend Development Internship",
      org: "APSCHE",
      date: "2023",
      img: "/certs/apsche-frontend.jpg",
      link: "/certs/apsche-frontend.jpg",
    },
    {
      title: "AI/ML Virtual Internship",
      org: "VCUBE Software Solutions",
      date: "2025",
      img: "/certs/vcube-aiml.jpg",
      link: "/certs/vcube-aiml.jpg",
    },
    
    
  ],
  other: [
    {
      title: "NCC 'C' Certificate",
      org: "National Cadet Corps",
      date: "2024",
      img: "/certs/ncc-certificate.jpg",
      link: "/certs/ncc-certificate.jpg",
    },
    {
      title: "Power BI Workshop",
      org: "OfficeMaster",
      date: "2025",
      img: "/certs/powerbi-workshop.jpg",
      link: "/certs/powerbi-workshop.jpg",
    },
    {
      title: "AWS Solutions Architecture Virtual Experience Program",
      org: "Amazon Web Services (Forage)",
      date: "2022",
      img: "/certs/aws-solutions-architecture.jpg",
      link: "/certs/aws-solutions-architecture.jpg",
    },
    {
      title: "Salesforce Developer Virtual Internship",
      org: "SmartInternz / Salesforce",
      date: "2022",
      img: "/certs/salesforce-internship.jpg",
      link: "/certs/salesforce-internship.jpg",
    },
    
    
  ],
};


export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div className="card" style={{ background: "#111", borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: 4 }}>Certificates 🏅</h2>
        <p className="lead" style={{ color: "#aaa" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={tab === t ? "tab active" : "tab"}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          className="certs-grid"
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                className="cert card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
                }}
                style={{
                  background: "#1a1a1a",
                  borderRadius: 12,
                  padding: 16,
                  color: "#fff",
                }}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: 160,
                    borderRadius: 10,
                    objectFit: "cover",
                    marginBottom: 12,
                  }}
                />
                <strong style={{ fontSize: 16 }}>{c.title}</strong>
                <div className="muted" style={{ fontSize: 13, color: "#bbb" }}>
                  {c.org} • {c.date}
                </div>

                <div style={{ marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => setSelectedCert(c)}
                    style={{
                      background: "#007bff",
                      border: "none",
                      color: "white",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 10,
                boxShadow: "0 0 25px rgba(255,255,255,0.2)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
