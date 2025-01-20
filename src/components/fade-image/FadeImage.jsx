import "./FadeImage.css";

export const FadeImage = ({ imageName, isLeftFade = false }) => {
  return (
    <img
      src={`/public/assets/${imageName}`}
      className={`fade-image-${isLeftFade ? "left" : "right"}`}
      alt={imageName}
    />
  );
};
