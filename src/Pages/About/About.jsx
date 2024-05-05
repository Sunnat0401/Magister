import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './About.css'
const About = () => {
  return (
    <div>
        <Navbar/>
      <Card title={"Sevinch"}  age={"21"} phoneNumber={"22" }  raduis={'10px'} border={"10px solid blue"} wh={"300px"}/>
    </div>
  )
}

export default About