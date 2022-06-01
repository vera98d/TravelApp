import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "./styles.js";

export const Auth = (props) => {
  const [user, loading] = useAuthState(authService.getAuth());
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user && !props.restricted) navigate("/provinces");
    if (!user && props.restricted) navigate("/");
  }, [user, loading, props.restricted, navigate]);
  if (loading) {
    return (
      <Spinner>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
    );
  }
  return props.children;
};
