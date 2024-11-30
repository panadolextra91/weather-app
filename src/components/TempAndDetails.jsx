import React from 'react';
import { FaTemperatureQuarter } from "react-icons/fa6";
import {  FaWind } from 'react-icons/fa';
import { BsDropletHalf } from 'react-icons/bs';
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import Sun from '../assets/sun.png';

const IconDetail = ({ Icon, title, value, size = 18 }) => (
  <div className="flex font-light text-sm items-center justify-center">
    <Icon size={size} className="mr-1" />
    {`${title}: `} <span className="font-medium ml-1">{value}</span>
  </div>
);

const TempAndDetails = ({
  weather: {
    details = 'No details available',
    icon = Sun,
    temp = 0,
    temp_min = 0,
    temp_max = 0,
    sunrise = '--:--',
    sunset = '--:--',
    speed = 0,
    humidity = 0,
    feels_like = 0,
  },
  units,
}) => {
  const verticalIcons = [
    {
      id: 1,
      Icon: FaTemperatureQuarter,
      title: 'Real Feel',
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BsDropletHalf,
      title: 'Humidity',
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FaWind,
      title: 'Wind',
      value: `${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}`,
    },
  ];

  const horizontalIcons = [
    {
      id: 1,
      Icon: GiSunrise,
      title: 'Sunrise',
      value: `${sunrise}`,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: 'Sunset',
      value: `${sunset}`,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: 'High',
      value: `${temp_max.toFixed()}°${units === 'metric' ? 'C' : 'F'}`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: 'Low',
      value: `${temp_min.toFixed()}°${units === 'metric' ? 'C' : 'F'}`,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between py-3">
        <img src={icon} alt={`${details} icon`} className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°${units === 'metric' ? 'C' : 'F'}`}</p>

        <div className="flex flex-col space-y-3 items-start">
          {verticalIcons.map((item) => (
            <IconDetail key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-4 sm:gap-10 text-sm py-3">
        {horizontalIcons.map((item) => (
          <IconDetail key={item.id} {...item} size={30} />
        ))}
      </div>
    </div>
  );
};

export default TempAndDetails;
