package org.satr.ecommerce.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name ="parent_category")
    private Category parent_category;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL,orphanRemoval = true)
    private List<Product> products=new ArrayList<>();

    private int Lavel;

    private LocalDateTime created_at;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getParent_category() {
        return parent_category;
    }

    public void setParent_category(Category parent_category) {
        this.parent_category = parent_category;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
    public int getLavel() {
        return Lavel;
    }

    public void setLavel(int lavel) {
        Lavel = lavel;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public Category(int id, String name, String description, Category parent_category, List<Product> products, int lavel, LocalDateTime created_at) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.parent_category = parent_category;
        this.products = products;
        Lavel = lavel;
        this.created_at = created_at;
    }

    public Category() {}


}
