import icon from "/media/images/magnifineGlass.png";
function Hero() {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#1F51FF",
        color: "white",
        height: "30rem",
        paddingTop: "4rem",
        opacity: ".8",
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "7rem",
          justifyContent: "space-between",
          marginRight: "8rem",
          marginBottom: "3rem",
        }}
      >
        <h3 style={{ fontSize: "1.4rem" }}>Support Portal</h3>
        <a href="" style={{ color: "white" }}>
          {" "}
          Track tickets
        </a>
      </div>
      <div className="row " style={{ marginLeft: "6rem", marginRight: "5rem" }}>
        <div className="col-7">
          <h3 style={{ fontSize: "1.4rem", marginBottom: "3rem" }}>
            Search for an answer or browse help topics to create a ticket
          </h3>

          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ...  "
            style={{
              width: "35rem",
              height: "4rem",
              border: "none",
              padding: "1rem",
              backgroundImage: `url(${icon})`,
              backgroundSize: "2rem",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "32rem center",
            }}
          />

          {/* <i class="fa-solid fa-magnifying-glass"></i> */}

          <p style={{ marginTop: "1rem" }}>
            <a href="" style={{ color: "white", textUnderlineOffset: "10px" }}>
              Track account opening
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a href="" style={{ color: "white", textUnderlineOffset: "10px" }}>
              Track segment activation
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a href="" style={{ color: "white", textUnderlineOffset: "10px" }}>
              {" "}
              Intraday margins
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
            <a href="" style={{ color: "white", textUnderlineOffset: "10px" }}>
              Kite user manual
            </a>
          </p>
        </div>
        <div className="col-5" style={{}}>
          <h4 style={{ marginTop: "2rem" }}>Featured</h4>
          <ul style={{ lineHeight: "2.5" }}>
            <li>
              <a href="" style={{ color: "white", fontSize: "1.1rem" }}>
                1. Surveillance measure on scrips - December 2024
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                2. Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
