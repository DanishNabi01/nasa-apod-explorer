package com.danish.apod.nasa_apod_backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ApodService {

    @Value("${nasa.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    // Fetch single APOD with optional date + CACHE
    @Cacheable(cacheNames = "apodByDate", key = "#date != null && !#date.isBlank() ? #date : 'today'")
    public String getApod(String date) {
        String baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

        if (date != null && !date.isBlank()) {
            baseUrl += "&date=" + date;
        }

        return restTemplate.getForObject(baseUrl, String.class);
    }

    // Fetch recent 10 APODs + CACHE
    @Cacheable(cacheNames = "recentApods")
    public List<Object> getRecentApods() {
        List<Object> list = new ArrayList<>();
        LocalDate today = LocalDate.now();

        for (int i = 0; i < 10; i++) {
            LocalDate date = today.minusDays(i);
            String url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;
            Object response = restTemplate.getForObject(url, Object.class);
            list.add(response);
        }

        return list;
    }
}
