// from data.js
var tableData = data;

// YOUR CODE HERE!

// identify the tbody variable

var tbody = d3.select("tbody");

data.forEach(function (ufo) {

  tbody.append("tr");
  Object.entries(ufo).forEach(function ([key, value]) {

    console.log(key, value);

    var cell = tbody.append("td");
    cell.text(value);
  });
});

/*
var submit = d3.select("#submit");

submit.on("click", function() {
  d3.select("summary").html("");

  var dTime = d3.select("#datetime");
  var dtimeValue = dTime.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === dtimeValue);

  filteredData.forEach((ufoDate) => {
    var row = tbody.append("tr");
    Object.entries(ufoDate).forEach([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    }
  });
});
