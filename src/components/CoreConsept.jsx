export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </li>
  );
}
