function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div
        className="row  "
        style={{ marginTop: "4rem", paddingTop: "3rem" }}
      >
        <div className="col-6">
          <img
            src={imageURL}
            alt="image"
            style={{ width: "100%", marginLeft: "3rem" }}
          />
        </div>
        <div className="col-6 mt-5 pt-3">
          <h1 style={{ width: "60%", marginLeft: "12rem", fontSize: "2rem" }}>
            {productName}
          </h1>
          <p
            style={{
              width: "60%",
              marginLeft: "12rem",
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            {productDescription}
          </p>
          <a href={tryDemo} style={{ marginLeft: "12rem" }}>
            Try demo <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <a href={learnMore} style={{ marginLeft: "7rem" }}>
            Learn more <i class="fa-solid fa-arrow-right-long"></i>
          </a>
          <div className="mt-4">
            <a href={googlePlay} style={{ marginLeft: "12rem" }}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="googleLink img"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "4rem" }}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="appStoreLink img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
