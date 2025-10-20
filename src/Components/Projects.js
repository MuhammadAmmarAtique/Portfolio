import React from 'react';
import ProjectBox from './ProjectBox';
import TruckManagementSystemImage from '../images/TruckManagementSystemImage.png';
import AuctionPlatformImage from '../images/AuctionPlatformImage.png';
import VideoSharingAppImage from '../images/VideoSharingAppImage.png';
import EcomImage from '../images/EcomImage.png';
import TodoImage from '../images/TodoImage.png';
import BubbleImage from '../images/BubbleImage.png';
import FoodImage from '../images/FoodImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={TruckManagementSystemImage} projectName="TruckManagementSystem" />
        <ProjectBox projectPhoto={AuctionPlatformImage} projectName="AuctionPlatform" />
        <ProjectBox projectPhoto={VideoSharingAppImage} projectName="VideoSharingApp" />
        <ProjectBox projectPhoto={EcomImage} projectName="ReactEcom" />
        <ProjectBox projectPhoto={TodoImage} projectName="ToDosList" />
        <ProjectBox projectPhoto={BubbleImage} projectName="BubbleGame" />
        <ProjectBox projectPhoto={FoodImage} projectName="FoodDelivery" />
      </div>

    </div>
  )
}

export default Projects