export default function ProfileCard({ name, address, phone, pfp }) {
    return (
      <div className="card">
        <div className="atas">
          <img src={pfp} alt="" />
          <p>{name}</p>
        </div>
        <div className="bawah">
          <div>
            <img src="/icon/rumah-logo.png" className="icon" />
            <p>{address}</p>
          </div>
  
          <div>
            <img src="/icon/ic_baseline-whatsapp.png" className="icon" />
            <a href={`https://wa.me/${phone}`}>{phone}</a>
          </div>
        </div>
      </div>
    );
  }
  