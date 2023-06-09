export const getRandomNumber = (number) => {
    const random = Math.random();
    const roundedRandom = Math.round(random * number)
  
    return roundedRandom
  }
