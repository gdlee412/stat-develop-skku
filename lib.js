function sum(numbers){
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers){
    return sum(numbers) / numbers.length;
}

function max(numbers){
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function med(numbers){
    numbers.sort((x, y) => x - y);
    const size = numbers.length;
    const mid = Math.floor(numbers.length / 2);
    return size % 2 === 0 ? (numbers[mid] + numbers[mid - 1]) / 2 : numbers[mid];
}

function iqr(numbers){
    let temp = numbers.sort((x, y) => x - y);
    const size = numbers.length;
    let q1, q3;
    if(Math.floor(size / 2) % 2 === 0)
    {
        q1 = (temp[Math.floor(size / 4)] + temp[Math.floor(size / 4) - 1]) / 2
        q3 = (temp[Math.floor(size * 3 / 4)] + temp[Math.floor(size * 3 / 4) + 1]) / 2
    }
    else
    {
        q1 = temp[Math.floor(size / 4)]
        q3 = temp[Math.floor(size * 3 / 4)]
    }
    return q3 - q1;
}

function outlier(numbers){
    let temp = numbers;
    const iqrval = iqr(numbers);
    const size = numbers.length;
    let min, max;
    if(Math.floor(size / 2) % 2 === 0)
    {
        min = (temp[Math.floor(size / 4)] + temp[Math.floor(size / 4) - 1]) / 2
        max = (temp[Math.floor(size * 3 / 4)] + temp[Math.floor(size * 3 / 4) + 1]) / 2
    }
    else
    {
        min = temp[Math.floor(size / 4)]
        max = temp[Math.floor(size * 3 / 4)]
    }

    min = min - 1.5 * iqrval;
    max = max + 1.5 * iqrval;
    return numbers.filter((x) => (x < min) || (x > max));    
}
module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
}