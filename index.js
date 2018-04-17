  // CUSTOM INTERCOM CHAT

  var intercomChatIcon = document.getElementById("intercom_chat_icon");
  // Fire hideIcon function when icon or close buttons are clicked
  intercomChatIcon.onclick = hideIcon;

  function hideIcon() {
    // If "visible" is already a class, replace "visible" with empty string
    if ( -1 !== intercomChatIcon.className.indexOf( "visible" ) ) {
      intercomChatIcon.className = intercomChatIcon.className.replace( " visible", "" );
    }
  }
  Intercom('onHide', function() {
    intercomChatIcon.className += " visible";
  });
