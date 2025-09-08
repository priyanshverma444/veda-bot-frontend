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
        <div className="w-full px-3 py-4 flex flex-col justify-between space-y-3 text-center">
            <h1 className="text-3xl font-bold text-green-950 mb-4">User Profile</h1>

            {/* Profile Image */}
            {userData.userImage && (
                <div className="flex justify-center mb-4">
                    <img
                        src={userData.userImage}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-green-300 object-cover"
                    />
                </div>
            )}

            {/* Row 1 */}
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-3 space-y-3 md:space-y-0">
                <UserDetails className="w-full md:w-1/3 text-center" label="Username" value={userData.username} />
                <UserDetails className="w-full md:w-1/3 text-center" label="Email" value={userData.email} />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row md:justify-center md:space-x-3 space-y-3 md:space-y-0">
                <UserDetails className="w-full md:w-1/3 text-center" label="Gender" value={userData.gender} />
                {userData.dob && (
                    <UserDetails className="w-full md:w-1/3 text-center" label="Age" value={calculateAge(userData.dob) + " years"} />
                )}
                {userData.dob && (
                    <UserDetails className="w-full md:w-1/3 text-center" label="Date of Birth" value={new Date(userData.dob).toLocaleDateString()} />
                )}
            </div>

            {/* Row 3 - Address */}
            <div className="flex flex-col md:flex-row md:justify-center">
                <UserDetails
                    className="w-full md:w-2/3 text-center"
                    label="Address"
                    value={`${userData.address || ""}, ${userData.city || ""}, ${userData.pincode || ""}`}
                />
            </div>
        </div>
    );
}

export default UserDetailsSection;
