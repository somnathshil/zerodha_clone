function Hero() {
  return (
    <div className="container">
      <div
        className="row "
        style={{
          marginTop: "10rem",
          marginBottom: "10rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>Charges</h1>
        <h4 style={{ fontSize: "1.4rem", color: "grey" }}>
          List of all charges and taxes
        </h4>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="image"
            style={{ width: "65%", marginLeft: "3rem" }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.9rem",
              marginBottom: "2rem",
              color: "#36454F",
            }}
          >
            Free equity delivery
          </h1>
          <p style={{ textAlign: "center", color: "#818589" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="image"
            style={{ width: "65%", marginLeft: "3rem" }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.9rem",
              marginBottom: "2rem",
              color: "#36454F",
            }}
          >
            Intraday and F&O trades
          </h1>
          <p style={{ textAlign: "center", color: "#818589" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="image"
            style={{ width: "65%", marginLeft: "3rem" }}
          />
          <h1
            style={{
              textAlign: "center",
              fontSize: "1.9rem",
              marginBottom: "2rem",
              color: "#36454F",
            }}
          >
            Free direct MF
          </h1>
          <p style={{ textAlign: "center", color: "#818589" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
