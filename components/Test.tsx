import { useEffect, useState } from "react"

function CodemenToast({children, className, timeout}: {children: React.ReactNode, className: string, timeout: number}) {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        if(isVisible) {
            setTimeout(() => {
                setIsVisible(false);
            }, timeout);
        }
    }, [isVisible])
    return (
        <div onClick={() => setIsVisible(false)} className={`fixed bottom-0 right-0 m-5 bg-slate-500 px-4 py-2 rounded-md cursor-pointer ${className} ${!isVisible && "hidden"}`}>{children}</div>
    )
}

export {CodemenToast}