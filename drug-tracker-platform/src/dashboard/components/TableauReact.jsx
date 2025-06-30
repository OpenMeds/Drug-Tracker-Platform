import { Component } from 'react';

var viz

class TableauReact extends Component {
  componentDidMount() {
    this.initTableau()
  }
 
  initTableau() {
    const vizUrl = 'https://public.tableau.com/views/ShortageTrackerDashboard/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    if(viz){
        viz.dispose();
    }
    viz = new window.tableau.Viz(vizContainer, vizUrl)
  }
 
  render() {
    return (
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}
 
export default TableauReact;