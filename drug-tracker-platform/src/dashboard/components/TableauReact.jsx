import { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import tableau from 'tableau-api';  

var viz

class TableauReact extends Component {
  componentDidMount() {
    this.initTableau()
  }
 
  initTableau() {
    const vizUrl = 'https://public.tableau.com/views/ShortageTrackerDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
    
    const options = {
      hideTabs: true,
      width: "1000px",
      height: "850px",
      onFirstInteractive: () => {
          const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Dashboard 1");
          const options = {
              ignoreAliases: false,
              ignoreSelection: false,
              includeAllColumns: false
          };/* 
          sheet.getUnderlyingDataAsync(options).then((t) => {
              const tableauData = t.getData();
              let data = [];
              const pointCount = tableauData.length;
              for(let a = 0; a < pointCount; a++ ) {
                  data = data.concat({
                      x: tableauData[a][0].value,
                      y: Math.round(tableauData[a][3].value,2)
                  })
              };
          }) */
      }
    };
    
    const vizContainer = this.vizContainer;
    if(viz){
        viz.dispose();
    }
    viz = new window.tableau.Viz(vizContainer, vizUrl,options)
  }
 
  render() {
    return (
      <div className="justify-center"ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
export default TableauReact;