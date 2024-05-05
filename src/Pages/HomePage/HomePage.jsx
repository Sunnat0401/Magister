import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import './HomePage.css'
const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Card title="Munisa " age="20" phoneNumber="9997987899" raduis={'20px'} border={"10px  dashed red"} wh={"500px"}/>
    </div>
  )
}

export default HomePage