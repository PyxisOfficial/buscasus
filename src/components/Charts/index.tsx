function PieChart() {
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

     var options = {
       title: 'Chart Title',
       'width': '100%',
       'height':320,
       'backgroundColor': 'transparent',
       'chartArea': {left: 0, right: 0, top: 15, bottom: 0, width: '100%', height: '100%'},
        colors: ['#496461', '#45CA99', '#349684', '#67C5A2', '#287365']
     };

     var chart = new google.visualization.PieChart(document.getElementById('piechart'));

     chart.draw(data, options);
   }
   
   return (
      <div>
         <div id="piechart"></div>
      </div>
   )
}

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

export const Chart = {
   Pie: PieChart,
   Area: AreaChart,
}