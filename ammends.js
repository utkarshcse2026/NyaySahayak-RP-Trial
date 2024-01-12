document.addEventListener('DOMContentLoaded', function() {
    // Sample data - replace this with your actual data
    const amendmentsData = [
        { year: 2021, amendment: 'Amendment A' },
        { year: 2022, amendment: 'Amendment B' },
        { year: 2023, amendment: 'Amendment C' },
        // Add more amendments as needed
    ];

    const amendmentsList = document.getElementById('amendmentsList');

    // Populate amendments dynamically
    amendmentsData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.year}: ${item.amendment}`;
        amendmentsList.appendChild(listItem);
    });
});
