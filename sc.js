document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
    const city = 'YOUR_CITY_NAME'; // Replace with your city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            const weatherData = response.data;
            updateGraph(weatherData.main.temp);
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
        }
    };

    const updateGraph = (temperature) => {
        const ctx = document.getElementById('weatherGraph').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temperature'],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data: [temperature],
                        backgroundColor: ['#36A2EB'],
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    fetchData();
});
