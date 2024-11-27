package org.satr.ecommerce.repository;

import org.satr.ecommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("select c from Category c where c.name =:categoryName "
    +"and c.parent_category=:parentCategory")
    Category findByCategoryNameParentName(@Param("categoryName") String categoryName,@Param("parentCategory") String perentCategory );
    Category findByName(String name);
}
