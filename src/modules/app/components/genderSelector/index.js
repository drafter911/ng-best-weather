import template from './template.html';

const controller = function () {
    this.selectedGender = null;
    this.genderOptions = [
        {gender: 'Male'},
        {gender: 'Female'}
    ];

    this.onGenderSelected = () => {
        this.app.genderChangedHandler(this.selectedGender);
    }
};

export const GenderSelector = {
    template,
    controller,
    bindings: {
        disabled: '<'
    },
    require: {
        app: '^^app'
    }
};