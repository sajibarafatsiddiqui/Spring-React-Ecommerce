package org.satr.ecommerce.model;

import jakarta.persistence.Embeddable;

@Embeddable
public class Size {
    private String size;
    private String quantity;
    public Size() {}

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public Size(String size, String quantity) {
        this.size = size;
        this.quantity = quantity;
    }
}
