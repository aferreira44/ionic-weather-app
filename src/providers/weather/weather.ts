import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {
  apiKey = '1b9849d3e216118889dea7e924a957cb';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + this.apiKey + '&units=metric&q=';
  }

  getWeather(city, country) {
    return this.http.get(this.url + city + ',' + country)
  }

}
