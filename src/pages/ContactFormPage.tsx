import React from "react";

const ContactFormPage = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Surname:
        <input type="text" name="surname" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactFormPage;
