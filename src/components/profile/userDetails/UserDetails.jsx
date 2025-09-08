// UserDetails.js
import { Tag } from "@chakra-ui/react";

function UserDetails({ label, value }) {
    return (
        <Tag
            fontWeight="bold"
            sx={{
                backgroundColor: "green.900", 
                color: "white", 
                width: "100%",
                textAlign: "center",
                padding: "8px 0px 15px 10px", 
            }}
        >
            {value}
        </Tag>
    );
}

export default UserDetails;