import { Navigate} from 'react-router-dom'

interface Props {
    isAuth : boolean
    children : JSX.Element
}

const ProtectedRoute = ({isAuth, children}:Props) => {
    if(isAuth){
       return children
    }else{
        alert("Please enter details first")
        return (
        <Navigate to={"/"} />
)
    }
}


export default ProtectedRoute

// const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
//     const {user} = <Your-State-Provider>// Redux/Context or even in-memory user
//     const location = useLocation();
//     return !user.isAuthenticated ? (
//       <Navigate to={"/login"} state={{ from: location }} replace />
//     ) : (
//       children
//     );
//   };