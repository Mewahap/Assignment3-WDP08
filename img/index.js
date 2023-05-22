function DataCovid() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f464dfbef0mshc4f8fe0db8250b0p1e68b1jsn2cb0ad1060c6",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  fetch("https://covid-193.p.rapidapi.com/countries", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
