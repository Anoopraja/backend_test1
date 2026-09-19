import app from './app.js';
import dotenv from 'dotenv'
import mongoDB from './db/db.js'

dotenv.config()

mongoDB()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}) 