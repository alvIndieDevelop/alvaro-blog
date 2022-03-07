export const fileToMarkDown = async (file) => await (await fetch(file)).text();
