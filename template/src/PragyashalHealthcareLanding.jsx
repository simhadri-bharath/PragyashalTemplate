// // // import React, { useState, useRef } from "react";
// // // import {
// // //   AppBar,
// // //   Toolbar,
// // //   Typography,
// // //   Button,
// // //   Card,
// // //   CardContent,
// // //   Container,
// // //   Grid,
// // //   Box,
// // //   Link,
// // //   Chip,
// // //   Avatar,
// // //   IconButton,
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   ListItemIcon,
// // //   Divider,
// // //   InputBase,
// // //   Paper
// // // } from "@mui/material";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import CloseIcon from "@mui/icons-material/Close";
// // // import { motion, AnimatePresence, useAnimation } from "framer-motion";
// // // import { useInView } from "react-intersection-observer";
// // // import Particles from "react-tsparticles";
// // // import { loadFull } from "tsparticles";
// // // import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// // // import VerifiedIcon from "@mui/icons-material/Verified";
// // // import SchoolIcon from "@mui/icons-material/School";
// // // import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// // // import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// // // import ScienceIcon from "@mui/icons-material/Science";
// // // import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// // // import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// // // import TwitterIcon from "@mui/icons-material/Twitter";
// // // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // // import FacebookIcon from "@mui/icons-material/Facebook";
// // // import SendIcon from "@mui/icons-material/Send";
// // // import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// // // import PsychologyIcon from "@mui/icons-material/Psychology";
// // // import VaccinesIcon from "@mui/icons-material/Vaccines";
// // // import FavoriteIcon from "@mui/icons-material/Favorite";
// // // import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

// // // const particlesInit = async (main) => {
// // //   await loadFull(main);
// // // };

// // // // --- Animated SVG Divider ---
// // // const WaveDivider = ({ flip = false, color = "#e8f5e9" }) => (
// // //   <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
// // //     <svg
// // //       viewBox="0 0 1200 120"
// // //       preserveAspectRatio="none"
// // //       style={{ display: "block", width: "100%", height: 80 }}
// // //     >
// // //       <motion.path
// // //         d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
// // //         fill={color}
// // //         initial={{ pathLength: 0 }}
// // //         animate={{ pathLength: 1 }}
// // //         transition={{ duration: 1.5, ease: "easeInOut" }}
// // //       />
// // //     </svg>
// // //   </div>
// // // );

// // // // --- Section Reveal Wrapper ---
// // // const RevealSection = ({ children, ...props }) => {
// // //   const controls = useAnimation();
// // //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

// // //   React.useEffect(() => {
// // //     if (inView) controls.start("visible");
// // //   }, [controls, inView]);

// // //   return (
// // //     <motion.section
// // //       ref={ref}
// // //       variants={{
// // //         hidden: { opacity: 0, y: 40 },
// // //         visible: { opacity: 1, y: 0 }
// // //       }}
// // //       initial="hidden"
// // //       animate={controls}
// // //       transition={{ duration: 0.8, ease: "easeOut" }}
// // //       {...props}
// // //     >
// // //       {children}
// // //     </motion.section>
// // //   );
// // // };

// // // // --- FlipCard Component with old rotate animation on hover and no 'More Info' button ---
// // // const FlipCard = ({
// // //   frontTitle,
// // //   frontContent,
// // //   backTitle,
// // //   backContent,
// // //   icon
// // // }) => {
// // //   const [isFlipped, setIsFlipped] = useState(false);

// // //   return (
// // //     <div
// // //       style={{
// // //         perspective: 1000,
// // //         width: 300,
// // //         height: 260,
// // //         margin: "auto"
// // //       }}
// // //       onMouseEnter={() => setIsFlipped(true)}
// // //       onMouseLeave={() => setIsFlipped(false)}
// // //       tabIndex={0}
// // //       aria-label={`${frontTitle} card, hover or focus to flip`}
// // //     >
// // //       <motion.div
// // //         style={{
// // //           width: "100%",
// // //           height: "100%",
// // //           position: "relative",
// // //           cursor: "pointer"
// // //         }}
// // //         animate={{ rotateY: isFlipped ? 180 : 0 }}
// // //         transition={{ duration: 0.6, type: "spring" }}
// // //       >
// // //         {/* Front Side */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             width: "100%",
// // //             height: "100%",
// // //             backfaceVisibility: "hidden",
// // //             zIndex: isFlipped ? 0 : 1
// // //           }}
// // //         >
// // //           <Card
// // //             elevation={4}
// // //             style={{
// // //               height: "100%",
// // //               borderRadius: 20,
// // //               background: "#fff",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               transition: "box-shadow 0.3s"
// // //             }}
// // //           >
// // //             <CardContent style={{ textAlign: "center" }}>
// // //               <div style={{ marginBottom: 12 }}>{icon}</div>
// // //               <Typography variant="h6" color="primary" gutterBottom>
// // //                 {frontTitle}
// // //               </Typography>
// // //               <Typography variant="body2">{frontContent}</Typography>
// // //             </CardContent>
// // //           </Card>
// // //         </div>
// // //         {/* Back Side */}
// // //         <div
// // //           style={{
// // //             position: "absolute",
// // //             width: "100%",
// // //             height: "100%",
// // //             backfaceVisibility: "hidden",
// // //             transform: "rotateY(180deg)",
// // //             zIndex: isFlipped ? 1 : 0
// // //           }}
// // //         >
// // //           <Card
// // //             elevation={4}
// // //             style={{
// // //               height: "100%",
// // //               borderRadius: 20,
// // //               background: "#e3f2fd",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               justifyContent: "center",
// // //               alignItems: "center"
// // //             }}
// // //           >
// // //             <CardContent style={{ textAlign: "center" }}>
// // //               <Typography variant="h6" color="secondary" gutterBottom>
// // //                 {backTitle}
// // //               </Typography>
// // //               <Typography variant="body2">{backContent}</Typography>
// // //             </CardContent>
// // //           </Card>
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // // --- Data ---
// // // const services = [
// // //   {
// // //     frontTitle: "AI-Powered Healthcare Courses",
// // //     frontContent: "Personalized modules for medical professionals.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Interactive, up-to-date modules on clinical guidelines, medical procedures, and healthcare technology, powered by advanced AI for personalized learning paths.",
// // //     icon: <SchoolIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     frontTitle: "Certification & Compliance",
// // //     frontContent: "Track your progress and earn certifications.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Earn accredited certifications and track your progress for licensure and compliance, all within our robust Learning Management System.",
// // //     icon: <VerifiedIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     frontTitle: "Telehealth & Simulation Labs",
// // //     frontContent: "Practice with virtual patient cases.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Practice real-world scenarios with telemedicine modules, virtual patient cases, and immersive simulation labs for hands-on experience.",
// // //     icon: <LocalHospitalIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     frontTitle: "24/7 Expert Mentorship",
// // //     frontContent: "Get guidance from healthcare professionals.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Get guidance from top healthcare professionals and AI tutors anytime, ensuring support and clarity throughout your learning journey.",
// // //     icon: <SupportAgentIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     frontTitle: "AI Research & Innovation",
// // //     frontContent: "Join cutting-edge healthcare AI projects.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Access cutting-edge research projects and collaborate on AI innovations transforming healthcare.",
// // //     icon: <ScienceIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     frontTitle: "Personalized Learning Paths",
// // //     frontContent: "Adaptive learning for your goals.",
// // //     backTitle: "Learn More",
// // //     backContent:
// // //       "Customized course recommendations and adaptive learning based on your progress and goals.",
// // //     icon: <AutoAwesomeIcon fontSize="large" color="primary" />
// // //   }
// // // ];

// // // const courses = [
// // //   {
// // //     title: "Cardiology Essentials",
// // //     description: "Master the fundamentals of heart health and cardiac care.",
// // //     icon: <FavoriteIcon fontSize="large" color="error" />
// // //   },
// // //   {
// // //     title: "Mental Health & Psychology",
// // //     description: "Explore mental wellness, therapy, and patient care.",
// // //     icon: <PsychologyIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     title: "Vaccination & Immunology",
// // //     description: "Learn about vaccines, immunization schedules, and safety.",
// // //     icon: <VaccinesIcon fontSize="large" color="success" />
// // //   },
// // //   {
// // //     title: "Emergency Medicine",
// // //     description: "Handle critical cases and emergency protocols.",
// // //     icon: <HealthAndSafetyIcon fontSize="large" color="secondary" />
// // //   },
// // //   {
// // //     title: "Medical AI & Data Science",
// // //     description: "Apply AI in diagnostics and healthcare analytics.",
// // //     icon: <ScienceIcon fontSize="large" color="primary" />
// // //   },
// // //   {
// // //     title: "Telemedicine Practice",
// // //     description: "Deliver care remotely with telehealth best practices.",
// // //     icon: <MedicalServicesIcon fontSize="large" color="action" />
// // //   }
// // // ];

// // // const stats = [
// // //   { label: "Courses Delivered", value: 1200 },
// // //   { label: "Certified Professionals", value: 850 },
// // //   { label: "Expert Mentors", value: 45 },
// // //   { label: "Active Learners", value: 5000 }
// // // ];

// // // const testimonials = [
// // //   {
// // //     name: "Dr. Ayesha S.",
// // //     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
// // //     feedback:
// // //       "Pragyashal’s AI-powered modules made complex medical concepts easy to grasp. The simulation labs are a game changer for practical learning!",
// // //     role: "Resident Doctor, Bengaluru"
// // //   },
// // //   {
// // //     name: "Ravi Kumar",
// // //     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// // //     feedback:
// // //       "The certification tracking and compliance features helped me renew my license efficiently. Highly recommended for healthcare professionals.",
// // //     role: "Nurse, Hyderabad"
// // //   },
// // //   {
// // //     name: "Priya Mehra",
// // //     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
// // //     feedback:
// // //       "Interactive content and 24/7 mentorship kept me engaged and confident during my exam preparation.",
// // //     role: "Medical Student, Chennai"
// // //   }
// // // ];

// // // const navItems = [
// // //   { label: "Home", icon: <EmojiEventsIcon />, anchor: "#home" },
// // //   { label: "Courses", icon: <SchoolIcon />, anchor: "#courses" },
// // //   { label: "Features", icon: <AutoAwesomeIcon />, anchor: "#features" },
// // //   { label: "Testimonials", icon: <VerifiedIcon />, anchor: "#testimonials" },
// // //   { label: "Contact", icon: <SupportAgentIcon />, anchor: "#contact" }
// // // ];

// // // const socialLinks = [
// // //   {
// // //     icon: <TwitterIcon />,
// // //     label: "Twitter",
// // //     href: "https://twitter.com/"
// // //   },
// // //   {
// // //     icon: <LinkedInIcon />,
// // //     label: "LinkedIn",
// // //     href: "https://linkedin.com/"
// // //   },
// // //   {
// // //     icon: <FacebookIcon />,
// // //     label: "Facebook",
// // //     href: "https://facebook.com/"
// // //   }
// // // ];

// // // // --- Chatbot Dummy Backend ---
// // // const dummyBackend = (message) =>
// // //   new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve({
// // //         reply:
// // //           "This is a dummy AI response. We'll get back to you soon! (You said: " +
// // //           message +
// // //           ")"
// // //       });
// // //     }, 900);
// // //   });

// // // const PragyashalHealthcareLanding = () => {
// // //   const [drawerOpen, setDrawerOpen] = useState(false);
// // //   const [chatOpen, setChatOpen] = useState(false);
// // //   const [chatInput, setChatInput] = useState("");
// // //   const [chatMessages, setChatMessages] = useState([
// // //     { from: "bot", text: "👋 Hi! I’m your AI assistant. How can I help you today?" }
// // //   ]);
// // //   const chatEndRef = useRef();

// // //   // Smooth scroll to section
// // //   const handleNavClick = (anchor) => {
// // //     setDrawerOpen(false);
// // //     if (anchor) {
// // //       const section = document.querySelector(anchor);
// // //       if (section) {
// // //         section.scrollIntoView({ behavior: "smooth", block: "start" });
// // //       }
// // //     }
// // //   };

// // //   // Chat send handler
// // //   const handleChatSend = async () => {
// // //     if (!chatInput.trim()) return;
// // //     const userMsg = chatInput;
// // //     setChatMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
// // //     setChatInput("");
// // //     // Dummy backend
// // //     const res = await dummyBackend(userMsg);
// // //     setChatMessages((msgs) => [...msgs, { from: "bot", text: res.reply }]);
// // //     setTimeout(() => {
// // //       if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
// // //     }, 100);
// // //   };

// // //   // Enter key for chat
// // //   const handleChatInputKeyDown = (e) => {
// // //     if (e.key === "Enter") handleChatSend();
// // //   };

// // //   return (
// // //     <div
// // //       style={{
// // //         position: "relative",
// // //         minHeight: "100vh",
// // //         background: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
// // //         fontFamily: "Roboto, Arial, sans-serif",
// // //         overflow: "hidden"
// // //       }}
// // //     >
// // //       {/* Animated Particle Background */}
// // //       <Particles
// // //         id="tsparticles"
// // //         init={particlesInit}
// // //         options={{
// // //           background: { color: { value: "#e3f2fd" } },
// // //           fpsLimit: 60,
// // //           particles: {
// // //             color: { value: "#1976d2" },
// // //             links: { enable: true, color: "#1976d2", distance: 120 },
// // //             move: { enable: true, speed: 0.5 },
// // //             number: { value: 40 },
// // //             size: { value: 2 },
// // //             shape: { type: "circle" },
// // //             opacity: {
// // //               value: 0.7,
// // //               anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
// // //             }
// // //           },
// // //           interactivity: {
// // //             events: {
// // //               onHover: { enable: true, mode: "grab" },
// // //               onClick: { enable: true, mode: "push" }
// // //             },
// // //             modes: {
// // //               grab: { distance: 140, links: { opacity: 0.6 } },
// // //               push: { quantity: 4 }
// // //             }
// // //           },
// // //           detectRetina: true
// // //         }}
// // //         style={{ position: "absolute", inset: 0, zIndex: 0 }}
// // //       />

