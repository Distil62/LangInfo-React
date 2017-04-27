import React  from  'react';
import Lang   from  '../langInfo';
import Static from  '../Static';
import Ico    from  './Ico';
import Search from  './Recherche'
import              '../index.css';

var CurrentKey = 0;
var obj;
var pageInfo;


if (navigator.language === "fr")
{
  obj = Lang.fr;
  pageInfo = Static.infos.fr;
}
else
{
  obj = Lang.en;
  pageInfo = Static.infos.en;
}

class Carte extends React.Component
{

  state = {};
  ref;

  static Goto()
  {
    
  }

  componentWillMount()
  {
    this.ref = this.Change.bind(this)
    this.addCarte();
  }

  Change(index, key)
  {
    CurrentKey = index + 1;
    this.setState(obj[key]);
  }

  addCarte = event =>
  {
    const keyArray = Object.keys(obj);
    if (CurrentKey === keyArray.length)
      CurrentKey = 0;
    const LangActual = keyArray[CurrentKey++];
    this.setState(obj[LangActual]);
  }

  render()
  {
    return(
      <div>
        <div>
        < Search obj={obj} keyArray={Object.keys(obj)} long={Object.keys(obj).length} penis={this.ref} />
      </div>
       <div className="Carte" ref={(div) => this.testDiv = div}>
        <div>
            <div>
              < Ico myProps={this.state} />
              <h3 className="Titre">{pageInfo.Language} : {this.state.name}</h3>
            </div>
            <p className="description">{this.state.description}</p>
          </div>
          <div className="DivButton">
            <button className="Change" onClick={e => this.addCarte(e)}>{pageInfo.Change}</button>
            <a href={this.state.startLink}><button className="GetStarted">{pageInfo.Started}</button></a>
        </div>
      </div>
    </div>
    )
  }
}

export default Carte;