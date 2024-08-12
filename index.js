document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    Moengage.add_email(email);
    Moengage.add_first_name(name);
    Moengage.add_unique_user_id(email);    

    const eventName = "Form_Submitted";
    
    
        Moengage.track_event(eventName, {
            "name": name,
            "email": email
        }).then(() => {
            alert('Event tracked successfully!');
        }).catch((error) => {
            console.error('Error tracking event:', error);
        });
    
});
