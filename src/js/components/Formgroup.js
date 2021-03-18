const Formgroup = (label, input) => {
  const name = 'Fullname';
  return (
    <div className='formgroup'>
      <label htmlFor={name}>{name}:</label> <br />
      <input type='text' name={name} id={name} placeholder={name} /> <br />
    </div>
  );
};

export default Formgroup;
