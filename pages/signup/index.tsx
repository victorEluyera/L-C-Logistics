import { useRouter } from "next/router";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { v4 as uuid } from "uuid";
import { getAllUsers, signup } from "../../auth/auth";
import { TsignUpPayload } from "../../components/signup/query";
import SignUp from "../../components/signup/SignUp";

function SignUpPages() {
  const id = uuid();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(false);

  const { data } = useQuery("getalluser", getAllUsers);

  const { mutate, error, isLoading } = useMutation(signup);
  const handleSubmit = (val: TsignUpPayload) => {
    const checkEmail = data?.find(
      (user: TsignUpPayload) => user.email === val.email
    );
    if (checkEmail) {
      return setErrorMessage(true);
    } else {
      mutate({ ...val, id });
      router.push("/login");
    }
  };
  return (
    <div>
      <SignUp handleSubmit={handleSubmit} errorMessage={errorMessage} />
    </div>
  );
}

export default SignUpPages;
