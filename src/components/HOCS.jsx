export default function HOCS() {
  return (
    <div>
      <h1>HOCS</h1>
      {/* This will log the props to the console whenever the button renders. */}
      <ButtonWithLogger label="Click me" />
    </div>
  );
}

// A simple HOC that adds a "logger" prop to a component.
const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log("Component is rendering with props:", props);
    return <WrappedComponent {...props} />;
  };
};

// A basic component to be enhanced.
const MyButton = ({ label }) => {
  return <button>{label}</button>;
};

// Use the HOC to create an enhanced component.
const ButtonWithLogger = withLogger(MyButton);
