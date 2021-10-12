export const antheasia_pricing_xml = `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <block type="controls_if">
    <value name="IF0">
      <block type="logic_operation">
        <field name="OP">OR</field>
        <value name="A">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get">
                <field name="VAR" id="a0X-zF^s6OFOTrsbC9t%">claimtype</field>
              </block>
            </value>
            <value name="B">
              <block type="text">
                <field name="TEXT">CONST_PROFESSIONAL</field>
              </block>
            </value>
          </block>
        </value>
        <value name="B">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A">
              <block type="variables_get">
                <field name="VAR" id="a0X-zF^s6OFOTrsbC9t%">claimtype</field>
              </block>
            </value>
            <value name="B">
              <block type="text">
                <field name="TEXT">CONST_PROFESSIONAL</field>
              </block>
            </value>
          </block>
        </value>
      </block>
    </value>
    <statement name="DO0">
      <block type="controls_if">
        <value name="IF0">
          <block type="logic_operation">
            <field name="OP">OR</field>
            <value name="A">
              <block type="logic_compare">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="variables_get">
                    <field name="VAR" id="ANp+%RX_hQZckO^iRNTK">BPTaxonomy</field>
                  </block>
                </value>
                <value name="B">
                  <block type="text">
                    <field name="TEXT">CONST_PROFESSIONAL</field>
                  </block>
                </value>
              </block>
            </value>
            <value name="B">
              <block type="logic_compare">
                <field name="OP">EQ</field>
                <value name="A">
                  <block type="variables_get">
                    <field name="VAR" id="ANp+%RX_hQZckO^iRNTK">BPTaxonomy</field>
                  </block>
                </value>
                <value name="B">
                  <block type="text">
                    <field name="TEXT">CONST_PROFESSIONAL</field>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="controls_if">
            <value name="IF0">
              <block type="logic_operation">
                <field name="OP">AND</field>
                <value name="A">
                  <block type="logic_compare">
                    <field name="OP">GT</field>
                    <value name="A">
                      <block type="lists_indexOf">
                        <field name="END">FIRST</field>
                        <value name="VALUE">
                          <block type="variables_get">
                            <field name="VAR" id="58_Wb0*V-xrXKZ]u13G">modifierlist</field>
                          </block>
                        </value>
                        <value name="FIND">
                          <block type="variables_get">
                            <field name="VAR" id="ccJm%eHotznZnmZ}dd7v">modifiercode</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="B">
                  <block type="logic_compare">
                    <field name="OP">GT</field>
                    <value name="A">
                      <block type="lists_indexOf">
                        <field name="END">FIRST</field>
                        <value name="VALUE">
                          <block type="variables_get">
                            <field name="VAR" id="5pn;pt?R|acg@KnqoaSz">procedurelist</field>
                          </block>
                        </value>
                        <value name="FIND">
                          <block type="variables_get">
                            <field name="VAR" id="LPkhrr.*qBD}5:aFu^">procedurecode</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="B">
                      <block type="math_number">
                        <field name="NUM">0</field>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="variables_set">
                <field name="VAR" id="gRE/t!mr~h]Fx*5X3Eq">carriercode</field>
                <value name="VALUE">
                  <block type="procedures_callreturn">
                    <mutation name="carriercodeset"></mutation>
                  </block>
                </value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="to~{=mnz6s2bt#D%D-v">locality_code</field>
                    <value name="VALUE">
                      <block type="procedures_callreturn">
                        <mutation name="localitycodeset"></mutation>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </statement>
      </block>
    </statement>
  </block>
  <block type="variables_get">
    <field name="VAR" id="58_Wb0*V-xrXKZ]u13G">modifierlist</field>
  </block>
  <block type="variables_get">
    <field name="VAR" id="a0X-zF^s6OFOTrsbC9t%">claimtype</field>
  </block>
  <block type="variables_set">
    <field name="VAR" id="58_Wb0*V-xrXKZ]u13G">modifierlist</field>
  </block>
  <block type="variables_get">
    <field name="VAR" id="=A?oaB;9;%jm%5ThDH,4">list</field>
  </block>
  <block type="procedures_defreturn">
    <field name="NAME">carriercodeset</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
  </block>
  <block type="variables_get">
    <field name="VAR" id="ccJm%eHotznZnmZ}dd7v">modifiercode</field>
  </block>
  <block type="logic_compare">
    <field name="OP">EQ</field>
    <value name="A">
      <block type="variables_get">
        <field name="VAR" id="a0X-zF^s6OFOTrsbC9t%">claimtype</field>
      </block>
    </value>
    <value name="B">
      <block type="text">
        <field name="TEXT">CONST_PROFESSIONAL</field>
      </block>
    </value>
  </block>
  <block type="text">
    <field name="TEXT">CONST_PROFESSIONAL</field>
  </block>
  <block type="procedures_defreturn">
    <field name="NAME">localitycodeset</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
  </block>
  <block type="procedures_defnoreturn">
    <field name="NAME">func</field>
    <comment pinned="false" h="80" w="160">Describe this function...</comment>
  </block>
</xml>
`