// // //       {/* Sticky Navigation Bar with Brand Logo and Social Icons */}
// // //       <AppBar
// // //         position="sticky"
// // //         color="transparent"
// // //         elevation={0}
// // //         style={{ background: "rgba(255,255,255,0.92)", zIndex: 10 }}
// // //       >
// // //         <Toolbar>
// // //           <img
// // //             src="https://img.icons8.com/color/48/000000/medical-doctor.png"
// // //             alt="Pragyashal Logo"
// // //             style={{ width: 40, height: 40, marginRight: 10 }}
// // //           />
// // //           <Typography
// // //             variant="h5"
// // //             style={{
// // //               flexGrow: 1,
// // //               color: "#1976d2",
// // //               fontWeight: 700,
// // //               letterSpacing: 1
// // //             }}
// // //           >
// // //             Pragyashal HealthEd
// // //           </Typography>
// // //           {/* Desktop Nav */}
// // //           <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
// // //             {navItems.map(item => (
// // //               <Button
// // //                 key={item.label}
// // //                 color="inherit"
// // //                 style={{
// // //                   color: "#1976d2",
// // //                   marginLeft: 8,
// // //                   fontWeight: 500,
// // //                   textTransform: "none",
// // //                   transition: "color 0.2s"
// // //                 }}
// // //                 component={motion.button}
// // //                 whileHover={{ color: "#43a047" }}
// // //                 onClick={() => handleNavClick(item.anchor)}
// // //                 startIcon={item.icon}
// // //               >
// // //                 {item.label}
// // //               </Button>
// // //             ))}
// // //             {socialLinks.map(link => (
// // //               <IconButton
// // //                 key={link.label}
// // //                 href={link.href}
// // //                 target="_blank"
// // //                 rel="noopener"
// // //                 aria-label={link.label}
// // //                 size="large"
// // //                 sx={{ color: "#1976d2", ml: 1 }}
// // //               >
// // //                 {link.icon}
// // //               </IconButton>
// // //             ))}
// // //           </Box>
// // //           {/* Mobile Nav */}
// // //           <Box sx={{ display: { xs: "flex", md: "none" } }}>
// // //             <IconButton
// // //               color="primary"
// // //               size="large"
// // //               aria-label="Open navigation"
// // //               onClick={() => setDrawerOpen(true)}
// // //             >
// // //               <MenuIcon />
// // //             </IconButton>
// // //           </Box>
// // //         </Toolbar>
// // //       </AppBar>

// // //       {/* Drawer for Mobile Navigation */}
// // //       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// // //         <Box sx={{ width: 260, p: 2 }}>
// // //           <Box display="flex" alignItems="center" mb={2}>
// // //             <img
// // //               src="https://img.icons8.com/color/48/000000/medical-doctor.png"
// // //               alt="Pragyashal Logo"
// // //               style={{ width: 32, height: 32, marginRight: 8 }}
// // //             />
// // //             <Typography variant="h6" color="primary">
// // //               Pragyashal HealthEd
// // //             </Typography>
// // //             <IconButton
// // //               sx={{ ml: "auto" }}
// // //               onClick={() => setDrawerOpen(false)}
// // //               aria-label="Close navigation"
// // //             >
// // //               <CloseIcon />
// // //             </IconButton>
// // //           </Box>
// // //           <Divider />
// // //           <List>
// // //             {navItems.map(item => (
// // //               <ListItem
// // //                 button
// // //                 key={item.label}
// // //                 onClick={() => handleNavClick(item.anchor)}
// // //               >
// // //                 <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
// // //                 <ListItemText primary={item.label} />
// // //               </ListItem>
// // //             ))}
// // //           </List>
// // //           <Divider />
// // //           <Box display="flex" justifyContent="center" mt={1}>
// // //             {socialLinks.map(link => (
// // //               <IconButton
// // //                 key={link.label}
// // //                 href={link.href}
// // //                 target="_blank"
// // //                 rel="noopener"
// // //                 aria-label={link.label}
// // //                 size="large"
// // //                 sx={{ color: "#1976d2", mx: 0.5 }}
// // //               >
// // //                 {link.icon}
// // //               </IconButton>
// // //             ))}
// // //           </Box>
// // //         </Box>
// // //       </Drawer>

// // //       {/* Hero Section */}
// // //       <RevealSection id="home">
// // //         <Container
// // //           maxWidth="md"
// // //           style={{
// // //             paddingTop: "5rem",
// // //             paddingBottom: "3rem",
// // //             textAlign: "center",
// // //             position: "relative",
// // //             zIndex: 10
// // //           }}
// // //         >
// // //           <Chip
// // //             icon={<EmojiEventsIcon style={{ color: "#43a047" }} />}
// // //             label="AI-Driven EdTech for Healthcare"
// // //             style={{
// // //               marginBottom: 16,
// // //               background: "#e8f5e9",
// // //               color: "#43a047",
// // //               fontWeight: 600
// // //             }}
// // //           />
// // //           <Typography
// // //             variant="h2"
// // //             style={{
// // //               fontWeight: 800,
// // //               color: "#1976d2",
// // //               marginBottom: 16,
// // //               letterSpacing: 1
// // //             }}
// // //           >
// // //             Empowering Healthcare Professionals with AI
// // //           </Typography>
// // //           <Typography
// // //             variant="h6"
// // //             style={{ color: "#555", marginBottom: 32, fontWeight: 400 }}
// // //           >
// // //             Personalized, accredited, and interactive learning for medical students and professionals. Stay ahead with Pragyashal's advanced healthcare education platform.
// // //           </Typography>
// // //           <motion.div
// // //             whileHover={{ scale: 1.07, boxShadow: "0 0 16px #43a04744" }}
// // //             transition={{ type: "spring", stiffness: 300 }}
// // //             style={{ display: "inline-block" }}
// // //           >
// // //             <Button
// // //               variant="contained"
// // //               color="primary"
// // //               size="large"
// // //               style={{
// // //                 background: `linear-gradient(90deg, #1976d2 70%, #43a047 100%)`,
// // //                 color: "#fff",
// // //                 fontWeight: 600,
// // //                 borderRadius: 24,
// // //                 padding: "12px 36px",
// // //                 fontSize: "1.1rem",
// // //                 boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)"
// // //               }}
// // //               onClick={() => handleNavClick("#courses")}
// // //             >
// // //               Get Started
// // //             </Button>
// // //           </motion.div>
// // //         </Container>
// // //         <WaveDivider color="#e8f5e9" />
// // //       </RevealSection>

// // //       {/* Courses Section */}
// // //       <RevealSection id="courses">
// // //         <Container
// // //           maxWidth="lg"
// // //           style={{
// // //             background: "#e8f5e9",
// // //             paddingTop: "3rem",
// // //             paddingBottom: "3rem",
// // //             borderRadius: "0 0 32px 32px"
// // //           }}
// // //         >
// // //           <Typography
// // //             variant="h4"
// // //             style={{
// // //               color: "#1976d2",
// // //               fontWeight: 700,
// // //               textAlign: "center",
// // //               marginBottom: 32
// // //             }}
// // //           >
// // //             Popular Courses
// // //           </Typography>
// // //           <Grid container spacing={4} justifyContent="center">
// // //             {courses.map((course, i) => (
// // //               <Grid item xs={12} sm={6} md={4} key={course.title}>
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 40 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{
// // //                     delay: 0.1 * i,
// // //                     duration: 0.7,
// // //                     type: "spring",
// // //                     stiffness: 100
// // //                   }}
// // //                 >
// // //                   <Card
// // //                     elevation={4}
// // //                     style={{
// // //                       borderRadius: 18,
// // //                       padding: "1.5rem 1rem",
// // //                       background: "#fff",
// // //                       minHeight: 190,
// // //                       display: "flex",
// // //                       flexDirection: "column",
// // //                       alignItems: "center",
// // //                       boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
// // //                     }}
// // //                   >
// // //                     <div style={{ marginBottom: 12 }}>{course.icon}</div>
// // //                     <Typography
// // //                       variant="h6"
// // //                       style={{
// // //                         color: "#1976d2",
// // //                         fontWeight: 700,
// // //                         marginBottom: 8,
// // //                         textAlign: "center"
// // //                       }}
// // //                     >
// // //                       {course.title}
// // //                     </Typography>
// // //                     <Typography
// // //                       variant="body2"
// // //                       style={{ color: "#555", textAlign: "center" }}
// // //                     >
// // //                       {course.description}
// // //                     </Typography>
// // //                   </Card>
// // //                 </motion.div>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Container>
// // //         <WaveDivider flip color="#e3f2fd" />
// // //       </RevealSection>

// // //       {/* Features Section with Flip Cards */}
// // //       <RevealSection id="features">
// // //         <Container
// // //           maxWidth="lg"
// // //           style={{
// // //             paddingTop: "2rem",
// // //             paddingBottom: "2rem",
// // //             position: "relative",
// // //             zIndex: 10
// // //           }}
// // //         >
// // //           <Typography
// // //             variant="h4"
// // //             style={{
// // //               color: "#1976d2",
// // //               fontWeight: 700,
// // //               textAlign: "center",
// // //               marginBottom: 32
// // //             }}
// // //           >
// // //             Platform Features
// // //           </Typography>
// // //           <Grid container spacing={4} justifyContent="center">
// // //             {services.map((service, i) => (
// // //               <Grid item xs={12} md={4} key={service.frontTitle}>
// // //                 <motion.div
// // //                   initial={{ opacity: 0, scale: 0.8, y: 20 }}
// // //                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{
// // //                     delay: 0.2 * i,
// // //                     duration: 0.7,
// // //                     type: "spring",
// // //                     stiffness: 100
// // //                   }}
// // //                   style={{ borderRadius: 20, cursor: "pointer" }}
// // //                 >
// // //                   <FlipCard {...service} />
// // //                 </motion.div>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Container>
// // //         <WaveDivider color="#e8f5e9" />
// // //       </RevealSection>

// // //       {/* Impact Stats Section with Animated Counters */}
// // //       <RevealSection>
// // //         <Container
// // //           maxWidth="md"
// // //           style={{
// // //             paddingTop: "2rem",
// // //             paddingBottom: "2rem",
// // //             position: "relative",
// // //             zIndex: 10,
// // //             textAlign: "center"
// // //           }}
// // //         >
// // //           <Typography
// // //             variant="h4"
// // //             style={{ color: "#1976d2", fontWeight: 700, marginBottom: 24 }}
// // //           >
// // //             Impact in Numbers
// // //           </Typography>
// // //           <Grid container spacing={4} justifyContent="center">
// // //             {stats.map((stat, i) => (
// // //               <Grid item xs={6} md={3} key={stat.label}>
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: 0.2 * i, duration: 0.7 }}
// // //                   style={{
// // //                     background: "#e8f5e9",
// // //                     borderRadius: 16,
// // //                     padding: "1.5rem 1rem"
// // //                   }}
// // //                 >
// // //                   <motion.div
// // //                     initial={{ scale: 0.8 }}
// // //                     whileInView={{ scale: 1 }}
// // //                     transition={{
// // //                       delay: 0.3 + 0.2 * i,
// // //                       type: "spring",
// // //                       stiffness: 120
// // //                     }}
// // //                   >
// // //                     <Typography
// // //                       variant="h3"
// // //                       style={{ color: "#43a047", fontWeight: 700 }}
// // //                     >
// // //                       {/* Animated Counter */}
// // //                       <motion.span
// // //                         initial={{ opacity: 0, y: 10 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         transition={{ delay: 0.5 + 0.2 * i }}
// // //                       >
// // //                         {stat.value.toLocaleString()}
// // //                       </motion.span>
// // //                     </Typography>
// // //                     <Typography
// // //                       variant="subtitle1"
// // //                       style={{ color: "#1976d2", fontWeight: 600 }}
// // //                     >
// // //                       {stat.label}
// // //                     </Typography>
// // //                   </motion.div>
// // //                 </motion.div>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Container>
// // //         <WaveDivider flip color="#e3f2fd" />
// // //       </RevealSection>

// // //       {/* Testimonials Section with Avatars */}
// // //       <RevealSection id="testimonials">
// // //         <Container
// // //           maxWidth="md"
// // //           style={{
// // //             paddingTop: "2.5rem",
// // //             paddingBottom: "2.5rem",
// // //             position: "relative",
// // //             zIndex: 10
// // //           }}
// // //         >
// // //           <Typography
// // //             variant="h4"
// // //             style={{
// // //               color: "#1976d2",
// // //               fontWeight: 700,
// // //               textAlign: "center",
// // //               marginBottom: 32
// // //             }}
// // //           >
// // //             Success Stories
// // //           </Typography>
// // //           <Grid container spacing={4} justifyContent="center">
// // //             {testimonials.map((testimonial, i) => (
// // //               <Grid item xs={12} md={4} key={testimonial.name}>
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   whileInView={{ opacity: 1, y: 0 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: 0.2 * i, duration: 0.7 }}
// // //                 >
// // //                   <Card
// // //                     elevation={2}
// // //                     style={{
// // //                       borderRadius: 18,
// // //                       padding: "2rem 1rem 1.5rem 1rem",
// // //                       background: "#fafafa",
// // //                       minHeight: 210,
// // //                       display: "flex",
// // //                       flexDirection: "column",
// // //                       alignItems: "center",
// // //                       boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
// // //                     }}
// // //                   >
// // //                     <Avatar
// // //                       src={testimonial.avatar}
// // //                       alt={testimonial.name}
// // //                       sx={{
// // //                         width: 56,
// // //                         height: 56,
// // //                         mb: 2,
// // //                         border: "2px solid #43a047"
// // //                       }}
// // //                     />
// // //                     <Typography
// // //                       variant="body1"
// // //                       style={{
// // //                         color: "#333",
// // //                         fontStyle: "italic",
// // //                         marginBottom: 14
// // //                       }}
// // //                     >
// // //                       "{testimonial.feedback}"
// // //                     </Typography>
// // //                     <Typography
// // //                       variant="subtitle2"
// // //                       style={{ color: "#43a047", fontWeight: 700 }}
// // //                     >
// // //                       {testimonial.name}
// // //                     </Typography>
// // //                     <Typography
// // //                       variant="caption"
// // //                       style={{ color: "#888" }}
// // //                     >
// // //                       {testimonial.role}
// // //                     </Typography>
// // //                   </Card>
// // //                 </motion.div>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Container>
// // //       </RevealSection>

