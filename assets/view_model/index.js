'use strict';

import model from '../model/index.js';

let calendarTable = document.querySelector('.calendarTable');
let currentMonthShow = document.querySelector('.month');

monthFunction();
weekDayFunction();

function calendar(weekDayNumber){
    let calendar = `<table><tr><th>Вс</th><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th>`;
    for (let i = 0; i < weekDayNumber; i++){
        calendar += `<td></td>`;
    }
    for (let y=0; y < 31; y++){
        calendar += `<td> + ${y} + </td>`;
        if (weekDayNumber == 6){
            calendar += '</tr><tr>';
        }
    }
    calendar += '</table>';
    calendarTable.innerHTML = calendar;
}
calendar(weekDayNumber);
currentMonthShow.innerHTML = currentMonth;
