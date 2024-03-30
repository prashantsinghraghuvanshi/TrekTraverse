import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>TrekTraverse</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}