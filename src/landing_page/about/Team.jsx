function Team() {
  return (
    <div className="container">
      <div className="row  mb-5">
        <h1 className="fs-2 text-center  ">People</h1>
      </div>
      <div className="row p-5 mt-5 mb-5">
        <div className="col-6 ">
          <img
            src="media/images/SomImgForGit.jfif"
            alt="somnath image"
            style={{
              width: "65%",
              height: "20rem",
              borderRadius: "100%",
              marginLeft: "8rem",
            }}
          />
          <h4
            style={{
              textAlign: "center",
              paddingLeft: "5rem",
              marginTop: "1rem",
            }}
          >
            Somnath Shil
          </h4>
          <h6
            style={{
              textAlign: "center",
              paddingLeft: "5rem",
              marginTop: "1rem",
            }}
          >
            Developer of This Clone
          </h6>
        </div>

        <div className="col-6 p-5 ">
          <p>
            Somnath bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
