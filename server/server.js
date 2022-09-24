const express = require('express');
const Mongodb = require('./mongodb');
const cors = require('cors');

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

async function main() {
  let mongodb = new Mongodb('login_demo');
  await mongodb.start();

  app.post('/login', async function (req, res) {
    let result = await mongodb.find('members', req.body);
    if (result.length > 0) {
      res.send({ code: '1', msg: `${req.body.account} 登入成功` });
    } else {
      res.send({ code: '0', msg: `帳號密碼錯誤` });
    }
  });

  app.post('/signup', async function (req, res) {
    let result = await mongodb.find('members', { account: req.body.account });
    if (result.length > 0) {
      res.send({ code: '0', msg: `${req.body.account} 此帳號已被註冊` });
    } else {
      await mongodb.insert('members', req.body);
      res.send({ code: '1', msg: `註冊成功` });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}
main();
