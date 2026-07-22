import { ReactNode } from "react"
import { Redirect, Route, useHistory } from "react-router"

interface AuthenticatedRouteProps extends React.ComponentProps<typeof Route>
{
    authenticationCallback: () => boolean,
    unauthenticatedRedirectURL: string,
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({authenticationCallback, unauthenticatedRedirectURL, children, ...passthroughProps} : AuthenticatedRouteProps) => 
{
    
    return  <Route {...passthroughProps}>
                    {authenticationCallback() ? children : <Redirect to={unauthenticatedRedirectURL} />}
            </Route>
    // if(authenticationCallback())
    // {
    //         // Render children inside route
    // }
    // else
    // {
    //     // const history = useHistory()
    //     // history.push(unauthenticatedRedirectURL); // Redirect on unauthenticated

    //     return  <Route>
    //                 <Redirect to={unauthenticatedRedirectURL}/>
    //             </Route>
    // }
}

export default AuthenticatedRoute