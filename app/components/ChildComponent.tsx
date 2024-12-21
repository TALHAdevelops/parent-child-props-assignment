const ChildComponent = (props: any) => {
    console.log(props)
    return (
        <div>
            <h1 className="text-7xl text-red-700">{props.name}</h1>
            <h2 className="text-5xl text-lime-700">{props.position}</h2>
            <h3 className="text-5xl text-amber-700">{props.age}</h3>
            <h4 className="text-5xl text-blue-700">{props.status}</h4>

        </div>
    )
}

export default ChildComponent
