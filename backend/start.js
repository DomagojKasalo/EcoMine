const { exec } = require('child_process');

const mongoProcess = exec('mongod', (err) => {
  if (err) {
    console.error('Failed to start MongoDB:', err.message);
  }
});

const backendProcess = exec('npm run dev', (err) => {
  if (err) {
    console.error('Failed to start backend:', err.message);
  }
});

mongoProcess.stdout.on('data', (data) => console.log(`MongoDB: ${data}`));
backendProcess.stdout.on('data', (data) => console.log(`Backend: ${data}`));
