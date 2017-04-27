import React from 'react';
import            '../Elem.css';

class ElemList extends React.Component
{
    Change()
    {
        this.props.penis(this.props.nb, this.props.index);
    }

    Goto = event =>
    {
        this.Change();
    }

    render()
    {
        return(
            <div>
                <p onClick={e => this.Goto(e)} className="ButtonNone">
                    <button className="ButtonNone">
                        <img src={this.props.obj.iconePath} alt={this.props.obj.alt} width="40px" height="40px"></img>
                    </button>
                    {this.props.obj.name}
                </p>
            </div>
        )
    }
}

export default ElemList;