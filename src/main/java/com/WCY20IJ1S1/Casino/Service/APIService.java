package com.WCY20IJ1S1.Casino.Service;

import com.WCY20IJ1S1.Casino.Model.API.Transcript;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.UUID;
import java.util.Base64;

@Service
public class APIService {

    private URI uri;

    private String OrderID;
    @Value("${env.PAYPAL_CLIENTID}")
    private String clientId;
    @Value("${env.PAYPAL_CLIENT_SECRET}")
    private String clientSecret;

    public String CreateOrder(double Amount) throws URISyntaxException, IOException, InterruptedException {

        String credentials = clientId + ":" + clientSecret;
        String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());
        Transcript transcript = new Transcript();
        String PaymentLink;
        uri = new URI("https://api-m.sandbox.paypal.com/v2/checkout/orders");
        Gson gson = new Gson();
        transcript.getPurchaseUnits()[0].getAmount().setValue(String.valueOf(Amount));
        String jsonRequest = gson.toJson(transcript);
        HttpRequest postRequest = HttpRequest.newBuilder()
                .uri(uri)
                .header("Content-Type", "application/json")
                .header("PayPal-Request-Id", generateRequestId())
                .header("Authorization", "Basic " + encodedCredentials)
                .POST(HttpRequest.BodyPublishers.ofString(jsonRequest))
                .build();
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> postResponse = httpClient.send(postRequest, HttpResponse.BodyHandlers.ofString());
        JsonObject jsonObject = gson.fromJson(postResponse.body(), JsonObject.class);
        OrderID = jsonObject.get("id").getAsString();
        PaymentLink = jsonObject.getAsJsonArray("links").get(1).getAsJsonObject().get("href").getAsString();

        return PaymentLink;
    }

    public String ConfirmOrder() throws URISyntaxException, IOException, InterruptedException {

        String credentials = clientId + ":" + clientSecret;
        String encodedCredentials = Base64.getEncoder().encodeToString(credentials.getBytes());
        Transcript transcript;
        String PaidAmount;
        String PaidStatus;
        uri = new URI("https://api-m.sandbox.paypal.com/v2/checkout/orders/" + OrderID);
        Gson gson = new Gson();
        HttpRequest getRequest = HttpRequest.newBuilder()
                .uri(uri)
                .header("Authorization", "Basic " + encodedCredentials)
                .build();
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> getResponse = httpClient.send(getRequest, HttpResponse.BodyHandlers.ofString());
        transcript = gson.fromJson(getResponse.body(), Transcript.class);
        PaidAmount = transcript.getPurchaseUnits()[0].getAmount().getValue();
        PaidStatus = transcript.getStatus();
        return PaidAmount;
    }

    // generating request id
    public static String generateRequestId() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

}
