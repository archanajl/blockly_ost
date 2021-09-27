/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';

import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';

import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks';
import './generator/generator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }
 
  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    document.getElementById("code").value = code
    console.log(code);
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
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox">
</xml>
      `}>
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />

            <Block type="Welcome" />
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

          </BlocklyComponent>
        </div>
        
      </div>
    );
  }
}

export default App;
