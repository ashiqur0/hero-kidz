export const orderInvoiceTemplate = ({ user, orderId, items }) => {
    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return `
        <div style="font-family: Arial, sans-serif">
            <h2>Order Invoice</h2>
            <p>Thank you <strong>${user.name}</strong> for your order.</p>

            <p><strong>Order ID:</strong> ${orderId}</p>

            <table width="100%" border="1" cellspacing="0" cellpadding="8">
                <thead>
                    <tr>
                        <th align="left">Product</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${items
                        .map(
                            item => `
                                <tr>
                                    <td>${item.title}</td>
                                    <td align="center">${item.quantity}</td>
                                    <td align="center">${item.price}</td>
                                    <td align="center">${item.price * item.quantity}</td>
                                </tr>
                            `
                        )
                        .join("")}
                </tbody>
            </table>

            <h3>Total Amount: ${total}</h3>

            <p>We will notify you once your order is shipped.</p>
        </div>
    `;
};