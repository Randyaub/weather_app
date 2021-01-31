const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const direction = (degree) => {
  if ((degree >= 337.7 && degree < 22.5) || degree === 0) return "N";
  else if (degree >= 22.5 && degree < 67.5) return "NE";
  else if (degree >= 67.5 && degree < 112.5) return "E";
  else if (degree >= 112.5 && degree < 157.5) return "SE";
  else if (degree >= 157.5 && degree < 202.5) return "S";
  else if (degree >= 202.5 && degree < 247.5) return "SW";
  else if (degree >= 247.5 && degree < 292.5) return "W";
  else if (degree >= 292.5 && degree < 337.5) return "NW";
};

export const visibility = (number) => {
  return (number / 1000).toFixed(1);
};

export const getHour = (unix) => {
  const date = new Date(unix * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (minutes < 10) {
    return (hours % 12 || 12) + ":0" + minutes;
  } else {
    return (hours % 12 || 12) + ":" + minutes;
  }
};

export const getDay = (unix) => {
  const date = new Date(unix * 1000);
  const day = date.getDay();
  return dayNames[day];
};

export const getMonth_Day = (unix) => {
  const date = new Date(unix * 1000);
  const month = date.getMonth() + 1;
  const d = date.getDate();
  return month + "/" + d;
};

export const getDate = (unix) => {
  const date = new Date(unix * 1000);
  const month = date.getMonth();
  const d = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (minutes < 10) {
    return (
      monthNames[month] +
      " " +
      d +
      ", " +
      (hours % 12 || 12) +
      ":0" +
      minutes +
      (hours >= 12 ? " p.m." : " a.m.")
    );
  } else {
    return (
      monthNames[month] +
      " " +
      d +
      ", " +
      (hours % 12 || 12) +
      ":" +
      minutes +
      (hours >= 12 ? " p.m." : " a.m.")
    );
  }
};

export const hPatoKpa = (hpa) => {
  return (hpa * 0.1).toFixed(1);
};
