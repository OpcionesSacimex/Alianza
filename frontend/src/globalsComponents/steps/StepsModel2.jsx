import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { PanelCenter } from "../panels/PanelCenter";
export const StepsModel2 =(item, itemIndex,activeIndex, setActiveIndex)=>{
    const isActiveItem = activeIndex === itemIndex;
    const backgroundColor = isActiveItem ? 'var(--yellow-300)' : 'var(--surface-b)';
    const textColor = isActiveItem ? 'var(--surface-b)' : 'var(--text-color-secondary)';

    return (
        <div className="mt-8">
            <PanelCenter>
            <span className="mb-5 icon-bounce shadow-2 inline-flex align-items-center justify-content-center align-items-center border-circle border-primary h-8rem w-8rem z-1 cursor-pointer mt-6"
            style={{ backgroundColor: backgroundColor, color: textColor, marginTop: '150px' }}
            onClick={() => setActiveIndex(itemIndex)}>
                {
                    item.icon?<FontAwesomeIcon icon={item.icon} className=" buttonsGreen  text-6xl" />:<></>
                }
            </span>
            <label className="p-fluid text-black text-2xl">{item.label}</label>
            </PanelCenter>
            
        </div>
        
        
    );
}