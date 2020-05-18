import React from 'react';
import ReactDOM from 'react-dom';
import history from "../history";

class BaseModal extends React.Component {

    onSubmit = (formValues) => {};

    formComponent = () => {};

    headerName = () => {
        return ''
    };

    render() {
        return ReactDOM.createPortal(
            <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
                <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">{this.headerName()}</div>
                    <div className="actions">
                        {this.formComponent()}
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}
export default BaseModal;