const misrcon = require('node-misrcon');
const CronJob = require('cron').CronJob;

const server = new misrcon.NodeMisrcon({ ip: '', port: '', password: '' });

console.log('Script Starting!');

// Runs every 5 minutes
const job = new CronJob(
  '* * * * 5 *',
  () => {
    console.log('Running Cron Job');
    const status = server.getStatus();
    // Do something with the results
    status.playersArray.map(player => {
      // Store player.ip somehow
      console.log(player.ip);
    });
  },
  null,
  true,
  'America/Los_Angeles'
);
