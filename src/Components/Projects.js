import React from 'react';
import ProjectBox from './ProjectBox';
import EcomImage from '../images/EcomImage.png';
import TodoImage from '../images/TodoImage.png';
import BubbleImage from '../images/BubbleImage.png';
import FoodImage from '../images/FoodImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={EcomImage} projectName="ReactEcom" />
        <ProjectBox projectPhoto={TodoImage} projectName="ToDosList" />
        <ProjectBox projectPhoto={BubbleImage} projectName="BubbleGame" />
        <ProjectBox projectPhoto={FoodImage} projectName="FoodDelivery" />
      </div>

    </div>
  )
}

export default Projects