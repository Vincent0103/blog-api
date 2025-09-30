const sliceInThreeSubArray = <T>(array: T[]): T[][] => {
  const DIVISION_AMOUNT = 3;
  const result: T[][] = [];
  if ([0, 1].includes(array.length)) return [array];

  for (let i = 0; i < DIVISION_AMOUNT; i++) {
    result.push(
      array.slice(
        Math.ceil(array.length / 3) * i,
        Math.ceil(array.length / 3) * (i + 1),
      ),
    );
  }

  return result;
};

export { sliceInThreeSubArray };
