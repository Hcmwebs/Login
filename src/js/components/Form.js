import Formgroup from './Formgroup';
import Button from './Button';

const Form = () => {
  const email = 'email';
  return (
    <div className='formContainer'>
      <form action='' method='post'>
        <Formgroup />
<<<<<<< HEAD
        <Formgroup label={email} input={email} />
=======
>>>>>>> 012f32d58eb71d6c5663d07d629a167f08df9576
        <Button />
      </form>
    </div>
  );
};

export default Form;
