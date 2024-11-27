package org.satr.ecommerce.service;

import org.satr.ecommerce.model.Category;
import org.satr.ecommerce.model.Product;
import org.satr.ecommerce.repository.CategoryRepository;
import org.satr.ecommerce.repository.ProductRepository;
import org.satr.ecommerce.request.CreateProductRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImplementation implements ProductService{


    private ProductRepository productRepository;
     private CategoryRepository categoryRepository;
     private CustomUserService userService;
     public ProductServiceImplementation(ProductRepository productRepository, CategoryRepository categoryRepository, CustomUserService userService) {
         this.productRepository = productRepository;
         this.categoryRepository = categoryRepository;
         this.userService = userService;
     }
    @Override
    public Product createProduct(CreateProductRequest req) {
        Category topLavelCategory = categoryRepository.findByName(req.getTopLevelCategory());
        if (topLavelCategory == null) {
            Category topCategory = new Category();
            topCategory.setName(req.getTopLevelCategory());
            topCategory.setLavel(1);
            topLavelCategory=categoryRepository.save(topCategory);
        }

        Category secondLavelCategory = categoryRepository.findByCategoryNameParentName(req.getSecondLevelCategory(), req.getTopLevelCategory());
        if (secondLavelCategory == null) {
            Category secondCategory = new Category();
            secondCategory.setName(req.getSecondLevelCategory());
            secondCategory.setLavel(2);
            secondCategory.setParent_category(topLavelCategory);
            secondLavelCategory=categoryRepository.save(secondCategory);

        }
        Category thirdLavelCategory = categoryRepository.findByCategoryNameParentName(req.getThirdLevelCategory(), req.getSecondLevelCategory());
        if (thirdLavelCategory == null) {
            Category thirdCategory = new Category();
            thirdCategory.setName(req.getSecondLevelCategory());
            thirdCategory.setLavel(3);
            thirdCategory.setParent_category(secondLavelCategory);
            thirdLavelCategory=categoryRepository.save(thirdCategory);

        }

        return null;
    }


    @Override
    public Product updateProduct(Integer productId, Product product) {
        return null;
    }

    @Override
    public String deleteProduct(Integer productId) {
        return "";
    }

    @Override
    public Product findProductById(Integer productId) {
        return null;
    }

    @Override
    public List<Product> findProductByCategory(String category) {
        return List.of();
    }

    @Override
    public Page<Product> filteredProducts(Pageable pageable,Integer pageSize,Integer pageNumber, String category, List<String> colors, List<String> size, Integer minDiscount, Integer minPrice,Integer maxPrice,String sort,String stock) {
        pageable= PageRequest.of(pageSize,pageNumber);
       List<Product> products=productRepository.filterProducts(category,minPrice,maxPrice,minDiscount,sort);
       if(!colors.isEmpty()){
           products=products.stream().filter(p->colors.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor()))).collect(Collectors.toList());
       }
       if(!stock.isBlank()){
           if(stock.equalsIgnoreCase("in_stock")){
               products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
           } else if(stock.equalsIgnoreCase("out_stock")){
               products=products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
           }
       }

        int startIndex=(int) pageable.getOffset();
        int endIndex=Math.min(startIndex+pageable.getPageSize(),products.size());
        List<Product>pageContent=products.subList(startIndex,endIndex);
        Page<Product> filteredProducts=new PageImpl<>(pageContent,pageable,products.size());

        return filteredProducts;
    }
}
