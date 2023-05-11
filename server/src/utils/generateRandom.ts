export const getRandomNumber = (min = 0, max = 100) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
