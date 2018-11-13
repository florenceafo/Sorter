

// Selection sort

function sortFunction() {
    var sortArray = document.getElementById('inputArray').value;

    var arr = sortArray.split(",");
    var n = arr.length;


    arr.sort(compareNumbers);

    console.log("Sorted: " + arr);
    // var resultPrint = "<p>Sorted: " + arr + "</p>";
    // sortArray.innerHTML = resultPrint;
}

// function sort(a, b) {
//     return a - b;
// }

function compareNumbers(a, b)
{
    return a - b;
}



function selectionSort() {

    var sortArray = document.getElementById('inputArray').value;

    var arr = sortArray.split(",");
    var n = arr.length;

    var y;
    var z = [];
    for (i = 0; i < n; i++) {
        y = arr[i];
        z[i] = Number(y);
    }

    var n = arr.length;

    var selResult = document.getElementById('selectionSortResult');

    //var inputArray = String(document.getElementById('inputArray').innerHTML );



    for (i = 0; i < n; i++) {


        // Find the min element in the unsorted list 'arr'
        // Assume the min is the first element
        var min = arr[i];
        var minIndex = i;
        // Scan the rest of the unsorted list
        for (j = i + 1; j < n; j++) {

            // If this element is less, it is the new min
            if (arr[j] < min) {
                min = arr[j];

                minIndex = j;

            }
            console.log("min is: " + min);
        }


        // Create a separate swap function
        var swap = false;
        if (min != arr[i]) {
            //console.log("swap");
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            swap = true;
        }
        if (swap) {
            //console.log("Swapped");
        } else {
            //console.log("not swaped");
        }

    }

    // Print sorted array
    console.log("Sorted array:");
    var sorted = "";
    for (k = 0; k < n; k++) {
        sorted += arr[k] + " ";
    }
    console.log(sorted);


    var resultPrint = "<p>Sorted: " + sorted + "</p>";
    selResult.innerHTML = resultPrint;

}
