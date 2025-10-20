import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TruckManagementSystemDesc : "Truck Management System is a full-stack logistics platform for efficiently managing vehicles, jobs, and allocations in real time.",
    TruckManagementSystemGithub : "https://github.com/MuhammadAmmarAtique/truckManagementSystem",
     TruckManagementSystemWebsite: "", 

      AuctionPlatformDesc : "An advanced online auction platform built with the MERN stack, featuring dynamic bidding, user role management, automated commission processing, and secure payment integration.",
    AuctionPlatformGithub : "https://github.com/MuhammadAmmarAtique/auctionPlatform",
    AuctionPlatformWebsite : "",  

    VideoSharingAppDesc : "A full-featured video-sharing platform inspired by YouTube, offering user management, video uploads, subscriptions, playlists, and community interaction features.",
    VideoSharingAppGithub : "https://github.com/MuhammadAmmarAtique/videoSharingApp",
    VideoSharingAppWebsite : "",

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

   const showGithub = desc[projectName + 'Github'] !== "";
  const showDemo = desc[projectName + 'Website'] !== "";
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

             {showGithub && (
          <a href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}

              {showDemo && (
          <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
        </div>
    </div>
  )
}

export default  ProjectBox