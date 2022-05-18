const axios = require("axios");

/* axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) =>
    res.data.map(({ name, address, phone }) =>
      console.log(
        `This person ${name} lives in ${address.street} you can call them on ${phone}`
      )
    )
  )
  .catch((err) => console.log(err)); */

// https://jsonplaceholder.typicode.com/

// todos - get titles from todos
/* axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.data.forEach(({ title }) => console.log(title)))
  .catch((err) => console.log(err)); */

// comments  - all comments with postId=20
/* axios
  .get("https://jsonplaceholder.typicode.com/comments")
  .then((res) => console.log(res.data.filter(({ postId }) => postId === 20)))
  .catch((err) => console.log(err)); */

// users
/* axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) =>
    console.log(res.data.find((user) => user.name === "Clementina DuBuque"))
  )
  .catch((err) => console.log(err)); */

///////////////////////////////////////create 1 post

/* axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "My first post",
      body: "There is long-long text for my first very  interesting post. Urraa!",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err)); */

/// update post 1
/* axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      title: "My amazing post",
      body: "There is short text",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err)); */

// delete post 2
axios
  .delete("https://jsonplaceholder.typicode.com/posts/2", {
    method: "DELETE",
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
