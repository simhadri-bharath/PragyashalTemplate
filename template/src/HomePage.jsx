import React, { useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// --- Animated SVG Divider ---
const WaveDivider = ({ flip = false, color = "#e8f5e9" }) => (
  <div className={flip ? "rotate-180" : ""} style={{ lineHeight: 0 }}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="block w-full h-20"
    >
      <motion.path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill={color}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

// --- Section Reveal Wrapper ---
const RevealSection = ({ children, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// --- Animated Stat Counter ---
const AnimatedCounter = ({ value }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 20;
    let timer = setInterval(() => {
      start += Math.ceil(end / 50);
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toLocaleString()}</span>;
};

// --- FlipCard Component ---
const FlipCard = ({
  frontTitle,
  frontContent,
  backTitle,
  backContent,
  icon
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full h-[260px] mx-auto"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      tabIndex={0}
      aria-label={`${frontTitle} card, hover or focus to flip`}
    >
      <motion.div
        className="w-full h-full relative cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full z-10 bg-white rounded-2xl flex flex-col items-center justify-center shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="mb-3 text-4xl"
          >
            {icon}
          </motion.div>
          <div className="text-xl font-semibold text-blue-700 mb-1">{frontTitle}</div>
          <div className="text-gray-600 text-sm">{frontContent}</div>
        </div>
        {/* Back Side */}
        <div
          className="absolute w-full h-full z-20 bg-blue-50 rounded-2xl flex flex-col items-center justify-center shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="text-xl font-semibold text-green-700 mb-1">{backTitle}</div>
          <div className="text-gray-700 text-sm">{backContent}</div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Courses Data (with hues for animation) ---
const courses = [
  {
    title: "Cardiology Essentials",
    description: "Master the fundamentals of heart health and cardiac care.",
    icon: "❤️",
    hueA: 340,
    hueB: 10,
  },
  {
    title: "Mental Health & Psychology",
    description: "Explore mental wellness, therapy, and patient care.",
    icon: "🧠",
    hueA: 20,
    hueB: 40,
  },
  {
    title: "Vaccination & Immunology",
    description: "Learn about vaccines, immunization schedules, and safety.",
    icon: "💉",
    hueA: 60,
    hueB: 90,
  },
  {
    title: "Emergency Medicine",
    description: "Handle critical cases and emergency protocols.",
    icon: "🚑",
    hueA: 80,
    hueB: 120,
  },
  {
    title: "Medical AI & Data Science",
    description: "Apply AI in diagnostics and healthcare analytics.",
    icon: "🤖",
    hueA: 205,
    hueB: 245,
  },
  {
    title: "Telemedicine Practice",
    description: "Deliver care remotely with telehealth best practices.",
    icon: "📞",
    hueA: 260,
    hueB: 290,
  }
];

// --- Animated Course Card with Scroll and Hover Effect ---
const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
    scale: 1,
    z: 0,
    boxShadow: "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)"
  },
  onscreen: {
    y: 50,
    opacity: 1,
    scale: 1,
    z: 0,
    rotate: -10,
    boxShadow: "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.06,
    z: -30,
    boxShadow: "0 12px 32px 0 rgba(0,0,0,0.18)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const splashShape =
  "M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z";

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function AnimatedCourseCard({ course, i }) {
  const background = `linear-gradient(306deg, ${hue(course.hueA)}, ${hue(
    course.hueB
  )})`;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hover"
      viewport={{ amount: 0.8, once: true }}
      variants={cardVariants}
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 20,
        minWidth: 260,
        minHeight: 350,
        flex: "1 1 320px",
        maxWidth: 320,
        cursor: "pointer",
        perspective: 1000,
        background: "transparent",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background,
          clipPath: `path("${splashShape}")`,
          zIndex: 1,
        }}
        variants={{
          hover: { scale: 1.08, y: 10, transition: { type: "spring", stiffness: 200, damping: 20 } },
          onscreen: { scale: 1, y: 0 },
          offscreen: { scale: 1, y: 0 },
        }}
      />
      <motion.div
        style={{
          fontSize: 80,
          width: 240,
          height: 320,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          background: "#f5f5f5",
          boxShadow:
            "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
          transformOrigin: "10% 60%",
          position: "relative",
          zIndex: 2,
        }}
        variants={{
          hover: { scale: 1.03, y: 10, transition: { type: "spring", stiffness: 200, damping: 20 } },
          onscreen: { scale: 1, y: 0 },
          offscreen: { scale: 1, y: 0 },
        }}
      >
        <div>{course.icon}</div>
        <div
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#1976d2",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          {course.title}
        </div>
        <div
          style={{
            fontSize: 15,
            color: "#333",
            marginTop: 8,
            textAlign: "center",
          }}
        >
          {course.description}
        </div>
      </motion.div>
    </motion.div>
  );
}

const CourseSection = () => (
  <section
    id="courses"
    style={{
      margin: "100px auto",
      maxWidth: 1100,
      paddingBottom: 100,
      width: "100%",
    }}
  >
    <div className="text-3xl font-bold text-blue-700 text-center mb-8">
      Popular Courses
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 40,
        justifyContent: "center",
      }}
    >
      {courses.map((course, i) => (
        <AnimatedCourseCard course={course} i={i} key={course.title} />
      ))}
    </div>
  </section>
);


// --- Services/Features Data ---
const services = [
  {
    frontTitle: "AI-Powered Healthcare Courses",
    frontContent: "Personalized modules for medical professionals.",
    backTitle: "Learn More",
    backContent:
      "Interactive, up-to-date modules on clinical guidelines, medical procedures, and healthcare technology, powered by advanced AI for personalized learning paths.",
    icon: "🎓"
  },
  {
    frontTitle: "Certification & Compliance",
    frontContent: "Track your progress and earn certifications.",
    backTitle: "Learn More",
    backContent:
      "Earn accredited certifications and track your progress for licensure and compliance, all within our robust Learning Management System.",
    icon: "✅"
  },
  {
    frontTitle: "Telehealth & Simulation Labs",
    frontContent: "Practice with virtual patient cases.",
    backTitle: "Learn More",
    backContent:
      "Practice real-world scenarios with telemedicine modules, virtual patient cases, and immersive simulation labs for hands-on experience.",
    icon: "🏥"
  },
  {
    frontTitle: "24/7 Expert Mentorship",
    frontContent: "Get guidance from healthcare professionals.",
    backTitle: "Learn More",
    backContent:
      "Get guidance from top healthcare professionals and AI tutors anytime, ensuring support and clarity throughout your learning journey.",
    icon: "🧑‍⚕️"
  },
  {
    frontTitle: "AI Research & Innovation",
    frontContent: "Join cutting-edge healthcare AI projects.",
    backTitle: "Learn More",
    backContent:
      "Access cutting-edge research projects and collaborate on AI innovations transforming healthcare.",
    icon: "🔬"
  },
  {
    frontTitle: "Personalized Learning Paths",
    frontContent: "Adaptive learning for your goals.",
    backTitle: "Learn More",
    backContent:
      "Customized course recommendations and adaptive learning based on your progress and goals.",
    icon: "✨"
  }
];

const stats = [
  { label: "Courses Delivered", value: 1200 },
  { label: "Certified Professionals", value: 850 },
  { label: "Expert Mentors", value: 45 },
  { label: "Active Learners", value: 5000 }
];

const testimonials = [
  {
    name: "Dr. Ayesha S.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Pragyashal’s AI-powered modules made complex medical concepts easy to grasp. The simulation labs are a game changer for practical learning!",
    role: "Resident Doctor, Bengaluru"
  },
  {
    name: "Ravi Kumar",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The certification tracking and compliance features helped me renew my license efficiently. Highly recommended for healthcare professionals.",
    role: "Nurse, Hyderabad"
  },
  {
    name: "Priya Mehra",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Interactive content and 24/7 mentorship kept me engaged and confident during my exam preparation.",
    role: "Medical Student, Chennai"
  }
];

const navItems = [
  { label: "Home", icon: "🏆", anchor: "#home" },
  { label: "Courses", icon: "🎓", anchor: "#courses" },
  { label: "Features", icon: "✨", anchor: "#features" },
  { label: "Testimonials", icon: "✅", anchor: "#testimonials" },
  { label: "Contact", icon: "🧑‍⚕️", anchor: "#contact" }
];

const socialLinks = [
  {
    icon: <FaTwitter />,
    label: "Twitter",
    href: "https://twitter.com/"
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://linkedin.com/"
  },
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "https://facebook.com/"
  }
];

// --- Chatbot Dummy Backend ---
const dummyBackend = (message) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        reply:
          "This is a dummy AI response. We'll get back to you soon! (You said: " +
          message +
          ")"
      });
    }, 900);
  });

