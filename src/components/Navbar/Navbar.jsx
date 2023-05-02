import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button/Button';
import "./Navbar.scss";

export function Navbar() {

    const handleLogout = () => {
        // Implementacija funkcije za odjavu korisnika
      };

  return (
    <div class="container">
      <nav>
        <ul>
          <Link href="#" class="logo">
            <img src="../../assets/logo/wallet-logo.png" />
            <span class="nav-item">WALLET</span>
          </Link>
            <div>
                <img src="" alt="profilna" />
            </div>
          <li>
            <Link to="#">
              <i class="fas fa-sharp fa-regular fa-grip-vertical"></i>
              <span class="nav-item">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/wallet">
              <i class="fas fa-wallet "></i>
              <span class="nav-item">Wallet</span>
            </Link>
          </li>

          <li>
            <Link to="#">
              <i class="fas fa-database"></i>
              <span class="nav-item">Report</span>
            </Link>
          </li>

          <li>
            <Link to="#">
              <i class="fas fa-thin fa-mobile"></i>
              <span class="nav-item">Support</span>
            </Link>
          </li>

          <li>
            <Link to="#" className="settings">
              <i class="fas fa-cog"></i>
              <span class="nav-item">Setting</span>
            </Link>
          </li>

          <li>
            <Link to="#" class="logout" onClick={handleLogout}>
              <i class="fas fa-sign-out-alt"></i>
              <span class="nav-item">Log out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
