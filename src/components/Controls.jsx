import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";


const Controls = () => {
  const dispatch = useDispatch();
  const input = useRef();

  const handleIncrement = () => {
    dispatch(counterActions
      .increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddition = () => {
    dispatch(counterActions.add({
      input:input.current.value,
    }));

    input.current.value = "";
  };
  const handleSubstraction = () => {
    dispatch(counterActions.substract({
      input:input.current.value,

    }));

    input.current.value = "";
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-lg px-4"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg px-4"
        onClick={handleDecrement}
      >
        -1
      </button>

      <input type="text" placeholder="  Enter number" ref={input} />
      <button
        type="button"
        className="btn btn-info btn-lg px-4 "
        onClick={handleAddition}
      >
        add
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg px-4 "
        onClick={handleSubstraction}
      >
        sub
      </button>
    </>
  );
};
export default Controls;
