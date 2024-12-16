/*Adapted from https://dev.to/vikas2426/5-star-rating-component-a-step-by-step-guide-37bk*/

document.addEventListener("DOMContentLoaded", function () {
    // Get a unique key for the current page (e.g., based on the URL)
    const pageKey = `comments_${window.location.pathname}`;

    // Function to save comments to local storage for the current page
    function saveComments(comments) {
        localStorage.setItem(pageKey, JSON.stringify(comments));
    }

    // Function to load comments from local storage for the current page
    function loadComments() {
        const storedComments = localStorage.getItem(pageKey);
        return storedComments ? JSON.parse(storedComments) : [];
    }

    // Function to render comments on the page
    function renderComments(comments) {
        const commentContainer = document.querySelector(".comment-container");
        commentContainer.innerHTML = ""; // Clear existing comments
        comments.forEach(({ username, rating, comment }) => {
            const commentBlock = document.createElement("div");
            commentBlock.classList.add("comment-block");
            commentBlock.innerHTML = `
                <div class="user-name"><strong>${username}:</strong></div>
                <div class="user-comment">"${comment}"</div>
                <div class="user-rating">Rating: ${'&#9733;'.repeat(rating)} (${rating} stars)</div>
            `;
            commentContainer.appendChild(commentBlock);
        });
    }

    // Load and display existing comments when the page loads
    const comments = loadComments();
    renderComments(comments);

    // Add event listener for form submission
    document.getElementById("commentForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the values from the form
        const username = document.getElementById("username").value.trim();
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const comment = document.getElementById("comment").value.trim();

        // Validate that a username, rating, and comment are provided
        if (!username || !rating || !comment) {
            alert("Please fill in all fields: Username, Rating, and Comment.");
            return;
        }

        // Add the new comment to the comments array
        const newComment = { username, rating, comment };
        comments.push(newComment);

        // Save the updated comments to localStorage for the current page
        saveComments(comments);

        // Re-render comments
        renderComments(comments);

        // Clear the form inputs
        document.getElementById("commentForm").reset();
    });
});