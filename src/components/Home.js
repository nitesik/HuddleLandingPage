import "./styles.css";
import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";
import facebook from "./images/logo-facebook.svg";
import twitter from "./images/logo-twitter.svg";
import instagram from "./images/logo-instagram.svg";

function Home() {

  function handleSubmit() {

    console.log("Registered");
  }

  return (
    <div className="container">
      <div className="upper">
      <img src={logo} alt="logo" className="logo" height="50px" width="200px"/>
      </div>
      <div className="content">
          <div className="left"></div>
          <div className="right">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
            <form onSubmit={handleSubmit}>
              <button type="submit">Register</button>
            </form>
          </div>
      </div>
      <div className="lower">
        <div className="share">
          <img src={facebook} alt="logo"/>
          <img src={twitter} alt="logo"/>
          <img src={instagram} alt="logo"/>
        </div>
      </div>
      
      <style>{`
        .left {
          background-image: url(${illustration});
          background-repeat: no-repeat;
          background-size: contain;
        }
      `}</style>
    </div>
  )
}

export default Home;