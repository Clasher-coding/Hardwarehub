import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Receipt = ({ products, totalAmt, shippingCharge, date }) => {
  const generatePDF = () => {
    try {
      const doc = new jsPDF();

    
      doc.text("Payment Receipt", 14, 10);

     
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString(); 
      doc.text(`Date: ${formattedDate}`, 14, 20);

   
      const tableData = products.map((item) => [
        item.name,
        item.quantity,
        `₹${item.price}`,
        `₹${item.price * item.quantity}`,
      ]);

      
      doc.autoTable({
        head: [["Product", "Quantity", "Price", "Total"]],
        body: tableData,
        startY: 30,
      });

      doc.autoTable({
        body: [
          ["Subtotal", "", "", `₹${totalAmt}`],
          ["Shipping Charge", "", "", `₹${shippingCharge}`],
          ["Total", "", "", `₹${totalAmt + shippingCharge}`],
        ],
        theme: "plain",
        startY: doc.lastAutoTable.finalY + 10,
        styles: { fontStyle: "bold", halign: "right" },
        columnStyles: { 0: { halign: "left" } },
      });

      
      doc.save("receipt.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Receipt</h2>
      <p className="text-sm text-gray-600 mb-4">Date: {date}</p>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Product</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id} className="border-t">
              <td className="border border-gray-300 px-4 py-2 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md border-gray-300 mr-4"
                />
                <span>{item.name}</span>
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">₹{item.price}</td>
              <td className="border border-gray-300 px-4 py-2">₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t">
            <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right font-medium">
              Subtotal
            </td>
            <td className="border border-gray-300 px-4 py-2">₹{totalAmt}</td>
          </tr>
          <tr>
            <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right font-medium">
              Shipping Charge
            </td>
            <td className="border border-gray-300 px-4 py-2">₹{shippingCharge}</td>
          </tr>
          <tr className="font-bold text-xl">
            <td colSpan="3" className="border border-gray-300 px-4 py-2 text-right">
              Total
            </td>
            <td className="border border-gray-300 px-4 py-2">₹{totalAmt + shippingCharge}</td>
          </tr>
        </tfoot>
      </table>
      {/* <button
        onClick={generatePDF}
        className="mt-4 bg-gray-500 text-white  px-4 py-2 rounded"
      >
        Download PDF
      </button> */}
    </div>
  );
};

export default Receipt;
