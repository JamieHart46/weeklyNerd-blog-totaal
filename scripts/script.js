// Één details tegelijk open
const allDetails = document.querySelectorAll('details');

  allDetails.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        allDetails.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.open = false;
          }
        });
      }
    });
  });

// zorgt ervoor dat er maar één details tegelijk open kan staan van de weekly nerds.
// ER wordt eerst gecheckt of er een details open staat, zo wel wordt die eerst gesloten voordat de andere open gaat.  


// Sorteren van de weekly nerds.

let origineleVolgorde = [];

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Nerds-List");
  origineleVolgorde = Array.from(container.querySelectorAll("details"));
});

function sorteerDetailsOpKeuze() {
  const keuze = document.getElementById("NerdSorteer").value;
  const container = document.getElementById("Nerds-List");
  let details = Array.from(container.querySelectorAll("details"));

  if (keuze === "AtotZ") {
    details.sort((a, b) => {
      const textA = a.querySelector("summary").textContent.trim().toLowerCase();
      const textB = b.querySelector("summary").textContent.trim().toLowerCase();
      return textA.localeCompare(textB, 'nl', { sensitivity: 'base' });
    });
  } else if (keuze === "ZtotA") {
    details.sort((a, b) => {
      const textA = a.querySelector("summary").textContent.trim().toLowerCase();
      const textB = b.querySelector("summary").textContent.trim().toLowerCase();
      return textB.localeCompare(textA, 'nl', { sensitivity: 'base' });
    });
  } else if (keuze === "orgineel") {
    details = [...origineleVolgorde];
  } else if (keuze === "omgekeerd") {
    details = [...origineleVolgorde].reverse();
  }

  // Huidige lijst leegmaken
  container.innerHTML = "";

  // Gesorteerde lijst toevoegen
  details.forEach(detail => container.appendChild(detail));
}

