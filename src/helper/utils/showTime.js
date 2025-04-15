export const timeSince = (utc) => {
  const seconds = Math.floor(Date.now() / 1000) - utc;
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const units = [
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
  ];
  for (let { unit, seconds: sec } of units) {
    const diff = Math.floor(seconds / sec);
    if (diff >= 1) return rtf.format(-diff, unit);
  }
  return "just now";
};
