"use client"
import { useCounterStore, usePostStore } from "../../store/index";
import { useEffect } from "react";
import { useCodemenClipboard, CopyButton } from "codemen-clipboard"

export default function JobsPage() {
    const { increasePopulation, counter, resetCounter } = useCounterStore((state: any) => state)
    const { fetch, post } = usePostStore((state: any) => state);
    const { copy, copiedItem, copiedItems, clearAll, clearAllCopiedItems, clearCopiedItem } = useCodemenClipboard();

    useEffect(() => {
        fetch();
    }, [])

    console.log(copiedItems, copiedItem)
    return (
        <div>
            <h1 className="mb-10">Total Count: <span className="font-bold text-2xl text-custom_orange">{counter}</span></h1>
            <button className="bg-gray-100 text-black p-2 rounded-lg me-5" onClick={increasePopulation}>Increase Counter</button>
            <button className="border-[1px] text-white bg-gray-500 p-2 rounded-lg me-5" onClick={resetCounter}>Reset Counter</button>
            <button className="me-4" onClick={() => copy("HI there")}>COPY</button>
            <button className="me-4" onClick={() => clearAll()}>clearAll</button>
            <button className="me-4" onClick={() => clearAllCopiedItems()}>clearAllCopiedItems</button>
            <button className="me-4" onClick={() => clearCopiedItem()}>clearCopiedItem</button>
            <CopyButton className="p-1" onClick={() => copy("ji")} />
        </div>
    )
}