import React, { Component } from "react";
import Modal from 'react-modal';
import "./App.css";
import Header from "./header"

class App extends Component{
    constructor(){
        super();
        this.state = {todos: []};
    }

    addTodo = event => {
        event.preventDefault(); //untuk mencegah data yang belum di proses

        let jam = this.refs.jam.value;
        let aktivitas = this.refs.aktivitas.value;

        this.state.todos.push({jam,aktivitas});
        this.setState({todos: this.state.todos});

        this.refs.formulir.reset();
        
    };

    removeTodo = i => {
        this.state.todos.splice(i,1); //splice untuk mengedit dan menghapus
        this.setState({todos: this.state.todos});
    };

    editTodo = (i) => {
        //let jam = this.refs.jam.value;
        //let aktivitas = this.refs.aktivitas.value;

        let jam = this.refs.jam.value;
        let aktivitas = this.refs.aktivitas.value;

        this.refs.jam.focus();
        this.refs.formulir.reset();

        

        
        this.state.todos.splice(i,1);
    }

    
    render(){
        return (
            
            <div>
                <br/>
                <div className="App">
                    <Header />
                </div>
                <form ref="formulir" className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <input
                        type="time"
                        className="form-control"
                        ref="jam"
                        placeholder="jam aktivitas"
                        />
                    <input
                    type="text"
                    className="form-control"
                    ref="aktivitas"
                    placeholder="jenis aktivitas"
                    />
                    </div>
                    <div className="form-group mb-2">
                    <button onClick={this.addTodo} className="btn btn-info">
                        simpan
                    </button>
                    </div>
                </form>

                <hr/>
         
             


            <div>
            <ul className="list-group">
                {this.state.todos.map((data, i) => (
                <li className="list-group-item" key={i}>
                    <div>
                        {data.jam} : {data.aktivitas}
                        <button onClick={() => this.editTodo(i)}
                        className="btn btn-outline-primary mx-sm-3 mb-2">Edit</button>
                        <button onClick={() => this.removeTodo(i)}
                        className="btn btn-outline-danger mx-sm-3 mb-2">Hapus</button>
                    </div>
                </li>
                
                 ))}
            </ul>
            </div>
            </div>
        );
    }
}

export default App;
