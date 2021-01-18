import React, { Component } from 'react';
import '../App.css';

class Survey extends Component {
    // state = {  }
    render() { 
        const desc = "Thank you for taking the time to fill out this survey."
        return (
            <div id="survey-page">
                <section id="welcome">
                    <h1 
                        id="title">
                        freeCodeCamp Survey Form
                    </h1>
                    <p id="description">
                        {desc}
                    </p>
                </section>

                <section id="form-section">
                    <form id="survey-form">
                        <div class="basic-info">
                            <label for="name" id="name-label" className="input-desc">Name</label><br/>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter name"
                                required/>
                        </div>

                        <div class="basic-info">
                            <label for="email" id="email-label" className="input-desc">Email</label><br/>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Enter email"
                                required/>
                        </div>
                        
                        <div class="basic-info">
                            <label for="age" id="number-label" className="input-desc">Age <small>(Optional)</small> </label><br/>
                            <input
                                type="number"
                                id="number"
                                placeholder="Age"
                                max="110"
                                min="13"
                                />
                        </div>
                        
                        <div class="basic-info">
                            <label id="dropdown-label">Which option best describes your current role?</label><br/>
                            <select id="dropdown">
                                    <option value="Student">Student</option>
                                    <option value="Full Time Job">Full Time Job</option>
                                    <option value="Full Time Learner">Full Time Learner</option>
                                    <option value="Prefer not to say">Prefer not to say</option>
                                    <option value="Full Time Parent">Full Time Parent</option>
                                    <option value="Full Time Kid">Full Time Kid</option>
                                    <option value="Other">Other</option>
                            </select>
                        </div>

                        <div id="btns" className="basic-info">
                            <div id="radio">
                                <label id="rec">Would you reccommend freeCodeCamp to a friend?</label><br/>
                                <input type="radio" name="raiod-btn" value="Burning_Man"/>
                                <label id="Definitely" for="Definitely" className="btn-text">Definitely</label>
                                <br/>
                                <input type="radio" name="raiod-btn" value="EDC_Las_Vegas"/>
                                <label id="EDC_Las_Vegas" name="EDC_Las_Vegas" className="btn-text">Maybe</label>
                                <br/>
                                <input type="radio" name="raiod-btn" value="Ultra"/>
                                <label id="Ultra" name="radio-btn" className="btn-text">Not sure</label>
                            </div>
                        </div>

                        <div class="basic-info">
                            <label id="feature">What is your favorite feature of freeCodeCamp?</label><br/>
                            <select id="dropdown" placeholder="Select an option">
                                {/* <div> */}
                                    <option value="Student">Challenges</option>
                                    <option value="Full Time Job">Projects</option>
                                    <option value="Full Time Learner">Community</option>
                                    <option value="Prefer not to say">Open Source</option>
                            </select>
                            {/* <br/> */}
                        </div>


                        <div id="btns" class="basic-info">
                            <div id="djs">
                                <label  id="improved">What would you like to see improved? <small>(check all that apply)</small></label><br/>
                                <input type="checkbox" name="Deadmau5" value="Deadmau5"/>
                                <label for="Deadmau5" className="btn-text">Front-end Projects</label><br/>
                                <input type="checkbox" name="W&W" value="W&W"/>
                                <label for="W&W" className="btn-text">Back-end Projects</label><br/>
                                <input type="checkbox" name="RUFUS DU SOL" value="RUFUS DU SOL"/>
                                <label for="RUFUS DU SOL" className="btn-text">Data Visualization</label><br/>
                                <input type="checkbox" name="Kygo" value="Kygo"/>
                                <label for="Kygo" className="btn-text">Challenges</label><br/>
                                <input type="checkbox" name="Jauz" value="Jauz"/>
                                <label for="Jauz" className="btn-text">Open Source Community</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">Gitter help rooms</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">Videos</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">City Meetups</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">Wiki</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">Forum</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions" className="btn-text">Additional Courses</label><br/>
                            </div>
                        </div>
                        <div class="basic-info">
                            <p id="comments">Any Comments or Suggestions</p>
                            <textarea placeholder="Enter comments here"></textarea>
                            <button type="submit" id="submit">Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default Survey;