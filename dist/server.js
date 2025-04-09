"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const product_routes_1 = __importDefault(require("./routes/product.routes"));
// Create server
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/:id', product_routes_1.default);
app.use('/price', product_routes_1.default);
app.use('/', product_routes_1.default);
// Fallback
app.use((req, res) => {
    res.status(404).send('Invalid route!');
});
// Start server
const PORT = process.env.PORT || 5433;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
