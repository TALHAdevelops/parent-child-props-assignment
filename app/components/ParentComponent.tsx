import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    let name = "Muhammad Talha";
    let position = "Front-End Developer";
    let age = 18;
    let status = "Learning"

    return (
        <div className="mt-10">
            <ChildComponent
             name={name}
             position={position}
             age={age}
             status={status}
             />
        </div>
    )
}

export default ParentComponent