// // //       {/* Call to Action Section */}
// // //       <RevealSection id="contact">
// // //         <Container
// // //           maxWidth="md"
// // //           style={{
// // //             paddingTop: "1.5rem",
// // //             paddingBottom: "2rem",
// // //             textAlign: "center",
// // //             position: "relative",
// // //             zIndex: 10
// // //           }}
// // //         >
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.9 }}
// // //             animate={{ opacity: 1, scale: 1 }}
// // //             transition={{ delay: 0.5, duration: 0.7 }}
// // //           >
// // //             <Button
// // //               variant="contained"
// // //               color="secondary"
// // //               size="large"
// // //               style={{
// // //                 background: `linear-gradient(90deg, #43a047 70%, #1976d2 100%)`,
// // //                 color: "#fff",
// // //                 fontWeight: 600,
// // //                 borderRadius: 24,
// // //                 padding: "12px 36px",
// // //                 fontSize: "1.1rem",
// // //                 boxShadow: "0 4px 16px rgba(67, 160, 71, 0.15)"
// // //               }}
// // //             >
// // //               Join the Next Bootcamp
// // //             </Button>
// // //           </motion.div>
// // //         </Container>
// // //       </RevealSection>

// // //       {/* Floating AI Chatbot Button (Micro-Interaction) */}
// // //       <motion.div
// // //         initial={{ opacity: 0, scale: 0.8 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         transition={{ delay: 1.2, duration: 0.5 }}
// // //         style={{
// // //           position: "fixed",
// // //           bottom: 32,
// // //           right: 32,
// // //           zIndex: 1200
// // //         }}
// // //       >
// // //         <IconButton
// // //           color="primary"
// // //           size="large"
// // //           aria-label="Chat with AI Assistant"
// // //           sx={{
// // //             background: "#fff",
// // //             boxShadow: "0 2px 8px #1976d244",
// // //             "&:hover": { background: "#e3f2fd" }
// // //           }}
// // //           onClick={() => setChatOpen(true)}
// // //         >
// // //           <ChatBubbleOutlineIcon fontSize="large" />
// // //         </IconButton>
// // //       </motion.div>

// // //       {/* Dummy Chatbot Window */}
// // //       <AnimatePresence>
// // //         {chatOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 60, scale: 0.95 }}
// // //             animate={{ opacity: 1, y: 0, scale: 1 }}
// // //             exit={{ opacity: 0, y: 60, scale: 0.95 }}
// // //             transition={{ duration: 0.4 }}
// // //             style={{
// // //               position: "fixed",
// // //               bottom: 100,
// // //               right: 32,
// // //               width: 340,
// // //               maxWidth: "90vw",
// // //               background: "#fff",
// // //               borderRadius: 16,
// // //               boxShadow: "0 8px 32px rgba(25, 118, 210, 0.13)",
// // //               zIndex: 1300,
// // //               overflow: "hidden",
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               maxHeight: 420
// // //             }}
// // //           >
// // //             <Box display="flex" alignItems="center" p={2} bgcolor="#1976d2">
// // //               <ChatBubbleOutlineIcon style={{ color: "#fff", marginRight: 8 }} />
// // //               <Typography variant="subtitle1" color="#fff" flexGrow={1}>
// // //                 Pragyashal AI Assistant
// // //               </Typography>
// // //               <IconButton
// // //                 onClick={() => setChatOpen(false)}
// // //                 size="small"
// // //                 sx={{ color: "#fff" }}
// // //                 aria-label="Close chat"
// // //               >
// // //                 <CloseIcon />
// // //               </IconButton>
// // //             </Box>
// // //             <Box
// // //               p={2}
// // //               flex={1}
// // //               style={{
// // //                 overflowY: "auto",
// // //                 background: "#f5f7fa",
// // //                 minHeight: 120,
// // //                 maxHeight: 240
// // //               }}
// // //             >
// // //               {chatMessages.map((msg, idx) => (
// // //                 <motion.div
// // //                   key={idx}
// // //                   initial={{ opacity: 0, x: msg.from === "user" ? 30 : -30 }}
// // //                   animate={{ opacity: 1, x: 0 }}
// // //                   transition={{ duration: 0.3, delay: idx * 0.1 }}
// // //                   style={{
// // //                     display: "flex",
// // //                     justifyContent:
// // //                       msg.from === "user" ? "flex-end" : "flex-start",
// // //                     marginBottom: 8
// // //                   }}
// // //                 >
// // //                   <Box
// // //                     sx={{
// // //                       bgcolor: msg.from === "user" ? "#1976d2" : "#e8f5e9",
// // //                       color: msg.from === "user" ? "#fff" : "#333",
// // //                       px: 2,
// // //                       py: 1,
// // //                       borderRadius: 2,
// // //                       maxWidth: "75%",
// // //                       fontSize: 15,
// // //                       boxShadow: 1
// // //                     }}
// // //                   >
// // //                     {msg.text}
// // //                   </Box>
// // //                 </motion.div>
// // //               ))}
// // //               <div ref={chatEndRef} />
// // //             </Box>
// // //             <Paper
// // //               component="form"
// // //               onSubmit={e => {
// // //                 e.preventDefault();
// // //                 handleChatSend();
// // //               }}
// // //               sx={{
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 px: 1,
// // //                 py: 0.5,
// // //                 borderTop: "1px solid #e0e0e0",
// // //                 bgcolor: "#fff"
// // //               }}
// // //               elevation={0}
// // //             >
// // //               <InputBase
// // //                 sx={{ ml: 1, flex: 1 }}
// // //                 placeholder="Type your message..."
// // //                 value={chatInput}
// // //                 onChange={e => setChatInput(e.target.value)}
// // //                 onKeyDown={handleChatInputKeyDown}
// // //                 inputProps={{ "aria-label": "Type your message" }}
// // //                 autoFocus
// // //               />
// // //               <IconButton
// // //                 color="primary"
// // //                 onClick={handleChatSend}
// // //                 aria-label="Send message"
// // //                 disabled={!chatInput.trim()}
// // //                 type="submit"
// // //               >
// // //                 <SendIcon />
// // //               </IconButton>
// // //             </Paper>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Footer */}
// // //       <Box
// // //         component="footer"
// // //         sx={{
// // //           textAlign: "center",
// // //           py: 3,
// // //           background: "rgba(255,255,255,0.7)",
// // //           color: "#1976d2",
// // //           fontWeight: 500,
// // //           letterSpacing: 1,
// // //           fontSize: "1.05rem",
// // //           position: "relative",
// // //           zIndex: 10
// // //         }}
// // //       >
// // //         <Typography variant="body2">
// // //           &copy; {new Date().getFullYear()} Pragyashal HealthEd &middot;{" "}
// // //           <Link href="#" color="inherit" underline="hover" sx={{ fontWeight: 700 }}>
// // //             Privacy Policy
// // //           </Link>
// // //         </Typography>
// // //       </Box>
// // //     </div>
// // //   );
// // // };

// // // export default PragyashalHealthcareLanding;

// // import React, { useState, useRef, useEffect } from "react";
// // import {
// //   AppBar,
// //   Toolbar,
// //   Typography,
// //   Button,
// //   Card,
// //   CardContent,
// //   Container,
// //   Grid,
// //   Box,
// //   Link,
// //   Chip,
// //   Avatar,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   ListItemIcon,
// //   Divider,
// //   InputBase,
// //   Paper
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import CloseIcon from "@mui/icons-material/Close";
// // import { motion, AnimatePresence, useAnimation } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import Particles from "react-tsparticles";
// // import { loadFull } from "tsparticles";
// // import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// // import VerifiedIcon from "@mui/icons-material/Verified";
// // import SchoolIcon from "@mui/icons-material/School";
// // import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// // import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// // import ScienceIcon from "@mui/icons-material/Science";
// // import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// // import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// // import TwitterIcon from "@mui/icons-material/Twitter";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import FacebookIcon from "@mui/icons-material/Facebook";
// // import SendIcon from "@mui/icons-material/Send";
// // import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// // import PsychologyIcon from "@mui/icons-material/Psychology";
// // import VaccinesIcon from "@mui/icons-material/Vaccines";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

// // // --- Animated SVG Divider ---
// // const WaveDivider = ({ flip = false, color = "#e8f5e9" }) => (
// //   <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
// //     <svg
// //       viewBox="0 0 1200 120"
// //       preserveAspectRatio="none"
// //       style={{ display: "block", width: "100%", height: 80 }}
// //     >
// //       <motion.path
// //         d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
// //         fill={color}
// //         initial={{ pathLength: 0 }}
// //         animate={{ pathLength: 1 }}
// //         transition={{ duration: 1.5, ease: "easeInOut" }}
// //       />
// //     </svg>
// //   </div>
// // );

// // // --- Section Reveal Wrapper ---
// // const RevealSection = ({ children, ...props }) => {
// //   const controls = useAnimation();
// //   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

// //   useEffect(() => {
// //     if (inView) controls.start("visible");
// //   }, [controls, inView]);

// //   return (
// //     <motion.section
// //       ref={ref}
// //       variants={{
// //         hidden: { opacity: 0, y: 40 },
// //         visible: { opacity: 1, y: 0 }
// //       }}
// //       initial="hidden"
// //       animate={controls}
// //       transition={{ duration: 0.8, ease: "easeOut" }}
// //       {...props}
// //     >
// //       {children}
// //     </motion.section>
// //   );
// // };

// // // --- Animated Stat Counter ---
// // const AnimatedCounter = ({ value }) => {
// //   const [count, setCount] = useState(0);
// //   useEffect(() => {
// //     let start = 0;
// //     const end = value;
// //     if (start === end) return;
// //     let incrementTime = 20;
// //     let timer = setInterval(() => {
// //       start += Math.ceil(end / 50);
// //       if (start >= end) {
// //         start = end;
// //         clearInterval(timer);
// //       }
// //       setCount(start);
// //     }, incrementTime);
// //     return () => clearInterval(timer);
// //   }, [value]);
// //   return <span>{count.toLocaleString()}</span>;
// // };

// // // --- FlipCard Component with rotate animation on hover and no 'More Info' button ---
// // const FlipCard = ({
// //   frontTitle,
// //   frontContent,
// //   backTitle,
// //   backContent,
// //   icon
// // }) => {
// //   const [isFlipped, setIsFlipped] = useState(false);

// //   return (
// //     <div
// //       style={{
// //         perspective: 1000,
// //         width: 300,
// //         height: 260,
// //         margin: "auto"
// //       }}
// //       onMouseEnter={() => setIsFlipped(true)}
// //       onMouseLeave={() => setIsFlipped(false)}
// //       tabIndex={0}
// //       aria-label={`${frontTitle} card, hover or focus to flip`}
// //     >
// //       <motion.div
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           position: "relative",
// //           cursor: "pointer"
// //         }}
// //         animate={{ rotateY: isFlipped ? 180 : 0 }}
// //         transition={{ duration: 0.6, type: "spring" }}
// //       >
// //         {/* Front Side */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             width: "100%",
// //             height: "100%",
// //             backfaceVisibility: "hidden",
// //             zIndex: isFlipped ? 0 : 1
// //           }}
// //         >
// //           <Card
// //             elevation={4}
// //             style={{
// //               height: "100%",
// //               borderRadius: 20,
// //               background: "#fff",
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               alignItems: "center",
// //               transition: "box-shadow 0.3s"
// //             }}
// //           >
// //             <CardContent style={{ textAlign: "center" }}>
// //               <motion.div
// //                 animate={{ scale: [1, 1.15, 1] }}
// //                 transition={{
// //                   repeat: Infinity,
// //                   duration: 2,
// //                   ease: "easeInOut"
// //                 }}
// //                 style={{ marginBottom: 12 }}
// //               >
// //                 {icon}
// //               </motion.div>
// //               <Typography variant="h6" color="primary" gutterBottom>
// //                 {frontTitle}
// //               </Typography>
// //               <Typography variant="body2">{frontContent}</Typography>
// //             </CardContent>
// //           </Card>
// //         </div>
// //         {/* Back Side */}
// //         <div
// //           style={{
// //             position: "absolute",
// //             width: "100%",
// //             height: "100%",
// //             backfaceVisibility: "hidden",
// //             transform: "rotateY(180deg)",
// //             zIndex: isFlipped ? 1 : 0
// //           }}
// //         >
// //           <Card
// //             elevation={4}
// //             style={{
// //               height: "100%",
// //               borderRadius: 20,
// //               background: "#e3f2fd",
// //               display: "flex",
// //               flexDirection: "column",
// //               justifyContent: "center",
// //               alignItems: "center"
// //             }}
// //           >
// //             <CardContent style={{ textAlign: "center" }}>
// //               <Typography variant="h6" color="secondary" gutterBottom>
// //                 {backTitle}
// //               </Typography>
// //               <Typography variant="body2">{backContent}</Typography>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // // --- Data ---
// // const services = [
// //   {
// //     frontTitle: "AI-Powered Healthcare Courses",
// //     frontContent: "Personalized modules for medical professionals.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Interactive, up-to-date modules on clinical guidelines, medical procedures, and healthcare technology, powered by advanced AI for personalized learning paths.",
// //     icon: <SchoolIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     frontTitle: "Certification & Compliance",
// //     frontContent: "Track your progress and earn certifications.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Earn accredited certifications and track your progress for licensure and compliance, all within our robust Learning Management System.",
// //     icon: <VerifiedIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     frontTitle: "Telehealth & Simulation Labs",
// //     frontContent: "Practice with virtual patient cases.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Practice real-world scenarios with telemedicine modules, virtual patient cases, and immersive simulation labs for hands-on experience.",
// //     icon: <LocalHospitalIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     frontTitle: "24/7 Expert Mentorship",
// //     frontContent: "Get guidance from healthcare professionals.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Get guidance from top healthcare professionals and AI tutors anytime, ensuring support and clarity throughout your learning journey.",
// //     icon: <SupportAgentIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     frontTitle: "AI Research & Innovation",
// //     frontContent: "Join cutting-edge healthcare AI projects.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Access cutting-edge research projects and collaborate on AI innovations transforming healthcare.",
// //     icon: <ScienceIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     frontTitle: "Personalized Learning Paths",
// //     frontContent: "Adaptive learning for your goals.",
// //     backTitle: "Learn More",
// //     backContent:
// //       "Customized course recommendations and adaptive learning based on your progress and goals.",
// //     icon: <AutoAwesomeIcon fontSize="large" color="primary" />
// //   }
// // ];

