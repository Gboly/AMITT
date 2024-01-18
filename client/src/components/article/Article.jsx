import "./article.css";

const Article = ({ header, desc }) => {
  return (
    <article className="article">
      <header>{header}</header>
      <p>{desc}</p>
    </article>
  );
};

export default Article;
