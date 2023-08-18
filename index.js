const now = new Date() ;

const today = {
    year: now.getFullYear(),
    date: now.getDate(),
    month: now.toLocaleString('en-US', {month: 'short'}),
    day: now.toLocaleString('en-US', {weekday: 'short'}),
}

document.getElementById('year').innerHTML = today.year ;
document.getElementById('month').innerHTML = today.month ;
document.getElementById('date').innerHTML = today.date ;
document.getElementById('day').innerHTML = today.day ;


/* for (let key in today) {
    document.getElementById(key).textContent = today[key] ;
} 반복문 사용가능! */