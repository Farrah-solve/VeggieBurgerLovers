// Handlers waiting for DOM
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var devourState = {
        devoured: 1
      };
  
      // PUT
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("burger devoured");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger = {
        name: $("#bur").val().trim(),
      };
  
      // POST
      $.ajax("/api/burger", {
        type: "POST",
        data: burger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // DELETE
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  