// Function to fetch posts using async/await
async function fetchPosts() {
  try {
    // Example API: JSONPlaceholder (free fake API for testing)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Select container
    const postsContainer = document.getElementById("posts");

    // Pick a random subset of posts
    const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 5);

    // Loop through and display
    randomPosts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";

      const postTitle = document.createElement("h3");
      postTitle.textContent = post.title;

      const postBody = document.createElement("p");
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);
      postsContainer.appendChild(postDiv);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the function when page loads
fetchPosts();