// // const courses = [
// //   {
// //     title: "Cardiology Essentials",
// //     description: "Master the fundamentals of heart health and cardiac care.",
// //     icon: <FavoriteIcon fontSize="large" color="error" />
// //   },
// //   {
// //     title: "Mental Health & Psychology",
// //     description: "Explore mental wellness, therapy, and patient care.",
// //     icon: <PsychologyIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     title: "Vaccination & Immunology",
// //     description: "Learn about vaccines, immunization schedules, and safety.",
// //     icon: <VaccinesIcon fontSize="large" color="success" />
// //   },
// //   {
// //     title: "Emergency Medicine",
// //     description: "Handle critical cases and emergency protocols.",
// //     icon: <HealthAndSafetyIcon fontSize="large" color="secondary" />
// //   },
// //   {
// //     title: "Medical AI & Data Science",
// //     description: "Apply AI in diagnostics and healthcare analytics.",
// //     icon: <ScienceIcon fontSize="large" color="primary" />
// //   },
// //   {
// //     title: "Telemedicine Practice",
// //     description: "Deliver care remotely with telehealth best practices.",
// //     icon: <MedicalServicesIcon fontSize="large" color="action" />
// //   }
// // ];

// // const stats = [
// //   { label: "Courses Delivered", value: 1200 },
// //   { label: "Certified Professionals", value: 850 },
// //   { label: "Expert Mentors", value: 45 },
// //   { label: "Active Learners", value: 5000 }
// // ];

// // const testimonials = [
// //   {
// //     name: "Dr. Ayesha S.",
// //     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
// //     feedback:
// //       "Pragyashal’s AI-powered modules made complex medical concepts easy to grasp. The simulation labs are a game changer for practical learning!",
// //     role: "Resident Doctor, Bengaluru"
// //   },
// //   {
// //     name: "Ravi Kumar",
// //     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// //     feedback:
// //       "The certification tracking and compliance features helped me renew my license efficiently. Highly recommended for healthcare professionals.",
// //     role: "Nurse, Hyderabad"
// //   },
// //   {
// //     name: "Priya Mehra",
// //     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
// //     feedback:
// //       "Interactive content and 24/7 mentorship kept me engaged and confident during my exam preparation.",
// //     role: "Medical Student, Chennai"
// //   }
// // ];

// // const navItems = [
// //   { label: "Home", icon: <EmojiEventsIcon />, anchor: "#home" },
// //   { label: "Courses", icon: <SchoolIcon />, anchor: "#courses" },
// //   { label: "Features", icon: <AutoAwesomeIcon />, anchor: "#features" },
// //   { label: "Demo Video", icon: <ScienceIcon />, anchor: "#demo" },
// //   { label: "Testimonials", icon: <VerifiedIcon />, anchor: "#testimonials" },
// //   { label: "Contact", icon: <SupportAgentIcon />, anchor: "#contact" }
// // ];

// // const socialLinks = [
// //   {
// //     icon: <TwitterIcon />,
// //     label: "Twitter",
// //     href: "https://twitter.com/"
// //   },
// //   {
// //     icon: <LinkedInIcon />,
// //     label: "LinkedIn",
// //     href: "https://linkedin.com/"
// //   },
// //   {
// //     icon: <FacebookIcon />,
// //     label: "Facebook",
// //     href: "https://facebook.com/"
// //   }
// // ];

// // // --- Chatbot Dummy Backend ---
// // const dummyBackend = (message) =>
// //   new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve({
// //         reply:
// //           "This is a dummy AI response. We'll get back to you soon! (You said: " +
// //           message +
// //           ")"
// //       });
// //     }, 900);
// //   });

// // // --- Particles Init Function (IMPORTANT) ---
// // const particlesInit = async (main) => {
// //   await loadFull(main);
// // };

// // const PragyashalHealthcareLanding = () => {
// //   const [drawerOpen, setDrawerOpen] = useState(false);
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [chatInput, setChatInput] = useState("");
// //   const [chatMessages, setChatMessages] = useState([
// //     { from: "bot", text: "👋 Hi! I’m your AI assistant. How can I help you today?" }
// //   ]);
// //   const chatEndRef = useRef();

// //   // Smooth scroll to section
// //   const handleNavClick = (anchor) => {
// //     setDrawerOpen(false);
// //     if (anchor) {
// //       const section = document.querySelector(anchor);
// //       if (section) {
// //         section.scrollIntoView({ behavior: "smooth", block: "start" });
// //       }
// //     }
// //   };

// //   // Chat send handler
// //   const handleChatSend = async () => {
// //     if (!chatInput.trim()) return;
// //     const userMsg = chatInput;
// //     setChatMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
// //     setChatInput("");
// //     // Dummy backend
// //     const res = await dummyBackend(userMsg);
// //     setChatMessages((msgs) => [...msgs, { from: "bot", text: res.reply }]);
// //     setTimeout(() => {
// //       if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
// //     }, 100);
// //   };

// //   // Enter key for chat
// //   const handleChatInputKeyDown = (e) => {
// //     if (e.key === "Enter") handleChatSend();
// //   };

// //   return (
// //     <div
// //       style={{
// //         position: "relative",
// //         minHeight: "100vh",
// //         background: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
// //         fontFamily: "Roboto, Arial, sans-serif",
// //         overflow: "hidden"
// //       }}
// //     >
// //       {/* Animated Particle Background */}
// //       <Particles
// //         id="tsparticles"
// //         init={particlesInit}
// //         options={{
// //           background: { color: { value: "#e3f2fd" } },
// //           fpsLimit: 60,
// //           particles: {
// //             color: { value: "#1976d2" },
// //             links: { enable: true, color: "#1976d2", distance: 120 },
// //             move: { enable: true, speed: 0.5 },
// //             number: { value: 40 },
// //             size: { value: 2 },
// //             shape: { type: "circle" },
// //             opacity: {
// //               value: 0.7,
// //               anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
// //             }
// //           },
// //           interactivity: {
// //             events: {
// //               onHover: { enable: true, mode: "grab" },
// //               onClick: { enable: true, mode: "push" }
// //             },
// //             modes: {
// //               grab: { distance: 140, links: { opacity: 0.6 } },
// //               push: { quantity: 4 }
// //             }
// //           },
// //           detectRetina: true
// //         }}
// //         style={{ position: "absolute", inset: 0, zIndex: 0 }}
// //       />

// //       {/* Sticky Navigation Bar with Brand Logo and Social Icons */}
// //       <AppBar
// //         position="sticky"
// //         color="transparent"
// //         elevation={0}
// //         style={{ background: "rgba(255,255,255,0.92)", zIndex: 10 }}
// //       >
// //         <Toolbar>
// //           <img
// //             src="https://img.icons8.com/color/48/000000/medical-doctor.png"
// //             alt="Pragyashal Logo"
// //             style={{ width: 40, height: 40, marginRight: 10 }}
// //           />
// //           <Typography
// //             variant="h5"
// //             style={{
// //               flexGrow: 1,
// //               color: "#1976d2",
// //               fontWeight: 700,
// //               letterSpacing: 1
// //             }}
// //           >
// //             Pragyashal HealthEd
// //           </Typography>
// //           {/* Desktop Nav */}
// //           <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
// //             {navItems.map(item => (
// //               <Button
// //                 key={item.label}
// //                 color="inherit"
// //                 style={{
// //                   color: "#1976d2",
// //                   marginLeft: 8,
// //                   fontWeight: 500,
// //                   textTransform: "none",
// //                   transition: "color 0.2s"
// //                 }}
// //                 component={motion.button}
// //                 whileHover={{ color: "#43a047" }}
// //                 onClick={() => handleNavClick(item.anchor)}
// //                 startIcon={item.icon}
// //               >
// //                 {item.label}
// //               </Button>
// //             ))}
// //             {socialLinks.map(link => (
// //               <IconButton
// //                 key={link.label}
// //                 href={link.href}
// //                 target="_blank"
// //                 rel="noopener"
// //                 aria-label={link.label}
// //                 size="large"
// //                 sx={{ color: "#1976d2", ml: 1 }}
// //               >
// //                 {link.icon}
// //               </IconButton>
// //             ))}
// //           </Box>
// //           {/* Mobile Nav */}
// //           <Box sx={{ display: { xs: "flex", md: "none" } }}>
// //             <IconButton
// //               color="primary"
// //               size="large"
// //               aria-label="Open navigation"
// //               onClick={() => setDrawerOpen(true)}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Drawer for Mobile Navigation */}
// //       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
// //         <Box sx={{ width: 260, p: 2 }}>
// //           <Box display="flex" alignItems="center" mb={2}>
// //             <img
// //               src="https://img.icons8.com/color/48/000000/medical-doctor.png"
// //               alt="Pragyashal Logo"
// //               style={{ width: 32, height: 32, marginRight: 8 }}
// //             />
// //             <Typography variant="h6" color="primary">
// //               Pragyashal HealthEd
// //             </Typography>
// //             <IconButton
// //               sx={{ ml: "auto" }}
// //               onClick={() => setDrawerOpen(false)}
// //               aria-label="Close navigation"
// //             >
// //               <CloseIcon />
// //             </IconButton>
// //           </Box>
// //           <Divider />
// //           <List>
// //             {navItems.map(item => (
// //               <ListItem
// //                 button
// //                 key={item.label}
// //                 onClick={() => handleNavClick(item.anchor)}
// //               >
// //                 <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
// //                 <ListItemText primary={item.label} />
// //               </ListItem>
// //             ))}
// //           </List>
// //           <Divider />
// //           <Box display="flex" justifyContent="center" mt={1}>
// //             {socialLinks.map(link => (
// //               <IconButton
// //                 key={link.label}
// //                 href={link.href}
// //                 target="_blank"
// //                 rel="noopener"
// //                 aria-label={link.label}
// //                 size="large"
// //                 sx={{ color: "#1976d2", mx: 0.5 }}
// //               >
// //                 {link.icon}
// //               </IconButton>
// //             ))}
// //           </Box>
// //         </Box>
// //       </Drawer>

// //       {/* Hero Section with Illustration */}
// //       <RevealSection id="home">
// //         <Container maxWidth="md" style={{ textAlign: "center", paddingTop: 64, paddingBottom: 32 }}>
// //           <Grid container spacing={4} alignItems="center" justifyContent="center">
// //             <Grid item xs={12} md={6}>
// //               <Typography variant="h2" style={{ fontWeight: 800, color: "#1976d2", marginBottom: 16 }}>
// //                 Empowering Healthcare Professionals with AI
// //               </Typography>
// //               <Typography variant="h6" style={{ color: "#555", marginBottom: 32 }}>
// //                 Personalized, accredited, and interactive learning for medical students and professionals.
// //               </Typography>
// //               <motion.div
// //                 whileHover={{ scale: 1.07 }}
// //                 transition={{ type: "spring", stiffness: 300 }}
// //                 style={{ display: "inline-block" }}
// //               >
// //                 <Button
// //                   variant="contained"
// //                   color="primary"
// //                   size="large"
// //                   style={{
// //                     background: "linear-gradient(90deg, #1976d2 70%, #43a047 100%)",
// //                     color: "#fff",
// //                     fontWeight: 600,
// //                     borderRadius: 24,
// //                     padding: "12px 36px",
// //                     fontSize: "1.1rem"
// //                   }}
// //                   onClick={() => handleNavClick("#courses")}
// //                 >
// //                   Get Started
// //                 </Button>
// //               </motion.div>
// //             </Grid>
// //             <Grid item xs={12} md={6}>
// //               <motion.img
// //                 src="https://undraw.co/api/illustrations/healthcare.svg"
// //                 alt="Healthcare Illustration"
// //                 style={{ width: "100%", maxWidth: 340, margin: "auto" }}
// //                 initial={{ opacity: 0, y: 40 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.3, duration: 1 }}
// //               />
// //             </Grid>
// //           </Grid>
// //         </Container>
// //         <WaveDivider color="#e8f5e9" />
// //       </RevealSection>

// //       {/* Courses Section */}
// //       <RevealSection id="courses">
// //         <Container
// //           maxWidth="lg"
// //           style={{
// //             background: "#e8f5e9",
// //             paddingTop: "3rem",
// //             paddingBottom: "3rem",
// //             borderRadius: "0 0 32px 32px"
// //           }}
// //         >
// //           <Typography
// //             variant="h4"
// //             style={{
// //               color: "#1976d2",
// //               fontWeight: 700,
// //               textAlign: "center",
// //               marginBottom: 32
// //             }}
// //           >
// //             Popular Courses
// //           </Typography>
// //           <Grid container spacing={4} justifyContent="center">
// //             {courses.map((course, i) => (
// //               <Grid item xs={12} sm={6} md={4} key={course.title}>
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 40 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   whileHover={{ scale: 1.06, boxShadow: "0 8px 32px rgba(67, 160, 71, 0.13)" }}
// //                   transition={{
// //                     delay: 0.1 * i,
// //                     duration: 0.7,
// //                     type: "spring",
// //                     stiffness: 100
// //                   }}
// //                 >
// //                   <Card
// //                     elevation={4}
// //                     style={{
// //                       borderRadius: 18,
// //                       padding: "1.5rem 1rem",
// //                       background: "#fff",
// //                       minHeight: 190,
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       alignItems: "center",
// //                       boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
// //                     }}
// //                   >
// //                     <div style={{ marginBottom: 12 }}>{course.icon}</div>
// //                     <Typography
// //                       variant="h6"
// //                       style={{
// //                         color: "#1976d2",
// //                         fontWeight: 700,
// //                         marginBottom: 8,
// //                         textAlign: "center"
// //                       }}
// //                     >
// //                       {course.title}
// //                     </Typography>
// //                     <Typography
// //                       variant="body2"
// //                       style={{ color: "#555", textAlign: "center" }}
// //                     >
// //                       {course.description}
// //                     </Typography>
// //                   </Card>
// //                 </motion.div>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //         <WaveDivider flip color="#e3f2fd" />
// //       </RevealSection>

// //       {/* Features Section with Flip Cards */}
// //       <RevealSection id="features">
// //         <Container
// //           maxWidth="lg"
// //           style={{
// //             paddingTop: "2rem",
// //             paddingBottom: "2rem",
// //             position: "relative",
// //             zIndex: 10
// //           }}
// //         >
// //           <Typography
// //             variant="h4"
// //             style={{
// //               color: "#1976d2",
// //               fontWeight: 700,
// //               textAlign: "center",
// //               marginBottom: 32
// //             }}
// //           >
// //             Platform Features
// //           </Typography>
// //           <Grid container spacing={4} justifyContent="center">
// //             {services.map((service, i) => (
// //               <Grid item xs={12} md={4} key={service.frontTitle}>
// //                 <motion.div
// //                   initial={{ opacity: 0, scale: 0.8, y: 20 }}
// //                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{
// //                     delay: 0.2 * i,
// //                     duration: 0.7,
// //                     type: "spring",
// //                     stiffness: 100
// //                   }}
// //                   style={{ borderRadius: 20, cursor: "pointer" }}
// //                 >
// //                   <FlipCard {...service} />
// //                 </motion.div>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //         <WaveDivider color="#e8f5e9" />
// //       </RevealSection>

