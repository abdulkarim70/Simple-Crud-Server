import { getUserById } from "@/app/lib/data";


const UserDetailsPage = async ({params}) => {
 const {userid}=await params
 const user=getUserById(userid)
 console.log(user)
    return (
        <div>
           <h1>This is user details page</h1> 
        </div>
    );
};

export default UserDetailsPage;