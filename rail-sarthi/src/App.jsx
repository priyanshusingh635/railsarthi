import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import RoutePlanner from './pages/RoutePlanner';
import LiveUpdates from './pages/LiveUpdates';
import Ticketing from './pages/Ticketing';
import Contact from './pages/Contact';
import { FiBarChart, FiDollarSign, FiHome, FiMonitor, FiShoppingCart, FiTag, FiUsers, FiChevronRight } from "react-icons/fi";
import { motion } from 'framer-motion';
 // Assuming custom styles

// Sidebar component with retracting functionality inspired by hover.dev
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const options = [
    { Icon: FiHome, title: "Home", route: "/homepage" },
    { Icon: FiDollarSign, title: "Sales", route: "/ticketing" },
    { Icon: FiMonitor, title: "Live Updates", route: "/live-updates" },
    { Icon: FiShoppingCart, title: "Products", route: "/route-planner" },
    { Icon: FiTag, title: "Tags", route: "/contact" },
    { Icon: FiBarChart, title: "Analytics", route: "/analytics" },
    { Icon: FiUsers, title: "Members", route: "/members" },
  ];

  return (
    <motion.nav
      layout
      className="sidebar sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      {/* Sidebar Toggle and Logo */}
      <div className="sidebar-header">
        <motion.div layout className="logo">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-slate-50">
            {/* Your logo SVG content */}
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" />
          </svg>
        </motion.div>
        <button onClick={() => setOpen(!open)} className="sidebar-toggle">
          <FiChevronRight className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Sidebar Menu Options */}
      <div className="menu-options space-y-1">
        {options.map((option) => (
          <motion.div key={option.title} layout className={`menu-item ${selected === option.title ? "selected" : ""}`}>
            <button
              onClick={() => setSelected(option.title)}
              className="flex items-center space-x-2"
            >
              <option.Icon />
              {open && (
                <motion.span layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {option.title}
                </motion.span>
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="content-area flex-1">
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/route-planner" element={<RoutePlanner />} />
            <Route path="/live-updates" element={<LiveUpdates />} />
            <Route path="/ticketing" element={<Ticketing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
