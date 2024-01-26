export const colorGenerator = () => {
  let color = "#";
  for (let i = 1; i <= 6; i++) {
    color = color + Math.floor(Math.random() * 10).toString(16);
  }
  return color;
};
