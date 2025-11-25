package com.danish.apod.nasa_apod_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")  // prefix for all endpoints
@CrossOrigin(origins = "http://localhost:5173")  // enable CORS for frontend
public class ApodController {

    private final ApodService apodService;

    public ApodController(ApodService apodService) {
        this.apodService = apodService;
    }

    @GetMapping("/apod")
    public Object getApod(@RequestParam(required = false) String date) {
        return apodService.getApod(date);
    }

    @GetMapping("/apod/recent")
    public Object getRecentApods() {
        return apodService.getRecentApods();
    }
}
