def balloon_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap the elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                
                # Visualize the swap using "balloons" (represented by spaces here)
                print(" ".join(str(x) for x in arr))
        if not swapped:
            break  # If no two elements were swapped in an iteration, then the list is already sorted
        
    return arr

# Example usage:
arr = [4, 113, 37, 5, 6, 23, 42, 88, 51, 46, 52, 111, 76, 50, 103, 75, 62, 44, 100, 10, 77, 70, 39, 110, 84, 58, 25, 7, 94, 29, 112, 108, 13, 92, 87, 82, 53, 31, 79, 35, 63, 65, 55, 60, 68, 89, 27, 85, 8, 30, 95, 91, 26, 16, 57, 102, 101, 9, 18, 86, 61, 22, 28, 106, 48, 66, 19, 1, 69, 32, 96, 72, 64, 73, 107, 83, 40, 109, 24, 43, 114, 20, 104, 11, 81, 2, 41, 45, 67, 3, 99, 12, 105, 90, 59, 17, 15, 54, 36, 80, 47, 56, 34, 74, 78, 38, 21, 71, 49, 33, 97, 93, 14, 98]
print("Original array:", arr)
sorted_arr = balloon_sort(arr)
print("Sorted array:", sorted_arr)
