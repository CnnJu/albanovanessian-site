document.addEventListener("DOMContentLoaded", () => {
    const eventTableBody = document.getElementById("event-data");
  
    if (!eventTableBody) {
      console.log("Error: Element with id 'event-data' not found.");
      return;
    }
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
          year: "2025",
          dates: "17.03 / 21.03",
          project: "X. Dates",
          details: {
            place: "La Balsamine, Bruxelles",
            type: "Résidence Création Sonore",
          },
        },
        {
          year: "2024",
          dates: "14.04 / 16.04",
          project: "X. Dates",
          details: {
            place: "La Balsamine, Bruxelles",
            type: "Résidence Technique",
          },
        },
        {
          year: "2024",
          dates: "17-18-19.04",
          project: "X. Dates",
          details: {
            place: "La Balsamine, Bruxelles",
            type: "Performances",
          },
        },
      ];
  
      let lastYear = ""; // Keep track of the last displayed year
  
      events.forEach((event) => {
        const row = document.createElement("tr");
  
        // Year
        const yearCell = document.createElement("td");
        if (event.year !== lastYear) {
          yearCell.innerHTML = "&nbsp;"; // Non-breaking space for repeated years
          lastYear = event.year; // Update lastYear
        } else {
          yearCell.textContent = ""; // Empty cell for repeated years
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
  
        eventTableBody.appendChild(row);
      });
  
      console.log("Table populated successfully!");
    }
