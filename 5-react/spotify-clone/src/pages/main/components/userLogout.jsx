import Button from "../../../components/button";

export default function UserLogout({ profile }) {
    return (
        <div className="user-logout">
            <span className="fa fa-user"></span>
            <h3>{profile ? profile.display_name : ""}</h3>
            <Button label="Logout" bg="red" />
        </div>
    )
}