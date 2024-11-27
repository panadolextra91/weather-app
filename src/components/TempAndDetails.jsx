import React from 'react'
import { FaTemperatureQuarter } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Sun from '../assets/sun.png'
const TempAndDetails = () => {
    const verticalIcons = [
        {
            id: 1,
            Icon: FaTemperatureQuarter,
            title: 'Real Feel',
            value: '22°'
        },
        {
            id: 2,
            Icon: BsDropletHalf,
            title: 'Humidity',
            value: '345%'
        },
        {
            id: 3,
            Icon: FaWind,
            title: 'Wind',
            value: '10km/h'
        },
    ]
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Rain</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='weather icon' className='w-20'/>
            <p className='text-5xl'>34°</p>

            <div className='flex flex-col space-y-3 items-start'>
                {
                    verticalIcons.map(({id, Icon, title, value}) => (
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                    < Icon size={18} className='mr-1'/>
                    {`${title}:`} <span className='font-medium ml-1'>{value}</span>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default TempAndDetails;