import React from "react";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
function SkillItem({index, item, skills, setSkills, removeSkill }) {
  return (
    <li>
      <span>{item}</span>
      <RemoveCircleIcon
        color="error"
        onClick={() => removeSkill(index, skills, setSkills)}
      />
    </li>
  );
}

export default SkillItem;
