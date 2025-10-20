import React from 'react';
import ProjectBox from './ProjectBox';
import TruckManagementSystemImage from '../Images/TruckManagementSystemImage.png';
import AuctionPlatformImage from '../Images/AuctionPlatformImage.png';
import VideoSharingAppImage from '../Images/VideoSharingAppImage.png';
import EcomImage from '../Images/EcomImage.png';
import TodoImage from '../Images/TodoImage.png';
import BubbleImage from '../Images/BubbleImage.png';
import FoodImage from '../Images/FoodImage.png';

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