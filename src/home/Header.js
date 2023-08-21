import React from "react";
import logo from '../logo.svg';
import Cookies from "js-cookie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";


export default function Header(){
    const [data,setData]=React.useState([])
    const [show,setShow]=React.useState(false)
    React.useEffect(()=> async () => {
        const apiUrl = "https://apis.ccbp.in/restaurants-list/offers";
        const jwtToken = Cookies.get("jwtToken");
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: "GET",
        };
        const response = await fetch(apiUrl, options);
        const Data=await response.json()
        setData(()=>Data.offers)
    },[])

    const navigate=useNavigate()
    function handleClick(event){
        event.target.id==='cart'?navigate('/cart'):navigate('/')
    }
    const logOut=()=>{
        Cookies.remove('jwtToken')
        navigate('/login')}
    const changeShow=()=>setShow(prev=>!prev)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
        <header>
            <nav>
                <div className="Logo">
                    <img src={logo} id='home' onClick={handleClick}></img>
                    <h2>Tasty Kitchens</h2>
                </div>
                <ul className="Nav-contents">
                 <li onClick={handleClick} id='home'>Home</li>
                 <li id="cart"  onClick={handleClick}>Cart</li>
                 <li><button className="logout" onClick={logOut}>Logout</button></li>
                </ul>
                <FaBars className='navicon' onClick={changeShow}/>
            </nav>
            {show && <div className="bar">
                <h4 id='home' onClick={handleClick}>Home</h4>
                <h4 id="cart"  onClick={handleClick}>Cart</h4>
                <h4 onClick={logOut}>Logout</h4>
            </div>}
            <div className="img-container">
                <Slider {...settings}>
                    {data.map((item) => (
                    <img src={item.image_url} key={item.id}/>
                    ))}
                </Slider>
            </div>
        </header>
    )
}

export function NavBar(){
    const [show,setShow]=React.useState(false)
    const navigate=useNavigate()
    function handleClick(event){
        event.target.id==='cart'?navigate('/cart'):navigate('/')
    }
    const logOut=()=>{
        Cookies.remove('jwtToken')
        navigate('/login')}
    const changeShow=()=>setShow(prev=>!prev)

    return(
        <header>
        <nav>
            <div className="Logo">
                <img src={logo} id='home' onClick={handleClick}></img>
                <h2>Tasty Kitchens</h2>
            </div>
            <ul className="Nav-contents">
             <li onClick={handleClick} id='home'>Home</li>
             <li id="cart"  onClick={handleClick}>Cart</li>
             <li><button className="logout" onClick={logOut}>Logout</button></li>
            </ul>
            <FaBars className='navicon' onClick={changeShow}/>
        </nav>
        {show && <div className="bar">
            <h4 id='home' onClick={handleClick}>Home</h4>
            <h4 id="cart"  onClick={handleClick}>Cart</h4>
            <h4 onClick={logOut}>Logout</h4>
        </div>}
    </header>
    )
}