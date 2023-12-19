const userTypes = `
    type User {
    username: String
    email: String
    password: String
    isAdmin: Boolean
    user_id:ID
}`;

export const userInputs = `
    input AddUserInput{ 
    username: String
    email: String
    password: String
    isAdmin: Boolean
    },

    input UpdateUserInput{
        user_id:ID,
        username: String
        email: String
        password: String
        isAdmin: Boolean
     }
     ,
     input LoginInput{
        email:String!
        password:String!
     }

    `;

export const userTypesQuery = `
    loginService(user:LoginInput):String
    getUserService:[User]
`;

export const userTypesMutation = `
    signup(user:AddUserInput):[User]
    updatedUserService(user:UpdateUserInput):[User]
    deleteUserService:[User]
`;

export default userTypes;
