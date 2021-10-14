
import './User.css'
function User(props){
    return (
        <div className="container-user">
            <div className="avatar"><img src={props.avatar_url} /></div>
            <div className="user">
                <p>Name: {props.user}</p>
                <div className="enlaces">  
                    <a className="btn btn-account" href={props.html_url}  target="blank">Account</a>
                    <a className="btn btn-orgs" href={props.organizations_url} target="blank">Api orgs</a>
                    <a className="btn btn-repo" href={props.repos_url} target="blank">Api repo</a>
                 </div>
            </div>
        </div>
    );
}

export default User;