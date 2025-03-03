document.addEventListener("DOMContentLoaded", function () {
    const resultsContainer = document.getElementById("resultsContainer");
    const scoreContainer = document.getElementById("score");
    let totalQuestions = 70;
    let correctAnswers = 0;

    // Check if localStorage is empty
    if (!localStorage.length) {
        resultsContainer.innerHTML = "<p>No quiz data found. Please complete the quiz first.</p>";
        return;
    }

    // Questions and correct answers
    const quizData = {
        "1": { 
        question: "1. Which statement best describes a queue data structure?", 
        correct: "B", 
        explanation: "A queue follows the FIFO (First-In-First-Out) principle, meaning elements are inserted at the rear and removed from the front." 
    },
		"2": { 
        question: "2. Which data structure allows inserting and deleting data elements at both the front and the rear?", 
        correct: "B", 
        explanation: "Queues allow insertion and deletion at both ends, making them useful for handling data from multiple directions." 
    },
    "3": { 
        question: "3. Which data structure allows elements to be inserted and deleted from one end and provides no direct access to the other end?", 
        correct: "B", 
        explanation: "Stacks follow the LIFO (Last-In-First-Out) principle, meaning elements are inserted and removed only from the top." 
    },
    "4": { 
        question: "4. What are the official indexes for the list list01 given this declaration? int[ ] list01 = {0, 2, 4, 6, 8, 10}?", 
        correct: "B", 
        explanation: "In a zero-based indexing system, the indexes for the given list are 0, 1, 2, 3, 4, and 5." 
    },
    "5": { 
        question: "5. Which abstract data type (ADT) has elements of the same type so that the elements can be retrieved based on the index or position?", 
        correct: "C", 
        explanation: "A List stores elements of the same type and allows retrieval using an index or position." 
    },
    "6": { 
        question: "6. Which data structure allows insertion and removal from only one end of the data structure?", 
        correct: "A", 
        explanation: "A Stack follows the LIFO (Last-In-First-Out) principle, allowing insertion and removal only from the top." 
    },
    "7": { 
        question: "7. Which data type does the mystery function return?		return_type mystery (int R) 			int NumUnits = R 			return NumUnits * 3.14",
		
				
        correct: "A", 
        explanation: "Simplicity ensures that an algorithm is easy to understand, maintain, and implement." 
    },
    "8": { 
        question: "8. Which category of data does ('FB', 75.00, 75.03, 74.90) represent in the pseudocode?	import datetime def middle(stock, date): symbol, current, high, low = stock	return (((high + low) / 2), date)	mid_value, date = middle(('FB', 75.00, 75.03, 74.90), datetime.date(2014, 10, 31))", 
        correct: "B", 
        explanation: "A priori analysis evaluates an algorithm's efficiency before execution, without empirical testing." 
    },
    "9": { 
        question: "9. Which value is appropriate for Test1 given the expression?", 
        correct: "A", 
        explanation: "The variable Test1 is declared as a char, so it must store a single character enclosed in single quotes, like 'L'." 
    },
    "10": { 
        question: "10. Which value is appropriate for the variable middle given the pseudocode? function mystery(){string last;	string first;char middle;int phone;float rate;} ", 
        correct: "A", 
        explanation: "The variable 'middle' is declared as a char, meaning it must store a single character enclosed in single quotes, like 'D'." 
    },
	 "11": { 
        question: "11. Which type of operation is represented in the pseudocode?", 
        correct: "B", 
        explanation: "The expression x = y = z = 100 assigns the value 100 to all three variables using the assignment operator '='." 
    },
    "12": { 
        question: "12. What is the most efficient data type to use for this data set of a fixed size in Java?int[] a = {0, 0, 1, 4, 7, 16, 31, 64, 127};", 
        correct: "A", 
        explanation: "Arrays are the most efficient data type for storing a fixed-size sequence of values in Java." 
    },
    "13": { 
        question: "13. Which data type is appropriate for this array to store the given data?a = ['AF', '711', 'BC', '157', 'BA', '253']", 
        correct: "A", 
        explanation: "The elements in the array contain alphanumeric values, which are best stored as Strings in most programming languages." 
    },
    "14": { 
        question: "14. Which data type is appropriate for the given data set? a = [1, 717, 23, 12, 314, 6]", 
        correct: "B", 
        explanation: "The dataset consists of whole numbers, making the Integer (Int) data type the most suitable choice." 
    },
    "15": { 
        question: "15. Which data type should be used for this object? days = { 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' }", 
        correct: "C", 
        explanation: "Each element in the set represents a sequence of characters, making String the appropriate data type." 
    },
    "16": { 
        question: "16. Which data type should be used for this variable? phoneNum = '212-555-1212'", 
        correct: "C", 
        explanation: "The phone number contains digits, hyphens, and is formatted as text, making String the appropriate data type." 
    },
    "17": { 
        question: "17. What is true about garbage collection?", 
        correct: "B", 
        explanation: "Garbage collection reclaims memory from dynamically allocated data structures, such as linked lists, when they are no longer needed." 
    },
    "18": { 
        question: "18. What is true about a data structure implemented using linked allocation?", 
        correct: "A", 
        explanation: "Linked allocation dynamically assigns memory using pointers, allowing flexibility in storage allocation." 
    },
    "19": { 
        question: "19. What are the array elements corresponding to the mid-values in the first and second iterations of a binary search in an array?arr = {45, 77, 89, 90, 94, 99, 100}	key = 100", 
        correct: "B", 
        explanation: " In the first iteration, the mid-value is 90. Since 100 is greater than 90, we search in the right half, where the new mid-value is 99." 
    },
    "20": { 
        question: "20. What is the effect on the object Computing regarding garbage collection?Computing obj = new Computing(); obj = null;", 
        correct: "A", 
        explanation: "When an object reference is set to null, it becomes unreachable and is eligible for garbage collection automatically." 
    },
	"21": { 
        question: "21. What are the mid-values in the first and second levels of recursion in this binary search?int arr = {46, 76, 89, 90, 94, 99, 100};key = 99;", 
        correct: "A", 
        explanation: "Since 99 is greater than 90, the search moves to the right half, where the next mid-value is 99." 
    },
    "22": { 
        question: "22. Which data set is represented using the dictionary data type?", 
        correct: "C", 
        explanation: "A dictionary stores key-value pairs, such as student names (keys) and their test scores (values)." 
    },
    "23": { 
        question: "23. What is a characteristic of keys in an associative dictionary data type?", 
        correct: "C", 
        explanation: "In an associative dictionary, keys must be unique and immutable to ensure proper data retrieval." 
    },
    "24": { 
        question: "24. Which Python function can be used to take a value out of a dictionary?", 
        correct: "B", 
        explanation: "The pop() function removes the specified key from the dictionary and returns its value." 
    },
    "25": { 
        question: "25. Given this data dictionary in Python:dict = {'white': 0x0000, 'black': 0x1111}", 
        correct: "A", 
        explanation: "The dict.keys() method returns a view object that displays a list of all the dictionary’s keys." 
    },
    "26": { 
        question: "26. Items were added sequentially in this stack starting with 'ham':'sausage''toast''eggs''ham'", 
        correct: "A", 
        explanation: "In a stack, the last item pushed ('bacon') is placed on top, resulting in the order 'bacon''sausage''toast''eggs''ham'." 
    },
    "27": { 
        question: "27. Items were added sequentially in this stack starting with 'dog': 'bird''rabbit''cat''dog'", 
        correct: "A", 
        explanation: "In a stack, the last item added ('bird') is the first one to be removed using the pop operation (LIFO principle)." 
    },
    "28": {   
		question: "28. Which sequence of letters represents preorder traversal of the nodes of this tree?",
        correct: "A",
        explanation: `Preorder traversal visits the root first, then recursively visits the left subtree, followed by the right subtree.
        <br>
        <img src="../Question28/image/28.png" alt="Descriptive Alt Text" class="question-image">`
	},
    "29": { 
        question: "29. An array soc of size 1009 is used where the index is an integer in [0,1008] and the hash function is key % 1009. Where will the data associated with the key given by the last 4 social security digits ‘2023’ be stored?", 
        correct: "D", 
        explanation: "Since the hash function is key % 1009, computing 2023 % 1009 results in 5. Thus, the data is stored in soc[5]." 
    },
    "30": { 
        question: "30. A stack s, a queue q, and a max value priority queue p each have a single 3 in them. Next, s.push(4), q.push(4), and p.push(4) are executed. What is the triple (s.pop(), q.pop(), p.pop())?", 
        correct: "C", 
        explanation: "The stack follows LIFO (Last-In-First-Out), the queue follows FIFO (First-In-First-Out), and the priority queue removes the highest value first." 
    },
    "31": { 
        question: "31. This stack reads left to right with the top to the right: 'green''yellow''blue''red' What could be the stack after a push operation?", 
        correct: "C", 
        explanation: "In a stack, the push operation adds an element to the top, so 'purple' is added to the right end of the stack." 
    },
    "32": { 
        question: "32. Items were added sequentially onto the stack starting with 'red': 'green''yellow''blue''red' What is the stack after a pop operation?", 
        correct: "A", 
        explanation: "In a stack, the pop operation removes the last item added, which in this case is 'green'. The remaining stack is 'yellow''blue''red'." 
    },
    "33": { 
        question: "33. Which command helps to speed up comparisons using dictionary keys during a dictionary (d) lookup in this pseudocode clip? h = hash(key) for pair in d: if h == pair[0]: return pair[1] 0(1) pair[0] pair[1] hash(object) h = hash(key)for pair in d:    if h == pair[0]:        return pair[1]", 
        correct: "B", 
        explanation: "The `hash(object)` function speeds up dictionary key comparisons by computing a unique hash value for each key, enabling efficient lookups." 
    },
    "34": { 
        question: "34. What does the method any(b) return in Python if b is a dictionary?", 
        correct: "A", 
        explanation: "unction checks the truthiness of the dictionary’s keys, not values. If any key evaluates to True, it returns True." 
    },
    "35": { 
        question: "35. Which Java method is used to read bytes from a standard file?", 
        correct: "A", 
        explanation: "The `Java.io.FileInputStream` class is used to read bytes from a file in Java." 
    },
    "36": { 
        question: "36. Which command will retrieve an item from the top of the stack?", 
        correct: "D", 
        explanation: "The `pop()` method removes and returns the top item of a stack, following the Last-In-First-Out (LIFO) principle." 
    },
    "37": { 
        question: "37. Which command will insert object x at position index in a list?", 
        correct: "A", 
        explanation: "The `Add(int index, Object x)` method inserts an object at the specified index in a list." 
    },
    "38": { 
        question: "38. Which command will return true if x is in a list, otherwise return false?", 
        correct: "A", 
        explanation: "The `Contains(Object x)` method checks if an element is present in a list and returns true if found, otherwise false." 
    },
    "39": { 
        question: "39. When should a dictionary be used instead of a list?", 
        correct: "C", 
        explanation: "Dictionaries are best used when data is stored as key-value pairs, allowing for quick lookups and retrieval." 
    },
    "40": { 
        question: "40. The reference of the head of the doubly linked list is passed to the reverse() method:", 
        correct: "A", 
        explanation: "Reversing a doubly linked list swaps the direction of links, resulting in 6<-->5<-->4<-->3<-->2<-->1." 
    },
	"41": { 
        question: "41. What is the time complexity of appending an item to an array when resizing is required?", 
        correct: "B", 
        explanation: "Resizing an array requires copying all elements to a new array, making it O(n)." 
    },
    "42": { 
        question: "42. What is an Abstract Data Type (ADT)?", 
        correct: "B", 
        explanation: "An ADT describes operations without specifying how they are implemented." 
    },
    "43": { 
        question: "43. What is the output of the following operations on an empty list? Append(list, 11) Append(list, 4) Append(list, 7) Print(list)", 
        correct: "C", 
        explanation: "Appending items in sequence results in [11, 4, 7]." 
    },
    "44": { 
        question: "44. What is the order of these functions by growth rate? 2/N, 37, 2N, N log(N2), N2?", 
        correct: "A", 
        explanation: "Sorting functions by growth rate follows the standard complexity order." 
    },
    "45": { 
        question: "45. What is the first element visited in this list when binary searching for the number 7? [6,7,8,9,11,15,20]?", 
        correct: "A", 
        explanation: "Binary search starts at the middle element, which is 9." 
    },
    "46": { 
        question: "46. How many elements in a list of size 64 would be visited when using a binary search for a number that is larger than all the values in the list?", 
        correct: "B", 
        explanation: "Binary search repeatedly halves the list, so it visits log2(64) = 6 elements." 
    },
    "47": { 
        question: "47. What is the runtime complexity of the algorithm O(N^N + 1)?", 
        correct: "D", 
        explanation: "The dominant term O(N^N) determines the complexity, which is exponential." 
    },
    "48": { 
        question: "48. How many elements in a list of size 64 would be visited when using a binary search for a number that is smaller than all the values in the list?", 
        correct: "D", 
        explanation: "Binary search halves the list log2(64) = 6 times, visiting 6 elements." 
    },
    "49": { 
        question: "49. What is the runtime complexity for the expression 305 + O(325N)?", 
        correct: "D", 
        explanation: "The constant term 305 is ignored, making the complexity O(N)." 
    },
    "50": { 
        question: "50. What is the runtime complexity for this code? for x in range(N): for y in range(N): for z in range(N): tot = tot + z print tot?", 
        correct: "D", 
        explanation: "Three nested loops result in O(N^3) complexity." 
    },
	"51": { 
        question: "51. Which term describes an abstract data type (ADT) that Python uses?", 
        correct: "A", 
        explanation: "An array is an ADT used in Python to store ordered elements in contiguous memory locations." 
    },
    "52": { 
        question: "52. Which abstract data type (ADT) is characterized by the LIFO (Last In, First Out) principle?", 
        correct: "B", 
        explanation: "A stack follows the LIFO principle, meaning the most recently added item is removed first." 
    },
    "53": { 
        question: "53. Which queue operation removes an item from the front of the queue?", 
        correct: "A", 
        explanation: "'dequeue()' removes an item from the front of the queue following FIFO (First In, First Out) order." 
    },
    "54": { 
        question: "54. Which function in Python returns the number of times the desired value is found in a tuple?", 
        correct: "C", 
        explanation: "The 'count()' function returns the number of occurrences of a specific value in a tuple." 
    },
    "55": { 
        question: "55. Which function in Python is used to find a specific value in a tuple?", 
        correct: "A", 
        explanation: "The 'index()' function finds the first occurrence of a specific value in a tuple." 
    },
    "56": { 
        question: "56. Which Python list function will remove all items from a list?", 
        correct: "A", 
        explanation: "The 'clear()' function removes all elements from a list, making it empty." 
    },
    "57": { 
        question: "57. Which abstract data type (ADT) allows operations at one end only?", 
        correct: "A", 
        explanation: "A stack allows insertion and removal only from one end (LIFO behavior)." 
    },
    "58": { 
        question: "58. Which Python list function removes the first instance of the specified element?", 
        correct: "C", 
        explanation: "The 'remove()' function deletes the first occurrence of a specified element in a list." 
    },
    "59": { 
        question: "59. How does the insertion sort algorithm sort through a list?", 
        correct: "A", 
        explanation: "Insertion sort iterates through a list, placing each value into its correct sorted position." 
    },
    "60": { 
        question: "60. What is the average runtime complexity of the merge sort algorithm?", 
        correct: "D", 
        explanation: "Merge Sort has an average time complexity of O(N log N) due to its divide-and-conquer approach." 
    },
		"61": { 
        question: "61. What is the midpoint given the quicksort on this list? Consider the lowindex = 5 and highindex = 9. (43,3,72,18,2,28,51,111,66,71)?", 
        correct: "D", 
        explanation: "The midpoint in quicksort is calculated as (lowindex + highindex) / 2, which results in index 7." 
    },
    "62": { 
        question: "62. What is the pivot point given the quicksort on this list? Consider the lowindex = 5 and highindex = 9. (43,3,72,18,2,28,51,111,66,71)?", 
        correct: "A", 
        explanation: "The pivot is usually the last element or a median value in the partitioned list. Here, 111 is the pivot." 
    },
    "63": { 
        question: "63. Which tool in Python is used to implement a deque ADT?", 
        correct: "C", 
        explanation: "The 'collections' module in Python provides the 'deque' class, which efficiently implements a double-ended queue." 
    },
    "64": { 
        question: "64. Which function in Python is used to delete one item on the right side of the deque?", 
        correct: "B", 
        explanation: "The 'pop()' function removes and returns an item from the right end of a deque." 
    },
    "65": { 
        question: "65. Which function determines that a linked list contains no data?", 
        correct: "A", 
        explanation: "'IsEmpty()' checks whether a linked list contains any elements or is empty." 
    },
    "66": { 
        question: "66. What are classes composed of that perform the actions of an application?", 
        correct: "C", 
        explanation: "Methods define the behavior of a class and perform actions within an application." 
    },
    "67": { 
        question: "67. Which loop type will always be done at least once?", 
        correct: "B", 
        explanation: "A 'do-while' loop guarantees execution at least once before checking the condition." 
    },
    "68": { 
        question: "68. How would a strongly typed language create an integer variable?", 
        correct: "B", 
        explanation: "Strongly typed languages require explicit type declarations, e.g., 'int myVar'." 
    },
    "69": { 
        question: "69. Which component of a case statement would be considered a fallback in case no other parameters are met?", 
        correct: "B", 
        explanation: "The 'default' statement acts as a fallback when no other case matches." 
    },
    "70": { 
        question: "70. Which operator is a type of assignment operator?", 
        correct: "B", 
        explanation: "The '+= ' operator assigns a new value by adding to the existing one." 
    }
    };

    
    

    // Loop through all questions and check answers
    for (let i = 1; i <= totalQuestions; i++) {
        let userAnswer = localStorage.getItem(`question${i}_answer`);
        let questionData = quizData[i.toString()];
        
        if (!questionData) {
            console.error(`Missing question data for question ${i}`);
            continue;
        }

        let correctAnswer = questionData.correct;
        let questionText = questionData.question;
        let explanationText = questionData.explanation;

        let resultText = `<strong>${questionText}</strong><br>`;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
            resultText += `✔ <span style="color:green;">Correct</span>`;
        } else {
            resultText += `✘ <span style="color:red;">Incorrect</span> (Your Answer: ${userAnswer || "No Answer"}, Correct: ${correctAnswer})<br>
            <strong>Explanation:</strong> ${explanationText}`;
        }

        let resultElement = document.createElement("p");
        resultElement.innerHTML = resultText;
        resultsContainer.appendChild(resultElement);
    }

    // Display Final Score
    scoreContainer.innerHTML = `<h2>Final Score: ${correctAnswers} / ${totalQuestions}</h2>`;

    // Restart Quiz Button
    document.getElementById("restartQuiz").addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "../index.html";
    });

    console.log("Results page loaded successfully.");
});
