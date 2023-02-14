const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Utilizzare destructuring per estrarre i primi tre numeri, gli ultimi due numeri e un numero intermedio (ad esempio il numero in posizione 5)

let [primo, secondo, terzo, , quarto, , , , quinto, sesto, settimo = 7] =
  numbers;

console.log(primo, secondo, terzo, quarto, quinto, sesto, settimo);

const tizio = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  job: {
    title: "Software Engineer",
    company: "ACME Inc.",
  },
};

// Utilizzare destructuring per estrarre il nome, la città, il titolo del lavoro e il nome della società e assegnarli a quattro variabili separate

const {
  name: Nome,
  address: { city },
  job: { title, company },
} = tizio;

console.log(Nome, city, title, company);
