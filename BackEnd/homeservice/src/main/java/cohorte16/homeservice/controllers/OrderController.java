package cohorte16.homeservice.controllers;

import cohorte16.homeservice.dtos.OrderDTO;
import cohorte16.homeservice.dtos.OrderProfessionalDTO;
import cohorte16.homeservice.dtos.UpdateOrderDTO;
import cohorte16.homeservice.services.impl.OrderServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@CrossOrigin("*")
public class OrderController {

    @Autowired
    private OrderServiceImpl orderService;

    @GetMapping(value = "/allinitial", produces = "application/json")
    public ResponseEntity<?> getAllInitialOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllInitialOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @GetMapping(value = "/allpending", produces = "application/json")
    public ResponseEntity<?> getAllPendingOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllPendingOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @GetMapping(value = "/allapproved", produces = "application/json")
    public ResponseEntity<?> getAllApprovedOrders(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body( orderService.getAllApprovedOrders());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error! Something went wrong");
        }
    }

    @PostMapping(consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> createOrder( @RequestBody @Valid OrderDTO orderDTO) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(orderService.CreatedOrder(orderDTO));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping
    public ResponseEntity<?> updateOrder(@RequestBody  UpdateOrderDTO updateOrderDTO){
        try{
            var nuevoOrdenDto = orderService.updateOrder(updateOrderDTO);
            return ResponseEntity.status(HttpStatus.OK).body(new UpdateOrderDTO( nuevoOrdenDto.getId(),nuevoOrdenDto.getDescription(),
                    nuevoOrdenDto.getProfessional(),nuevoOrdenDto.getPrice(),nuevoOrdenDto.getOrderstatus()) );
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error! Something went wrong");
        }
    }

    @PutMapping(value = "/{id}", consumes = "application/json",produces = "application/json")
    public ResponseEntity<?> takeOrderProfessional(@Valid @PathVariable Long id, @RequestBody OrderProfessionalDTO orderProfessionalDTO){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(
                    orderService.takeOrderProfessional(id, orderProfessionalDTO));
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
