def merge_sort(arr):
    """
    Sorts an input array using the Merge Sort algorithm.
    
    Time Complexity: Worst Case & Average: O(n*log n) | Best Case: O(n*log n)
    Space Complexity: O(n)
    """

    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    # Recursively split the array into smaller chunks
    left = merge_sort(left)
    right = merge_sort(right)

    return merge(left, right)

def merge(left, right):
    """
    Helper function used in Merge Sort to combine two sorted arrays.
    
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    result = []
    i = j = 0

    # Perform element-wise comparison between the two arrays
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Append any remaining elements from either side
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

input_array = [5, 3, 8, 4, 2]
print('Input array: ', input_array)
sorted_array = merge_sort(input_array)
print('Sorted array: ', sorted_array)
