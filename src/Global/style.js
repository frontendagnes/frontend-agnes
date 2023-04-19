export const style = {
  visible: {
    visibility: "visible",
    transform: `scaleX(${1})`,
  },
  hidden: {
    visibility: "hidden",
    transform: `scaleX(${0})`,
  },
  height100: {
    height: 100 + "%",
  },
  height0: {
    height: 100 + "px",
  },
  input: {
    color: "#ffffff",
    "&::placeholder":{
      color: "#ffffff",
    }
  },
};
