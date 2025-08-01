//"use client";

import { Post } from "@repo/db/data"
import {parse} from "marked";
//import { useState } from "react";
//import Image from "next/image";

export async function ViewPost({post} : { post : Post}) {

    //const [likes, setLikes] = useState(post.likes || 0);

    let imageUrl = post.imageUrl;

    if(!imageUrl){
        const req = await fetch("https://dog.ceo/api/breeds/image/random");
        const json = await req.json();
        imageUrl = json.message;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={imageUrl} alt={post.title} width={600} height={400} />

            <div dangerouslySetInnerHTML={{__html: parse(post.content)}} />
            <hr />

        </div>
    );
}

            //<button onClick={() => setLikes(likes + 1)}>
            //    Like {likes}
            //</button>
            // How can I save the likes to the database?