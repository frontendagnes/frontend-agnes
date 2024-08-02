import React from "react";
import { motion } from "framer-motion";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function SkillItem({ index, item, skills, setSkills, removeSkill }) {
  return (
    <motion.li
      positionTransition
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
    >
      <span>{item}</span>
      <RemoveCircleIcon
        color="error"
        onClick={() => removeSkill(index, skills, setSkills)}
      />
    </motion.li>
  );
}

export default SkillItem;
