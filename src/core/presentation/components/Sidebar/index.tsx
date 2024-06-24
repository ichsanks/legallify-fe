import { useLocation, NavLink } from 'react-router-dom';
import { Nav, Image } from 'react-bootstrap';

export function Sidebar({ routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };
  return (
    <div className="sidebar" data-color={color}>
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <Image src={require('assets/img/logo-hz-bk.png')} width="200" alt="Legallify" />
        </div>
        <Nav>
          {routes
            .filter((item) => item.name)
            .map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li className={activeRoute(prop.layout + prop.path)} key={key}>
                    <NavLink to={prop.layout + prop.path} className="nav-link" activeClassName="active">
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
        </Nav>
      </div>
    </div>
  );
}
