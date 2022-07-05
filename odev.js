import axios from "axios";
export default async (user_id)=>{
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
    const {data: userPosts}= await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
    user["posts"]=userPosts;
    return user;
}