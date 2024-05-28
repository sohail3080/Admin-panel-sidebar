import AdminPanel from "@/Components/adminpanel/adminpanel";
import style from "../adminpanel.module.scss";
export default function Transactions() {
  return (
    <div className={style["container"]}>
      <AdminPanel />

      <div className={style["content"]}>Hello this is Transactions</div>
    </div>
  );
}
