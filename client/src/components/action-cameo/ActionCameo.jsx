import "./action-cameo.css";

const ActionCameo = ({ img, header, desc }) => {
  return (
    <article className="action-cameo">
      <img src={img} alt="" />
      <header>{header}</header>
      <p>{desc}</p>
    </article>
  );
};

export default ActionCameo;
