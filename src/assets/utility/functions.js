import { nanoid } from "nanoid";
export const index = () => {
  return `item-${nanoid(8)}`;
};

export const today = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  const currentDay = () => {
    if (day < 10) {
      return `0${day}`;
    } else return day;
  };
  const currentMonth = () => {
    if (month < 10) {
      return `0${month}`;
    } else return month;
  };

  let fulldate = `${year}-${currentMonth()}-${currentDay()}`;
  return fulldate;
};

export const removeSkill = (id, skills, setSkills) => {
  const newSkills = [...skills];
  newSkills.splice(id, 1);
  setSkills(newSkills);
};
