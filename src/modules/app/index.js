import angular from 'angular'

import { AppComponent } from './components/app';
import { HeaderComponent } from './components/header';
import { FooterComponent } from "./components/footer";
import { Spinner } from "./components/spinner";
import { GenderSelector } from "./components/genderSelector";
import { WeatherModule } from "./modules/Weather";

export const AppModule = angular.module('app', [WeatherModule])
    .component('app', AppComponent)
    .component('appHeader', HeaderComponent)
    .component('appFooter', FooterComponent)
    .component('spinner', Spinner)
    .component('genderSelector', GenderSelector)
    .name;