package org.satr.ecommerce.repository;

import org.satr.ecommerce.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    public Order findByOrderId(int orderId);
public Order findByUserId(int userId);

}