import Team from './Team.js';

var width = 960,
    height = 480;
var svg = d3.select("#viz1-map").append("svg")
    .attr("width", width)
    .attr("height", height);


d3.json("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-lebron-jenkins/master/data/map/na.json", function(error, na) {
  if (error) return console.error(error);
  var projection = d3.geo.albers().scale(800)
  var path = d3.geo.path()
    .projection(projection);
      svg.selectAll(".subunit")
        .data(topojson.feature(na, na.objects.subunits).features)
      .enter().append("path")
        .attr("class", function(d) { return "subunit " + d.id; })
        .attr("d", path);

        //Add the boundaries on the map
      svg.append("path")
       .datum(topojson.mesh(na, na.objects.subunits, function(a, b) { return a !== b }))
       .attr("d", path)
       .attr("class", "subunit-boundary");

      //Add label to places
      d3.csv(Team.TEAM_FILE,(data) => {
        var teams = data.map(team => new Team(team));
        svg.selectAll("circle")
    		  .data(teams)
        .enter()
      		.append("circle")
          .attr("transform", function(d) { return "translate(" + projection(d.coordinates()) + ")"; })
      		.attr("r", "8px")
      		.attr("fill", "red")

        svg.selectAll(".place-label")
          .data(teams)
        .enter().append("text")
          .attr("class", "place-label")
          .attr("transform", function(d) { return "translate(" + projection(d.coordinates()) + ")"; })
          .attr("dy", ".35em")
          .text(function(d) { return d.name; });
        })
      var pathProj = d3.geoPath()
        .projection(projection)
      var link =   [
                    {type: "LineString", coordinates: [[-84.39619973311765, 33.75725092895011], [-71.06264504509178, 42.36610686544133]]},
                    {type: "LineString", coordinates: [[-71.06264504509178, 42.36610686544133], [-90.08072646871527, 29.950485009327856]]},
                    {type: "LineString", coordinates: [[-90.08072646871527, 29.950485009327856], [-87.6728455633052, 41.881968536545465]]}
                  ]
        // Add the path
      svg.selectAll("myPath")
        .data(link)
        .enter()
        .append("path")
          .attr("d", function(d){ return path(d)})
          .style("fill", "none")
          .style("stroke", "orange")
          .style("stroke-width", 4)


});
