$(document).ready(function() {

    generateSudoku();

    var sudokuHtml= '<div class="container">';
    for (var i = 0; i < 9; i++) {
        sudokuHtml += `<div id="row${i}" class="row">`;
        for (var j = 0; j < 9; j++) {
            sudokuHtml += `<div id="col${j}" class="col-2 case">${sudoku[i][j]}</div>`;
        }
        sudokuHtml += '</div>';
    }
    sudokuHtml += '</div>';

    $("#sudoku").html(sudokuHtml)
    
})


function displaySudoku() {
    $("#sudoku").html(sudokuHtml);
  }
  

// //bouton generate
$(document).ready(function(){
//     //qd je clique sur le bouton generate
     $("#btn-generate").click()
//       //j'appelle la function generatesudoku 
      generateSudoku();
  })


// //bouton display
 $(document).ready(function(){
//     //qd je clique sur le bouton display
     $("#btn-display").click()
//       //j'appelle la function generatesudoku 
      displaySudoku();
 })
  
