import {useState} from "react";
import {Form} from "./components/Form.tsx";
import {FormInput} from "./components/FormInput.tsx";
import "./App.css";
import {User} from "../types.ts";

export const PageWithForm = () => {
  // Example
  const [userInfo, setUserInfo] = useState<User | undefined>({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  return (
    <div className="wrapper">
      <div className="user-info">
        <h2>User info:</h2>
        <p>Email: <span>{userInfo?.email}</span></p>
        <p>Age: <span>{userInfo?.age}</span></p>
        <p>Name: <span>{userInfo?.name}</span></p>
        <p>Ext: <span>{userInfo?.phone.ext || "/"}</span></p>
        <p>Number: <span>{userInfo?.phone.number || "/"}</span></p>
      </div>

      <Form initialValues={userInfo} onSubmit={setUserInfo}>
        <FormInput
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
        />
        <FormInput type="number" name="age"/>
        <FormInput type="text" required name="name"/>
        <FormInput type="text" name="phone.ext"/>
        <FormInput type="text" name="phone.number"/>
        <FormInput type="submit" value="Submit"/>
      </Form>
    </div>
  );
};
