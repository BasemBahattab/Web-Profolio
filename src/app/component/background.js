"use client";
import { useState, useEffect } from 'react'

import dayImage from './images/Background/background-day.png';
import nightImage from './images/Background/background-night.png';

export default function Background() {
  const [image, setImage] = useState({});

  const currTime = new Date();
  const hour = currTime.getHours();

  useEffect(() => {
    setImage(dayImage);
    if (5 > hour || hour > 18) {
      console.log(hour);
      setImage(nightImage);
    }
  }, []);


  return (
    <div className='bg-img'>
      <img src={image.src}/>
    </div>
  );
}