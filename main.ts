// 1-mashq

// function isPrime(number: number): boolean {
//   if (number <= 1) {
//       return false;
//   }

//   if (number <= 3) {
//       return true;
//   }

//   if (number % 2 === 0 || number % 3 === 0) {
//       return false;
//   }

//   for (let i = 5; i * i <= number; i += 6) {
//       if (number % i === 0 || number % (i + 2) === 0) {
//           return false;
//       }
//   }

//   return true;
// }

// const numberToCheck = 29;
// if (isPrime(numberToCheck)) {
//   console.log(`${numberToCheck} tub son.`);
// } else {
//   console.log(`${numberToCheck} tub emas.`);
// }



// 2-msahq

// function isPrime(number: number): boolean {
//   if (number <= 1) {
//       return false;
//   }
//   if (number <= 3) {
//       return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//       return false;
//   }
//   for (let i = 5; i * i <= number; i += 6) {
//       if (number % i === 0 || number % (i + 2) === 0) {
//           return false;
//       }
//   }
//   return true;
// }

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "David" },
//   { id: 5, name: "Eve" },
//   { id: 6, name: "Frank" },
//   { id: 7, name: "Grace" }
// ];

// const primeUsers = users.filter(user => isPrime(user.id));

// console.log(primeUsers);


// 3-mashq

// const users = [
//   { id: 1, name: "Alice", salary: 3000 },
//   { id: 2, name: "Bob", salary: 3500 },
//   { id: 3, name: "Charlie", salary: 4000 },
//   { id: 4, name: "David", salary: 4500 },
//   { id: 5, name: "Eve", salary: 5000 },
//   { id: 6, name: "Frank", salary: 5500 },
//   { id: 7, name: "Grace", salary: 6000 }
// ];

// const totalSalary = users.reduce((total, user) => total + user.salary, 0);

// const assignedUser = { ...users[0], totalSalary: totalSalary };

// console.log(`Barcha userlarning umumiy maoshi: ${totalSalary}`);
// console.log("Umumiy maosh biriktirilgan user:", assignedUser);


//4-mashq

// function getUniqueNumbers(arr: number[]): number[] {
//   return arr.filter((value, index, self) => {
//       return self.indexOf(value) === self.lastIndexOf(value);
//   });
// }

// const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 3, 4];

// const uniqueNumbers = getUniqueNumbers(numbers);

// console.log(uniqueNumbers);


//5-mashq

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "David" },
//   { id: 5, name: "Eve" },
//   { id: 1, name: "Alice" }, 
//   { id: 2, name: "Bob" },   
//   { id: 6, name: "Frank" }
// ];

// function getUniqueUsers(users: { id: number, name: string }[]): { id: number, name: string }[] {
//   const seenIds = new Set<number>(); 
//   return users.filter(user => {
//       if (seenIds.has(user.id)) {
//           return false; 
//       } else {
//           seenIds.add(user.id); 
//           return true; 
//       }
//   });
// }

// const uniqueUsers = getUniqueUsers(users);

// console.log(uniqueUsers);


