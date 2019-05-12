var select = document.getElementById("category");
var shuffle = document.getElementById("btnRandom");
var reverse = document.getElementById("btnBack");
var output = document.getElementById("ideas");
var box = document.getElementById("ideas-box");
var count = -1;
var faveIcon = document.getElementById("fave-icon");
var itemList = document.getElementById("items");
var notSaved = document.getElementById("not-saved");
var deleteAll = document.getElementById("delete-all");

shuffle.onclick = function selectCat() {
  output.innerHTML = "Select a category";
};

select.onchange = function () {
  //** FUNCTION SCOPE METHOD TO HANDLE XHR DATA **//
  var xhr = new XMLHttpRequest();
  var loadData = function () {
    if (this.status == 200) {
      var data = xhr.responseText.split("<br>");
      // data = randoomiseData(data)
      // Move function
      data.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      shuffle.onclick = function () {
        faveIcon.style.color = 'white';
        count++;
        if (count <= data.length - 1) {
          output.innerHTML = data[count];
          console.log(count);
        } else {
          count = -1;
          alert('Looks like you have spun through all the suggestions, it will re-shuffle incase you missed some.');
        }
      };
      reverse.onclick = function () {
        faveIcon.style.color = 'white';
        count--;
        if (count >= 0) {
          output.innerHTML = data[count];
          console.log(count);
        } else {
          count = 0;
          alert('Press Spin');
        }
      };
      console.log(data);
    } else if (this.status == 404) {
      alert('API File Not Found');
    }
    xhr.onerror = function () {
      console.log('Request Error...');
    };

    //** APPEND SAVED IDEA TO LIST **//
    faveIcon.onclick = function () {
      if (count >= 0) {
        faveIcon.style.color = 'gold';
        notSaved.style.display = 'none';
        var li = document.createElement("li");
        li.className = "list-group-item list-group-item-light";
        var newItem = data[count];
        li.appendChild(document.createTextNode(newItem));
        itemList.appendChild(li);
        var btn = document.createElement("button");
        btn.className = "btn btn-danger btn-sm float-right delete";
        btn.appendChild(document.createTextNode("X"));
        li.appendChild(btn);
      } else {
        count = 0;
        alert('Press Spin');
      }
    };
    //** REMOVE LIST BUTTON **//
    itemList.onclick = function removeItem(e) {
      if (e.target.classList.contains("delete")) {
        if (confirm("Sure you want to delete this saved suggestion?")) {
          var li = e.target.parentElement;
          itemList.removeChild(li);
          faveIcon.style.color = 'white';
        }
      }
    };
    //** END OF FUNCTION SCOPE METHOD TO HANDLE XHR DATA **//
  };




  //** COLLECT DATENIGHT IDEAS **//
  if (select.selectedIndex == "1") {
    box.style.backgroundColor = 'rgb(255, 56, 56, 0.95';
    output.innerHTML = "Spin to unveil what we can do... ";
    xhr.open("GET", "date-night.php", true);
    xhr.onload = loadData;
    xhr.send();
  }
  //** COLLECT GUYS TO DO IDEAS **//
  else if (select.selectedIndex == "2") {
    box.style.backgroundColor = 'rgba(27, 138, 241, 0.95)';
    output.innerHTML = "Spin to find something to do... ";
    xhr.open("GET", "guys.php", true);
    xhr.onload = loadData;
    xhr.send();
  }
  //** COLLECT GIRRLS IDEAS **//
  else if (select.selectedIndex == "3") {
    box.style.backgroundColor = 'rgba(255, 128, 191, 0.95)';
    output.innerHTML = "Spin to find something to do... ";
    xhr.open("GET", "girls.php", true);
    xhr.onload = loadData;
    xhr.send();
    //** REVERTS WHEN NO CATEGORY IS SELECTED **//
  } else {
    output.innerHTML = "what to do...";
    box.style.backgroundColor = 'rgba(110, 110, 110, 0.8)';
    output.innerHTML = "Spam that spin button to resolve your boredom... ";
    shuffle.onclick = function () {
      output.innerHTML = "Select a category";
    };
    reverse.onclick = function () {
      output.innerHTML = "Select a category";
    };
  }
};

// $(document).ready(function () {
//   var ideacount = 1;
//   var ideaCurrentCount = 1;
//   $('#btnRandom').click(function () {
//     ideacount = ideacount + 1;
//     ideaCurrentCount = ideaCurrentCount + 1;
//     $('#ideas').load('load.php', {
//       ideaNewCount: ideacount
//     });
//   });
// });

// $(document).ready(function () {
//   var ideacount = 0;
//   var ideaCurrentCount = 0;
//   $('#btnRandom2').click(function () {
//     ideacount = ideacount + 1;
//     ideaCurrentCount = ideaCurrentCount + 1;
//     $('#ideas2').load('load2.php', {
//       ideaNewCount: ideacount
//     });
//   });
// });