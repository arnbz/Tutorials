let request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    let countries = JSON.parse(e.target.responseText);
    let bangladesh = countries.find((country) => country.alpha2Code === 'BD');

    console.log(bangladesh.name);
  }
});

request.open('GET', 'https://restcountries.eu/rest/v2/all');
request.send();
