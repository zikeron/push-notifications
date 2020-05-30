const express = require('express');
const path = require('path');
const config = require('./src/config/index');
const webpush = require('./src/lib/Notifications')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join('src', 'public')));

app.post('/subscribe', async (req, res) => {
  console.log(req.body)
  res.status(200).json();
  const payload = JSON.stringify({
    title: 'Kaizen Notification',
    message: 'Welcome',
  });

  try {
    await webpush.sendNotification(req.body, payload);
  } catch (error) {
    console.log(error);
  }
});

const server = app.listen(config.server.port, () => {
  console.log(`Server is listening at ${config.server.host}:${server.address().port}`);
});
