// Connecting with Cloudinary
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "db4kkn5ab",
    api_key: "392298847949874",
    api_secret: "0n3DGB6vOrjd1Rv2nDWxKq_u1yA",
});

const react = "./img1.png";
const video = "./vid1.mp4";
// function to upload image , and return image url

const uploadImage = async (react) => {
  try {
    const results = await cloudinary.uploader.upload(react);
    // console.log("Image Obj: ", results);
    // console.log("Image URL: ", results.secure_url);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const uploadVideo = async (video) => {
  try {
    const results = await cloudinary.uploader.upload(video, {
      resource_type: "video",
    });
    console.log("Video: ", results.secure_url);
    return results.secure_url;
  } catch (error) {
    console.error(error);
    return null;
  }
};
// uploadImage(react);
 uploadVideo(video);