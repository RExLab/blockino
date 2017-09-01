'use strict';
        /** Create a namespace for the application. */
var Blockino = Blockino || {};
Blockino.toolbox_string = '<xml>' + 
 '  <sep></sep>' + 
 '    <category name="logic">' + 
 ' <block type="controls_if"></block>' + 
 ' <block type="logic_compare"></block>' + 
 ' <block type="logic_operation"></block>' + 
 ' <block type="logic_negate"></block>' + 
 ' <block type="logic_boolean"></block>' + 
 ' <block type="logic_null"></block>' + 
 ' <block type="logic_ternary"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="loops">' + 
 ' <block type="controls_repeat_ext">' + 
 '            <value name="TIMES">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">10</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="controls_whileUntil"></block>' + 
 ' <block type="controls_for">' + 
 '            <value name="FROM">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1</field>' + 
 '                </block>' + 
 '            </value>' + 
 '            <value name="TO">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">10</field>' + 
 '                </block>' + 
 '            </value>' + 
 '            <value name="BY">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="controls_flow_statements"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="math">' + 
 ' <block type="math_number"></block>' + 
 ' <block type="math_arithmetic"></block>' + 
 ' <block type="math_single"></block>' + 
 ' <block type="math_trig"></block>' + 
 ' <block type="math_constant"></block>' + 
 ' <block type="math_number_property"></block>' + 
 ' <block type="math_change">' + 
 '            <value name="DELTA">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="math_round"></block>' + 
 ' <block type="math_modulo"></block>' + 
 ' <block type="math_constrain">' + 
 '            <value name="LOW">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1</field>' + 
 '                </block>' + 
 '            </value>' + 
 '            <value name="HIGH">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">100</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="math_random_int">' + 
 '            <value name="FROM">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1</field>' + 
 '                </block>' + 
 '            </value>' + 
 '            <value name="TO">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">100</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="math_random_float"></block>' + 
 ' <block type="base_map"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="text">' + 
 ' <block type="text"></block>' + 
 ' <block type="text_join"></block>' + 
 ' <block type="text_append">' + 
 '            <value name="TEXT">' + 
 '                <block type="text"></block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="text_length"></block>' + 
 ' <block type="text_isEmpty"></block>' + 
 ' <!--block type="text_trim"></block Need to update block -->' + 
 ' <!--block type="text_print"></block Part of the serial comms -->' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="variables">' + 
 ' <block type="variables_get"></block>' + 
 ' <block type="variables_set"></block>' + 
 ' <block type="variables_set">' + 
 '            <value name="VALUE">' + 
 '                <block type="variables_set_type"></block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="variables_set_type"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="functions" custom="PROCEDURE"></category>' + 
 '    <sep></sep>' + 
 '    <category name="io">' + 
 ' <block type="io_digitalwrite">' + 
 '            <value name="STATE">' + 
 '                <block type="io_highlow"></block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="io_digitalread"></block>' + 
 ' <block type="io_builtin_led">' + 
 '            <value name="STATE">' + 
 '                <block type="io_highlow"></block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="io_analogwrite"></block>' + 
 ' <block type="io_analogread"></block>' + 
 ' <block type="io_highlow"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="time">' + 
 ' <block type="time_delay">' + 
 '            <value name="DELAY_TIME_MILI">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">1000</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="time_delaymicros">' + 
 '            <value name="DELAY_TIME_MICRO">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">100</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="time_millis"></block>' + 
 ' <block type="time_micros"></block>' + 
 ' <block type="infinite_loop"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="motors">' + 
 ' <block type="servo_write">' + 
 '            <value name="SERVO_ANGLE">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">90</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="servo_read"></block>' + 
 '    </category>' + 
 '    <sep></sep>' + 
 '    <category name="comms">' + 
 ' <block type="serial_setup"></block>' + 
 ' <block type="serial_print"></block>' + 
 ' <block type="text_prompt_ext">' + 
 '            <value name="TEXT">' + 
 '                <block type="text"></block>' + 
 '            </value>' + 
 ' </block>' + 
 '    </category>' + 
 '    <category name="displays">' + 
 '        ' + 
 ' <block type="lcd_clear"></block>' + 
 ' <block type="lcd_escreve">' + 
 '            <value name="lcd_string">' + 
 '                <block type="text"></block>' + 
 '            </value>' + 
 ' </block>' + 
 ' <block type="lcd_posicao">' + 
 '            <value name="linha">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">0</field>' + 
 '                </block>' + 
 '            </value>' + 
 '            <value name="coluna">' + 
 '                <block type="math_number">' + 
 '                    <field name="NUM">0</field>' + 
 '                </block>' + 
 '            </value>' + 
 ' </block>       ' + 
 '    </category>' + 
 '    <category name="sensors">' + 
 '        ' + 
 ' <block type="dht11_read"></block>' + 
 ' <block type="dht11_value"></block>' + 
 '               ' + 
 '    </category>' + 
 '</xml>' ;
        
        
       