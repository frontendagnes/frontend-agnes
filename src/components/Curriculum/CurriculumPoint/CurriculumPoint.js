import React from "react";
import "./CurriculumPoint.css";
import { index } from'../../../assets/utility/functions'
function CurriculumPoint({ data, title, content, arr, isRemove, id, setPoint, point }) {
  const removeItem = (e) =>{
    // const removedItem = e.target.value
    // console.log(removedItem)
    // const newSatet = point.filter((item) => )
  }
  return (
    <div className="curriculumpoint">
      <div className="curriculumpoint__data">{data}</div>
      <div className="curriculumpoint__container">
        <div className="curriculumpoint__title">{title}</div>
        <div className="curriculumpoint__content">{content}</div>
        <ul className="curriculumpoint__skills">
          {arr?.map((item) => (
            <li key={index()}>{item}</li>
          ))}
        </ul>
      </div>
          {isRemove && <button type="button" onClick={removeItem}>Usuń</button>}
    </div>
  );
}

export default CurriculumPoint;
