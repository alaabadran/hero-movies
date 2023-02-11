export const makeURL = (text: string, limit = 50) => {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
    .substring(0, limit);
};
