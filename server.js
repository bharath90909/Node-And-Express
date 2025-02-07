const http = require("http");
const fs = require("fs");
// setTimeout(() => {
//   fs.writeFileSync("./test.txt", "This is sync file -2");
// }, 5000);
// setTimeout(() => {
//   fs.writeFileSync("./test.txt", "This is sync file -1");
// }, 3000);
// setTimeout(() => {
//   fs.writeFile("./test.txt", "This is async file", (err, result) => {
//     if (err) console.log("Inside error:", err);
//   });
// }, 10000);
// console.log("Here");

const server1 = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hello from home page");
      break;
    case "/about":
      res.end("Hello fromn about");
      break;
    default:
      res.end("404 error ocuured");
  }
  //   res.end("Hello from server-1");
});
// const server2 = http.createServer((req, res) => {
//   res.end("Hello from server-2");
// });
server1.listen(3000, () => console.log("Server-1 is listening"));
// server2.listen(3001, () => console.log("Server-2 is listening"));
