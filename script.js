document.addEventListener("DOMContentLoaded", () => {
    const events = [
      {
        year: "2025",
        dates: "03.02 — 07.03",
        project: "GRIEF (hub)",
        details: {
          place: "Villa Empain, Bruxelles",
          type: "Résidence d’écriture",
        },
      },
      {
        year: "2025",
        dates: "24.02 — 28.02",
        project: "Workshop",
        details: {
          place: "Dansharmonie, Bruxelles",
          type: "Workshop Danse Contemporaine",
        },
      },
      {
        year: "2025",
        dates: "17.03 — 21.03",
        project: "X.Dates",
        details: {
          place: "La Balsamine, Bruxelles",
          type: "RÉSIDENCE CRÉATION SONORE",
        },
      },
      {
        year: "2025",
        dates: "14.04 — 16.04",
        project: "X.Dates",
        details: {
          place: "La Balsamine, Bruxelles",
          type: "RÉSIDENCE technique",
        },
      },
      {
        year: "2025",
        dates: "17 - 18 - 19.04",
        project: "X.Dates",
        details: {
          place: "La Balsamine, Bruxelles",
          type: "performances - premières",
        },
      },
      {
        year: "2025",
        dates: "26 - 27 - 28.05",
        project: "workshop",
        details: {
          place: "ugsel rencontre danses, Nîmes",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2025",
        dates: "10.06 — 14.06",
        project: "hardcore",
        details: {
          place: "ménagerie de verre, paris",
          type: "résidence d'écriture",
        },
      },
      {
        year: "2025",
        dates: "16.06 — 27.06",
        project: "hardcore",
        details: {
          place: "garage 29, paris",
          type: "résidence d'écriture",
        },
      },
      {
        year: "2025",
        dates: "21.07 — 01.08",
        project: "hardcore",
        details: {
          place: "dansharmonie, bruxelles",
          type: "résidence de création",
        },
      },
      {
        year: "2025",
        dates: "04.08 — 17.08",
        project: "hardcore",
        details: {
          place: "P.A.R.T.S. Summer residencies, bruxelles",
          type: "résidence de création",
        },
      },
      {
        year: "2025",
        dates: "25.08 — 22.09",
        project: "hardcore",
        details: {
          place: "la balsamine, bruxelles",
          type: "résidence technique",
        },
      },
      {
        year: "2025",
        dates: "23 - 27.09",
        project: "hardcore",
        details: {
          place: "la balsamine, bruxelles",
          type: "performances - premières",
        },
      },
      {
        year: "2024",
        dates: "02.01 — 05.01",
        project: "X.Dates",
        details: {
          place: "KUSTENWERKPLAATS PIANOFABRIEK,BRUXELLES",
          type: "sortie de résidence",
        },
      },
      {
        year: "2024",
        dates: "08.01 — 12.01",
        project: "X.Dates",
        details: {
          place: "centre national de la danse, paris",
          type: "sortie de résidence",
        },
      },
      {
        year: "2024",
        dates: "09.02 — 12.02",
        project: "royal swedish ballet school",
        details: {
          place: "jury d'entrée",
          type: "",
        },
      },
      {
        year: "2024",
        dates: "26.02 — 03.03",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2024",
        dates: "April",
        project: "mariana machado",
        details: {
          place: "candela, mariana machado",
          type: "chorégraphe du court métrage",
        },
      },
      {
        year: "2024",
        dates: "30.04 — 03.05",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2024",
        dates: "15.07 — 19.07",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2024",
        dates: "22.07 — 02.08",
        project: "hardcore",
        details: {
          place: "P.A.R.T.S. Summer residencies, bruxelles",
          type: "résidence de recherche",
        },
      },
      {
        year: "2024",
        dates: "19.08 - 23.08",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2024",
        dates: "02.09 — 06.09",
        project: "Grief(hub)",
        details: {
          place: "acid macht neu, berlin",
          type: "période de création",
        },
      },
      {
        year: "2024",
        dates: "21.10 - 25.10",
        project: "hardcore",
        details: {
          place: "dansharmonie, bruxelles",
          type: "résidence de recherche",
        },
      },
      {
        year: "2024",
        dates: "09.12 — 13.12",
        project: "X.Dates",
        details: {
          place: "dansharmonie, bruxelles",
          type: "résidence de création sonore",
        },
      },
      {
        year: "2023",
        dates: "20.02 — 24.02",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "worksop danse contemporaine",
        },
      },
      {
        year: "2023",
        dates: "12.03 - 05.04",
        project: "X.Dates",
        details: {
          place: "art and cultural studies laboratory, yerevan - Arménie",
          type: "résidence de recherche",
        },
      },
      {
        year: "2023",
        dates: "26.02 -  03.03",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2023",
        dates: "Juin",
        project: "mariana machado",
        details: {
          place: "cave, mariana machado",
          type: "chorégraphe installation vidéo",
        },
      },
      {
        year: "2023",
        dates: "12.06 — 18.06",
        project: "X.Dates",
        details: {
          place: "ad lib résidence, La Vallée, Bruxelles",
          type: "résidence de création",
        },
      },
      {
        year: "2023",
        dates: "05.07 — 05.08",
        project: "impulstanz",
        details: {
          place: "dance web, vienne",
          type: "",
        },
      },
      {
        year: "2023",
        dates: "10.07 - 14.07",
        project: "grief(hub)",
        details: {
          place: "tanzquartier, vienne",
          type: "résidence de recherche avec steven cohen",
        },
      },
      {
        year: "2023",
        dates: "31.07 — 04.08",
        project: "X.Dates",
        details: {
          place: "tanzquartier, vienne",
          type: "résidence de recherche avec mathilde monnier",
        },
      },
      {
        year: "2023",
        dates: "07.08 — 11.08",
        project: "X.Dates",
        details: {
          place: "P.A.R.T.S. Summer residencies, bruxelles",
          type: "résidence de création",
        },
      },
      {
        year: "2023",
        dates: "25.08 — 01.09",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "worksop danse contemporaine",
        },
      },
      {
        year: "2023",
        dates: "04.10",
        project: "X.Dates",
        details: {
          place: "rites, festival d'automne, paris",
          type: "performance",
        },
      },
      {
        year: "2023",
        dates: "16.10 — 20.10",
        project: "workshop",
        details: {
          place: "institut emmanuel d'alzon, nîmes",
          type: "création pour l'a.S. danse",
        },
      },
      {
        year: "2023",
        dates: "18.10",
        project: "workshop",
        details: {
          place: "institut saint-vincent de paul, nîmes",
          type: "workshop danse contemporaine",
        },
      },
      {
        year: "2023",
        dates: "23.10 — 27.10",
        project: "workshop",
        details: {
          place: "dansharmonie, bruxelles",
          type: "worksop danse contemporaine",
        },
      },
      {
        year: "2023",
        dates: "18.12 — 22.12",
        project: "X.Dates",
        details: {
          place: "KUSTENWERKPLAATS PIANOFABRIEK,BRUXELLES",
          type: "sortie de résidence",
        },
      },
    ];
  
    const eventTableBody = document.getElementById("event-data");
    const dropdownItems = document.querySelectorAll(".dropdown-content");
  
    function populateTable(year) {
      const newRows = [];
      let firstOccurrence = true; 
  
      events
        .filter((event) => event.year === year)
        .forEach((event) => {
          const row = document.createElement("tr");
  
          // Year (only displayed once per group)
          const yearCell = document.createElement("td");
          if (firstOccurrence) {
            yearCell.textContent = event.year;
            firstOccurrence = false; 
          } else {
            yearCell.textContent = ""; 
          }
          row.appendChild(yearCell);
  
          // Dates
          const datesCell = document.createElement("td");
          datesCell.textContent = event.dates;
          row.appendChild(datesCell);
  
          // Project
          const projectCell = document.createElement("td");
          projectCell.textContent = event.project;
          row.appendChild(projectCell);
  
          // Place & Event Type
          const detailsCell = document.createElement("td");
          detailsCell.innerHTML = `
            ${event.details.place}<br>
            <span class="event-type">${event.details.type}</span>
          `;
          row.appendChild(detailsCell);
  
          newRows.push(row);
        });
  
      // Compare and update only the changed rows
      const currentRows = Array.from(eventTableBody.rows);
      newRows.forEach((newRow, index) => {
        if (!currentRows[index] || currentRows[index].innerHTML !== newRow.innerHTML) {
          if (currentRows[index]) {
            eventTableBody.replaceChild(newRow, currentRows[index]);
          } else {
            eventTableBody.appendChild(newRow);
          }
        }
      });
  
      // Remove extra rows if new rows are fewer
      while (currentRows.length > newRows.length) {
        eventTableBody.removeChild(currentRows.pop());
      }
    }
  
    // Default: Show events for the latest year dynamically
    const latestYear = events.reduce((max, event) => event.year > max ? event.year : max, events[0].year);
    if (eventTableBody) {
        populateTable(latestYear);
    }
  
    // Function to handle dropdown item click
    function handleDropdownClick(event) {
      const item = event.currentTarget;
      const year = item.id.replace("dropdown-", ""); // Extract year from ID
      populateTable(year);
  
      // Remove active class from all and add it to the selected one
      dropdownItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    }
  
    // Add click event to dropdown items
    dropdownItems.forEach((item) => {
      item.addEventListener("click", handleDropdownClick);
    });
  
    // Default: Show events for the latest year (2025)
    if (eventTableBody) {
        populateTable("2025");
    }
  });
  