const users = [
    {
        id: "1",
        name: 'Mauricio Henrique',
        email: 'mauriciosh558@gmail.com'
    },
    {
        id: "2",
        name: 'Joyce dos Santos Henrique',
        email: 'joycetrindade@gmail.com'
    }
]

export interface UserDTO {
    id: string;
}

export default {
    Query: {
        users: () => users,
        user:(_: any, data: UserDTO) =>  users.find(user => user.id === data.id)
    }
}