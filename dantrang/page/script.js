// Function to set breadcrumb
function setBreadcrumb() {
    const breadcrumb = localStorage.getItem('breadcrumb') || 'Home';
    const breadcrumbItems = breadcrumb.split(' > ');

    // Clear the current breadcrumb
    document.getElementById('breadcrumb').innerHTML = '';

    // Rebuild breadcrumb from saved items
    breadcrumbItems.forEach((item, index) => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item;
        link.href = '#';
        
        // Add click event to breadcrumb items
        link.addEventListener('click', () => {
            navigateTo(item);
        });

        li.appendChild(link);

        if (index === breadcrumbItems.length - 1) {
            li.querySelector('a').style.color = '#000'; // Current page style
        }

        document.getElementById('breadcrumb').appendChild(li);
    });
}

// Function to navigate to a page and set breadcrumb
function navigateTo(page) {
    let breadcrumb = localStorage.getItem('breadcrumb') || 'Home';
    
    if (breadcrumb.split(' > ').indexOf(page) === -1) {
        breadcrumb += ' > ' + page;
    }

    localStorage.setItem('breadcrumb', breadcrumb);
    document.getElementById('page-title').textContent = page;
    setBreadcrumb();
}

// Initialize breadcrumb on page load
document.addEventListener("DOMContentLoaded", function() {
    setBreadcrumb();
});