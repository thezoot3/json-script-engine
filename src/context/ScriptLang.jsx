import {createContext} from "react";
import PropTypes from "prop-types";
export const ScriptLang = {
    createContext(defaultLang) {
        this.context = createContext(defaultLang);
        return this.context;
    },
    Provider({value, children}) {
        return (
            <this.context.Provider value={value}>
                {children}
            </this.context.Provider>
        )
    }
}
ScriptLang.Provider.propTypes = {
    value: PropTypes.string.isRequired
}
