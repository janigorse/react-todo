var React = require('react');


var AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var text = this.refs.text.value;

        if (text !== '') {
            this.refs.text.value = '';
            this.props.onSetTodo(text);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="text" placeholder="What do you need to do?" />
                    <button className="button">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;

