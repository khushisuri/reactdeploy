const data = [
  {
    title: "contact name",
    value: "Anonymous",
  },
  {
    title: "Display Name",
    value: "Grow 90",
  },
  {
    title: "Contact Number",
    value: "9876543210",
    icon: true,
  },
  {
    title: "Contact Email",
    value: "abc@gmail.com",
    icon: true,
  },
  {
    title: "Business Name",
    value: "Grow90",
  },
  {
    title: "Business Type",
    value: "Unregistered",
  },
  {
    title: "Registration Date",
    value: "Nov 24 2021, 03:56:34 pm",
  },
  {
    title: "Phone Number",
    value: "9876543210",
  },
  {
    title: "Email Id",
    value: "abc@gmail.com",
  },
  {
    title: "Website",
    value: "grow90.org",
  },
  {
    title: "User Name",
    value: "Grow90",
  },
  {
    title: "Login Email",
    value: "abc@gmail.com",
    icon: true,
  },
  {
    title: "Role",
    value: "Owner",
  },
  {
    title: "IFSC Code",
    value: "9876543210",
  },
  {
    title: "Account Number",
    value: "abc@gmail.com",
  },
  {
    title: "Account Holder",
    value: "grow90.org",
  },
];

const MyAccount = () => {
  return (
    <div className="my-acc-container">
      <div className="content-table">
        <div className="content-heading">
          <p>
            Merchant Id:<span> IPPJGIN1Nn6Lp2</span>
          </p>
          <p className="val">Change Password</p>
        </div>
        {data.map((item, index) => {
          return index <= 6 ? (
            <div
              className="content-row"
              style={{
                backgroundColor:
                  index === 1 || index === 3 ? "#f9f9f9" : "white",
              }}
            >
              <p>{item.title}</p>
              <div className="value">
                <p>{item.value}</p>
                {item.icon && <img src="/Vector.png" alt=""></img>}
              </div>
            </div>
          ) : (
            ""
          );
        })}
        <div style={{ backgroundColor: "white", height: "45px" }}></div>
        <div className="content-heading">
          <p>Support Details</p>
          <div className="value">
            <p className="val">Edit Details</p>
            <img src="/Vector.png" alt=""></img>
          </div>
        </div>
        {data.map((item, index) => {
          return index > 6 && index < 13 ? (
            <div
              className="content-row"
              style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}
            >
              <p>{item.title}</p>
              <div className="value">
                <p>{item.value}</p>
                {item.icon && <img src="/Vector.png" alt=""></img>}
              </div>
            </div>
          ) : (
            ""
          );
        })}
        <div style={{ backgroundColor: "white", height: "45px" }}></div>
        <div className="content-heading">
          <p>Bank Details</p>
          <div className="value">
            <p className="val">Request Change</p>
            <i></i>
          </div>
        </div>
        {data.map((item, index) => {
          return index >= 13 ? (
            <div
              className="content-row"
              style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "white" }}
            >
              <p>{item.title}</p>
              <div className="value">
                <p>{item.value}</p>
                {item.icon && <img src="/Vector.png" alt=""></img>}
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default MyAccount;
