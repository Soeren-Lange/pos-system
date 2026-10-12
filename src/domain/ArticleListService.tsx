
import {type Dispatch, type ReactElement, type SetStateAction, useEffect, useState} from "react";
import {ArticleList} from "../components/ArticleList.tsx";

let setArticleListHanlde: Dispatch<SetStateAction<ReactElement[]>> | null = null

export function ArticleListService(){

    const [articleList, setArticleList] = useState<ReactElement[]>([])

    useEffect(() =>
    {
        setArticleListHanlde = setArticleList

        return () => {
            setArticleListHanlde = null
        }
    },[])


    return(
        <ArticleList articleList={articleList}/>
    )
}