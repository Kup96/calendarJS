'use strict';
function weekDayFunction(){
        let days = ["Вc", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
        let weekDay = days[new Date().getDay()];
        return weekDay;
}

let weekDayNumber = new Date().getDay();

export default {weekDayNumber, weekDayFunction}


