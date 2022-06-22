import { nanoid } from "nanoid";
import { CircularProgress } from "@mui/material";
// create id
export const index = () => {
  return `val-${nanoid(8)}`;
};

// returns today's date in month-year format
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

// removes data from the array (state)
export const removeSkill = (id, skills, setSkills) => {
  const newSkills = [...skills];
  newSkills.splice(id, 1);
  setSkills(newSkills);
};

export const renderLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      alignItems: "center",
    }}
  >
    <CircularProgress color="success" />
    <span
      style={{
        marginLeft: "10px",
        letterSpacing: "3px",
      }}
    >
      Loading...
    </span>
  </div>
);
//generates a pdf file
// export const generatePDF = (id) => {
//   const input = document.querySelector(`#${id}`);
//   html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL("image/webp");
//     const doc = new jsPDF("p", "mm", "a4");
//     let width = doc.internal.pageSize.getWidth();
//     let pageHeight = doc.internal.pageSize.getHeight();
//     const imgHeight = (canvas.height * width) / canvas.width;
//     let heightLeft = imgHeight;

//     let position = 0;

//     doc.addImage(imgData, "WEBP", 0, position, width, imgHeight);
//     heightLeft -= pageHeight;

//     while (heightLeft >= 0) {
//       position = heightLeft - imgHeight;
//       doc.addPage();
//       doc.addImage(imgData, "WEBP", 0, position, width, imgHeight);
//       heightLeft -= pageHeight;
//     }
//     doc.save("my-resume");
//   });
// };
