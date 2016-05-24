var dataset = {things: [93.3, 6.7],};
var width = 315;
var height = 315;
var radius = Math.min(width, height) / 2;
var color = d3.scale.category20();
var pie = d3.layout.pie().sort(null);
var arc = d3.svg.arc()
    .innerRadius(radius - 85)
    .outerRadius(radius - 50);
var svg = d3.select("#donut1")
    .append("svg")
    .attr("width", width)
    .attr("height", 264)
    .append("g")
    .attr("transform", "translate("
        + width / 2.090 + ","
        + height / 2.38  + ")");
var path = svg.selectAll("path")
    .data(pie(dataset.things))
    .enter().append("path")
    .attr("fill", function(d, i) { return getColors(i); })
    .attr("d", arc);

function getColors (i) {
  var colorArray = ['#E5E5E5','#007ac2'];
  return colorArray[i];
}

svg.append("svg:text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("style","font-family: 'Roboto', sans-serif")
    .attr("font-size","40")
    .attr("fill","#007ac2")
    .text("6.7%");
