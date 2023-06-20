import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName:string){
    
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=d56f5eec0cd4373cc547ecf407643ef1&units=metric',)
  }

}
