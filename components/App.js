class App extends React.Component {
  render() {
   return (
    <div className={'app'}>
     <ContactForm contact={contactForm} />
     <Contacts items={contacts} />
    </div>
   );
  }
 }
