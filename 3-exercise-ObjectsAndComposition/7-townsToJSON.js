function townsToJSON(input) {
  let result = [];
  let res = {};
  let pattern = /\b[\w\d.\s]+\b/g;

  for (const line of input) {
    let [town, lat, long] = line.match(pattern);

    if (!res.hasOwnProperty("Town")) {
      res[town] = "";
      res[lat] = "";
      res[long] = "";
    } else {
      lat = Number(lat).toFixed(2);
      lat = Number(lat);
      long = Number(long).toFixed(2);
      long = Number(long);

      res.Town = town;
      res.Latitude = lat;
      res.Longitude = long;

      result.push(JSON.parse(JSON.stringify(res)));

      res.Town = "";
      res.Latitude = "";
      res.Longitude = "";
    }
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
