import css from "./Description.module.css";

const Description = ({ name, description }) => {
  return (
    <div className={css.descriptionWrapper}>
      <h1 className={css.title}>{name}</h1>
      <p className={css.description}>{description}</p>
    </div>
  );
};

export default Description;
