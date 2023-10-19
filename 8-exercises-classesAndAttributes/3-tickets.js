function result(data, sort) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  const clonedData = [...data];
  const splitArray = clonedData.map((x) => x.split("|"));
  const ticketList = splitArray.map(
    ([destination, price, status]) => new Tickets(destination, price, status)
  );
  const sortedTickets = ticketList.sort((a, b) => {
    return typeof a[sort] === "number"
      ? a[sort] - b[sort]
      : a[sort].localeCompare(b[sort]);
  });
  return sortedTickets;
}

console.table(
  result(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
