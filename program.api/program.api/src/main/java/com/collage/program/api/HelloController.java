package com.collage.program.api;

import org.springframework.web.bind.annotation.*;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Program 13: Hello from Spring Boot!";
    }
}