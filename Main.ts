import { series } from './Data.js'; 

const tableBody = document.getElementById('series-table-body') as HTMLTableElement;
let totalSeasons = 0;

series.forEach((serie) => {
  const row = `
    <tr>
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
  totalSeasons += serie.seasons; 
});


const averageSeasons = totalSeasons / series.length;

const averageRow = `
  <tr>
    <td colspan="3" class="text-right"><strong>Promedio de Temporadas:</strong></td>
    <td><strong>${averageSeasons.toFixed(2)}</strong></td>
  </tr>
`;
tableBody.innerHTML += averageRow;
