function RightSection({
  imageURL,
  productName,
  productDescription,
  linkAction,
  linkName
}) {
  return (
    <div className="container">
      <div
        className="row  "
        style={{ marginTop: "4rem", paddingTop: "3rem"}}
      >
        <div className="col-6 mt-5 pt-3" >
          <h1 style={{ width: "60%", marginLeft: "7rem", fontSize: "2rem" }}>
            {productName}
          </h1>
          <p
            style={{
              width: "60%",
              marginLeft: "7rem",
              marginTop: "1.5rem",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            {productDescription}
          </p>
          <a href={linkAction} style={{ marginLeft: "7rem",}}>
            {linkName}<i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img
            src={imageURL}
            alt="image"
            style={{ width: "100%",}}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
