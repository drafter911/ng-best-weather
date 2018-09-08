import angular from 'angular';
import { CityList } from "./components/cityList";
import { CityWeather } from "./components/cityWeather";
import { WeatherSorter } from "./components/weatherSorter";

export const WeatherModule = angular.module('weather', [])
    .component('weatherSorter', WeatherSorter)
    .component('cityList', CityList)
    .component('cityWeather', CityWeather)
    .name;