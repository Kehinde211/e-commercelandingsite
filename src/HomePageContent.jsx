import { Link } from "react-router-dom";


const HomePageContent = () => {

  function handleLogin() {
    console.log("This is the next page");
  }

  function getEnvira() {
    console.log("This is Envira");
  }


  return (
    <div
      style={{
        backgroundColor: "#fffbf7",
        width: "100vw",        // 👈 Force full width
        margin: 0,
        padding: 5,
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >


        <img src="public/images/enviralogo.png" alt="logo" style={{ height: "50px"}}/>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/features" style={{ textDecoration: "none" }}>
            Features
          </Link>
          <Link to="/demos" style={{ textDecoration: "none" }}>
            Demos
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            Pricing
          </Link>
          <Link to="/resources" style={{ textDecoration: "none" }}>
            Resources
          </Link>
          <Link to="/testimonials" style={{ textDecoration: "none" }}>
            Testimonials
          </Link>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleLogin}
            style={{
              backgroundColor: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Log In
          </button>
          <button
            onClick={getEnvira}
            style={{
              backgroundColor: "#00ac53",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            Get Envira
          </button>
        </div>
      </div>

      <h2
  style={{
    marginTop: "10px",
    textAlign: "center",
    color: "black",
    fontSize: "2rem",
    fontWeight: "bold"
  }}
>
  Envira Gallery Demo
</h2>

      <p
        style={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "800px",
        }}
      >
        Below are some of the most requested demos by our users. Keep in mind
        that Envira offers tons of other{" "}
        <span style={{ color: "green" }}>features</span> and functionality. The
        functionalities in these demos can be used in any combination. If you
        don't see a feature in the demos below, don't worry. Chances are that we
        have that feature, but just didn't create a demo for it.{" "}
        <Link
          to="/testimonials"
          style={{
            listStyleType: "none",
            textDecoration: "none",
            color: "green",
          }}
        >
          Contact us
        </Link>{" "}
        with any questions or demo requests or{" "}
        <Link
          to="/pricing"
          style={{ textDecoration: "none", color: "green" }}
        >
          click here to get started with Envira!
        </Link>
      </p>
    </div>
  );
};

export default HomePageContent;
