const bcrypt = require("bcrypt");

function crypt(password) {
  return bcrypt.hashSync(password, 10);
}

function currency(price) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return formatter.format(price);
}

function timeSetter(time) {
  const date = time
  const dateString = date.toLocaleDateString("en-US", {
    weekDay: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeString = date.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  const formattedDateTime = dateString + ", " + timeString;
//   console.log(formattedDateTime);

  return formattedDateTime
}

module.exports = { crypt, currency, timeSetter };
