import "./FadeImage.css";

export const FadeImage = ({ imageName, leftSide = false }) => {
  return (
    <img
      src={`./assets/${imageName}`}
      className={`fade-image-${leftSide ? "right" : "left"}`}
      alt={imageName}
    />
  );
};
