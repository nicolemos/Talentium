package cohorte16.homeservice.services.impl;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.OrderProfessionalDTO;
import cohorte16.homeservice.dtos.UpdateOrderDTO;
import cohorte16.homeservice.enums.Orderstatus;
import cohorte16.homeservice.exceptions.EntityNotSavedException;
import cohorte16.homeservice.models.Client;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.models.Professional;
import cohorte16.homeservice.repositories.OrderRepository;
import cohorte16.homeservice.repositories.ProfessionalRepository;
import cohorte16.homeservice.services.OrderService;
import jakarta.persistence.EntityNotFoundException;
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
    @Autowired
    public ProfessionalRepository professionalRepository;

    @Override
    public List<Order> getAllInitialOrders() throws Exception {
        try{
            return orderRepository.findByOrderstatus(Orderstatus.Inicial);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Order> getAllPendingOrders() throws Exception {
        try{
            return orderRepository.findByOrderstatus(Orderstatus.Pendiente);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Order> getAllApprovedOrders() throws Exception {
        try{
            return orderRepository.findByOrderstatus(Orderstatus.Aprobada);
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
    public Order takeOrderProfessional(Long id, OrderProfessionalDTO orderProfessionalDTO) throws Exception {
        try {
<<<<<<< HEAD
            Order order = orderRepository.findById(id).orElseThrow(
                    () -> new EntityNotFoundException("Order Not Found")
            );
            Professional professional = professionalRepository.findById(
                    orderProfessionalDTO.id()).orElseThrow(
                            () -> new EntityNotFoundException("Professional Not Found")
            );
=======
            Order order = orderRepository.findById(id).orElseThrow((() -> new EntityNotFoundException("Order Not Found")));
            Professional professional = professionalRepository.findById(orderProfessionalDTO.id()).orElseThrow((() -> new EntityNotFoundException("Professional Not Found")));
>>>>>>> ab2bbe3ebe55158d19b7b89c3fb9f9c9cc578148
            order.setProfessional(professional);
            order.setDescription_professional(orderProfessionalDTO.description_Professional());
            order.setPrice(orderProfessionalDTO.price());
            order.setOrderstatus(Orderstatus.valueOf("Pendiente"));
            return orderRepository.save(order);

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


    @Override
    public Order updateOrder(UpdateOrderDTO updateOrderDTO) throws Exception {
        try{
            Order existingOrder = orderRepository.findById(updateOrderDTO.order_id()).orElseThrow(()-> new EntityNotFoundException("Order not found"));
            if(updateOrderDTO.description() != null)existingOrder.setDescription(updateOrderDTO.description());
            return orderRepository.save(existingOrder);
        }catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Order cancelOrderOfProfessional(Long id) throws Exception {
        try{
            Order order = orderRepository.findById(id).orElseThrow((() -> new EntityNotFoundException("Order Not Found")));
            order.setProfessional(null);
            order.setDescription_professional(null);
            order.setPrice(null);
            order.setOrderstatus(Orderstatus.valueOf("Inicial"));
            return orderRepository.save(order);
        }catch(Exception e){
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
