import React from 'react';
import './App.css';
import Blockly from 'blockly'

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './Blockly';

import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks';
import './generator/generator';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }
 
  generateCode = () => {
    
      // Generate XML code and display it.
      var xmlDom = Blockly.Xml.workspaceToDom(this.simpleWorkspace.current.workspace);
      var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    document.getElementById("code").value = xmlText
    console.log(code);
    console.log(this.simpleWorkspace.current.workspace)
    console.log(JSON.stringify(this.simpleWorkspace.current.workspace.options.languageTree, (key, val) => {
      if (key === 'blockxml') return val.outerHTML;
 
      return val;
    }))
  }

  

// Do not use the advanced playground here because it will create a circular
// dependency with the @blockly/dev-tools package.

  render() {
    
    return (
      <div className="App"  >
        <header className="App-header">
        <textarea
        id="code"
        style={{ height: "100px", width: "800px" }}
        readOnly
      ></textarea>
          <button onClick={this.generateCode}>Start</button>
        </header>
        <div >
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          className="blocky-block"
          initialJson ={
            {
              "kind": "categoryToolbox",
              "contents": [
                {
                  "kind": "category",
                  "name": "Control",
                  "contents": [
                    {
                      "kind": "block",
                      "type": "controls_if"
                    },
                    {
                      "kind": "block",
                      "type": "controls_whileUntil"
                    },
                    {
                      "kind": "block",
                      "type": "controls_for"
                    }
                  ]
                },
                {
                  "kind": "category",
                  "name": "Logic",
                  "contents": [
                    {
                      "kind": "block",
                      "type": "logic_compare"
                    },
                    {
                      "kind": "block",
                      "type": "logic_operation"
                    },
                    {
                      "kind": "block",
                      "type": "logic_boolean"
                    }
                  ]
                }
              ]
            }
            
          }
          >
            <Category name="Variables" custom="VARIABLE" />
            <Category name="Fields">
              <Block type="test_react_field" />
              <Block type="test_react_date_field" />
            </Category>
            <Category name="Loops">
              <Block type="controls_ifelse" />
              <Block type="controls_repeat_ext">
                <Value name="TIMES">
                  <Shadow type="math_number">
                    <Field name="NUM">10</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="logic_operation" />
              <Block type="logic_ternary" />
            </Category>
            <Category name="Custom">
             <Block type="Welcome" />
            </Category>

          </BlocklyComponent>
        </div>
        
      </div>
    );
  }
}

export default App;
