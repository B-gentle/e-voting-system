const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "1190896",
    key: "889b5c62d993f657badb",
    secret: "d7af642774c23758bb28",
    cluster: "mt1",
    useTLS: true
  });

router.get('/', (req, res) => {
res.send('votes');
});

router.post('/', (req, res)=>{
    pusher.trigger("Alumi-Election", "Alumni-votes", {
        points: 1,
        person: req.body.person
      });  

      return res.json({
          success: true,
          message: 'Thank you for voting'
      });
})
module.exports = router;