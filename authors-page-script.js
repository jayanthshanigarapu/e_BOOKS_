// Sample Data: This simulates a database of authors
const allAuthors = {
    fiction: [
        { name: 'Niel Gaiman', books: 15, specialty: 'Fantasy, Comics' },
        { name: 'Frank Herbert', books: 10, specialty: 'Science Fiction' },
        { name: 'Zoraida Cordova', books: 8, specialty: 'Young Adult Fantasy' },
    ],
    nonfiction: [
        { name: 'Mark Owen', books: 5, specialty: 'Business, Design' },
        { name: 'J.M. Roberts', books: 2, specialty: 'History, World Studies' },
        { name: 'David Haskell', books: 3, specialty: 'Science, Nature' },
    ]
};

// Function to read the URL parameter
function getUrlParameter(name) {
    // 1. Creates a URLSearchParams object from the current URL's query string (e.g., "?type=fiction").
    const urlParams = new URLSearchParams(window.location.search);
    
    // 2. Returns the value of the requested parameter (e.g., 'fiction').
    return urlParams.get(name);
}

// Function to render the authors list dynamically
function renderAuthors() {
    // 1. Get the 'type' parameter from the URL.
    const authorType = getUrlParameter('type'); 
    
    // 2. Determine which data array to use. Defaults to fiction if type is missing or invalid.
    const authorsToDisplay = allAuthors[authorType] || allAuthors.fiction;

    // 3. Update the page header based on the URL type.
    const headerElement = document.getElementById('authorsHeader');
    const subtitleElement = document.getElementById('authorsSubtitle');
    const headerText = authorType === 'nonfiction' ? 'Non-Fictional Authors' : 'Fictional Authors';
    
    headerElement.textContent = headerText;
    subtitleElement.textContent = `Browse our ${headerText.toLowerCase()} and their published works.`;

    // 4. Generate the HTML for the author cards.
    const container = document.getElementById('authorsListContainer');
    if (!container) return;

    const cardsHTML = authorsToDisplay.map(author => {
        // Creates a simple card structure for each author
        return `
            <div class="col-sm-6 col-lg-4">
                <div class="card p-3 shadow-sm h-100">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">${author.name}</h4>
                        <p class="card-text text-muted mb-2">${author.specialty}</p>
                        <p class="small">Published Books: ${author.books}</p>
                        <button class="btn btn-sm btn-outline-secondary mt-2" 
                                onclick="viewAuthorBooks('${author.name}', '${authorType}')">
                            View Books
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 5. Insert the cards into the container.
    container.innerHTML = cardsHTML;
}

// 6. ONCLICK action for the 'View Books' button
function viewAuthorBooks(authorName, authorType) {
    // This is the functional "onclick" action.
    alert(`Simulating redirection to the book list page for the ${authorType} author: ${authorName}`);
    
    // In a real application, you would redirect here:
    // window.location.href = `books.html?author=${authorName.replace(/\s/g, '-')}`;
}


// 7. Run the function when the page loads
document.addEventListener('DOMContentLoaded', renderAuthors);