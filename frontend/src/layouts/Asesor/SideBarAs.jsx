
import { Sidebar } from 'primereact/sidebar';
import { URLStorage } from '../../utils/URLBackend';
import { PanelMenu } from 'primereact/panelmenu';
export const SideBarAS = ({visible=false,setVisible})=>{
    const logo = `${URLStorage}/img/logo.png`

    const menu = [
        {
            label:"Convenios",
            items:[{
                label:"Todos mis convenios"
            }]
        },
        {
            label: "Clientes",
            items: [
                {
                    label:"Mis clientes"
                }
            ]
        }
    ]
    return (
        <>
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div>
                <img src={logo} height="50px" width="100%"></img>
            </div>
            <div>
                <PanelMenu model={menu}></PanelMenu>
            </div>
        </Sidebar>
        </>
    )
}