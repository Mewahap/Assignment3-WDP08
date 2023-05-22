// // const myButton = document.getElementById("button");
// // function Button() {
// //   myButton.addEventListener("click", (event) => {
// //     event.preventDefault();
// //     DataCovid();
// //   });
// // }
// // Button();

// // function DataCovid() {
// //           const options = {
// //                     method: 'GET',
// //                     headers: {
// //                               'X-RapidAPI-Key': 'f1c0ef4ebbmshaf32702afe15e93p170100jsna3647bc30b48',
// //                               'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
// //                     }
// //           };

// //           fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia', options)
// //                     .then(response => response.json())
// //                     .then(response => {
// //                               Get(response)
// //                     })
// //                     .catch(err => console.error(err));
// // }

// function Get(data) {
//   const getActiveCases = data.response[0].cases.active;
//   const getNewCases = data.response[0].cases.new;
//   const getRecoveredCases = data.response[0].cases.recovered;
//   const getTotalCases = data.response[0].cases.total;
//   const getDeaths = data.response[0].deaths.total;
//   const getTotalTest = data.response[0].tests.total;

//   const active = document.getElementById("active");
//   const activeku = document.createElement("p");
//   activeku.innerHTML = `${getActiveCases}`;
//   activeku.classList.add("orange-text");
//   active.append(activeku);

//   const recovered = document.getElementById("recovered");
//   const recoveredku = document.createElement("p");
//   recoveredku.innerHTML = `${getRecoveredCases}`;
//   recoveredku.classList.add("orange-text");
//   recovered.append(recoveredku);

//   const newcases = document.getElementById("newcases");
//   const newcasesku = document.createElement("p");
//   newcasesku.innerHTML = `${getNewCases}`;
//   newcasesku.classList.add("orange-text");
//   newcases.append(newcasesku);

//   const totalcases = document.getElementById("totalcases");
//   const totalcasesku = document.createElement("p");
//   totalcasesku.innerHTML = `${getTotalCases}`;
//   totalcasesku.classList.add("orange-text");
//   totalcases.append(totalcasesku);

//   const death = document.getElementById("death");
//   const deathku = document.createElement("p");
//   deathku.innerHTML = `${getDeaths}`;
//   deathku.classList.add("orange-text");
//   death.append(deathku);

//   const totaltest = document.getElementById("totaltest");
//   const totaltestku = document.createElement("p");
//   totaltestku.innerHTML = `${getTotalTest}`;
//   totaltestku.classList.add("orange-text");
//   totaltest.append(totaltestku);
// }
// const clearButton = document.getElementById("hapus");
// function ButtonHapus() {
//   clearButton.addEventListener("click", (event) => {
//     event.preventDefault();
//     hapusdata();
//   });
// }
// ButtonHapus();

// const input = document.querySelector("#input");
// const button = document.querySelector("#button");

// button.addEventListener("click", async () => {
//   // console.log('jalan')
//   const date = new Date();
//   const today = date.toISOString().slice(0, 10);

//   console.log(input.value);
//   // const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`

//   const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "27cb056452msh5b5828efe9719d6p10a1d5jsnb2a20a48df72",
//       "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
//     },
//   };

//   const response = await fetch(BASE_URL, options);
//   const data = await response.json();

//   console.log(data, "<<< in data");
//   if (data.response.length) {
//     const dataResponse = data.response[0];

//     console.log(dataResponse);
//     active.innerText = dataResponse.cases.active;
//     newData.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
//     recovered.innerText = dataResponse.cases.recovered;
//     total.innerText = dataResponse.cases.total;
//     death.innerText = dataResponse.deaths.total;
//     test.innerText = dataResponse.tests.total;
//   }
// });

// // function hapusdata() {
// //   while (active.children.length > 0) {
// //     active.removeChild(active.children[0]);
// //     recovered.removeChild(recovered.children[0]);
// //     newcases.removeChild(newcases.children[0]);
// //     totalcases.removeChild(totalcases.children[0]);
// //     death.removeChild(death.children[0]);
// //     totaltest.removeChild(totaltest.children[0]);
// //   }
// // }

const myButton = document.getElementById("button");

function Button() {
  myButton.addEventListener("click", (event) => {
    event.preventDefault();
    DataCovid();
  });
}

Button();

function DataCovid() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f1c0ef4ebbmshaf32702afe15e93p170100jsna3647bc30b48",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  fetch("https://covid-193.p.rapidapi.com/statistics?country=indonesia", options)
    .then((response) => response.json())
    .then((response) => {
      Get(response);
    })
    .catch((err) => console.error(err));
}

function Get(data) {
  const getActiveCases = data.response[0].cases.active;
  const getNewCases = data.response[0].cases.new;
  const getRecoveredCases = data.response[0].cases.recovered;
  const getTotalCases = data.response[0].cases.total;
  const getDeaths = data.response[0].deaths.total;
  const getTotalTest = data.response[0].tests.total;

  const active = document.getElementById("active");
  active.textContent = getActiveCases;

  const recovered = document.getElementById("recovered");
  recovered.textContent = getRecoveredCases;

  const newcases = document.getElementById("newcases");
  newcases.textContent = getNewCases;

  const totalcases = document.getElementById("totalcases");
  totalcases.textContent = getTotalCases;

  const death = document.getElementById("death");
  death.textContent = getDeaths;

  const totaltest = document.getElementById("totaltest");
  totaltest.textContent = getTotalTest;
}

const clearButton = document.getElementById("hapus");

function ButtonHapus() {
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    hapusdata();
  });
}

ButtonHapus();

const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", async () => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27cb056452msh5b5828efe9719d6p10a1d5jsnb2a20a48df72",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const dataResponse = data.response[0];

    active.innerText = dataResponse.cases.active;
    newData.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recovered.innerText = dataResponse.cases.recovered;
    total.innerText = dataResponse.cases.total;
    death.innerText = dataResponse.deaths.total;
    test.innerText = dataResponse.tests.total;
  }
});

function hapusdata() {
  active.innerHTML = "";
  recovered.innerHTML = "";
  newcases.innerHTML = "";
  totalcases.innerHTML = "";
  death.innerHTML = "";
  totaltest.innerHTML = "";
}
