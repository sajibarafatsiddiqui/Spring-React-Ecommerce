package org.satr.ecommerce.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.satr.ecommerce.model.Rating;
import org.satr.ecommerce.model.Review;
import org.satr.ecommerce.model.Size;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CreateProductRequest {
    private String name;
    private double price;
    private double discountedPrice;
    private int quantity;
    private String description;
    private String imageUrl;
    private String category;
    private String brand;
    private Set<Size> sizes=new HashSet<>();
    private List<Review> reviews=new ArrayList<>();
    private List<Rating> ratings=new ArrayList<>();
    private String topLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(double discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Set<Size> getSizes() {
        return sizes;
    }

    public void setSizes(Set<Size> sizes) {
        this.sizes = sizes;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public String getTopLevelCategory() {
        return topLevelCategory;
    }

    public void setTopLevelCategory(String topLevelCategory) {
        this.topLevelCategory = topLevelCategory;
    }

    public String getSecondLevelCategory() {
        return secondLevelCategory;
    }

    public void setSecondLevelCategory(String secondLevelCategory) {
        this.secondLevelCategory = secondLevelCategory;
    }

    public String getThirdLevelCategory() {
        return thirdLevelCategory;
    }

    public void setThirdLevelCategory(String thirdLevelCategory) {
        this.thirdLevelCategory = thirdLevelCategory;
    }

    public CreateProductRequest(String name, double price, double discountedPrice, int quantity, String description, String imageUrl, String category, String brand, Set<Size> sizes, List<Review> reviews, List<Rating> ratings, String topLevelCategory, String secondLevelCategory, String thirdLevelCategory) {
        this.name = name;
        this.price = price;
        this.discountedPrice = discountedPrice;
        this.quantity = quantity;
        this.description = description;
        this.imageUrl = imageUrl;
        this.category = category;
        this.brand = brand;
        this.sizes = sizes;
        this.reviews = reviews;
        this.ratings = ratings;
        this.topLevelCategory = topLevelCategory;
        this.secondLevelCategory = secondLevelCategory;
        this.thirdLevelCategory = thirdLevelCategory;
    }
}
