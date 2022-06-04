import './App.css';

function App() {
  return (
    <div className='container'>
      <h4 className='company-name'>Company Name</h4>        
      <h1 className='title'>Welcome to the future of landing pages</h1>
      <p><a className='a__orange'>Company name helps you!</a> Type your email below and keep informed with all the news about our business. Our tool sends you real-time data.</p>

      <div className='form'>
        <input className='email-input' placeholder='Email address' type='text'></input>
        <button className='submit-button'>Submit</button>
      </div>

      <div className='socialbar'>
        <a href='https://github.com/ldequadra'><i class="fa-brands fa-github"></i></a>
        <a href='https://twitter.com/ldequadra'><i class="fa-brands fa-twitter"></i></a>
      </div>
      <p className='footer'>Developed by <a href='https://github.com/ldequadra'>Luiz de Quadra</a></p>
    </div>
  );
}

export default App;
