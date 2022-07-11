extractErrors = function (error) {
  const res = {};
  for (let item of error.details) {
    res[item.path[0]] = item.message;
  }
  return res;
};

module.exports = extractErrors;
