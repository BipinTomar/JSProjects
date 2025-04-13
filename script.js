function setClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
  
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;
  
    secondHand.style.transform = `rotate(${secondDeg}deg) translateY(-50%)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg) translateY(-50%)`;
    hourHand.style.transform = `rotate(${hourDeg}deg) translateY(-50%)`;
  }
  
  setInterval(setClock, 1000);
  setClock();
  