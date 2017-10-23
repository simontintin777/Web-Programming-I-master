const palindromeRoutes = require("./palindromes");

const constructorMethod = (app) => {
    app.use("/palindromes", palindromeRoutes);

    app.use("*", (req, res) => {
        res.redirect("/palindromes/static");
    })
};

module.exports = constructorMethod;