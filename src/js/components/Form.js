import Formgroup from './Formgroup';
import Button from './Button';


const Form = () => {
  return (
    <div className='formContainer'>
      <form action='' method='post'>
        <Formgroup />
        <Formgroup />
        <Button />
      </form>
    </div>
  );
};

export default Form;
