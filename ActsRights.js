 document.addEventListener("DOMContentLoaded", function() {
  const actsContainer = document.getElementById("acts-container");
  const yearDropdown = document.getElementById("year-dropdown");

  // Sample data, you should replace this with actual acts and rights information
  const actsByYear = {
    "2005": ["The Right to Information Act, 2005:",
      "This act empowers citizens to request information from public authorities, promoting transparency and accountability in government functioning.",
    ],
    "2019": ["The Consumer Protection Act, 2019:",
      "Designed to protect the rights of consumers, this act addresses issues related to the sale of goods and services, unfair trade practices, and provides mechanisms for redressal of consumer grievances."],
    "2022": ["add krduga baad me ", "phle interfacekrlu"],
  };

  // Populate the dropdown with years
  for (const year in actsByYear) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = `Year ${year}`;
    yearDropdown.appendChild(option);
  }

  // Event listener for dropdown change
  yearDropdown.addEventListener("change", function() {
    const selectedYear = yearDropdown.value;
    displayActsByYear(selectedYear);
  });

  // Function to display acts by selected year
  function displayActsByYear(year) {
    actsContainer.innerHTML = ""; // Clear previous content

    const yearHeading = document.createElement("div");
    yearHeading.classList.add("year-heading");
    yearHeading.textContent = `Year ${year}`;
    actsContainer.appendChild(yearHeading);

    const actsList = document.createElement("ul");
    actsList.classList.add("acts-list");

    actsByYear[year].forEach((act) => {
      const actItem = document.createElement("li");
      actItem.textContent = act;
      actsList.appendChild(actItem);
    });

    actsContainer.appendChild(actsList);
  }

  // Initial display of acts for the first year
  displayActsByYear(Object.keys(actsByYear)[0]);
});
