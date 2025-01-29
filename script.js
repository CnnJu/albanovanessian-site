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
  
    const eventTableBody = document.getElementById("event-data");
    const dropdownItems = document.querySelectorAll(".dropdown-content");
  
    function populateTable(year) {
      const newRows = [];
      let firstOccurrence = true; // Track if it's the first row for the year
  
      events
        .filter((event) => event.year === year)
        .forEach((event) => {
          const row = document.createElement("tr");
  
          // Year (only displayed once per group)
          const yearCell = document.createElement("td");
          if (firstOccurrence) {
            yearCell.textContent = event.year;
            firstOccurrence = false; // Prevents repeating the year
          } else {
            yearCell.textContent = ""; // Leaves the cell blank for subsequent rows
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
  