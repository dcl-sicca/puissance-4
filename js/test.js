var tableData = [{
        category: "T-shirt",
        brandName: "threadless",
        whenObtained: "Last 3 Months",
        howObtained: "Purchased",
        howOftenWorn: "Monthly",
        whereMade: "India",
        hasGraphic: "Yes"
    },
    {
        category: "T-shirt",
        brandName: "RVCA",
        whenObtained: "2 Years Ago",
        howObtained: "Purchased",
        howOftenWorn: "Bi-Monthly",
        whereMade: "Mexico",
        hasGraphic: "Yes"
    }
]

var table = document.getElementById("dataTable");
var tableArr = [];
for (var i = 1; i < table.rows.length; i++) {
    tableArr.push({
        category: table.rows[i].cells[0].innerHTML,
        brandName: table.rows[i].cells[1].innerHTML,
        whenObtained: table.rows[i].cells[2].innerHTML,
        howObtained: table.rows[i].cells[3].innerHTML,
        howOftenWorn: table.rows[i].cells[4].innerHTML,
        whereMade: table.rows[i].cells[5].innerHTML,
        hasGraphic: table.rows[i].cells[6].innerHTML
    });
}

console.log(cells[3])