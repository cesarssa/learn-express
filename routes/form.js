const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const formData = {
    fields: [
      {
        field: {
          label: 'Name',
          type: 'text',
          name: 'name'
        }
      },
      {
        field: {
          label: 'Email',
          type: 'email',
          name: 'email'
        }
      },
      {
        field: {
          label: 'Password',
          type: 'password',
          name: 'password'
        }
      }
    ]
  };
  
  res.render('form', formData);
});

module.exports = router;
