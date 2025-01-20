export const InfoListSection = ({ title, description, list = [] }) => {
  return (
    <>
      <h2 className="mb-4">
        <em className="descriptionTitle">{title}</em>
      </h2>
      <p className="description mb-4">{description}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <b>{item.title}: </b>
            {item.description}
          </li>
        ))}
      </ul>
    </>
  );
};
