// nodeJS 파일 -> node NAME.js 실행
// cor - 서버간 요청이 잘됨
// express.json - 넘겨받을 때, json형식
const express = require("express");
// const path = require("path");
const cors = require("cors");
const app = express();
const port = 3001;
const Todo = require("./todo");

// mongoDB 연결
const mongoose = require("mongoose");
const mongoURI = `mongodb+srv://todo:fldprxm@cluster0.ghymmzs.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "todo",
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Todo.find({})
    .then((todos) => {
      res.send({ todoList: todos });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/test", (req, res) => {
  console.log(req.body);
});

app.post("/add", (req, res) => {
  const todo = new Todo({
    _id: req.body.id,
    todo: req.body.todo,
    date: req.body.date,
    type: req.body.type,
    star: req.body.star,
  });
  todo
    .save("todo")
    .then((result) => {
      console.log("입력 성공");
      console.log(result);
    })
    .catch((err) => {
      console.log("입력 실패");
      console.log(err);
    });
});

// app.post("/checked", (req, res) => {
//   Todo.find(req.body)
//     .then((checkced) => {
//       res.send({ select: checkced });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(port, () => {
  console.log(port, "번으로 연결");
});
