import React from 'react';

function ShowUsers(props) {
    return (
        <tbody>
            {props.users.map((user) => {
                return (
                    <tr className = "user">
                        <td key={user.id}>{user.id}</td>
                        <td key={user.firstName}>{user.firstName}</td>
                        <td key={user.lastName}>{user.lastName}</td>
                        <td key={user.dob}> {user.dob} </td>
                    </tr>

                )
            })}
        </tbody>
    )
}

export default ShowUsers;