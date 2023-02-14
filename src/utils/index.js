export const fileToMarkDown = async (file) => await (await fetch(file)).text();
export const readableDate = (dateString) =>
  new Date(dateString).toLocaleDateString();

export const getCurrentAge = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthYear = 1993;
  const currentAge = currentYear - birthYear;
  return Math.abs(currentAge);
};

export const getCurrentExperience = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const beginYear = 2019;
  const currentAge = currentYear - beginYear;
  return Math.abs(currentAge);
};
