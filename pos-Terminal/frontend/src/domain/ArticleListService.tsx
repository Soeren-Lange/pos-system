
import {type Dispatch, type ReactElement, type SetStateAction, useEffect, useState} from "react";
import {ArticleList} from "../components/ArticleList.tsx";

let setArticleListHandle: Dispatch<SetStateAction<ReactElement[]>> | null = null

export function ArticleListService(){

    const [articleList, setArticleList] = useState<ReactElement[]>([])

    useEffect(() =>
    {
        setArticleListHandle = setArticleList

        return () => {
            setArticleListHandle = null
        }
    },[])


    return(
        <ArticleList articleList={articleList}/>
    )
}

export function addArticle(eanCode:number){
    
}