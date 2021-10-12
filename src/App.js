/*import React from 'react';
import './App.css';
import DefaultWorkSpace from './workspace/defaultWorkspace'
class App extends React.Component {
  render() {
    return <DefaultWorkSpace></DefaultWorkSpace>
  }
}
export default App;*/


import React, {Component} from 'react';
import Blockly from 'blockly';
import './App.css'
import './blocks/blocks'
import './generator/generator'
import Theme from './themes'
import {antheasia_pricing_xml} from './toolbox/antheasia_pricing_xml'

const toolbox = `
      <xml id="toolbox" style="display: none">      
      </xml>`
  const flyoutContents = antheasia_pricing_xml
  /*`<xml id="toolbox" style="display: none"><category name="Variables" custom="VARIABLE"></category>
  <category name="Functions" custom="PROCEDURE"></category>
  </xml>`*/

  var workspace = null

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      workspace: null
    }


  }

  generateCode = () => {
    
    // Generate XML code and display it.
    var xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = xmlText
  
    console.log(JSON.stringify(workspace.options.languageTree, (key, val) => {
      if (key === 'blockxml') return val.outerHTML;

      return val;
    }))
}

    componentDidMount() {
      
      var blocklyArea = document.getElementById('blocklyArea');
      var blocklyDiv = document.getElementById('blocklyDiv');
      workspace  = Blockly.inject(blocklyDiv,
          {
            toolbox: toolbox,
            theme:Theme
          }
          );
      this.setState({workspace})
      var onresize = function(e) {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
          x += element.offsetLeft;
          y += element.offsetTop;
          element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(workspace);
      };
      window.addEventListener('resize', onresize, false);
      onresize();
      Blockly.svgResize(workspace);
      // To update the Toolbox dynamically
       workspace.updateToolbox(flyoutContents)
      var flyoutWorkspace = workspace.getFlyout().getWorkspace();
      flyoutWorkspace.addChangeListener(this.myUpdateFunction);
      workspace.addChangeListener(this.myUpdateFunction())
    }

    myUpdateFunction =( event) => {
      console.log('inside')
      var xmlDom = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
    var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

    var code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById("code").value = xmlText

    }

    render = () => {
        return (
            <div className="App">
              <div className="row">
                <div className="column">
                  <div className="App-header">
                    <textarea id="code" style={{ height: "100px", width: "800px" }} readOnly></textarea>
                    <button onClick={this.generateCode}>Start</button>
                  </div>
                </div>
                <div className="column">
                  <div className="app-body">
                    <div id="blocklyContainer" style={{"position": "absolute" }}>
                        <div id="blocklyArea">                
                        </div>

                    </div>
                    <div id="blocklyDiv" style={{"position": "absolute"}}></div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default App;
