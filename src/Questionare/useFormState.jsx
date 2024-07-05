import {useState} from 'react'

function useFormState() {
  const [checkedApi, setCheckedApi] = useState([]);
  const [checkedFunctionality, setCheckedFunctionality] = useState([]);
  const [checkedElements, setCheckedElements] = useState([]);
  const [areaField, setAreaField] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(""); // spam detector
  const [photos, setPhotos] = useState([]);

  return {
    checkedApi,
    setCheckedApi,
    checkedFunctionality,
    setCheckedFunctionality,
    checkedElements,
    setCheckedElements,
    areaField,
    setAreaField,
    email,
    setEmail,
    name,
    setName,
    age,
    setAge,
    photos,
    setPhotos,
  };
}

export default useFormState