def insertion_sort(arr):
    """
    Sorts an input array using the Insertion Sort algorithm.
    
    Time Complexity: Worst Case & Average: O(n^2) | Best Case: O(n)
    Space Complexity: O(1)
    """

    # Start looping from second element because the first one is considered sorted
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1

        # Compare adjacent elements moving towards the start of the array
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        # Put the selected item at its correct position
        arr[j + 1] = key

    return arr

input_array = [5, 3, 8, 4, 2]
print('Input array: ', input_array)
sorted_array = insertion_sort(input_array)
print('Sorted array: ', sorted_array)
