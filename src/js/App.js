import Header from './components/Header';
import Form from './components/Form';

function App() {
  // submit the form

  const addForm = (formData) => {
    console.log(formData)

  }
  return (
    <div className='container'>
      <Header />
      <Form onAdd ={addForm}/>
    </div>
  );
}

export default App;
