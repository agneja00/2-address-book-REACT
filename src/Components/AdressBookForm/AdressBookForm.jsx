import Input from "../Input/Input";
import { useState } from "react";

const AdressBookForm = (props) => {

    const [firstName, setFirstNameValue] = useState("")

    const [lastName, setLastNameValue] = useState("")

    const [phoneNumber, setPhoneNumber] = useState("")

    const handleChangeFirstName = (firstName) => {
        setFirstNameValue(firstName)
    }

    const handleChangeLastName = (lastName) => {
        setLastNameValue(lastName)
    }

    const handleChangePhoneNumber = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
    }

    // nustatome inputo reiksmes

    const handleClick = () => {
        const user = {
            name: firstName,
            surname: lastName,
            phone: phoneNumber,
        }
        console.log(user)

        if (props.onSubmit) {
            props.onSubmit(user)
        }
    }

    //- paspaudus onClick suformuojamas objektas, kuris turi vardą, pavardę ir telefono numerį ir jis sunčiamas į aukštesnį scope.

    return (
        <div>
            <Input type="text" value={firstName} name="firstName" label="First Name: " onChange={handleChangeFirstName} />
            <Input type="text" value={lastName} name="lastName" label="Last Name: " onChange={handleChangeLastName} />
            <Input type="phone" value={phoneNumber} name="phoneNumber" label="Phone Number: " onChange={handleChangePhoneNumber} />
            <button onClick={handleClick}>Submit</button>
        </div>
    )

}

export default AdressBookForm;