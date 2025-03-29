import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify"; // Corrected import for ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import jsPDF from "jspdf";
import Receipt from "../../components/Receipt";
import logo from "../../assets/images/Logo Hardware.jpg";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);
  const [receiptDate, setReceiptDate] = useState("");
  const [showCartDetails, setShowCartDetails] = useState(true);
  const [showPaymentForm, setShowPaymentForm] = useState(true);
  const products = useSelector((state) => state.orebiReducer.products);
  const totalAmt = products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCharge = totalAmt <= 200 ? 30 : totalAmt <= 400 ? 25 : 20;

  const validateCredentials = () => {
    // Validate card number (must be 16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
      toast.error("Invalid card number. It must be 16 digits.");
      return false;
    }

  
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDateRegex.test(expiryDate)) {
      toast.error("Invalid expiry date. Use MM/YY format.");
      return false;
    }


    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      toast.error("Invalid CVV. It must be 3 digits.");
      return false;
    }


    if (cardHolderName.trim() === "") {
      toast.error("Cardholder name cannot be empty.");
      return false;
    }

    
    return true;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!validateCredentials()) {
      return; 
    }

    const currentDate = new Date();

    const formattedDate = `${currentDate
      .toLocaleDateString("en-GB")} ${currentDate.getHours()}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

    setReceiptDate(formattedDate);
    setShowReceipt(true);

    const doc = new jsPDF();

    const imgWidth = 50;
    const imgHeight = 20;
    doc.addImage(logo, "PNG", 20, 10, imgWidth, imgHeight);

    doc.text("Payment Receipt", 20, 40);
    doc.text(`Date: ${formattedDate}`, 20, 50);

    products.forEach((item, index) => {
      doc.text(`${item.name} - ₹${item.price * item.quantity}`, 20, 60 + index * 10);
    });

    doc.text(`Subtotal: ₹${totalAmt}`, 20, 60 + products.length * 10);
    doc.text(`Shipping Charge: ₹${shippingCharge}`, 20, 70 + products.length * 10);
    doc.text(`Total: ₹${totalAmt + shippingCharge}`, 20, 80 + products.length * 10);

    doc.save("receipt.pdf");


    setShowCartDetails(false);
    setShowReceipt(false);

    
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    setCardHolderName("");

  
    toast.success("Payment successful!");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      {/* Corrected ToastContainer usage */}
      <ToastContainer />
      <div className="pb-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payment Form */}
        {showPaymentForm && (
          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Enter Payment Details</h2>
            <p className="text-sm text-gray-600 mb-6">Payment gateway is applicable only for the production build.</p>
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-lg font-medium">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primeColor"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-medium">Expiry Date</label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primeColor"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium">CVV</label>
                  <input
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primeColor"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-medium">Card Holder Name</label>
                <input
                  type="text"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  className="w-full h-12 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primeColor"
                  placeholder="John Doe"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-primeColor text-white text-lg mt-4 rounded-md hover:bg-black transition duration-300"
              >
                Submit Payment
              </button>
            </form>
            <Link to="/">
              <button className="w-full h-12 bg-gray-700 text-white text-lg mt-4 rounded-md hover:bg-black transition duration-300">
                Explore More
              </button>
            </Link>
          </div>
        )}

        {/* Cart Summary */}
        {showCartDetails && (
          <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
            <div className="mt-4">
              {products.map((item) => (
                <div key={item._id} className="flex items-center justify-between border-b py-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-25 h-20 object-cover rounded-md  border-gray-300"
                  />
                  <div className="flex-1 px-4">
                    <span className="text-lg font-medium">{item.name}</span>
                  </div>
                  <span className="text-lg font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between border-t py-3 mt-4 text-lg font-medium">
                <span>Subtotal</span>
                <span>₹{totalAmt}</span>
              </div>
              <div className="flex justify-between py-3 text-lg">
                <span>Shipping Charge</span>
                <span>₹{shippingCharge}</span>
              </div>
              <div className="flex justify-between font-bold text-xl py-3">
                <span>Total</span>
                <span>₹{totalAmt + shippingCharge}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {showReceipt && (
        <Receipt
          products={products}
          totalAmt={totalAmt}
          shippingCharge={shippingCharge}
          date={receiptDate}
        />
      )}
    </div>
  );
};

export default Payment;
