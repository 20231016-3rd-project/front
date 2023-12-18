import * as Set from "../../pages/adminPage/admin/style/AdminSetStyle";
import plus from "../../assets/images/plus.png";
import search2 from "../../assets/images/search.png";
import Admin from "../../assets/images/admin.png";

const AdminHeader = () => {
  return (
    <div>
       <Set.AdminHeader>
        <Set.TextBox>
          <h1>환영합니다, 관리자님!</h1>
          <p>오늘 귀하의 매장에서 무슨 일이 일어나고 있나요?</p>
        </Set.TextBox>

        <Set.ProfileBox>

        <div className="create">
          <h1>생성하기</h1>
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
