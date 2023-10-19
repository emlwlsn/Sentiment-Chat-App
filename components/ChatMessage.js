
import React, { Component } from 'react';

class ChatMessage extends Component {

    render() {
        // positioning the messages in the correct location
        const { position = 'left', message } = this.props;
        const isRight = position.toLowerCase() === 'right';

        // puts active user's messages on one side with other messages on the other
        const align = isRight ? 'text-right' : 'text-left';
        const justify = isRight ? 'justify-content-end' : 'justify-content-start';

        // message box style
        const messageBoxStyles = {
            maxWidth: '70%',
            flexGrow: 0
        };

        // style of messages
        const messageStyles = {
            fontWeight: 500,
            lineHeight: 1.4,
            whiteSpace: 'pre-wrap'
        };

        return <div className={`w-100 my-1 d-flex ${justify}`}>
        <div className="bg-light rounded border border-gray p-2" style={messageBoxStyles}>
          <span className={`d-block text-secondary ${align}`} style={messageStyles}>
            {message}
          </span>
        </div>
      </div>
    }
}

export default ChatMessage;