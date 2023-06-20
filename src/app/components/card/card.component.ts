import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'comp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  TodayDate: Date;
  weatherData: any;

  constructor(private service:WeatherService){ 
    this.TodayDate= new Date();
  }

  cityName: string='New Delhi';
  iconURL: string='';

    ngOnInit() {
    this.getWeatherData(this.cityName);
    // this.cityName='';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    // this.cityName='';
  }

  getWeatherData(cityName:string){
    this.service.getWeatherData(cityName).subscribe({
      next:(res)=>{
        this.weatherData = res;
        console.log(this.weatherData);
        this.iconURL = 'https://openweathermap.org/img/wn/' + this.weatherData.weather[0].icon +'@2x.png';
      }
    })
  }
}
