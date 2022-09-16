
type OscarProps = {
    children: React.ReactNode // React.ReactNode is a type of React Component that can be rendered, we generally use this
}

function Oscar({ children }: OscarProps) {
    return (
        <div className='App'>
            <h1>{children}</h1>
        </div>
    )
}

export default Oscar