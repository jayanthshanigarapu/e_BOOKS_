
// --- ALL WEBSITE DATA (Simulated Database) ---

// const WEBSITE_DATA = {
//     // 1. DATA FOR BESTSELLERS SECTION & SEARCH FILTERING
//     allBooksData: [
//         {
//             id: 1,
//             title: 'The Silent Code',
//             author: 'Eva Grisham',
//             genre: 'Fiction, Thriller',
//             rating: 4.8,
//             price: 35.00,
//             coverColor: '#A0D9D9'
//         },
//         {
//             id: 2,
//             title: 'A Martian Odyssey',
//             author: 'Frank Herbert',
//             genre: 'Fiction, Science Fiction',
//             rating: 4.9,
//             price: 29.50,
//             coverColor: '#82B3C9'
//         },
//         {
//             id: 3,
//             title: 'Digital Fortress',
//             author: 'Todd Phillips',
//             genre: 'Fiction, Thriller',
//             rating: 4.7,
//             price: 24.00,
//             coverColor: '#C4A7E3'
//         },
//         {
//             id: 4,
//             title: 'The Design of Everyday Things',
//             author: 'Mark Owen',
//             genre: 'Non-Fiction, Design, Business',
//             rating: 4.6,
//             price: 18.00,
//             coverColor: '#FFD1AA'
//         },
//         {
//             id: 5,
//             title: 'She Rises at Dawn',
//             author: 'Eva Grey',
//             genre: 'Fiction, Drama',
//             rating: 4.5,
//             price: 16.50,
//             coverColor: '#AED4DF'
//         },
//         {
//             id: 6,
//             title: 'The Ocean at the End of the Lane',
//             author: 'Niel Gaiman',
//             genre: 'Fiction, Fantasy',
//             rating: 4.7,
//             price: 19.99,
//             coverColor: '#C0E0A0'
//         },
//         {
//             id: 7,
//             title: 'Bruja Born',
//             author: 'Zoraida Cordova',
//             genre: 'Fiction, Young Adult Fantasy',
//             rating: 4.8,
//             price: 21.00,
//             coverColor: '#FFC9C9'
//         },
//         {
//             id: 8,
//             title: 'The Wood Beyond',
//             author: 'James Henry',
//             genre: 'Fiction, Horror',
//             rating: 4.6,
//             price: 22.00,
//             coverColor: '#D6A6A6'
//         },
//         {
//             id: 9,
//             title: 'A Brief History of Time',
//             author: 'Stephen Hawking',
//             genre: 'Non-Fiction, Science, Physics',
//             rating: 4.9,
//             price: 15.50,
//             coverColor: '#8A9DB4'
//         },
//         {
//             id: 10,
//             title: 'Sapiens: A Brief History of Humankind',
//             author: 'Yuval Noah Harari',
//             genre: 'Non-Fiction, History, Philosophy',
//             rating: 4.7,
//             price: 27.00,
//             coverColor: '#FFD700'
//         }
//     ],

