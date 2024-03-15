import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { PanelCenter } from "../panels/PanelCenter";
export const StepsModel =(item, itemIndex,activeIndex, setActiveIndex)=>{
    const isActiveItem = activeIndex === itemIndex;
    const backgroundColor = isActiveItem ? 'var(--green-800)' : 'var(--surface-b)';
    const textColor = isActiveItem ? 'var(--surface-b)' : 'var(--text-color-secondary)';

    return (
        <div className="mt-6 mb-2">
            <PanelCenter>
            <span className="inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer"
            style={{ backgroundColor: backgroundColor, color: textColor, marginTop: '-25px' }}
            onClick={() => setActiveIndex(itemIndex)}>
                {
                    item.icon?<FontAwesomeIcon icon={item.icon} className="text-xl" />:<></>
                }
            </span>
            <label className="p-fluid text-black">{item.label}</label>
            </PanelCenter>
            
        </div>
        
        
    );
}