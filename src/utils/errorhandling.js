const errorHandlingMiddelware = (err, req, res, next) => {
console.log(err.message);

}

module.exports = errorHandlingMiddelware