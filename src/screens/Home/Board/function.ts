export const getSequenceValue = () => {
  return Math.floor(Math.random() * 4);
};

export const compareSequences = (a: number[], b: number[]) => {
  let result = true;
  b.forEach((item, index) => (result = item === a[index]));

  return result;
};
