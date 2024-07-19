document.addEventListener('DOMContentLoaded', () => {
    fetch('/view_obituaries')  
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Expect HTML as text
        })
        .then(html => {
            document.querySelector('#obituaryData').innerHTML = html;
            document.querySelector('#errorRow').style.display = 'none'; // Hide error row if data is loaded
        })
        .catch(error => {
            console.error('Error fetching obituaries:', error);
            const errorRow = document.querySelector('#errorRow');
            errorRow.style.display = 'table-row';
        });
});
