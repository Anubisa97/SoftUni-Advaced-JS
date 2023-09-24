function townsToJSON(input) {
  const [, ...items] = input
  let result = [];
  let pattern = /\s?\|\s?/;

  for (const line of items) {
    let [, town, latitude, longitude] = line.split(pattern);

    const obj = {
      Town: town,
      Latitude: roundNumber(latitude),
      Longitude: roundNumber(longitude),
    };
    result.push(obj);
  }

  function roundNumber(num) {
    return Math.round(Number(num) * 100) / 100;
  }

  console.log(JSON.stringify(result));
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
