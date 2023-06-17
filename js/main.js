const notificationList = document.getElementById("notificationList"),
notificationCount = document.querySelector('.notification-count'),
markAsRead = document.querySelector('header span');
// Function to generate a notification item
function createNotification(imageSrc, user,action,actionLink, message, postImage ,time , index ) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  index < notificationCount.value  && notification.classList.add("unread");
 
  message ?  notification.style.flexWrap = "wrap": "";
  
  const notificationContainer = document.createElement('div');
  notificationContainer.classList.add('notification-container');
  message &&  notificationContainer.classList.add('private-message')
  
  const image = document.createElement("img");
  image.classList.add("notification-image");
  image.src = imageSrc;
  image.alt = "Notification Image";
  
  const notificationMainText = document.createElement('p');
  notificationMainText.classList.add('notification-main-text')
  
  const notificationUser = document.createElement("strong");
  notificationUser.classList.add("notification-user");
  notificationUser.innerHTML = user;
  
  const notificationAction = document.createElement("span");
  notificationAction.classList.add("notification-action");
  notificationAction.innerHTML = action;
  
  const notificationActionLink = document.createElement("span");
  notificationActionLink.classList.add("notification-action-link");
  notificationActionLink.innerHTML = actionLink;

  if(actionLink == "Chess Club&nbsp&nbsp"){
    notificationActionLink.style.color = 'rgba(0,0,200,0.8)';
    notificationActionLink.addEventListener('mouseover' ,()=>{
      notificationActionLink.style.color = 'rgba(0,0,240,1)';
      
      
    })
    notificationActionLink.addEventListener('mouseout' ,()=>{
      notificationActionLink.style.color = 'rgba(0,0,200,0.8)';
    })
  }
  notificationUser && notificationMainText.appendChild(notificationUser);
  notificationAction && notificationMainText.appendChild(notificationAction);
  notificationActionLink && notificationMainText.appendChild(notificationActionLink);

  
  const notificationPostImage = document.createElement("img");
  notificationPostImage.classList.add("notification-post-image");
  notificationPostImage.src = postImage;
  notificationPostImage.alt = "image-chess"
  
  
  const notificationTime = document.createElement('span');
  notificationTime.classList.add('notification-time');
  notificationTime.innerHTML = time;
  
  const notificationMessage =document.createElement('div');
  notificationMessage.classList.add('notification-message');
  notificationMessage.textContent = message;
  message ? notificationMessage.style.flexBasis = '100%':"";
  
  
  
  notificationContainer.appendChild(notificationMainText);
  postImage && notificationContainer.appendChild(notificationPostImage);
  notificationContainer.appendChild(notificationTime);
  
  

  notification.appendChild(image);
  notification.appendChild(notificationContainer);
  postImage && notification.appendChild(notificationPostImage);
 
  message && notification.appendChild(notificationMessage);
  
  
  
  return notification;
}
function handleNotificationClick(){
  const notifications = document.querySelectorAll('.notification')
  notifications.forEach(N => {
    N.addEventListener('click' , () =>{
      if(N.classList.contains('unread')){
        N.classList.remove('unread');
        let currentCount =notificationCount.value;
        console.log(currentCount);
        notificationCount.textContent = currentCount-1;
        console.log(notificationCount.textContent)
        notificationCount.value =notificationCount.textContent;
        if(notificationCount.value == 0){
          notificationCount.style.display = "none";
        }
        console.log(notificationCount.textContent)
      }
    })

  })
  markAsRead.addEventListener('click' , () => {
    notificationCount.textContent = 0;
    notificationCount.style.display = "none";
    notifications.forEach(N =>{
      if(N.classList.contains('unread')){
        N.classList.remove('unread');
        
      }
    })
    
  })
  console.log(notifications);
}

// Add example notifications
const notifications = [
  {
    image: "../assets/images/avatar-mark-webber.webp",
    user: "Mark Webber &nbsp&nbsp",
    action: "reacted to your recent post&nbsp&nbsp",
    actionLink: "My first tournament today!&nbsp&nbsp",
    message: "",
    postImage: "",
    time: "1min ago",
    
  },
  {
    image: `../assets/images/avatar-angela-gray.webp`,
    user: " Angela Gray &nbsp&nbsp",
    action: "followed you &nbsp&nbsp",
    actionLink: "",
    message: "",
    postImage: "",
    time: "5min ago",
    
  },
  {
    image: `../assets/images/avatar-jacob-thompson.webp`,
    user: "Jacob Thompson &nbsp&nbsp",
    action: " has joined your group &nbsp&nbsp",
    actionLink: "Chess Club&nbsp&nbsp",
    message: "",
    postImage :"",
    time: "1day ago",
  },
  {
    image: `../assets/images/avatar-rizky-hasanuddin.webp`,
    user: "Rizky Hasanuddin &nbsp&nbsp",
    action: " sent you a private message&nbsp&nbsp",
    actionLink: "",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    postImage :"",
    time: "5 days ago",
  },
  {
    image: `../assets/images/avatar-kimberly-smith.webp`,
    user: "Kimberly Smith  &nbsp&nbsp",
    action: "commented on your picture&nbsp&nbsp",
    actionLink: "",
    message: "",
    postImage: `../assets/images/image-chess.webp`,
    time: "1 week ago",
  },
  {
    image: `../assets/images/avatar-nathan-peterson.webp`,
    user: "Nathan Peterson&nbsp&nbsp",
    action: " reacted to your recent post  rate&nbsp&nbsp",
    actionLink: "5 end-game strategies to increase your win&nbsp&nbsp",
    message: "",
    postImage :"",
    time: "2 weeks ago",
  },
  {
    image: `../assets/images/avatar-anna-kim.webp`,
    user: "Anna Kim &nbsp&nbsp",
    action: "left the group &nbsp&nbsp",
    actionLink: "Chess Club&nbsp&nbsp",
    message: "",
    postImage :"",
    time: "2 weeks ago",
  },
  
];

notifications.forEach((notification , index) => {
  const { image, user, action, actionLink, message,postImage, time } = notification;
  const notificationItem = createNotification(image, user,action,actionLink, message,postImage, time  , index);
  notificationList.appendChild(notificationItem);
});

handleNotificationClick();
console.log( window.location.origin)