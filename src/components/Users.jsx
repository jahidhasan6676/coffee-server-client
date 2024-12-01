import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-eta-pied.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false
                            });

                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    });
            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CreatedAt</th>
                            <th>Last Login At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No users found.
                                </td>
                            </tr>
                        ) : (
                            users?.map((user, index) => (
                                <tr className="hover:bg-base-200" key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdTime}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td className="flex gap-2">
                                        <button className="btn">E</button>
                                        <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
