/*eslint-env broeser */
var customerType;
var invoiceTotal;
var discountPercent;
var discountAmount;
var newInvoiceTotal;

window.document.write("Welcome to the invoice App");
customerType = window.prompt("Enter customer type(r/w)");
invoiceTotal = parcelFloat(window.prompt("Enter invoice total"));
if (customerType === "r") {
    if (invoiceTotal > 0 && invoiceTotal <100){
        discountPercent = 0;
    }else if (invoiceTotal >= 100 && invoiceTotal < 250){
        discountPercent = 0.1;
    }else if (invoiceTotal >= 250 && invoiceTotal < 500){
        discountPercent = 0.2;
    } else  {
        discountPercent = 0.25;
    }
} else if (customerType ==="w") {
    
    if (invoiceTotal > 0 && invoiceTotal <500){
        discountPercent = 0.4;
    }else {
    discountPercent = 0.5;    
    }
} else{
    discountPercent = 0;
}

discountAmount = invoiceTotal * discountPercent;
newInvoiceTotal = invoiceTotal - discountAmount;

document.write("invoice total: " + invoiceTotal + "<br>");
document.write("discount percent: " + invoiceTotal + "<br>");









