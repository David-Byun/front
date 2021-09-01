import "./db";
import app from "./server";
import "./models/Video";

const PORT = 4000;

const handleListening = () => console.log(`Server list on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);