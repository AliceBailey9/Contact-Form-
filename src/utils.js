function validateEmail(email) {
  if (/\S+@\S+\.\S+/.test(email)) {
    return "valid";
  } else {
    return "invalid";
  }
}

function validateNameContent(name, content) {
  if ((name.length === 0 || !/(\w.+\s).+/.test(name)) && content.length < 20) {
    return "You need to fill out your full name and your enquiry must contain at least 20 characters.";
  } else if (name.length === 0) {
    return "You need to fill out your full name.";
  } else if (!/(\w.+\s).+/.test(name)) {
    return "You need to fill out your full name.";
  } else if (content.length < 20) {
    return "Your enquiry must contain at least 20 characters.";
  } else {
    return "valid";
  }
}
module.exports = { validateEmail, validateNameContent };
