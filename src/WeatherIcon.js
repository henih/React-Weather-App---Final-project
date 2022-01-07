import React from "react";
import ReactAnimatedWeatherUpdated from "react-animated-weather-updated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUD_DAY",
    "02n": "PARTLY_CLOUD_NIGHT",
    "03d": "PARTLY_CLOUD_DAY",
    "03n": "PARTLY_CLOUD_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeatherUpdated
      icon={codeMapping[props.code]}
      color="#212121"
      size={48}
      animate={true}
    />
  );
}
