document.addEventListener("DOMContentLoaded", () => {
    const events = [
      {
        year: "2025",
        dates: "03.02 / 07.03",
        project: "GRIEF (hub)",
        details: {
          place: "Villa Empain, Bruxelles",
          type: "Résidence d’écriture",
        },
      },
      {
        year: "2025",
        dates: "24.02 / 28.02",
        project: "Workshop",
        details: {
          place: "Dansharmonie, Bruxelles",
          type: "Workshop Danse Contemporaine",
        },
      },
      {
        year: "2024",
        dates: "17.03 / 21.03",
        project: "X. Dates",
        details: {
          place: "La Balsamine, Bruxelles",
          type: "Résidence Création Sonore",
        },
      },
      {
        year: "2023",
        dates: "14.04 / 16.04",
        project: "X. Dates",
        details: {
          place: "La Balsamine, Bruxelles",
          type: "Résidence Technique",
        },
      },
    ];
  
    function populateTable(year) {
      const eventTableBody = document.getElementById("event-data");
      eventTableBody.innerHTML = ""; // Clear table before adding new content
        for (const event of events) {
          if (event.year === year) {
            const row = document.createElement("tr");
    
            // Year
            const yearCell = document.createElement("td");
            yearCell.textContent = event.year;
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
    
            eventTableBody.appendChild(row);
          }
        }
      }
  
    // Add hover effect for dropdown items
    document.querySelectorAll(".dropdown-content").forEach(item => {
      item.addEventListener("mouseenter", () => {
        const extractedYear = item.id.replace("dropdown-", ""); // Extract year from the dropdown item ID
        populateTable(extractedYear);
      });
    });
  
    // Default: Show events for the latest year (2025)
    populateTable("2025");
  });
  