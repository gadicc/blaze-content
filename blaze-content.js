if (Meteor.isClient) {
  Template.test.content = function () {
    return "Welcome to blaze-content.";
  };
  Template.test.obj = {
  	content: 'content',
  	content_: 'content_'
  }
}
