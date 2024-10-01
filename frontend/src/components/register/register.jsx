import { useState } from "react";
import { CustomerForm } from "./customerform";
import { SellerForm } from "./sellerform";

export const Register = () => {
  const [userAccount, setUserAccount] = useState("customer");

  const handleAccountChange = (event) => {
    setUserAccount(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 text-sm mx-auto">
      <h1>Create Your Account</h1>
      <select
        name="useraccount"
        value={userAccount}
        onChange={handleAccountChange}
      >
        <option value="customer">Customer</option>
        <option value="seller">Seller</option>
      </select>
      {userAccount === "seller" ? (
        <SellerForm userAccount={userAccount} />
      ) : (
        <CustomerForm userAccount={userAccount} />
      )}
    </div>
  );
};
