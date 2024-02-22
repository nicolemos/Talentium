package cohorte16.homeservice.services.impl;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.UpdateOrderDTO;
import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.exceptions.EntityNotSavedException;
import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.repositories.OrderRepository;
import cohorte16.homeservice.services.OrderService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    @Autowired
    public OrderRepository orderRepository;

    @Override
    public List<Order> getAllInitialOrders() throws Exception {
        try{
            return orderRepository.findByOrderstatus(Orderstatus.Inicial);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }


    @Override
    public Order CreatedOrder(OrderDTO order) throws Exception {
        try{

            Order  odenDb = Order.builder()
                    .description(order.description())
                    .client(Client.builder().id(order.cliente_id()).build()  )
                    .date( new Date())
                    .orderstatus(Orderstatus.valueOf("Inicial"))
                    .build();

            return orderRepository.save(odenDb);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }

    }

    @Override
    public Order updateOrder(UpdateOrderDTO updateOrderDTO) throws Exception {
        try{
            Optional<Order> orderOptional = orderRepository.findById(updateOrderDTO.cliente_id());
            if(orderOptional.isEmpty()){
                throw new EntityNotSavedException("Order not found");
            }
            Order existingOrder = orderOptional.get();
            existingOrder.setDescription(updateOrderDTO.description());
            return orderRepository.save(existingOrder);

        }catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public boolean deleteOrder(Long id) throws Exception {
       try{
            Optional<Order> orderOptional = orderRepository.findById(id);
            if (orderOptional.isPresent()){
                Order order = orderOptional.get();
                orderRepository.delete(order);
                return true;
            }else {
                return false;
            }
       }catch (Exception e){
           throw new Exception(e.getMessage());
       }
    }
}
