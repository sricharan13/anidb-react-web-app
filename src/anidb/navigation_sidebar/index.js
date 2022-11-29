import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const NavigationComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()
    const parts = pathname.split('/')

    const screens = [
        'users'
    ]
    if (currentUser) {
        screens.push('profile')
    }
    else {
        screens.push('login')
    }

    return(
        <div className="list-group">
            <div className={'list-group-item text-center fw-bold'}>
                <span className="fw-bold">ANIDB</span>
            </div>
            <Link to="/" key={'home'} className={`list-group-item text-center ${parts[1] === ''?'active': ''}`}>
                Home
            </Link>
            {
                screens.map((screen) =>
                    <Link to={`/${screen}`} key={screen}
                          className={`list-group-item text-center ${parts[1] === screen?'active': ''}`}>
                        <span className="text-capitalize">{screen}</span>
                    </Link>
                )
            }
        </div>
    )
}

export default NavigationComponent