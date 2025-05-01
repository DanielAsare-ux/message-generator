//Use array to store different components
const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const moods = [
  "happy",
  "adventurous",
  "calm",
  "confident",
  "inspired",
  "focused",
];
const luckyNumbers = [3, 7, 9, 14, 21, 25];

//Create function to randomly select components
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
