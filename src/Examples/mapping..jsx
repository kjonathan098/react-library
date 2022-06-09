
// This is like doing a For of Loop for an array


const usersList = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 22223' },
    { id: 4, name: 'User 4' },
    { id: 5, name: 'User 5' }
]

const Users = () => {
    return (
        <div>
            <h1>Users List</h1>
            <div>
                {
                    usersList.map((item) => {
                        return <h2 key={item.id}>{item.name}</h2>
                    })
                }
            </div>
        </div>
    )
}



export default Users;