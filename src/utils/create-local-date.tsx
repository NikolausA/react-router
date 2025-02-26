export const createLocalDate = (dateStr: string): string => {
  const local = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const localDate = local.format(new Date(dateStr));
  return localDate;
};
