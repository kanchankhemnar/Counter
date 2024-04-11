import { useSelector,useDispatch } from "react-redux";
import { privacyActions } from "../store/privacy";


const DisplayCounter = () => {
  const {privacy} = useSelector((store) => store.privacy);
  const dispatch=useDispatch();
  const handlePrivacyToggle = () => {

    dispatch(privacyActions.toggle());
  };
  const {counterVal} = useSelector((store) => store.counter);
  

  return (
    <>
    {privacy ?  <p className="lead mb-4">Counter value hidden </p>:
      <p className="lead mb-4">Current value : {counterVal} </p>}
      <button
        type="button"
        className="btn btn-warning btn-lg px-2 mb-4"
        onClick={handlePrivacyToggle}
      >
        privacy toggle
      </button>

    </>
  );
};
export default DisplayCounter;
