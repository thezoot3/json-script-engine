import {useContext} from "react";

export const Script = {
    createScript(ScriptLoaderContext) {
        return ({id = "", placeHolder = {}, children}) => {
            const script = useContext(ScriptLoaderContext);
            let data = new Map();
            placeHolder.keys().forEach(i => {
                if(!data.get(i)) { data.set(i, placeHolder[i]) }
            })
            if(children?.length) {
                children.forEach(child => {
                    if(!data.get(child.props.placeHolderId)) { data.set(child.props.placeHolderId, child)}
                })
            } else {
                if(!data.get(children.props.placeHolderId)) { data.set(children.props.placeHolderId, children)}
            }

        }
    },
};
