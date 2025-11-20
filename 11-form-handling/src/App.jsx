import FormExample from "./components/Form";
import MultiForm from "./components/MultiForm";
import ReactHookFormExample from "./components/ReactHookFormExample";
import UncontrolledForm from "./components/UncontrolledForm";
import ValidationForm from "./components/ValidationForm";

function App() {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  }
  return (
    <div>
      {/* <form onSubmit={submitHandler}>
        <input className="" type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form> */}

      {/* <FormExample /> */}
      {/* <MultiForm /> */}

      {/* <UncontrolledForm /> */}
      {/* <ValidationForm /> */}
      <ReactHookFormExample/>
    </div>
  )
}

export default App
