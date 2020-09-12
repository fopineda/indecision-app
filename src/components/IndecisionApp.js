import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';


export default class IndecisionApp extends React.Component {
    state = {
        options: []
    }
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNumber];
        alert(randomOption);
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options:prevState.options.filter((option) => {
                // keeps in array whatever is evaluated to true
                // in this case, it will remove the option wanting to be removed
                return optionToRemove !== option;
            }) 
        }))
    }
    handleAddOption = (option) => {
        // if there is empty message (it got pass the other layer defense below)
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // if index is found then it is a duplicate item
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    
    componentDidMount() { // automatically ran when components first run/mount
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
            // do nothing
        }     
    }
    componentDidUpdate(prevProps, prevState){ // automatically ran when components update
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() { // automatically ran when (before) component goes away
        console.log('cwu')
    }
    
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in JavaScript\'s random functionality';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}