export default function Greetings () {
    return (
        <div>
            <h1>ahlan {props.nama}</h1>
            <p>sekolah: {props.sekolah}</p>
            <p>umur: {props.umur}</p>
        </div>
    )
}