const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const app = express();
const userRouter = require("./routers/userRouter");
const chatRouter = require("./routers/chatRouter");
const messageRouter = require("./routers/messageRouter");
const PORT = process.env.PORT;
const { notFound, errorHandler } = require("./middleware/errorHandler");
connectDB();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
// token:
// thoai phuong
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDZjNzgwZDkwMjVkY2RiMTJhNDAxNSIsImlhdCI6MTY2NTU4Mjk3NywiZXhwIjoxNjY4MTc0OTc3fQ.ZhYjZ5wC0LyUHwbbezNN0lkYuXu6s5I4Y-oRvrJZeOM

app.use(notFound);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
