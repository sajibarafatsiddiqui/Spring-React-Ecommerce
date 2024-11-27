package org.satr.ecommerce.repository;

import org.satr.ecommerce.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    @Query("Select p from Product p where "+
    "(p.category =:category or p.category='') "+
    "and ((p.discountedPrice between :minPrice and :maxPrice) or (:minPrice is null and :maxPrice is null)) "+
    "and (:minDiscount is null or p.discountedPrice>=:minDiscount) "+
    "order by case when :sort='price_low' then p.discountedPrice end ASC, "+
            "case when :sort='price_high' then p.discountedPrice end DESC")
    public List<Product> filterProducts(@Param("category") String category,
                                        @Param("minPrice") Integer minPrice,
                                        @Param("maxPrice") Integer maxPrice,
                                        @Param("minDiscount") Integer minDiscount,
                                        @Param("sort") String sort);
}
