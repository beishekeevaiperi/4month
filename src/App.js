import './App.css';

function Title() {
  return (
      <h1>Заголовок</h1>
  );
}

function Header(){
  return (
    <div>
      <Title/>
    </div>
    )
}

function Content (){
  return(
    <div>
    <Title/>
  </div>
  )
}

function Footer(){
  return(
    <div>
      <Title/>
    </div>
  )
}

function App() {
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )  
}


export default App;
