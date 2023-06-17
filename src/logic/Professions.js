import ProfItem from './ProfItem';

function Professions (props) {
    const listProf = props.list.map((item, index) =>
        <ProfItem key={index} prof={item.prof} discr={item.discr} />
    );
    return (
        <div className="prof">
            <h2>{props.title} </h2>
            <ul>
                {listProf}
            </ul>
        </div>
    )
}

export default Professions;