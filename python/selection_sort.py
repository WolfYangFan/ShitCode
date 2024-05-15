def selection_sort(arr):
    """
    Sorts an input array using the Selection Sort algorithm.
    
    Time Complexity: Worst Case & Average: O(n^2) | Best Case: O(n^2)
    Space Complexity: O(1)
    """

    # Iterate over the length of the array
    for i in range(len(arr)):
        # Assume the smallest item starts at index 'i'
        min_index = i

        # Traverse through the rest of the array to find the true minimum
        for j in range(i+1, len(arr)):
            if arr[min_index] > arr[j]:
                # Update the new minimum location
                min_index = j

        # Place the found minimum at the beginning of our sorted segment
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

input_array = [5, 3, 8, 4, 2]
print('Input array: ', input_array)
sorted_array = selection_sort(input_array)
print('Sorted array: ', sorted_array)
