import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB(); // 🔥 connect database

const app = express();

app.use(cors());
app.use(express.json());

// routes
import healthRoutes from "./routes/health.routes.js";
import orderRoutes from "./routes/order.routes.js";

app.use("/api", healthRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
