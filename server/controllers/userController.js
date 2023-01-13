const bCrypt = require("bcrypt");

const ValidateUserLogin = require("../validation/UserLogin");
const validateUserRegisterDetails = require("../validation/UserRegister");
const ValidateSearch = require("../validation/searchvalidation");

const User = require("../models/user"); //schema for user collection is written here
const JobPosting = require("../models/jobpost");
const PhotoPost = require("../models/photos");

module.exports = {
  //to add new user
  addUser: async (req, res, next) => {
    try {
      const { errors, isvalid } = validateUserRegisterDetails(req.body); //checking input via validator
      console.log(req.body);
      if (isvalid) {
        return res.status(400).json(errors);
      }
      const {
        name,
        email,
        password,
        contactNumber,
        batch_year,
        branch,
        reg_id,
        employment_type,
        current_company,
        post,
        address,
        dob,
      } = req.body;

      if (!name || !email || !dob || !address || !contactNumber || !password) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }
      console.log("here");
      const isemexist = await User.findOne({ email });
      if (isemexist) {
        return res
          .status(400)
          .json({ success: false, message: "Email already exist" });
      }
      let hashedPassword = await bCrypt.hash(password, 10);

      var parts = dob.split("-");
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
      const newUser = await new User({
        name,
        email,
        password: hashedPassword,
        contactNumber,
        batch_year,
        branch,
        reg_id,
        employment_type,
        current_company,
        post,
        address,
        dob: mydate,
      });
      await newUser.save();
      return res.status(200).json({
        success: true,
        message: "User registerd successfully",
        response: newUser,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  //for checking user login credentials
  userLogin: async (req, res, next) => {
    try {
      const { errors, isvalid } = ValidateUserLogin(req.body);
      if (isvalid) {
        return res.status(400).json({ success: false, message: errors });
      }

      const { email, password } = req.body;
      const isUser = await User.findOne({ email }).select("+password");
      if (!isUser) {
        return res
          .status(400)
          .json({ success: false, message: "User not registered!" });
      } else {
        const isCorrect = await bCrypt.compare(password, isUser.password);
        // console.log(isUser.password);
        // console.log(isCorrect);
        if (isCorrect) {
          return res.status(200).json({
            success: true,
            message: "User registerd successfully",
            response: isUser.email,
          });
        } else {
          return res
            .status(400)
            .json({ success: false, message: "Wrong Password!" });
        }
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  searchFunction: async (req, res, next) => {
    try {
      const query = {};
      if (req.query.name)
        query.name = { $regex: req.query.name, $options: "i" };
      if (req.query.batch_year && ValidateSearch(req.query.batch_year)) {
        const start = new Date(req.query.batch, 0, 1);
        const end = new Date(req.query.batch, 11, 31);
        query.batch_year = { $gte: start, $lt: end };
      }
      if (req.query.branch) query.branch = req.query.branch;

      if (!query) {
        return res
          .status(400)
          .json({ success: false, message: "Empty QUery!" });
      } else {
        const result = await User.find(query);
        return res.status(200).json({
          success: true,
          message: "data fetched succesfully",
          response: result,
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  //to get specific user details
  //vulnurable to attackers , need another approach
  getUser: async (req, res, next) => {
    try {
      const { email } = req.query;
      console.log(JSON.stringify(req.query));
      if (!email) {
        return res
          .status(400)
          .json({ success: false, message: "empty email!" });
      }
      // const { email } = req.body;
      const isUser = await User.findOne({ email });
      if (!isUser) {
        return res
          .status(400)
          .json({ success: false, message: "User not registered!" });
      } else {
        return res.status(200).json({
          success: true,
          message: "User registerd successfully",
          response: isUser,
        });
      }
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  addJobpost: async (req, res, next) => {
    try {
      const {
        title,
        company,
        location,
        job_type,
        salary,
        experience,
        description,
        skills,
        last_date_to_apply,
        company_logo,
        company_website,
        company_email,
      } = req.body;
      // validate input
      if (
        !title ||
        !company ||
        !location ||
        !job_type ||
        !experience ||
        !description ||
        !skills ||
        !last_date_to_apply
      ) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields",
        });
      }
      // check if job posting already exists
      const existingJobPost = await JobPosting.findOne({ title });
      if (existingJobPost) {
        return res.status(400).json({
          success: false,
          message: "Job posting already exists",
        });
      }
      // create new job posting
      const newJobPost = new JobPosting({
        title,
        company,
        location,
        job_type,
        salary,
        experience,
        description,
        skills,
        last_date_to_apply,
        company_logo,
        company_website,
        company_email,
      });
      await newJobPost.save();
      return res.status(200).json({
        success: true,
        message: "Job posting added successfully",
        jobPost: newJobPost,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getJobpost: async (req, res, next) => {
    try {
      const query = {};
      if (req.query.title)
        query.title = { $regex: req.query.title, $options: "i" };

      if (req.query.description)
        query.description = { $regex: req.query.description, $options: "i" };

      if (req.query.skills)
        query.skills = { $regex: req.query.skills, $options: "i" };

      if (req.query.company)
        query.company = { $regex: req.query.company, $options: "i" };

      const jobpostings = await JobPosting.find(query).sort({
        posted_date: -1,
      });
      return res.status(200).json({
        success: true,
        message: "Job postings retrieved successfully",
        jobpostings: jobpostings,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  addPhotopost: async (req, res, next) => {
    try {
      const { caption, photo, posted_by ,batch,branch,event_desc} = req.body;
      if (!photo || !posted_by || !batch ||  !branch || !event_desc) {
        return res
          .status(400)
          .json({ success: false, message: "Missing required fields" });
      }

      console.log(req.body);
      const isUser = await User.findOne({email: posted_by });
      console.log(isUser);
      const newPhotopost = new PhotoPost({

        caption,
        photo,
        posted_by_name:isUser.name,
        posted_by_batch:isUser.batch_year,
        posted_by_branch:isUser.branch,
        batch,
        branch,
        event_desc,
        posted_by,
      });

      newPhotopost
        .save()
        .then((photopost) => {
          res
            .status(200)
            .json({
              success: true,
              message: "Photo post added successfully",
              photopost,
            });
        })
        .catch((error) => {
          res.status(400).json({ success: false, message: error.message });
        });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getPhotopost: async (req, res, next) => {
    try {
      const query = {};
      if (req.query.caption)
        query.title = { $regex: req.query.caption, $options: "i" };

      if (req.query.posted_by_name)
        query.posted_by = { $regex: req.query.posted_by, $options: "i" };

      if (req.query.batch)
        query.skills = { $regex: req.query.skills, $options: "i" };

      if (req.query.branch)
        query.company = { $regex: req.query.company, $options: "i" };

      const jobpostings = await JobPosting.find(query).sort({
        posted_date: -1,
      });
      return res.status(200).json({
        success: true,
        message: "Job postings retrieved successfully",
        jobpostings: jobpostings,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },


};
