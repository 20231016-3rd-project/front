import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle";
import plus from "../../assets/images/plus.png";
import search2 from "../../assets/images/search.png";
import Admin from "../../assets/images/admin.png";

const AdminHeader = () => {
  return (
    <div>
       <Set.AdminHeader>
        <Set.TextBox>
          <h1>Welcome,Back Admin!</h1>
          <p>here's what's happening with your store today.</p>
        </Set.TextBox>

        <Set.ProfileBox>

        <div className="create">
          <h1>Create</h1>
        </div>

        <div className="icon">
          <img src={search2} alt="" />
        </div>

        <div className="icon">
           <img src={plus} alt="" />
        </div>

        <div className="profile">
          <img src={Admin} alt="어드민 프로필" />
        </div>
        </Set.ProfileBox>
      </Set.AdminHeader>
    </div>
  )
}

export default AdminHeader
