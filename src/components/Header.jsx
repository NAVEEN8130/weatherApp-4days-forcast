import { useEffect, useState } from "react";
import "./head.css"

const Header = () => {


      let [city, setCity] = useState("bangalore");
      let [dmsCord, setDmsCord] = useState("")
      let [list, setlist] = useState("")
      let [days, setDays] = useState([])


      useEffect(() => {
            getWeatherData(city)
      }, [])



      const citySetter = (e) => {
            setCity(e.target.value);
      }

      function decimalToDMS(decimal) {
            const degrees = Math.floor(decimal);
            const minutesDecimal = (decimal - degrees) * 60;
            const minutes = Math.floor(minutesDecimal);
            const seconds = Math.floor(((minutesDecimal - minutes) * 60));
            return `${degrees}° ${minutes}' ${seconds}''`
      }

      const getWeatherData = async (city) => {

            let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=158c940851fb4465d10f9b8c94149ce1`
            let response = await fetch(url)
            let data = await response.json();
            console.log('data: ', data);

            // DMS string
            let latitudeDMS = decimalToDMS(data[0].lat)
            let longitudeDMS = decimalToDMS(data[0].lon)
            let coordinatesDMS = `${latitudeDMS} ${longitudeDMS}`
            setDmsCord(coordinatesDMS)


            let url2 = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=158c940851fb4465d10f9b8c94149ce1`
            console.log('url2: ', url2);
            let response2 = await fetch(url2)
            console.log('response2: ', response2);
            let data2 = await response2.json();




            let fiveDays = data2.list.filter(i => i.dt_txt.split(" ").includes("21:00:00"))
            console.log('fiveDays: ', fiveDays);
            setDays(fiveDays)
            setlist(data2)


      }

      return (
            <div className="main_section">
                  <div className="container">
                        <div className="description">
                              <p className="placename"><i class="fa-solid fa-location-dot"></i>{city}</p>
                              <p>{dmsCord}</p>
                        </div>
                        <div className="searchbar">
                              <input className="input" id="cityname" onChange={citySetter} type="text" placeholder="Search your city" />
                              <button className="icon" onClick={() => getWeatherData(city)}><i class="fa-solid fa-magnifying-glass"></i></button>
                              <hr />
                        </div>
                  </div>
                  <div className="main-container">

                        <div className="main-date-sections">
                              <div className="date-section">
                                    <p className="select-date">Select Date:</p>
                                    {/* <button className="main-btn"><i class="fa-solid fa-calendar-days calender"></i>202 Jan 2023</button> */}
                                    <input type="date" />

                              </div>
                              <div className="main-desc">
                                    <div>High Temperatur</div>
                                    <div> Low Temperature</div>
                                    <div>Humidity</div>
                                    <div>Sunrise Time</div>
                                    <div>Sunset Time</div>
                              </div>
                        </div>



                        <div className="cardsContainer">

                              {days && days.map((x) => {

                                    let date = new Date(x.dt_txt)
                                    let dateString = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`


                                    const sunsettime = new Date(list.city.sunset);
                                    let sunsettimeString = `${sunsettime.getHours()}:${sunsettime.getMinutes()}`

                                    const sunrisetime = new Date(list.city.sunrise);
                                    let sunrisetimeString = `${sunrisetime.getHours()}:${sunrisetime.getMinutes()}`


                                    return (
                                          <div className="main-details">
                                                <div className="card">
                                                      <h3>{dateString}</h3>

                                                      <div className="card-details" >
                                                            <div className="main_cnt">
                                                                  <div> <img src={"http://openweathermap.org/img/w/" + x.weather[0].icon + ".png"} alt="" /></div>
                                                                  <div> <h1 className="desc">{x.weather[0].description}</h1></div>
                                                            </div>
                                                            {/* <h1 className="maindetails">{x.maindetails}</h1> */}
                                                            <div className="cityDetails">
                                                                  <div><h3>{x.main.temp_max}</h3></div>
                                                                  <div><h3>{x.main.temp_min}</h3></div>
                                                                  <div><h3>{x.main.humidity}</h3></div>
                                                                  <div><h3>{sunrisetimeString}</h3></div>
                                                                  <div><h3>{sunsettimeString}</h3></div>
                                                            </div>
                                                      </div>
                                                </div>

                                          </div>
                                    )
                              }
                              )}
                        </div>

                  </div>
            </div>

      )
}
export default Header