{"name": "convert", "function": "convert", "source": "transforms/convert.js", "language": "javascript", "label": "Convert", "description": "Apply an expression to the values in a specific column", "icon": "fa-light fa-wand", "build": "true", "params": [{"name": "field", "label": "Column", "single": true, "description": "The name of the column to convert", "static": false}, {"name": "dataType", "label": "Data type", "static": true, "description": "The target data type", "value": [{"control": "select", "value": "", "values": [{"name": "int", "label": "Integer"}, {"name": "float", "label": "Float"}, {"name": "string", "label": "String"}, {"name": "date", "label": "Date"}, {"name": "bool", "label": "Boolean"}, {"name": "time", "label": "Time"}]}]}, {"name": "timeConverter", "label": "Convert Date/Time", "static": true, "description": "an optional parameter to help convert date-times", "value": [{"control": "select", "value": "", "values": [{"name": "seconds_hours", "label": "Seconds to Hours"}, {"name": "hours_seconds", "label": "Hours to Seconds"}, {"name": "hours_miliseconds", "label": "Hours to Miliseconds"}, {"name": "unixDate", "label": "Unix to DateTime"}]}]}, {"name": "charactersToRemove", "label": "Remove Characters", "static": true, "description": "a string of characters to remove", "value": [{"control": "textbox", "value": ""}]}]}