var push  = require('web-push');
const https = require("https");
// let vapidKeys = push.generateVAPIDKeys();

// // print the keys on console that we will required
// console.log(vapidKeys);
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let vapidKeys = {
    publicKey: 'BARbW_m3NBnTDtJLLWWZKTDfDTn3daF8_-wSLhZu999xWzQwjSLYn5hu17INsAwUSiStEYgSjb53QjcLhn4YJRg',
    privateKey: 'Q-jMfNtzXxx5-p08YMO-owaB3Bv6iLMZPma8BFg_Xeo'
  };

push.setVapidDetails('mailto:tanadbandodkar99@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {"endpoint":"https://wns2-pn1p.notify.windows.com/w/?token=BQYAAACseNnSxILPLmTMrlTAa%2f%2fHc2f5GHvt7cwgfYHCALQJ8yNe6A266UIV6Jtnzay649qMxII0E7%2f%2bqcWa4BKDrLB7Vtyq9%2fDthrhwrP5qRSAxC5Kccv5k10FZ8mHSDHb8no1EnXpBLkeHC9YAX0NKMLwPwVzATQ2sTsyHke9UUUzezLgnkxDT54G3n%2bBkLmDPNjrezHMiAH8px7vkXam3OjDX2DB8KTAE7V4ogiwwnrXwa5EqDFTSFGp3urfTaibunU3rVJJZhvO1z7CL5Wogg3K60PUqszHVSVHxA4D9Rj%2fv5DltqUonhkenKacsqjvX%2bn8%3d",
           "expirationTime":null,
           "keys":{"p256dh":"BJ0Md9JFoSCZp-JW5stzK-bzX0i33vEvo__Z4bsQZfwmg-fHREWDOA8-vS_T871kXOyBf7cV4EXf76fVf5puS4U",
                   "auth":"iDJEarTbbZoZJji_W32B4A"}}
push.sendNotification(sub, 'This is the Test Message');