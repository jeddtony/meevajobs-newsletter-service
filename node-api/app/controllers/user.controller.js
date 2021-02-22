const { errorResponse, successResponse } = require("../helpers/responseHelper");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email) {
    return errorResponse(res, "Email is required and must be valid!", {email: req.body.email, name: req.body.name});
  }

  if(!req.body.name){
    return errorResponse(res, "Name is required and must be valid!", {email: req.body.email, name: req.body.name});
  }

  let email = req.body.email.toLowerCase();
  let name = req.body.name;
  // Check if user exist and has an active subscription
  
  // enclose all of them in a try catch block
  let user = await User.findOne({where: {email: email}});
  if(!user){
    // User does not exist create user;
    const newUser = {
      name: name,
      email: email,
      active: true
    }
     await User.create(newUser);
    // return response here
    return successResponse(res, "Subscribed successful")
  }

  if(user.active == 1){
    return errorResponse(res, "Already subscribed");
  }

 await User.update({
    name: user.name,
    email: user.email,
    active: 1
  }, {where: {email: email}});

  return successResponse(res, "Subscription reactivated");
};

// Retrieve all Users from the database.
exports.findAll = async (req, res) => {
  
    let users = await User.findAll()
    // return res.status(200).send({message: users});
    return successResponse(res, 'Showing list of subscribers', users)
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
  if (!req.body.email) {
    return errorResponse(res, "Email is required!", {email: req.body.email, name: req.body.name});
  }

  let email = req.body.email.toLowerCase();

  let user = await User.update({
    active: 0
  }, {where: {email: email}});

  // console.log(user);
  if(Array.isArray(user) && user[0] == 0){
    return errorResponse(res, "You were never on our subscription list");
  }

  return successResponse(res, "Subscription deactivated");
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};