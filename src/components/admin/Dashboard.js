import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const users = useSelector((state) => state.users);

    if (!users.isAdmin) return <p>Access denied. Not an Admin!</p>;

  return (
    <div className="dashboard">
    {/* <StyledDashboard> */}
      <div className="dashboard-sidebar">
      {/* <SideNav> */}
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/summary"
        >
          Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          Products
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="blog-list">Blogs</NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/orders/">Orders</NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/users"
        >
          Users
        </NavLink>
      {/* </SideNav> */}
      </div>
      
      <div className="dashboard-content">
      <div className="content-container">
      <main>
        <Outlet />
      </main>
      </div>
      </div>
      
    {/* </StyledDashboard> */}
    </div>
  );
};

export default Dashboard;

// const StyledDashboard = styled.div`
// .dashboard {
//   display: flex;
//   height: 100vh;
// }
//   display: flex;
//   height: 100vh;
// `;

// const SideNav = styled.div`

//   border-right: 1px solid gray;
//   height: calc(100vh - 70px);
//   position: fixed;
//   overflow-y: auto;
//   width: 200px;
//   display: flex;
//   flex-direction: column;
//   padding: 2rem;

  // .dashboard-sidebar {
  //   border-right: 1px solid gray;
  //   height: calc(100vh - 70px);
  //   position: fixed;
  //   overflow-y: auto;
  //   width: 200px;
  //   display: flex;
  //   flex-direction: column;
  //   padding: 2rem;
  // }
//   h3 {
//     margin: 0 0 1rem 0;
//     padding: 0;
//     text-transform: uppercase;
//     font-size: 17px;
//   }

//   a {
//     text-decoration: none;
//     margin-bottom: 1rem;
//     font-size: 14px;
//   }
// `;

// const Content = styled.div`
//   margin-left: 200px;
//   padding: 2rem 3rem;
//   width: 100%;
// `;