// //       {/* Demo Video Section */}
// //       <RevealSection id="demo">
// //         <Container maxWidth="md" style={{ textAlign: "center", padding: "3rem 0" }}>
// //           <Typography variant="h4" style={{ fontWeight: 700, color: "#1976d2", marginBottom: 16 }}>
// //             Watch How Pragyashal Works
// //           </Typography>
// //           <Box display="flex" justifyContent="center" mb={2}>
// //             <motion.video
// //               src="https://www.w3schools.com/html/mov_bbb.mp4"
// //               width="340"
// //               height="200"
// //               autoPlay
// //               muted
// //               loop
// //               style={{ borderRadius: 16, boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)" }}
// //               initial={{ opacity: 0, y: 40 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3, duration: 1 }}
// //             />
// //           </Box>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             style={{
// //               background: "linear-gradient(90deg, #1976d2 70%, #43a047 100%)",
// //               color: "#fff",
// //               fontWeight: 600,
// //               borderRadius: 24,
// //               padding: "10px 28px"
// //             }}
// //           >
// //             Learn More
// //           </Button>
// //         </Container>
// //         <WaveDivider flip color="#e3f2fd" />
// //       </RevealSection>

// //       {/* Impact Stats Section with Animated Counters */}
// //       <RevealSection>
// //         <Container
// //           maxWidth="md"
// //           style={{
// //             paddingTop: "2rem",
// //             paddingBottom: "2rem",
// //             position: "relative",
// //             zIndex: 10,
// //             textAlign: "center"
// //           }}
// //         >
// //           <Typography
// //             variant="h4"
// //             style={{ color: "#1976d2", fontWeight: 700, marginBottom: 24 }}
// //           >
// //             Impact in Numbers
// //           </Typography>
// //           <Grid container spacing={4} justifyContent="center">
// //             {stats.map((stat, i) => (
// //               <Grid item xs={6} md={3} key={stat.label}>
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: 0.2 * i, duration: 0.7 }}
// //                   style={{
// //                     background: "#e8f5e9",
// //                     borderRadius: 16,
// //                     padding: "1.5rem 1rem"
// //                   }}
// //                 >
// //                   <motion.div
// //                     initial={{ scale: 0.8 }}
// //                     whileInView={{ scale: 1 }}
// //                     transition={{
// //                       delay: 0.3 + 0.2 * i,
// //                       type: "spring",
// //                       stiffness: 120
// //                     }}
// //                   >
// //                     <Typography
// //                       variant="h3"
// //                       style={{ color: "#43a047", fontWeight: 700 }}
// //                     >
// //                       <AnimatedCounter value={stat.value} />
// //                     </Typography>
// //                     <Typography
// //                       variant="subtitle1"
// //                       style={{ color: "#1976d2", fontWeight: 600 }}
// //                     >
// //                       {stat.label}
// //                     </Typography>
// //                   </motion.div>
// //                 </motion.div>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //         <WaveDivider flip color="#e3f2fd" />
// //       </RevealSection>

// //       {/* Testimonials Section with Avatars */}
// //       <RevealSection id="testimonials">
// //         <Container
// //           maxWidth="md"
// //           style={{
// //             paddingTop: "2.5rem",
// //             paddingBottom: "2.5rem",
// //             position: "relative",
// //             zIndex: 10
// //           }}
// //         >
// //           <Typography
// //             variant="h4"
// //             style={{
// //               color: "#1976d2",
// //               fontWeight: 700,
// //               textAlign: "center",
// //               marginBottom: 32
// //             }}
// //           >
// //             Success Stories
// //           </Typography>
// //           <Grid container spacing={4} justifyContent="center">
// //             {testimonials.map((testimonial, i) => (
// //               <Grid item xs={12} md={4} key={testimonial.name}>
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: 0.2 * i, duration: 0.7 }}
// //                 >
// //                   <Card
// //                     elevation={2}
// //                     style={{
// //                       borderRadius: 18,
// //                       padding: "2rem 1rem 1.5rem 1rem",
// //                       background: "#fafafa",
// //                       minHeight: 210,
// //                       display: "flex",
// //                       flexDirection: "column",
// //                       alignItems: "center",
// //                       boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
// //                     }}
// //                   >
// //                     <Avatar
// //                       src={testimonial.avatar}
// //                       alt={testimonial.name}
// //                       sx={{
// //                         width: 56,
// //                         height: 56,
// //                         mb: 2,
// //                         border: "2px solid #43a047"
// //                       }}
// //                     />
// //                     <Typography
// //                       variant="body1"
// //                       style={{
// //                         color: "#333",
// //                         fontStyle: "italic",
// //                         marginBottom: 14
// //                       }}
// //                     >
// //                       "{testimonial.feedback}"
// //                     </Typography>
// //                     <Typography
// //                       variant="subtitle2"
// //                       style={{ color: "#43a047", fontWeight: 700 }}
// //                     >
// //                       {testimonial.name}
// //                     </Typography>
// //                     <Typography
// //                       variant="caption"
// //                       style={{ color: "#888" }}
// //                     >
// //                       {testimonial.role}
// //                     </Typography>
// //                   </Card>
// //                 </motion.div>
// //               </Grid>
// //             ))}
// //           </Grid>
// //         </Container>
// //       </RevealSection>

// //       {/* Call to Action Section */}
// //       <RevealSection id="contact">
// //         <Container
// //           maxWidth="md"
// //           style={{
// //             paddingTop: "1.5rem",
// //             paddingBottom: "2rem",
// //             textAlign: "center",
// //             position: "relative",
// //             zIndex: 10
// //           }}
// //         >
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ delay: 0.5, duration: 0.7 }}
// //           >
// //             <Button
// //               variant="contained"
// //               color="secondary"
// //               size="large"
// //               style={{
// //                 background: `linear-gradient(90deg, #43a047 70%, #1976d2 100%)`,
// //                 color: "#fff",
// //                 fontWeight: 600,
// //                 borderRadius: 24,
// //                 padding: "12px 36px",
// //                 fontSize: "1.1rem",
// //                 boxShadow: "0 4px 16px rgba(67, 160, 71, 0.15)"
// //               }}
// //             >
// //               Join the Next Bootcamp
// //             </Button>
// //           </motion.div>
// //         </Container>
// //       </RevealSection>

// //       {/* Floating AI Chatbot Button (Micro-Interaction) */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.8 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ delay: 1.2, duration: 0.5 }}
// //         style={{
// //           position: "fixed",
// //           bottom: 32,
// //           right: 32,
// //           zIndex: 1200
// //         }}
// //       >
// //         <IconButton
// //           color="primary"
// //           size="large"
// //           aria-label="Chat with AI Assistant"
// //           sx={{
// //             background: "#fff",
// //             boxShadow: "0 2px 8px #1976d244",
// //             "&:hover": { background: "#e3f2fd" }
// //           }}
// //           onClick={() => setChatOpen(true)}
// //         >
// //           <ChatBubbleOutlineIcon fontSize="large" />
// //         </IconButton>
// //       </motion.div>

// //       {/* Dummy Chatbot Window */}
// //       <AnimatePresence>
// //         {chatOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 60, scale: 0.95 }}
// //             animate={{ opacity: 1, y: 0, scale: 1 }}
// //             exit={{ opacity: 0, y: 60, scale: 0.95 }}
// //             transition={{ duration: 0.4 }}
// //             style={{
// //               position: "fixed",
// //               bottom: 100,
// //               right: 32,
// //               width: 340,
// //               maxWidth: "90vw",
// //               background: "#fff",
// //               borderRadius: 16,
// //               boxShadow: "0 8px 32px rgba(25, 118, 210, 0.13)",
// //               zIndex: 1300,
// //               overflow: "hidden",
// //               display: "flex",
// //               flexDirection: "column",
// //               maxHeight: 420
// //             }}
// //           >
// //             <Box display="flex" alignItems="center" p={2} bgcolor="#1976d2">
// //               <ChatBubbleOutlineIcon style={{ color: "#fff", marginRight: 8 }} />
// //               <Typography variant="subtitle1" color="#fff" flexGrow={1}>
// //                 Pragyashal AI Assistant
// //               </Typography>
// //               <IconButton
// //                 onClick={() => setChatOpen(false)}
// //                 size="small"
// //                 sx={{ color: "#fff" }}
// //                 aria-label="Close chat"
// //               >
// //                 <CloseIcon />
// //               </IconButton>
// //             </Box>
// //             <Box
// //               p={2}
// //               flex={1}
// //               style={{
// //                 overflowY: "auto",
// //                 background: "#f5f7fa",
// //                 minHeight: 120,
// //                 maxHeight: 240
// //               }}
// //             >
// //               {chatMessages.map((msg, idx) => (
// //                 <motion.div
// //                   key={idx}
// //                   initial={{ opacity: 0, x: msg.from === "user" ? 30 : -30 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.3, delay: idx * 0.1 }}
// //                   style={{
// //                     display: "flex",
// //                     justifyContent:
// //                       msg.from === "user" ? "flex-end" : "flex-start",
// //                     marginBottom: 8
// //                   }}
// //                 >
// //                   <Box
// //                     sx={{
// //                       bgcolor: msg.from === "user" ? "#1976d2" : "#e8f5e9",
// //                       color: msg.from === "user" ? "#fff" : "#333",
// //                       px: 2,
// //                       py: 1,
// //                       borderRadius: 2,
// //                       maxWidth: "75%",
// //                       fontSize: 15,
// //                       boxShadow: 1
// //                     }}
// //                   >
// //                     {msg.text}
// //                   </Box>
// //                 </motion.div>
// //               ))}
// //               <div ref={chatEndRef} />
// //             </Box>
// //             <Paper
// //               component="form"
// //               onSubmit={e => {
// //                 e.preventDefault();
// //                 handleChatSend();
// //               }}
// //               sx={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 px: 1,
// //                 py: 0.5,
// //                 borderTop: "1px solid #e0e0e0",
// //                 bgcolor: "#fff"
// //               }}
// //               elevation={0}
// //             >
// //               <InputBase
// //                 sx={{ ml: 1, flex: 1 }}
// //                 placeholder="Type your message..."
// //                 value={chatInput}
// //                 onChange={e => setChatInput(e.target.value)}
// //                 onKeyDown={handleChatInputKeyDown}
// //                 inputProps={{ "aria-label": "Type your message" }}
// //                 autoFocus
// //               />
// //               <IconButton
// //                 color="primary"
// //                 onClick={handleChatSend}
// //                 aria-label="Send message"
// //                 disabled={!chatInput.trim()}
// //                 type="submit"
// //               >
// //                 <SendIcon />
// //               </IconButton>
// //             </Paper>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Footer */}
// //       <Box
// //         component="footer"
// //         sx={{
// //           textAlign: "center",
// //           py: 3,
// //           background: "rgba(255,255,255,0.7)",
// //           color: "#1976d2",
// //           fontWeight: 500,
// //           letterSpacing: 1,
// //           fontSize: "1.05rem",
// //           position: "relative",
// //           zIndex: 10
// //         }}
// //       >
// //         <Typography variant="body2">
// //           &copy; {new Date().getFullYear()} Pragyashal HealthEd &middot;{" "}
// //           <Link href="#" color="inherit" underline="hover" sx={{ fontWeight: 700 }}>
// //             Privacy Policy
// //           </Link>
// //         </Typography>
// //       </Box>
// //     </div>
// //   );
// // };

// // export default PragyashalHealthcareLanding;

// import React, { useState, useRef, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   Box,
//   Link,
//   Chip,
//   Avatar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Divider,
//   InputBase,
//   Paper
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import SchoolIcon from "@mui/icons-material/School";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import ScienceIcon from "@mui/icons-material/Science";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import SendIcon from "@mui/icons-material/Send";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import VaccinesIcon from "@mui/icons-material/Vaccines";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

// // --- Animated SVG Divider ---
// const WaveDivider = ({ flip = false, color = "#e8f5e9" }) => (
//   <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
//     <svg
//       viewBox="0 0 1200 120"
//       preserveAspectRatio="none"
//       style={{ display: "block", width: "100%", height: 80 }}
//     >
//       <motion.path
//         d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//         fill={color}
//         initial={{ pathLength: 0 }}
//         animate={{ pathLength: 1 }}
//         transition={{ duration: 1.5, ease: "easeInOut" }}
//       />
//     </svg>
//   </div>
// );

// // --- Section Reveal Wrapper ---
// const RevealSection = ({ children, ...props }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   return (
//     <motion.section
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       {...props}
//     >
//       {children}
//     </motion.section>
//   );
// };

// // --- Animated Stat Counter ---
// const AnimatedCounter = ({ value }) => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     if (start === end) return;
//     let incrementTime = 20;
//     let timer = setInterval(() => {
//       start += Math.ceil(end / 50);
//       if (start >= end) {
//         start = end;
//         clearInterval(timer);
//       }
//       setCount(start);
//     }, incrementTime);
//     return () => clearInterval(timer);
//   }, [value]);
//   return <span>{count.toLocaleString()}</span>;
// };

