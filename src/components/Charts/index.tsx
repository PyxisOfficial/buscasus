import axios from "axios";
import { useEffect, useState } from "react";

//PIE CHART
const options = {
   title: 'Chart Title',
   'width': '100%',
   'height': 320,
   'backgroundColor': 'transparent',
   'chartArea': { left: 0, right: 0, top: 15, bottom: 0, width: '100%', height: '100%' },
   colors: ['#496461', '#45CA99', '#349684', '#67C5A2', '#287365'],
   is3D: true,
   fontSize: 18,
   legend: {
      position: 'labeled',
      textStyle: {
         color: '#000',
      }
   },
   pieSliceText: 'none',
   sliceVisibilityThreshold: 5 / 100,
};

function PieRegion() {
   google.charts.load('current', { 'packages': ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

      var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['Zona Norte', 5],
         ['Zona Sul', 2],
         ['Zona Oeste', 4],
         ['Zona Leste', 7],
         ['Zona Central', 2]
      ]);

      { options }

      var chart = new google.visualization.PieChart(document.getElementById('piechartRegion'));

      chart.draw(data, options);
   }

   return (
      <div>
         <div id="piechartRegion"></div>
      </div>
   )
}

function PieSpecialty({ spe1, spe2, spe3, spe4, spe5, spe6, spe7, spe8, spe9, spe10, spe11, spe12 }: any) {

   google.charts.load('current', { 'packages': ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

      var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['Imunologia', spe1],
         ['Angiologia', spe2],
         ['Cardiologia', spe3],
         ['Cirurgia Geral', spe4],
         ['Cirurgia Pediátrica', spe5],
         ['Cirurgia Plástica', spe6],
         [' Clínica Médica', spe7],
         ['Dermatologia', spe8],
         ['Infecto-Parasitárias', spe9],
         ['DST/AIDS', spe10],
         ['Endocrinologia', spe11],
         ['Fisiatria', spe12],
      ]);

      { options }

      var chart = new google.visualization.PieChart(document.getElementById('piechartSpecialty'));

      chart.draw(data, options);
   }

   return (
      <div>
         <div id="piechartSpecialty"></div>
      </div>
   )
}

function PieOpinion() {
   google.charts.load('current', { 'packages': ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {

      var data = google.visualization.arrayToDataTable([
         ['Task', 'Hours per Day'],
         ['Satisfeito', 80],
         ['Não Satisfeito', 50],
      ]);

      { options }

      var chart = new google.visualization.PieChart(document.getElementById('piechartOpinion'));

      chart.draw(data, options);
   }

   return (
      <div>
         <div id="piechartOpinion"></div>
      </div>
   )
}

//AREA CHART

function AreaChart({ wu1, wu2, wu3, wu4 }: any) {
   google.charts.load("current", { packages: ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
      var data = google.visualization.arrayToDataTable([
         ["Element", "Usuários", { role: "style" }],
         ["Semana 1", wu4, "#496461"],
         ["Semana 2", wu3, "#45CA99"],
         ["Semana 3", wu2, "#349684"],
         ["Semana 4", wu1, "#287365"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
         {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
         },
         2]);

      var options = {
         title: "",
         width: '100%',
         height: 165,
         bar: { groupWidth: "95%" },
         legend: { position: "none" },
         'backgroundColor': 'transparent',
         'chartArea': { left: 20, right: 20, top: 15, bottom: 20 },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
   }
   return (
      <div id="columnchart_values"></div>
   )
}

function AreaSearch() {
   google.charts.load("current", { packages: ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);
   function drawChart() {
      var data = google.visualization.arrayToDataTable([
         ["Element", "Pesquisas", { role: "style" }],
         ["Semana 1", 25, "#496461"],
         ["Semana 2", 16, "#45CA99"],
         ["Semana 3", 14, "#349684"],
         ["Semana 4", 30, "#287365"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
         {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
         },
         2]);

      var options = {
         title: "",
         width: '100%',
         height: 320,
         bar: { groupWidth: "95%" },
         legend: { position: "none" },
         'backgroundColor': 'transparent',
         'chartArea': { left: 20, right: 20, top: 15, bottom: 20 },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options);
   }
   return (
      <div id="columnchart_values"></div>
   )
}

function LineChart({ m1, m2, m3, m4, abs1, abs2, abs3, abs4 }: any) {
   google.charts.load('current', { 'packages': ['corechart'] });
   google.charts.setOnLoadCallback(drawChart);

   function drawChart() {
      var data = google.visualization.arrayToDataTable([
         ['Year', 'Ausências'],
         [m4, abs4],
         [m3, abs3],
         [m2, abs2],
         [m1, abs1]
      ]);

      var options = {
         title: 'Company Performance',
         legend: { position: 'right' },
         'backgroundColor': 'transparent',
         'chartArea': { left: 20, right: 20, top: 15, bottom: 20 },
         colors: ['#349684']
      };

      var chart = new google.visualization.LineChart(document.getElementById('linechart_div'));

      chart.draw(data, options);
   }
   return (
      <div id='linechart_div'></div>
   )
}

export const PieChart = {
   Specialty: PieSpecialty,
   Region: PieRegion,
   Opinion: PieOpinion
}

export const BarChart = {
   Area: AreaChart,
   Line: LineChart,
   Search: AreaSearch,
}