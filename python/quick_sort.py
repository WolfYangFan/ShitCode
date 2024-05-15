def quick_sort(arr):
    """
    Sorts an input array using the Quick Sort algorithm.
    
    Time Complexity: Expected: O(n*log n) | Worst Case: O(n^2)
    Space Complexity: O(log n)
    """

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

input_array = [5, 3, 8, 4, 2]
print('Input array: ', input_array)
sorted_array = quick_sort(input_array)
print('Sorted array: ', sorted_array)
