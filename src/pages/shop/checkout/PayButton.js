// import Axios from '../../lib/Axios';
// import { useSelector } from "react-redux";
// import { url } from "./../redux/api";

const PayButton = ({ cartItems }) => {
//   const user = useSelector((state) => state.auth);

//   const handleCheckout = () => {
//     Axios
//       .post(`${url}/stripe/create-checkout-session`, {
//         cartItems,
//         userId: user._id,
//       })
//       .then((response) => {
//         if (response.data.url) {
//           window.location.href = response.data.url;
//         }
//       })
//       .catch((err) => console.log(err.message));
//   };

  return (
    <>

      {/* <button onClick={() => handleCheckout()}>Check out</button> */}
      <button >Check out</button>
    </>
  );
};

export default PayButton;