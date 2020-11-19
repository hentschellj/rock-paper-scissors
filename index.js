const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`);
})