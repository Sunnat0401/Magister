import './Card.css'
const Card = ({title, age, phoneNumber, raduis, border, wh}) => {
    console.log(title, age, phoneNumber);
    const styleComponent= {
        border: border ,
         padding:"10px" ,
         color:"blue",
         width:wh,
         padding: "10px",
         borderRadius: raduis,

    }
  return (
    <div className='card' style={styleComponent}>
        <h1 className='card-title'>{title}</h1>
        <span className='card-age'>{age}</span>
        <p className='card-number'>{phoneNumber }</p>
    </div>
  )
}

export default Card