const BOOKS_DATA = [
    { title: "MAHA PRASTHANAM", author: "SREE SREE", rating: 4.8, price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsAcx5eZRCJF__PbarAoT1Zxj7Qpg7Zhidw&s", category: "Poetry", description: "A groundbreaking collection of revolutionary poetry." },
    { title: "MAHABHARATHAM", author: "VEDA VYASA", rating: 4.9, price: 400, image: "https://wisdombooksofindia.com/wp-content/uploads/2019/05/Eng-Cvr-Mahabharat.jpg", category: "Mythology", description: "The epic narrative of the Kurukshetra War and the fates of the Kaurava and Pandava princes." },
    { title: "INDIAN HISTORY", author: "JOHN KEAY", rating: 4.7, price: 450, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLbphcpdi7AILQNu3TvYtGq8j4KgCQCFjE96JZO1pPdAUX3qgW", category: "History", description: "A comprehensive and engaging account of India's vast history." },
    { title: "HISTORY OF THE WORLD", author: "JM ROBERTS", rating: 4.6, price: 380, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiumBbwqLc3BiURjXrktvoaYh054nz4tayIw&s", category: "History", description: "A global narrative of human history across continents and epochs." },
    { title: "THE SONGS OF TREES", author: "DAVID GEORGE HASKELL", rating: 4.5, price: 280, image: "https://onetreeplanted.org/cdn/shop/files/The_Songs_of_Trees_by_David_George_Haskell.jpg?v=1738152837", category: "Nature", description: "An exploration of nature's sonic network through trees." },
    { title: "RIVES OF THE SEA", author: "SARA TEASDALE", rating: 4.7, price: 500, image: "https://images.squarespace-cdn.com/content/v1/6614e8e35ecd4b1ae89c7470/6e8a58cd-d564-42ca-9328-4aa8e8e046a8/from+the+river+to+the+sea.jpg", category: "Poetry", description: "Lyrical poems on love, nature, and the inner world of the poet." },
    { title: "THE CREATION OF THE UNIVERSE", author: "GEORGE GAMOW", rating: 4.8, price: 600, image: "https://m.media-amazon.com/images/I/81mBpVR7zKL._UF1000,1000_QL80_.jpg", category: "Science", description: "A classic work of popular science explaining the Big Bang theory." },
    { title: "THE MILKY WAY", author: "MOIYA MC TIER", rating: 4.6, price: 90, image: "https://prodimage.images-bn.com/pimages/9781538754160_p0_v3_s192x300.jpg", category: "Science", description: "An engaging journey through the science and history of our galaxy." },
];

const AUTHORS_DESCRIPTIONS = {
    "SREE SREE": "Legendary Telugu poet and lyricist known for revolutionary writings.",
    "VEDA VYASA": "Author of the Mahabharata and Puranas, a revered sage in Hindu tradition.",
    "JOHN KEAY": "British historian and author of popular histories of India.",
    "JM ROBERTS": "British historian famous for comprehensive works on world history.",
    "DAVID GEORGE HASKELL": "Biologist and writer exploring the connection between nature and humanity.",
    "SARA TEASDALE": "American lyrical poet known for simplicity and emotional depth.",
    "GEORGE GAMOW": "Physicist and cosmologist, pioneer of Big Bang theory.",
    "MOIYA MC TIER": "Astrophysicist and folklorist combining science with storytelling."
};

const CATEGORIES_DATA = [
    { icon: "fas fa-palette", name: "Art & Crafts", count: 120 },
    { icon: "fas fa-chart-pie", name: "Infographics", count: 90 },
    { icon: "fas fa-child", name: "Children's Books", count: 200 },
    { icon: "fas fa-book-open", name: "Fiction & Fantasies", count: 350 },
    { icon: "fas fa-code", name: "Business & Development", count: 180 },
    { icon: "fas fa-utensils", name: "Cookbooks", count: 70 },
    { icon: "fas fa-mask", name: "Comics", count: 150 },
];
function renderCategories() {
    const container = document.querySelector("#categories .row");
    container.innerHTML = "";
    CATEGORIES_DATA.forEach(cat => {
        const card = `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="category-card card text-center p-3 shadow-sm h-100" style="cursor:pointer">
                <div class="card-body">
                    <i class="${cat.icon} fa-2x mb-3 text-primary"></i>
                    <h5 class="card-title">${cat.name}</h5>
                    <p class="card-text text-muted">${cat.count}+ Books</p>
                </div>
            </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", card);
    });

    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const categoryName = card.querySelector(".card-title").textContent.trim().toLowerCase();
            const filtered = BOOKS_DATA.filter(b => b.category.toLowerCase() === categoryName);
            renderBooks(filtered);
            document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function renderBooks(books) {
    const container = document.querySelector("#shop .row");
    container.innerHTML = "";
    if (books.length === 0) {
        container.innerHTML = `<p class="text-center w-100">No books found.</p>`;
        return;
    }
    books.forEach(book => {
        const encoded = encodeURIComponent(JSON.stringify(book));
        const card = 
        <div class="col-6 col-md-4 col-lg-2-5">
            <div class="book-card card h-100 shadow-sm text-center" style="cursor:pointer">
                <img src="${book.image}" class="card"/>
            </div>
        </div>
    }
    

    // 2. DATA FOR NAVIGATION & CATEGORIES SECTION
    categoriesData: [
        { icon: 'fas fa-book-open', title: 'Fiction & Fantasies', count: 350, color: '#DAA520' },
        { icon: 'fas fa-chart-pie', title: 'Infographics', count: 90, color: '#6A5ACD' },
        { icon: 'fas fa-child', title: "Children's Books", count: 200, color: '#3CB371' },
        { icon: 'fas fa-code', title: 'Business & Development', count: 180, color: '#4682B4' },
        { icon: 'fas fa-palette', title: 'Art & Crafts', count: 125, color: '#FF7F50' },
        { icon: 'fas fa-utensils', title: 'Cookbooks', count: 70, color: '#DC143C' },
        { icon: 'fas fa-mask', title: 'Comics & Graphic Novels', count: 150, color: '#8A2BE2' },
        { icon: 'fas fa-brain', title: 'Science & Philosophy', count: 110, color: '#008080' }
    ],

    // 3. DATA FOR AUTHORS LIST PAGE (fiction vs. nonfiction)
    allAuthors: {
        fiction: [
            { name: 'Frank Herbert', books: 10, specialty: 'Science Fiction Master' },
            { name: 'Niel Gaiman', books: 15, specialty: 'Fantasy, Comics' },
            { name: 'Zoraida Cordova', books: 8, specialty: 'Young Adult Fantasy' },
            { name: 'Eva Grisham', books: 5, specialty: 'Contemporary Thriller' },
            { name: 'Todd Phillips', books: 3, specialty: 'Digital Thriller' }
        ],
        nonfiction: [
            { name: 'Mark Owen', books: 5, specialty: 'Design & UX' },
            { name: 'Yuval Noah Harari', books: 3, specialty: 'World History, Philosophy' },
            { name: 'Stephen Hawking', books: 2, specialty: 'Cosmology, Physics' },
            { name: 'David Haskell', books: 3, specialty: 'Science, Nature' },
        ]
    }
};

// =====================================================================
// 1. DATA DEFINITION (Books and Categories)
// =====================================================================

const BOOKS_DATA = [
    { title: "MAHA PRASTHANAM", author: "SREE SREE", rating: 4.8, price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsAcx5eZRCJF__PbarAoT1Zxj7Qpg7Zhidw&s", category: "Poetry", description: "A groundbreaking collection of revolutionary poetry that marked a new era in Telugu literature. The work is known for its powerful social commentary." },
    { title: "MAHABHARATHAM", author: "VEDA VYASA", rating: 4.9, price: 400, image: "https://wisdombooksofindia.com/wp-content/uploads/2019/05/Eng-Cvr-Mahabharat.jpg", category: "Mythology", description: "The epic narrative of the Kurukshetra War and the fates of the Kaurava and the Pandava princes, offering deep philosophical and moral lessons." },
    { title: "INDIAN HISTORY", author: "JOHN KEAY", rating: 4.7, price: 450, image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLbphcpdi7AILQNu3TvYtGq8j4KgCQCFjE96JZO1pPdAUX3qgW", category: "History", description: "A comprehensive and engaging account of India's vast history, from the Indus Valley Civilization to the modern era, written for the general reader." },
    { title: "HISTORY OF THE WORLD", author: "JM ROBERTS", rating: 4.6, price: 380, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiumBbwqLc3BiURjXrktvoaYh054nz4tayIw&s", category: "History", description: "An authoritative and compelling single-volume narrative of human history across all continents and epochs, focusing on interconnected global themes." },
    { title: "THE SONGS OF TREES", author: "DAVID GEORGE HASKELL", rating: 4.5, price: 280, image: "https://onetreeplanted.org/cdn/shop/files/The_Songs_of_Trees_by_David_George_Haskell.jpg?v=1738152837", category: "Nature", description: "An exploration of nature's sonic network through the lives of twelve trees, revealing the biological and cultural connections they foster." },
    { title: "RIVES OF THE SEA", author: "SARA TEASDALE", rating: 4.7, price: 500, image: "https://images.squarespace-cdn.com/content/v1/6614e8e35ecd4b1ae89c7470/6e8a58cd-d564-42ca-9328-4aa8e8e046a8/from+the+river+to+the+sea.jpg", category: "Poetry", description: "A collection of lyrical poems known for their focus on themes of love, nature, and the inner emotional landscape of the poet." },
    { title: "THE CREATION OF THE UNIVERSE", author: "GEORGE GAMOW", rating: 4.8, price: 600, image: "https://m.media-amazon.com/images/I/81mBpVR7zKL._UF1000,1000_QL80_.jpg", category: "Science", description: "A classic work of popular science explaining the Big Bang theory, written by one of the theory's pioneers in an accessible way." },
    { title: "THE MILKY WAY", author: "MOIYA MC TIER", rating: 4.6, price: 90, image: "https://prodimage.images-bn.com/pimages/9781538754160_p0_v3_s192x300.jpg", category: "Science", description: "An engaging journey through the science and history of our home galaxy, blending astrophysics with cultural folklore and personal narrative." },
];

const AUTHORS_DESCRIPTIONS = {
    "SREE SREE": "Srirangam Srinivasa Rao, popularly known as Sri Sri, was a legendary Telugu poet and lyricist known for his revolutionary and progressive writings.",
    "VEDA VYASA": "Veda Vyasa is a central and revered figure in Hindu traditions, credited as the author and compiler of the Mahabharata and Puranas.",
    "JOHN KEAY": "John Keay is a British historian, writer, and broadcaster, specializing in popular histories of India, the Far East, and the world.",
    "JM ROBERTS": "J. M. Roberts was a distinguished British historian, known for his comprehensive and accessible works on world history and European history.",
    "DAVID GEORGE HASKELL": "David George Haskell is a biologist and writer, famous for his books that explore the deep connections between nature and human experience.",
    "SARA TEASDALE": "Sara Teasdale was an American lyrical poet, known for her simple, personal, and beautiful verse, winning the Pulitzer Prize for Poetry in 1918.",
    "GEORGE GAMOW": "George Gamow was a Soviet and American theoretical physicist and cosmologist, known for his work on the Big Bang theory, radioactive decay, and DNA.",
    "MOIYA MC TIER": "Moiya McTier is an astrophysicist and folklorist, popular for her books that combine complex science with accessible and narrative storytelling."
};

const CATEGORIES_DATA = [
    { name: "Art & Crafts", count: 120, icon: "fas fa-palette" },
    { name: "Infographics", count: 90, icon: "fas fa-chart-pie" },
    { name: "Children's Books", count: 200, icon: "fas fa-child" },
    { name: "Fiction & Fantasies", count: 350, icon: "fas fa-book-open" },
    { name: "Business & Development", count: 180, icon: "fas fa-code" },
    { name: "Cookbooks", count: 70, icon: "fas fa-utensils" },
    { name: "Comics", count: 150, icon: "fas fa-mask" },
];

// =====================================================================
// 2. MODAL DISPLAY FUNCTION (NEW)
// =====================================================================

/**
 * Populates and shows the Bootstrap Modal with book and author details.
 * @param {object} book - The book object containing details.
 */
function showBookDetailsModal(book) {
    // Get the author description or a fallback message
    const authorDescription = AUTHORS_DESCRIPTIONS[book.author] || "Author description not available.";
    
    // Select modal elements
    document.getElementById('bookTitleModal').textContent = book.title;
    document.getElementById('bookImageModal').src = book.image;
    document.getElementById('bookAuthorModal').textContent = book.author;
    document.getElementById('bookRatingModal').textContent = `${book.rating} / 5.0`;
    document.getElementById('bookPriceModal').textContent = `₹${book.price}`;
    document.getElementById('bookCategoryModal').textContent = book.category;
    document.getElementById('bookDescriptionModal').textContent = book.description;
    document.getElementById('authorDescriptionModal').textContent = authorDescription;

    // Optional: Update Buy Now link (e.g., to an external shop)
    document.getElementById('buyNowLink').href = `#buy-${book.title.replace(/\s/g, '-')}`; 

    // Show the modal using Bootstrap's JS API
    const modalElement = document.getElementById('bookDetailsModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// =====================================================================
// 3. RENDERING FUNCTIONS
// =====================================================================

function renderBooks(books) {
    const shopContainer = document.querySelector('#shop .row');
    if (!shopContainer) return;

    shopContainer.innerHTML = ''; // Clear previous books

    if (books.length === 0) {
        shopContainer.innerHTML = '<p class="text-center w-100">No books found matching your search criteria.</p>';
        return;
    }

    books.forEach(book => {
        // IMPORTANT: We use JSON.stringify and encodeURIComponent to safely pass the object data
        const bookDataString = encodeURIComponent(JSON.stringify(book));

        const bookCard = `
            <div class="col-6 col-md-4 col-lg-2-5">
                <div class="book-card card h-100 shadow-sm text-center">
                    <img src="${book.image}" class="card-img-top p-3" alt="Book Cover for ${book.title}">
                    <div class="card-body p-2">
                        <h6 class="card-title mb-1">${book.title}</h6>
                        <p class="card-text text-muted small mb-1">By ${book.author}</p>
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            <span class="text-warning me-1"><i class="fas fa-star"></i></span>
                            <span class="small text-muted">${book.rating}</span>
                        </div>
                        <span class="fw-bold text-primary">₹${book.price}</span>
                        <button class="btn btn-sm btn-outline-primary mt-2 w-75" 
                                onclick="showBookDetailsModal(JSON.parse(decodeURIComponent('${bookDataString}')))">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `;
        shopContainer.insertAdjacentHTML('beforeend', bookCard);
    });
}

function renderCategories() {
    const categoriesContainer = document.querySelector('#categories .row');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = ''; 

    CATEGORIES_DATA.forEach(category => {
        const categoryCard = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="category-card card text-center p-3 shadow-sm h-100">
                    <div class="card-body">
                        <i class="${category.icon} fa-2x mb-3 text-primary"></i>
                        <h5 class="card-title">${category.name}</h5>
                        <p class="card-text text-muted">${category.count}+ Books</p>
                    </div>
                </div>
            </div>
        `;
        categoriesContainer.insertAdjacentHTML('beforeend', categoryCard);
    });
}

// =====================================================================
// 4. SEARCH AND FILTER LOGIC
// =====================================================================

function filterBooks() {
    const searchInput = document.querySelector('#search-section input[type="text"]');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredBooks = BOOKS_DATA.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchTerm);
        const authorMatch = book.author.toLowerCase().includes(searchTerm);
        const categoryMatch = book.category.toLowerCase().includes(searchTerm);

        // Filter by title, author, or category
        return titleMatch || authorMatch || categoryMatch;
    });

    renderBooks(filteredBooks);
}

// =====================================================================
// 5. INITIALIZATION AND EVENT LISTENERS
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderBooks(BOOKS_DATA);

    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', filterBooks);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') filterBooks();
        });
    }
});

// You can export this data for use in other files:
// export default WEBSITE_DATA;
// Data: Real-world analogy: This is the digital inventory system of the bookstore.
const CategoriesData = [
    { icon: 'fas fa-palette', title: 'Art & Crafts', count: 125, color: '#FF7F50' },
    { icon: 'fas fa-chart-pie', title: 'Infographics', count: 90, color: '#6A5ACD' },
    { icon: 'fas fa-child', title: "Children's Books", count: 200, color: '#3CB371' },
    { icon: 'fas fa-book-open', title: 'Fiction & Fantasies', count: 350, color: '#DAA520' },
    { icon: 'fas fa-code', title: 'Business & Development', count: 180, color: '#4682B4' },
    { icon: 'fas fa-utensils', title: 'Cookbooks', count: 70, color: '#DC143C' },
    { icon: 'fas fa-mask', title: 'Comics & Graphic Novels', count: 150, color: '#8A2BE2' },
    { icon: 'fas fa-brain', title: 'Science & Philosophy', count: 110, color: '#008080' }
];

const bestsellersData = [
    { title: 'The Silent Code', author: 'Eva Grisham', rating: 4.8, price: 35.00, coverColor: '#A0D9D9' },
    { title: 'A Martian Odyssey', author: 'Frank Herbert', rating: 4.9, price: 29.50, coverColor: '#82B3C9' },
    { title: 'Digital Fortress', author: 'Todd Phillips', rating: 4.7, price: 24.00, coverColor: '#C4A7E3' },
    { title: 'The Design of Everyday Things', author: 'Mark Owen', rating: 4.6, price: 18.00, coverColor: '#FFD1AA' },
    { title: 'She Rises at Dawn', author: 'Eva Grey', rating: 4.5, price: 16.50, coverColor: '#AED4DF' },
    { title: 'The Ocean at the End of the Lane', author: 'Niel Gaiman', rating: 4.7, price: 19.99, coverColor: '#C0E0A0' },
    { title: 'Bruja Born', author: 'Zoraida Cordova', rating: 4.8, price: 21.00, coverColor: '#FFC9C9' },
    { title: 'The Wood Beyond', author: 'James Henry', rating: 4.6, price: 22.00, coverColor: '#D6A6A6' }
];



// Function to show a brief description of the author using an onclick event
function showAuthorDescription(authorName, description) {
    // 1. Check if both the name and description are provided.
    if (!authorName || !description) {
        alert("Author details are currently unavailable.");
        return;
    }
    
    // 2. Format the message for the user.
    const message = `--- About ${authorName} ---\n\n${description}\n\n[Click OK to continue browsing]`;
    
    // 3. The actual onclick action: displays the description using an alert box.
    // In a production environment, this would be a beautiful Bootstrap Modal.
    alert(message);
}

// Inside document.addEventListener('DOMContentLoaded', ...) in script.js

// Attach the click handler to the "Start Now" button
const startNowBtn = document.querySelector('.navbar .btn-primary'); 
if (startNowBtn) {
    startNowBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link/button action if any
        scrollToSearch();
    });
}
// --- New Function to Scroll to the Search Bar ---

function scrollToSearch() {
    const searchSection = document.getElementById('search-section');
    
    if (searchSection) {
        // Use the scrollIntoView method for a smooth scroll
        searchSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Aligns the top of the search section with the top of the viewport
        });
        
        // Optional: Immediately focus the input field for quick typing
        const searchInput = searchSection.querySelector('.form-control');
        if (searchInput) {
            searchInput.focus();
        }
    }
}

// 1. Function to Dynamically Render Categories
function renderCategories() {
    // Get the HTML element where the categories should be placed (the Bootstrap row).
    const categoriesRow = document.querySelector('.categories-section .row');

    if (!categoriesRow) return; // Exit if the container is not found.

    // Analogy: Laying out the section signs in the bookstore.
    const categoriesHTML = categoriesData.map(category => {
        // Map over the data and return an HTML string for each category card.
        // We use template literals (backticks) for clean multi-line HTML.
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <div class="category-card card text-center p-3 shadow-sm h-100" data-color="${category.color}">
                    <div class="card-body">
                        <i class="${category.icon} fa-2x mb-3" style="color: ${category.color};"></i>
                        <h5 class="card-title">${category.title}</h5>
                        <p class="card-text text-muted">${category.count}+ Books</p>
                    </div>
                </div>
            </div>
        `;
    }).join(''); // Join the array of HTML strings into one single string.

    // Insert the generated HTML into the row element.
    categoriesRow.innerHTML = categoriesHTML;
    
    // Add hover effect listeners after rendering
    addCategoryHoverListeners();
}


// Function to handle clicks on the bestsellers section
function handleBestsellerClick(event) {
    // 1. Find the closest book card element to the clicked target.
    const bookCardLink = event.target.closest('.book-card a');
    
    // 2. Check if an actual book link was clicked (not just empty space).
    if (bookCardLink) {
        // 3. Prevent the default link behavior temporarily.
        event.preventDefault(); 
        
        // 4. Get the title from the link's href attribute (for tracking).
        const href = bookCardLink.getAttribute('href'); 
        const titleMatch = href.match(/title=([^&]+)/);
        const bookTitle = titleMatch ? titleMatch[1].replace(/-/g, ' ') : 'Unknown Book';

        // 5. Action 1: Display a notification (for user experience/tracking).
        console.log(`User clicked on: ${decodeURIComponent(bookTitle)}`);
        alert(`Redirecting to details for: ${decodeURIComponent(bookTitle).replace(/\+/g, ' ')}`);

        // 6. Action 2: Redirect the user after the alert.
        window.location.href = href;
    }
}


// Function to add focus/blur classes to the search bar container
function enhanceSearchBarFeedback() {
    const searchBarDiv = document.querySelector('.hero-section .search-bar');
    const searchInput = document.querySelector('.hero-section .form-control');

    if (searchBarDiv && searchInput) {
        // 1. When the input field gains focus (is clicked/tabbed into)...
        searchInput.addEventListener('focus', () => {
            // 2. Add a class to the parent div for custom CSS styling (e.g., a glow).
            searchBarDiv.classList.add('is-focused');
        });

        // 3. When the input field loses focus (user clicks elsewhere)...
        searchInput.addEventListener('blur', () => {
            // 4. Remove the class.
            searchBarDiv.classList.remove('is-focused');
        });
    }
}


// Inside the document.addEventListener('DOMContentLoaded', ...) block:

// Simple Search Button action (UPDATED BLOCK)
const searchButton = document.querySelector('.hero-section .btn-primary');
const searchInput = document.querySelector('.hero-section .form-control');

if (searchButton && searchInput) {
    
    // Listener for the click event on the search button
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        
        // 1. If a query is entered, filter the books.
        if (query) {
            // Call the filtering function to show results
            filterBooks(query);
            
        } else {
            // 2. If the search bar is empty, show all bestsellers again.
            alert('Displaying all bestsellers. Enter a query to filter results.');
            renderBestsellers(); // Call the original render function
        }
    });
    
    // Listener for the Enter key press in the input field
    searchButton.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchButton.click(); // Programmatically click the search button
        }
    });
}
// Function to handle the scroll-to-top button visibility and click
function setupScrollToTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollTopBtn) return; // Exit if the button doesn't exist.

    // 1. Action: Visibility check (runs whenever the user scrolls).
    window.addEventListener('scroll', () => {
        // If the user scrolls down more than 500 pixels, show the button.
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // 2. Action: Click to scroll (runs when the button is clicked).
    scrollTopBtn.addEventListener('click', () => {
        // Scrolls the window smoothly to the very top (0, 0).
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}




// 2. Function for Category Hover Effect
// Real-world analogy: When you touch a section sign, it lights up.
function addCategoryHoverListeners() {
    document.querySelectorAll('.category-card').forEach(card => {
        const icon = card.querySelector('i');
        const color = card.getAttribute('data-color');

        card.addEventListener('mouseover', () => {
            // On hover, change the icon color to white (as per CSS)
            if (icon) icon.style.color = '#fff';
        });

        card.addEventListener('mouseout', () => {
            // On mouse out, revert the icon color back to its original color
            if (icon) icon.style.color = color;
        });
    });
}


// 3. Function to Dynamically Render Bestsellers
function renderBestsellers() {
    // Get the HTML element where the bestsellers should be placed (the Bootstrap row).
    const bestsellersRow = document.querySelector('.bestsellers-section .row');

    if (!bestsellersRow) return; // Exit if the container is not found.

    // Analogy: Arranging the featured books on the "Bestsellers" table.
    const bestsellersHTML = bestsellersData.map(book => {
        // Generate the rating stars dynamically
        const stars = generateStars(book.rating);
        
        return `
            <div class="col-6 col-md-4 col-lg-2-5 mb-4">
                <div class="book-card card h-100 shadow-sm text-center">
                    <img src="https://via.placeholder.com/150x220/${book.coverColor.substring(1)}/FFFFFF?text=${encodeURIComponent(book.title.replace(/\s/g, '+'))}" 
                        class="card-img-top p-3" alt="Book Cover: ${book.title}">
                    <div class="card-body p-2">
                        <h6 class="card-title mb-1">${book.title}</h6>
                        <p class="card-text text-muted small mb-1">By ${book.author}</p>
                        <div class="d-flex justify-content-center align-items-center mb-2">
                            ${stars}
                            <span class="small text-muted">${book.rating}</span>
                        </div>
                        <span class="fw-bold text-primary">$${book.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Improved placeholder URL construction
// book.coverColor is a hex code like '#A0D9D9'. We slice it to remove the '#'.
const backgroundColor = book.coverColor.substring(1);
const placeholderText = book.title.toUpperCase().split(' ').join('+'); // Use + for spaces

return `
    <div class="col-6 col-md-4 col-lg-2-5 mb-4">
        <div class="book-card card h-100 shadow-sm text-center">
            <img src="https://via.placeholder.com/150x220/${backgroundColor}/FFFFFF?text=${placeholderText}" 
                class="card-img-top p-3" alt="Book Cover: ${book.title}">
            <div class="card-body p-2">
                </div>
        </div>
    </div>
`;

    // Insert the generated HTML into the row element.
    bestsellersRow.innerHTML = bestsellersHTML;
}

// 4. Helper Function to Generate Star Rating HTML
function generateStars(rating) {
    // Generates 5 stars based on the book's rating (e.g., 4.8)
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<span class="text-warning me-1"><i class="fas fa-star"></i></span>';
    }

    // Add half star
    if (hasHalfStar) {
        // Font Awesome half-star icon
        starsHtml += '<span class="text-warning me-1"><i class="fas fa-star-half-alt"></i></span>';
    }

    // Pad with empty stars to make 5 total (optional, but good for consistency)
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        // Font Awesome regular star icon (can be used as an empty star)
        starsHtml += '<span class="text-secondary me-1"><i class="far fa-star"></i></span>'; 
    }
    
    return starsHtml;
}


// 5. Run the rendering functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // This ensures the DOM structure is fully ready before we try to manipulate it.
    console.log("DOM loaded. Rendering dynamic content...");
    renderCategories();
    renderBestsellers();
});


// Data: (KEEP YOUR ORIGINAL CATEGORIES AND BESTSELLERS DATA HERE)
const categoriesData = [
    /* ... your category objects ... */
    { icon: 'fas fa-palette', title: 'Art & Crafts', count: 125, color: '#FF7F50' },
    // ...
];
const bestsellersData = [
    /* ... your book objects ... */
    { title: 'The Silent Code', author: 'Eva Grisham', rating: 4.8, price: 35.00, coverColor: '#A0D9D9' },
    // ...
];

// 1. DYNAMIC RENDERING FUNCTIONS (KEEP THESE THE SAME)
function renderCategories() {
    const categoriesRow = document.querySelector('.categories-section .row');
    if (!categoriesRow) return;
    
    // Use the <a> tag wrap here for clickability
    const categoriesHTML = categoriesData.map(category => {
        return `
            <div class="col-6 col-md-4 col-lg-3 mb-4">
                <a href="category.html?name=${category.title.replace(/\s/g, '-')}" class="text-decoration-none">
                    <div class="category-card card text-center p-3 shadow-sm h-100" data-color="${category.color}">
                        <div class="card-body">
                            <i class="${category.icon} fa-2x mb-3" style="color: ${category.color};"></i>
                            <h5 class="card-title">${category.title}</h5>
                            <p class="card-text text-muted">${category.count}+ Books</p>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');
    // Add click functionality to category cards
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', () => {
    const categoryName = card.querySelector('.card-title').textContent.trim();
    const filtered = BOOKS_DATA.filter(
      b => b.category.toLowerCase() === categoryName.toLowerCase()
    );
    renderBooks(filtered);
    window.scrollTo({ top: document.getElementById('shop').offsetTop, behavior: 'smooth' });
  });
});

    categoriesRow.innerHTML = categoriesHTML;
    addCategoryHoverListeners();
}




// Add this new function to your script.js file:

// Function to handle the actual filtering and re-rendering of the book list
function filterBooks(query) {
    // 1. Convert the query to lowercase for case-insensitive search.
    const lowerCaseQuery = query.toLowerCase();

    // 2. Filter the existing book data (bestsellersData) based on the query.
    // Analogy: Sifting through the inventory cards to find matches.
    const filteredBooks = bestsellersData.filter(book => {
        const title = book.title.toLowerCase();
        const author = book.author.toLowerCase();
        
        // Check if the query is included in the title OR the author's name.
        return title.includes(lowerCaseQuery) || author.includes(lowerCaseQuery);
    });

    // 3. Get the container where the books are displayed.
    const bestsellersRow = document.querySelector('.bestsellers-section .row');
    if (!bestsellersRow) return;

    // 4. Check if results were found and update the header/display.
    const sectionHeader = document.querySelector('.bestsellers-section h2');
    if (sectionHeader) {
        if (query) {
             sectionHeader.textContent = filteredBooks.length > 0 
                ? `Search Results (${filteredBooks.length})` 
                : `No Results Found for "${query}"`;
        } else {
             // Reset to original title if query is cleared
             sectionHeader.textContent = 'Our Bestsellers'; 
        }
    }
    
    // 5. Render the filtered list (reusing the logic from renderBestsellers).
    if (filteredBooks.length > 0) {
        renderBookCards(filteredBooks, bestsellersRow);
    } else {
        // Clear the display if no books match
        bestsellersRow.innerHTML = `<p class="text-center w-100 py-5">
                                      We could not find any books matching your search. Try a different title or author.
                                   </p>`;
    }
}


// MODIFICATION TO EXISTING renderBestsellers:
// Split renderBestsellers into two parts for reuse: one to get the data (optional) 
// and one to perform the rendering logic.

function renderBookCards(books, container) {
    // This function generates the HTML and inserts it into the given container.
    const cardsHTML = books.map(book => {
        // Reuse your existing logic for generating stars, placeholder URL, etc.
        const stars = generateStars(book.rating);
        const backgroundColor = book.coverColor.substring(1);
        const placeholderText = book.title.toUpperCase().split(' ').join('+');

        return `
            <div class="col-6 col-md-4 col-lg-2-5 mb-4">
                <a href="book-details.html?title=${book.title.replace(/\s/g, '-')}" class="text-decoration-none">
                    <div class="book-card card h-100 shadow-sm text-center">
                        <img src="https://via.placeholder.com/150x220/${backgroundColor}/FFFFFF?text=${placeholderText}" 
                            class="card-img-top p-3" alt="Book Cover: ${book.title}">
                        <div class="card-body p-2">
                            <h6 class="card-title mb-1">${book.title}</h6>
                            <p class="card-text text-muted small mb-1">By ${book.author}</p>
                            <div class="d-flex justify-content-center align-items-center mb-2">
                                ${stars}
                                <span class="small text-muted">${book.rating}</span>
                            </div>
                            <span class="fw-bold text-primary">$${book.price.toFixed(2)}</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');
    container.innerHTML = cardsHTML;
}

// UPDATE: Modify the original renderBestsellers to call the new function with the full data
function renderBestsellers() {
    const bestsellersRow = document.querySelector('.bestsellers-section .row');
    if (bestsellersRow) {
        renderBookCards(bestsellersData, bestsellersRow);
    }
}

function renderBestsellers() {
    const bestsellersRow = document.querySelector('.bestsellers-section .row');
    if (!bestsellersRow) return;
    
    const bestsellersHTML = bestsellersData.map(book => {
        const stars = generateStars(book.rating);
        const backgroundColor = book.coverColor.substring(1);
        const placeholderText = book.title.toUpperCase().split(' ').join('+');
        
        return `
            <div class="col-6 col-md-4 col-lg-2-5 mb-4">
                <a href="book-details.html?title=${book.title.replace(/\s/g, '-')}" class="text-decoration-none">
                    <div class="book-card card h-100 shadow-sm text-center">
                        <img src="https://via.placeholder.com/150x220/${backgroundColor}/FFFFFF?text=${placeholderText}" 
                            class="card-img-top p-3" alt="Book Cover: ${book.title}">
                        <div class="card-body p-2">
                            <h6 class="card-title mb-1">${book.title}</h6>
                            <p class="card-text text-muted small mb-1">By ${book.author}</p>
                            <div class="d-flex justify-content-center align-items-center mb-2">
                                ${stars}
                                <span class="small text-muted">${book.rating}</span>
                            </div>
                            <span class="fw-bold text-primary">$${book.price.toFixed(2)}</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');
    bestsellersRow.innerHTML = bestsellersHTML;
}

function generateStars(rating) { /* ... (KEEP THIS HELPER FUNCTION THE SAME) ... */ }
function addCategoryHoverListeners() { /* ... (KEEP THIS FUNCTION THE SAME) ... */ }


// 2. ONCLICK ACTIONS (EVENT HANDLERS)

// A. Handle Clicks on Bestsellers (Redirection & Feedback)
function handleBestsellerClick(event) {
    const bookCardLink = event.target.closest('.book-card a');
    
    if (bookCardLink) {
        event.preventDefault(); // Stop default navigation
        
        const href = bookCardLink.getAttribute('href'); 
        const titleMatch = href.match(/title=([^&]+)/);
        const bookTitle = titleMatch ? decodeURIComponent(titleMatch[1].replace(/-/g, ' ')) : 'Unknown Book';

        // 1. The custom action: a simple alert for user feedback
        alert(`You've selected: ${bookTitle}. Redirecting to details page...`);

        // 2. The redirection action
        window.location.href = href;
    }
}

// B. Enhance Search Bar Feedback (Focus/Clear)
function enhanceSearchBarFeedback() {
    const searchBarDiv = document.querySelector('.hero-section .search-bar');
    const searchInput = document.querySelector('.hero-section .form-control');

    if (searchBarDiv && searchInput) {
        // Event listener for ONFOCUS
        searchInput.addEventListener('focus', () => {
            searchBarDiv.classList.add('is-focused');
        });

        // Event listener for ONBLUR
        searchInput.addEventListener('blur', () => {
            searchBarDiv.classList.remove('is-focused');
        });
    }
}

// C. Scroll-to-Top Button Logic
function setupScrollToTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollTopBtn) return;

    // Event listener for ONCLICK
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Event listener for ON SCROLL (for visibility)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
}


// 3. INITIALIZATION BLOCK (Executes when the page is ready)
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all dynamic content
    renderCategories();
    renderBestsellers();

    // 2. Attach all event listeners (onclick actions)
    
    // Attach click handler to the *parent* container (bestsellers) for event delegation
    const bestsellersSection = document.querySelector('.bestsellers-section');
    if (bestsellersSection) {
        bestsellersSection.addEventListener('click', handleBestsellerClick);
    }
    
    // Initialize UX enhancements
    enhanceSearchBarFeedback();
    setupScrollToTopButton();
    
    // Simple Search Button action
    const searchButton = document.querySelector('.hero-section .btn-primary');
    const searchInput = document.querySelector('.hero-section .form-control');
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching the digital library for: "${query}"...`);
                searchInput.value = '';
            } else {
                alert('Please type a book, author, or genre to search.');
            }
        });
    }
});


// 6. Simple hero search functionality (Optional UX enhancement)
const altSearchInput = document.getElementById('taskInput') || document.querySelector('.hero-section .form-control');
const altSearchButton = document.getElementById('addTaskBtn') || document.querySelector('.hero-section .btn-primary');

if (altSearchButton && altSearchInput) {
    altSearchButton.addEventListener('click', () => {
        const query = altSearchInput.value.trim();
        if (query) {
            alert(`Searching for: "${query}"... (Imagine a search results page here!)`);
            altSearchInput.value = '';
        } else {
            alert('Please enter a search query.');
        }
    });

    altSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            altSearchButton.click();
        }
    });
}