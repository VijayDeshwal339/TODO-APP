const auth = {
    isAuthenticated: false,
    login(callback) {
      this.isAuthenticated = true;
      callback();
    },
    logout(callback) {
      this.isAuthenticated = false;
      callback();
    },
  };
  
  export default auth;
  