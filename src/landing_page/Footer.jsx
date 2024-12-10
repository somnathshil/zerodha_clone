function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#FFFFE3" }}>
      <div className="container  mt-5">
        <div className="row mt-5">
          <div className="col-3">
            <img
              src="media/images/logo.svg"
              alt="logo image"
              style={{ width: "50%" }}
            />
            <p>
              {" "}
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.{" "}
            </p>
            <ul style={{ listStyleType: "none",padding: "0", margin: "0", display: "flex"}}>
              <li style={{marginLeft: "0"}}>
                <a href="">
                  <i class="fa-brands fa-square-x-twitter mr-3 fs-5 my-2" style={{color: "#424242", marginRight: "15px"}} ></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-square-facebook mx-3 fs-5 my-2" style={{color: "#424242"}}></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-instagram mx-3 fs-5 my-2" style={{color: "#424242"}}></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-linkedin-in mx-3 fs-5 my-2" style={{color: "#424242"}}></i>
                </a>
              </li>
            </ul>
            <hr/>
            <ul style={{ listStyleType: "none", padding: "0", margin: "0", display: "flex" }}>
              <li >
                <a href="">
                  <i class="fa-brands fa-youtube  fs-5 my-2" style={{color: "#424242", marginRight: "10px"}}></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-whatsapp mx-3 fs-5 my-2" style={{color: "#424242"}}></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-telegram mx-3 fs-5 my-2" style={{color: "#424242"}}></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <p>Company</p>
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              About
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Products
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Pricing
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Refferal programme
            </a>
            <br />
            <br />
            <a
              href=""
              style={{
                textDecoration: "none",
                paddingTop: "rem",
                color: "#424242",
              }}
            >
              Creers
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Zerodha.tech
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Press & media
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Zerodha cares(CSR)
            </a>
          </div>
          <div className="col-3">
            <p>Support</p>
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Contact
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Support portal
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Z-Connect blog
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              List of charges
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Downloads & resources
            </a>
          </div>
          <div className="col-2">
            <p>Account</p>
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Open an account
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              Fund transfer
            </a>
            <br />
            <br />
            <a href="" style={{ textDecoration: "none", color: "#424242" }}>
              60 day challenge
            </a>
            <br />
            <br />
          </div>
        </div>
        <div className="mt-5  text muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX-SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            - SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="text-center ">
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}> NSE </a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>BSE</a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}> MCX </a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>Terms & conditions </a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>Policies & procedures</a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>Privacy policy</a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>Disclosure</a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>For investor's attention</a>
         <a href="" style={{textDecoration: "none", padding: "10px", color: "#424242"}}>Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
