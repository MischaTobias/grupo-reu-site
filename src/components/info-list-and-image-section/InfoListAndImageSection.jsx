import { FadeImage } from "../fade-image/FadeImage";
import { InfoListSection } from "../info-list-section/InfoListSection";

export const InfoListAndImageSection = ({
  title,
  description,
  list = [],
  imageName,
  leftSide = true,
}) => {
  return (
    <div className="row py-5">
      {!!leftSide ? (
        <>
          <div className="col-lg-7 mb-5 mb-lg-0" style={{ height: "100%" }}>
            <InfoListSection {...{ title, description, list }} />
          </div>
          <div className="col-lg-5">
            <FadeImage {...{ imageName, leftSide }} />
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-5">
            <FadeImage {...{ imageName, leftSide }} />
          </div>
          <div className="col-lg-7 mb-5 mb-lg-0" style={{ height: "100%" }}>
            <InfoListSection {...{ title, description, list }} />
          </div>
        </>
      )}
    </div>
  );
};
