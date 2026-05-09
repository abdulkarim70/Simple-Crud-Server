import { getUserById } from "@/app/lib/data";


const UserDetailsPage = async ({params}) => {
 const {userid}=await params
 const user= await getUserById(userid)
 console.log(user)
    return (
        <div>
           <h1>Name: {user.name}</h1> 
        </div>
    );
};

export default UserDetailsPage;