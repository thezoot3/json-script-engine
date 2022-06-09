import {createContext, useContext} from "react";
import PropTypes from "prop-types";
export const ScriptLoader = {
    createContext(ScriptLangContext) {
        this.scriptLangContext = ScriptLangContext;
        this.context = createContext({});
        return this;
    },
    Provider({script, children}) {
        const lang = useContext(this.scriptLangContext);
        if(script.lang.contains(lang)) {
            this.script = script.script[lang];
        } else {
            this.script = script.script[script.defaultLang];
        }
        return (
            <this.context.Provider value={this.script}>
                {children}
            </this.context.Provider>
        )
    },
}
ScriptLoader.Provider.propTypes = {
    script: PropTypes.string.isRequired,
}
