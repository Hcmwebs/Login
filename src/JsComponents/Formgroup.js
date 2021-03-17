const Formgroup = () => {
  const name = 'Fullname';
  return (
    <div className='formgroup'>
      <label htmlFor={name}>Fullname:</label> <br />
      <input type='text' name={name} id={name} placeholder={name} />
    </div>
  );
};

export default Formgroup;
