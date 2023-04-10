class matUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error('No numbers provided')
    }

    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}
try {
  const result = matUtil.sum(1, 2, 3, 4, 5);
  console.log(result);
} catch (error) {
  console.log(error);
} finally {
  console.log('Finally block executed');
}
