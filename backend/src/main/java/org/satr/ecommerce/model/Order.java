package org.satr.ecommerce.model;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private long user_id;
    @OneToMany
    private List<Product> products=new ArrayList<>();
    private int quantity;
    private double price;
    private String status;

}
