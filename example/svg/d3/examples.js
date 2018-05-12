function d3ex1() {
    var dataset = [ 5, 10, 15, 20, 25 ];
    d3.select("body").selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(function(d) {
            return "I can count up to " + d;
        }).style("color", function(d) {
            if (d > 15) {   //Threshold of 15
                return "red";
            } else {
                return "black";
            }
        });
}

function d3ex2() {
    var dataset = [];
    for (var i = 0; i < 25; i++) {
        var newNumber = Math.random() * 30;
        dataset = dataset.concat(newNumber);
    }

    d3.select("body").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            var barHeight = d * 5;
            return barHeight + "px";
        });
}