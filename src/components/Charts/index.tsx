//PIE CHART
const options = {
   title: 'Chart Title',
   'width': '100%',
   'height':320,
   'backgroundColor': 'transparent',
   'chartArea': {left: 0, right: 0, top: 15, bottom: 0, width: '100%', height: '100%'},
    colors: ['#496461', '#45CA99', '#349684', '#67C5A2', '#287365'],
    is3D: true,
    fontSize: 18,
    legend: {
      position: 'labeled', 
      textStyle: {
         color: '#000',
      }
   },
    pieSliceText: 'none'
 };

function PieRegion() {
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

     var data = google.visualization.arrayToDataTable([
       ['Task', 'Hours per Day'],
       ['Zona Norte', 5],
       ['Zona Sul', 2],
       ['Zona Oeste',  4],
       ['Zona Leste',  7],
       ['Zona Central', 2]
     ]);

     {options}

     var chart = new google.visualization.PieChart(document.getElementById('piechartRegion'));

     chart.draw(data, options);
   }
   
   return (
      <div>
         <div id="piechartRegion"></div>
      </div>
   )
}

function PieSpecialty() {
   google.charts.load('current', {'packages':['corechart']});
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

     var data = google.visualization.arrayToDataTable([
       ['Task', 'Hours per Day'],
       ['Ortopedia',     14],
       ['Pediatria',      22],
       ['Ginecologia',  30],
       ['Oftalmologia', 2],
       ['Anestesiologia',    25]
     ]);

     {options}

     var chart = new google.visualization.PieChart(document.getElementById('piechartSpecialty'));

     chart.draw(data, options);
   }
   
   return (
      <div>
         <div id="piechartSpecialty"></div>
      </div>
   )
}

//AREA CHART

function AreaChart() {
   google.charts.load("current", {packages:['corechart']});
   google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
     var data = google.visualization.arrayToDataTable([
       ["Element", "Density", { role: "style" } ],
       ["Semana 1", 8.94, "#496461"],
       ["Semana 2", 10.49, "#45CA99"],
       ["Semana 3", 19.30, "#349684"],
       ["Semana 4", 21.45, "#287365"]
     ]);

     var view = new google.visualization.DataView(data);
     view.setColumns([0, 1,
                      { calc: "stringify",
                        sourceColumn: 1,
                        type: "string",
                        role: "annotation" },
                      2]);

     var options = {
       title: "",
       width: '100%',
       height: 165,
       bar: {groupWidth: "95%"},
       legend: { position: "none" },
      'backgroundColor': 'transparent',
      'chartArea': {left: 20, right: 20, top: 15, bottom: 20},
     };
     var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
     chart.draw(view, options);
 }
   return (
      <div id="columnchart_values"></div>
   )
}

export const PieChart = {
   Specialty: PieSpecialty,
   Region: PieRegion,
}

export const BarChart = {
   Area: AreaChart,
}