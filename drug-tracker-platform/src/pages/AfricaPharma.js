import * as React from 'react';
import AfricaDashboard from '../dashboard/AfricaDashboard';
import '../App.css';

import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from '../dashboard/theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function AfricaPharma() {
  return (
      <div className="App">
        <header className="App-header">
          
          <AfricaDashboard idx = {1}/>
        </header>
      </div>
    );
}