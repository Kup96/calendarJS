'use strict';
export default function monthFunction(){
    let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Ноябрь", "Декабрь"];
    let currentMonth = month[new Date().getMonth()];
    return currentMonth;
}



