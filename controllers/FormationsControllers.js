const models = require("../models");

const browse = (req, res) => {
  models.Formations.findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


const read = (req, res) => {
    console.log("ok");
    console.log(req.params.id)
    models.Formations.find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

module.exports = {
    browse,
    read,
  };