const admin = require("firebase-admin");
const serviceAccount = require("./noti-king-firebase-adminsdk-fbsvc-2702103ced.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const registrationToken = 'f2_qen3B5QN1thz-MRQ78U:APA91bEWePDRfuiGO8u6VvUYOFUYGAH9uyj4BUUU1CmPEsmBwrif5vqbaNZKuwwDUemGe5zaUAp-EmiqCZhUOBOnIDjO3IMjxzcT5OqcEeRd3j_FHS9UPVo'; // 🔑 توکن کاربر رو همینجا بذار

const message = {
  notification: {
    title: 'HELLO!',
    body: 'Node.js 😎'
  },
  token: registrationToken
};

admin.messaging().send(message)
  .then((response) => {
    console.log('😍😍🤩🤩', response);
  })
  .catch((error) => {
    console.error('😥😥', error);
  });
