function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  const input = document.querySelector("#inputs textarea");

  function onClick() {
    const inputConvert = JSON.parse(input.value);
    const bestRestOutput = document.querySelector("#bestRestaurant p");
    const bestRestWorkersOutput = document.querySelector("#workers p");

   let rest = {}

   for (const line of inputConvert) {
      let [restName, workersString] = line.split(` - `)
      let workers = workersString.split(", ")
      if (!rest.hasOwnProperty(restName)) {
         rest[restName] = {
            avgSalary: calcAvgSalary(workers),
            bestSalary: calcBestSalary(workers),
            workers: workers,
         }
      } else {
         rest[restName].workers = concatWorkers(rest[restName].workers, workers)
         rest[restName].avgSalary = calcAvgSalary(rest[restName].workers)
         rest[restName].bestSalary = calcBestSalary(rest[restName].workers)
      }
   }

   let sortRestaurant = Object.entries(rest).sort((a, b)=> b[1].avgSalary - a[1].avgSalary) 
   let bestRestaurant = sortRestaurant[0]
   let workerAsText = ""
   bestRestaurant[1].workers.sort(sortWorkers).forEach(e => {
      let [name, salary] = e.split(" ")
      workerAsText += `Name: ${name} With Salary: ${salary} `
      return
   });

   bestRestOutput.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
   bestRestWorkersOutput.textContent = workerAsText



function sortWorkers(workerA, workerB) {
   let [nameA, salaryB] = workerA.split(" ")
   let [nameB, salaryA] = workerB.split(" ")
   salaryA = Number(salaryA)
   salaryB = Number(salaryB)
   return salaryA - salaryB
}      

function concatWorkers(oldWorkers, newWorkers) {
   return oldWorkers.concat(newWorkers)
}

function calcAvgSalary(workers) {
   let bestSalary = 0
   for (const worker of workers) {
      let [name, salary] = worker.split(" ")
      salary = Number(salary)
      if (bestSalary < salary) {
         bestSalary = salary
         return
      }
   }
   return bestSalary
}

function calcBestSalary(workers) {
   let sum = 0
   for (const worker of workers) {
      let [name, salary] = worker.split(" ")
      salary = Number(salary)
      sum += salary
   }
   sum = sum / workers.length
   return sum
}
  }
}
