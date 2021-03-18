import Formgroup from './Formgroup';
import Button from './Button';

const Form = () => {
  const email = 'email';
  return (
    <div className='formContainer'>
      <form action='' method='post'>
        <Formgroup />
        <Formgroup label={email} input={email} />
        <Button />
      </form>
    </div>
  );
};

export default Form;
