import express from 'express';

const PORT = process.env.PORT || 3001;
console.log(process.env.MY_SECRET);

const app = express();

app.get('/api', (req, res) => {
  res.json({message: 'Hello from server!'});
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
