import React, { Component } from 'react';
import '../App.css';

class Survey extends Component {
    // state = {  }
    render() { 
        const desc = "Thank you for taking the time to help us improve the platform"
        return (
            <div id="survey-page">
                <section id="welcome">
                    <h1 
                        id="title">
                        Music Festival Survey<br/>During Covid-19
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
                        
                        <label id="dropdown-label">Plans for post-covid19</label><br/>
                        <select id="dropdown">
                            <option value="Music Festival">Music Festival</option>
                            <option value="Travel">Travel</option>
                            <option value="Party W/ Friends"> Party W/ Friends!</option>
                            <option value="Spend more time outside">Spend more time outside</option>
                            <option value="Visit Family">Visit Family</option>
                            <option value="Dating! duh">Dating Duh!</option>
                            <option value="start a business">Start a business</option>
                            <option value="Nothing">Nothing</option>
                        </select><br/>

                        <div id="btns">
                            <div id="radio">
                                <p id="best-mf">Best Music Festival</p>
                                <input type="radio" name="raiod-btn" value="Burning_Man"/>
                                <label id="Burning_Man" for="Burning_Man">Burning Man</label><br/>
                                <input type="radio" name="raiod-btn" value="EDC_Las_Vegas"/>
                                <label id="EDC_Las_Vegas" name="EDC_Las_Vegas">EDC Las Vegas</label><br/>
                                <input type="radio" name="raiod-btn" value="Ultra"/>
                                <label id="Ultra" name="raiod-btn">Ultra Music Festival</label><br/>
                            </div>

                            <div id="djs">
                                <p id="Fav-djs">Favorite DJ's</p>
                                <input type="checkbox" name="Deadmau5" value="Deadmau5"/>
                                <label for="Deadmau5">Deadmau5</label><br/>
                                <input type="checkbox" name="W&W" value="W&W"/>
                                <label for="W&W">W&W</label><br/>
                                <input type="checkbox" name="RUFUS DU SOL" value="RUFUS DU SOL"/>
                                <label for="RUFUS DU SOL">RUFUS DU SOL</label><br/>
                                <input type="checkbox" name="Kygo" value="Kygo"/>
                                <label for="Kygo">Kygo</label><br/>
                                <input type="checkbox" name="Jauz" value="Jauz"/>
                                <label for="Jauz">Jauz</label><br/>
                                <input type="checkbox" name="Seven Lions" value="Seven Lions"/>
                                <label for="Seven Lions">Seven Lions</label><br/>
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