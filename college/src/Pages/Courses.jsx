function Register() {
    return (
      <div className="container">
        <h2>Register</h2>
        <form>
          <label>Full Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  
  export default Register;
  