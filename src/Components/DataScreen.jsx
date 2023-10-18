import filter from "../assets/filter.svg";
import notification from "../assets/notification.svg";
import hailday from "../assets/hailday.svg";
import night from "../assets/night.svg";
import heart from "../assets/heart.svg";
import chart from "../assets/chart.svg";
import warning from "../assets/warning.svg";
import search from "../assets/search.svg";
import ChartSection from "./ChartSection";

const DataScreen = () => {
  return (
    <div className="DataScreen">
      <h4 className="heading">Data Manager</h4>
      <div className="DataScreen-data-filter">
        <div className="DataScreen-dates">
          <h6 className="Datascreen-date">12 Months</h6>
          <h6 className="Datascreen-date">30 Days</h6>
          <h6 className="Datascreen-date">7 Days</h6>
          <h6 className="Datascreen-date">24 Hours</h6>
        </div>
        <div className="DataScreen-dates-filters">
          <img src={notification} alt="" />

          <img src={filter} alt="" />
        </div>
      </div>
      <div className="DataCreen-group-chart">
        <div className="DataCreen-group-container">
          <img src={hailday} alt="" />
          <h4 className="DataCreen-group-container-text">Total Animal Count</h4>
          <h3 className="DataCreen-group-container-number">250</h3>
        </div>

        <div className="DataCreen-group-container">
          <img src={night} alt="" />
          <h4 className="DataCreen-group-container-text">Total Animal Count</h4>
          <h3 className="DataCreen-group-container-number">250</h3>
        </div>

        <div className="DataCreen-group-container">
          <img src={heart} alt="" />
          <h4 className="DataCreen-group-container-text">Health Status</h4>
          <div className="DataCreen-group-container-text-wrapper">
            <div className="group-wrapper">
              <img className="warning-img" src={warning} alt="" />
              <p className="smaller-text">
                Threats:<span>0</span>
              </p>
            </div>
            <p className="smaller-text">
              Status:<span>Perfect</span>
            </p>
          </div>
        </div>

        <div className="DataCreen-group-container">
          <div id="group-wrapper">
            <h4 className="DataCreen-group-container-text">Health Status</h4>
            <img id="DataCreen-group-container-Chart" src={chart} alt="" />
          </div>
          <div className="group-wrapper">
            <img className="warning-img" src={warning} alt="" />
            <p className="smaller-text">Animals not feeding</p>
          </div>
        </div>
      </div>

      <div className="Data_Screen_Chart">
        <div className="Chart-screen-wrappers">
          <div
            className="Chart-screen-wrappers-options"
            id="Chart-screen-wrappers-with-chart"
          >
            <h4 className="chart-screen-heading">Analytics</h4>
            <select name="" className="chart-screen-select" id="">
              <option value="">2023</option>
              <option value="">2024</option>
            </select>
          </div>
          <ChartSection />
        </div>
        <div
          className="Chart-screen-wrappers"
          id="Chart-screen-wrappers-without-chart"
        ></div>
      </div>

      <div className="DataScreen_History">
        <div className="data_screen-container">
          <h4 className="chart-screen-heading">Data History</h4>
          <div className="data-screen-search">
            <img src={search} alt="" />
            <input
              className="data-screen-history-input"
              id="data-screen-history-input"
              type="text"
            />
            <input
              className="data-screen-history-input"
              id="data-screen-history-submit"
              type="submit"
              value="Search"
            />
          </div>
          <div className="data-screen-select-date">
            <img src={notification} alt="" />
            <select name="" className="chart-screen-history-select" id="">
              <option value="">Select Date</option>
              <option value="">2024</option>
            </select>
          </div>
        </div>
        <div className="data-screen-history-body">
          <table>
            <tr className="top-table">
              <th>No</th>
              <th>Total Animals Count</th>
              <th>Health Status</th>
              <th>Feedback</th>
              <th>Feeding Behaviour</th>
              <th>Animal Type</th>
              <th>Weight Measurements</th>
            </tr>
            
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
        
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataScreen;
