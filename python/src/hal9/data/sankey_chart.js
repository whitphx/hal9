{"name": "sankeychart", "function": "sankey_chart", "source": "charts/sankeychart.js", "language": "javascript", "label": "Sankey", "description": "Show the flow with Captain Sankey's signature diagram", "icon": "fa-light fa-diagram-sankey", "build": "true", "params": [{"name": "source", "label": "Source", "single": true, "description": "The column containing the source nodes", "static": false}, {"name": "target", "label": "Target", "single": true, "description": "The column containing the target nodes", "static": false}, {"name": "value", "label": "Value", "description": "The column containing the volume of each arrow", "static": false}, {"name": "palette", "label": "D3 Palette", "description": "Colors to use for the different levels of the y variable. Should be one of the valid d3.js color palettes.", "value": [{"control": "paletteSelect", "value": "schemeTableau10", "values": ["schemeTableau10", "schemeAccent", "schemeDark2", "schemePaired", "schemeSet1", "schemeSet2", "schemeSet3"]}]}, {"name": "fontsize", "label": "Font Size", "description": "The font size in pixels", "value": [{"control": "range", "value": 16, "min": 5, "max": 20}]}, {"name": "marginleft", "label": "Margin left", "description": "The margin on the left", "value": [{"control": "range", "value": 40, "min": 0, "max": 200}]}, {"name": "marginbottom", "description": "The margin on the bottom", "label": "Margin Bottom", "value": [{"control": "range", "value": 10, "min": 0, "max": 200}]}]}