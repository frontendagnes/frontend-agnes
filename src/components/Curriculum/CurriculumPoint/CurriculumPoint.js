import React from "react";
import "./CurriculumPoint.css";
import { index } from "../../../assets/utility/functions";
function CurriculumPoint({
  data,
  title,
  content,
  arr,
  isRemove,
  setPoint,
  point,
  id,
}) {
  const removeItem = () => {
    // setPoint(prevState => {
    //   let newPoint = prevState.slice()
    //   newPoint.splice(index, 1)
    //   return newPoint
    // })
    setPoint(() => point.filter((_, i) => i !== id));
  };
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
      <div>
        {isRemove ? (
          <div>
            <button type="button" onClick={() => removeItem(id)}>
              Usuń
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CurriculumPoint;
