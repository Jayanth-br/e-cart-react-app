import { useState } from "react";
import DashboardTab from "./tabs/DashboardTab";
import OrdersTab from "./tabs/OrdersTab";
import AddressesTab from "./tabs/AddressesTab";
import ProfileSettingTab from "./tabs/ProfileSettings";

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
                <h4>My Account</h4>

                <nav>
                    { ACCOUNT_TABS.map(( tab ) =>  (
                        <button 
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