import express from "express";
import config from "config";

const app = express()

//json middleware
app.use(express.json());

//app port
const port = config.get<number>('port');

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
})
