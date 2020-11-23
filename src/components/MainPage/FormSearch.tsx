import React from "react";

interface IFormSearchProps {
    handleChangeSearch: (searchWord: string) => void;
}

export default function FormSearch(props: IFormSearchProps) {
    return (
        <>
            <div>
                Поиск: <input onChange={(e) => props.handleChangeSearch(e.target.value)} />
            </div>
        </>
    );
}
