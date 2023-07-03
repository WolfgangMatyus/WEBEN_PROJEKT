package com.backend.controller;

import com.backend.entity.Invoice;
import com.backend.entity.Product;
import com.backend.service.ShopService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/shop")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService shopService;

    @GetMapping("/get")
    public ResponseEntity<String> getShop() {

        return ResponseEntity.ok("tes");
    }

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return shopService.getAllProducts();
    }

    // vouchercode
    @GetMapping("/voucher/{voucher_id}/valid")
    public ResponseEntity<Float> checkVoucher(@PathVariable("voucher_id") Integer voucher_id){
        return ResponseEntity.ok(shopService.checkVoucher(voucher_id));
    }

    @PostMapping("invoice")
    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice){
        return ResponseEntity.ok(shopService.createInvoice(invoice));
    }

    @GetMapping("invoice/{user_id}")
    public List<Invoice> getInvoice(@PathVariable("user_id") Integer user_id){
        return shopService.getInvoiceByUserID(user_id);
    }
}
