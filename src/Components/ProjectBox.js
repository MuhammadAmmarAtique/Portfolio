import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ReactEcomDesc : "This is an E-commerce web app implemented using React.js and third party libraries",
    ReactEcomGithub : "https://github.com/MuhammadAmmarAtique/ReactEcom",
    ReactEcomWebsite : "https://ammar1ecom.netlify.app/",

    ToDosListDesc : "A Simple TODO list web app built with HTML, BootstrapCSS and JS.",
    ToDosListGithub : "https://github.com/MuhammadAmmarAtique/ToDo-List",
    ToDosListWebsite : "https://muhammadammaratique.github.io/ToDo-List/",

    BubbleGameDesc:"A Bubble-Game implemented using HTML, CSS & JS.",
    BubbleGameGithub:"https://github.com/MuhammadAmmarAtique/Bubble-Game",
    BubbleGameWebsite:"https://muhammadammaratique.github.io/Bubble-Game/",
    
    FoodDeliveryDesc:"A landing page of Food Delivery Website using HTML & CSS.",
    FoodDeliveryGithub:"https://github.com/MuhammadAmmarAtique/FoodDeliveryWeb",
    FoodDeliveryWebsite:"https://muhammadammaratique.github.io/FoodDeliveryWeb/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox