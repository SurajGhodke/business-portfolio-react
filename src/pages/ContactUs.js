import React from "react";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "./../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      contact
    </motion.div>
  );
};

export default ContactUs;
