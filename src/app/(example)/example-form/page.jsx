"use client"
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return {inputTes : formData.inputTes };
}

function StatefulForm({}) {
  const [state, formAction] = useFormState(increment,0);
  return (
    <form formAction={formAction} method="post" >
      
      <input name="inputTes" ></input>
      <button >Increment</button>
      {state?.inputTes}
      {/* {state.next} */}
    </form>
  )
}
export default StatefulForm