// --- Particles Init Function (IMPORTANT) ---
const particlesInit = async (main) => {
  await loadFull(main);
};

const HomePage = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [chatInput, setChatInput] = React.useState("");
  const [chatMessages, setChatMessages] = React.useState([
    { from: "bot", text: "👋 Hi! I’m your AI assistant. How can I help you today?" }
  ]);
  const chatEndRef = useRef();

  // Smooth scroll to section
  const handleNavClick = (anchor) => {
    setDrawerOpen(false);
    if (anchor) {
      const section = document.querySelector(anchor);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Chat send handler
  const handleChatSend = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
    setChatInput("");
    // Dummy backend
    const res = await dummyBackend(userMsg);
    setChatMessages((msgs) => [...msgs, { from: "bot", text: res.reply }]);
    setTimeout(() => {
      if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Enter key for chat
  const handleChatInputKeyDown = (e) => {
    if (e.key === "Enter") handleChatSend();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 to-green-50 font-sans overflow-hidden">
      {/* Animated Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#e3f2fd" } },
          fpsLimit: 60,
          particles: {
            color: { value: "#1976d2" },
            links: { enable: true, color: "#1976d2", distance: 120 },
            move: { enable: true, speed: 0.5 },
            number: { value: 40 },
            size: { value: 2 },
            shape: { type: "circle" },
            opacity: {
              value: 0.7,
              anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" }
            },
            modes: {
              grab: { distance: 140, links: { opacity: 0.6 } },
              push: { quantity: 4 }
            }
          },
          detectRetina: true
        }}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 bg-white/90 shadow-sm z-10">
        <div className="flex items-center px-4 py-2 max-w-7xl mx-auto">
          <img
            src="https://img.icons8.com/color/48/000000/medical-doctor.png"
            alt="Pragyashal Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-2xl font-bold text-blue-700 tracking-wide flex-1">
            Pragyashal HealthEd
          </span>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map(item => (
              <button
                key={item.label}
                className="text-blue-700 font-medium hover:text-green-700 transition-colors flex items-center px-2 py-1"
                onClick={() => handleNavClick(item.anchor)}
              >
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>
            ))}
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                aria-label={link.label}
                className="text-blue-700 text-xl hover:text-green-700 ml-2"
              >
                {link.icon}
              </a>
            ))}
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden flex items-center">
            <button
              className="text-blue-700 text-2xl"
              aria-label="Open navigation"
              onClick={() => setDrawerOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
        {/* Drawer for Mobile Navigation */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ x: -260, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -260, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-50"
              onClick={() => setDrawerOpen(false)}
            >
              <motion.div
                initial={{ x: -260 }}
                animate={{ x: 0 }}
                exit={{ x: -260 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-full bg-white shadow-lg p-4"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center mb-3">
                  <img
                    src="https://img.icons8.com/color/48/000000/medical-doctor.png"
                    alt="Pragyashal Logo"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="text-lg font-bold text-blue-700">
                    Pragyashal HealthEd
                  </span>
                  <button
                    className="ml-auto text-xl text-blue-700"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close navigation"
                  >
                    ×
                  </button>
                </div>
                <hr className="mb-2" />
                <ul>
                  {navItems.map(item => (
                    <li key={item.label}>
                      <button
                        className="flex items-center w-full text-left py-2 px-2 text-blue-700 hover:text-green-700"
                        onClick={() => handleNavClick(item.anchor)}
                      >
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
                <hr className="my-2" />
                <div className="flex justify-center space-x-4 mt-2">
                  {socialLinks.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={link.label}
                      className="text-blue-700 text-2xl hover:text-green-700"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <RevealSection id="home">
        <div className="max-w-2xl mx-auto text-center pt-16 pb-8 px-4">
          <div className="text-4xl font-extrabold text-blue-700 mb-4">
            Empowering Healthcare Professionals with AI
          </div>
          <div className="text-xl text-gray-700 mb-8">
            Personalized, accredited, and interactive learning for medical students and professionals.
          </div>
          <motion.div
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block"
          >
            <button
              className="bg-gradient-to-r from-blue-700 to-green-700 text-white font-semibold rounded-full px-9 py-3 text-lg shadow-lg hover:from-green-700 hover:to-blue-700 transition"
              onClick={() => handleNavClick("#courses")}
            >
              Get Started
            </button>
          </motion.div>
        </div>
        <WaveDivider color="#e8f5e9" />
      </RevealSection>

      {/* Courses Section */}
      <RevealSection id="courses">
        <CourseSection />
        <WaveDivider flip color="#e3f2fd" />
      </RevealSection>

      {/* Features Section with Flip Cards */}
      <RevealSection id="features">
        <div className="max-w-6xl mx-auto py-8 px-4 relative z-10">
          <div className="text-3xl font-bold text-blue-700 text-center mb-8">
            Platform Features
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {services.map((service, i) => (
              <motion.div
                key={service.frontTitle}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 * i,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
                className="rounded-2xl cursor-pointer"
              >
                <FlipCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider color="#e8f5e9" />
      </RevealSection>

      {/* Impact Stats Section with Animated Counters */}
      <RevealSection>
        <div className="max-w-2xl mx-auto py-8 px-4 text-center relative z-10">
          <div className="text-3xl font-bold text-blue-700 mb-6">
            Impact in Numbers
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.7 }}
                className="bg-green-50 rounded-xl py-6 px-2"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.3 + 0.2 * i,
                    type: "spring",
                    stiffness: 120
                  }}
                >
                  <div className="text-3xl font-bold text-green-700">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-blue-700 font-semibold mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider flip color="#e3f2fd" />
      </RevealSection>

      {/* Testimonials Section */}
      <RevealSection id="testimonials">
        <div className="max-w-5xl mx-auto py-10 px-4 relative z-10">
          <div className="text-3xl font-bold text-blue-700 text-center mb-8">
            Success Stories
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.7 }}
                className="flex-1 flex justify-center"
              >
                <div className="rounded-xl p-8 bg-gray-50 min-h-[210px] flex flex-col items-center shadow-md w-full max-w-xs">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mb-3 border-2 border-green-700"
                  />
                  <div className="text-gray-800 italic mb-3 text-center">
                    "{testimonial.feedback}"
                  </div>
                  <div className="text-green-700 font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Call to Action Section */}
      <RevealSection id="contact">
        <div className="max-w-2xl mx-auto py-6 px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <button
              className="bg-gradient-to-r from-green-700 to-blue-700 text-white font-semibold rounded-full px-9 py-3 text-lg shadow-lg hover:from-blue-700 hover:to-green-700 transition"
            >
              Join the Next Bootcamp
            </button>
          </motion.div>
        </div>
      </RevealSection>

      {/* Floating AI Chatbot Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-[1200]"
      >
        <button
          className="bg-white shadow-lg rounded-full p-3 text-blue-700 hover:bg-blue-100"
          aria-label="Chat with AI Assistant"
          onClick={() => setChatOpen(true)}
        >
          💬
        </button>
      </motion.div>

      {/* Dummy Chatbot Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-28 right-8 w-[340px] max-w-[90vw] bg-white rounded-xl shadow-2xl z-[1300] overflow-hidden flex flex-col max-h-[420px]"
          >
            <div className="flex items-center p-3 bg-blue-700">
              <span className="text-white text-xl mr-2">💬</span>
              <span className="text-white font-semibold flex-1">
                Pragyashal AI Assistant
              </span>
              <button
                className="text-white text-xl"
                onClick={() => setChatOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
            <div className="p-3 flex-1 overflow-y-auto bg-slate-50 min-h-[120px] max-h-[240px]">
              {chatMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.from === "user" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`flex mb-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-1 rounded-lg max-w-[75%] text-sm shadow ${
                      msg.from === "user"
                        ? "bg-blue-700 text-white"
                        : "bg-green-50 text-gray-900"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <form
              className="flex items-center px-2 py-1 border-t bg-white"
              onSubmit={e => {
                e.preventDefault();
                handleChatSend();
              }}
            >
              <input
                className="ml-1 flex-1 outline-none border-none bg-transparent p-2"
                placeholder="Type your message..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={handleChatInputKeyDown}
                autoFocus
              />
              <button
                className="text-blue-700 text-xl px-2"
                onClick={handleChatSend}
                aria-label="Send message"
                disabled={!chatInput.trim()}
                type="submit"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="text-center py-4 bg-white/70 text-blue-700 font-medium tracking-wide text-base relative z-10">
        &copy; {new Date().getFullYear()} Pragyashal HealthEd &middot;{" "}
        <a href="#" className="font-bold underline hover:text-green-700">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
