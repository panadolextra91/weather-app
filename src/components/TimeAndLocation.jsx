const TimeAndLocation = ({
  weather: {
    formattedLocalTime = "Time not available",
    name = "Location not available",
    country = "",
  },
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center my-6">
        <p className="text-lg sm:text-xl font-extralight text-gray-300 shadow-sm" aria-label="Local time">
          {formattedLocalTime}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-3xl sm:text-7xl font-bold text-white">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
