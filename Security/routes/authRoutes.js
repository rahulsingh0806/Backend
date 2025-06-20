<<<<<<< HEAD
const express = express();
const router = express.Router();

const {signUp, login} = require("../controllers/Auth")

router.post("/login",login);
router.post("/signup", signUp);

=======
const express = express();
const router = express.Router();

const {signUp, login} = require("../controllers/Auth")

router.post("/login",login);
router.post("/signup", signUp);

>>>>>>> 31e40b3 (Initial commit)
module.exports = router;