function loginValidation(username, password) {
  if (!username || !password) {
    alert("Username and password are required!");
    throw {
      code: 400,
      message: "Username and password are required!",
    };
  }
}

export default loginValidation;
