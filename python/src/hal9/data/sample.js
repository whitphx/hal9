{"name": "sample", "function": "sample", "source": "transforms/sample.js", "language": "javascript", "label": "Sample", "description": "Trim a dataset down to a random sample of its rows", "icon": "fa-light fa-dice", "build": "true", "params": [{"name": "samplesize", "label": "Sample Percentage", "description": "The size of the sample as a percentage of the size of the input dataframe", "value": [{"control": "range", "value": 50, "min": 1, "max": 100}]}, {"name": "withReplacement", "label": "With Replacement", "description": "Allow or disallow sampling of the same row more than once. Default- True", "value": [{"control": "select", "value": true, "values": [{"name": true, "label": true}, {"name": false, "label": false}]}]}]}