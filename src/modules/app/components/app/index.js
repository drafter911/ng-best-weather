import template from './template.html';
import './styles.less';

const controller = function($http) {
    this.citiesList = null;
    this.bestWeatherParams = {
        temperature: 21,
        humidity: 50,
        minBestTemperature: 20,
        maxBestTemperature: 24,
        minBestHumidity: 40,
        maxBestHumidity: 60
    };

    this.$onInit = () => {
        const weatherRequestConfig = {
            params: {
                bbox: '-180,-90,180,90,10',
                APPID: 'a9bc25a3eb8935c6d15283837d3ff319'
            }
        };

        $http.get('https://api.openweathermap.org/data/2.5/box/city', weatherRequestConfig)
            .then(response => {
                this.citiesList = response.data.list;
            }, error => {
                alert('Ooops... Something where wrong :(')
            });
    };

    this.genderChangedHandler = ({ gender }) => {
        this.bestWeatherParams = {
            ...this.bestWeatherParams,
            temperature: gender === 'Female' ? 22 : 21
        };
    }
};

controller.$inject = ['$http'];

export const AppComponent = {
    template,
    controller
};