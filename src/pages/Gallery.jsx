import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
personal: [
  {
    id: 1,
    caption: "Exploring the historic vibes of Golconda Fort 🏰✨ Travel, culture, and inspiration in one place.",
    photos: ["/gallery/golconda1.jpg"],
  },
  {
    id: 2,
    caption: "Walking through history at Golconda 🧭 A refreshing escape that fuels creativity.",
    photos: ["/gallery/golconda2.jpg"],
  },
  {
    id: 3,
    caption: "Golconda Fort visit 🏰 Capturing moments where heritage meets passion for travel.",
    photos: ["/gallery/golconda3.jpg"],
  },
  {
    id: 5,
    caption: "Rameswaram vibes 🌊🛕 A calm mind and grateful heart after this sacred visit.",
    photos: ["/gallery/rameswaram2.jpg"],
  },
  {
    id: 4,
    caption: "Spiritual journey to Rameswaram Temple 🛕✨ Finding peace and positive energy.",
    photos: ["/gallery/rameswaram1.jpg"],
  },
  
  {
    id: 6,
    caption: "Blessed moments at Rameswaram 🛕 Traveling teaches balance between life and work.",
    photos: ["/gallery/rameswaram3.jpg"],
  },
  {
  id: 7,
  caption: "NCC journey 🇮🇳 Learning leadership, discipline, and teamwork through real-world training experiences.",
  photos: ["/gallery/ncc1.jpg"],
},
{
  id: 9,
  caption: "NCC Camp Leadership 🏕️ Leading with responsibility, teamwork, and discipline during training camps.",
  photos: ["/gallery/ncc-camp.jpeg"],
},
{
  id: 10,
  caption: "Stronger together 🤝 Moments with friends that taught unity, discipline, and lifelong teamwork.",
  photos: ["/gallery/friends-unity.jpeg"],
},
],


  projects: [
  {
    id: 1,
    caption:
      "🎓 MCA Study Hub – Full-stack academic platform for accessing notes and previous-year papers with JWT auth, admin dashboard, cloud PDFs, and dark/light mode.",
    photos: [
      "/gallery/mcastudy1.png",
      "/gallery/mcastudy2.png",
      "/gallery/mcastudy3.png",
      "/gallery/mcastudy4.png",
    ],
  },
  {
    id: 2,
    caption:
      "⚡ Smart EV Station Locator – Python full-stack app to search nearby charging stations, view availability, and manage stations via Django Admin.",
    photos: [
      "/gallery/ev1.jpg",
      "/gallery/ev2.jpg",
      "/gallery/ev3.jpg",
      "/gallery/ev4.jpg",
    ],
  },
  {
    id: 3,
    caption:
      "🍽 Smart Canteen Menu System – Django full-stack ordering system with cart, authentication, admin CRUD, analytics, and production deployment.",
    photos: [
      "/gallery/canteen1.jpg",
      "/gallery/canteen2.jpg",
      "/gallery/canteen3.jpg",
      "/gallery/canteen4.jpg",
    ],
  },
  {
    id: 4,
    caption:
      "💼 Personal Portfolio – React-based responsive portfolio showcasing projects, skills, and animations using Framer Motion.",
    photos: [
      "/gallery/portfolio1.png",
      "/gallery/portfolio2.png",
      "/gallery/portfolio3.png",
      "/gallery/portfolio4.png",
    ],
  },
],

 achievements: [
  {
    id: 1,
    caption: "🥈 Won 2nd Prize in Webathon conducted by 10Coders for building a full-stack web application.",
    photos: ["/gallery/webathon.jpg"],
  },
  {
    id: 2,
    caption: "🥈 Secured 2nd Prize in Coding Challenge for problem-solving and algorithmic skills.",
    photos: ["/gallery/codingchallenge.png"],
  },
],

};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              <div
                className={`photo-grid ${
                  post.photos.length > 1 ? "multi" : "single"
                }`}
              >
                {post.photos.map((src, i) => (
                  <motion.div
                    key={i}
                    className="photo-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    onClick={() => openZoom(post, i)}
                  >
                    <img src={src} alt="gallery" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
