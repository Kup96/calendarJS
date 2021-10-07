'use strict';
import {date} from "./Day.js";

function monthFunction(){
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return months[date.getMonth()];
};
let currentMonth = monthFunction();
export {currentMonth}


