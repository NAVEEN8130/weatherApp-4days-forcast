import "./Main.css"
// https://api.openweathermap.org/geo/1.0/direct?q=bangalore&limit=5&appid=158c940851fb4465d10f9b8c94149ce1




const Main = () => {
      const slide = [
            {
                  date: "20 Jan 2023",
                  maindetails: "Sunny",
                  cel1: "22x/63",
                  cel2: "23c/63",
                  cel3: "23c/43",
                  time1: "06:21 AM",
                  time2: "06:21 PM"
            }, {
                  maindetails: "Sunny",
                  cel1: "22x/63",
                  cel2: "23c/63",
                  cel3: "23c/43",
                  time1: "06:21 AM",
                  time2: "06:21 PM"

            },
            {
                  maindetails: "Sunny",
                  cel1: "22x/63",
                  cel2: "23c/63",
                  cel3: "23c/43",
                  time1: "06:21 AM",
                  time2: "06:21 PM"

            }
            ,
            {
                  maindetails: "Sunny",
                  cel1: "22x/63",
                  cel2: "23c/63",
                  cel3: "23c/43",
                  time1: "06:21 AM",
                  time2: "06:21 PM"

            }
      ]
      return (
            <div className="main-container">

                  <div className="main-date-sections">
                        <div className="date-section">
                              <p className="select-date">Select Date:</p>
                              <button className="main-btn"><i class="fa-solid fa-calendar-days calender"></i>202 Jan 2023</button>

                        </div>
                        <div className="main-desc">
                              <div><a href="#">High Temperatur</a></div>
                              <div> <a href="#">Low Temperature</a></div>
                              <div><a href="#">Humidity</a></div>
                              <div><a href="#">Sunrise Time</a></div>
                              <div><a href="#">Sunset Time</a></div>
                        </div>
                  </div>





                  {slide.map((slide) => {
                        return (
                              <div className="main-details">
                                    <div className="card1">
                                          <h3>20 Jan 2023</h3>

                                          <div className="card-details">
                                                <h1 className="maindetails">{slide.maindetails}</h1>
                                                <h3>{slide.cel1}</h3>
                                                <h3>{slide.cel2}</h3>
                                                <h3>{slide.cel3}</h3>
                                                <h3>{slide.time1}</h3>
                                                <h3>{slide.time2}</h3>
                                          </div>
                                    </div>

                              </div>
                        )
                  }


                  )}
            </div>

      )
}
export default Main