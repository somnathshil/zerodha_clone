function Universe() {
  return (
    <div className="container">
      <div className="row mt-5 pt-5">
        <h3 style={{marginBottom: "7rem", fontSize: "1.3rem", textAlign: "center", color: "#818589"}}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </h3>
        <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#36454F" }}>
          The Zerodha Universe
        </h1>
        <p
          className="text-muted"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="image"
            style={{ width: "60%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management veture that is creating simple and transparent
            index fund to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="img"
            style={{ width: "60%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Option trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/goldenpiLogo.png"
            alt="img"
            style={{ width: "60%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Investment research platform that offers detailed insights on
            stocks, sector, supply chains, and more
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="img"
            style={{ width: "60%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/smallcaseLogo.png"
            alt="img"
            style={{ width: "60%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="img"
            style={{ width: "45%", marginLeft: "3rem" }}
          />
          <p className="text-small text-muted mt-3">
            Personalized advice on the life and health insurance. No spam amd no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Universe;
