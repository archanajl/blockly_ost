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
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';
import Theme from '../themes'



Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.blocklyDiv = React.createRef();
        this.toolbox = React.createRef();
    }

    componentDidMount() {
        const {initialJson, initialXml, children, ...rest } = this.props;
        
        this.primaryWorkspace = Blockly.inject(
            this.blocklyDiv.current,
            {
                toolbox: this.toolbox.current,
                theme: Theme,
                trashcan: true,
                ...rest
            },
        );
        //trying to create the toolbox using json
        if (initialJson) {
            Blockly.defineBlocksWithJsonArray(initialJson);
        }
        //this.primaryWorkspace.updateToolbox()
        var ff= [
            {
                "colour": 15,
                "inputsInline": true,
                "tooltip": "Buffer audio frames, and make them accessible to the filterchain.",
                "previousStatement": "SourceSink",
                "nextStatement": "Audio",
                "message0": "abuffer=channel_layout=%1",
                "type": "abuffer",
                "args0": [
                    {
                        "name": "channel_layout",
                        "check": "String",
                        "text": "",
                        "type": "field_input"
                    }
                ]
            }]  ;
        
            Blockly.defineBlocksWithJsonArray(ff);
        
        /*    var workspace = Blockly.inject('blocklyDiv',
                {toolbox: document.getElementById('toolbox')});
        workspace.updateToolbox() */
        /*if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), this.primaryWorkspace);
        }*/
        
       
    }

    get workspace() {
        return this.primaryWorkspace;
    }

    setXml(xml) {
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), this.primaryWorkspace);
    }
      
    render() {
        const { children,initialJson,initialXml } = this.props;
        console.log(children)
        console.log(initialJson)
        console.log(Blockly.Xml.textToDom(initialXml))
        return <React.Fragment>
            <div ref={this.blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={this.toolbox}>
            {children}
            </xml>
        </React.Fragment>;
    }
}

export default BlocklyComponent;
