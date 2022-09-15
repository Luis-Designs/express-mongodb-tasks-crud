import app from "./app.js";
import { PORT } from "./config.js";
import "./database.js";

app.listen(PORT)

console.log(`Listing at http://localhost:${PORT}`);