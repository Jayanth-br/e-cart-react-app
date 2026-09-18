import { useState } from "react";
import DashboardTab from "../components/account-section/DashboardTab";
import OrdersTab from "../components/account-section/OrdersTab";
import AddressesTab from "../components/account-section/AddressesTab";
import ProfileSettingTab from "../components/account-section/ProfileSettings";
import "./Account.css";

const ACCOUNT_TABS = [
    { "id": "dashboard", "label": "Dashboard", "component": DashboardTab },
    { "id": "orders", "label": "Orders", "component": OrdersTab },
    { "id": "addresses", "label": "Saved Addresses", "component": AddressesTab },
    { "id": "settings", "label": "Profile Settings", "component": ProfileSettingTab }
];

function Account() {

    const [activeTabId, setActiveTabId] = useState("dashboard");
    const currentTab = ACCOUNT_TABS.find(tab => tab.id == activeTabId);
    const ActiveComponent = currentTab ? currentTab.component : DashboardTab;

    return (
        <section className="account-section">

            {/* Sidebar Navigation */}
            <aside className="user-account-options">
                <h2 style={{ marginBottom: "10px" }}>My Account</h2>
                <nav className="account-navigation-btns">
                    { ACCOUNT_TABS.map(( tab ) =>  (
                        <button 
                            className={ activeTabId == tab.id ? "nav-btn active" : "nav-btn" }
                            key={tab.id} 
                            onClick={() => setActiveTabId(tab.id)}>
                                {tab.label}
                        </button>
                    )) }
                </nav>
            </aside>

            {/* Dynamic Content Panel */}
            <main className="account-content">
                <ActiveComponent />
            </main>

        </section>
    )
}
export default Account;