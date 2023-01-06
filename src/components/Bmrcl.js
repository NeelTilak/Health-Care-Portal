import React, { Component } from "react";
import "./css/bmr.css"

class Bmrcl extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      weightInPound: "",
      weightInKG: "",
      age: "",
      heightFeet: "",
      heightInches: "",
      heightCM: "",
      activity: "",
      activityvalue: "",
      bmr: "",
      error: "",
      workout: "",
      mode: "",
      showMe: false
    };
  }

  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleWeightPoundChange = (event) => {
    this.setState({ weightInPound: event.target.value });
  };
  handleWeightKGChange = (event) => {
    this.setState({ weightInKG: event.target.value });
  };
  handleHeightFeetChange = (event) => {
    this.setState({ heightFeet: event.target.value });
  };
  handleHeightInchesChange = (event) => {
    this.setState({ heightInches: event.target.value });
  };
  handleHeightCMChange = (event) => {
    this.setState({ heightCM: event.target.value });
  };
  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  };
  handleActivityChange = (event) => {
    this.setState({ activity: event.target.value });
  };
  handleModeChange = (event) => {
    this.setState({ mode: event.target.value });
  };

  calculateBMR() {
    let gender = this.state.gender;
    let weightPound = this.state.weightInPound;
    let weightKG = this.state.weightInKG;
    let age = this.state.age;
    let heightFeet = this.state.heightFeet;
    let heightInches = this.state.heightInches;
    let bmrCalc = "";
    let heightInCM = this.state.heightCM;
    let mode = this.state.mode;

    /*
        BMR calculation (imperial): 
            Man BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
            Woman BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
        
        BMR calculation (Metric): 
          Man BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) – ( 6.755 × age in years )
          Woman BMR = BMR = 655 + ( 9.563 × weight in kg ) + ( 1.850 × height in cm ) – ( 4.676 × age in years )
        */
    let totalheightInches = heightFeet * 12 + heightInches;

    if (mode == "") {
      this.setState({ error: "All fields are required!" });
      return;
    } else if (mode == 3) {
      if (
        age == "" ||
        gender == "" ||
        heightFeet == "" ||
        heightInches == "" ||
        weightPound == ""
      ) {
        this.setState({ error: "All fields are required!" });
        return;
      } else if (gender == 1) {
        bmrCalc =
          655.1 + 4.35 * weightPound + 4.7 * totalheightInches - 4.7 * age;
        this.setState({ showMe: true });
      } else if (gender == 2) {
        bmrCalc =
          66 + 6.2 * weightPound + 12.7 * totalheightInches - 6.76 * age;
        this.setState({ showMe: true });
      }
    } else if (mode == 4) {
      if (age == "" || gender == "" || heightInCM == "" || weightKG == "") {
        this.setState({ error: "All fields are required!" });
        return;
      } else if (gender == 1) {
        bmrCalc = 655 + 9.563 * weightKG + 1.85 * heightInCM - 4.676 * age;
        this.setState({ showMe: true });
      } else if (gender == 2) {
        bmrCalc = 66.5 + 13.75 * weightKG + 5.003 * heightInCM - 6.755 * age;
        this.setState({ showMe: true });
      }
    }

    this.setState({ bmr: bmrCalc });
    this.setState({ error: "" });
  }

  calculateCalories() {
    let activitychange = this.state.activity * this.state.bmr;
    this.setState({ activityvalue: activitychange });
  }

  render() {
    let error;
    if (this.state.error) {
      error = <div className="error">{this.state.error}</div>;
    }
    let resultBMR;
    if (this.state.bmr) {
      resultBMR = <div className="result">{this.state.bmr}</div>;
    }
    let resultCalories;
    if (this.state.activity) {
      resultCalories = (
        <div>
          <h3>
            <center>{this.state.activityvalue}</center>
          </h3>
        </div>
      );
    }

    return (
      <div id="bmrcalc">
        <div className="form">
          <div className="mode">
            <label>
              <input
                type="radio"
                checked={this.state.mode === "3"}
                onChange={this.handleModeChange}
                className="imperial"
                name="mode"
                value="3"
              />
              Imperial
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.mode === "4"}
                onChange={this.handleModeChange}
                className="metric"
                name="mode"
                value="4"
              />
              Metric
            </label>
          </div>
          <h2 className="title">BMR &amp; Daily Calorie Calculator</h2>
          {error}
          <div className="inputwrap">
            <label className="label">Gender</label>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "1"}
                onChange={this.handleGenderChange}
                className="genderF"
                name="gender"
                value="1"
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                checked={this.state.gender === "2"}
                onChange={this.handleGenderChange}
                className="genderM"
                name="gender"
                value="2"
              />
              Male
            </label>
          </div>
          {this.state.mode == 3 ? (
            <div>
              <div className="inputwrap">
                <label className="label">Weight in Pounds</label>
                <input
                  type="number"
                  value={this.state.weightInPound}
                  onChange={this.handleWeightPoundChange}
                  name="weight"
                  className="weight"
                  min="0"
                  max="999"
                />
              </div>
              <div className="inputwrap">
                <label className="label">Height in feet and inches</label>
                <input
                  type="number"
                  value={this.state.heightFeet}
                  onChange={this.handleHeightFeetChange}
                  name="heightFeet"
                  className="heightFeet"
                  min="0"
                  max="8"
                />
                <input
                  type="number"
                  value={this.state.heightInches}
                  onChange={this.handleHeightInchesChange}
                  name="heightInches"
                  className="heightInches"
                  min="0"
                  max="11"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="inputwrap">
                <label className="label">Weight in KG</label>
                <input
                  type="number"
                  value={this.state.weightInKG}
                  onChange={this.handleWeightKGChange}
                  name="weight"
                  className="weight"
                  min="0"
                  max="999"
                />
              </div>
              <div className="inputwrap">
                <label className="label">Height in centimeters</label>
                <input
                  type="number"
                  value={this.state.heightCM}
                  onChange={this.handleHeightCMChange}
                  name="heightFeet"
                  className="heightFeet"
                  min="0"
                  max="8"
                />
              </div>
            </div>
          )}
          <div className="inputwrap">
            <label className="label">Age in years</label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
              className="age"
              name="age"
              min="0"
              max="120"
            />
          </div>
          <button type="button" onClick={() => this.calculateBMR()}>
            Calculate BMR
          </button>
          {resultBMR}
          {this.state.showMe ? (
            <div className="workout">
              <div className="inputwrap">
                <label className="label">Workout in a Week</label>
                <select
                  value={this.state.activity}
                  onChange={this.handleActivityChange}
                  className="activity"
                  name="activity"
                >
                  <option value="">Select your Activity</option>
                  <option value="1.2">
                    Sedentary (Very little or no exercise, and desk job)
                  </option>
                  <option value="1.375">
                    Lightly Active (Light exercise 1 to 3 days per week)
                  </option>
                  <option value="1.55">
                    Moderately Active (Moderate exercise 3 to 5 days per week)
                  </option>
                  <option value="1.725">
                    Very Active (Heavy exercise 6 to 7 days per week)
                  </option>
                  <option value="1.9">
                    Extremely Active (Very intense exercise, and physical job,
                    exercise multiple times per day)
                  </option>
                </select>
              </div>
              <button type="button" onClick={() => this.calculateCalories()}>
                Calculate Calories
              </button>
              {resultCalories}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}




export default Bmrcl