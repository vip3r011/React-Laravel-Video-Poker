/**
 * Created by Sandra on 7/3/17.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Video Poker Dashboard</div>

                            <div className="panel-body">
                                <h1>Cool, it's working</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console
if (document.getElementById('example')) {
    ReactDOM.render(<Dashboard />, document.getElementById('example'));
}