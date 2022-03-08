export const fileToMarkDown = async (file) => await (await fetch(file)).text();
export const readableDate = (dateString) =>
  new Date(dateString).toLocaleDateString();
