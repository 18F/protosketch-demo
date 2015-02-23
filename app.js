// inspired by: http://jsfiddle.net/mjaric/sEwM6/
var drawRow = function(rowData, div) {
  var row = $("<tr />")
  $(div).append(row);
  var keys = _.keys(rowData);
  _.each(keys, function(key) {
    console.log(key);
    row.append($("<td>" + rowData[key] + "</td>"));  
  });
};

var drawTableHeaders = function(values, div) {
  var thead = $("thead > tr"); 
  _.each(values, function(value) {
    thead.append("<th>" + value + "</th>");
  });
};

// inspired by: http://jsfiddle.net/mjaric/sEwM6/
var drawTable = function(data, div) {
  drawTableHeaders(_.keys(data[0]), div);
  for (var i = 0; i < data.length; i++) {
    drawRow(data[i], div);
  }
};

$(document).ready(function() {
  $.getJSON("orders.json", function(data) {
    console.log(data);
    drawTable(data, "#current_order");
  });
});
