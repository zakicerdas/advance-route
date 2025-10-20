import { NavLink, Outlet } from 'react-router-dom';

function Dashboard() {

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="flex">
                    <aside className="w-64  p-6">
                        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
                        <nav className="flex flex-col gap-2">
                            <NavLink
                                to="profile"
                                end
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md block hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`
                                }
                            >
                                Profile
                            </NavLink>


                            <NavLink
                                to="settings"
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md block hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`
                                }
                            >
                                Settings
                            </NavLink>
                        </nav>
                    </aside>
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;