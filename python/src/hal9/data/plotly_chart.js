{"name": "plotly", "function": "plotly_chart", "source": "visualizations/plotlycharts.js", "language": "javascript", "label": "Plotly", "description": "Choose from a variety of Plotly visualizations", "icon": "fa-light fa-chart-simple", "build": "true", "params": [{"name": "x", "label": "x", "description": "The column that determines the x coordinates in the cartesian plane of the marks", "single": true, "value": []}, {"name": "y", "label": "y", "single": true, "description": "The column that determines the y coordinates in the cartesian plane of the marks", "value": []}, {"name": "chartType", "label": "Chart Type", "description": "The chart to be constructed. Currently accepts one of lines, scatter, barChart, fillArea, histogram, twoHistogram", "value": [{"control": "select", "value": "", "values": [{"name": "lines", "label": "Line"}, {"name": "scatter", "label": "Scatter"}, {"name": "barChart", "label": "Bar Chart"}, {"name": "fillArea", "label": "Fill Area Chart"}, {"name": "histogram", "label": "Histogram"}, {"name": "twoHistogram", "label": "2D Histogram"}]}]}, {"name": "dataSizes", "description": "The size of the marks", "label": "Marker Size", "value": [{"control": "number", "value": 5}]}, {"name": "palette", "description": "Colors to use for the different levels of the y variable. Should be one of the valid d3.js color palettes.", "label": "Chart Palette", "value": [{"control": "paletteSelect", "value": "schemeTableau10", "values": ["schemeTableau10", "schemeAccent", "schemeDark2", "schemePaired", "schemeSet1", "schemeSet2", "schemeSet3"]}]}]}