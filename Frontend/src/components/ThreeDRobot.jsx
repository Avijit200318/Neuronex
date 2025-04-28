import React from 'react'
import Spline from '@splinetool/react-spline';

export default function ThreeDRobot() {
    return (
        <Spline scene={import.meta.env.VITE_THREED_ROBOT} className='scale-[0.8]' />
      );
}