export const dateFormatter = (date, format) => {
  const semiFormattedDate = date.toISOString().slice(0, 10);
  switch (format) {
    case "dd/mm/yyyy":
      let dateValues = semiFormattedDate.split("-");
      return `${dateValues[2]}/${dateValues[1]}/${dateValues[0]}`;
    case "yyyy-mm-dd":
      return semiFormattedDate;
  }
};

export const stringToDate = (dateString) => {
  return new Date(dateString);
};

export const toUTC = (date) => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};

export const UTCDate = () => {
  const date = new Date();
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
