const express = require("express");
const path = require("path");

const app = express();

const posts = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.post("/compose", (req, res) => {
  const { title, body, description } = req.body;

  const slug = title.split(" ").join("-").toLowerCase();

  posts.push({ id: Date.now(), title, body, slug, description });
  res.redirect("/");
});

app.get("/:slug", (req, res) => {
  const slug = req.params.slug;

  const post = posts.filter((post) => post.slug === slug)[0];

  res.render("post.ejs", { post: post });
});

app.listen(8000, () => {
  console.log("Listening on 3000");
});
