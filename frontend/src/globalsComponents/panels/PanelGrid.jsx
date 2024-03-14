export const PanelGrid=({children, className})=> {
    return (
        <>
            <div className={`flex align-items-center justify-content-center flex-wrap w-full ${className?className:''}`}>
                <div className="grid p-fluid w-full">
                    {children}
                </div>
            </div>
        </>
    )
}
