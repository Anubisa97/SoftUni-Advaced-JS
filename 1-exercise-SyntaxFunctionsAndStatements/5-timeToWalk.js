function timeToWalk(steps, footPrints, speed) {
  let meters = steps * footPrints;
  let speedInSeconds = speed / 3.6;
  let time = meters / speedInSeconds;
  let breakTime = Math.floor(meters / 500); // може и да не е ок с Math.floor
  let timeInMinutes = Math.floor(time / 60);
  let timeInSeconds = Math.round(time - timeInMinutes * 60);

  console.log(`:${timeInMinutes + breakTime}:${timeInSeconds}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
