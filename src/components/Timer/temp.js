const timer = {
  element: document.querySelector('.timer'),
  hours: 0,
  minutes: 0,
  seconds: 0,
  mseconds: 0,
  status: 0,
};
const tick = () => {
  timer.mseconds++;
  if (timer.mseconds === 100) {
    timer.mseconds = 0;
    timer.seconds++;
  }
  if (timer.seconds === 60) {
    timer.seconds = 0;
    timer.minutes++;
  }
  if (timer.minutes === 60) {
    timer.minutes = 0;
    timer.hours++;
  }
  const mseconds = timer.mseconds < 10 ? `0${timer.mseconds}` : timer.mseconds < 100 ? timer.mseconds : timer.seconds;
  const seconds = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;
  const minutes = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
  const hours = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
  timer.element.innerText = `${hours}:${minutes}:${seconds}:${mseconds}`;
  return timer.status === 1 ? setTimeout(() => tick(), 10) : null;
};
const startTimer = () => {
  if (timer.status === 0) {
    timer.status = 1;
    tick();
  }
};
const stopTimer = () => {
  timer.mseconds--;
  timer.status = 0;
};
const clearTimer = () => {
  stopTimer();
  timer.hours = 0;
  timer.minutes = 0;
  timer.seconds = 0;
  timer.mseconds = -1;
  timer.element.innerText = '00' + ':' + '00' + ':' + '00' + ':' + '00';
};
