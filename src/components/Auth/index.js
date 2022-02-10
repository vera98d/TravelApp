import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const Auth = (props) => {
  const [user, loading, error] = useAuthState(authService.getAuth());
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user && !props.restricted) navigate("/team-jo-project-2/provinces");
    if (!user && props.restricted) navigate("/team-jo-project-2");
  }, [user, loading]);
  return props.children;
};
