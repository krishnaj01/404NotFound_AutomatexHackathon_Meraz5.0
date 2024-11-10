const checkUser = (req,res,next) => {
    const user = res.localStorage.getItem("user");
    const id = user.sub;
    if(!id){
        res
        .status(401)
        .send({ error: "Please authenticate user using valid token."});
    }
};

// module.exports = checkUser;
export default checkUser;