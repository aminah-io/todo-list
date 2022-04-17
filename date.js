
exports.getDate = function() {
  let today = new Date;
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  
  return today.toLocaleDateString('en-US', options);
}

exports.getYear = function() {
  let today = new Date;
  let options = {
    year: 'numeric'
  }

  return today.toLocaleDateString('en-US', options);
}