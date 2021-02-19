import './App.css';
import Menu from './components/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Chat from './components/contentWrapper/chat/Chat';
import { Provider } from 'react-redux'; 
import  store  from './redux/storeRedux';
import PostsContainer from './components/contentWrapper/posts/PostsContainer';
import HeadContainer from "./components/header/HeadContainer";
import LoginContainer from "./components/contentWrapper/login/LoginContainer";
import AppContentContainer from "./components/contentWrapper/content/AppContentContainer";


const App = (props) => {  

    return (
    <BrowserRouter>
       <Provider store={store}> 
        <div className="App">
          <div className="wrapper">
              <HeadContainer store={props.store}/>}/>
            <Menu myMenu={props.myMenu} dataActiveUser={props.dataActiveUser}/> 
            <div className="app-content">
              <Route path='/content/:profileId?' render = {() =>  <AppContentContainer store={props.store}/>} />
              <Route path='/chat' render = {() =>  <Chat store={props.store}/>} />
              <Route path='/posts' render = {() =>  <PostsContainer store={props.store}/>} />
              <Route path='/login' render = {() =>  <LoginContainer store={props.store}/>} />
            </div>
          </div>     
        </div> 
      </Provider>
    </BrowserRouter>
      
  );
}

export default App;
