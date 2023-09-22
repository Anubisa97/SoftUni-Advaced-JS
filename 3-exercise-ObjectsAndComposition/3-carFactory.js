function carFactory(input) {
  let res = {
    model: input.model,
  };

  let power = input.power;
  let color = input.color;
  let carriage = input.carriage;
  let wheelsize = input.wheelsize;

  if (power <= 90) {
    res.engine = { power: 90, volume: 1800 };
  } else if (res.power <= 120) {
    res.engine = { power: 120, volume: 2400 };
  } else {
    res.engine = { power: 200, volume: 3500 };
  }
  if (carriage == "hatchback") {
    res.carriage = { type: "hatchback", color: color }; //color might need fixing
  } else {
    res.carriage = { type: "coupe", color: color };
  }

  if (wheelsize % 2 == 0) {
    wheelsize -= 1;
  }
  res.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

  return res;
}

console.table(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
