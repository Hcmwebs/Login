import { useState } from 'react';

const Form = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitBtn = 'submitBtn';

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please add your fullname');
      return;
    }
    if (!email) {
      alert('Please add your email');
      return;
    }

    onAdd({ name, email });
    setName('');
    setEmail('');
  };
  return (
    <form action='' method='post' className='form' onSubmit={onSubmit}>
      <div className='formgroup'>
        <label>Fullname</label>
        <input
          type='text'
          id='fname'
          placeholder=' Your Fullname'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
      </div>

      <div className='formgroup'>
        <label>Email</label>
        <input
          type='text'
          id='email'
          placeholder='Your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
      </div>

      <input type='submit' name={submitBtn} id={submitBtn} value='Send' />
    </form>
  );
};

export default Form;
