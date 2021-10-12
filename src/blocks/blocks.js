import Blockly from 'blockly'


Blockly.Blocks['string_length'] = {
    init: function() {
      this.jsonInit({
        "message0": 'length of %1',
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
          }
        ],
        "output": "Number",
        "colour": 160,
        "tooltip": "Returns number of letters in the provided text.",
        "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
      });
    }
  };

Blockly.defineBlocksWithJsonArray([
    // Block for colour picker.
    {
      "type": "colour_picker",
      "message0": "%1",
      "args0": [
        {
          "type": "field_colour",
          "name": "COLOUR",
          "colour": "#ff0000"
        }
      ],
      "output": "Colour",
      "helpUrl": "%{BKY_COLOUR_PICKER_HELPURL}",
      "style": "colour_blocks",
      "tooltip": "%{BKY_COLOUR_PICKER_TOOLTIP}",
      "extensions": ["parent_tooltip_when_inline"]
    },
    // Block for random colour.
    {
      "type": "colour_random",
      "message0": "%{BKY_COLOUR_RANDOM_TITLE}",
      "output": "Colour",
      "helpUrl": "%{BKY_COLOUR_RANDOM_HELPURL}",
      "style": "colour_blocks",
      "tooltip": "%{BKY_COLOUR_RANDOM_TOOLTIP}"
    }
]);

var mathChangeJson = {
  "message0": "change %1 by %2",
  "args0": [
    {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
    {"type": "input_value", "name": "DELTA", "check": "Number"}
  ],
  "previousStatement": null,
  "nextStatement": null,
  // UI look
  "colourPrimary": "#4a148c",
  "colourSecondary":"#AD7BE9",
  "colourTertiary":"#CDB6E9",
  "extensions":["parent_tooltip_extension"],
};

Blockly.Blocks['math_change'] = {
    init: function() {
      this.jsonInit(mathChangeJson);
      // Assign 'this' to a variable for use in the tooltip closure below.
      var thisBlock = this;
      this.setTooltip(function() {
        return 'Add a number to variable "%1".'.replace('%1',
            thisBlock.getFieldValue('VAR'));
      });
      
    }
  };

  Blockly.Extensions.register('parent_tooltip_extension',
      function() {
        // this refers to the block that the extension is being run on
        var thisBlock = this;
        this.setTooltip(function() {
          var parent = thisBlock.getParent();
          return (parent && parent.getInputsInline() && parent.tooltip) ||
            Blockly.Msg.MATH_NUMBER_TOOLTIP;
        });
      });