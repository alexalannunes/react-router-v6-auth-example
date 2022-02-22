import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.user) {
    return <p>You are not logged in</p>;
  }

  return (
    <div>
      Welcome {auth.user}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        sign out
      </button>
    </div>
  );
};
export { AuthStatus };