// // --- FlipCard Component with rotate animation on hover and no 'More Info' button ---
// const FlipCard = ({
//   frontTitle,
//   frontContent,
//   backTitle,
//   backContent,
//   icon
// }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   return (
//     <div
//       style={{
//         perspective: 1000,
//         width: 300,
//         height: 260,
//         margin: "auto"
//       }}
//       onMouseEnter={() => setIsFlipped(true)}
//       onMouseLeave={() => setIsFlipped(false)}
//       tabIndex={0}
//       aria-label={`${frontTitle} card, hover or focus to flip`}
//     >
//       <motion.div
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           cursor: "pointer"
//         }}
//         animate={{ rotateY: isFlipped ? 180 : 0 }}
//         transition={{ duration: 0.6, type: "spring" }}
//       >
//         {/* Front Side */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             backfaceVisibility: "hidden",
//             zIndex: isFlipped ? 0 : 1
//           }}
//         >
//           <Card
//             elevation={4}
//             style={{
//               height: "100%",
//               borderRadius: 20,
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               transition: "box-shadow 0.3s"
//             }}
//           >
//             <CardContent style={{ textAlign: "center" }}>
//               <motion.div
//                 animate={{ scale: [1, 1.15, 1] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2,
//                   ease: "easeInOut"
//                 }}
//                 style={{ marginBottom: 12 }}
//               >
//                 {icon}
//               </motion.div>
//               <Typography variant="h6" color="primary" gutterBottom>
//                 {frontTitle}
//               </Typography>
//               <Typography variant="body2">{frontContent}</Typography>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Back Side */}
//         <div
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             backfaceVisibility: "hidden",
//             transform: "rotateY(180deg)",
//             zIndex: isFlipped ? 1 : 0
//           }}
//         >
//           <Card
//             elevation={4}
//             style={{
//               height: "100%",
//               borderRadius: 20,
//               background: "#e3f2fd",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             <CardContent style={{ textAlign: "center" }}>
//               <Typography variant="h6" color="secondary" gutterBottom>
//                 {backTitle}
//               </Typography>
//               <Typography variant="body2">{backContent}</Typography>
//             </CardContent>
//           </Card>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // --- Stacked Courses Section ---
// const courseData = [
//   {
//     title: "Cardiology Essentials",
//     description: "Master the fundamentals of heart health and cardiac care.",
//     icon: <FavoriteIcon fontSize="large" color="error" />
//   },
//   {
//     title: "Mental Health & Psychology",
//     description: "Explore mental wellness, therapy, and patient care.",
//     icon: <PsychologyIcon fontSize="large" color="primary" />
//   },
//   {
//     title: "Vaccination & Immunology",
//     description: "Learn about vaccines, immunization schedules, and safety.",
//     icon: <VaccinesIcon fontSize="large" color="success" />
//   },
//   {
//     title: "Emergency Medicine",
//     description: "Handle critical cases and emergency protocols.",
//     icon: <HealthAndSafetyIcon fontSize="large" color="secondary" />
//   },
//   {
//     title: "Medical AI & Data Science",
//     description: "Apply AI in diagnostics and healthcare analytics.",
//     icon: <ScienceIcon fontSize="large" color="primary" />
//   },
//   {
//     title: "Telemedicine Practice",
//     description: "Deliver care remotely with telehealth best practices.",
//     icon: <MedicalServicesIcon fontSize="large" color="action" />
//   }
// ];

// const cardWidth = 340;
// const cardHeight = 200;
// const overlap = 48; // px overlap between cards

// const StackedCourses = () => {
//   const [topIndex, setTopIndex] = useState(0);

//   // Order cards so the topIndex is last (rendered last = top of stack)
//   const ordered = [];
//   for (let i = 0; i < courseData.length; i++) {
//     const idx = (topIndex + i) % courseData.length;
//     ordered.push({
//       ...courseData[idx],
//       origIndex: idx,
//       isTop: i === courseData.length - 1
//     });
//   }

//   // Move selected card to the top of the stack
//   const handleCardClick = (idx) => {
//     if (idx === topIndex) return;
//     setTopIndex(idx);
//   };

//   return (
//     <Box
//       id="courses"
//       sx={{
//         position: "relative",
//         minHeight: cardHeight + overlap * (courseData.length - 1) + 32,
//         py: 7,
//         background: "#e8f5e9",
//         borderRadius: "0 0 32px 32px",
//         mb: 6
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           color: "#1976d2",
//           fontWeight: 700,
//           textAlign: "center",
//           mb: 5
//         }}
//       >
//         Popular Courses
//       </Typography>
//       <Box
//         sx={{
//           position: "relative",
//           width: cardWidth,
//           mx: "auto",
//           height: cardHeight + overlap * (courseData.length - 1)
//         }}
//       >
//         <AnimatePresence>
//           {ordered.map((course, i) => {
//             const z = i;
//             const y = overlap * i;
//             const isTop = i === courseData.length - 1;
//             return (
//               <motion.div
//                 key={course.title}
//                 layout
//                 initial={{ y: y + 40, scale: 0.95, opacity: 0 }}
//                 animate={{
//                   y,
//                   scale: isTop ? 1.04 : 1,
//                   opacity: 1,
//                   zIndex: z
//                 }}
//                 exit={{ opacity: 0, y: y + 40 }}
//                 transition={{ type: "spring", stiffness: 180, damping: 18 }}
//                 style={{
//                   position: "absolute",
//                   left: 0,
//                   right: 0,
//                   width: cardWidth,
//                   cursor: isTop ? "default" : "pointer",
//                   zIndex: z,
//                   boxShadow: isTop
//                     ? "0 8px 32px rgba(25, 118, 210, 0.18)"
//                     : "0 2px 8px rgba(25, 118, 210, 0.07)",
//                   pointerEvents: isTop ? "auto" : "auto"
//                 }}
//                 onClick={() => handleCardClick(course.origIndex)}
//                 whileHover={
//                   !isTop
//                     ? { scale: 1.03, y: y - 8, boxShadow: "0 8px 32px rgba(67, 160, 71, 0.13)" }
//                     : {}
//                 }
//               >
//                 <Card
//                   elevation={4}
//                   sx={{
//                     borderRadius: 3,
//                     px: 3,
//                     py: 3,
//                     minHeight: cardHeight,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     background: isTop ? "#fff" : "#f3f4f6",
//                     transition: "background 0.3s"
//                   }}
//                 >
//                   <Box sx={{ mb: 2 }}>{course.icon}</Box>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "#1976d2",
//                       fontWeight: 700,
//                       mb: 1,
//                       textAlign: "center"
//                     }}
//                   >
//                     {course.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ color: "#555", textAlign: "center" }}
//                   >
//                     {course.description}
//                   </Typography>
//                   {!isTop && (
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         mt: 2,
//                         color: "#1976d2",
//                         fontWeight: 500,
//                         opacity: 0.7
//                       }}
//                     >
//                       Click to bring to top
//                     </Typography>
//                   )}
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </AnimatePresence>
//       </Box>
//     </Box>
//   );
// };

// // --- Services/Features Data ---
// const services = [
//   {
//     frontTitle: "AI-Powered Healthcare Courses",
//     frontContent: "Personalized modules for medical professionals.",
//     backTitle: "Learn More",
//     backContent:
//       "Interactive, up-to-date modules on clinical guidelines, medical procedures, and healthcare technology, powered by advanced AI for personalized learning paths.",
//     icon: <SchoolIcon fontSize="large" color="primary" />
//   },
//   {
//     frontTitle: "Certification & Compliance",
//     frontContent: "Track your progress and earn certifications.",
//     backTitle: "Learn More",
//     backContent:
//       "Earn accredited certifications and track your progress for licensure and compliance, all within our robust Learning Management System.",
//     icon: <VerifiedIcon fontSize="large" color="primary" />
//   },
//   {
//     frontTitle: "Telehealth & Simulation Labs",
//     frontContent: "Practice with virtual patient cases.",
//     backTitle: "Learn More",
//     backContent:
//       "Practice real-world scenarios with telemedicine modules, virtual patient cases, and immersive simulation labs for hands-on experience.",
//     icon: <LocalHospitalIcon fontSize="large" color="primary" />
//   },
//   {
//     frontTitle: "24/7 Expert Mentorship",
//     frontContent: "Get guidance from healthcare professionals.",
//     backTitle: "Learn More",
//     backContent:
//       "Get guidance from top healthcare professionals and AI tutors anytime, ensuring support and clarity throughout your learning journey.",
//     icon: <SupportAgentIcon fontSize="large" color="primary" />
//   },
//   {
//     frontTitle: "AI Research & Innovation",
//     frontContent: "Join cutting-edge healthcare AI projects.",
//     backTitle: "Learn More",
//     backContent:
//       "Access cutting-edge research projects and collaborate on AI innovations transforming healthcare.",
//     icon: <ScienceIcon fontSize="large" color="primary" />
//   },
//   {
//     frontTitle: "Personalized Learning Paths",
//     frontContent: "Adaptive learning for your goals.",
//     backTitle: "Learn More",
//     backContent:
//       "Customized course recommendations and adaptive learning based on your progress and goals.",
//     icon: <AutoAwesomeIcon fontSize="large" color="primary" />
//   }
// ];

// const stats = [
//   { label: "Courses Delivered", value: 1200 },
//   { label: "Certified Professionals", value: 850 },
//   { label: "Expert Mentors", value: 45 },
//   { label: "Active Learners", value: 5000 }
// ];

// const testimonials = [
//   {
//     name: "Dr. Ayesha S.",
//     avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     feedback:
//       "Pragyashal’s AI-powered modules made complex medical concepts easy to grasp. The simulation labs are a game changer for practical learning!",
//     role: "Resident Doctor, Bengaluru"
//   },
//   {
//     name: "Ravi Kumar",
//     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "The certification tracking and compliance features helped me renew my license efficiently. Highly recommended for healthcare professionals.",
//     role: "Nurse, Hyderabad"
//   },
//   {
//     name: "Priya Mehra",
//     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
//     feedback:
//       "Interactive content and 24/7 mentorship kept me engaged and confident during my exam preparation.",
//     role: "Medical Student, Chennai"
//   }
// ];

// const navItems = [
//   { label: "Home", icon: <EmojiEventsIcon />, anchor: "#home" },
//   { label: "Courses", icon: <SchoolIcon />, anchor: "#courses" },
//   { label: "Features", icon: <AutoAwesomeIcon />, anchor: "#features" },
//   { label: "Demo Video", icon: <ScienceIcon />, anchor: "#demo" },
//   { label: "Testimonials", icon: <VerifiedIcon />, anchor: "#testimonials" },
//   { label: "Contact", icon: <SupportAgentIcon />, anchor: "#contact" }
// ];

// const socialLinks = [
//   {
//     icon: <TwitterIcon />,
//     label: "Twitter",
//     href: "https://twitter.com/"
//   },
//   {
//     icon: <LinkedInIcon />,
//     label: "LinkedIn",
//     href: "https://linkedin.com/"
//   },
//   {
//     icon: <FacebookIcon />,
//     label: "Facebook",
//     href: "https://facebook.com/"
//   }
// ];

// // --- Chatbot Dummy Backend ---
// const dummyBackend = (message) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         reply:
//           "This is a dummy AI response. We'll get back to you soon! (You said: " +
//           message +
//           ")"
//       });
//     }, 900);
//   });

// // --- Particles Init Function (IMPORTANT) ---
// const particlesInit = async (main) => {
//   await loadFull(main);
// };

// const PragyashalHealthcareLanding = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [chatOpen, setChatOpen] = useState(false);
//   const [chatInput, setChatInput] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     { from: "bot", text: "👋 Hi! I’m your AI assistant. How can I help you today?" }
//   ]);
//   const chatEndRef = useRef();

//   // Smooth scroll to section
//   const handleNavClick = (anchor) => {
//     setDrawerOpen(false);
//     if (anchor) {
//       const section = document.querySelector(anchor);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   };

//   // Chat send handler
//   const handleChatSend = async () => {
//     if (!chatInput.trim()) return;
//     const userMsg = chatInput;
//     setChatMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
//     setChatInput("");
//     // Dummy backend
//     const res = await dummyBackend(userMsg);
//     setChatMessages((msgs) => [...msgs, { from: "bot", text: res.reply }]);
//     setTimeout(() => {
//       if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   };

//   // Enter key for chat
//   const handleChatInputKeyDown = (e) => {
//     if (e.key === "Enter") handleChatSend();
//   };

//   return (
//     <div
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
//         fontFamily: "Roboto, Arial, sans-serif",
//         overflow: "hidden"
//       }}
//     >
//       {/* Animated Particle Background */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           background: { color: { value: "#e3f2fd" } },
//           fpsLimit: 60,
//           particles: {
//             color: { value: "#1976d2" },
//             links: { enable: true, color: "#1976d2", distance: 120 },
//             move: { enable: true, speed: 0.5 },
//             number: { value: 40 },
//             size: { value: 2 },
//             shape: { type: "circle" },
//             opacity: {
//               value: 0.7,
//               anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
//             }
//           },
//           interactivity: {
//             events: {
//               onHover: { enable: true, mode: "grab" },
//               onClick: { enable: true, mode: "push" }
//             },
//             modes: {
//               grab: { distance: 140, links: { opacity: 0.6 } },
//               push: { quantity: 4 }
//             }
//           },
//           detectRetina: true
//         }}
//         style={{ position: "absolute", inset: 0, zIndex: 0 }}
//       />

//       {/* Sticky Navigation Bar with Brand Logo and Social Icons */}
//       <AppBar
//         position="sticky"
//         color="transparent"
//         elevation={0}
//         style={{ background: "rgba(255,255,255,0.92)", zIndex: 10 }}
//       >
//         <Toolbar>
//           <img
//             src="https://img.icons8.com/color/48/000000/medical-doctor.png"
//             alt="Pragyashal Logo"
//             style={{ width: 40, height: 40, marginRight: 10 }}
//           />
//           <Typography
//             variant="h5"
//             style={{
//               flexGrow: 1,
//               color: "#1976d2",
//               fontWeight: 700,
//               letterSpacing: 1
//             }}
//           >
//             Pragyashal HealthEd
//           </Typography>
//           {/* Desktop Nav */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
//             {navItems.map(item => (
//               <Button
//                 key={item.label}
//                 color="inherit"
//                 style={{
//                   color: "#1976d2",
//                   marginLeft: 8,
//                   fontWeight: 500,
//                   textTransform: "none",
//                   transition: "color 0.2s"
//                 }}
//                 component={motion.button}
//                 whileHover={{ color: "#43a047" }}
//                 onClick={() => handleNavClick(item.anchor)}
//                 startIcon={item.icon}
//               >
//                 {item.label}
//               </Button>
//             ))}
//             {socialLinks.map(link => (
//               <IconButton
//                 key={link.label}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener"
//                 aria-label={link.label}
//                 size="large"
//                 sx={{ color: "#1976d2", ml: 1 }}
//               >
//                 {link.icon}
//               </IconButton>
//             ))}
//           </Box>
//           {/* Mobile Nav */}
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               color="primary"
//               size="large"
//               aria-label="Open navigation"
//               onClick={() => setDrawerOpen(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile Navigation */}
//       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 260, p: 2 }}>
//           <Box display="flex" alignItems="center" mb={2}>
//             <img
//               src="https://img.icons8.com/color/48/000000/medical-doctor.png"
//               alt="Pragyashal Logo"
//               style={{ width: 32, height: 32, marginRight: 8 }}
//             />
//             <Typography variant="h6" color="primary">
//               Pragyashal HealthEd
//             </Typography>
//             <IconButton
//               sx={{ ml: "auto" }}
//               onClick={() => setDrawerOpen(false)}
//               aria-label="Close navigation"
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List>
//             {navItems.map(item => (
//               <ListItem
//                 button
//                 key={item.label}
//                 onClick={() => handleNavClick(item.anchor)}
//               >
//                 <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.label} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <Box display="flex" justifyContent="center" mt={1}>
//             {socialLinks.map(link => (
//               <IconButton
//                 key={link.label}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener"
//                 aria-label={link.label}
//                 size="large"
//                 sx={{ color: "#1976d2", mx: 0.5 }}
//               >
//                 {link.icon}
//               </IconButton>
//             ))}
//           </Box>
//         </Box>
//       </Drawer>

