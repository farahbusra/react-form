import * as React from "react";
import "./App.css";
// import { View } from "react-native";
// import { RadioButton } from "react-native-paper";

// const MyComponent = () => {
//   const [checked, setChecked] = React.useState("first");

//   return (
//     <View>
//       <RadioButton
//         value="first"
//         status={checked === "first" ? "checked" : "unchecked"}
//         onPress={() => setChecked("first")}
//       />
//       <RadioButton
//         value="second"
//         status={checked === "second" ? "checked" : "unchecked"}
//         onPress={() => setChecked("second")}
//       />
//     </View>
//   );
// };

// export default MyComponent;

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [gender, setGender] = React.useState<string | undefined>("");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  // return (
  //   <View>
  //     <RadioButton
  //       value="first"
  //       status={checked === "first" ? "checked" : "unchecked"}
  //       onPress={() => setGender("first")}
  //     />
  //     <RadioButton
  //       value="second"
  //       status={checked === "second" ? "checked" : "unchecked"}
  //       onPress={() => setGender("second")}
  //     />
  //   </View>
  // );

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, gender, age, color);
  };

  return (
    <div className="pa-16">
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Input name="Gender" value={gender} onChange={changeGender} />
        <Input name="Age" value={age} onChange={changeAge} />
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button className="btn-secondary">Clear</button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  );
};
