//Variables
const url_api = "https://api.adviceslip.com/advice";

const quoteText = document.querySelector("#quote");
const buttonQuote = document.querySelector("#button-action");
const quoteNumber = document.querySelector("#quote-number");

//consumir api
const fetchNewAdvice = async () => {
  const response = await fetch(url_api);
  const advice = await response.json();
  return advice;
};

const renderAdvice = (adviceObj) => {
  const { id, advice } = adviceObj;
  quoteNumber.textContent = `${id}`;
  quoteText.textContent = `"${advice}"`;
};

const generateNewAdvice = async () => {
  const data = await fetchNewAdvice();
  const advice = data.slip;

  //Render
  renderAdvice(advice);
};
generateNewAdvice();
//Event listener
buttonQuote.addEventListener('click', generateNewAdvice);
