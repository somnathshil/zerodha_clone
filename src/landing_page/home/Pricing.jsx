function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="mb-5" style={{ textDecoration: "none" }} href="">
            See pricing <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row">
            <div className="col-6 p-5" style={{ border: "2px solid grey" }}>
              <h1 className="text-center">&#8377; 0</h1>
              <p className="text-center">
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-6 p-5" style={{ border: "2px solid grey" }}>
              <h1 className="text-center">&#8377; 20</h1>
              <p className="text-center">Intraday and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
