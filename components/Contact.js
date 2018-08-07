var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className={'contactItem'}>
          <img className={'contactImage'} src={'http://via.placeholder.com/150x150'}/>
          <p className={'contactLabel'}>
            Imię: {this.props.contacts.firstName}
          </p>
          <p className={'contactLabel'}>
            Nazwisko: {this.props.contacts.lastName}
          </p>
          <a href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
      )
    },
  });

