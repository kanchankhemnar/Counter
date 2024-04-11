import "./Container.css"
const Container = ({ children }) => {
  return (
    <>
      <div className="card border border-primary myCard m-5 card-color" style={{ width: "max-content " }}>
        <div className="card-body m-2 p-4 ">{children}</div>
      </div>
    </>
  );
};
export default Container;
