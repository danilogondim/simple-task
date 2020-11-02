const express       = require('express');
const router        = express.Router();
const jwt           = require('jsonwebtoken');
const stripe        = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
const uuid          = require("uuid");


module.exports = ({
  getTasks,
  getTaskById,
  getTaskForPayment,
  addTask,
  updateTask
}) => {
  /* GET Tasks listing. */
  router.get('/', (req, res) => {
    getTasks()
      .then((tasks) => res.json(tasks))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  /* GET a Task by ID */
  router.get('/:id', (req, res) => {
    const { id } = req.params;
    getTaskById(id)
      .then((task) => res.json(task))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  /* create a new task */
  router.post('/new', (req, res) => {
    //Getting ID from the JWT Token
    const decoded = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
    const user_id = decoded.id
    addTask({...req.body, user_id})
    .then((task) => res.json(task))
    .catch((err) => res.json({
      error: err.message
    }));
  });

  /* GET a Task for Payment by ID */
  router.get('/:id/payment', (req, res) => {
    const { id } = req.params;
    getTaskForPayment(id)
      .then((task) => res.json(task))
      .catch((err) => res.json({
        error: err.message
      }));

  });

  // Update task after completion
  router.post("/:id", (req, res) => {
    const {
      started_at,
      completed_at
    } = req.body;

    const { id } = req.params;

    getTaskById(id)
      .then(() => {
          return updateTask({
            id,
            started_at,
            completed_at
          })
        }
      )
      .then(updatedTask => res.json(updatedTask))
      .catch(err => res.json({
        error: err.message
      }));
  });

  router.post("/:id/payment", (req, res) => {
    const {
      product,
      token
    } = req.body;

    const { id } = req.params;
    const idempontencyKey = uuid();

    console.log("PRODUCT", product);
    console.log("PRICE ", product.price);

    return stripe.customers
      .create({
        email: token.email,
        source: token.id
      })
      .then(customer => {
        stripe.charges.create(
          {
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
              name: token.card.name,
              address: {
              country: token.card.address_country
              }
            }
          },
          { idempontencyKey }
        );
      })
      .then(result => res.status(200).json(result))
      .then(getTaskById(id))
      .then(() => {
          return updateTask({
            id,
            payment_received
          })
        }
      )
      .then(updatedTask => res.json(updatedTask))
      .catch(err => res.json({
        error: err.message
      }));
  });

  return router;
};