function constructionCrew(input) {
  let res = {
  };

  for (const key in input) {
    res[key] = input[key]
  }

  if (res.dizziness == false) {
    return res
  }

  res.levelOfHydrated += (res.weight * res.experience) * 0.1
  res.dizziness = false

  return res
}
constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
constructionCrew({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});
constructionCrew({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
