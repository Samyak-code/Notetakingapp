//import xlsx from 'xlsx';
//import csv, { generate } from 'csv'
//import csvgenerate from 'csv'
//const csv = require('csv-parser');
//const fs = require('fs');



import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
// var wb = csv.readFile("data.csv");
// var wb = csv.readFile("data.csv", {type:"array"});
// console.log(wb);
// fs.readFile('data.csv')
//const Datastore = require('nedb');
//const savefile = () => {
//  const database = new Datastore({ filename: "./database.db", autoload: true });
//  database.loadDatabase();
  
//  database.insert({name: 'sam', status: 'awesome'})
//  document.write(database)
//};
  



//export default savefile


export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    
  };
  
  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    var resultSave = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    localStorage.setItem(this.state , resultSave);
    sessionStorage.setItem(this.state , resultSave);
    return (
        <>
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
      </div>
      </>

    );
    

  }
  
  
}
