import * as model from '../model/index.js';

let calendarTable = document.querySelector('.calendarTable');
let currentMonthShow = document.querySelector('.currentMonth');
let currentDayShow = document.querySelector('.currentDay');
let currentWeekShow = document.querySelector('.currentWeek');

function calendar(){
    let calendar = `<table><tr><th>Вс</th><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th></tr><tr>`;
    for (let i = 0; i < model.weekDayNumber; i++){
        calendar += `<td></td>`;
    };
    let a = model.weekDayNumber-1;
    for (let y=1; y < 32; y++){
        calendar += `<td id = ${y} > ${y} </td>`;
        a++;
        if (a % 7 == 6){
            calendar += '</tr><tr>';
        }
    }
    calendar += '</table>';
    calendarTable.innerHTML = calendar;
}
calendar();

let todayID = document.getElementById(`${model.currentDate}`);
todayID.classList.add("active");

currentMonthShow.innerHTML = model.currentMonth;
currentDayShow.innerHTML = `${model.currentDate} число`;
currentWeekShow.innerHTML = model.weekDay;

