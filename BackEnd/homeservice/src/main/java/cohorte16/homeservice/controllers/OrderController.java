package cohorte16.homeservice.controllers;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.ProfessionalDTO;
import cohorte16.homeservice.models.Order;
import cohorte16.homeservice.services.impl.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<?> getAllOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllInitialOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }


    @PostMapping(consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> createOrder( @RequestBody OrderDTO orderDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(orderService.CreatedOrder(orderDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping(value = "/{id}", consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> updateOrder(@Valid @PathVariable Long id, @RequestParam String description){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(orderService.updateOrder(id, description));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(orderService.deleteOrder(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }
}
