import { IonButton } from "@ionic/react"

interface IdentifiableButtonProps extends React.ComponentProps<typeof IonButton>
{
    id: string,
    callback: (id: string) => void
}

const IdentifiableButton: React.FC<IdentifiableButtonProps> = ({id, callback, children, ...passthroughProps}: IdentifiableButtonProps) => 
{
    
    return  <IonButton onClick={()=>{callback(id)}} {...passthroughProps}>
                {children}
            </IonButton>
}

export default IdentifiableButton