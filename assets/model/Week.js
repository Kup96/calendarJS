'use strict';
import {date} from "./Day.js"


function weekDayFunction(){
        let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        return days[date.getDay()];
}
let weekDay = weekDayFunction();
let weekDayNumber = date.getDay();

export {weekDayNumber, weekDay}


