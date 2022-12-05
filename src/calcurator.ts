export function calcurator(num10: number) {
  const num2 = [];
  while (true) {
    const rest = num10 % 2;
    num10 = Math.floor(num10 / 2);
    num2.unshift(rest)
    if (num10 < 1) {
      break;
    }
  }
  return num2.join("");
}

export function calcurator2(num10: number) {
  const numbers = String(num10).split(".");
  let result = calcurator(Number(numbers[0]));
  if(numbers[1] === undefined) return result;
  num10 = Number("0." + numbers[1]);

  const num2 = [];
  let index = 0;

  while (true) {
    num10 *= 2;
    index++;

    if (num10 >= 1) {
      num10 -= 1;
      num2.push(1);
    } else {
      num2.push(0);
    }

    if (num10 === 0 || index === 30) {
      result += "." + num2.join("");
      break;
    }
  }

  return result;
}
