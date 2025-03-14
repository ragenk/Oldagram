const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const articleEl = document.getElementById("article-el");

function renderPost() {
    
    articleEl.innerHTML = "";
    for(let i=0; i < posts.length; i++) {
        articleEl.innerHTML += `
                                <article>
                                
                                    <header class="post-header">
                                        <img id="avatar-el" class="user-avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s avatar.">
                                        <div class="post-info">
                                            <p id="name-el" class="name">${posts[i].name}</p>
                                            <span id="location-el" class="location">${posts[i].location}</span>
                                        </div>
                                    </header>

                                    <section class="post-content">
                                        <img id="img-el" class="post-img" src="${posts[i].post}" alt="${posts[i].name}'s post image.">
                                    </section>

                                    <footer class="post-footer">
                                        <ul class="post-actions">
                                            <li><button id="like-btn" class="post-btn" aria-label="Like this post"><img class="post-icons" src="images/icon-heart.png" alt="Like"></button></li>
                                            <li><button class="post-btn" aria-label="Comment on this post"><img class="post-icons" src="images/icon-comment.png" alt="Comment"></button></li>
                                            <li><button class="post-btn" aria-label="Send this post"><img class="post-icons" src="images/icon-dm.png" alt="Direct message"></button></li>
                                        </ul>
                                        <p id="likes-el" class="likes"><strong>${posts[i].likes}</strong> </p>
                                        <p id="comments-el" class="comments"><strong id="username-el" class="username">${posts[i].username}</strong> ${posts[i].comment}</p>
                                    </footer> 

                                </article>
        
        `
    }    
}

renderPost();

