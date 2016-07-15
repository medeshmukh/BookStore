function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <meta itemprop=\"description\" name=\"Description\" content=\"Async Fragments Demo using Marko\"> <title>Marko with Express</title> </head> <body> <form method=\"post\"> <table border=\"2\" bordercolor=\"black\" width=\"500\" height=\"500\" align=\"center\"> <tr><td>Name :</td><td><input type=\"text\" name=\"name\"></td></tr> <tr><td>Review :</td><td><input type=\"text\" name=\"review\"></td></tr> <tr><td>Rating :</td><td><input type=\"text\" name=\"rating\"></td></tr> </table> <p align=\"center\"> <input type=\"submit\" id=\"btn\" value=\"Add Review\"></p> </form> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
