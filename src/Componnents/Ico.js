import React from 'react';

class Ico extends React.Component
{
    render()
    {
        return (
                <img className="Ico" src={this.props.myProps.iconePath} alt={this.props.myProps.alt} />
        )
    }
}

export default Ico;