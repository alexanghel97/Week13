"use strict";

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.posts = [];
    this.stories = [];
    this.followers = [];
    this.following = [];
    this.hashtags = [];
    this.locations = [];
    this.directMessages = [];
    this.notifications = [];
  }
  createPost(post) {
    this.posts.push(post);
  }
  deletePost(postId) {
    this.posts = this.posts.filter((post) => post.postId !== postId);
  }
  createStory(story) {
    this.stories.push(story);
  }
  deleteStory(storyId) {
    this.stories = this.stories.filter((story) => story.storyId !== storyId);
  }
  likePost(postId) {
    const post = this.posts.find((post) => post.postId === postId);
    if (post) {
      post.likes = post.likes + 1;
      return true;
    }
    return false;
  }
  commentOnPost(postId, comment) {
    const post = this.posts.find((post) => post.postId === postId);
    if (post) {
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push(comment);
      return true;
    }
    return false;
  }
  followUser(user) {
    this.following.push(user);
  }
  get followingList() {
    return this.following.map((user) => user.username);
  }
  unfollowUser(user) {
    this.following = this.following.filter(
      (followedUser) => followedUser !== user
    );
  }
  followHashtag(hashtag) {
    this.hashtags.push(hashtag);
  }
  unfollowHashtag(hashtag) {
    this.hashtags = this.hashtags.filter(
      (followedHashtag) => followedHashtag !== hashtag
    );
  }
  followLocation(location) {
    this.locations.push(location);
  }
  unfollowLocation(location) {
    this.locations = this.locations.filter((loc) => loc !== location);
  }
  sendMessage(sender, recipient, text) {
    let message;
    if (sender === this.username) {
      message = `You have sent the following message to ${recipient} : ${text}`;
      this.directMessages.push(message);
    }
    if (sender !== this.username) {
      message = `You have received the following message from ${sender} : ${text}`;
      this.directMessages.push(message);
    }
  }
  triggerNotification(sender, message) {
    const notification = {
      sender,
      message,
      timestamp: new Date(),
    };
    this.notifications.push(notification);
  }
}

const userMarcel = new User("Marcel", "parola");
const userAna = new User("Ana", "parola");
const userRomica = new User("Romica", "parola");

userMarcel.createPost({
  postId: 850129,
  content: "Vacanta",
  likes: 14,
});

userAna.createPost({
  postId: 661928,
  content: "Summer vibe",
  likes: 854,
});

// userMarcel.likePost(850129);
// userMarcel.commentOnPost(850129, "Very nice");
// userMarcel.commentOnPost(850129, "Hello");
// userMarcel.followUser(userAna);
// userMarcel.followUser(userRomica);
// console.log(userMarcel);
// console.log(userMarcel.followingList);
// userMarcel.unfollowUser(userAna);
// console.log(userMarcel.followingList);
// userMarcel.followHashtag("Development");
// userMarcel.followHashtag("Javascript");
// userMarcel.followHashtag("Web desing");
// console.log(userMarcel);
// userMarcel.unfollowHashtag("Development");
// console.log(userMarcel);
// userMarcel.followLocation("Madrid");
// userMarcel.followLocation("Berlin");
// console.log(userMarcel);
// userMarcel.unfollowLocation("Berlin");
// console.log(userMarcel);

// userMarcel.sendMessage("Marcel", "Ana", "Hello there");
// userAna.sendMessage("Marcel", "Ana", "Hello");
// console.log(userAna);

// userMarcel.triggerNotification("Ana", "You just received a message");
// console.log(userMarcel);

class Post {
  constructor(id, imageUrl, caption, likes, author) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.caption = caption;
    this.likes = likes;
    this.author = author;
    this.comments = [];
  }
  addComment(comment) {
    this.comments.push(comment);
  }
  like(number) {
    this.likes = this.likes + number;
    return this.likes;
  }
}

// const post1 = new Post(11237, "http", "Hello", 137, "Michael");
// post1.like(140);
// post1.addComment(`Very nice`);
// console.log(post1);

class Comment {
  constructor(id, text, user) {
    this.id = id;
    this.text = text;
    this.user = user;
  }
}

class Story {
  constructor(id, imageUrl, duration, author) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.author = author;
    this.viewed = 0;
  }
}

class Userstory extends Story {
  constructor(id, imageUrl, duration, author) {
    super(id, imageUrl, duration, author);
    this.viewers = [];
    this.viewCount = 0;
  }
  addViewer(user) {
    this.viewers.push(user);
    this.viewCount = this.viewers.length;
    this.viewed = this.viewCount;
  }
  removeViewer(user) {
    this.viewers = this.viewers.filter((viewer) => viewer !== user);
    this.viewCount = this.viewers.length;
    if (this.viewCount === 0) {
      this.viewed = 0;
    } else {
      this.viewed = this.viewCount;
    }
  }
}

// const anaStory = new Userstory(90091, "Image", 37, "Ana");
// console.log(anaStory.viewed);
// anaStory.addViewer("Marcel");
// console.log(anaStory);
// anaStory.addViewer("Dan");
// anaStory.addViewer("Marius");
// anaStory.addViewer("Ionel");
// console.log(anaStory);

class Hashtag {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  addPost(postId, post) {
    this.posts.push({ postId, ...post });
  }
  removePost(postId) {
    this.posts = this.posts.filter((post) => post.postId !== postId);
  }
}

const hashtag1 = new Hashtag("Vacation");

hashtag1.addPost(998, { content: `#Hello, #Travel` });
hashtag1.addPost(999, { content: `#Dinner, #Drinking` });
console.log(hashtag1);
hashtag1.removePost(999);
console.log(hashtag1);

class Location {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  addPost(postId, post) {
    let location = `Posted from ${this.name}`;
    this.posts.push({ location, postId, ...post });
  }
  removePost(postId) {
    this.posts = this.posts.filter((post) => post.postId !== postId);
  }
  getPosts() {
    return `Current posts are : ${this.posts}`;
  }
}

const location1 = new Location("Germany");

location1.addPost(581, { content: `Hello World!` });
location1.addPost(582, { content: `Hello World!` });
location1.addPost(583, { content: `Hello World!` });
location1.addPost(584, { content: `Hello World!` });
location1.removePost(584);

console.log(location1);
