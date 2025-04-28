export default function Footballer ({name, club, height, img}) {
    return (
        <div className="p-4 m-4 border-2 border-yellow-700 bg-blue-100 max-w-3xs">
            <img src={img} alt={`this is a foto a potrait of ${name}`} className="w-full"/>
            <p className="text-2xl">{name}</p>
            <hr />
            <p>{club}</p>
            <p>{height}</p>
        </div>
    )
}