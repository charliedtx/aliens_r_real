// from data.js
var tableData = data;

// YOUR CODE HERE!

// identify the tbody variable

var tbody = d3.select("tbody");

data.forEach(function(ufo) {

  tbody.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {

    console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
  });

});
