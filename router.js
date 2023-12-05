const express = require("express");
const router = express.Router();                   // expressni ichidan router olib chiqilyabdi
const memberController = require("./controllers/memberController");
const productController = require("./controllers/productController");
const restaurantController = require("./controllers/restaurantController");
const {getChosenMember} = require("./controllers/memberController");

/**********************************
 *         REST  API             *
 **********************************/
// react uchun //  zamonaviy  usul


//  Member related routers
router.post("/signup", memberController.signup);  // async function ning callback methodan foydalanyabmiz
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);
router.get(
    "/member/:id", // biz xoxlagan member_id ni param orqali url orqali obkelyabmiz
    memberController.retrieveAuthMember,
    memberController.getChosenMember  // memberController dan getChosenMember metodini yasayabmiz
);


// Product related routers

router.post(
    "/products",
    memberController.retrieveAuthMember,
    productController.getAllProducts);

router.get(
    "/products/:id",
    memberController.retrieveAuthMember,
    productController.getChosenProduct
);


// restaurant related routers

router.get("/restaurants",
    memberController.retrieveAuthMember,
    restaurantController.getRestaurants
);


module.exports = router;


// boshqa routerlar
// router.get("/menu",  (req, res) =>{
//     res.send ("menu page");
// });
//
//
// router.get("/community",  (req, res) => {
//     res.send ("community page");
// });


// export router


