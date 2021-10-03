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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['test_react_field'] = function (block) {
    
    console.log(block.getField('FIELD').getText())
    var code = 'The Action is  : ' + block.getFieldValue('FIELD')+ '\n';
    return code
};

Blockly.JavaScript['test_react_date_field'] = function (block) {
    var code = 'Date chosen is : ' + block.getField('DATE').getText() + '\n';
    return code
};

Blockly.JavaScript['Welcome'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    //var value_name = Blockly.JavaScript.valueToCode(block, 'Name', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = block.getField('NAME').getText()
    var text_rule = block.getFieldValue('Rule');
    var value_rule = block.getField('Rule').getText()
    //var value_rule = Blockly.JavaScript.valueToCode(block, 'Class', Blockly.JavaScript.ORDER_ATOMIC);
    //console.log(block.getField('NAME').getText())
    // TODO: Assemble JavaScript into code variable.
    var code = 'Dear ' + value_name + ', \n You have chosen the rule - ' +  value_rule + '...;\n';
    //return 'console.log(' + code + ');\n';
    return code
  };

  Blockly.JavaScript['string_length'] = function(block) {
    // String or array length.
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
        Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
    return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER];
  };