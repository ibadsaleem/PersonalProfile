    import React from 'react';
    import Contact from './Contact';
    import Education from './Education';
    import Experience from './Experience';
    import './profile.css';
    
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom";

    function Profile() {
        return ( 
    <Router>
        <div id="container">

            <header>
                <div className="quoteoftheday">Profile</div>
                <div className="name">Muhammad Ibad Saleem</div>
            </header>

            <article>

                <div className="quote">
                    <h1>A Coders Life: Roller Coaster Ride</h1>
                </div>

                <div className="quoteby">
                    <h4>Muhammad Ibad Saleem</h4>
                </div>

            </article>

            <footer>

                <div className="skills">
                    <h6>Menu</h6>
                    <ul >
                        <li > <Link className="listmenu" to="/"> Introduction</Link></li>
                        <li > <Link className="listmenu" to="/education" > Education</Link></li>
                        <li > <Link className="listmenu" to="/contact"> Contact</Link></li>
                        <li > <Link className="listmenu" to="/experience"> Professional Experience</Link></li>
                    </ul>
                </div>

                <div className="content">
        <Switch>
            <Route exact path='/'>
                    <p style={{fontSize:17,fontWeight:600}}>A front end web developer, developing websites for last year or so and is being continuously learning new cutting edge technologies. I am undergrad student who is working on its skills to get polish and be ready for real world applications. Hoping to be better everyday :)</p>
            </Route>
            <Route exact path="/education">
                <Education/> 
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
            <Route exact path="/experience">
                <Experience/>
            </Route>
            
        </Switch>
                </div>

            </footer>
        </div>
        </Router>
        )
    }

    export default Profile