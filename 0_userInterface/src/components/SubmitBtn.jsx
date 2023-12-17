import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigation } from "react-router-dom";

const SubmitBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // const a = new FormData();
  // console.log(a);
  return (
    <Button
      variant="dark"
      style={{ width: "8rem" }}
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting" : "Submit"}
    </Button>
  );
};

export default SubmitBtn;
