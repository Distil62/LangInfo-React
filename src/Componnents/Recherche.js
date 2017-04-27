import React from 'react';
import Elem from './ElemList';

class Rechercher extends React.Component
{

    Goto(index, nb)
    {
        super.Goto(index, nb);
    }
    render()
    {
        var indent = [];
        for (var i = 0; i !== this.props.long; i++)
        {
            indent.push(React.createElement("div",
                                            {key: i.toString(), className: "elemList"},
                                            <Elem obj={this.props.obj[this.props.keyArray[i]]} index={this.props.keyArray[i]} nb={i} penis={this.props.penis} />
                                            ));
        }
        return (
            <div id="Menu" className="DropMenu" hidden>
                <div>
                        {indent}
                </div>
            </div>
        )
    }
}

export default Rechercher;