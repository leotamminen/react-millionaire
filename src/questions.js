// First test questions. Only 1 per difficulty at this point
const questions = [
  {
    id: 1,
    question: "Milloin on elokuu?",
    answers: [
      {
        text: "Syyskuun jälkeen",
        correct: false,
      },
      {
        text: "Lokakuuta ennen",
        correct: true,
      },
      {
        text: "Kesä- ja heinäkuun välissä",
        correct: false,
      },
      {
        text: "Ennen heinäkuuta",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Mikä on maailman suurin (ei korkein) vuoristo?",
    answers: [
      {
        text: "Atlasvuoret",
        correct: false,
      },
      {
        text: "Pyreneet",
        correct: false,
      },
      {
        text: "Andit",
        correct: true,
      },
      {
        text: "Uralvuoristo",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Mistä Martti Ahtisaari sai Nobel-palkinnon?",
    answers: [
      {
        text: "Presidenttiydestä",
        correct: false,
      },
      {
        text: "Tieteestä",
        correct: false,
      },
      {
        text: "Rauhasta",
        correct: true,
      },
      {
        text: "Hyväntekeväisyydestä",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Mikä seuraavista EI ole ohjelmointikieli?",
    answers: [
      {
        text: "Cython",
        correct: false,
      },
      {
        text: "Python",
        correct: false,
      },
      {
        text: "Dython",
        correct: true,
      },
      {
        text: "Jython",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Millä ohjelmointikielellä tämä ohjelma on tehty?",
    answers: [
      {
        text: "Python, MongoDB Atlas, MySQL ja HTML",
        correct: false,
      },
      {
        text: "JavaScript, CSS ja HTML",
        correct: true,
      },
      {
        text: "React, Javascript, HTML ja CSS",
        correct: true,
      },
      {
        text: "Python, Django ja Flask",
        correct: false,
      },
    ],
  },
];

// all 15 available prizesums
const prizeSums = [
  { id: 1, amount: "100 €" },
  { id: 2, amount: "300 €" },
  { id: 3, amount: "500 €" },
  { id: 4, amount: "700 €" },
  { id: 5, amount: "1000 €" },
  { id: 6, amount: "2000 €" },
  { id: 7, amount: "3000 €" },
  { id: 8, amount: "5000 €" },
  { id: 9, amount: "7000 €" },
  { id: 10, amount: "10 000 €" },
  { id: 11, amount: "15 000 €" },
  { id: 12, amount: "30 000 €" },
  { id: 13, amount: "60 000 €" },
  { id: 14, amount: "200 000 €" },
  { id: 15, amount: "1 000 000 €" },
].reverse();

export { prizeSums, questions };
