export const dateFormatter = (date, format) => {
  switch (format) {
    case "dd/mm/yyyy":
      return `${date.getUTCDate()}/${
        date.getUTCMonth() + 1
      }/${date.getUTCFullYear()}`;
    case "yyyy-mm-dd":
      return date.toISOString().slice(0, 10);
    default:
      break;
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
