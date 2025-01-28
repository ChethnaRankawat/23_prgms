/*Question 7: Create a series of promises where each promise depends on the
result of the previous one. For example, fetch user data, then fetch posts
for that user, and finally fetch comments for the posts.*/
const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'chehna' });
        }, 1000);
    });
}

const fetchPosts = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user.posts || []);
        }, 1000);
    });
}

const fetchComments = (posts) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(posts.map(post => post.comments || []));
        }, 1000);
    });
}
const fetchUserPostsComments = () => {
    return fetchUser()
    .then(user => fetchPosts(user))
    .then(posts => fetchComments(posts))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));
    }
    fetchUserPostsComments();


    fetchUser()
    .then(user => fetchPosts(user))
    .then(posts => fetchComments(posts))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));


   fetchUser()
   .then(user => {
    return fetchPosts(user)
    })
    .then(posts => {
        return fetchComments(posts)
        })
        .then(comments => console.log(comments))
        .catch(error => console.error(error));
        




