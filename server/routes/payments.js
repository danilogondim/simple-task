// const express = require('express');
// const router = express.Router();


// module.exports = ({
//   getTaskById,
//   updateTask
// }) => {
//   router.get("/", (req, res) => {
//     res.send("ITS WORKING");
//   });

//   router.post("/:id", (req, res) => {
//     const {
//       product,
//       token
//     } = req.body;

//     const { id } = req.params;
//     const idempontencyKey = uuid();

//     console.log("PRODUCT", product);
//     console.log("PRICE ", product.price);

//     return stripe.customers
//       .create({
//         email: token.email,
//         source: token.id
//       })
//       .then(customer => {
//         stripe.charges.create(
//           {
//             amount: product.price * 100,
//             currency: "usd",
//             customer: customer.id,
//             receipt_email: token.email,
//             description: `purchase of ${product.name}`,
//             shipping: {
//               name: token.card.name,
//               address: {
//               country: token.card.address_country
//               }
//             }
//           },
//           { idempontencyKey }
//         );
//       })
//       .then(result => res.status(200).json(result))
//       .then(getTaskById(id))
//       .then(() => {
//           return updateTask({
//             id,
//             payment_received
//           })
//         }
//       )
//       .then(updatedTask => res.json(updatedTask))
//       .catch(err => res.json({
//         error: err.message
//       }));
//   });

//   return router
// }