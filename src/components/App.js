import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import DirectoriesList from './DirectoriesList';
import NotesContent from './NotesContent';
import NoteDetails from "./NoteDetails";
import Modal from './Modal';
import NoteModal from './NoteModal';
import history from '../history';

class App extends React.Component{
    render() {
        return (
            <div className="ui container" style={{border: "1px solid black"}}>
                <Router history={history}>
                <div className="ui block header">
                    <Header />
                </div>
                    <div className="ui grid" >
                        <div className="row">
                            <div className="two wide column">
                                <SideBar/>
                            </div>
                            <div className="three wide column" style={{border: "2px solid black"}}>
                                <Route path="/" component={DirectoriesList}/>
                            </div>
                            <div className="eleven wide column">
                                <div style={{textAlign: "right", marginRight: "10px"}}>
                                    <SearchBar/>
                                </div>
                                <div>
                                    <Switch>
                                        <Route path="/directories/new" exact component={Modal}/>
                                        <Route path="/directories/:id/notes/new" exact component={NoteModal}/>
                                        <Route path="/directories/:id/notes/:id" component={NoteDetails}/>
                                        <Route path="/directories/:id" exact component={NotesContent}/>
                                    </Switch>
                                </div>
                            </div>

                            </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;