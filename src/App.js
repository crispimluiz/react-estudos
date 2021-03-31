import Login from './views/Login/index';
import GlobalStyled from './Styled/GobalStyled';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <GlobalStyled />

    </div>
  );
}

export default App;
