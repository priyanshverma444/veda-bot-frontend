import UserDetails from "./UserDetails";
import { fetchUserData } from '../../../services/userServices';
import { useEffect, useState } from "react";

function UserDetailsSection() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetchUserData().then((data) => {
            if (data) {
                setUserData(data);
            }
        });
    }, []);

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const ageDiff = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDiff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <div className="w-full px-3 py-4 flex flex-col justify-between space-y-3">
            <h1 className="text-3xl font-bold text-green-900 mb-4 text-center">User Details</h1>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <UserDetails className="w-full" label="Username" value={userData.username} />
                <UserDetails className="w-full" label="Email" value={userData.email} />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                <UserDetails className="w-full" label="Gender" value={userData.gender} />
                {userData.dob && (
                    <UserDetails className="w-full" label="Age" value={calculateAge(userData.dob) + " years"} />
                )}
            </div>
        </div>
    );
}

export default UserDetailsSection;