import React from 'react';
import UserComponent from './UserComponent';
import './FormComponent.css';

class FormComponent extends React.Component {
    state = {
        isEditOn: this.props.EditUser,
        nameInput: "",
        lastNameInput: "",
        emailInput: "",
        phraseInput: ""
    }

    onSave = (e) => {
        console.log(this.state.isEditOn);
        this.setState({
            isEditOn: false
        });
        if (this.state.isEditOn === false) {
            this.render = () => {
                return (
                    <>
                        <UserComponent
                            name={this.state.nameInput}
                            lastName={this.state.lastNameInput}
                            email={this.state.emailInput}
                            phrase={this.state.phraseInput}
                        />
                    </>
                );
            }
        }
    }

    render() {
        return (
            <>
                <form className='form-container'>
                    <label className='input-container'>Name:
                        <input className='input'
                            type='text'
                            placeholder='Daniel...'
                            value={this.state.nameInput}
                            onChange={(e) => this.setState({ nameInput: e.target.value })}
                        />
                    </label>
                    <label className='input-container'>LastName:
                        <input className='input'
                            type='text'
                            placeholder='Felipe...'
                            value={this.state.lastNameInput}
                            onChange={(e) => this.setState({ lastNameInput: e.target.value })}
                        />
                    </label>
                    <label className='input-container' >Email:
                        <input className='input'
                            type='text'
                            placeholder='hello123@email.com...'
                            value={this.state.emailInput}
                            onChange={(e) => this.setState({ emailInput: e.target.value })}
                        />
                    </label>
                    <label className='input-container'>Company Phrase:
                        <input className='input'
                            type='text'
                            placeholder='Daniel...'
                            value={this.state.phraseInput}
                            onChange={(e) => this.setState({ phraseInput: e.target.value })}
                        />
                    </label>

                </form>
                <button onClick={this.onSave} className='btn'>Save</button>
            </>
        );
    }
}

export default FormComponent;