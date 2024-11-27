const TopButtons = ({setQuery}) => {
    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'New York'
        },
        {
            id: 3,
            name: 'Tokyo'
        },
        {
            id: 4,
            name: 'Paris'
        },
        {
            id: 5,
            name: 'Ho Chi Minh'
        }
    ];
    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                    <button key={city.id} className="text-lg text-white font-medium hover:scale-125 px-3 py-2 rounded-md transition duration-200 ease-in" onClick={() => setQuery({ q: city.name})}>{city.name}</button>
            ))
            }
        </div>
    );
};

export default TopButtons;