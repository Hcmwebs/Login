const Formgroup = () => {
  const name = 'Fullname';
  const email = 'Email';
  return (
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
  );
};

export default Formgroup;
