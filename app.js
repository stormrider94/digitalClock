const hourTime = document.querySelector('h2.hour-time')
const minuteTime = document.querySelector('h2.minute-time')
const secondTime = document.querySelector('h2.second-time')
const timing = document.querySelector('#am_or_pm')

function updateTime(){

    const new_date = new Date()
    minutes = new_date.getMinutes()
    hours = new_date.getHours()
    seconds = new_date.getSeconds()
    hourTime.textContent = hours.toString().length < 2 ? `0${hours%12} :` : `${hours%12} :`
    minuteTime.textContent = minutes.toString().length < 2 ? `0${minutes} :` : ` ${minutes} :`
    secondTime.textContent = seconds.toString().length < 2 ? `0${seconds}` : ` ${seconds}`
    if(hours > 12){
        timing.textContent = ` PM`
    }else{
        timing.textContent = ` AM`
    }
}
setInterval(updateTime,1000)
