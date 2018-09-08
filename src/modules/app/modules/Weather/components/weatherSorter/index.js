import template from './template.html';
import './styles.less';

const controller = function () {

    this.$onChanges = changes => {
      if(changes.bestTemperature.currentValue !== changes.bestTemperature.previousValue) {
          this.citiesWithBestWeather = [];
          this.otherCities = [];
          this.sortCitiesByWeather(this.cities);
      }
    };

    this.sortCitiesByWeather = (cities) => {
        cities.forEach(city => {
            const temp = Math.round(Number(city.main.temp));
            const humidity = Number(city.main.humidity);
            if (temp === this.bestTemperature && humidity === this.bestHumidity) {
                this.citiesWithBestWeather.push(city);
            }
            else if ((temp >= this.minBestTemperature && temp <= this.maxBestTemperature) &&
                (humidity >= this.minBestHumidity && humidity <= this.maxBestHumidity)) {
                this.otherCities.push(city);
            }
        })
    }
};

export const WeatherSorter = {
    template,
    controller,
    bindings: {
        cities: '<',
        bestTemperature: '<',
        minBestTemperature: '<',
        maxBestTemperature: '<',
        bestHumidity: '<',
        minBestHumidity: '<',
        maxBestHumidity: '<'

    }
};