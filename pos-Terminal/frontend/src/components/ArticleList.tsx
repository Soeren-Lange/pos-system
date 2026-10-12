import type {ReactElement} from "react";


export function ArticleList({articleList}: {articleList: ReactElement[]}) {

    return (<div className="h-10/16" style={{width: 373.5}}>
        <div className="h-full border m-1 border-y-black border-x-black rounded-lg flex-col flex overflow-x-scroll">{articleList}</div>
    </div>)

}