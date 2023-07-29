export default function Avatar({name = "person", imgUrl, gender}: {name?: string, imgUrl: string, gender: string}) {
    return (
        <div className='avatar'>
          <h2 style={{color: gender === "male" ? "blue" : "yellow"}}>{name}</h2>
          <img src={imgUrl} alt="" />
        </div>
    )
}