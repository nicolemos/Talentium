package cohorte16.homeservice.services;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.models.Order;

import java.util.List;

public interface OrderService {
    public List<Order> getAllInitialOrders() throws Exception;

    public Order CreatedOrder(OrderDTO orderDTO) throws Exception;

    public Order updateOrder(Long id, String description) throws Exception;

    public boolean deleteOrder(Long id) throws  Exception;
}
