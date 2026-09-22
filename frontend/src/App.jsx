import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/user/user")
            .then((response) => {
                console.log(response.data.data);
                setUser(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <h1>All Users</h1>

            <p>Total Users: {user.length}</p>

            {user.map((item) => (
                <div key={item._id}>
                    <h3>{item.username}</h3>
                    <p>{item.gmail}</p>
                </div>
            ))}
        </>
    );
}

export default App;