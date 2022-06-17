const DataEmtpyBanner: React.FC<{ title: string }> = (props) => {
    return (
        <div className="bg-amber-100 w-full h-[200px] border-2 border-amber-200 pl-10 pt-5">
            <p>該当する{props.title}が見つかりませんでした。</p>
            <p className="mt-5">ヒント</p>
            <ul className="list-disc">
                <li className="ml-10">条件を変える</li>
                <li className="ml-10">異なるキーワードを使う</li>
                <li className="ml-10">{props.title}がまだ登録されていないかもしれません</li>
            </ul>
        </div>
    )
}

export default DataEmtpyBanner