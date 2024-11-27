package org.satr.ecommerce.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class PaymentInformation {
    private String cardHolderName;
    private String cardNumber;
    private String expiryMonth;
    private String expiryYear;
    private String cvv;
}
