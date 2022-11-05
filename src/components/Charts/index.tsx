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
   google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          'width': '100%',
          'height': 165,
          'backgroundColor': 'transparent',
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

   return (
      <div id="chart_div"></div>
   )
}

export const PieChart = {
   Specialty: PieSpecialty,
   Region: PieRegion,
}

export const LineChart = {
   Area: AreaChart,
}