const Profile = require("../models/Profile");
const User = require("../models/User");
const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");

exports.getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.user.id });
  if (!profile) {
    return next(new ErrorResponse("Profile not found", 404));
  }
  res.status(200).json({
    success: true,
    data: profile,
  });
});

exports.updateProfile = asyncHandler(async (req, res, next) => {
  
  const { firstname, lastname } = req.body;  
  const user = req.user.id;
  let profile = await Profile.findOne({ user: req.user.id });  
  if (!profile) {  
    profile = await Profile.create({
      firstname,
      lastname,
      user,
    });
  } else {  
    profile = await Profile.findOneAndUpdate(
      { user },
      {
        firstname,
        lastname,
        user,
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  res.status(200).json({
    success: true,
    data: profile,
  });
});

/*exports.createProfile = asyncHandler(async (req, res, next) => {
  const { firstname, lastname } = req.body;
  const user = req.user.id;
  try {
    const profile = await Profile.create({
      firstname,
      lastname,
      user,
    });
    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    return next(new ErrorResponse(error.message, 400));
  }
});*/
