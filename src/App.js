import './App.css';


const App = () => {
  return(
    <div className='App'>
      <header className='App-header'>
        <h1>My Portfolio</h1>
      </header> 
      <main className='App-main'>
        <section className='section-main'>
          <h2>About Me</h2>
          <p>Welcome to my portfolio website! I am a passionate web developer with expertise in React.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact Me</h2>
          <p>You can reach me at abcd_1234@gmail.com</p>
          <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
            <label htmlFor='message'>Message:</label>
            <textarea id='message' name='message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>© 2023 Coder1000</p>
      </footer>
    </div>
  );
};
export default App;
