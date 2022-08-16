import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { getAllUsers, login } from "../../auth/auth";
import Login from "../../components/login/Login";
import { TloginPayload, TsignUpPayload } from "../../components/signup/query";

function LoginPages() {
  const router = useRouter();
  const { data } = useQuery("getalluser", getAllUsers);

  const { mutate, isLoading } = useMutation(login);

  const [errorMessage, setErrorMessage] = useState(false);
  const handleSubmit = (value: TloginPayload) => {
    const verifyUser = data?.find(
      (user: TsignUpPayload) =>
        user.email === value.email && user.passwords === value.passwords
    );
    if (verifyUser) {
      mutate(value);
      router.push("/");
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div>
      {data && (
        <Login
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default LoginPages;
