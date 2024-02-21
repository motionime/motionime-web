export const minimizeString = (str, num) => {
  if (str?.length > num) return str.slice(0, num) + "...";
  return str;
};

export const beautyPath = (s) =>
  s.toLowerCase().replace(/\s/g, "-").replace(/\//g, "-");
// first replace/change all space to dash (-)
// second replace/change all slash (/) to dash (-)
