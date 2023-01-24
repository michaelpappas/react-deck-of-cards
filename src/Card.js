/**
 * Renders card
 * Props: image
 */
function Card({image, code}){
  return (
    <img src={image} alt={code}/>
  )
}

export default Card