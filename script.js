document.addEventListener("DOMContentLoaded", () => {
    const eventTableBody = document.getElementById("event-data");
    if (!eventTableBody) {
        console.warn("Warning: Element with id 'event-data' not found.");
    }
  
    if (eventTableBody) {
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
  
      let lastYear = ""; // Track the last displayed year
  
      events.forEach((event) => {
        const row = document.createElement("tr");
  
        // Year (only display the first occurrence of a new year)
        const yearCell = document.createElement("td");
        if (event.year !== lastYear) {
          yearCell.textContent = event.year; // Show year
          lastYear = event.year; // Update the tracker
        } else {
          yearCell.textContent = ""; // Leave the cell empty
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
      const placeText = document.createTextNode(event.details.place);
      const eventTypeSpan = document.createElement("span");
      eventTypeSpan.className = "event-type";
      eventTypeSpan.textContent = event.details.type;
      detailsCell.appendChild(placeText);
      detailsCell.appendChild(document.createElement("br"));
      detailsCell.appendChild(eventTypeSpan);
      row.appendChild(detailsCell);

      // Append the completed row to the table
      eventTableBody.appendChild(row);
        });
      }
    });