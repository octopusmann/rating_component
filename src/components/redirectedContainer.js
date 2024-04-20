import paymentImage from "../images/payment-image.svg";
import { useLocation } from "react-router-dom";

function RedirectedPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedOption = queryParams.get("selectedOption");

  return (
    <div className="redirected-box">
      <div className="wrapped-redirected">
        <div className="payment-image">
          <img src={paymentImage} alt="payment"></img>
        </div>

        <div className="selected-info">
          <p>You have selected {selectedOption} out of 5</p>
        </div>

        <div className="default-info">
          <h2>Thank you!</h2>

          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RedirectedPage;
