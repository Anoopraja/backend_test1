import express from 'express';
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/test", testRoute);
app.use("/api/user", userRoute)



// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


export default app;