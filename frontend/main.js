let allPostsUrl = "https://selectit-social.vercel.app/api/posts/all?page=2&limit=5&public=1";
// let allPostsUrl = "https://selectit-social.vercel.app/api/tags";

fetch(allPostsUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
