// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;

while (true) {
  if (sum >= 20) {
    break;
  }
  sum += Number(sum + 1);
}

console.log(sum);