const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const designRoutes = require('./routes/design');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://kanchumurthybhargav:5B6XkbiEIMVlDqo9@wysiwyg.xudsmvt.mongodb.net/?retryWrites=true&w=majority&appName=WYSIWYG', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/user', userRoutes);
app.use('/api/design', designRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
