import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    setSubmittedName(fullName);
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedName && (
        <div>
          <h2>Submitted Name:</h2>
          <p>{submittedName}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
