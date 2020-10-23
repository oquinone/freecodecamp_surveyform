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
                        Corona Virus(Covid)<br/> Non-remote working survey
                    </h1>
                    <p id="description">
                        {desc}
                    </p>
                </section>

                <section id="form-section">
                    <form id="survey-form">
                        <label for="name" id="name-label">Name</label><br/>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter name"
                            required/><br/>

                        <label for="email" id="email-label">Email</label><br/>
                        <input 
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            required/><br/>
                        
                        <label for="age" id="number-label">Age (Optional)</label><br/>
                        <input
                            type="number"
                            id="number"
                            placeholder="Age"
                            max="110"
                            min="13"
                            /><br/><br/>
                        
                        <label id="dropdown-label">Do coworkers keep a 6 feet distance while working?</label><br/>
                        <select id="dropdown">
                            <option value="Music Festival">Yes, everyone is very cautious and aware.</option>
                            <option value="Travel">Yes, but some people don't care.</option>
                            <option value="Party W/ Friends">Yes, but some people don't have a mask on.</option>
                            <option value="Spend more time outside">Sometimes its hard to tell.</option>
                            <option value="Visit Family">No and the managers don't say anything.</option>
                            <option value="Dating! duh">Sometimes becuase managers enforce it.</option>
                            <option value="start a business">No once cares we are just working.</option>
                            <option value="Nothing">I don't pay attention.</option>
                        </select><br/>

                        <div id="btns">
                            <div id="radio">
                                <p id="best-mf">Is the break room clean and do people mantain a 6 feet distance?</p>
                                <input type="radio" name="raiod-btn" value="Burning_Man"/>
                                <label id="Burning_Man" for="Burning_Man">Yes, people try there best.</label><br/>
                                <input type="radio" name="raiod-btn" value="EDC_Las_Vegas"/>
                                <label id="EDC_Las_Vegas" name="EDC_Las_Vegas">Clean, but people don't keep a 6 feet distance.</label><br/>
                                <input type="radio" name="raiod-btn" value="Ultra"/>
                                <label id="Ultra" name="raiod-btn">Not clean and 6 feet of distance is not applied.</label><br/>
                            </div>

                            <div id="djs">
                                <p id="Fav-djs">How satisfied are you with your job?</p>
                                <input type="checkbox" name="Deadmau5" value="Deadmau5"/>
                                <label for="Deadmau5">I love it!</label><br/>
                                <input type="checkbox" name="W&W" value="W&W"/>
                                <label for="W&W">Still getting use to it.</label><br/>
                                <input type="checkbox" name="RUFUS DU SOL" value="RUFUS DU SOL"/>
                                <label for="RUFUS DU SOL">I don't like it.</label><br/>
                                <input type="checkbox" name="Kygo" value="Kygo"/>
                                <label for="Kygo">I had a different idea of how this job would be done.</label><br/>
                                <input type="checkbox" name="Jauz" value="Jauz"/>
                                <label for="Jauz">It's a love hate relationship.</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions">I wish it was ran differently.</label><br/>
                            </div>
                        </div>

                        <p id="comments">Any Comments or Suggestions</p>
                        <textarea placeholder="Enter comments here"></textarea>
                        <button type="submit" id="submit">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default Survey;