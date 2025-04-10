import logo from './logo.svg';
import './App.css';

let name = "kavy"
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Kavy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
        </div>
      </div>
      <div className="mb-2 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-7">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <h2> This is kavy's page</h2>
      <ol type="i">
        <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor exercitationem asperiores
          recusandae. Minus doloribus ea, eligendi iure magnam magni ad illum mollitia corporis facere impedit, et
          voluptates reiciendis unde quidem neque nobis fugiat maxime error, harum ex rem amet explicabo.
        </p>
      </ol>
      <div class="box">
        This is box for view that in this box shadow added
      </div>
      <footer >
        <p>&copy; 2024 Gujarat Tourism. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
