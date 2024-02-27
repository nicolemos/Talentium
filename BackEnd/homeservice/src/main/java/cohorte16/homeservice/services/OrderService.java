package cohorte16.homeservice.services;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.OrderProfessionalDTO;
import cohorte16.homeservice.dtos.UpdateOrderDTO;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.models.User;

import java.util.List;

public interface OrderService {
    public List<Order> getAllInitialOrders() throws Exception;
    public List<Order> getAllPendingOrders() throws Exception;
    public List<Order> getAllApprovedOrders() throws Exception;

    public Order CreatedOrder(OrderDTO orderDTO) throws Exception;
    public Order takeOrderProfessional(Long id, OrderProfessionalDTO orderProfessionalDTO) throws Exception;

    public Order updateOrder(UpdateOrderDTO updateOrderDTO) throws Exception;

    public boolean deleteOrder(Long id) throws  Exception;
}
