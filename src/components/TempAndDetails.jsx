import React from 'react'
import { FaTemperatureQuarter } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import Sun from '../assets/sun.png'
const TempAndDetails = ({
    weather: {
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like
    },
    units,
}) => {
    const verticalIcons = [
        {
            id: 1,
            Icon: FaTemperatureQuarter,
            title: 'Real Feel',
            value: `${feels_like.toFixed()}°`
        },
        {
            id: 2,
            Icon: BsDropletHalf,
            title: 'Humidity',
            value: `${humidity.toFixed()}%`
        },
        {
            id: 3,
            Icon: FaWind,
            title: 'Wind',
            value: `${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}`
        },
    ]

    const horizontalIcons = [
        {
            id: 1,
            Icon: GiSunrise,
            title: 'Sunrise',
            value: `${sunrise}`
        },
        {
            id: 2,
            Icon: GiSunset,
            title: 'Sunset',
            value: `${sunset}`
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: 'High',
            value: `${temp_max.toFixed()}°${units === 'metric' ? 'C' : 'F'}`
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: 'Low',
            value: `${temp_min.toFixed()}°${units === 'metric' ? 'C' : 'F'}`
        }
    ]
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between py-3'>
            <img src={icon} alt='weather icon' className='w-20'/>
            <p className='text-5xl'>{`${temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</p>

            <div className='flex flex-col space-y-3 items-start'>
                {
                    verticalIcons.map(({id, Icon, title, value}) => (
                        <div key={id} className='flex font-light text-sm items-center justify-center'>
                    < Icon size={18} className='mr-1'/>
                    {`${title}: `} <span className='font-medium ml-1'>{value}</span>
                        </div>
                    ))
                }

            </div>

        </div>
        
        <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
                {
                    horizontalIcons.map(({id, Icon, title, value}) => (
                        <div key={id} className='flex flex-row items-center'>
                            <Icon size={30}/>
                            <p className='font-light ml-1'>{`${title}: `}
                                <span className='font-medium ml-1'>{value}</span>
                            </p>
                </div>
                    ))
                }
                
            </div>
    </div>
  )
}

export default TempAndDetails;