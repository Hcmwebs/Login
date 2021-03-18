const Formgroup = (label, input) => {
  const name = 'Fullname';
  const email = 'Email';
  return (
<<<<<<< HEAD
    <div className='formgroup'>
      <label htmlFor={name}>{name}:</label> <br />
      <input type='text' name={name} id={name} placeholder={name} /> <br />
    </div>
=======
    <>
      <div className='formgroup'>
        <label htmlFor={name}>{name}</label> <br />
        <input type='text' name={name} id={name} placeholder={name} /> <br />
      </div>

      <div className='formgroup'>
        <label htmlFor={email}>{email}</label> <br />
        <input type='text' name={email} id={email} placeholder={email} /> <br />
      </div>
    </>
>>>>>>> 012f32d58eb71d6c5663d07d629a167f08df9576
  );
};

export default Formgroup;
