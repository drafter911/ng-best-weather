import template from './template.html';
import './style.less';

const controller = function () {
    this.$onChanges = changes => {
        this.currentCity = { ...this.city };
        this.currentCity.main.temp = Math.round(Number(this.currentCity.main.temp));
    }
};

export const CityWeather = {
    template,
    controller,
    bindings: {
        city: '<'
    }
};