//       {/* Hero Section with Illustration */}
//       <RevealSection id="home">
//         <Container maxWidth="md" style={{ textAlign: "center", paddingTop: 64, paddingBottom: 32 }}>
//           <Grid container spacing={4} alignItems="center" justifyContent="center">
//             <Grid item xs={12} md={6}>
//               <Typography variant="h2" style={{ fontWeight: 800, color: "#1976d2", marginBottom: 16 }}>
//                 Empowering Healthcare Professionals with AI
//               </Typography>
//               <Typography variant="h6" style={{ color: "#555", marginBottom: 32 }}>
//                 Personalized, accredited, and interactive learning for medical students and professionals.
//               </Typography>
//               <motion.div
//                 whileHover={{ scale: 1.07 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 style={{ display: "inline-block" }}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   size="large"
//                   style={{
//                     background: "linear-gradient(90deg, #1976d2 70%, #43a047 100%)",
//                     color: "#fff",
//                     fontWeight: 600,
//                     borderRadius: 24,
//                     padding: "12px 36px",
//                     fontSize: "1.1rem"
//                   }}
//                   onClick={() => handleNavClick("#courses")}
//                 >
//                   Get Started
//                 </Button>
//               </motion.div>
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <motion.img
//                 src="https://undraw.co/api/illustrations/healthcare.svg"
//                 alt="Healthcare Illustration"
//                 style={{ width: "100%", maxWidth: 340, margin: "auto" }}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 1 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>
//         <WaveDivider color="#e8f5e9" />
//       </RevealSection>

//       {/* Stacked Courses Section */}
//       <RevealSection id="courses">
//         <StackedCourses />
//         <WaveDivider flip color="#e3f2fd" />
//       </RevealSection>

