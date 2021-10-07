

const toolbox_xml = `<Category name="Logic" colour="#5b80a5">
<Block type="controls_if"></Block>
<Block type="logic_compare">
  <field name="OP">EQ</field>
</Block>
<Block type="logic_operation">
  <field name="OP">AND</field>
</Block>
<Block type="logic_negate"></Block>
<Block type="logic_boolean">
  <field name="BOOL">TRUE</field>
</Block>
<Block type="logic_null"></Block>
<Block type="logic_ternary"></Block>
</Category>
<Category name="Loops" colour="#5ba55b">
<Block type="controls_repeat_ext">
  <value name="TIMES">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</Block>
<Block type="controls_whileUntil">
  <field name="MODE">WHILE</field>
</Block>
<Block type="controls_for">
  <field name="VAR" id="for_var_id">i</field>
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
  <value name="BY">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</Block>
<Block type="controls_forEach">
  <field name="VAR" id="Srgeb)y!{cpln7^?pW_^">j</field>
</Block>
<Block type="controls_flow_statements">
  <field name="FLOW">BREAK</field>
</Block>
</Category>
<Category name="Math" colour="#5b67a5">
<Block type="math_number">
  <field name="NUM">0</field>
</Block>
<Block type="math_arithmetic">
  <field name="OP">ADD</field>
  <value name="A">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="B">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
</Block>
<Block type="math_single">
  <field name="OP">ROOT</field>
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">9</field>
    </shadow>
  </value>
</Block>
<Block type="math_trig">
  <field name="OP">SIN</field>
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">45</field>
    </shadow>
  </value>
</Block>
<Block type="math_constant">
  <field name="CONSTANT">PI</field>
</Block>
<Block type="math_number_property">
  <mutation divisor_input="false"></mutation>
  <field name="PROPERTY">EVEN</field>
  <value name="NUMBER_TO_CHECK">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</Block>
<Block type="math_round">
  <field name="OP">ROUND</field>
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">3.1</field>
    </shadow>
  </value>
</Block>
<Block type="math_on_list">
  <mutation op="SUM"></mutation>
  <field name="OP">SUM</field>
</Block>
<Block type="math_modulo">
  <value name="DIVIDEND">
    <shadow type="math_number">
      <field name="NUM">64</field>
    </shadow>
  </value>
  <value name="DIVISOR">
    <shadow type="math_number">
      <field name="NUM">10</field>
    </shadow>
  </value>
</Block>
<Block type="math_constrain">
  <value name="VALUE">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="LOW">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="HIGH">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</Block>
<Block type="math_random_int">
  <value name="FROM">
    <shadow type="math_number">
      <field name="NUM">1</field>
    </shadow>
  </value>
  <value name="TO">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
</Block>
<Block type="math_random_float"></Block>
</Category>
<Category name="Text" colour="#5ba58c">
<Block type="text">
  <field name="TEXT"></field>
</Block>
<Block type="text_join">
  <mutation items="2"></mutation>
</Block>
<Block type="text_append">
  <field name="VAR" id="y.TD]w_E+}wwE^I~I~yM">item</field>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</Block>
<Block type="text_length">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
<Block type="text_isEmpty">
  <value name="VALUE">
    <shadow type="text">
      <field name="TEXT"></field>
    </shadow>
  </value>
</Block>
<Block type="text_indexOf">
  <field name="END">FIRST</field>
  <value name="VALUE">
    <Block type="variables_get">
      <field name="VAR" id="z1%].UZTH]{eZh+Cs4z2">text</field>
    </Block>
  </value>
  <value name="FIND">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
<Block type="text_charAt">
  <mutation at="true"></mutation>
  <field name="WHERE">FROM_START</field>
  <value name="VALUE">
    <Block type="variables_get">
      <field name="VAR" id="z1%].UZTH]{eZh+Cs4z2">text</field>
    </Block>
  </value>
</Block>
<Block type="text_getSubstring">
  <mutation at1="true" at2="true"></mutation>
  <field name="WHERE1">FROM_START</field>
  <field name="WHERE2">FROM_START</field>
  <value name="STRING">
    <Block type="variables_get">
      <field name="VAR" id="z1%].UZTH]{eZh+Cs4z2">text</field>
    </Block>
  </value>
</Block>
<Block type="text_changeCase">
  <field name="CASE">UPPERCASE</field>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
<Block type="text_trim">
  <field name="MODE">BOTH</field>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
<Block type="text_print">
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
<Block type="text_prompt_ext">
  <mutation type="TEXT"></mutation>
  <field name="TYPE">TEXT</field>
  <value name="TEXT">
    <shadow type="text">
      <field name="TEXT">abc</field>
    </shadow>
  </value>
</Block>
</Category>
<Category name="Lists" colour="#745ba5">
<Block type="lists_create_with">
  <mutation items="0"></mutation>
</Block>
<Block type="lists_create_with">
  <mutation items="3"></mutation>
</Block>
<Block type="lists_repeat">
  <value name="NUM">
    <shadow type="math_number">
      <field name="NUM">5</field>
    </shadow>
  </value>
</Block>
<Block type="lists_length"></Block>
<Block type="lists_isEmpty"></Block>
<Block type="lists_indexOf">
  <field name="END">FIRST</field>
  <value name="VALUE">
    <Block type="variables_get">
      <field name="VAR" id="=A?oaB;9;%jm%5ThDH,4">list</field>
    </Block>
  </value>
</Block>
<Block type="lists_getIndex">
  <mutation statement="false" at="true"></mutation>
  <field name="MODE">GET</field>
  <field name="WHERE">FROM_START</field>
  <value name="VALUE">
    <Block type="variables_get">
      <field name="VAR" id="=A?oaB;9;%jm%5ThDH,4">list</field>
    </Block>
  </value>
</Block>
<Block type="lists_setIndex">
  <mutation at="true"></mutation>
  <field name="MODE">SET</field>
  <field name="WHERE">FROM_START</field>
  <value name="LIST">
    <Block type="variables_get">
      <field name="VAR" id="=A?oaB;9;%jm%5ThDH,4">list</field>
    </Block>
  </value>
</Block>
<Block type="lists_getSublist">
  <mutation at1="true" at2="true"></mutation>
  <field name="WHERE1">FROM_START</field>
  <field name="WHERE2">FROM_START</field>
  <value name="LIST">
    <Block type="variables_get">
      <field name="VAR" id="=A?oaB;9;%jm%5ThDH,4">list</field>
    </Block>
  </value>
</Block>
<Block type="lists_split">
  <mutation mode="SPLIT"></mutation>
  <field name="MODE">SPLIT</field>
  <value name="DELIM">
    <shadow type="text">
      <field name="TEXT">,</field>
    </shadow>
  </value>
</Block>
<Block type="lists_sort">
  <field name="TYPE">NUMERIC</field>
  <field name="DIRECTION">1</field>
</Block>
</Category>
<Category name="Colour" colour="#a5745b">
<Block type="colour_picker">
  <field name="COLOUR">#ff0000</field>
</Block>
<Block type="colour_random"></Block>
<Block type="colour_rgb">
  <value name="RED">
    <shadow type="math_number">
      <field name="NUM">100</field>
    </shadow>
  </value>
  <value name="GREEN">
    <shadow type="math_number">
      <field name="NUM">50</field>
    </shadow>
  </value>
  <value name="BLUE">
    <shadow type="math_number">
      <field name="NUM">0</field>
    </shadow>
  </value>
</Block>
<Block type="colour_blend">
  <value name="COLOUR1">
    <shadow type="colour_picker">
      <field name="COLOUR">#ff0000</field>
    </shadow>
  </value>
  <value name="COLOUR2">
    <shadow type="colour_picker">
      <field name="COLOUR">#3333ff</field>
    </shadow>
  </value>
  <value name="RATIO">
    <shadow type="math_number">
      <field name="NUM">0.5</field>
    </shadow>
  </value>
</Block>
</Category>
<sep></sep>
<Category name="Variables" colour="#a55b80" custom="VARIABLE"></Category>
<Category name="Functions" colour="#995ba5" custom="PROCEDURE"></Category>
<sep></sep>
  <Category name="Tools" categorystyle="tools_category">
      <Block type="controls_if" blockStyles="logic_blocks"></Block>
      <Block type="controls_repeat_ext" blockStyle="logic_blocks"></Block>
      <Block type="logic_compare" ></Block>
      <sep gap="64"></sep>
      <label text="Math" web-class="myLabelStyle"></label>
      <Block type="math_number" ></Block>
      <Block type="math_arithmetic" ></Block>
      <sep gap="64"></sep>
      <Block type="text" ></Block>
      <Block type="text_print" ></Block>
      <sep gap="64"></sep>
      <Block type="colour_picker" ></Block>
  </Category>
  <Category name="Text" categorystyle="text_category">
      <Block type="string_length" ></Block>
  </Category>
  <Category name="Math" categorystyle="math_category">
      <Block type="math_change" ></Block>
  
      <Block type="logic_boolean"></Block>

      <Block type="math_number">
        <field name="NUM">42</field>
      </Block>

      <Block type="controls_for">
        <value name="FROM">
        <Block type="math_number">
          <field name="NUM">1</field>
        </Block>
        </value>
      <value name="TO">
      <Block type="math_number">
        <field name="NUM">10</field>
      </Block>
    </value>
    <value name="BY">
      <Block type="math_number">
        <field name="NUM">1</field>
      </Block>
    </value>
  </Block>

  <Block type="math_arithmetic">
    <field name="OP">ADD</field>
    <value name="A">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
    <value name="B">
      <shadow type="math_number">
        <field name="NUM">1</field>
      </shadow>
    </value>
  </Block>
</Category>
  <Category name="Variables" >
    <Category name="Int" categorystyle="variable_category" custom="VARIABLE_TYPED_NUM"></Category>
    <Category name="Text" categorystyle="variable_category" custom="VARIABLE_TYPED_TEXT"></Category>
    <Category name="Boolean" categorystyle="variable_category" custom="VARIABLE_TYPED_BOOLEAN"></Category>
  </Category>
  <Category name="Functions" custom="PROCEDURE"></Category>`


  export default toolbox_xml