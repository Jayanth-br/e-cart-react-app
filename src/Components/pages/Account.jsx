import { useState } from "react";

function Account() {

    const [selectedOption, setSelectedOption] = useState("dashboard");

    const options = [ "Dashboard", "Orders", "Addresses", "Profile Settings", "Change Password", "Logout" ];

    function onClickAccountOption(optionIdx) {
        setSelectedOption(options[optionIdx]);
    }

    return (
        <section className="account-section">

            <div className="user-account-options">
                <h4>My Account</h4>

                <div>
                    { options.map(( opt, i ) =>  (
                        <li 
                        key={i} 
                        onClick={() => onClickAccountOption(i)}>
                            {opt}
                        </li>
                    )) }
                </div>

            </div>

            <div className="info-section">

        
                { 
                    selectedOption.toLowerCase() == "dashboard" &&  (

                    <>
                        Dashboard
                    </>

                ) }

                {
                    selectedOption.toLocaleLowerCase() == "orders" && (
                        <>
                            Orders
                        </>
                    )
                }

            </div>

        </section>
    )
}
export default Account;