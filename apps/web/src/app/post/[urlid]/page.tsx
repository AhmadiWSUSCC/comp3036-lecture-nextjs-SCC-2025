import {posts} from "@repo/db/data"
//import {parse} from "marked";
import {ViewPost} from "./Post";

export default async function Page({params} : {params:{urlid: string}}) {

    const {urlid} = await params;
    
    const post = posts.find(post => post.urlId === urlid);

    if(post == null) {    //if (!post) {
        return <div>Post not found</div>;
    }

    return <ViewPost post={post} />;
}