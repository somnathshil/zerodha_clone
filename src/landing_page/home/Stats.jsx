function Stats() {
  return (
    <div className="container p-5 ">
      <div className="row p-5  ">
        <div className="col-6 p-3">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p>
            That's why 13+ crore customers trust Zerodha with &#8377;3.5+ lakh
            crores worth of equity investment
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p>
            Not just an app, but a ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p>
            With initiatives like Nudge and kill Switch, we don't just faciliate
            transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className="col-6  mt-5">
          <img
            src="media/images/ecosystem.png"
            alt="stats image"
            style={{ width: "100%" }}
          />
          <div className="text-center ">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kite demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
