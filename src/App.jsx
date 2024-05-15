import './App.css';
// import man from './assets/right.png';
function App() {
  return (
    <>
    <div>
      <div className="container">
        <header>
          <nav>
            <ul>
              <li> <a href="#">Works</a></li>
              <li> <a href="#">Blog</a></li>
              <li> <a href="#">Contact </a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <div className="left">
                <h1>Hi, I am John, a Creative Technologist</h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="btn">
                Download Resume
                </button>
            </div>
          </section>
          
        </main>
      </div>
    </div>
    </>
  )
}

export default App;

