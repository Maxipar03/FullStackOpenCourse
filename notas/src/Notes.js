//se crea componente para que renderize los elementos y se exporta
export const Notes = ({ content,date,category = [] }) => {
    return(
      <li>
        <h2>{content}</h2>
        {category.map((category) => (
            <p key={category}>{category}</p>
        ))}
        <time>{date}</time>
      </li>
    )
}