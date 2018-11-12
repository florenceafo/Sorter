var arr = [8, 90, 3, 6, 28, -1, 56, 14, 11];
var n = arr.length;

// Selection sort
function selectionSort() {

    var selResult = document.getElementById('selectionSortResult');

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
                console.log("min is " + min);
                minIndex = j;

            }
        }


        var swap = false;
        if (min != arr[i]) {
            console.log("swap");
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            swap = true;
        }
        if (swap) {
            console.log("Swapped");
        } else {
            console.log("not swaped");
        }


        for (k = 0; k < n; k++) {
            console.log(arr[k]);
        }
    }

    // Print sorted array
    console.log("Sorted array:");
    var sorted = "";
    for (k = 0; k < n; k++) {
        sorted += arr[k] + " ";
    }
    console.log(sorted);


    var resultPrint = "<p>" + sorted + "</p>";
    selResult.innerHTML = resultPrint;

}
