var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://www.mymoneycomb.com/")
  .wait(2000)
  .click("#mainNavigation > div:nth-child(12) > a")
  .type("#at-field-email", "fake_email#" + Math.round(Math.random()*1000)+"@gmail.com")
  .type("#at-field-first_name", "Nota")
  .type("#at-field-last_name", "Realperson")
  .type("#at-field-password", "passw0rd")
  .type("#at-field-password_again", "passw0rd")
  .click("#at-btn")
  .wait(3000)
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });
