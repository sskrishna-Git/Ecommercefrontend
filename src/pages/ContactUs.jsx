const ContactUs = () => {
  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
  };

  return (
      <div> 
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">Submit</button>
          </form>
      </div>
  );
};
export default ContactUs;