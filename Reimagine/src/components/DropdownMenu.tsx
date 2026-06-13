interface MenuProps 
{
    label : string;
}


export default function DropdownMenu({label} : MenuProps)
{
    return (
        <button type="button" id="menu-button">

            <span> {label} </span>
            <img style={{backgroundColor: 'yellow', width: '20px', height: '20px'}}/>
        </button>
    );
}