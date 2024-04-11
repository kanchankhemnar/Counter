import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import "./App.css";
const App = () => {
  return (
    <>
    <center>
      <div className="py-5">
        <Container>
        <Header />
        <div className="row-lg-4  mx-auto">
          <DisplayCounter />
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center m-2">
          <Controls/>
          </div>
        </div>
        </Container>
      </div>
      </center>
    </>
  );
};
export default App;
