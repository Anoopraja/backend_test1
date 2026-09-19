import express from 'express';
import testRoute from "./routes/test.route.js";
const app = express();

app.use(express.json());
app.use("/api/test", testRoute);



app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;