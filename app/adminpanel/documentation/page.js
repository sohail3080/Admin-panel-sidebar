import AdminPanel from "@/Components/adminpanel/adminpanel";
import style from "../adminpanel.module.scss";
export default function Documentation() {
  return (
    <div className={style["container"]}>
      <AdminPanel />

      <div className={style["content"]}>Hello this is Documentation</div>
    </div>
  );
}
