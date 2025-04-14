function setClock() {
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const now =  new Date();
  const istStrRing = now.toLocaleString('en-US', {
  timeZone: 'Asia/Kolkata'
  });
  
  const nowIST = new Date(istStrRing);

  const seconds = nowIST.getSeconds();
  const minutes = nowIST.getMinutes();
  const hours = nowIST.getHours();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  const offset = -90;

  secondHand
    .style.transform = `translateY(-50%) rotate(${secondDeg + offset}deg)`;
  minuteHand
    .style.transform = `translateY(-50%) rotate(${minuteDeg + offset}deg)`;
  hourHand
    .style.transform = `translateY(-50%) rotate(${hourDeg  + offset}deg)`;

  // secondHand.style.transform = `rotate(${secondDeg}deg)`;
  // minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  // hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
setClock(); // Run immediately on load
