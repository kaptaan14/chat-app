import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const handleInputErrors = ({ username, password }) => {
  if (!username) {
    toast.error("Username cannot be empty");
    return false;
  }
  if (!password) {
    toast.error("Password is required");
    return false;
  }

  return true;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {

    const success = handleInputErrors({
      username,
      password,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);

    } catch (error) {
      console.log("Eror")
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
