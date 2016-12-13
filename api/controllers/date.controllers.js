module.exports.getTimeStamp = function(req, res) {

  var dateformat = req.params.dateformat;
  var urlDecoded = decodeURI(dateformat).toString();
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var jsonDate = {
    unix : '',
    natural : ''
  }
  if (isNaN(urlDecoded)) {
    var validNatural = urlDecoded.match(/([a-zA-Z]+)[ ,]*([0-9]{1,2})[ ,]*([0-9]+)$/);
    var month = validNatural[1];
    var day = validNatural[2];
    var year = validNatural[3];


  } else {
      var validUnix = urlDecoded.match(/[0-9]{1,13}/)//.toString();
      var date = new Date(validUnix * 1000);

      var day = date.getDate();
      var month = months[date.getMonth()];
      var year = date.getFullYear();
  } 

  var unix = new Date(year + "." +  (months.indexOf(month) + 1) + "." + day).getTime() / 1000;
  var natural = month + " " + day + ", " + year;

  res
    .status(200)
    .json({
      "unix" : unix,
      "natural" : natural,
      "month" : month,
      "day" : day,
      "year" : year
    });

  console.log("this is the time stamp dateformat: " + month + " " + day + " " + year);
};