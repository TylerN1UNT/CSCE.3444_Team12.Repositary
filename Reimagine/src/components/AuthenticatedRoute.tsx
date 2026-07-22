import { ReactNode } from "react"
import { Redirect, Route, useHistory } from "react-router"

interface AuthenticatedRouteProps extends React.ComponentProps<typeof Route>
{
    authenticationCallback: () => boolean,
    unauthenticatedRedirectURL: string,
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({authenticationCallback, unauthenticatedRedirectURL, children, ...passthroughProps} : AuthenticatedRouteProps) => 
{
    
    if(authenticationCallback())
        {
            // Render children inside route
        <Route {...passthroughProps}>
            {children}
        </Route>
    }
    else
    {
        // const history = useHistory()
        // history.push(unauthenticatedRedirectURL); // Redirect on unauthenticated

        return <Redirect to={unauthenticatedRedirectURL}/>
    }
}

export default AuthenticatedRoute