//       {/* Features Section with Flip Cards */}
//       <RevealSection id="features">
//         <Container
//           maxWidth="lg"
//           style={{
//             paddingTop: "2rem",
//             paddingBottom: "2rem",
//             position: "relative",
//             zIndex: 10
//           }}
//         >
//           <Typography
//             variant="h4"
//             style={{
//               color: "#1976d2",
//               fontWeight: 700,
//               textAlign: "center",
//               marginBottom: 32
//             }}
//           >
//             Platform Features
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             {services.map((service, i) => (
//               <Grid item xs={12} md={4} key={service.frontTitle}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8, y: 20 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     delay: 0.2 * i,
//                     duration: 0.7,
//                     type: "spring",
//                     stiffness: 100
//                   }}
//                   style={{ borderRadius: 20, cursor: "pointer" }}
//                 >
//                   <FlipCard {...service} />
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//         <WaveDivider color="#e8f5e9" />
//       </RevealSection>

//       {/* Demo Video Section */}
//       <RevealSection id="demo">
//         <Container maxWidth="md" style={{ textAlign: "center", padding: "3rem 0" }}>
//           <Typography variant="h4" style={{ fontWeight: 700, color: "#1976d2", marginBottom: 16 }}>
//             Watch How Pragyashal Works
//           </Typography>
//           <Box display="flex" justifyContent="center" mb={2}>
//             <motion.video
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//               width="340"
//               height="200"
//               autoPlay
//               muted
//               loop
//               style={{ borderRadius: 16, boxShadow: "0 4px 16px rgba(25, 118, 210, 0.15)" }}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 1 }}
//             />
//           </Box>
//           <Button
//             variant="contained"
//             color="primary"
//             style={{
//               background: "linear-gradient(90deg, #1976d2 70%, #43a047 100%)",
//               color: "#fff",
//               fontWeight: 600,
//               borderRadius: 24,
//               padding: "10px 28px"
//             }}
//           >
//             Learn More
//           </Button>
//         </Container>
//         <WaveDivider flip color="#e3f2fd" />
//       </RevealSection>

//       {/* Impact Stats Section with Animated Counters */}
//       <RevealSection>
//         <Container
//           maxWidth="md"
//           style={{
//             paddingTop: "2rem",
//             paddingBottom: "2rem",
//             position: "relative",
//             zIndex: 10,
//             textAlign: "center"
//           }}
//         >
//           <Typography
//             variant="h4"
//             style={{ color: "#1976d2", fontWeight: 700, marginBottom: 24 }}
//           >
//             Impact in Numbers
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             {stats.map((stat, i) => (
//               <Grid item xs={6} md={3} key={stat.label}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 * i, duration: 0.7 }}
//                   style={{
//                     background: "#e8f5e9",
//                     borderRadius: 16,
//                     padding: "1.5rem 1rem"
//                   }}
//                 >
//                   <motion.div
//                     initial={{ scale: 0.8 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{
//                       delay: 0.3 + 0.2 * i,
//                       type: "spring",
//                       stiffness: 120
//                     }}
//                   >
//                     <Typography
//                       variant="h3"
//                       style={{ color: "#43a047", fontWeight: 700 }}
//                     >
//                       <AnimatedCounter value={stat.value} />
//                     </Typography>
//                     <Typography
//                       variant="subtitle1"
//                       style={{ color: "#1976d2", fontWeight: 600 }}
//                     >
//                       {stat.label}
//                     </Typography>
//                   </motion.div>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//         <WaveDivider flip color="#e3f2fd" />
//       </RevealSection>

//       {/* Testimonials Section with Avatars */}
//       <RevealSection id="testimonials">
//         <Container
//           maxWidth="md"
//           style={{
//             paddingTop: "2.5rem",
//             paddingBottom: "2.5rem",
//             position: "relative",
//             zIndex: 10
//           }}
//         >
//           <Typography
//             variant="h4"
//             style={{
//               color: "#1976d2",
//               fontWeight: 700,
//               textAlign: "center",
//               marginBottom: 32
//             }}
//           >
//             Success Stories
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             {testimonials.map((testimonial, i) => (
//               <Grid item xs={12} md={4} key={testimonial.name}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.2 * i, duration: 0.7 }}
//                 >
//                   <Card
//                     elevation={2}
//                     style={{
//                       borderRadius: 18,
//                       padding: "2rem 1rem 1.5rem 1rem",
//                       background: "#fafafa",
//                       minHeight: 210,
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
//                     }}
//                   >
//                     <Avatar
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       sx={{
//                         width: 56,
//                         height: 56,
//                         mb: 2,
//                         border: "2px solid #43a047"
//                       }}
//                     />
//                     <Typography
//                       variant="body1"
//                       style={{
//                         color: "#333",
//                         fontStyle: "italic",
//                         marginBottom: 14
//                       }}
//                     >
//                       "{testimonial.feedback}"
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       style={{ color: "#43a047", fontWeight: 700 }}
//                     >
//                       {testimonial.name}
//                     </Typography>
//                     <Typography
//                       variant="caption"
//                       style={{ color: "#888" }}
//                     >
//                       {testimonial.role}
//                     </Typography>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </RevealSection>

//       {/* Call to Action Section */}
//       <RevealSection id="contact">
//         <Container
//           maxWidth="md"
//           style={{
//             paddingTop: "1.5rem",
//             paddingBottom: "2rem",
//             textAlign: "center",
//             position: "relative",
//             zIndex: 10
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.5, duration: 0.7 }}
//           >
//             <Button
//               variant="contained"
//               color="secondary"
//               size="large"
//               style={{
//                 background: `linear-gradient(90deg, #43a047 70%, #1976d2 100%)`,
//                 color: "#fff",
//                 fontWeight: 600,
//                 borderRadius: 24,
//                 padding: "12px 36px",
//                 fontSize: "1.1rem",
//                 boxShadow: "0 4px 16px rgba(67, 160, 71, 0.15)"
//               }}
//             >
//               Join the Next Bootcamp
//             </Button>
//           </motion.div>
//         </Container>
//       </RevealSection>

//       {/* Floating AI Chatbot Button (Micro-Interaction) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 1.2, duration: 0.5 }}
//         style={{
//           position: "fixed",
//           bottom: 32,
//           right: 32,
//           zIndex: 1200
//         }}
//       >
//         <IconButton
//           color="primary"
//           size="large"
//           aria-label="Chat with AI Assistant"
//           sx={{
//             background: "#fff",
//             boxShadow: "0 2px 8px #1976d244",
//             "&:hover": { background: "#e3f2fd" }
//           }}
//           onClick={() => setChatOpen(true)}
//         >
//           <ChatBubbleOutlineIcon fontSize="large" />
//         </IconButton>
//       </motion.div>

//       {/* Dummy Chatbot Window */}
//       <AnimatePresence>
//         {chatOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 60, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 60, scale: 0.95 }}
//             transition={{ duration: 0.4 }}
//             style={{
//               position: "fixed",
//               bottom: 100,
//               right: 32,
//               width: 340,
//               maxWidth: "90vw",
//               background: "#fff",
//               borderRadius: 16,
//               boxShadow: "0 8px 32px rgba(25, 118, 210, 0.13)",
//               zIndex: 1300,
//               overflow: "hidden",
//               display: "flex",
//               flexDirection: "column",
//               maxHeight: 420
//             }}
//           >
//             <Box display="flex" alignItems="center" p={2} bgcolor="#1976d2">
//               <ChatBubbleOutlineIcon style={{ color: "#fff", marginRight: 8 }} />
//               <Typography variant="subtitle1" color="#fff" flexGrow={1}>
//                 Pragyashal AI Assistant
//               </Typography>
//               <IconButton
//                 onClick={() => setChatOpen(false)}
//                 size="small"
//                 sx={{ color: "#fff" }}
//                 aria-label="Close chat"
//               >
//                 <CloseIcon />
//               </IconButton>
//             </Box>
//             <Box
//               p={2}
//               flex={1}
//               style={{
//                 overflowY: "auto",
//                 background: "#f5f7fa",
//                 minHeight: 120,
//                 maxHeight: 240
//               }}
//             >
//               {chatMessages.map((msg, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: msg.from === "user" ? 30 : -30 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: idx * 0.1 }}
//                   style={{
//                     display: "flex",
//                     justifyContent:
//                       msg.from === "user" ? "flex-end" : "flex-start",
//                     marginBottom: 8
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       bgcolor: msg.from === "user" ? "#1976d2" : "#e8f5e9",
//                       color: msg.from === "user" ? "#fff" : "#333",
//                       px: 2,
//                       py: 1,
//                       borderRadius: 2,
//                       maxWidth: "75%",
//                       fontSize: 15,
//                       boxShadow: 1
//                     }}
//                   >
//                     {msg.text}
//                   </Box>
//                 </motion.div>
//               ))}
//               <div ref={chatEndRef} />
//             </Box>
//             <Paper
//               component="form"
//               onSubmit={e => {
//                 e.preventDefault();
//                 handleChatSend();
//               }}
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 px: 1,
//                 py: 0.5,
//                 borderTop: "1px solid #e0e0e0",
//                 bgcolor: "#fff"
//               }}
//               elevation={0}
//             >
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Type your message..."
//                 value={chatInput}
//                 onChange={e => setChatInput(e.target.value)}
//                 onKeyDown={handleChatInputKeyDown}
//                 inputProps={{ "aria-label": "Type your message" }}
//                 autoFocus
//               />
//               <IconButton
//                 color="primary"
//                 onClick={handleChatSend}
//                 aria-label="Send message"
//                 disabled={!chatInput.trim()}
//                 type="submit"
//               >
//                 <SendIcon />
//               </IconButton>
//             </Paper>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Footer */}
//       <Box
//         component="footer"
//         sx={{
//           textAlign: "center",
//           py: 3,
//           background: "rgba(255,255,255,0.7)",
//           color: "#1976d2",
//           fontWeight: 500,
//           letterSpacing: 1,
//           fontSize: "1.05rem",
//           position: "relative",
//           zIndex: 10
//         }}
//       >
//         <Typography variant="body2">
//           &copy; {new Date().getFullYear()} Pragyashal HealthEd &middot;{" "}
//           <Link href="#" color="inherit" underline="hover" sx={{ fontWeight: 700 }}>
//             Privacy Policy
//           </Link>
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// export default PragyashalHealthcareLanding;

import React, { useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Box,
  Link,
  Chip,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  InputBase,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VerifiedIcon from "@mui/icons-material/Verified";
import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ScienceIcon from "@mui/icons-material/Science";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendIcon from "@mui/icons-material/Send";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

// --- Animated SVG Divider ---
const WaveDivider = ({ flip = false, color = "#e8f5e9" }) => (
  <div style={{ lineHeight: 0, transform: flip ? "rotate(180deg)" : "none" }}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: 80 }}
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
      style={{
        perspective: 1000,
        width: 300,
        height: 260,
        margin: "auto"
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      tabIndex={0}
      aria-label={`${frontTitle} card, hover or focus to flip`}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          cursor: "pointer"
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 0 : 1
          }}
        >
          <Card
            elevation={4}
            style={{
              height: "100%",
              borderRadius: 20,
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "box-shadow 0.3s"
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                style={{ marginBottom: 12 }}
              >
                {icon}
              </motion.div>
              <Typography variant="h6" color="primary" gutterBottom>
                {frontTitle}
              </Typography>
              <Typography variant="body2">{frontContent}</Typography>
            </CardContent>
          </Card>
        </div>
        {/* Back Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: isFlipped ? 1 : 0
          }}
        >
          <Card
            elevation={4}
            style={{
              height: "100%",
              borderRadius: 20,
              background: "#e3f2fd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6" color="secondary" gutterBottom>
                {backTitle}
              </Typography>
              <Typography variant="body2">{backContent}</Typography>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

// --- Responsive Horizontally Centered Courses Section with No Scrollbar and Card Snap ---
const courses = [
  {
    title: "Cardiology Essentials",
    description: "Master the fundamentals of heart health and cardiac care.",
    icon: "❤️"
  },
  {
    title: "Mental Health & Psychology",
    description: "Explore mental wellness, therapy, and patient care.",
    icon: "🧠"
  },
  {
    title: "Vaccination & Immunology",
    description: "Learn about vaccines, immunization schedules, and safety.",
    icon: "💉"
  },
  {
    title: "Emergency Medicine",
    description: "Handle critical cases and emergency protocols.",
    icon: "🚑"
  },
  {
    title: "Medical AI & Data Science",
    description: "Apply AI in diagnostics and healthcare analytics.",
    icon: "🤖"
  },
  {
    title: "Telemedicine Practice",
    description: "Deliver care remotely with telehealth best practices.",
    icon: "📞"
  }
];

const CARD_WIDTH = 300;
const CARD_GAP = 24;

const CourseSection = () => {
  const containerRef = useRef();
  const cardRefs = useRef([]);

  // Hide scrollbar but keep scrolling[4]
  const hideScrollbarCss = {
    msOverflowStyle: "none",
    scrollbarWidth: "none"
  };

  // Scroll to the clicked card and center it
  const handleCardClick = idx => {
    const container = containerRef.current;
    const card = cardRefs.current[idx];
    if (!container || !card) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    // Calculate the scroll position to center the card
    const scrollLeft =
      card.offsetLeft -
      container.offsetLeft -
      container.clientWidth / 2 +
      card.clientWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });
  };

  return (
    <Box
      id="courses"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: { xs: "32px 8px", md: "40px 20px" },
        overflow: "hidden"
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#1976d2",
          fontWeight: 700,
          textAlign: "center",
          mb: 5
        }}
      >
        Popular Courses
      </Typography>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          gap: `${CARD_GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pb: 2,
          ...hideScrollbarCss
        }}
        style={{
          // Hide scrollbar for Chrome, Safari and Opera[4]
          ...hideScrollbarCss,
        }}
        className="hide-scrollbar"
      >
        {courses.map((course, idx) => (
          <Card
            key={course.title}
            ref={el => (cardRefs.current[idx] = el)}
            sx={{
              flex: "0 0 auto",
              width: CARD_WIDTH,
              height: 220,
              background: "white",
              borderRadius: 2,
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2.5,
              scrollSnapAlign: "center",
              transition: "transform 0.3s, box-shadow 0.3s",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-10px) scale(1.05)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                zIndex: 10
              }
            }}
            onClick={() => handleCardClick(idx)}
          >
            <Box
              sx={{
                fontSize: 48,
                mb: 1.5,
                color: "#1976d2"
              }}
            >
              {course.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "#1976d2",
                mb: 1,
                textAlign: "center"
              }}
            >
              {course.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                textAlign: "center"
              }}
            >
              {course.description}
            </Typography>
          </Card>
        ))}
      </Box>
      <style>
        {`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        `}
      </style>
    </Box>
  );
};

// --- Services/Features Data ---
const services = [
  {
    frontTitle: "AI-Powered Healthcare Courses",
    frontContent: "Personalized modules for medical professionals.",
    backTitle: "Learn More",
    backContent:
      "Interactive, up-to-date modules on clinical guidelines, medical procedures, and healthcare technology, powered by advanced AI for personalized learning paths.",
    icon: <SchoolIcon fontSize="large" color="primary" />
  },
  {
    frontTitle: "Certification & Compliance",
    frontContent: "Track your progress and earn certifications.",
    backTitle: "Learn More",
    backContent:
      "Earn accredited certifications and track your progress for licensure and compliance, all within our robust Learning Management System.",
    icon: <VerifiedIcon fontSize="large" color="primary" />
  },
  {
    frontTitle: "Telehealth & Simulation Labs",
    frontContent: "Practice with virtual patient cases.",
    backTitle: "Learn More",
    backContent:
      "Practice real-world scenarios with telemedicine modules, virtual patient cases, and immersive simulation labs for hands-on experience.",
    icon: <LocalHospitalIcon fontSize="large" color="primary" />
  },
  {
    frontTitle: "24/7 Expert Mentorship",
    frontContent: "Get guidance from healthcare professionals.",
    backTitle: "Learn More",
    backContent:
      "Get guidance from top healthcare professionals and AI tutors anytime, ensuring support and clarity throughout your learning journey.",
    icon: <SupportAgentIcon fontSize="large" color="primary" />
  },
  {
    frontTitle: "AI Research & Innovation",
    frontContent: "Join cutting-edge healthcare AI projects.",
    backTitle: "Learn More",
    backContent:
      "Access cutting-edge research projects and collaborate on AI innovations transforming healthcare.",
    icon: <ScienceIcon fontSize="large" color="primary" />
  },
  {
    frontTitle: "Personalized Learning Paths",
    frontContent: "Adaptive learning for your goals.",
    backTitle: "Learn More",
    backContent:
      "Customized course recommendations and adaptive learning based on your progress and goals.",
    icon: <AutoAwesomeIcon fontSize="large" color="primary" />
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
  { label: "Home", icon: <EmojiEventsIcon />, anchor: "#home" },
  { label: "Courses", icon: <SchoolIcon />, anchor: "#courses" },
  { label: "Features", icon: <AutoAwesomeIcon />, anchor: "#features" },
  { label: "Testimonials", icon: <VerifiedIcon />, anchor: "#testimonials" },
  { label: "Contact", icon: <SupportAgentIcon />, anchor: "#contact" }
];

const socialLinks = [
  {
    icon: <TwitterIcon />,
    label: "Twitter",
    href: "https://twitter.com/"
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    href: "https://linkedin.com/"
  },
  {
    icon: <FacebookIcon />,
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

const PragyashalHealthcareLanding = () => {
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
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%)",
        fontFamily: "Roboto, Arial, sans-serif",
        overflow: "hidden"
      }}
    >
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

      {/* Sticky Navigation Bar with Brand Logo and Social Icons */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        style={{ background: "rgba(255,255,255,0.92)", zIndex: 10 }}
      >
        <Toolbar>
          <img
            src="https://img.icons8.com/color/48/000000/medical-doctor.png"
            alt="Pragyashal Logo"
            style={{ width: 40, height: 40, marginRight: 10 }}
          />
          <Typography
            variant="h5"
            style={{
              flexGrow: 1,
              color: "#1976d2",
              fontWeight: 700,
              letterSpacing: 1
            }}
          >
            Pragyashal HealthEd
          </Typography>
          {/* Desktop Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {navItems.map(item => (
              <Button
                key={item.label}
                color="inherit"
                style={{
                  color: "#1976d2",
                  marginLeft: 8,
                  fontWeight: 500,
                  textTransform: "none",
                  transition: "color 0.2s"
                }}
                component={motion.button}
                whileHover={{ color: "#43a047" }}
                onClick={() => handleNavClick(item.anchor)}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            ))}
            {socialLinks.map(link => (
              <IconButton
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                aria-label={link.label}
                size="large"
                sx={{ color: "#1976d2", ml: 1 }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
          {/* Mobile Nav */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="primary"
              size="large"
              aria-label="Open navigation"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <img
              src="https://img.icons8.com/color/48/000000/medical-doctor.png"
              alt="Pragyashal Logo"
              style={{ width: 32, height: 32, marginRight: 8 }}
            />
            <Typography variant="h6" color="primary">
              Pragyashal HealthEd
            </Typography>
            <IconButton
              sx={{ ml: "auto" }}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map(item => (
              <ListItem
                button
                key={item.label}
                onClick={() => handleNavClick(item.anchor)}
              >
                <ListItemIcon sx={{ color: "#1976d2" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box display="flex" justifyContent="center" mt={1}>
            {socialLinks.map(link => (
              <IconButton
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                aria-label={link.label}
                size="large"
                sx={{ color: "#1976d2", mx: 0.5 }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Hero Section */}
      <RevealSection id="home">
        <Container maxWidth="md" style={{ textAlign: "center", paddingTop: 64, paddingBottom: 32 }}>
          <Typography variant="h2" style={{ fontWeight: 800, color: "#1976d2", marginBottom: 16 }}>
            Empowering Healthcare Professionals with AI
          </Typography>
          <Typography variant="h6" style={{ color: "#555", marginBottom: 32 }}>
            Personalized, accredited, and interactive learning for medical students and professionals.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                background: "linear-gradient(90deg, #1976d2 70%, #43a047 100%)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 24,
                padding: "12px 36px",
                fontSize: "1.1rem"
              }}
              onClick={() => handleNavClick("#courses")}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
        <WaveDivider color="#e8f5e9" />
      </RevealSection>

      {/* Horizontally Scrollable Courses Section */}
      <RevealSection id="courses">
        <CourseSection />
        <WaveDivider flip color="#e3f2fd" />
      </RevealSection>

      {/* Features Section with Flip Cards */}
      <RevealSection id="features">
        <Container
          maxWidth="lg"
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            position: "relative",
            zIndex: 10
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "#1976d2",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 32
            }}
          >
            Platform Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, i) => (
              <Grid item xs={12} md={4} key={service.frontTitle}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 * i,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{ borderRadius: 20, cursor: "pointer" }}
                >
                  <FlipCard {...service} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
        <WaveDivider color="#e8f5e9" />
      </RevealSection>

      {/* Impact Stats Section with Animated Counters */}
      <RevealSection>
        <Container
          maxWidth="md"
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            position: "relative",
            zIndex: 10,
            textAlign: "center"
          }}
        >
          <Typography
            variant="h4"
            style={{ color: "#1976d2", fontWeight: 700, marginBottom: 24 }}
          >
            Impact in Numbers
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i, duration: 0.7 }}
                  style={{
                    background: "#e8f5e9",
                    borderRadius: 16,
                    padding: "1.5rem 1rem"
                  }}
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
                    <Typography
                      variant="h3"
                      style={{ color: "#43a047", fontWeight: 700 }}
                    >
                      <AnimatedCounter value={stat.value} />
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#1976d2", fontWeight: 600 }}
                    >
                      {stat.label}
                    </Typography>
                  </motion.div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
        <WaveDivider flip color="#e3f2fd" />
      </RevealSection>

      {/* Testimonials Section with Avatars */}
      <RevealSection id="testimonials">
        <Container
          maxWidth="md"
          style={{
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            position: "relative",
            zIndex: 10
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "#1976d2",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: 32
            }}
          >
            Success Stories
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, i) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * i, duration: 0.7 }}
                >
                  <Card
                    elevation={2}
                    style={{
                      borderRadius: 18,
                      padding: "2rem 1rem 1.5rem 1rem",
                      background: "#fafafa",
                      minHeight: 210,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      boxShadow: "0 2px 8px rgba(25, 118, 210, 0.07)"
                    }}
                  >
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{
                        width: 56,
                        height: 56,
                        mb: 2,
                        border: "2px solid #43a047"
                      }}
                    />
                    <Typography
                      variant="body1"
                      style={{
                        color: "#333",
                        fontStyle: "italic",
                        marginBottom: 14
                      }}
                    >
                      "{testimonial.feedback}"
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ color: "#43a047", fontWeight: 700 }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      style={{ color: "#888" }}
                    >
                      {testimonial.role}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </RevealSection>

      {/* Call to Action Section */}
      <RevealSection id="contact">
        <Container
          maxWidth="md"
          style={{
            paddingTop: "1.5rem",
            paddingBottom: "2rem",
            textAlign: "center",
            position: "relative",
            zIndex: 10
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{
                background: `linear-gradient(90deg, #43a047 70%, #1976d2 100%)`,
                color: "#fff",
                fontWeight: 600,
                borderRadius: 24,
                padding: "12px 36px",
                fontSize: "1.1rem",
                boxShadow: "0 4px 16px rgba(67, 160, 71, 0.15)"
              }}
            >
              Join the Next Bootcamp
            </Button>
          </motion.div>
        </Container>
      </RevealSection>

      {/* Floating AI Chatbot Button (Micro-Interaction) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1200
        }}
      >
        <IconButton
          color="primary"
          size="large"
          aria-label="Chat with AI Assistant"
          sx={{
            background: "#fff",
            boxShadow: "0 2px 8px #1976d244",
            "&:hover": { background: "#e3f2fd" }
          }}
          onClick={() => setChatOpen(true)}
        >
          <ChatBubbleOutlineIcon fontSize="large" />
        </IconButton>
      </motion.div>

      {/* Dummy Chatbot Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "fixed",
              bottom: 100,
              right: 32,
              width: 340,
              maxWidth: "90vw",
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(25, 118, 210, 0.13)",
              zIndex: 1300,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              maxHeight: 420
            }}
          >
            <Box display="flex" alignItems="center" p={2} bgcolor="#1976d2">
              <ChatBubbleOutlineIcon style={{ color: "#fff", marginRight: 8 }} />
              <Typography variant="subtitle1" color="#fff" flexGrow={1}>
                Pragyashal AI Assistant
              </Typography>
              <IconButton
                onClick={() => setChatOpen(false)}
                size="small"
                sx={{ color: "#fff" }}
                aria-label="Close chat"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              p={2}
              flex={1}
              style={{
                overflowY: "auto",
                background: "#f5f7fa",
                minHeight: 120,
                maxHeight: 240
              }}
            >
              {chatMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.from === "user" ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.from === "user" ? "flex-end" : "flex-start",
                    marginBottom: 8
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: msg.from === "user" ? "#1976d2" : "#e8f5e9",
                      color: msg.from === "user" ? "#fff" : "#333",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      maxWidth: "75%",
                      fontSize: 15,
                      boxShadow: 1
                    }}
                  >
                    {msg.text}
                  </Box>
                </motion.div>
              ))}
              <div ref={chatEndRef} />
            </Box>
            <Paper
              component="form"
              onSubmit={e => {
                e.preventDefault();
                handleChatSend();
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 0.5,
                borderTop: "1px solid #e0e0e0",
                bgcolor: "#fff"
              }}
              elevation={0}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Type your message..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={handleChatInputKeyDown}
                inputProps={{ "aria-label": "Type your message" }}
                autoFocus
              />
              <IconButton
                color="primary"
                onClick={handleChatSend}
                aria-label="Send message"
                disabled={!chatInput.trim()}
                type="submit"
              >
                <SendIcon />
              </IconButton>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 3,
          background: "rgba(255,255,255,0.7)",
          color: "#1976d2",
          fontWeight: 500,
          letterSpacing: 1,
          fontSize: "1.05rem",
          position: "relative",
          zIndex: 10
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Pragyashal HealthEd &middot;{" "}
          <Link href="#" color="inherit" underline="hover" sx={{ fontWeight: 700 }}>
            Privacy Policy
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default PragyashalHealthcareLanding;
