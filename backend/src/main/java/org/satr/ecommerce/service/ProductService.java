package org.satr.ecommerce.service;

import org.satr.ecommerce.model.Product;
import org.satr.ecommerce.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {
    public Product createProduct(CreateProductRequest product);
    public Product updateProduct(Integer productId,Product product);
    public String deleteProduct(Integer productId);
    public Product findProductById(Integer productId);
    public List<Product> findProductByCategory(String category);
    public Page<Product> filteredProducts (Pageable pageable,Integer pageSize,Integer pageNumber, String category, List<String> colors, List<String> size, Integer minDiscount, Integer minPrice,Integer maxPrice,String sort,String stock);

}
