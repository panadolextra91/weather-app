const Forecast = ({ title, data }) => {
    if (!data || data.length === 0) {
      return <p className="text-gray-500 text-center mt-4">No forecast data available.</p>;
    }
  
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="font-medium uppercase text-lg text-white">{title}</p>
        </div>
        <hr className="my-1" />
  
        <div className="flex items-center justify-between overflow-x-auto">
          {data.map((d, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <p className="font-light text-sm text-white">{d.title}</p>
              <img
                src={d.icon}
                alt={`Weather forecast icon for ${d.title}`}
                className="w-12 my-1"
              />
              <p className="font-medium text-white">{`${d.temp.toFixed()}°`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Forecast;
  