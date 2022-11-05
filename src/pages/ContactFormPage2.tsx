import React, { ChangeEvent, FormEvent, useState } from "react";

const ContactFormPage2 = () => {
  const initialFormState = {
    firstName: "",
    surname: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.name;
    const newState = {
      ...formState,
      [inputName]: event.currentTarget.value,
    };
    setFormState(newState);
  };

  const fullName = `${formState.firstName} ${formState.surname}`;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + fullName);
    e.preventDefault();
  };

  return (
    <>
      <h4>Contact from with object state:</h4>
      Your name is: {fullName}
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="surname"
          value={formState.surname}
          onChange={handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ContactFormPage2;
