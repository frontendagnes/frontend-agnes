import { useState } from "react";

function useFormState() {
  const [formState, setFormState] = useState({
    checkedApi: [],
    checkedFunctionality: [],
    checkedElements: [],
    areaField: "",
    email: "",
    name: "",
    age: "",
    photos: [],
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeSelect = (e) => {
    const { name, value, checked } = e.target;
    setFormState((prevState) => {
      const updatedList = checked
        ? [...(prevState[name] || []), value]
        : (prevState[name] || []).filter((item) => item !== value);

      return { ...prevState, [name]: updatedList };
    });
  };

  return { formState, setFormState, handleChangeInput, handleChangeSelect };
}

export default useFormState;
