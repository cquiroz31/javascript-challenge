// from data.js
var tableData = data;

// YOUR CODE HERE!

// using d3 to select table
var table0 = d3.select('#ufo-table');

// using d3 to delect the table body
var t0Body = d3.select('tbody');

// add data to table

data.forEach((report) => {
    var row = t0Body.append('tr');
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select('#filter-btn');
var form = d3.select('form');
var clearButton = d3.select('#clear-btn')

// create event handlers

button.on('click', runEnter);
form.on('submit', runEnter);
clearButton.on('click', runEnter);


// finish event handler function
function runEnter() {
    
    // stop refresh
    d3.event.preventDefault();

    // select input element get raw html
    var inputElement = d3.select('#datetime');

    // get input element value
    var inputVal = inputElement.property('value');

    console.log('date entered: ', inputVal);

    var filtData = tableData.filter(report => report.datetime === inputVal);

    console.log('filtered data: ', filtData);

    t0Body.html('')

    filtData.forEach((report) => {
        var row = t0Body.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

function clearInput() {

    inDate = d3.select("#datetime").property("value", '');
    inCity = d3.select("#city").property("value", '');
    inState = d3.select("#state").property("value", '');
    inCountry = d3.select("#country").property("value", '');
    inShape = d3.select("#shape").property("value", '');

    t0Body.html('')


    tableData.forEach((report) => {
        var row = t0Body.append('tr');
        Object.entries(report).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};