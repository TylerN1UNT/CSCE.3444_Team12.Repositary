import { ReactNode } from "react"
import { Redirect } from "react-router"

interface AuthenticatedRouteProps
{
    authenticationCallback: () => boolean,
    unauthenticatedRedirectURL: string,
    children: ReactNode
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({authenticationCallback, unauthenticatedRedirectURL, children} : AuthenticatedRouteProps) => 
{
    return (authenticationCallback() ? children : <Redirect to={unauthenticatedRedirectURL}/>)
}

export default AuthenticatedRoute