var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The following textbooks were helpful in preparation of these notes.  Numerical Methods: Using MATLAB by George Lindfield and John Penny  A First Course in Numerical Methods by Uri M. Ascher and Chen Greif  Approximation Theory and Approximation Practice by Lloyd N. Trefethen  Numerical Computing with MATLAB by Clive Moler   "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " The topics covered in this course can be divided into 5 units.  Matlab: Matrix\/vector manipulation, matrix\/vector creation, elementwise operations, built-in functions, input\/output, 2d graphics, scripting, functions.  Solving equations: linear systems, bisection method, fixed point method, Newton and secant methods, multivariable Newton's method, Broyden's method.  Numerical calculus: numerical differentiation, numerical integration: trapezoidal rule, Simpson's rule, orthogonal polynomials (Legendre, Laguerre), Gaussian integration, Gauss-Laguerre integration, adaptive integration, solving ODE with Euler's method and trapezoidal method, ODE systems.  Data fitting: polynomial interpolation, spline interpolation, discrete Fourier transform, linear least squares, model comparison, nonlinear least squares, transforming data.  Optimization: linear programming, single-variable minimization, steepest descent, conjugate gradient method, Nelder-Mead method, constrained optimization, applications.  Numerical linear algebra is not included above because it is the subject of a separate course (MAT 532).  Although the course is built around Matlab software, one can use Octave to run examples and do homework just as well.  If you are new to Matlab, begin with the free online minicourse MATLAB Onramp . The first part of the course, up to and including Plotting Data , is the most important one. It will be referenced in each of the first four chapters\/classes.  "
},
{
  "id": "section-matlab-interface",
  "level": "1",
  "url": "section-matlab-interface.html",
  "type": "Section",
  "number": "1.1",
  "title": "Matlab interface",
  "body": " Matlab interface  The first thing you see in Matlab is its Command Window where the prompt >> invites you to enter any command that will be executed at once. This window is useful for quickly trying out things. You should use it to try out the one-line examples that appear in the text of these notes.  Most of our work, including homework assignments, will involve Script Editor . To open this editor, click New Script button on the left of the Home menu of Matlab. The chain of commands entered in the editor forms a script. The button Run of the Editor menu runs a script; pressing F5 does the same.  The result of script computations can be shown in the Command Window. There are several ways to make it appear. One of them is disp command: for example, disp('Hello world') displays \"Hello world\", and disp(2\/3) displays 0.6667. Notice that Matlab displays just four digits after the decimal dot. This is intentional: showing fewer digits of each number makes is possible to fit more of them on the screen. There are ways to change the number format to display more digits, which we will consider later.   Golden ratio   Write a script that displays an approximate decimal value of the golden ratio  .    disp((sqrt(5)+1)\/2)    "
},
{
  "id": "section-matlab-interface-2",
  "level": "2",
  "url": "section-matlab-interface.html#section-matlab-interface-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Command Window "
},
{
  "id": "section-matlab-interface-3",
  "level": "2",
  "url": "section-matlab-interface.html#section-matlab-interface-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Script Editor "
},
{
  "id": "section-matlab-interface-5",
  "level": "2",
  "url": "section-matlab-interface.html#section-matlab-interface-5",
  "type": "Example",
  "number": "1.1.1",
  "title": "Golden ratio.",
  "body": " Golden ratio   Write a script that displays an approximate decimal value of the golden ratio  .    disp((sqrt(5)+1)\/2)   "
},
{
  "id": "section-scalars",
  "level": "1",
  "url": "section-scalars.html",
  "type": "Section",
  "number": "1.2",
  "title": "Assigning scalar values",
  "body": " Assigning scalar values  The command x = 3\/4 assigns the value of 0.75 to variable x . Matlab will also display the result of this assignment (the number 0.75) to you. Most of the time, we do not need it to print the result of every computation. Ending a command with a semicolon ; suppresses the output: try x = 3\/4;  Now that the variable x has a value, we can use it in computations. For example, y = x^2 + 5*x - 1 will result in y being assigned the value 3.3125. It is important to realize that every variable must be assigned a value before it can be used on the right hand side of an assignment. If we try to execute y = x^2 without assigning any value to x , the result will be an error: x is undefined.  It is important to understand the difference between equations and assignments. In mathematics, is an equation which has no solutions. In Matlab, x = x + 1; is an assignment command which means take the current value of x, add 1 to it, and assign the result to x . The effect is that the value of x is increase by 1.   Arithmetic and geometric means   Write a script that does the following. Assign two unequal positive numbers to x and y (for example, two different digits of your SUID). Compute their arithmetic mean and geometric mean . Then display the arithmetic mean of and . Finally, display the geometric mean of and .    x = 4; y = 7; a = (x+y)\/2; g = sqrt(x*y); disp((a+g)\/2) disp(sqrt(a*g))  Remark: Karl Gauss discovered that if the above process of taking arithmetic and geometric means is repeated, both these means quickly converge to the same number. This number is called the arithmetic-geometric mean of x and y. It is linked to certain integrals which cannot be evaluated with calculus methods, and therefore provides an efficient computational approach to such integrals. For more, see Wikipedia .    "
},
{
  "id": "example-agm",
  "level": "2",
  "url": "section-scalars.html#example-agm",
  "type": "Example",
  "number": "1.2.1",
  "title": "Arithmetic and geometric means.",
  "body": " Arithmetic and geometric means   Write a script that does the following. Assign two unequal positive numbers to x and y (for example, two different digits of your SUID). Compute their arithmetic mean and geometric mean . Then display the arithmetic mean of and . Finally, display the geometric mean of and .    x = 4; y = 7; a = (x+y)\/2; g = sqrt(x*y); disp((a+g)\/2) disp(sqrt(a*g))  Remark: Karl Gauss discovered that if the above process of taking arithmetic and geometric means is repeated, both these means quickly converge to the same number. This number is called the arithmetic-geometric mean of x and y. It is linked to certain integrals which cannot be evaluated with calculus methods, and therefore provides an efficient computational approach to such integrals. For more, see Wikipedia .   "
},
{
  "id": "section-vectors-matrices",
  "level": "1",
  "url": "section-vectors-matrices.html",
  "type": "Section",
  "number": "1.3",
  "title": "Creating vectors and matrices",
  "body": " Creating vectors and matrices  A vector in Matlab is an ordered list of numbers. It does not always have a geometric meaning. For example, recording the high temperature on every day of August, we get a vector with 31 components; we do not normally visualize it as an arrow of some length and direction. Matlab distinguishes between row vectors and column vectors, which are defined below.  A matrix is a rectangular array of numbers. For example, a 4 6 matrix has 4 rows and 6 columns. A matrix with one row (for example a 1 6 matrix) is a row vector . A matrix with one column (for example a 4 1 matrix) is a column vector . Thus, vectors in Matlab are just a special kind of matrices.  One can create a row vector by listing its components: x = [8 6 7 5 3 0 9] or x = [8, 6, 7, 5, 3, 0, 9] Either spaces or columns can be used to separate the entries. To create a column vector, one can either separate the entries by semicolons: x = [8; 6; 7; 5; 3; 0; 9] or create a row vector and transpose it by putting an apostrophe at the end: x = [8 6 7 5 3 0 9]'   To create a matrix one needs both kinds of separators: spaces or colons within each row, and semicolons between the rows. For example, A = [8 6; 7 5; 3 0] creates a 3 2 matrix. Its transpose A' is a 2 3 matrix, same as [8 7 3; 6 5 0]  Regularly-spaced vectors are described by three numbers: first entry, step size, and last entry. For example: 3:2:15 means the same as [3 5 7 9 11 13 15] : the first entry is 3, after that they increase by 2, until reaching 15. The step size can be omitted when it is equal to 1: that is, -1:4 is the same as [-1 0 1 2 3 4] .  Zeros and ones are special kinds of matrices and vectors, filled with the same number: 0 or 1. The commands are called zeros and ones . They require two parameters: the number of rows and the number of columns. For example, zeros(2, 2) creates a 2 2 matrix filled with zeros, and ones(1, 5) is a row vector with 5 entries: [1 1 1 1 1] . These are useful as starting points for building matrices and vectors.   Integers in descending order   Create a vector with numbers 20, 19, 18, ..., 3, 2, 1 in this order.    v = 20:-1:1  The step size here is -1, so the term after 20 is 20 + (-1) = 19, after that we get 19 + (-1) = 18, and so on until reaching 1.    "
},
{
  "id": "section-vectors-matrices-2",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector "
},
{
  "id": "section-vectors-matrices-3",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix row vector column vector "
},
{
  "id": "section-vectors-matrices-4",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transpose "
},
{
  "id": "section-vectors-matrices-6",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Regularly-spaced vectors "
},
{
  "id": "section-vectors-matrices-7",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Zeros and ones "
},
{
  "id": "section-vectors-matrices-8",
  "level": "2",
  "url": "section-vectors-matrices.html#section-vectors-matrices-8",
  "type": "Example",
  "number": "1.3.1",
  "title": "Integers in descending order.",
  "body": " Integers in descending order   Create a vector with numbers 20, 19, 18, ..., 3, 2, 1 in this order.    v = 20:-1:1  The step size here is -1, so the term after 20 is 20 + (-1) = 19, after that we get 19 + (-1) = 18, and so on until reaching 1.   "
},
{
  "id": "section-operations-vectors-matrices",
  "level": "1",
  "url": "section-operations-vectors-matrices.html",
  "type": "Section",
  "number": "1.4",
  "title": "Operations on vectors and matrices",
  "body": " Operations on vectors and matrices  Addition and subtraction works the same way as it does in Linear Algebra. If two vectors, or two matrices, have the same size, they can be added or subtracted. For example: x = [3 7 2]; y = [8 -2 0]; z = x + y; results in z being [11 5 2] . But we cannot add [8 -2] and [2 5 8] because these vectors have different sizes.  Scalar multiplication also works as expected: with x as above, 3*x is the vector [9 21 6] .  One can also multiply two vectors, or two matrices, or a vector and a matrix. To understand how this works in Matlab, keep in mind that a vector is treated as a matrix with one row (or one column). Two matrices can be multiplied only when the inner dimensions agree: that is, two matrices of sizes and can be multiplied when . The product has size . Some examples:  [3 7] * [4 2] is an error : the first argument has size , the second also has size , and the inner dimensions do not agree: .  [3 7] * [4; 2] is 26 . the first argument has size , the second has size , so the product is defined and has size which makes it a scalar. This is how one computes the scalar product of two vectors: it comes from multiplying a row vector by a column vector. In introductory mathematics courses this product is called the dot product which emphasizes its notation instead of output. This may be confusing because Matlab also has products with a dot . but they mean a different thing: we will see them in next chapter.  [1 2 3; 4 5 6] * [-4; 0; 3] is [5; 2] . The sizes and are compatible and the product has size . This is how matrix-vector products work in linear algebra too: the vector, placed to the right of a matrix, must be written as a column.  [5 -2] * [1 2 3; 4 5 6] is [-3 0 3] . The sizes and are compatible and the product has size . So, we can have a vector to the left of a matrix when it is a row vector.  [0 1; -1 0] * [1 2 3; 4 5 6] is [4 5 6; -1 -2 -3] . This is a matrix product . Two matrices have compatible sizes and , and the product is of size .    Matrix multiplication is not commutative   Write a script which illustrates that the product of two 2 2 matrices depends on their order.    A = [1 2; 3 4]; B = [5 6; 7 8]; disp(A*B) disp(B*A)  Remark: the particular numbers are not important: if you fill two square matrices with random nonzero numbers, you will probably find their product depends on the order of term.    "
},
{
  "id": "section-operations-vectors-matrices-4",
  "level": "2",
  "url": "section-operations-vectors-matrices.html#section-operations-vectors-matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar product dot product matrix-vector matrix product "
},
{
  "id": "section-operations-vectors-matrices-5",
  "level": "2",
  "url": "section-operations-vectors-matrices.html#section-operations-vectors-matrices-5",
  "type": "Example",
  "number": "1.4.1",
  "title": "Matrix multiplication is not commutative.",
  "body": " Matrix multiplication is not commutative   Write a script which illustrates that the product of two 2 2 matrices depends on their order.    A = [1 2; 3 4]; B = [5 6; 7 8]; disp(A*B) disp(B*A)  Remark: the particular numbers are not important: if you fill two square matrices with random nonzero numbers, you will probably find their product depends on the order of term.   "
},
{
  "id": "section-indexing-vectors-matrices",
  "level": "1",
  "url": "section-indexing-vectors-matrices.html",
  "type": "Section",
  "number": "1.5",
  "title": "Accessing the entries of vectors and matrices",
  "body": " Accessing the entries of vectors and matrices  We often need to manipulate matrices and vectors by extracting, replacing or rearranging some elements. The elements are indexed starting with 1 : so, after executing v = [8 6 -4] we find that v(1) is 8, v(2) is 6, and v(3) is -4. One can also use indexing from the end of the vector: v(end) is -4, v(end-1) is 6, and so on. For a matrix the indexes are ordered as (row, column). So, if A = [5 6 7; 9 8 6] , then A(1, 3) is 7 and A(2, 1) is 9.  A powerful tool for working with matrices is the colon : selector . When it replaces an index, it means run through all values of that index . Given a matrix A, we can use A(1, :) to get its first row, A(:, 2) to get the second column, and A(:, end) for the last column.  We can use a vector of indexes to extract several elements of a vector or a matrix. For example, v(3:end-1) extracts all entries of v starting with the 3rd one and ending with the one before the last. If v was [8 6 4 3 2 1] , the result would be [4 3 2] . For another example, v(2:2:end) extracts all even-numbered elements of v. In the above example this would be [6 3 1] . For a matrix A , we can select both rows and columns at the same time: A(2:3, 2:5) means taking the elements of A that appear in rows 2-3 and in columns 2-5. The result is a submatrix of size 2 4.  The entries can also be assigned, for example v(2:2:end) = -3 makes all even-numbered entries of vector v equal to -3.   Extracting submatrices   Display the 2 2 submatrix in the middle of a given 4 4 matrix such as     A = [1 2 3 4; 5 6 7 8; 9 10 11 12; 13 14 15 16]; B = A(2:3, 2:3); disp(B)    "
},
{
  "id": "section-indexing-vectors-matrices-3",
  "level": "2",
  "url": "section-indexing-vectors-matrices.html#section-indexing-vectors-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "colon : selector "
},
{
  "id": "section-indexing-vectors-matrices-4",
  "level": "2",
  "url": "section-indexing-vectors-matrices.html#section-indexing-vectors-matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector of indexes "
},
{
  "id": "section-indexing-vectors-matrices-6",
  "level": "2",
  "url": "section-indexing-vectors-matrices.html#section-indexing-vectors-matrices-6",
  "type": "Example",
  "number": "1.5.1",
  "title": "Extracting submatrices.",
  "body": " Extracting submatrices   Display the 2 2 submatrix in the middle of a given 4 4 matrix such as     A = [1 2 3 4; 5 6 7 8; 9 10 11 12; 13 14 15 16]; B = A(2:3, 2:3); disp(B)   "
},
{
  "id": "section-comments-sections",
  "level": "1",
  "url": "section-comments-sections.html",
  "type": "Section",
  "number": "1.6",
  "title": "Comments and sections in a script",
  "body": " Comments and sections in a script  Any text after percent sign % is treated as a comment . A comment can appear on its own line or at the end of a line with code. a = 3; % let's increase a by 1 a = a + 1; % now a is equal to 4   A line that begins with two percent signs %% begins a new section of Matlab script: %% problem 1 disp(log(pi)) % the natural logarithm of pi %% problem 2 disp(log10(pi)) % the base-10 logarithm of pi Clicking Run or pressing F5 runs the entire script. But clicking Run Section or pressing Ctrl + Enter runs only the current selection.  For Octave users: currently Octave does not have Run Section but it has Run Selection ( F9 ) which executes the currently selected part of code.  "
},
{
  "id": "section-comments-sections-2",
  "level": "2",
  "url": "section-comments-sections.html#section-comments-sections-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "comment "
},
{
  "id": "section-comments-sections-3",
  "level": "2",
  "url": "section-comments-sections.html#section-comments-sections-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "section "
},
{
  "id": "examples-matrices-vectors",
  "level": "1",
  "url": "examples-matrices-vectors.html",
  "type": "Section",
  "number": "1.7",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Scalar product of two vectors   Write a script that calculates and displays the scalar product of two vectors: [1 2 ... n] and [n n-1 ... 1]. Use the first two digits of SUID as your value of n.    n = 28; u = 1:n; v = n:-1:1; disp(u*v')   Explanation . Recall from that a:h:b means a regularly spaced vector whose entries start with a , and then change by amount h until reaching b . When h is omitted, it is understood to be 1. So, this code makes u equal to [1 2 ... 28] and v equal to [28 27 ... 1]. Both are row vectors. Transposing the second vector into a column is necessary for their product to make sense, as noted in . Note that each of these lines ends with a semicolon, which prevents the intermediate results from being displayed on screen. Then disp displays the final result.     Create a vector for use in Simpson's method   Write a script that creates and displays a row vector with 25 elements of the form [1 4 2 4 2 ... 2 4 1]. This particular sequence of numbers is used in Simpson's Method of numerical integration which we will encounter later.    v = ones(1, 25); v(2:2:end) = 4; v(3:2:end-2) = 2; disp(v)   Explanation . The first line creates a vector of 25 ones, the second changes its even-numbered entries to 4, the third changes odd-numbered entries (except the first and last) to 2. Re-read if this is unclear.     Checkerboard matrix   Create and display a checkerboard matrix of size 8 8: it should look like 1 0 1 0 ... 0 1 0 1 ... 1 0 1 0 ... ...........     A = zeros(8, 8); A(1:2:end, 1:2:end) = 1; A(2:2:end, 2:2:end) = 1; disp(A)   Explanation . The first line creates an 8 8 matrix of zeros. The second works with the entries where both the row number and column number are odd , changing them to 1. The third does the same when both row and column numbers are even . The result is a checkerboard.    Different order of multiplication  If in we multiply the vectors in the different order, v'*u , there is no error message and Matlab produces a result. What does this result mean?  Even vs odd in Simpson's method  In , the pattern 14242....4241 requires an odd number of elements. We had 25 which is an odd number. If 25 is replaced by an even number, Matlab would not complain but the result would have a different pattern. What would it be? Try to answer without running Matlab.  "
},
{
  "id": "example-scalar-product",
  "level": "2",
  "url": "examples-matrices-vectors.html#example-scalar-product",
  "type": "Example",
  "number": "1.7.1",
  "title": "Scalar product of two vectors.",
  "body": " Scalar product of two vectors   Write a script that calculates and displays the scalar product of two vectors: [1 2 ... n] and [n n-1 ... 1]. Use the first two digits of SUID as your value of n.    n = 28; u = 1:n; v = n:-1:1; disp(u*v')   Explanation . Recall from that a:h:b means a regularly spaced vector whose entries start with a , and then change by amount h until reaching b . When h is omitted, it is understood to be 1. So, this code makes u equal to [1 2 ... 28] and v equal to [28 27 ... 1]. Both are row vectors. Transposing the second vector into a column is necessary for their product to make sense, as noted in . Note that each of these lines ends with a semicolon, which prevents the intermediate results from being displayed on screen. Then disp displays the final result.   "
},
{
  "id": "example-simpson-vector",
  "level": "2",
  "url": "examples-matrices-vectors.html#example-simpson-vector",
  "type": "Example",
  "number": "1.7.2",
  "title": "Create a vector for use in Simpson’s method.",
  "body": " Create a vector for use in Simpson's method   Write a script that creates and displays a row vector with 25 elements of the form [1 4 2 4 2 ... 2 4 1]. This particular sequence of numbers is used in Simpson's Method of numerical integration which we will encounter later.    v = ones(1, 25); v(2:2:end) = 4; v(3:2:end-2) = 2; disp(v)   Explanation . The first line creates a vector of 25 ones, the second changes its even-numbered entries to 4, the third changes odd-numbered entries (except the first and last) to 2. Re-read if this is unclear.   "
},
{
  "id": "examples-matrices-vectors-5",
  "level": "2",
  "url": "examples-matrices-vectors.html#examples-matrices-vectors-5",
  "type": "Example",
  "number": "1.7.3",
  "title": "Checkerboard matrix.",
  "body": " Checkerboard matrix   Create and display a checkerboard matrix of size 8 8: it should look like 1 0 1 0 ... 0 1 0 1 ... 1 0 1 0 ... ...........     A = zeros(8, 8); A(1:2:end, 1:2:end) = 1; A(2:2:end, 2:2:end) = 1; disp(A)   Explanation . The first line creates an 8 8 matrix of zeros. The second works with the entries where both the row number and column number are odd , changing them to 1. The third does the same when both row and column numbers are even . The result is a checkerboard.   "
},
{
  "id": "examples-matrices-vectors-6",
  "level": "2",
  "url": "examples-matrices-vectors.html#examples-matrices-vectors-6",
  "type": "Question",
  "number": "1.7.4",
  "title": "Different order of multiplication.",
  "body": "Different order of multiplication  If in we multiply the vectors in the different order, v'*u , there is no error message and Matlab produces a result. What does this result mean? "
},
{
  "id": "examples-matrices-vectors-7",
  "level": "2",
  "url": "examples-matrices-vectors.html#examples-matrices-vectors-7",
  "type": "Question",
  "number": "1.7.5",
  "title": "Even vs odd in Simpson’s method.",
  "body": "Even vs odd in Simpson's method  In , the pattern 14242....4241 requires an odd number of elements. We had 25 which is an odd number. If 25 is replaced by an even number, Matlab would not complain but the result would have a different pattern. What would it be? Try to answer without running Matlab. "
},
{
  "id": "exercises-matrices-vectors",
  "level": "1",
  "url": "exercises-matrices-vectors.html",
  "type": "Exercises",
  "number": "1.8",
  "title": "Homework",
  "body": " Homework    Suppose that A is a matrix. Describe, in words, the following objects:  A(3, :)  A(:, end-2)  A(1:2, end-1:end)  A(1:2:end, 1)  A(:, end:-1:1)        Write a script to do the following:  x = (first 5 digits of your SUID); y = (all entries of x except first); z = (all entries of x except last); u = (the sum of vectors y and z); v = (the scalar product of vectors y and z, also known as the dot product in Calculus);  Then display u and v using disp .  Note that y and z must be computed from the vector x , not entered number-by-number.      Write a script that does the following:  Let A be some 3 by 3 matrix filled with numbers 1,2, ,9  Let x be the product of A and a row vector with all entries equal to 1 (think about the correct order of multiplication).  Let y be the product of A and a column vector with all entries equal to 1.  When uploading your script to Blackboard, leave a comment with answers to the following questions:  What is the meaning of the entries of x ? In other words, what information about A do we get from the entries of x ?  What is the meaning of the entries of y ?     Both x and y represent certain sums .   "
},
{
  "id": "exercises-matrices-vectors-2",
  "level": "2",
  "url": "exercises-matrices-vectors.html#exercises-matrices-vectors-2",
  "type": "Exercise",
  "number": "1.8.1",
  "title": "",
  "body": "  Suppose that A is a matrix. Describe, in words, the following objects:  A(3, :)  A(:, end-2)  A(1:2, end-1:end)  A(1:2:end, 1)  A(:, end:-1:1)     "
},
{
  "id": "exercises-matrices-vectors-3",
  "level": "2",
  "url": "exercises-matrices-vectors.html#exercises-matrices-vectors-3",
  "type": "Exercise",
  "number": "1.8.2",
  "title": "",
  "body": "  Write a script to do the following:  x = (first 5 digits of your SUID); y = (all entries of x except first); z = (all entries of x except last); u = (the sum of vectors y and z); v = (the scalar product of vectors y and z, also known as the dot product in Calculus);  Then display u and v using disp .  Note that y and z must be computed from the vector x , not entered number-by-number.   "
},
{
  "id": "exercises-matrices-vectors-4",
  "level": "2",
  "url": "exercises-matrices-vectors.html#exercises-matrices-vectors-4",
  "type": "Exercise",
  "number": "1.8.3",
  "title": "",
  "body": "  Write a script that does the following:  Let A be some 3 by 3 matrix filled with numbers 1,2, ,9  Let x be the product of A and a row vector with all entries equal to 1 (think about the correct order of multiplication).  Let y be the product of A and a column vector with all entries equal to 1.  When uploading your script to Blackboard, leave a comment with answers to the following questions:  What is the meaning of the entries of x ? In other words, what information about A do we get from the entries of x ?  What is the meaning of the entries of y ?     Both x and y represent certain sums .  "
},
{
  "id": "section-linear-systems",
  "level": "1",
  "url": "section-linear-systems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Systems of linear equations",
  "body": " Systems of linear equations  A system of linear equations, such as can be written in matrix form as where is the matrix of coefficients, and is the column vector on the right-hand side: The Matlab command for solving is very short: x = A\\b The result is the column vector [1.2632; -1.1053] , meaning that and .  Mathematically, could be found as where is the inverse matrix. However, this is not a computationally efficient way to solve a linear system. Matlab does not actually compute the inverse matrix when solving a linear system. It chooses one of several algorithms based on the nature of the matrix; usually it is a form of LU factorization which is discussed in MAT 532. But even though the formula is not actually used, it suggests the notation used by Matlab. For two numbers we can write as b\/a , meaning divided by . If the order of multiplication was important (as it is for matrices), then perhaps could be written as a\\b , meaning divided by  from the left . We do not actually divide a vector by a matrix but the notation A\\b can remind us of .   Solve and verify   Write a Matlab script which solves the linear system and then plug the solution into the left hand side to check that the solution is correct.    A = [5 3 0; -2 1 -6; 0 3 1]; b = [2; 0; 3]; x = A\\b; disp(x) disp(A*x)    "
},
{
  "id": "section-linear-systems-4",
  "level": "2",
  "url": "section-linear-systems.html#section-linear-systems-4",
  "type": "Example",
  "number": "2.1.1",
  "title": "Solve and verify.",
  "body": " Solve and verify   Write a Matlab script which solves the linear system and then plug the solution into the left hand side to check that the solution is correct.    A = [5 3 0; -2 1 -6; 0 3 1]; b = [2; 0; 3]; x = A\\b; disp(x) disp(A*x)   "
},
{
  "id": "section-large-matrices",
  "level": "1",
  "url": "section-large-matrices.html",
  "type": "Section",
  "number": "2.2",
  "title": "More tools for constructing matrices",
  "body": " More tools for constructing matrices  The number of coefficients in a linear system grows rapidly with its size: a system with 20 equations and 20 variables has a matrix with 400 coefficients. Entering these by hand would be tedious. We already have two ways to construct large matrices: zeros(m, n) and ones(m, n) but these are not invertible matrices. This section presents two other useful constructions.  The identity matrix is usually denoted in mathematics, or if it is necessary to emphasize its size. For example, In Matlab this matrix would be created as eye(3) . The name of the command was chosen because eye is pronounced the same as I . We also get scalars multiples of the identity matrix, for example 5*eye(3) is   A diagonal matrix has zeros everywhere except on the main diagonal. The identity matrix is a special case of a diagonal matrix. In Matlab, the command diag(v) creates a diagonal matrix which has the elements of vector v on its main diagonal. For example, diag([6 -4 7]) creates the matrix   Some problems in engineering and in differential equations lead to matrices where nonzero coefficients are close to the main diagonal but not exactly at it: for example, To construct such matrices we can use diag(v, k) which places the elements of vector v on the diagonal parallel to the main one but positions above it. So, diag(v, 1) is just above the main diagonal and diag(v, -1) is just below. The matrix shown above could be formed as diag([2 2 2 2 2]) - diag([1 1 1 1], 1) - diag([1 1 1 1], -1) This is an example of a tridiagonal matrix : there are only three diagonals with nonzero entries. More generally, a matrix is called sparse if most of its elements are 0. Large sparse matrices frequently arise in computations.   Product of sparse matrices   Let be the 9 9 matrix with -1 on the main diagonal and 1 above it. Find and display the products of with its transpose: and .    A = diag(ones(1, 8), 1) - eye(9); disp(A'*A) disp(A*A')  The two products are very similar but are not quite the same.    "
},
{
  "id": "section-large-matrices-3",
  "level": "2",
  "url": "section-large-matrices.html#section-large-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "section-large-matrices-4",
  "level": "2",
  "url": "section-large-matrices.html#section-large-matrices-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "diagonal matrix "
},
{
  "id": "section-large-matrices-5",
  "level": "2",
  "url": "section-large-matrices.html#section-large-matrices-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tridiagonal matrix sparse "
},
{
  "id": "section-large-matrices-6",
  "level": "2",
  "url": "section-large-matrices.html#section-large-matrices-6",
  "type": "Example",
  "number": "2.2.1",
  "title": "Product of sparse matrices.",
  "body": " Product of sparse matrices   Let be the 9 9 matrix with -1 on the main diagonal and 1 above it. Find and display the products of with its transpose: and .    A = diag(ones(1, 8), 1) - eye(9); disp(A'*A) disp(A*A')  The two products are very similar but are not quite the same.   "
},
{
  "id": "section-vectorization",
  "level": "1",
  "url": "section-vectorization.html",
  "type": "Section",
  "number": "2.3",
  "title": "Array operations",
  "body": " Array operations  Matlab supports array operations in which the input data is placed into an array (usually a vector or a matrix) and some mathematical operation is carried out on all of the data at once. For example, to get the square roots of the first 25 positive integers we can execute sqrt(1:25) with the result [1.0000 1.4142 1.7321 2.0000 2.2361 ... 4.8990 5.0000] More generally, if v is a vector of nonnegative numbers, then sqrt(v) has the roots of those numbers. Other functions like sin and exp work the same way. The benefts of array operations are more compact code and faster execution.  Suppose v = [5 2 -3] and we want to get the squares of the elements of v . By analogy with the above, we try v^2 but get an error . The problem is that squaring v is understood as v*v which in Matlab means multiplication according to the rules of . The row vector v is treated as a matrix of size 1 3. And one cannot multiply a 1 3 matrix by another 1 3 matrix: the inner dimensions do not match. But we just want elementwise squaring, not any kind of matrix multiplication. To tell Matlab this, put a period . before the operation character: v.^2 gives [25 4 9] . Similarly, .* and .\/ are used for elementwise multiplication and division: [3 4].*[2 -5] is [6 -20] and [3 4].\/[2 -5] is [1.5 -0.8] . We never need a period in front of + or - because these operations are always performed elementwise.  Summary : without a preceding period, * , \/ and ^ refer to what we do with matrices and vectors in linear algebra. Adding a period tells Matlab to forget about linear algebra and handle each term individually. Compare two ways to multiply the matrices The command [3 -2; 2 5] * [-5 4; 1 3] produces which is the matrix product according to linear algebra. The command [3 -2; 2 5] .* [-5 4; 1 3] produces which is the elementwise product: it would be considered a wrong way to multiply matrices in a linear algebra course.   Roots of integers   Use array operations to display the numbers for . What value of has the largest such root?    v = 1:10; disp(v.^(1.\/v))  The root is largest for .  Note that both periods are necessary. Without the second one, Matlab would try to interpet 1\/v as a linear system with coefficients v and right hand side 1 , which is not what we want. With 1.\/v we get the vector [1\/1 1\/2 1\/3 ...] . Similarly, without the first period Matlab would try to interpret v^(...) as a matrix power, which would not make sense either.    "
},
{
  "id": "section-vectorization-2",
  "level": "2",
  "url": "section-vectorization.html#section-vectorization-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "array operations "
},
{
  "id": "section-vectorization-5",
  "level": "2",
  "url": "section-vectorization.html#section-vectorization-5",
  "type": "Example",
  "number": "2.3.1",
  "title": "Roots of integers.",
  "body": " Roots of integers   Use array operations to display the numbers for . What value of has the largest such root?    v = 1:10; disp(v.^(1.\/v))  The root is largest for .  Note that both periods are necessary. Without the second one, Matlab would try to interpet 1\/v as a linear system with coefficients v and right hand side 1 , which is not what we want. With 1.\/v we get the vector [1\/1 1\/2 1\/3 ...] . Similarly, without the first period Matlab would try to interpret v^(...) as a matrix power, which would not make sense either.   "
},
{
  "id": "section-array-expansion",
  "level": "1",
  "url": "section-array-expansion.html",
  "type": "Section",
  "number": "2.4",
  "title": "Implicit expansion of arrays",
  "body": " Implicit expansion of arrays  Sometimes we can apply an elementwise array operation to two arrays of different sizes. The rule is that the array sizes must match, but number 1 matches any number. For example, the following commands work, and produce a 3 5 matrix of 2s:   ones(3, 1) + ones(3, 5)    ones(1, 5) + ones(3, 5)    ones(1, 5) + ones(3, 1)     The reason is that a matrix with 1 column can be turned into a matrix with 5 columns just by repeating the same column 5 times. This kind of expansion by repetition creates 3 5 matrices in each of the above examples. For a more interesting example, try (1:6) + (1:6)' - 1 which combines a row vector (size 1 6) with a column vector (size 6 1) and a scalar (size 1 1). The array expansion results in a neat 6 6 matrix:  1 2 3 4 5 6 2 3 4 5 6 7 3 4 5 6 7 8 4 5 6 7 8 9 5 6 7 8 9 10 6 7 8 9 10 11  In contrast, ones(3, 2) + ones(3, 5) does not work: the numbers 2 and 5 are not equal, and neither of them is 1.   Multiplication table   Display the multiplication table of size 9 9, that is a matrix of products of integers from 1 to 9.    A = (1:9).*(1:9)'; disp(A)  The output is shown below.  1 2 3 4 5 6 7 8 9 2 4 6 8 10 12 14 16 18 3 6 9 12 15 18 21 24 27 4 8 12 16 20 24 28 32 36 5 10 15 20 25 30 35 40 45 6 12 18 24 30 36 42 48 54 7 14 21 28 35 42 49 56 63 8 16 24 32 40 48 56 64 72 9 18 27 36 45 54 63 72 81  Note that without the period we would get the single number 285 instead. (Why this number?)   "
},
{
  "id": "section-array-expansion-6",
  "level": "2",
  "url": "section-array-expansion.html#section-array-expansion-6",
  "type": "Example",
  "number": "2.4.1",
  "title": "Multiplication table.",
  "body": " Multiplication table   Display the multiplication table of size 9 9, that is a matrix of products of integers from 1 to 9.    A = (1:9).*(1:9)'; disp(A)  The output is shown below.  1 2 3 4 5 6 7 8 9 2 4 6 8 10 12 14 16 18 3 6 9 12 15 18 21 24 27 4 8 12 16 20 24 28 32 36 5 10 15 20 25 30 35 40 45 6 12 18 24 30 36 42 48 54 7 14 21 28 35 42 49 56 63 8 16 24 32 40 48 56 64 72 9 18 27 36 45 54 63 72 81  Note that without the period we would get the single number 285 instead. (Why this number?)  "
},
{
  "id": "section-plotting",
  "level": "1",
  "url": "section-plotting.html",
  "type": "Section",
  "number": "2.5",
  "title": "Plotting",
  "body": " Plotting  The command plot(x, y) receives two vectors: the first has x-coordinates of the points to be shown, the second has y-coordinates. It also connects these points by lines. So, for example, plot([1 2 5 6], [5 0.4 2 1]) produces the following plot:   A plot based on four points  Sometimes we do not want to connect the points by a line: treating them as individual data points rather than representative of some function . If so, plot([1 2 5 6], [5 0.4 2 1], '*') simply puts an asterisk * for each point, without connecting them.   Four points (two are hard to see because of the axes)  Let us plot the function on the interval :  x = 0:0.1:3; y = x.^3 .* exp(-2*x); plot(x, y)  In the first line, I chose 0.1 as the step size for the x-interval. It would be a mistake to use x = 0:3 because the step size of 1 unit would make a very rough (low-resolution) plot with only four points used. The step size could be 0.01 instead: we may get smoother graph at the expense of more computations. The second line compute the y-values. Consider the following: The period in x.^3 is required to have elementwise power operation  We do not need a period in -2*x because multiplying a vector by a scalar already works elementwise. There is no difference between -2*x and -2.*x  We need .* to multiply two vectors elementwise.  Whitespace around .* is not necessary but some people find x.^3.*exp(-2*x) harder to read because 3. looks like a decimal dot after 3.     Plot of the function on the interval   Specifying the x-values by choosing step size like in x = 0:0.1:3 can be tedious, because the same step size would not work as well for the intervals or for . The command linspace can be more convenient: linspace(a, b, n) creates a vector with n uniformly spaced numbers from a to b . Usually, 500 points are enough for a smooth plot, so one can reasonably use x = linspace(a, b, 500) for plots no matter how small or large the interval is.   Parametric plot   Draw the curve with parametric equations where .    t = linspace(0, 20, 500); plot(t.*cos(t), t.*sin(t))  This curve is called the Archimedean spiral .    "
},
{
  "id": "section-plotting-3",
  "level": "2",
  "url": "section-plotting.html#section-plotting-3",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " A plot based on four points "
},
{
  "id": "section-plotting-5",
  "level": "2",
  "url": "section-plotting.html#section-plotting-5",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " Four points (two are hard to see because of the axes) "
},
{
  "id": "section-plotting-9",
  "level": "2",
  "url": "section-plotting.html#section-plotting-9",
  "type": "Figure",
  "number": "2.5.3",
  "title": "",
  "body": " Plot of the function on the interval  "
},
{
  "id": "section-plotting-11",
  "level": "2",
  "url": "section-plotting.html#section-plotting-11",
  "type": "Example",
  "number": "2.5.4",
  "title": "Parametric plot.",
  "body": " Parametric plot   Draw the curve with parametric equations where .    t = linspace(0, 20, 500); plot(t.*cos(t), t.*sin(t))  This curve is called the Archimedean spiral .   "
},
{
  "id": "examples-systems-vectorization-plots",
  "level": "1",
  "url": "examples-systems-vectorization-plots.html",
  "type": "Section",
  "number": "2.6",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.  Tridiagonal matrix of arbitrary size  Given a positive integer , construct a tridiagonal matrix which has entries -1, 2, -1 (as in ) and size .   diag(2*ones(1, n)) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  or  2*diag(ones(1, n)) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  or  2*eye(n) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  It is important to recognize why n-1 appears above. The main diagonal has length n but the diagonals next to it are shorter by 1 element, so their length is n-1 .     Solving a tridiagonal system  Solve the system of linear equations Use the first two digits of your SUID as the value of .   n = 28; A = 3*eye(n) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1); b = zeros(n, 1); b(1) = 1; b(end) = 2; x = A\\b; disp(x)  Explanation . The coefficient matrix has 3 on the main diagonal, and -1 above and below it. This matrix is created with the help of diag as explained in . The right-hand size column vector begins with all-zeros: note that zeros(n, 1) is a column of zeros, while zeros(1, n) is a row of zeros. The first and last entries of b are changed as described in the system.     Table of squares and cubes of small integers  Create a 3 9 matrix which has the integers 1 through 9 in the first row, their squares in the second row, and their cubes in the third row.  The single line A = (1:9).^((1:3)') does the job. The elementwise operation .^ can combine the arrays of sizes 1 9 and 3 1, as explained in . The result is a 3 9 matrix with the expected property: the base (1 through 9) is the column number, the exponent (1 through 3) is the row number.     Plot of a function  Plot the function on the interval    x = linspace(-1, 5, 500); y = (x - 1).\/(x.^2 + 1); plot(x, y)   Plot of on   Note the use of semicolons to prevent Matlab from displaying hundreds of numbers that we do not need to see.    x as a function of y  How would you plot a function where is given as a function of , for example with ?  A wrong way to multiply matrices  Can you imagine a situation where you would want to compute A.*B where both A and B are square matrices of the same size?  An idea: a matrix can be used to store a greyscale image, so that each entry is the brightness of the corresponding pixel. What would elementwise multiplication A.*B mean in this context?  "
},
{
  "id": "examples-systems-vectorization-plots-3",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-3",
  "type": "Example",
  "number": "2.6.1",
  "title": "Tridiagonal matrix of arbitrary size.",
  "body": "Tridiagonal matrix of arbitrary size  Given a positive integer , construct a tridiagonal matrix which has entries -1, 2, -1 (as in ) and size .   diag(2*ones(1, n)) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  or  2*diag(ones(1, n)) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  or  2*eye(n) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1)  It is important to recognize why n-1 appears above. The main diagonal has length n but the diagonals next to it are shorter by 1 element, so their length is n-1 .   "
},
{
  "id": "examples-systems-vectorization-plots-4",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-4",
  "type": "Example",
  "number": "2.6.2",
  "title": "Solving a tridiagonal system.",
  "body": " Solving a tridiagonal system  Solve the system of linear equations Use the first two digits of your SUID as the value of .   n = 28; A = 3*eye(n) - diag(ones(1, n-1), 1) - diag(ones(1, n-1), -1); b = zeros(n, 1); b(1) = 1; b(end) = 2; x = A\\b; disp(x)  Explanation . The coefficient matrix has 3 on the main diagonal, and -1 above and below it. This matrix is created with the help of diag as explained in . The right-hand size column vector begins with all-zeros: note that zeros(n, 1) is a column of zeros, while zeros(1, n) is a row of zeros. The first and last entries of b are changed as described in the system.   "
},
{
  "id": "examples-systems-vectorization-plots-5",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-5",
  "type": "Example",
  "number": "2.6.3",
  "title": "Table of squares and cubes of small integers.",
  "body": " Table of squares and cubes of small integers  Create a 3 9 matrix which has the integers 1 through 9 in the first row, their squares in the second row, and their cubes in the third row.  The single line A = (1:9).^((1:3)') does the job. The elementwise operation .^ can combine the arrays of sizes 1 9 and 3 1, as explained in . The result is a 3 9 matrix with the expected property: the base (1 through 9) is the column number, the exponent (1 through 3) is the row number.   "
},
{
  "id": "examples-systems-vectorization-plots-6",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-6",
  "type": "Example",
  "number": "2.6.4",
  "title": "Plot of a function.",
  "body": " Plot of a function  Plot the function on the interval    x = linspace(-1, 5, 500); y = (x - 1).\/(x.^2 + 1); plot(x, y)   Plot of on   Note the use of semicolons to prevent Matlab from displaying hundreds of numbers that we do not need to see.   "
},
{
  "id": "examples-systems-vectorization-plots-7",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-7",
  "type": "Question",
  "number": "2.6.6",
  "title": "x as a function of y.",
  "body": "x as a function of y  How would you plot a function where is given as a function of , for example with ? "
},
{
  "id": "examples-systems-vectorization-plots-8",
  "level": "2",
  "url": "examples-systems-vectorization-plots.html#examples-systems-vectorization-plots-8",
  "type": "Question",
  "number": "2.6.7",
  "title": "A “wrong” way to multiply matrices.",
  "body": "A wrong way to multiply matrices  Can you imagine a situation where you would want to compute A.*B where both A and B are square matrices of the same size?  An idea: a matrix can be used to store a greyscale image, so that each entry is the brightness of the corresponding pixel. What would elementwise multiplication A.*B mean in this context? "
},
{
  "id": "exercises-systems-vectorization-plots",
  "level": "1",
  "url": "exercises-systems-vectorization-plots.html",
  "type": "Exercises",
  "number": "2.7",
  "title": "Homework",
  "body": " Homework    The Fibonacci numbers are defined by the following relations: , , then , , and so on: every number is the sum of two previous ones, . We can consider these relations as a system of linear equations with unknowns (to see this, move all the unknowns to the left, leaving constant terms on the right).    Find the first 30 Fibonacci numbers using Matlab's linear solver A\\b . To achieve this, you will first need to create a matrix of the linear system and then create a column vector b where the first two coordinates are and the rest are . The commands eye , diag , ones , and zeros will help.  Using the same method, find the first 30 generalized Fibonacci numbers that begin with numbers instead of . Use the first two digits of your SUID number as the starting values . (For example, if your SUID begins with 2067 then , .)        Write a script to do the following:    Create a 10 10 matrix A with 2 on the main diagonal, and -1 next to it (both above and below).  Solve the linear system where is the vector Use a regularly-spaced vector, transpose, and sqrt to create .  Plot the solution against the vector of 10 equally spaced numbers, beginning with 0 and ending with 1. The linspace command will be useful.    "
},
{
  "id": "exercises-systems-vectorization-plots-2",
  "level": "2",
  "url": "exercises-systems-vectorization-plots.html#exercises-systems-vectorization-plots-2",
  "type": "Exercise",
  "number": "2.7.1",
  "title": "",
  "body": "  The Fibonacci numbers are defined by the following relations: , , then , , and so on: every number is the sum of two previous ones, . We can consider these relations as a system of linear equations with unknowns (to see this, move all the unknowns to the left, leaving constant terms on the right).    Find the first 30 Fibonacci numbers using Matlab's linear solver A\\b . To achieve this, you will first need to create a matrix of the linear system and then create a column vector b where the first two coordinates are and the rest are . The commands eye , diag , ones , and zeros will help.  Using the same method, find the first 30 generalized Fibonacci numbers that begin with numbers instead of . Use the first two digits of your SUID number as the starting values . (For example, if your SUID begins with 2067 then , .)     "
},
{
  "id": "exercises-systems-vectorization-plots-3",
  "level": "2",
  "url": "exercises-systems-vectorization-plots.html#exercises-systems-vectorization-plots-3",
  "type": "Exercise",
  "number": "2.7.2",
  "title": "",
  "body": "  Write a script to do the following:    Create a 10 10 matrix A with 2 on the main diagonal, and -1 next to it (both above and below).  Solve the linear system where is the vector Use a regularly-spaced vector, transpose, and sqrt to create .  Plot the solution against the vector of 10 equally spaced numbers, beginning with 0 and ending with 1. The linspace command will be useful.   "
},
{
  "id": "section-builtin-functions",
  "level": "1",
  "url": "section-builtin-functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Built-in functions",
  "body": " Built-in functions  Mathematical functions in Matlab have recognizable names: sqrt , log (meaning natural logarithm, base e), exp , abs (absolute value), sin , cos and so on. They can be applied to vectors or matrices elementwise: for example exp([1 2 3]) returns a vector with components .  There are also aggregate functions which are useful for summarizing data. The most important of these are sum (sum of values), max (maximum) and min (minimum). When applied to a vector, these functions return a single number. So, if v = [3 1 4 1] then sum(v) is 9, max(v) is 4, and min(v) is 1.   Sum of cubes   Find the sum of cubes of the integers from 1 to 10.    sum((1:10).^3)  Note that the parentheses are important here: sum(1:10.^3) would be the sum of all integers from 1 to 1000.    Aggregate functions get more complicated (and powerful) when they are applied to matrices. In this case they do not return a single number. Given a matrix A, for example A = [3 9; 5 2] , we can find its:  Column sums with sum(A, 1) : the result is a row vector [8 11] which contains the sum of each column.  Row sums with sum(A, 2) : the result is a column vector [12; 7] which contains the sum of each row.  The second argument (1 or 2) means that we sum along the 1st index (row index) or 2nd index (column index). Summing along the row index means A(1, 1) + A(2, 1) + A(3, 1) + ... which produces the sum within each column. Entering sum(A) has the same effect as sum(A, 1) .  Stacking the columns of a matrix . When we want the sum (or another aggregate function) of all entries of matrix A, we can stack the columns of A using a single colon: A(:) . Then an aggregate function can be applied to this column. For example, if A = [1 2; 3 4] then A(:) is the column [1; 3; 2; 4] and sum(A(:)) is 10.   Maximum and minimum of row sums   Given a matrix, such as A = [3 6; -8 4; 10 1] find its maximal absolute row sum , meaning add up the absolute values of the elements within each row, and take the maximum of the results.    max(sum(abs(A), 2))  The result is 12, coming from the second row. The maximal absolute row sum is important in applied linear algebra. It is one of several norms that can be defined for a matrix.    "
},
{
  "id": "section-builtin-functions-3",
  "level": "2",
  "url": "section-builtin-functions.html#section-builtin-functions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "aggregate functions "
},
{
  "id": "section-builtin-functions-4",
  "level": "2",
  "url": "section-builtin-functions.html#section-builtin-functions-4",
  "type": "Example",
  "number": "3.1.1",
  "title": "Sum of cubes.",
  "body": " Sum of cubes   Find the sum of cubes of the integers from 1 to 10.    sum((1:10).^3)  Note that the parentheses are important here: sum(1:10.^3) would be the sum of all integers from 1 to 1000.   "
},
{
  "id": "section-builtin-functions-5",
  "level": "2",
  "url": "section-builtin-functions.html#section-builtin-functions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Column sums Row sums "
},
{
  "id": "section-builtin-functions-6",
  "level": "2",
  "url": "section-builtin-functions.html#section-builtin-functions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stack "
},
{
  "id": "section-builtin-functions-7",
  "level": "2",
  "url": "section-builtin-functions.html#section-builtin-functions-7",
  "type": "Example",
  "number": "3.1.2",
  "title": "Maximum and minimum of row sums.",
  "body": " Maximum and minimum of row sums   Given a matrix, such as A = [3 6; -8 4; 10 1] find its maximal absolute row sum , meaning add up the absolute values of the elements within each row, and take the maximum of the results.    max(sum(abs(A), 2))  The result is 12, coming from the second row. The maximal absolute row sum is important in applied linear algebra. It is one of several norms that can be defined for a matrix.   "
},
{
  "id": "section-random-numbers-histograms",
  "level": "1",
  "url": "section-random-numbers-histograms.html",
  "type": "Section",
  "number": "3.2",
  "title": "Random numbers and histograms",
  "body": " Random numbers and histograms  The command rand produces random numbers uniformly distributed in the interval from 0 to 1. Without providing parameters, we get a single number: x = rand() can make x equal to, for example, 0.8248. With parameters rand(m, n) we get a random m n matrix, meaning a matrix in which each entry is chosen randomly.  The command histogram(v, k) displays a histograph of the data collected in vector v using k bins. This means that the interval from min(v) to max(v) is divided into k equal subintervals, and the histogram counts how many data points fall in each subinterval. If the number of bins k is not provided, Matlab will try to choose it itself. Usually we want 10-50 bins. For example, v = rand(1, 10000); histogram(v, 20); produces a histogram from 10000 random numbers. This will not be an interesting histogram since the numbers are uniformly distributed between 0 and 1.  For Octave users: histogram may not be available in Octave, but hist is. They are used in the same way, with one exception: to make a histogram of all entries of a matrix  A , one should use hist(A(:)) to flatten the matrix into a vector. With histogram this flattening is automatic, so histogram(A) works.   Distribution of sums of random numbers   Suppose we take 10 random numbers, uniformly distributed between 0 and 1, and compute their sum. Repeating this experiment 10000 times, we get 10000 such sums. Plot the histogram of these random sums.    A = rand(10, 10000); S = sum(A, 1); histogram(S, 30);  This histogram resembles a bell curve of normal distribution. The similarly grows stronger if we take sums of more numbers, and plot more random sums. This is the content of Central Limit Theorem in probability.    "
},
{
  "id": "example-sums-random",
  "level": "2",
  "url": "section-random-numbers-histograms.html#example-sums-random",
  "type": "Example",
  "number": "3.2.1",
  "title": "Distribution of sums of random numbers.",
  "body": " Distribution of sums of random numbers   Suppose we take 10 random numbers, uniformly distributed between 0 and 1, and compute their sum. Repeating this experiment 10000 times, we get 10000 such sums. Plot the histogram of these random sums.    A = rand(10, 10000); S = sum(A, 1); histogram(S, 30);  This histogram resembles a bell curve of normal distribution. The similarly grows stronger if we take sums of more numbers, and plot more random sums. This is the content of Central Limit Theorem in probability.   "
},
{
  "id": "section-user-input",
  "level": "1",
  "url": "section-user-input.html",
  "type": "Section",
  "number": "3.3",
  "title": "User input",
  "body": " User input  When running numerical experiments like those in , it is inconvenient to edit the script every time we want to change the numbers in it, like the number of rows\/columns of a matrix. One can use user input instead, making the script interactive: m = input('Number of rows: '); n = input('Number of columns: '); The text in input command will be shown to the user as a prompt. When the user enters a number, that number gets assigned to the variable m . Same happens with n . After that the computation proceeds.   Sums of random numbers with user input   Modify so that instead of fixed numbers 10 and 10000, it takes user input for those numbers.    m = input('How many numbers in a sum? '); n = input('How many sums to compute? '); A = rand(m, n); S = sum(A, 1); histogram(S, 30)    "
},
{
  "id": "section-user-input-3",
  "level": "2",
  "url": "section-user-input.html#section-user-input-3",
  "type": "Example",
  "number": "3.3.1",
  "title": "Sums of random numbers with user input.",
  "body": " Sums of random numbers with user input   Modify so that instead of fixed numbers 10 and 10000, it takes user input for those numbers.    m = input('How many numbers in a sum? '); n = input('How many sums to compute? '); A = rand(m, n); S = sum(A, 1); histogram(S, 30)   "
},
{
  "id": "section-formatted-output",
  "level": "1",
  "url": "section-formatted-output.html",
  "type": "Section",
  "number": "3.4",
  "title": "Formatted output",
  "body": " Formatted output  We have been using disp command to display some number or text. But we may want to display a sentence with some numbers included in it. And we may want to show more (or fewer) digits than disp does. For this, the command fprintf is useful: it produces an interpolated string which combines text and numeric data according to some formatting codes. For example, fprintf('The number pi is %.15f and its cube is %.3f\\n', pi, pi^3) displays The number pi is 3.141592653589793 and its cube is 31.006 . Explanation:  The first argument of fprintf is a string, the other arguments are numbers which will be inserted into the string. Here the numbers are pi and pi cubed.  The formatting code %.15f says: insert a number with 15 digits after decimal point. This is the first formatting code, so it uses the first number provided after the string, which is pi.  The formatting code %.3f says: insert a number with 3 digits after decimal point. Since this is the second formatting code in the string, it will use the second of the numbers after the string, which is pi cubed.  The string ends with new line character \\n , which is a good idea in general. Without it, subsequent output would appear on the same line, and would be hard to read.    Note that 15-16 decimal digits is about the limit of precision in Matlab computations. If we try fprintf('The number pi is %.20f\\n', pi) the output is The number pi is 3.14159265358979310000 which looks suspicious, and for a good reason: the zeros at the end are not correct digits of pi.  For very large or very small numbers we need exponential notation. For example, if you ask Matlab to compute pi^100 it will display the answer as 5.1878e+49 . This means . The number after the letter e is the power of 10 by which we should multiply the number before e . The letter e stands for exponential not for the mathematical constant e. To use exponential notation in formatted strings, replace letter f in formatting codes by e . To remember these, note that f means Fixed decimal point, and e means Exponential notation. fprintf('The 100th power of pi is %.6e\\n', pi^100) displays the result as The 100th power of pi is 5.187848e+49 .  Often it is easiest to the formatting code g which lets Matlab decide between fixed point and exponential notation on its own, based on the size of the number. Here is an example.  x = 111.111 fprintf('The first four powers of %.6g are %.6g, %.6g, %.6g, %.6g\\n', x, x, x^2, x^3, x^4)  The output is The first four powers of 111.111 are 111.111, 12345.7, 1.37174e+06, 1.52415e+08  There is also a formatting code %d to be used for integers, when you do not want a decimal dot at all.  "
},
{
  "id": "section-formatted-output-2",
  "level": "2",
  "url": "section-formatted-output.html#section-formatted-output-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interpolated string "
},
{
  "id": "examples-functions-input-output",
  "level": "1",
  "url": "examples-functions-input-output.html",
  "type": "Section",
  "number": "3.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.  Random matrix with entries between two given numbers  Given numbers with , construct a random 5 5 matrix in which the entries are uniformly distributed between and .    A = (b-a)*rand(5, 5) + a;  Explanation : we take random numbers between 0 and 1, and then apply a linear function which sends 0 to a, and 1 to b. This function is .     Mean and median  The functions mean and median are aggregate functions which work similarly to sum . For example, mean([1 9 8 3]) is 5.25 which is . And median([1 9 8 3]) is 5.5 because when these numbers are sorted as 1, 3, 8, 9 there are two in the middle, and their average is . (When the number of data values is odd, the median is the number in the middle.)  Plot a histogram of the mean of 10 random numbers, with 10000 such means computed.    A = rand(10, 10000); m = mean(A, 1); histogram(m, 30)  Explanation . Having created a random matrix A, we take the mean of each column with mean(A, 1) . If we used median(A, 1) the result would be a similar histogram.     Difference between mean and median  For 10 randomly chosen numbers (with rand ) we can compute both mean and median. How different can these be? That is, how large can the difference |mean-median| be? Try to approach this experimentally by computing this difference 10000 times and taking the maximum.   A = rand(10, 10000); m = mean(A, 1); md = median(A, 1); disp(max(abs(m-md)))  The result of computation depends on your luck. There is no guarantee that the maximum found after 10000 random tries is close to the actual maximum.    Mean and median for a 0-1 vector  Suppose v is a vector with 10 elements, in which 6 elements are 0 and the others are 1. What are the mean and the median of v ? (You should not need a computer for this.) Is the difference between the mean and the median in this example greater than what you found experimentally in ?  Squaring a random number  We know that x = rand() produces a random number between 0 and 1. The command x = rand()^2 also produces a random number between 0 and 1. Is there a significant difference between these two ways of creating random numbers?  "
},
{
  "id": "examples-functions-input-output-3",
  "level": "2",
  "url": "examples-functions-input-output.html#examples-functions-input-output-3",
  "type": "Example",
  "number": "3.5.1",
  "title": "Random matrix with entries between two given numbers.",
  "body": "Random matrix with entries between two given numbers  Given numbers with , construct a random 5 5 matrix in which the entries are uniformly distributed between and .    A = (b-a)*rand(5, 5) + a;  Explanation : we take random numbers between 0 and 1, and then apply a linear function which sends 0 to a, and 1 to b. This function is .   "
},
{
  "id": "examples-functions-input-output-4",
  "level": "2",
  "url": "examples-functions-input-output.html#examples-functions-input-output-4",
  "type": "Example",
  "number": "3.5.2",
  "title": "Mean and median.",
  "body": " Mean and median  The functions mean and median are aggregate functions which work similarly to sum . For example, mean([1 9 8 3]) is 5.25 which is . And median([1 9 8 3]) is 5.5 because when these numbers are sorted as 1, 3, 8, 9 there are two in the middle, and their average is . (When the number of data values is odd, the median is the number in the middle.)  Plot a histogram of the mean of 10 random numbers, with 10000 such means computed.    A = rand(10, 10000); m = mean(A, 1); histogram(m, 30)  Explanation . Having created a random matrix A, we take the mean of each column with mean(A, 1) . If we used median(A, 1) the result would be a similar histogram.   "
},
{
  "id": "example-difference-mean-median",
  "level": "2",
  "url": "examples-functions-input-output.html#example-difference-mean-median",
  "type": "Example",
  "number": "3.5.3",
  "title": "Difference between mean and median.",
  "body": " Difference between mean and median  For 10 randomly chosen numbers (with rand ) we can compute both mean and median. How different can these be? That is, how large can the difference |mean-median| be? Try to approach this experimentally by computing this difference 10000 times and taking the maximum.   A = rand(10, 10000); m = mean(A, 1); md = median(A, 1); disp(max(abs(m-md)))  The result of computation depends on your luck. There is no guarantee that the maximum found after 10000 random tries is close to the actual maximum.   "
},
{
  "id": "examples-functions-input-output-6",
  "level": "2",
  "url": "examples-functions-input-output.html#examples-functions-input-output-6",
  "type": "Question",
  "number": "3.5.4",
  "title": "Mean and median for a 0-1 vector.",
  "body": "Mean and median for a 0-1 vector  Suppose v is a vector with 10 elements, in which 6 elements are 0 and the others are 1. What are the mean and the median of v ? (You should not need a computer for this.) Is the difference between the mean and the median in this example greater than what you found experimentally in ? "
},
{
  "id": "examples-functions-input-output-7",
  "level": "2",
  "url": "examples-functions-input-output.html#examples-functions-input-output-7",
  "type": "Question",
  "number": "3.5.5",
  "title": "Squaring a random number.",
  "body": "Squaring a random number  We know that x = rand() produces a random number between 0 and 1. The command x = rand()^2 also produces a random number between 0 and 1. Is there a significant difference between these two ways of creating random numbers? "
},
{
  "id": "exercises-functions-input-output",
  "level": "1",
  "url": "exercises-functions-input-output.html",
  "type": "Exercises",
  "number": "3.6",
  "title": "Homework",
  "body": " Homework    Write a script that does the following:  Asks the user to enter a number n that will be used for the size of a square matrix.  Creates a random n n matrix A with entries distributed between -1 and 1.  Computes the matrix .  Shows a histogram of all entries of B, with 30 buckets.        Write a script that does the following:  Asks the user for the number of rows and the number of columns, and creates a random matrix A of this size (with entries uniformly distributed between 0 and 1).  Multiplies A by a random column vector x with entries uniformly distributed between 0 and 1.  Shows the histogram of , with 30 buckets.  Displays formatted output: The smallest entry of Ax is ... and the largest entry of Ax is ... , with 9 digits after decimal dot in each of them.      "
},
{
  "id": "exercises-functions-input-output-2",
  "level": "2",
  "url": "exercises-functions-input-output.html#exercises-functions-input-output-2",
  "type": "Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "  Write a script that does the following:  Asks the user to enter a number n that will be used for the size of a square matrix.  Creates a random n n matrix A with entries distributed between -1 and 1.  Computes the matrix .  Shows a histogram of all entries of B, with 30 buckets.     "
},
{
  "id": "exercises-functions-input-output-3",
  "level": "2",
  "url": "exercises-functions-input-output.html#exercises-functions-input-output-3",
  "type": "Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "  Write a script that does the following:  Asks the user for the number of rows and the number of columns, and creates a random matrix A of this size (with entries uniformly distributed between 0 and 1).  Multiplies A by a random column vector x with entries uniformly distributed between 0 and 1.  Shows the histogram of , with 30 buckets.  Displays formatted output: The smallest entry of Ax is ... and the largest entry of Ax is ... , with 9 digits after decimal dot in each of them.     "
},
{
  "id": "section-for-loop",
  "level": "1",
  "url": "section-for-loop.html",
  "type": "Section",
  "number": "4.1",
  "title": "<code class=\"code-inline tex2jax_ignore\">for<\/code> loop",
  "body": " for loop  Syntax of for loop: for (variable) = (some vector, usually regularly spaced a:h:b) (some computation) end This means that some computation will be repeated for each entry of the vector specified in the line with for . Do not forget to end the loop: Matlab needs it to know which part of the code should be repeated in the loop. Indenting the body of the loop is optional but it improves readability.   Sum of cubes   Find the sum of cubes of the integers from 1 to 10 using a for loop.    s = 0; for k = 1:10 s = s + k^3; end  Explanation: before entering the loop, we initialize the variable s with 0, meaning that the value of the sum is 0 before we start adding things to it. Each time the command s = s + k^3 is executed, the cube of k is added to s . This repeats for each value in the vector 1:10 . When the loop ends, the variable s will contain the sum of cubes.  This example is for illustration only: in practice the array operation sum((1:10).^3) would be a better choice because it is shorter and possibly more efficient than the loop.  One could use a more descriptive variable name instead of s , for example total . But do not use sum because this is the name of a built-in Matlab function. Same goes for max and min : since they are names of built-in functions, they should not be used as variable names. Also, although mathematicians often use as index variable, it is too easy to confuse with digit and so is best avoided.    A loop is necessary for iterative computations, when every step of computation uses the result of the previous one. is not like this, since the cubes of 1, 2, 3,... can be computed independently of each other: we do not need the cube of 5 in order to compute the cube of 6. In contrast, the computation of arithmetic-geometric mean in is iterative: we compute the arithmetic and geometric means, and then use them as an input for next computation.   Arithmetic-geometric mean using a for loop   Find the arithmetic-geometric mean (AGM) of 11 and 31 using a for loop.    x = 11; y = 31; for k = 1:10 a = (x+y)\/2; g = sqrt(x*y); x = a; y = g; end disp(x)  It does not matter whether we display x or y at the end because they become nearly equal after 10 iterations. The output is the number 19.7127, which we can check for correctness using, for example, Wolfram Alpha: agm(11,31) .  The logic of the script: compute arithmetic and geometric means of x and y, then use them as our new values of x and y. One may be tempted to shorten the loop as follows  for k = 1:10 x = (x+y)\/2; y = sqrt(x*y); end  But this loop produces a wrong answer: 23.9912. The reason this script is wrong is that it changes x before the computation of geometric mean. The definition of AGM requires both arithmetic and geometric means to be computed from the same pair x, y. Only after both means are computed, we can replace x and y with new values.    "
},
{
  "id": "example-sum-cubes-for-loop",
  "level": "2",
  "url": "section-for-loop.html#example-sum-cubes-for-loop",
  "type": "Example",
  "number": "4.1.1",
  "title": "Sum of cubes.",
  "body": " Sum of cubes   Find the sum of cubes of the integers from 1 to 10 using a for loop.    s = 0; for k = 1:10 s = s + k^3; end  Explanation: before entering the loop, we initialize the variable s with 0, meaning that the value of the sum is 0 before we start adding things to it. Each time the command s = s + k^3 is executed, the cube of k is added to s . This repeats for each value in the vector 1:10 . When the loop ends, the variable s will contain the sum of cubes.  This example is for illustration only: in practice the array operation sum((1:10).^3) would be a better choice because it is shorter and possibly more efficient than the loop.  One could use a more descriptive variable name instead of s , for example total . But do not use sum because this is the name of a built-in Matlab function. Same goes for max and min : since they are names of built-in functions, they should not be used as variable names. Also, although mathematicians often use as index variable, it is too easy to confuse with digit and so is best avoided.   "
},
{
  "id": "section-for-loop-4",
  "level": "2",
  "url": "section-for-loop.html#section-for-loop-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterative "
},
{
  "id": "example-agm-for-loop",
  "level": "2",
  "url": "section-for-loop.html#example-agm-for-loop",
  "type": "Example",
  "number": "4.1.2",
  "title": "Arithmetic-geometric mean using a <code class=\"code-inline tex2jax_ignore\">for<\/code> loop.",
  "body": " Arithmetic-geometric mean using a for loop   Find the arithmetic-geometric mean (AGM) of 11 and 31 using a for loop.    x = 11; y = 31; for k = 1:10 a = (x+y)\/2; g = sqrt(x*y); x = a; y = g; end disp(x)  It does not matter whether we display x or y at the end because they become nearly equal after 10 iterations. The output is the number 19.7127, which we can check for correctness using, for example, Wolfram Alpha: agm(11,31) .  The logic of the script: compute arithmetic and geometric means of x and y, then use them as our new values of x and y. One may be tempted to shorten the loop as follows  for k = 1:10 x = (x+y)\/2; y = sqrt(x*y); end  But this loop produces a wrong answer: 23.9912. The reason this script is wrong is that it changes x before the computation of geometric mean. The definition of AGM requires both arithmetic and geometric means to be computed from the same pair x, y. Only after both means are computed, we can replace x and y with new values.   "
},
{
  "id": "section-while-loop",
  "level": "1",
  "url": "section-while-loop.html",
  "type": "Section",
  "number": "4.2",
  "title": "<code class=\"code-inline tex2jax_ignore\">while<\/code> loop",
  "body": " while loop  In we used 10 iterations of arithmetic and geometric means computation. This was an arbitrary number. For some input values it may be enough or too many, for others not enough. A better approach is to stop the computation when the required precision is achieved. If we want the result to be accurate within , which is 1e-9 in Matlab notation, then we can stop as soon as the difference between the two means has absolute value less than that number (called the tolerance ). This is what while loop can be used for.  Syntax of while loop: while (some condition) (some computation) end The loop will repeat while condition after while is true. It ends when this condition becomes false. So, if we want to stop when abs(x-y) < 1e-9 , the loop should be written as while abs(x-y) >= 1e-9 .   Arithmetic-geometric mean using a while loop   Find the arithmetic-geometric mean (AGM) of two numbers given by a user, with 1e-9 accuracy.    x = input('x = '); y = input('y = '); while abs(x-y) >= 1e-9 a = (x+y)\/2; g = sqrt(x*y); x = a; y = g; end fprintf('AGM(x, y) = %.9f\\n', x)   There are two common issues with using while loops. One is that it can go on forever, if the algorithm fails to reach its goal (the difference never becomes smaller than the tolerance). It is better to admit that the algorithm failed than to be stuck in an infinite loop: we will deal with this in . For now, note that if your program gets stuck in an infinite loop, you can terminate it by clicking within the Command Window and pressing Ctrl + C .  Another issue is that the condition we want to test may not be defined at the beginning of the loop. This occurs when our condition for stopping is that the value of a variable essentially stopped changing. For example, one way to compute the golden ratio numerically is to start with any and keep replacing with . If we write this as:  x = 1; while abs(newx - x) >= 1e-9 newx = sqrt(x+1); x = newx; end fprintf('Golden ratio = %.9f\\n', x)  the result will be an error: Undefined function or variable newx because we attempt to compute an expression with newx before it is defined. Here is one way to correct this.  x = 1; dx = 1; while abs(dx) >= 1e-9 newx = sqrt(x+1); dx = newx - x; x = newx; end fprintf('Golden ratio = %.9f\\n', x)  Here we introduce a variable dx that represents the difference between old and new values of x . This variable can be initially assigned some arbitrary value that is greater than the tolerance, for example 1 or 100. This ensures that the condition abs(dx) >= 1e-9 holds at the beginning of the loop. After that the loop changes the value of dx and the process repeats until it becomes small enough.  "
},
{
  "id": "section-while-loop-2",
  "level": "2",
  "url": "section-while-loop.html#section-while-loop-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tolerance "
},
{
  "id": "example-agm-while-loop",
  "level": "2",
  "url": "section-while-loop.html#example-agm-while-loop",
  "type": "Example",
  "number": "4.2.1",
  "title": "Arithmetic-geometric mean using a <code class=\"code-inline tex2jax_ignore\">while<\/code> loop.",
  "body": " Arithmetic-geometric mean using a while loop   Find the arithmetic-geometric mean (AGM) of two numbers given by a user, with 1e-9 accuracy.    x = input('x = '); y = input('y = '); while abs(x-y) >= 1e-9 a = (x+y)\/2; g = sqrt(x*y); x = a; y = g; end fprintf('AGM(x, y) = %.9f\\n', x)  "
},
{
  "id": "section-while-loop-6",
  "level": "2",
  "url": "section-while-loop.html#section-while-loop-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "golden ratio "
},
{
  "id": "section-if-statement",
  "level": "1",
  "url": "section-if-statement.html",
  "type": "Section",
  "number": "4.3",
  "title": "<code class=\"code-inline tex2jax_ignore\">if<\/code> statement",
  "body": " if statement  A if statement controls the flow of the program by executing one part of it if a certain condition is true (and possibly, executing another if the condition is false). The syntax is  if (condition) (what to do if the condition is true) else (what to do if the condition is false) end  The part with else is optional if you don't want to do anything special when the condition is false. The end is required, as with loops. Here is a simple script that tells the user if the number they entered is positive or negative.  x = input('x = '); if x < 0 disp('negative') else disp('positive') end  This code has a bug: if the user enters 0, the output is positive . To correct this, we need to put another if in the else clause. This is done with elseif :  x = input('x = '); if x < 0 disp('negative') elseif x > 0 disp('positive') else disp('zero') end  Generally, conditions in while and if are of the form x (relation) y where the relation can be  < less than  > greater than  <= less than or equal  >= greater than or equal  == equal  ~= not equal   Warning : if (x=y) is incorrect, because a single = sign means assignment (make x equal to y), not equality (is x equal to y?). Also, we rarely need to test equality because it can fail because of tiny errors in computer arithmetics with non-integer numbers.   Testing the equality of two numbers   Write an if statement that tests whether is equal to .    if 0.1 + 0.2 == 0.3 disp('equal') else disp('not equal') end  Running this code you will see a surprising result: not equal . We will consider this later. The point to be taken here is that testing for equality is practical only when both sides of == are integers.    "
},
{
  "id": "example-equality-floats",
  "level": "2",
  "url": "section-if-statement.html#example-equality-floats",
  "type": "Example",
  "number": "4.3.1",
  "title": "Testing the equality of two numbers.",
  "body": " Testing the equality of two numbers   Write an if statement that tests whether is equal to .    if 0.1 + 0.2 == 0.3 disp('equal') else disp('not equal') end  Running this code you will see a surprising result: not equal . We will consider this later. The point to be taken here is that testing for equality is practical only when both sides of == are integers.   "
},
{
  "id": "section-break-statement",
  "level": "1",
  "url": "section-break-statement.html",
  "type": "Section",
  "number": "4.4",
  "title": "Breaking out of a loop",
  "body": " Breaking out of a loop  In we noted an issue with while loop: it can go on forever, or for such a long time that we simply have to give up on the computation and maybe try something else. The command break exits the loop (it can be either for or while loop). This command is always contained in an if statement because the idea is to break out of the loop when some condition is reached. Here is an example of such situation. Starting with x=1 , the code repeatedly replaces x with where the number a is provided by the user.  a = input('a = '); tries = 1000; x = 1; for k = 1:tries newx = (x + a\/x)\/2; if abs(newx - x) < 1e-9 break end x = newx; end if k < tries fprintf('Converged to x = %.9f\\n', newx) else disp('Failed to converge') end  The loop has a limit of 1000 tries. It ends sooner if the required condition new x is close to old one is reached. After the loop there is another conditional statement which reports the result depending on whether the loop terminated early (success) or ran out of tries (failure). Try running this script with different inputs such as 2, -3, 4, -5, 6. What do you observe?  "
},
{
  "id": "section-timing-code",
  "level": "1",
  "url": "section-timing-code.html",
  "type": "Section",
  "number": "4.5",
  "title": "Measuring the computation time",
  "body": " Measuring the computation time  Since loops may run for a long time, it is worthwhile to compare the time required by different approaches. To do this, we can use the combination of tic and toc commands: insert tic at the beginning of the code that should be timed, and toc at the end. The time elapsed between tic and toc will be shown in the Matlab command window.  Let us compare two ways of computing the sum of cosines of all integers from to : a loop and an array operation. Which one is faster?  n = 1e7; tic s = 0; for j = 1:n s = s + cos(j); end toc disp(s) tic s = sum(cos(1:n)); toc disp(s)  An array operation is not always faster than a loop. Operating with large arrays requires more memory to store intermediate results. Other internal implementation details may cause a loop with a scalar operation to be faster than an array operation. Thus, we usually cannot tell which approach is faster without measuring the computation time. For more examples, try different ways of computing the sums and where as before. Also note that could be computed as j*j*j : does this speed up the computation?  "
},
{
  "id": "examples-control-flow",
  "level": "1",
  "url": "examples-control-flow.html",
  "type": "Section",
  "number": "4.6",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Partial sums of the harmonic series  The harmonic series diverges, meaning that its partial sums grow without a bound. So, if we add enough terms of this series, we will get a number greater than 10. Use a while loop to determine how many terms are required to get a partial sum that is greater than 10.    s = 0; n = 1; while s <= 10 s = s + 1\/n; n = n + 1; end fprintf('The partial sum has %d terms\\n', n-1)  Explanation : The variable s represents partial sums. We add 1\/n to it, and then increase the value of n . When s > 10 the process stops. The output uses formatting code %d for integers, since the answer is an integer. Why does the output have n-1 and not n ? Because of the way that the loop is written, the value of n is increased after each addition. So at the end of it, n is the number that is 1 more than the number of terms we added.     The Collatz conjecture  The Collatz conjecture, also known as the Syracuse problem , is a famous unsolved problem in mathematics. Its subject is the following process.  Start with a positive integer k.  If k is even, divide it by 2. Otherwise multiply it by 3 and add 1.  Repeat Step 2.  The conjecture is that this process always reaches the number 1 (after 1 it enters infinite loop 1, 4, 2, 1, 4, 2, ...) Write a script that verify this conjecture for initial values of k from 1 to 500, and for each of them record the number of steps that it takes to reach 1. Then plot the number of steps. Note: the condition that k is even can be tested as if mod(k, 2) == 0 where mod(k, 2) computes the remained of dividing k by 2.    N = 500; steps = zeros(1, N); for n = 1:N count = 0; k = n; while k > 1 if mod(k, 2) == 0 k = k\/2; else k = 3*k+1; end count = count + 1; end steps(n) = count; end plot(1:N, steps, '.')  Explanation . The array steps is created as a bunch of zeros, to be replaced with actual counts of steps. The initial value of Collatz process is called n and it runs through the numbers from 1 to 500. So the variable k is initially assigned the value n and then modified according to the rules stated above. Every time it is modified, the count of steps is increased by 1. The plot at the end shows each data point as an individual dot, not connecting them by lines.  This example demonstrates the use of both kinds of loops. Note that the variable involved in while loop condition, while k > 1 , should be modified within the loop, otherwise it will never end. In contrast, the variable involved in for loop condition for n = 1:N should not be modified since it is automatically incremented with each run of the loop.    Avoiding an intermediate variable  If in we did not introduce the variable g and simply wrote y = sqrt(x*y) , would the result still be correct? Why or why not?  Changing the for loop variable  What exactly would go wrong in if we did not introduce k and simply wrote the same while loop with n , as below?  while n > 1 if mod(n, 2) == 0 n = n\/2; else n = 3*n+1; end count = count + 1; end  "
},
{
  "id": "example-harmonic-series",
  "level": "2",
  "url": "examples-control-flow.html#example-harmonic-series",
  "type": "Example",
  "number": "4.6.1",
  "title": "Partial sums of the harmonic series.",
  "body": " Partial sums of the harmonic series  The harmonic series diverges, meaning that its partial sums grow without a bound. So, if we add enough terms of this series, we will get a number greater than 10. Use a while loop to determine how many terms are required to get a partial sum that is greater than 10.    s = 0; n = 1; while s <= 10 s = s + 1\/n; n = n + 1; end fprintf('The partial sum has %d terms\\n', n-1)  Explanation : The variable s represents partial sums. We add 1\/n to it, and then increase the value of n . When s > 10 the process stops. The output uses formatting code %d for integers, since the answer is an integer. Why does the output have n-1 and not n ? Because of the way that the loop is written, the value of n is increased after each addition. So at the end of it, n is the number that is 1 more than the number of terms we added.   "
},
{
  "id": "example-collatz",
  "level": "2",
  "url": "examples-control-flow.html#example-collatz",
  "type": "Example",
  "number": "4.6.2",
  "title": "The Collatz conjecture.",
  "body": " The Collatz conjecture  The Collatz conjecture, also known as the Syracuse problem , is a famous unsolved problem in mathematics. Its subject is the following process.  Start with a positive integer k.  If k is even, divide it by 2. Otherwise multiply it by 3 and add 1.  Repeat Step 2.  The conjecture is that this process always reaches the number 1 (after 1 it enters infinite loop 1, 4, 2, 1, 4, 2, ...) Write a script that verify this conjecture for initial values of k from 1 to 500, and for each of them record the number of steps that it takes to reach 1. Then plot the number of steps. Note: the condition that k is even can be tested as if mod(k, 2) == 0 where mod(k, 2) computes the remained of dividing k by 2.    N = 500; steps = zeros(1, N); for n = 1:N count = 0; k = n; while k > 1 if mod(k, 2) == 0 k = k\/2; else k = 3*k+1; end count = count + 1; end steps(n) = count; end plot(1:N, steps, '.')  Explanation . The array steps is created as a bunch of zeros, to be replaced with actual counts of steps. The initial value of Collatz process is called n and it runs through the numbers from 1 to 500. So the variable k is initially assigned the value n and then modified according to the rules stated above. Every time it is modified, the count of steps is increased by 1. The plot at the end shows each data point as an individual dot, not connecting them by lines.  This example demonstrates the use of both kinds of loops. Note that the variable involved in while loop condition, while k > 1 , should be modified within the loop, otherwise it will never end. In contrast, the variable involved in for loop condition for n = 1:N should not be modified since it is automatically incremented with each run of the loop.   "
},
{
  "id": "examples-control-flow-5",
  "level": "2",
  "url": "examples-control-flow.html#examples-control-flow-5",
  "type": "Question",
  "number": "4.6.3",
  "title": "Avoiding an intermediate variable.",
  "body": "Avoiding an intermediate variable  If in we did not introduce the variable g and simply wrote y = sqrt(x*y) , would the result still be correct? Why or why not? "
},
{
  "id": "examples-control-flow-6",
  "level": "2",
  "url": "examples-control-flow.html#examples-control-flow-6",
  "type": "Question",
  "number": "4.6.4",
  "title": "Changing the <code class=\"code-inline tex2jax_ignore\">for<\/code> loop variable.",
  "body": "Changing the for loop variable  What exactly would go wrong in if we did not introduce k and simply wrote the same while loop with n , as below?  while n > 1 if mod(n, 2) == 0 n = n\/2; else n = 3*n+1; end count = count + 1; end "
},
{
  "id": "exercises-control-flow",
  "level": "1",
  "url": "exercises-control-flow.html",
  "type": "Exercises",
  "number": "4.7",
  "title": "Homework",
  "body": " Homework    Explain the output of the script in mathematically. What does it converge to, and why does it sometimes fail to converge? (This problem does not involve Matlab.)      Modify so that it finds the first partial sum that is greater than . Then use the tic  toc commands to time two versions of this loop: one with reciprocals computed as 1\/n and one with n^(-1) . Which version runs faster?  (If the program takes more than a minute to run on your computer, replace by .)      Write a script that computes the arithmetic-harmonic mean which means is similar to except that instead of geometric mean g = sqrt(x*y); we use the harmonic mean h = 2*x*y\/(x+y) . As a testing case, check that the arithmetic-harmonic mean of 5 and 20 is 10.  Since there is no square root in this computation, we can use negative numbers too: the arithmetic-harmonic mean of -5 and -20 is -10. But if you start with two numbers of opposite signs, the loop never ends, so you will need to press Ctrl + C to end it. As a second part of this task, write another form of the loop, using the method from to put a limit on the number of tries, for example 1000.    "
},
{
  "id": "exercises-control-flow-2",
  "level": "2",
  "url": "exercises-control-flow.html#exercises-control-flow-2",
  "type": "Exercise",
  "number": "4.7.1",
  "title": "",
  "body": "  Explain the output of the script in mathematically. What does it converge to, and why does it sometimes fail to converge? (This problem does not involve Matlab.)   "
},
{
  "id": "exercises-control-flow-3",
  "level": "2",
  "url": "exercises-control-flow.html#exercises-control-flow-3",
  "type": "Exercise",
  "number": "4.7.2",
  "title": "",
  "body": "  Modify so that it finds the first partial sum that is greater than . Then use the tic  toc commands to time two versions of this loop: one with reciprocals computed as 1\/n and one with n^(-1) . Which version runs faster?  (If the program takes more than a minute to run on your computer, replace by .)   "
},
{
  "id": "exercises-control-flow-4",
  "level": "2",
  "url": "exercises-control-flow.html#exercises-control-flow-4",
  "type": "Exercise",
  "number": "4.7.3",
  "title": "",
  "body": "  Write a script that computes the arithmetic-harmonic mean which means is similar to except that instead of geometric mean g = sqrt(x*y); we use the harmonic mean h = 2*x*y\/(x+y) . As a testing case, check that the arithmetic-harmonic mean of 5 and 20 is 10.  Since there is no square root in this computation, we can use negative numbers too: the arithmetic-harmonic mean of -5 and -20 is -10. But if you start with two numbers of opposite signs, the loop never ends, so you will need to press Ctrl + C to end it. As a second part of this task, write another form of the loop, using the method from to put a limit on the number of tries, for example 1000.   "
},
{
  "id": "section-anonymous-functions",
  "level": "1",
  "url": "section-anonymous-functions.html",
  "type": "Section",
  "number": "5.1",
  "title": "Anonymous functions",
  "body": " Anonymous functions  The concept of an anonymous function in Matlab closely corresponds to mathematical notion of a function: it consists of a formula that transforms input into output. For example, to have mathematical function in your code, you would write f = @(x) exp(-x^2); and then use f in expressions such as f(0) or 3*f(x-2) .  When writing a function, one should consider whether it should accept input in the form of a vector or a matrix. The function in the previous paragraph works fine with scalar input, such as f(2) but throws an error if the input is a vector, for example f([0 1 2 3]) . The reason is that with this input, x^2 becomes [0 1 2 3]^2 which is an error in Matlab where ^2 means matrix multiplication. We want an array operation, not a matrix product. Thus, the function should be written as f = @(x) exp(-x.^2); Then we can apply this function to a vector, for example to plot it.  x = linspace(-3, 3, 500); plot(x, f(x))  An anonymous function can have multiple variables, for example the mathematical formula could be defined as f = @(x,y,z) (x.*y + 1).\/z . The inclusion of periods allows this function to vectors for its inputs, provided the vectors are of the same size.  The names of the parameters (variables inside of anonymous function) do not matter outside of that function. For example, there is no problem with the following code  f = @(x) x + 4; x = 1; y = 3; disp(f(y))  The result is 7, because this is the output that f produces when its input is 3. The variable x outside of the function (which was given the value of 1) has no relation to the variable x inside of the function.  A limitation of anonymous functions is that they consist of a single expression: there is no place for conditional statements or loops. But one can still construct piecewise defined functions using inequalities as a part of an arithmetic expression. When an inequality such as (x < 3) appears in an expression, it is treated as 1 when the inequality is true, and 0 when false. Therefore, the function defined by f = @(x) (x>=0).*sqrt(x) + (x < 0).*exp(x) evaluates to when and to when .   Sum of reciprocals   Write an anonymous function which, when given a number , returns the sum of the reciprocals of all positive integers between and .    H = @(n) sum((1:n).^(-1));  These sums are called harmonic numbers (hence the letter H for this function). What happens if it is given a negative or fractional input? The regular vector 1:n contains all positive integers that are not greater than n. So, 1:3.7 is [1 2 3] , same as 1:3 . This means H(3.7) is 1\/1 + 1\/2 + 1\/3 , same as H(3) . And if a number less than 1 is given, the regular vector 1:n is empty, and the sum of an empty set of numbers is 0. For example, H(-2) is 0.    "
},
{
  "id": "section-anonymous-functions-2",
  "level": "2",
  "url": "section-anonymous-functions.html#section-anonymous-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "anonymous function "
},
{
  "id": "section-anonymous-functions-10",
  "level": "2",
  "url": "section-anonymous-functions.html#section-anonymous-functions-10",
  "type": "Example",
  "number": "5.1.1",
  "title": "Sum of reciprocals.",
  "body": " Sum of reciprocals   Write an anonymous function which, when given a number , returns the sum of the reciprocals of all positive integers between and .    H = @(n) sum((1:n).^(-1));  These sums are called harmonic numbers (hence the letter H for this function). What happens if it is given a negative or fractional input? The regular vector 1:n contains all positive integers that are not greater than n. So, 1:3.7 is [1 2 3] , same as 1:3 . This means H(3.7) is 1\/1 + 1\/2 + 1\/3 , same as H(3) . And if a number less than 1 is given, the regular vector 1:n is empty, and the sum of an empty set of numbers is 0. For example, H(-2) is 0.   "
},
{
  "id": "section-named-functions",
  "level": "1",
  "url": "section-named-functions.html",
  "type": "Section",
  "number": "5.2",
  "title": "Named functions",
  "body": " Named functions  Named functions can do the same thing as anonymous functions. Here is again, this time as a named function.  function y = f(x) y = exp(-x.^2); end  But there may be multiple lines within the body of a named function, including loops and conditional statements. In general, it looks like this.  function y = myFunction(x) (do something); (do more things); (y = result of computations); end  A named functions can have multiple inputs: function w = myFunction(x, y, z) . It can also have multiple outputs: function [u, v] = myFunction(x, y, z) in which case both u and v must be assigned some values within the function.   Arithmetic-geometric mean with given tolerance   Write a named function with three inputs: numbers x, y and tol , which finds the arithmetic-geometric mean of a, b with tolerance tol (meaning that the process stops when the difference of arithmetic and geometric mean is less than tol .)    function z = agm(x, y, tol) while abs(x - y) >= tol a = (x + y)\/2; g = sqrt(x*y); x = a; y = g; end z = x; end  Note that the result has to be assigned to whichever function variable was designated as output on th first line of the function: in this case, z . If you are familiar with Python, the following comparison may help: def agm(x, y, tol): # some Python code computing z return z The difference is that Matlab specifies the variable(s) to be returned at the beginning of the function, instead of at the end.    illustrates an important point: a function has limited communication with the code outside of it. It receives input and produces certain output; nothing else that it does has any influence on the outside world. Suppose that the following sequence of commands was executed.  x = 0.3; y = 12; disp(agm(x, y, 1e-6)) disp(x) disp(a)  The third line will display the AGM which happens to be 3.7136. The fourth line will display the original value of x, which is 0.3 . Why is it still 0.3, even though the function agm changed the value of x in the loop? This is because a function operates like a separate program with its own variables. The variable x inside of the function is its own local variable x, and changing it does not change x in other places. For the same reason, the last command disp(a) produces an error: the variable a is undefined. A variable with that name was introduces inside of function agm but it does not exist outside of it.  One can have a function that does not return any values. Here is a function whose job is to plot the sine function on the interval using a given number of points.  function plotsin(a, b, num) x = linspace(a, b, num); plot(x, sin(x)) end  One can also have a function with no arguments (no input values). For example, this function computes an approximate value of the Golden Ratio by iterating .  function z = goldenratio() z = 1; for k = 1:100 z = sqrt(z+1); end end  One can use this function same as others: x = goldenratio(); or disp(goldenratio()) .  Back in the days when Matlab was designed, the convention was to put every named function in a separate M-file named as that function: for example, goldenratio.m . Modern versions allow multiple named functions appear in the same file, along with code using those functions. However, one arbitrary restriction remains: Function definitions in a script must appear at the end of the file. For example, the following is allowed: x = 0.3; y = 12; disp(agm(x, y, 1e-6)) function z = agm(x, y, tol) while abs(x - y) >= tol a = (x + y)\/2; g = sqrt(x*y); x = a; y = g; end z = x; end but moving the first three lines (top-level code) after the named function would result in an error.  Anonymous functions, described in , have no such restrictions.   Smallest prime that is greater than a given number   Write a function which, given a value n , finds the smallest prime number that is greater than n .  To determine whether some number k is prime, use isprime(k) . For example, while isprime(k) is a loop that runs as long as k stays prime. To have a loop that runs while k is not prime, use while ~sprime(k) . The character ~ means logical NOT in Matlab (recall that ~= means not equal .)    function k = smallestprime(n) k = n + 1; while ~isprime(k) k = k + 1; end end  For example, smallestprime(31) is 37, because the numbers 32, 33, 34, 35, 36 are not prime.    "
},
{
  "id": "agm-named-function",
  "level": "2",
  "url": "section-named-functions.html#agm-named-function",
  "type": "Example",
  "number": "5.2.1",
  "title": "Arithmetic-geometric mean with given tolerance.",
  "body": " Arithmetic-geometric mean with given tolerance   Write a named function with three inputs: numbers x, y and tol , which finds the arithmetic-geometric mean of a, b with tolerance tol (meaning that the process stops when the difference of arithmetic and geometric mean is less than tol .)    function z = agm(x, y, tol) while abs(x - y) >= tol a = (x + y)\/2; g = sqrt(x*y); x = a; y = g; end z = x; end  Note that the result has to be assigned to whichever function variable was designated as output on th first line of the function: in this case, z . If you are familiar with Python, the following comparison may help: def agm(x, y, tol): # some Python code computing z return z The difference is that Matlab specifies the variable(s) to be returned at the beginning of the function, instead of at the end.   "
},
{
  "id": "section-named-functions-18",
  "level": "2",
  "url": "section-named-functions.html#section-named-functions-18",
  "type": "Example",
  "number": "5.2.2",
  "title": "Smallest prime that is greater than a given number.",
  "body": " Smallest prime that is greater than a given number   Write a function which, given a value n , finds the smallest prime number that is greater than n .  To determine whether some number k is prime, use isprime(k) . For example, while isprime(k) is a loop that runs as long as k stays prime. To have a loop that runs while k is not prime, use while ~sprime(k) . The character ~ means logical NOT in Matlab (recall that ~= means not equal .)    function k = smallestprime(n) k = n + 1; while ~isprime(k) k = k + 1; end end  For example, smallestprime(31) is 37, because the numbers 32, 33, 34, 35, 36 are not prime.   "
},
{
  "id": "examples-user-defined-functions",
  "level": "1",
  "url": "examples-user-defined-functions.html",
  "type": "Section",
  "number": "5.3",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Mean value of sine function   Define an anonymous function meansin = @(n) ... which computes the mean value of , , ..., . Use it to display the values meansin(n) for n equal to 10, 50, 250, 1870, and 5000. What pattern do you observe?    meansin = @(n) mean(sin(1:n)); for n = [10 50 250 1870 5000] disp(meansin(n)) end  Explanation : this is a reminder that the vector in for loop does not have to be of the form a:b even though this form is most common. Here the use of a loop avoids having to write disp(meansin(10)) disp(meansin(50)) disp(meansin(250)) and so on.  It appears that the mean values approach 0 as n grows. This can be proved mathematically: see the homework section.     Evaluating a polynomial   Define a named function function y = p(x, a, n) which computes the polynomial Assume that x may be a vector, a is a real number, and n is a positive integer (the degree of our polynomial).    function y = p(x, a, n) y = ones(size(x)); for k = 1:n y = y + x.^k\/(a+k-1); end end  The command size(x) returns the size of as the number of rows and columns. Consequently, ones(size(x)) means creating a vector or matrix of the same size as x , but with all entries 1. If we started with y = 1 instead, the computation would still work because adding 1 to a vector like x.^k means adding 1 to each component of the vector (ex. However, when n = 0 the loop does not run at all and the output would be a scalar 1 instead of a vector, which is a bug.     Plotting a polynomial   Use the function from to plot the polynomial with and on the interval .    x = linspace(-1, 1, 500); plot(x, p(x, -3\/2, 6)) function y = p(x, a, n) y = ones(size(x)); for k = 1:n y = y + x.^k\/(a+k-1); end end     Function creating a vector  What does the function f defined by f = @(x, y) [x y] do? Can one give it vector inputs x, y ? If so, does it matter if they are row vectors or column vectors? Do they need to be of the same size?   "
},
{
  "id": "example-mean-sine",
  "level": "2",
  "url": "examples-user-defined-functions.html#example-mean-sine",
  "type": "Example",
  "number": "5.3.1",
  "title": "Mean value of sine function.",
  "body": " Mean value of sine function   Define an anonymous function meansin = @(n) ... which computes the mean value of , , ..., . Use it to display the values meansin(n) for n equal to 10, 50, 250, 1870, and 5000. What pattern do you observe?    meansin = @(n) mean(sin(1:n)); for n = [10 50 250 1870 5000] disp(meansin(n)) end  Explanation : this is a reminder that the vector in for loop does not have to be of the form a:b even though this form is most common. Here the use of a loop avoids having to write disp(meansin(10)) disp(meansin(50)) disp(meansin(250)) and so on.  It appears that the mean values approach 0 as n grows. This can be proved mathematically: see the homework section.   "
},
{
  "id": "example-eval-poly",
  "level": "2",
  "url": "examples-user-defined-functions.html#example-eval-poly",
  "type": "Example",
  "number": "5.3.2",
  "title": "Evaluating a polynomial.",
  "body": " Evaluating a polynomial   Define a named function function y = p(x, a, n) which computes the polynomial Assume that x may be a vector, a is a real number, and n is a positive integer (the degree of our polynomial).    function y = p(x, a, n) y = ones(size(x)); for k = 1:n y = y + x.^k\/(a+k-1); end end  The command size(x) returns the size of as the number of rows and columns. Consequently, ones(size(x)) means creating a vector or matrix of the same size as x , but with all entries 1. If we started with y = 1 instead, the computation would still work because adding 1 to a vector like x.^k means adding 1 to each component of the vector (ex. However, when n = 0 the loop does not run at all and the output would be a scalar 1 instead of a vector, which is a bug.   "
},
{
  "id": "example-plot-poly",
  "level": "2",
  "url": "examples-user-defined-functions.html#example-plot-poly",
  "type": "Example",
  "number": "5.3.3",
  "title": "Plotting a polynomial.",
  "body": " Plotting a polynomial   Use the function from to plot the polynomial with and on the interval .    x = linspace(-1, 1, 500); plot(x, p(x, -3\/2, 6)) function y = p(x, a, n) y = ones(size(x)); for k = 1:n y = y + x.^k\/(a+k-1); end end   "
},
{
  "id": "examples-user-defined-functions-6",
  "level": "2",
  "url": "examples-user-defined-functions.html#examples-user-defined-functions-6",
  "type": "Question",
  "number": "5.3.4",
  "title": "Function creating a vector.",
  "body": " Function creating a vector  What does the function f defined by f = @(x, y) [x y] do? Can one give it vector inputs x, y ? If so, does it matter if they are row vectors or column vectors? Do they need to be of the same size?  "
},
{
  "id": "exercises-user-defined-functions",
  "level": "1",
  "url": "exercises-user-defined-functions.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Homework",
  "body": " Homework    (No programming involved.) Prove that the following inequality holds for every positive integer : How does this explain the observation in ?    Multiply the sum of sines by and use the formula to make the sum telescope .      Write an anonymous function f = @(x, y) ... which implements the mathematical function in such a way that the input variables x, y are allowed to be vectors. Then plot the values of along the parametric curve as follows.  t = linspace(-1, 1, 500); plot(t, f(t.^2, sin(t)))  As approaches 0, what value does appear to approach?      Write a named function function y = cositer(x, n) that takes two arguments x and n and returns the n-th iteration of the mathematical function . For example, if n = 4 , the result should be Use this function to plot several of these iterates on the interval as shown below.  x = linspace(0, 2, 2000); hold on for n = [4 5 30 31] plot(x, cositer(x, n)) end hold off function y = cositer(x, n) (your function goes here) end  Remark: the command hold on refers to displaying several functions on the same plot. Normally, Matlab replaces each plot with next one. With hold on , it keeps the previous plot and draws next one over it, using a different color (unless you specify a color). At the end, hold off is used to restore the normal behavior.    "
},
{
  "id": "exercises-user-defined-functions-2",
  "level": "2",
  "url": "exercises-user-defined-functions.html#exercises-user-defined-functions-2",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "  (No programming involved.) Prove that the following inequality holds for every positive integer : How does this explain the observation in ?    Multiply the sum of sines by and use the formula to make the sum telescope .   "
},
{
  "id": "exercises-user-defined-functions-3",
  "level": "2",
  "url": "exercises-user-defined-functions.html#exercises-user-defined-functions-3",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "  Write an anonymous function f = @(x, y) ... which implements the mathematical function in such a way that the input variables x, y are allowed to be vectors. Then plot the values of along the parametric curve as follows.  t = linspace(-1, 1, 500); plot(t, f(t.^2, sin(t)))  As approaches 0, what value does appear to approach?   "
},
{
  "id": "exercises-user-defined-functions-4",
  "level": "2",
  "url": "exercises-user-defined-functions.html#exercises-user-defined-functions-4",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "  Write a named function function y = cositer(x, n) that takes two arguments x and n and returns the n-th iteration of the mathematical function . For example, if n = 4 , the result should be Use this function to plot several of these iterates on the interval as shown below.  x = linspace(0, 2, 2000); hold on for n = [4 5 30 31] plot(x, cositer(x, n)) end hold off function y = cositer(x, n) (your function goes here) end  Remark: the command hold on refers to displaying several functions on the same plot. Normally, Matlab replaces each plot with next one. With hold on , it keeps the previous plot and draws next one over it, using a different color (unless you specify a color). At the end, hold off is used to restore the normal behavior.   "
},
{
  "id": "section-classification-linear-systems",
  "level": "1",
  "url": "section-classification-linear-systems.html",
  "type": "Section",
  "number": "6.1",
  "title": "Classification of linear systems",
  "body": " Classification of linear systems  A system of linear equations with unknowns can be written as where is a matrix, is an unknown column vector with coordinates, and is a known column vector with coordinates. Linear systems are classified by consistency and shape.  A linear system is called consistent if it has at least one solution. Otherwise it is inconsistent . So, in terms of solutions there are three possibilities:  consistent with a unique solution  consistent with infinitely many solutions  inconsistent  These possibilities are easy to visualize in terms of 2 2 systems: Each of these equations determines a line in the plane. In Case 1 the two lines intersect; in Case 2 they are the same line; in Case 3 they are parallel.  In terms of shape, a linear system is square if it has as many equations as unknowns, . It is called underdetermined there are fewer equations than variables: , matrix has more columns than rows. A system is overdetermined if it has more equations than variables: , matrix has more rows than columns.  The three shapes do not exactly correspond to the three classes based on consistency. But if you pick a matrix at random (like using rand ), you will find that overdetermined systems are usually inconsistent, underdetermined systems are usually consistent with infinite solutions, and square systems are usually consistent with a unique solution.  The consistency can be analyzed in terms of the rank of a matrix. By definition, a matrix has rank if it has linearly independent columns, and all other columns are their linear combinations. One can replace columns by rows in the previous sentence. One can compute the rank with rank in Matlab. Also, the Matlab formula [A b] forms the augmented matrix of the system , which has an extra column with the entries of .   Consistency and rank    The system is consistent if and only if rank([A b]) is equal to rank(A) .  A consistent system has a unique solution if and only if rank(A) is equal to the number of columns of .      Determine the consistency of a system   Use an if-elseif-else statement with rank to determine the consistency and the number of solutions of the system with matrix and with     m = 3; n = 3; A = [1 2 3; 4 5 6; 7 8 9]; b = [10 11 12]'; if rank(A) < rank([A b]) disp('Inconsistent') elseif rank(A) == n disp('Consistent with a unique solution') else disp('Consistent with infinitely many solutions') end    "
},
{
  "id": "section-classification-linear-systems-3",
  "level": "2",
  "url": "section-classification-linear-systems.html#section-classification-linear-systems-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "section-classification-linear-systems-4",
  "level": "2",
  "url": "section-classification-linear-systems.html#section-classification-linear-systems-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square underdetermined overdetermined "
},
{
  "id": "section-classification-linear-systems-6",
  "level": "2",
  "url": "section-classification-linear-systems.html#section-classification-linear-systems-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rank augmented matrix "
},
{
  "id": "section-classification-linear-systems-7",
  "level": "2",
  "url": "section-classification-linear-systems.html#section-classification-linear-systems-7",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "Consistency and rank.",
  "body": " Consistency and rank    The system is consistent if and only if rank([A b]) is equal to rank(A) .  A consistent system has a unique solution if and only if rank(A) is equal to the number of columns of .    "
},
{
  "id": "section-classification-linear-systems-8",
  "level": "2",
  "url": "section-classification-linear-systems.html#section-classification-linear-systems-8",
  "type": "Example",
  "number": "6.1.2",
  "title": "Determine the consistency of a system.",
  "body": " Determine the consistency of a system   Use an if-elseif-else statement with rank to determine the consistency and the number of solutions of the system with matrix and with     m = 3; n = 3; A = [1 2 3; 4 5 6; 7 8 9]; b = [10 11 12]'; if rank(A) < rank([A b]) disp('Inconsistent') elseif rank(A) == n disp('Consistent with a unique solution') else disp('Consistent with infinitely many solutions') end   "
},
{
  "id": "section-systems-without-free-variables",
  "level": "1",
  "url": "section-systems-without-free-variables.html",
  "type": "Section",
  "number": "6.2",
  "title": "Systems without free variables",
  "body": " Systems without free variables  What do we get when solving a system with A\\b in Matlab? Let us first consider the case when rank(A) is n , so every column of A is a basic column, which means there are no free variables. When such a system is consistent, it has a unique solution and A\\b finds this unique solution. When the system is inconsistent, we get the least-squares solution : the vector for which the norm of the residual vector  is as small as possible. Recall that the norm of a vector is In Matlab this norm can be computed in several ways:  sqrt(sum(v.^2))  sqrt(v'*v) when v is a column vector  sqrt(v*v') when v is a row vector  sqrt(dot(v, v))  norm(v)  The last way is easiest.   The least-squares solution and the norm of residual vector   Find the least-squares solution and the norm of residual vector for the system with the matrix and with     A = [1 2; 4 3; 5 6]; b = [7 8 9]'; x = A\\b; disp(x) disp(norm(A*x-b))  It may be informative to add the line disp(A*x) and compare this vector to b .    A practical use of least squares solutions is linear regression. Suppose we are given some data points and want to find the line that fits these points the best. The idea is to imagine we could have perfect fit: This system can be written as where This is an overdetermined system when we have more than 2 data points. Unless all -values are the same (which should not happen), the rank of A is 2 and so the system has no free variables. This means that A\\b will find its least squares solution: a vector with components for which the sum of squares of the residuals is as small as possible. This is the line of best least-squares fit, and this process is known as linear regression in statistics.   Line of best fit   Find the line of best fit (in the sense of least squares) to the six points with x-values (-1, 0, 2, 3, 4, 7) and y-values (9, 8, 5, 5, 3, -2). Plot both the line and the points.    x = [-1 0 2 3 4 7]'; y = [9 8 5 5 3 1]'; A = [x x.^0]; z = A\\y; xx = linspace(min(x), max(x), 500)'; yy = [xx xx.^0]*z; plot(xx, yy, 'b', x, y, 'r*')  Explanation: think of as because this naturally leads to the matrix of this linear system: its columns are x and x.^0 . The plot of given data points created by plot(x, y, 'r*') consists of red asterisks, not joined by a line. But to plot the line of best fit (or a curve of best fit, in general) we use more points on the x-axis. These points are in the vector xx : they are evenly distributed over the same interval where the given data points lie. The way in which y-coordinates of this line are computed may look strange. The matrix product [xx xx.^0]*z is logically the same as z(1)*xx + z(2) : multiply x-values by the coefficient and add the constant term . Writing it in matrix form allows for easier generalization later. Note that the line yy = [xx xx.^0]*z , which uses the solution of a linear system, is consistent with A = [x x.^0] which created that system.    "
},
{
  "id": "section-systems-without-free-variables-2",
  "level": "2",
  "url": "section-systems-without-free-variables.html#section-systems-without-free-variables-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least-squares solution residual vector "
},
{
  "id": "example-least-squares-norm-residual",
  "level": "2",
  "url": "section-systems-without-free-variables.html#example-least-squares-norm-residual",
  "type": "Example",
  "number": "6.2.1",
  "title": "The least-squares solution and the norm of residual vector.",
  "body": " The least-squares solution and the norm of residual vector   Find the least-squares solution and the norm of residual vector for the system with the matrix and with     A = [1 2; 4 3; 5 6]; b = [7 8 9]'; x = A\\b; disp(x) disp(norm(A*x-b))  It may be informative to add the line disp(A*x) and compare this vector to b .   "
},
{
  "id": "example-line-best-fit",
  "level": "2",
  "url": "section-systems-without-free-variables.html#example-line-best-fit",
  "type": "Example",
  "number": "6.2.2",
  "title": "Line of best fit.",
  "body": " Line of best fit   Find the line of best fit (in the sense of least squares) to the six points with x-values (-1, 0, 2, 3, 4, 7) and y-values (9, 8, 5, 5, 3, -2). Plot both the line and the points.    x = [-1 0 2 3 4 7]'; y = [9 8 5 5 3 1]'; A = [x x.^0]; z = A\\y; xx = linspace(min(x), max(x), 500)'; yy = [xx xx.^0]*z; plot(xx, yy, 'b', x, y, 'r*')  Explanation: think of as because this naturally leads to the matrix of this linear system: its columns are x and x.^0 . The plot of given data points created by plot(x, y, 'r*') consists of red asterisks, not joined by a line. But to plot the line of best fit (or a curve of best fit, in general) we use more points on the x-axis. These points are in the vector xx : they are evenly distributed over the same interval where the given data points lie. The way in which y-coordinates of this line are computed may look strange. The matrix product [xx xx.^0]*z is logically the same as z(1)*xx + z(2) : multiply x-values by the coefficient and add the constant term . Writing it in matrix form allows for easier generalization later. Note that the line yy = [xx xx.^0]*z , which uses the solution of a linear system, is consistent with A = [x x.^0] which created that system.   "
},
{
  "id": "section-systems-with-free-variables",
  "level": "1",
  "url": "section-systems-with-free-variables.html",
  "type": "Section",
  "number": "6.3",
  "title": "Systems with free variables",
  "body": " Systems with free variables  When the rank of matrix is less than the number of variables, the system has free variables. In a Linear Algebra course, we would move the free variables to the right, and solve the rest of the system. But Matlab sets free variables to and then solves the system as described in .  Note for Octave users: this is one of rare cases when Octave behavior is different, as explained below. This will not make a difference for homework. (In my opinion, Octave has a better approach than Matlab.)   System with a free variable   Use Matlab to solve the system    A = [1 2 3; 4 5 6]; b = [10; 11]; disp(A\\b)  The displayed solution is [-4.5; 0; 4.8333] .   In geometric terms, the system in describes the intersection of two planes in 3-dimensional space. This intersection is a line. The solution that Matlab picks is the point where this line cross one of coordinate planes.  There is another logical choice of solution in a problem like this: one could pick the point on the line that is closest to the origin , that is the solution of smallest norm. This is the approach that Octave uses: when given it would produce [-4.5556; 0.1111; 4.7778] . One can get this solution with Matlab by using pinv(A)*b , which results in [-4.5556; 0.1111; 4.7778] . This approach takes longer because it involves computing the pseudoinverse of which is a subject of MAT 532.  Square rank-deficient system   Compare the system to . Does it have the same solution?   This new system has one more equation, but it is redundant: if you multiply the second line by 2 and subtract the first line, the result is the 3rd line. So, this system is mathematically equivalent to the previous one. Yet, the Matlab solution is different.  A = [1 2 3; 4 5 6; 7 8 9]; b = [10; 11; 12]; disp(A\\b)  The result is [-25.3333; 41.6667; -16.0000] , quite different from what we got in . Matlab did not even recognize this as a system with a free variable.   What explains the result of ? When solving it, we get a warning message: Matrix is close to singular or badly scaled. Results may be inaccurate. This means the result of this computation are likely to be influenced by inevitable round-off errors in computer arithmetics, which is the subject of next section.  "
},
{
  "id": "example-system-free-variable",
  "level": "2",
  "url": "section-systems-with-free-variables.html#example-system-free-variable",
  "type": "Example",
  "number": "6.3.1",
  "title": "System with a free variable.",
  "body": " System with a free variable   Use Matlab to solve the system    A = [1 2 3; 4 5 6]; b = [10; 11]; disp(A\\b)  The displayed solution is [-4.5; 0; 4.8333] .  "
},
{
  "id": "section-systems-with-free-variables-6",
  "level": "2",
  "url": "section-systems-with-free-variables.html#section-systems-with-free-variables-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pseudoinverse "
},
{
  "id": "example-square-rank-deficient",
  "level": "2",
  "url": "section-systems-with-free-variables.html#example-square-rank-deficient",
  "type": "Example",
  "number": "6.3.2",
  "title": "Square rank-deficient system.",
  "body": "Square rank-deficient system   Compare the system to . Does it have the same solution?   This new system has one more equation, but it is redundant: if you multiply the second line by 2 and subtract the first line, the result is the 3rd line. So, this system is mathematically equivalent to the previous one. Yet, the Matlab solution is different.  A = [1 2 3; 4 5 6; 7 8 9]; b = [10; 11; 12]; disp(A\\b)  The result is [-25.3333; 41.6667; -16.0000] , quite different from what we got in . Matlab did not even recognize this as a system with a free variable.  "
},
{
  "id": "section-systems-with-free-variables-8",
  "level": "2",
  "url": "section-systems-with-free-variables.html#section-systems-with-free-variables-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "round-off errors "
},
{
  "id": "section-round-off",
  "level": "1",
  "url": "section-round-off.html",
  "type": "Section",
  "number": "6.4",
  "title": "The effect of round-off errors",
  "body": " The effect of round-off errors  The round-off errors made by a computer are usually very small: for example, 0.1 + 0.2 - 0.3 produces 5.5511e-17 instead of the expected 0 . The underlying reason is that, for example, the number is internally represented not as but as a fraction where must be a power of 2 (because the computer arithmetic is binary in nature. Both and are chosen very large which makes the approximation very good for most purposes. But it cannot be perfect, because if , then which is a contradiction: the left hand side is divisible by 5, so the right hand side cannot be a power of 2.   Approximating numbers by fractions with a power of 2   For each of the numbers 0.1, 0.2, 0.3, find a fraction with denominator 32 which is the best approximation to it. Use these approximations, instead of the actual numbers, in the formula . What is the result?    To find approximations, multiply each of the numbers by 32 and round the result to the nearest integer. Thus, , , and (because rounds to 10). Hence The result is not zero due to round-off errors. This is exactly what happens in Matlab computations, except that they involve a much larger power of 2.   The tiny round-off errors have a major impact on the solution of linear systems when, as a result of some row operations, some entry should theoretically be zero but in practice it is not (like above). So, the process of elimination that was supposed to eliminate a redundant equation, making it , instead turns it into some numerical garbage . Matlab tries to detect such situations and warn the user about them, indicating that the solution it finds may be useless.  "
},
{
  "id": "section-round-off-3",
  "level": "2",
  "url": "section-round-off.html#section-round-off-3",
  "type": "Example",
  "number": "6.4.1",
  "title": "Approximating numbers by fractions with a power of 2.",
  "body": " Approximating numbers by fractions with a power of 2   For each of the numbers 0.1, 0.2, 0.3, find a fraction with denominator 32 which is the best approximation to it. Use these approximations, instead of the actual numbers, in the formula . What is the result?    To find approximations, multiply each of the numbers by 32 and round the result to the nearest integer. Thus, , , and (because rounds to 10). Hence The result is not zero due to round-off errors. This is exactly what happens in Matlab computations, except that they involve a much larger power of 2.  "
},
{
  "id": "examples-linear-systems",
  "level": "1",
  "url": "examples-linear-systems.html",
  "type": "Section",
  "number": "6.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.  Parabola of best fit  Using the data of , find and plot the parabola that fits the data best in the sense of least squares.    x = [-1, 0, 2, 3, 4, 7]'; y = [9, 8, 5, 5, 3, 1]'; A = [x.^2, x, x.^0]; z = A\\y; xx = linspace(min(x), max(x), 500)'; yy = [xx.^2, xx, xx.^0]*z; plot(xx, yy, 'b', x, y, 'r*')  Explanation : the only modification that we need is to add a column with the squares of x-values. In general, this process allows us to fit a function of the form where are given functions and are coefficients (parameters) to be determined.     Slight perturbation of a singular system  Modify by replacing 1 with 1.000001. How does the solution change? Repeat, this time replacing 9 by 9.000001. How did the solution change now?    A = [1.000001 2 3; 4 5 6; 7 8 9]; b = [10; 11; 12]; leads to A\\b being [0.0000; -9.0000; 9.3333] . In contrast, with A = [1 2 3; 4 5 6; 7 8 9.000001]; we get the solution [-9.3333; 9.6667; 0.0000] which is quite different. Note that Matlab shows no warnings in either case. These systems do not have a free variable: the rank of A is 3. Yet, the solution is very sensitive to small changes of the system, because the matrix is close to being singular (or degenerate).   Inconsistent system  The simplest example of an inconsistent linear system is a system of two equations with one variable: and where are two unequal real numbers. What is the least-squares solution of this system, and why? (Try to answer without Matlab, and then check the conclusion with Matlab.)   Testing for invertibility with determinant or rank  Linear algebra says that an matrix is singular (non-invertible) if and only if , if and only if . But in computational practice these two tests for invertibility can give different results. Consider the diagonal matrix with entries and .  A = [1e16 0; 0 1]; disp(det(A)) disp(rank(A))  Matlab says the determinant is which makes sense: it is the product of diagonal entries. Yet, it also says the rank is . Why?  Model selection  How different is the best-fit parabola in from the line of best fit? If you have to choose between fitting a line or a parabola to this data set, what would you use?  Later we will consider the issue of model selection systematically: how to decide which model is more appropriate (for example, linear or quadratic).   "
},
{
  "id": "example-parabola-best-fit",
  "level": "2",
  "url": "examples-linear-systems.html#example-parabola-best-fit",
  "type": "Example",
  "number": "6.5.1",
  "title": "Parabola of best fit.",
  "body": "Parabola of best fit  Using the data of , find and plot the parabola that fits the data best in the sense of least squares.    x = [-1, 0, 2, 3, 4, 7]'; y = [9, 8, 5, 5, 3, 1]'; A = [x.^2, x, x.^0]; z = A\\y; xx = linspace(min(x), max(x), 500)'; yy = [xx.^2, xx, xx.^0]*z; plot(xx, yy, 'b', x, y, 'r*')  Explanation : the only modification that we need is to add a column with the squares of x-values. In general, this process allows us to fit a function of the form where are given functions and are coefficients (parameters) to be determined.   "
},
{
  "id": "examples-linear-systems-4",
  "level": "2",
  "url": "examples-linear-systems.html#examples-linear-systems-4",
  "type": "Example",
  "number": "6.5.2",
  "title": "Slight perturbation of a singular system.",
  "body": " Slight perturbation of a singular system  Modify by replacing 1 with 1.000001. How does the solution change? Repeat, this time replacing 9 by 9.000001. How did the solution change now?    A = [1.000001 2 3; 4 5 6; 7 8 9]; b = [10; 11; 12]; leads to A\\b being [0.0000; -9.0000; 9.3333] . In contrast, with A = [1 2 3; 4 5 6; 7 8 9.000001]; we get the solution [-9.3333; 9.6667; 0.0000] which is quite different. Note that Matlab shows no warnings in either case. These systems do not have a free variable: the rank of A is 3. Yet, the solution is very sensitive to small changes of the system, because the matrix is close to being singular (or degenerate).  "
},
{
  "id": "examples-linear-systems-5",
  "level": "2",
  "url": "examples-linear-systems.html#examples-linear-systems-5",
  "type": "Question",
  "number": "6.5.3",
  "title": "Inconsistent system.",
  "body": "Inconsistent system  The simplest example of an inconsistent linear system is a system of two equations with one variable: and where are two unequal real numbers. What is the least-squares solution of this system, and why? (Try to answer without Matlab, and then check the conclusion with Matlab.)  "
},
{
  "id": "examples-linear-systems-6",
  "level": "2",
  "url": "examples-linear-systems.html#examples-linear-systems-6",
  "type": "Question",
  "number": "6.5.4",
  "title": "Testing for invertibility with determinant or rank.",
  "body": "Testing for invertibility with determinant or rank  Linear algebra says that an matrix is singular (non-invertible) if and only if , if and only if . But in computational practice these two tests for invertibility can give different results. Consider the diagonal matrix with entries and .  A = [1e16 0; 0 1]; disp(det(A)) disp(rank(A))  Matlab says the determinant is which makes sense: it is the product of diagonal entries. Yet, it also says the rank is . Why? "
},
{
  "id": "examples-linear-systems-7",
  "level": "2",
  "url": "examples-linear-systems.html#examples-linear-systems-7",
  "type": "Question",
  "number": "6.5.5",
  "title": "Model selection.",
  "body": "Model selection  How different is the best-fit parabola in from the line of best fit? If you have to choose between fitting a line or a parabola to this data set, what would you use?  Later we will consider the issue of model selection systematically: how to decide which model is more appropriate (for example, linear or quadratic).  "
},
{
  "id": "exercises-linear-systems",
  "level": "1",
  "url": "exercises-linear-systems.html",
  "type": "Exercises",
  "number": "6.6",
  "title": "Homework",
  "body": " Homework    For each of the following systems, decide if it is: (i) overdetermined, under-determined, or square; (ii) has a unique solution, has infinitely many solutions, or is inconsistent. Briefly explain how you reached these conclusions. To save time, you may use Matlab's rank command to compute the ranks of matrices.         Write a function linearfit that takes arguments x and y (vectors of the same size) and returns two numbers c and d , coefficients of the best-fitting line . Then apply it to the population of your hometown during years 1950, 1960, ..., 2010, 2020. (The data should be easy to find online; if not, use a larger nearby town). The code could look like this.  x = (1950:10:2020)'; % years as a column vector y = % population of your hometown in these years [c, d] = linearfit(x, y); % find the coefficients of linear fit xx = linspace(min(x), max(x), 500); % to be used for plotting the line plot(x, y, 'r*', xx, c*xx + d, 'b') % plot red points and blue line function [c, d] = linearfit(x,y) ... set up and solve an overdetermined system, ... then assign c and d based on its solution end  We do not actually need 500 points in the vector xx to plot a line: two would be enough. But the code is written to be adaptable for non-linear fit in the future.      Write a script that:  Creates a matrix of size according to the formula . This can be done either with a double loop or by using array expansion as explained in .  Creates a column vector with elements which alternate like . Here is the first digit of your SUID.  Computes the solution of and displays the norm of the difference between and .    Remark . The matrix is invertible, is not very large, and does not have any extremely large or extremely small entries: they are all between and . Yet, it is so close to being singular that the solution of this linear system is likely to be pure noise due to round-off errors.    "
},
{
  "id": "exercises-linear-systems-2",
  "level": "2",
  "url": "exercises-linear-systems.html#exercises-linear-systems-2",
  "type": "Exercise",
  "number": "6.6.1",
  "title": "",
  "body": "  For each of the following systems, decide if it is: (i) overdetermined, under-determined, or square; (ii) has a unique solution, has infinitely many solutions, or is inconsistent. Briefly explain how you reached these conclusions. To save time, you may use Matlab's rank command to compute the ranks of matrices.      "
},
{
  "id": "exercises-linear-systems-3",
  "level": "2",
  "url": "exercises-linear-systems.html#exercises-linear-systems-3",
  "type": "Exercise",
  "number": "6.6.2",
  "title": "",
  "body": "  Write a function linearfit that takes arguments x and y (vectors of the same size) and returns two numbers c and d , coefficients of the best-fitting line . Then apply it to the population of your hometown during years 1950, 1960, ..., 2010, 2020. (The data should be easy to find online; if not, use a larger nearby town). The code could look like this.  x = (1950:10:2020)'; % years as a column vector y = % population of your hometown in these years [c, d] = linearfit(x, y); % find the coefficients of linear fit xx = linspace(min(x), max(x), 500); % to be used for plotting the line plot(x, y, 'r*', xx, c*xx + d, 'b') % plot red points and blue line function [c, d] = linearfit(x,y) ... set up and solve an overdetermined system, ... then assign c and d based on its solution end  We do not actually need 500 points in the vector xx to plot a line: two would be enough. But the code is written to be adaptable for non-linear fit in the future.   "
},
{
  "id": "exercises-linear-systems-4",
  "level": "2",
  "url": "exercises-linear-systems.html#exercises-linear-systems-4",
  "type": "Exercise",
  "number": "6.6.3",
  "title": "",
  "body": "  Write a script that:  Creates a matrix of size according to the formula . This can be done either with a double loop or by using array expansion as explained in .  Creates a column vector with elements which alternate like . Here is the first digit of your SUID.  Computes the solution of and displays the norm of the difference between and .    Remark . The matrix is invertible, is not very large, and does not have any extremely large or extremely small entries: they are all between and . Yet, it is so close to being singular that the solution of this linear system is likely to be pure noise due to round-off errors.   "
},
{
  "id": "section-motivation-numeric-solution",
  "level": "1",
  "url": "section-motivation-numeric-solution.html",
  "type": "Section",
  "number": "7.1",
  "title": "Motivation for solving equations numerically",
  "body": " Motivation for solving equations numerically  We often want to solve an equation of the form , given a real-valued function of one real variable . Some such equations admit a symbolic solution, obtained by some algebraic manipulations. For example, the equation has the solution . But if we put together two or more unrelated functions, for example , algebra does not help.  For this reason, Matlab has a built-in root-finding function fzero . Its first argument is the function which should be equated to zero, the second argument is our initial guess at where the solution may be (put 0 if you have no idea). For example, fzero(@(x) 2*exp(x) + x^3 - 1, 0) finds the solution -0.5439 . But even though we have fzero , we still have to understand the methods used for finding roots, because   fzero only gives one solution, there may be others;  the output of fzero may be wrong.  An example of wrong answer: fzero(@(x) exp(-x^2), 0) returns x=-28.9631 . In reality, has no solutions, and there is nothing special about the number produced by fzero : this is just where its algorithm decided to stop, thinking close enough .  "
},
{
  "id": "section-motivation-numeric-solution-2",
  "level": "2",
  "url": "section-motivation-numeric-solution.html#section-motivation-numeric-solution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symbolic "
},
{
  "id": "section-meaning-numeric-solution",
  "level": "1",
  "url": "section-meaning-numeric-solution.html",
  "type": "Section",
  "number": "7.2",
  "title": "The meaning of a numeric solution",
  "body": " The meaning of a numeric solution  In what sense do we expect the equation to hold? Because of the round-off errors ( ), we wlll not necessarily get 0 when plugging in some number x. For example, if f = @(x) x^2-2; then we would expect f(sqrt(2)) to be 0, but actually f(sqrt(2)) produces 4.4409e-16 , a small but nonzero number. We could ask for abs(f(x)) to be small, for example abs(f(x)) < eps where the Matlab command eps returns , the amount of round-off error one can expect for numbers of size about 1. But there are two issues with this approach:  The error in computing f(x) may be much larger than eps , as round-off errors may accumulate.  Very small value of f(x) do not mean that x is near a root of function f : for example, the function f = @(x) exp(-x^2); has abs(f(7)) < eps , but the equation has no solutions at all.    A more robust approach is to look not for a single number but for an interval  that is known to contain a root of function . If the interval is small enough, it does not really matter where in the interval the solution is. How small is small enough? There is no universal answer. For many practical purposes, is good enough. Or we may want to get a more accurate answer. This makes sense when the root itself is not extremely large or extremely small. But when the root is of size we cannot possibly hope to get an interval of length around it, or even of length 1. Indeed, the comparison 10^20 + 1 == 10^20 evaluates as True in Matlab, meaning that it cannot tell these numbers apart because of the limitation of computer arithmetic.  For the reason mentioned in the previous paragraph, the Matlab command eps(x) gives the smallest possible size of an interval including x that can be expressed in its arithmetic. For example, eps(10^20) returns 16384, indicating we cannot expect an interval around to be smaller than 16384. When looking for a root, a reasonable approach is to consider an interval  small enough when b - a < 100*eps(a) where the factor 100 allows for accumulation of round-off errors during the computation.  "
},
{
  "id": "section-bisection-method",
  "level": "1",
  "url": "section-bisection-method.html",
  "type": "Section",
  "number": "7.3",
  "title": "Bisection method",
  "body": " Bisection method  The bisection method is based on the Intermediate Value Theorem . Suppose that the function is continuous on the interval and , meaning that takes on values of opposite sign at the endpoints. The Intermediate Value Theorem says that there exists some root of between and : that is, there exists in such that .   To go from positive to negative, a function function must turn to 0  An interval such that is called a bracketing interval . As shows, there could be multiple roots inside of the bracketing interva. The bisection method will find one of them.  Bisection method : Divide the interval in two halves by the midpoint . Since and have opposite signs, one of the following holds:  If has the same sign as , then we replace with , making our new bracketing interval.  If has the same sign as , then we replace with , making our new bracketing interval.  If , we already found a root so the process stops.  The above process repeats until the bracketing interval is small enough, as discussed in .   Bisection method illustrated by marking the bracketing intervals   Finding a root by bisection  Find a root of equation on the interval using bisection. (This is the function shown on ). The Matlab function sign can be used to compare the signs of values.    f = @(x) exp(-x\/2) + sin(3*x) - 1\/2; a = -1; b = 1.5; if f(a)*f(b) >= 0 error('Not a bracketing interval'); end while abs(b-a) >= 100*eps(a) c = (a+b)\/2; if sign(f(c)) == sign(f(a)) a = c; elseif sign(f(c)) == sign(f(b)) b = c; else break end end fprintf('Found a root x = %.12g\\n', (a+b)\/2);  If the function has the same sign at both given endpoints, the bisection method cannot run, so the command error is used to display a message and exit the program. This is a useful command to use when the computation has to be interrupted. The while loop runs until either the interval becomes small enough (length less than 100*eps(a) ) or we accidentally reach so the loop stops.    The bisection method is not very fast, but is very reliable. If the initial bracketing interval had length , after iterations we get an interval of length . So, it takes about 50 iterations to reduce the bracketing interval from length to length . The speed of convergence of a numerical method is often visualized by plotting the logarithm of the error as a function of the number of steps. For the bisection method, the error after steps is so the logarithm is .   Logarithm of error as a function of the number of steps  Generally, if some numerical method has error after steps, we say that the method is  linearly convergent if with some constant  quadratically convergent if with some constant  convergent with order if with some constants , .  Since for the bisection method , the bisection method is linearly convergent.  "
},
{
  "id": "section-bisection-method-2",
  "level": "2",
  "url": "section-bisection-method.html#section-bisection-method-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intermediate Value Theorem "
},
{
  "id": "bisection1-png",
  "level": "2",
  "url": "section-bisection-method.html#bisection1-png",
  "type": "Figure",
  "number": "7.3.1",
  "title": "",
  "body": " To go from positive to negative, a function function must turn to 0 "
},
{
  "id": "section-bisection-method-4",
  "level": "2",
  "url": "section-bisection-method.html#section-bisection-method-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bracketing interval "
},
{
  "id": "section-bisection-method-5",
  "level": "2",
  "url": "section-bisection-method.html#section-bisection-method-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bisection method "
},
{
  "id": "bisection2-png",
  "level": "2",
  "url": "section-bisection-method.html#bisection2-png",
  "type": "Figure",
  "number": "7.3.2",
  "title": "",
  "body": " Bisection method illustrated by marking the bracketing intervals "
},
{
  "id": "example-bisection",
  "level": "2",
  "url": "section-bisection-method.html#example-bisection",
  "type": "Example",
  "number": "7.3.3",
  "title": "Finding a root by bisection.",
  "body": " Finding a root by bisection  Find a root of equation on the interval using bisection. (This is the function shown on ). The Matlab function sign can be used to compare the signs of values.    f = @(x) exp(-x\/2) + sin(3*x) - 1\/2; a = -1; b = 1.5; if f(a)*f(b) >= 0 error('Not a bracketing interval'); end while abs(b-a) >= 100*eps(a) c = (a+b)\/2; if sign(f(c)) == sign(f(a)) a = c; elseif sign(f(c)) == sign(f(b)) b = c; else break end end fprintf('Found a root x = %.12g\\n', (a+b)\/2);  If the function has the same sign at both given endpoints, the bisection method cannot run, so the command error is used to display a message and exit the program. This is a useful command to use when the computation has to be interrupted. The while loop runs until either the interval becomes small enough (length less than 100*eps(a) ) or we accidentally reach so the loop stops.   "
},
{
  "id": "bisection3-png",
  "level": "2",
  "url": "section-bisection-method.html#bisection3-png",
  "type": "Figure",
  "number": "7.3.4",
  "title": "",
  "body": " Logarithm of error as a function of the number of steps "
},
{
  "id": "section-bisection-method-10",
  "level": "2",
  "url": "section-bisection-method.html#section-bisection-method-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly convergent quadratically convergent convergent with order "
},
{
  "id": "section-bisection-issues",
  "level": "1",
  "url": "section-bisection-issues.html",
  "type": "Section",
  "number": "7.4",
  "title": "Limitations of the bisection method",
  "body": " Limitations of the bisection method  The main limitation of the bisection method are:  It does not apply to systems of more than one equation  It requires the knowledge of a bracketing interval  It requires a continuous function  Its speed of convergence is slow (linear)  To illustrate the second limitation, consider the equation . It has two roots, both of which are very close to 1. Outside of a small neighborhood of 1, the function is positive. So, in order to construct a bracketing interval one needs to place one of its endpoints very close to 1. This means one needs to have a good idea of where the roots are in order to start with the method.  Calculus methods involving the derivative can help us understand in what direction the function changes, improving our chance of finding a bracketing interval.   Find the number of roots and a bracketing interval for each of them  For the function , determine the number of roots and find a bracketing interval for each of them.  The derivative is always positive. Therefore, the function increases on the real line. Such a function either has no roots (if its graph never crosses the -axis), or has one root. Since as and as , it follows that the graph crosses the -axis. We need a finite bracketing interval, since for the bisection method to work, both and must be finite. Since it remains to find a negative value. For example, .  Answer: one root, with a bracketing interval .    "
},
{
  "id": "section-bisection-issues-4",
  "level": "2",
  "url": "section-bisection-issues.html#section-bisection-issues-4",
  "type": "Example",
  "number": "7.4.1",
  "title": "Find the number of roots and a bracketing interval for each of them.",
  "body": " Find the number of roots and a bracketing interval for each of them  For the function , determine the number of roots and find a bracketing interval for each of them.  The derivative is always positive. Therefore, the function increases on the real line. Such a function either has no roots (if its graph never crosses the -axis), or has one root. Since as and as , it follows that the graph crosses the -axis. We need a finite bracketing interval, since for the bisection method to work, both and must be finite. Since it remains to find a negative value. For example, .  Answer: one root, with a bracketing interval .   "
},
{
  "id": "examples-roots-bisection",
  "level": "1",
  "url": "examples-roots-bisection.html",
  "type": "Section",
  "number": "7.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Number of roots and a bracketing interval for each of them  For the function , use the derivative determine the number of roots and find a bracketing interval for each of them. (No programming is needed.)  The derivative has the same sign as . Therefore, the function has a minimum at . Its value there is .  On the interval the function is decreasing, so there is at most one root here. Since , there is a root with bracketing interval .  On the interval the function is increasing, so there is at most one root here. Since , there is a root with bracketing interval .  Answer: two roots, with bracketing intervals and .   Incorrect answer obtained by bisection  Run the code in with the following modification: f = @(x) tan(x); a = 1; b = 2; Note that and , so the bisection algorithm can run. What is its output, and what is wrong with it? How could this error be avoided?  The program output is Found a root x = 1.57079632679 . But this value is not a solution of equation . It is a point of discontinuity, where the tangent has vertical asymptote . Because of discontinuity, the tangent function changes sign without passing through 0.  One way to avoid this error is to check whether the function has a small value at the root that we found, for example as follows.  x = (a+b)\/2; if abs(f(x)) < 1e-9 fprintf('Found a root x = %.12g\\n', x); else fprintf('Suspected discontinuity at x = %.12g\\n', x); end  Then the output is Suspected discontinuity at x = 1.57079632679     Trisection method  The word bisection means dividing something into two parts, usually equal ones. In the bisection method, an interval is divided into two equal parts, of which we keep one. This means that the length of the interval is divided by 2 at each step.  One can imagine a similar trisection method where an interval is divided into three equal parts, and one of them is kept. With this method, the length of the interval is divided by 3 at each step, so the interval shrinks faster. Does this make the trisection method faster than the bisection method? Why or why not?    Better detection of discontinuity  In we avoid mistaking discontinuity for a root by adding the check abs(f(x)) < 1e-9 . What could go wrong with this approach? Think of some situation where this additional check will reject a valid solution. Could it be replaced by a better one?   "
},
{
  "id": "example-bracketing-30x-exp",
  "level": "2",
  "url": "examples-roots-bisection.html#example-bracketing-30x-exp",
  "type": "Example",
  "number": "7.5.1",
  "title": "Number of roots and a bracketing interval for each of them.",
  "body": " Number of roots and a bracketing interval for each of them  For the function , use the derivative determine the number of roots and find a bracketing interval for each of them. (No programming is needed.)  The derivative has the same sign as . Therefore, the function has a minimum at . Its value there is .  On the interval the function is decreasing, so there is at most one root here. Since , there is a root with bracketing interval .  On the interval the function is increasing, so there is at most one root here. Since , there is a root with bracketing interval .  Answer: two roots, with bracketing intervals and . "
},
{
  "id": "example-bisection-discontinuity",
  "level": "2",
  "url": "examples-roots-bisection.html#example-bisection-discontinuity",
  "type": "Example",
  "number": "7.5.2",
  "title": "Incorrect answer obtained by bisection.",
  "body": " Incorrect answer obtained by bisection  Run the code in with the following modification: f = @(x) tan(x); a = 1; b = 2; Note that and , so the bisection algorithm can run. What is its output, and what is wrong with it? How could this error be avoided?  The program output is Found a root x = 1.57079632679 . But this value is not a solution of equation . It is a point of discontinuity, where the tangent has vertical asymptote . Because of discontinuity, the tangent function changes sign without passing through 0.  One way to avoid this error is to check whether the function has a small value at the root that we found, for example as follows.  x = (a+b)\/2; if abs(f(x)) < 1e-9 fprintf('Found a root x = %.12g\\n', x); else fprintf('Suspected discontinuity at x = %.12g\\n', x); end  Then the output is Suspected discontinuity at x = 1.57079632679   "
},
{
  "id": "examples-roots-bisection-5",
  "level": "2",
  "url": "examples-roots-bisection.html#examples-roots-bisection-5",
  "type": "Question",
  "number": "7.5.3",
  "title": "“Trisection” method.",
  "body": " Trisection method  The word bisection means dividing something into two parts, usually equal ones. In the bisection method, an interval is divided into two equal parts, of which we keep one. This means that the length of the interval is divided by 2 at each step.  One can imagine a similar trisection method where an interval is divided into three equal parts, and one of them is kept. With this method, the length of the interval is divided by 3 at each step, so the interval shrinks faster. Does this make the trisection method faster than the bisection method? Why or why not?  "
},
{
  "id": "examples-roots-bisection-6",
  "level": "2",
  "url": "examples-roots-bisection.html#examples-roots-bisection-6",
  "type": "Question",
  "number": "7.5.4",
  "title": "Better detection of discontinuity.",
  "body": " Better detection of discontinuity  In we avoid mistaking discontinuity for a root by adding the check abs(f(x)) < 1e-9 . What could go wrong with this approach? Think of some situation where this additional check will reject a valid solution. Could it be replaced by a better one?  "
},
{
  "id": "exercises-roots-bisection",
  "level": "1",
  "url": "exercises-roots-bisection.html",
  "type": "Exercises",
  "number": "7.6",
  "title": "Homework",
  "body": " Homework    Let . Use the derivative to determine the number of roots of and find a bracketing interval for each of them. Remember that a bracketing interval must be contained in the domain of ; otherwise the bisection method cannot work.  In this problem, as in Matlab and in most mathematical texts, means the natural logarithm, base . No programming is needed to solve this problem, and even a calculator is not necessary, as long as you remember that .      Write a Matlab script which finds and prints both roots of the equation , using the bisection of the bracketing interval found in . To avoid duplicating code, write a named function bisection(f, a, b) which takes the function and a bracketing interval as arguments and returns a root by using the algorithm in . The script could look as follows.  f = @(x) 30*x*exp(10*x) + 1; root1 = bisection(f, -1, -0.1); root2 = ... fprintf('Found roots at %.12g and %.12g\\n', root1, root2) function x = bisection(f, a, b) ... end    "
},
{
  "id": "exercises-roots-bisection-2",
  "level": "2",
  "url": "exercises-roots-bisection.html#exercises-roots-bisection-2",
  "type": "Exercise",
  "number": "7.6.1",
  "title": "",
  "body": "  Let . Use the derivative to determine the number of roots of and find a bracketing interval for each of them. Remember that a bracketing interval must be contained in the domain of ; otherwise the bisection method cannot work.  In this problem, as in Matlab and in most mathematical texts, means the natural logarithm, base . No programming is needed to solve this problem, and even a calculator is not necessary, as long as you remember that .   "
},
{
  "id": "exercises-roots-bisection-3",
  "level": "2",
  "url": "exercises-roots-bisection.html#exercises-roots-bisection-3",
  "type": "Exercise",
  "number": "7.6.2",
  "title": "",
  "body": "  Write a Matlab script which finds and prints both roots of the equation , using the bisection of the bracketing interval found in . To avoid duplicating code, write a named function bisection(f, a, b) which takes the function and a bracketing interval as arguments and returns a root by using the algorithm in . The script could look as follows.  f = @(x) 30*x*exp(10*x) + 1; root1 = bisection(f, -1, -0.1); root2 = ... fprintf('Found roots at %.12g and %.12g\\n', root1, root2) function x = bisection(f, a, b) ... end   "
},
{
  "id": "section-classification-fixed-points",
  "level": "1",
  "url": "section-classification-fixed-points.html",
  "type": "Section",
  "number": "8.1",
  "title": "Classification of fixed points",
  "body": " Classification of fixed points  A fixed point of a function is a number such that . This is the same as a root of but we will see that writing an equation with on the right provides a new approach to solving it.   Find all fixed points of a function  Find all fixed points of the function    Squaring both sides of yields which is a quadratic equation with roots . However, the negative root does not satisfy the original equation .  Answer: one fixed point .   The process of iterating some function consists of the following: start from some initial value , let , , and generally . If the sequence has a limit , and is a continuous function, it follows that .  However, can we expect the iteration to converge to a fixed point ? The answer depends on the value of . Indeed, when , the difference is approximately because the graph of a differential function is close to its tangent line. When , the distance to fixed point is decreasing but if it is increasing. This leads us to introduce the following concept.  Classification of fixed points . A fixed point is called  repelling if   attracting if   super-attracting if (a special case of attracting fixed points)  neutral if   According to the above, iteration of may converge to an attracting point but will not converge to a repelling one. The neutral points are a borderline case: some of them are limits of iterative process, some are not.  Find and classify the fixed points  Find and classify all fixed points of the function .  The equation simplifies to which has roots . These are the three fixed points. Plug each into the derivative to find that   , a neutral fixed point   , a repelling fixed point   , a repelling fixed point    "
},
{
  "id": "section-classification-fixed-points-2",
  "level": "2",
  "url": "section-classification-fixed-points.html#section-classification-fixed-points-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fixed point "
},
{
  "id": "section-classification-fixed-points-3",
  "level": "2",
  "url": "section-classification-fixed-points.html#section-classification-fixed-points-3",
  "type": "Example",
  "number": "8.1.1",
  "title": "Find all fixed points of a function.",
  "body": " Find all fixed points of a function  Find all fixed points of the function    Squaring both sides of yields which is a quadratic equation with roots . However, the negative root does not satisfy the original equation .  Answer: one fixed point .  "
},
{
  "id": "section-classification-fixed-points-4",
  "level": "2",
  "url": "section-classification-fixed-points.html#section-classification-fixed-points-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterating "
},
{
  "id": "section-classification-fixed-points-6",
  "level": "2",
  "url": "section-classification-fixed-points.html#section-classification-fixed-points-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "repelling attracting super-attracting neutral "
},
{
  "id": "section-classification-fixed-points-7",
  "level": "2",
  "url": "section-classification-fixed-points.html#section-classification-fixed-points-7",
  "type": "Example",
  "number": "8.1.2",
  "title": "Find and classify the fixed points.",
  "body": "Find and classify the fixed points  Find and classify all fixed points of the function .  The equation simplifies to which has roots . These are the three fixed points. Plug each into the derivative to find that   , a neutral fixed point   , a repelling fixed point   , a repelling fixed point   "
},
{
  "id": "section-rewriting-fixed-point",
  "level": "1",
  "url": "section-rewriting-fixed-point.html",
  "type": "Section",
  "number": "8.2",
  "title": "Rewriting equations in the fixed-point form",
  "body": " Rewriting equations in the fixed-point form  We now have a new method of solving the equations : rewrite it as , and build a sequence . If this sequence has a limit, which we recognize by being small, then we have a fixed point of , hence a root of . There are multiple ways to rewrite in the fixed-point form:           and so on. Although the fixed points are the same each case (they are the roots of ), their classification may be different. For example, consider . We know it has a root at . If we try to rewrite the equation as the fixed point at 1 is repelling because has modulus . Another rewrite is . This one works because the derivative of is with absolute value of at . The denominator reduced the derivative here.  Rewrite and solve by fixed-point iteration  Solve the equation by the fixed-point iteration method.   The function is increasing from 0 to 6 on the interval . Therefore, the equation has a solution in this interval. Following the idea of the previous paragraph, rewrite it as . This means and . Note this on which guarantees that the fixed point is attracting. Here is the code to find it.  g = @(x) (2-x^3)\/5; x0 = 0; max_tries = 1000; for k = 1:max_tries x1 = g(x0); if abs(x1-x0) < 100*eps(x0) break end x0 = x1; end if k < max_tries fprintf('Found x = %.12g after %d steps\\n', x1, k); else disp('Failed to converge') end  The reason for using a for loop is to set a limit for the number of attempts (1000). The loop ends sooner if the values of x essentially stop changing. We do not need separate variables for every element of the sequence: x0 and x1 keep being reused for old and new x-values. The output is Found x = 0.388291441005 .  "
},
{
  "id": "example-solve-fixed-point-iteration",
  "level": "2",
  "url": "section-rewriting-fixed-point.html#example-solve-fixed-point-iteration",
  "type": "Example",
  "number": "8.2.1",
  "title": "Rewrite and solve by fixed-point iteration.",
  "body": "Rewrite and solve by fixed-point iteration  Solve the equation by the fixed-point iteration method.   The function is increasing from 0 to 6 on the interval . Therefore, the equation has a solution in this interval. Following the idea of the previous paragraph, rewrite it as . This means and . Note this on which guarantees that the fixed point is attracting. Here is the code to find it.  g = @(x) (2-x^3)\/5; x0 = 0; max_tries = 1000; for k = 1:max_tries x1 = g(x0); if abs(x1-x0) < 100*eps(x0) break end x0 = x1; end if k < max_tries fprintf('Found x = %.12g after %d steps\\n', x1, k); else disp('Failed to converge') end  The reason for using a for loop is to set a limit for the number of attempts (1000). The loop ends sooner if the values of x essentially stop changing. We do not need separate variables for every element of the sequence: x0 and x1 keep being reused for old and new x-values. The output is Found x = 0.388291441005 . "
},
{
  "id": "section-rate-convergence",
  "level": "1",
  "url": "section-rate-convergence.html",
  "type": "Section",
  "number": "8.3",
  "title": "The speed of convergence of fixed-point iteration",
  "body": " The speed of convergence of fixed-point iteration  Near an attracting fixed point with , the convergence is linear in the sense that the error at the next step is about times the error of the previous step. But if (meaning is a superattractive fixed point), then the rate of convergence is extremely fast. Indeed, Taylor's formula says that is bounded by a constant multiple of , where the constant depends on the value of the second derivative . This rate of convergence is called quadratic because at each step, the error size gets squared (and multiplied by a constant).  Compare two functions: and . Both have a fixed point . Since and , the point 1 is attracting for and super-attracting for . Let's see how quickly the iteration converges to the fixed point, starting from 5 for example.  g = @(x) sqrt(x); x = 5; for k = 1:10 x = g(x); fprintf('After %d steps got %.15g\\n', k, x) end  The numbers approach 1 but not very quickly.  After 1 steps got 2.23606797749979 After 2 steps got 1.49534878122122 After 3 steps got 1.22284454499385 After 4 steps got 1.10582301703024 After 5 steps got 1.05158119849598 After 6 steps got 1.02546633220988 After 7 steps got 1.01265311543977  And so on: each error is about half of the previous, indicating linear speed of convergence. After 10 steps we are still more than 0.001 away from the fixed point. In contrast, running the above code with g = @(x) (x+1\/x)\/2; results in much faster convergence.  After 1 steps got 2.6 After 2 steps got 1.49230769230769 After 3 steps got 1.0812053925456 After 4 steps got 1.00304952038898 After 5 steps got 1.00000463565079 After 6 steps got 1.00000000001074 After 7 steps got 1  After just 7 steps of iteration, the value is so close to 1 that it becomes equal to 1, due to round-off involved.  "
},
{
  "id": "section-rate-convergence-2",
  "level": "2",
  "url": "section-rate-convergence.html#section-rate-convergence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratic "
},
{
  "id": "examples-fixed-point-iteration",
  "level": "1",
  "url": "examples-fixed-point-iteration.html",
  "type": "Section",
  "number": "8.4",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Rewriting an equation to make a specific solution an attracting fixed point  The equation has a solution in the interval , as one can see from the Intermediate Value Theorem. Rewrite the equation as a fixed-point problem so that this root is an attracting fixed point.  The form does not work here because the function has which is greater than 1 on the interval . But works because the function has which is less than .     Classify an infinite set of fixed points  The function has infinitely many fixed points, because the graph of tangent intersects the line infinitely many times. Show that one of the fixed points is neutral and the rest are repelling.  The neutral point is at 0, because and . How to find at other fixed points, if we do not know them? Recall that . Therefore, if is a fixed point, then . This expression is strictly greater than one when . So, all other fixed points are repelling.   Convergence to a neutral fixed point  Both functions and have 0 as a neutral fixed point. For one of these functions, the iteration method converges to 0, although very slowly. For another it does not. Why? (Hint: consider the plots of these functions.)  Logarithmic plot of error size  Recall that a sequence converges to its limit at a linear rate, the graph of as a function of looks like a line. What will it look like when the rate of convergence is quadratic?  "
},
{
  "id": "example-rewrite-for-root1",
  "level": "2",
  "url": "examples-fixed-point-iteration.html#example-rewrite-for-root1",
  "type": "Example",
  "number": "8.4.1",
  "title": "Rewriting an equation to make a specific solution an attracting fixed point.",
  "body": " Rewriting an equation to make a specific solution an attracting fixed point  The equation has a solution in the interval , as one can see from the Intermediate Value Theorem. Rewrite the equation as a fixed-point problem so that this root is an attracting fixed point.  The form does not work here because the function has which is greater than 1 on the interval . But works because the function has which is less than .   "
},
{
  "id": "example-tangent-function",
  "level": "2",
  "url": "examples-fixed-point-iteration.html#example-tangent-function",
  "type": "Example",
  "number": "8.4.2",
  "title": "Classify an infinite set of fixed points.",
  "body": " Classify an infinite set of fixed points  The function has infinitely many fixed points, because the graph of tangent intersects the line infinitely many times. Show that one of the fixed points is neutral and the rest are repelling.  The neutral point is at 0, because and . How to find at other fixed points, if we do not know them? Recall that . Therefore, if is a fixed point, then . This expression is strictly greater than one when . So, all other fixed points are repelling.  "
},
{
  "id": "examples-fixed-point-iteration-5",
  "level": "2",
  "url": "examples-fixed-point-iteration.html#examples-fixed-point-iteration-5",
  "type": "Question",
  "number": "8.4.3",
  "title": "Convergence to a neutral fixed point.",
  "body": "Convergence to a neutral fixed point  Both functions and have 0 as a neutral fixed point. For one of these functions, the iteration method converges to 0, although very slowly. For another it does not. Why? (Hint: consider the plots of these functions.) "
},
{
  "id": "examples-fixed-point-iteration-6",
  "level": "2",
  "url": "examples-fixed-point-iteration.html#examples-fixed-point-iteration-6",
  "type": "Question",
  "number": "8.4.4",
  "title": "Logarithmic plot of error size.",
  "body": "Logarithmic plot of error size  Recall that a sequence converges to its limit at a linear rate, the graph of as a function of looks like a line. What will it look like when the rate of convergence is quadratic? "
},
{
  "id": "exercises-fixed-point-iteration",
  "level": "1",
  "url": "exercises-fixed-point-iteration.html",
  "type": "Exercises",
  "number": "8.5",
  "title": "Homework",
  "body": " Homework    For each of the following functions, find all of its fixed points. Classify each fixed point as attracting, repelling, or neutral.     No programming is involved in this problem. Ignore the solutions in complex numbers like ; we only need real numbers here.      Write a script that solves the equation using the fixed point iteration. Here is the number formed by the first two digits of your SUID.  In order to use the fixed point method, you need to rewrite the given equation as . There are several ways to do this, try at least two different ones, or as many as are needed until a root is found. Starting from some value of , such as , below, run fixed point iteration until either it converges to a root, or the number of iterations becomes extremely large. The script should display either Root found at x = ... after ... steps or Failed to converge . Add a comment with the different functions you tried, and what the outcome was.  Here, as in in Matlab and in most mathematical texts, means the natural logarithm, base .    "
},
{
  "id": "exercises-fixed-point-iteration-2",
  "level": "2",
  "url": "exercises-fixed-point-iteration.html#exercises-fixed-point-iteration-2",
  "type": "Exercise",
  "number": "8.5.1",
  "title": "",
  "body": "  For each of the following functions, find all of its fixed points. Classify each fixed point as attracting, repelling, or neutral.     No programming is involved in this problem. Ignore the solutions in complex numbers like ; we only need real numbers here.   "
},
{
  "id": "exercises-fixed-point-iteration-3",
  "level": "2",
  "url": "exercises-fixed-point-iteration.html#exercises-fixed-point-iteration-3",
  "type": "Exercise",
  "number": "8.5.2",
  "title": "",
  "body": "  Write a script that solves the equation using the fixed point iteration. Here is the number formed by the first two digits of your SUID.  In order to use the fixed point method, you need to rewrite the given equation as . There are several ways to do this, try at least two different ones, or as many as are needed until a root is found. Starting from some value of , such as , below, run fixed point iteration until either it converges to a root, or the number of iterations becomes extremely large. The script should display either Root found at x = ... after ... steps or Failed to converge . Add a comment with the different functions you tried, and what the outcome was.  Here, as in in Matlab and in most mathematical texts, means the natural logarithm, base .   "
},
{
  "id": "section-newton-method-intro",
  "level": "1",
  "url": "section-newton-method-intro.html",
  "type": "Section",
  "number": "9.1",
  "title": "Newton’s method",
  "body": " Newton's method  The idea of Newton's method is geometrically natural. We want to solve but since may be complicated, we replace it by its linear approximation (tangent line at a certain point). The resulting linear equation is easy to solve. Of course, its solution is probably not a solution of the original equation, but perhaps it is close to it. The process repeats, using the previously found solution as a new point at which to draw a tangent line. A static image of this process is below. Interactive visualization is also available.   Two steps of Newton's method  Formally, the linear approximation to at a point is . Equating the right hand side to 0 we find which means that the point where the tangent line at meets the line is . Therefore, we can express Newton's method as iteration of the function Note that any point where and is a fixed point of . In fact, it is a super-attracting point of because which is zero when .   Find and simplify the function of Newton's method  Given , find and simplify the function .    Bringing to common denominator often helps:   Once we have the function , the rest of the process is the same as in , in particular in . Changing the first two lines of that program to g = @(x) 2*x^3\/(3*x^2-1); x0 = 0.6; we get Found x = 1 after 11 steps . If the starting point is different, the process may converge to a different root of the equation . For example with x0 = 0.57 we get Found x = -1 after 14 steps . A small change of initial condition produced a rather different solution; we went from finding x = 1 to finding x = -1. The pattern of what starting points produce which solution can be very complicated: see the illustrations on Wikipedia page Newton fractal .  "
},
{
  "id": "newton1-png",
  "level": "2",
  "url": "section-newton-method-intro.html#newton1-png",
  "type": "Figure",
  "number": "9.1.1",
  "title": "",
  "body": " Two steps of Newton's method "
},
{
  "id": "example-newton-find-g",
  "level": "2",
  "url": "section-newton-method-intro.html#example-newton-find-g",
  "type": "Example",
  "number": "9.1.2",
  "title": "Find and simplify the function <span class=\"process-math\">\\(g\\)<\/span> of Newton’s method.",
  "body": " Find and simplify the function of Newton's method  Given , find and simplify the function .    Bringing to common denominator often helps:  "
},
{
  "id": "section-newton-method-issues",
  "level": "1",
  "url": "section-newton-method-issues.html",
  "type": "Section",
  "number": "9.2",
  "title": "Potential issues with Newton’s method",
  "body": " Potential issues with Newton's method  One potential issue is obvious: we might not have a formula for the derivative of function . This can be overcome by using numerical differentiation , which we will study later in .  The points where are problematic for Newton's method, for two reasons. One is that is not defined at such a point because of division by zero. So, if we happen to arrive at such a point in the process of iteration, the process has to be stopped and restarted again with a different initial value. Even if the derivative is not exactly zero but is very close to it, the value of can be huge, sending the search to a location far from the actual solutions.  The second reason the zeros of derivative are problematic is that a point where is not a superattracting fixed point of , even if we manage to extend the definition of to such a point by canceling out the zero in the denominator. For example, let where . Clearly, . Computing we see that can be extended to . Since , this is an attracting point. But it is not a super-attracting one, which means the speed of convergence of Newton's method to such multiple roots is slow: linear instead of quadratic. Here is an example of what happens with : the points approach the root quite slowly, with each step being of the distance to the root. This is even slower than bisection.   Newton's method converges slowly to a multiple root  A way to improve convergence in this case is presented in . Fortunately, a multiple root is a somewhat exceptional case and in practice we find Newton's method converging at quadratic rate.  But the most serious issue is that the method may fail to converge at all, either because the iteration of gets stuck in a loop or because it tends to infinity. A typical example is (note that Matlab notation for arctangent function is atan ). Here , which is g = @(x) x - (x^2+1)*atan(x); in Matlab notation. With the initial value x0 = 1 the process quickly converges to 0. With the initial value x0 = 2 (or even 1.5) it fails to converge. The problem can be seen numerically by computing a few iterations in Matlab console.  >> g(1.5) ans = -1.6941 >> g(ans) ans = 2.3211 >> g(ans) ans = -5.1141 >> g(ans) ans = 32.296  This also illustrates the use of ans , the variable that has the result of previous computation. Geometrically, Newton's method overshoots the target because the tangent lines have small slope.   Newton's method overshoots and fails to converge  "
},
{
  "id": "section-newton-method-issues-4",
  "level": "2",
  "url": "section-newton-method-issues.html#section-newton-method-issues-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple roots "
},
{
  "id": "newton3-png",
  "level": "2",
  "url": "section-newton-method-issues.html#newton3-png",
  "type": "Figure",
  "number": "9.2.1",
  "title": "",
  "body": " Newton's method converges slowly to a multiple root "
},
{
  "id": "newton2-png",
  "level": "2",
  "url": "section-newton-method-issues.html#newton2-png",
  "type": "Figure",
  "number": "9.2.2",
  "title": "",
  "body": " Newton's method overshoots and fails to converge "
},
{
  "id": "section-secant-method",
  "level": "1",
  "url": "section-secant-method.html",
  "type": "Section",
  "number": "9.3",
  "title": "The secant method",
  "body": " The secant method  The secant method is a close relative of Newton's method. The only difference is that instead of drawing a tangent line and finding where it crosses the line we do the same for a secant line. The slope of a secant line is computed as where are two distinct points on the x-axis. The benefit is that we do not need the derivative of , we only use the function itself. The drawback is that we have to keep track not of just one point, but of two. This makes the algorithm slightly more complicated: it is not just fixed-point iteration of some function as in Newton's method. Also, the analysis of its speed of convergence is more complicated: generally, it is between linear and quadratic; faster than bisection but slower than Newton.   Implement the secant method  Write a script that starts with the definition of a function and two initial points, for example f = @(x) x^3 - x; x = 5; p = 7; and proceeds to find a root of using the secant method: the next point to be computed will be where the fraction represents division by the slope of secant line.   f = @(x) x^3 - x; x = 5; p = 7; max_tries = 1000 for k = 1:max_tries x1 = x - f(x)*(x-p)\/(f(x)-f(p)); if abs(x1-x) < 100*eps(x) break end p = x; x = x1; end if k < max_tries fprintf('Found x = %.12g after %d steps\\n', x, k); else disp('Failed to converge') end  This script follows the structure of except that we compute \"new x\", called x1, on the basis of two previous values (called x and p ). After the computation, x and p are replaced by x1 and x : the newly computed point becomes one of the two points through which we draw next secant line.   "
},
{
  "id": "example-secant-method",
  "level": "2",
  "url": "section-secant-method.html#example-secant-method",
  "type": "Example",
  "number": "9.3.1",
  "title": "Implement the secant method.",
  "body": " Implement the secant method  Write a script that starts with the definition of a function and two initial points, for example f = @(x) x^3 - x; x = 5; p = 7; and proceeds to find a root of using the secant method: the next point to be computed will be where the fraction represents division by the slope of secant line.   f = @(x) x^3 - x; x = 5; p = 7; max_tries = 1000 for k = 1:max_tries x1 = x - f(x)*(x-p)\/(f(x)-f(p)); if abs(x1-x) < 100*eps(x) break end p = x; x = x1; end if k < max_tries fprintf('Found x = %.12g after %d steps\\n', x, k); else disp('Failed to converge') end  This script follows the structure of except that we compute \"new x\", called x1, on the basis of two previous values (called x and p ). After the computation, x and p are replaced by x1 and x : the newly computed point becomes one of the two points through which we draw next secant line.  "
},
{
  "id": "section-fzero-algorithm",
  "level": "1",
  "url": "section-fzero-algorithm.html",
  "type": "Section",
  "number": "9.4",
  "title": "How <code class=\"code-inline tex2jax_ignore\">fzero<\/code> works",
  "body": " How fzero works  Matlab command fzero implements Brent's method (1973). It builds on earlier Dekker's method (1969) which is easier to describe:  Start with a bracketing interval.  Try the secant method.  Accept the result of secant method if it looks right , which means: it lies between the midpoint and the endpoint with smaller value of .  Otherwise use bisection instead.  Identify a new bracketing interval. Repeat until it is small enough.    Brent's method replaces secant lines with parabolas: instead of drawing a line through two points on the graph , we draw a parabola through three points on the graph.  But a parabola of the form may intersect the -axis twice, or not at all. This would not work for our purpose. So, Brent's method uses parabolas of the form because they cross the -axis once, at . This is called inverse quadratic interpolation . We will study interpolation in detail in Part IV of the course.  Brent's method can be summarized as:  Start with a bracketing interval.  Try inverse quadratic interpolation  Accept the result of IQI if it looks right (the condition is more complicated than in Dekker's method)  Otherwise use bisection instead.  Identify a new bracketing interval. Repeat until it is small enough.    Several other variations of this approach were proposed over the years, but Brent's method became entrenched in libraries for numerical computation, from Matlab ( fzero ) to R ( uniroot ) to Python (SciPy optimize library) and others.  To see how Brent's method works inside fzero , use an option for displaying each iteration.  options = optimset('Display', 'iter'); fzero(@(x) exp(x)-1, 7, options)  The steps shown by this code include the preliminary process of finding a bracketing interval. These steps can be avoided if such an interval is given to fzero as its second argument [a b] , instead of an initial guess.  fzero(@(x) exp(x)-1, [-5 5], options)  "
},
{
  "id": "section-relaxation-parameter",
  "level": "1",
  "url": "section-relaxation-parameter.html",
  "type": "Section",
  "number": "9.5",
  "title": "The relaxation parameter",
  "body": " The relaxation parameter  When faced with an iterative method which moves either too slowly, undershooting the target ( ) or too quickly, overshooting it ( ), we can try and fix the issue by introducing a relaxation parameter . This is a fixed positive number by which we multiply the step size obtained from Newton's method (or secant method, etc). That is, instead of iterating the function we iterate the function If , this is over-relaxation , meant to make the process move faster. If , this is under-relaxation , meant to slow down the process so it does not overshoot and run off in a wrong direction.  How to determine an appropriate value of ? Consider the case of a multiple root: with . Here so the best value to use , which makes , the solution is found in one step. So, for a double root, when the graph of looks like a parabola near the root, we should use over-relaxation with ; for triple roots, , and so on. Over-relaxation needs to be done very carefully: in these examples, any value of other than the correct one will fail to achieve the desired speed up of convergence.  Similarly, a function shaped like may need under-relaxation, in this case the previous paragraph suggests . In general, under-relaxation is a less delicate issue than over-relaxation: seeing the failure to converge, one can simply try , and if that does not help, maybe . The convergence, if it is achieved, will usually be slow (linear).  "
},
{
  "id": "section-relaxation-parameter-2",
  "level": "2",
  "url": "section-relaxation-parameter.html#section-relaxation-parameter-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relaxation parameter over-relaxation under-relaxation "
},
{
  "id": "examples-newton-secant",
  "level": "1",
  "url": "examples-newton-secant.html",
  "type": "Section",
  "number": "9.6",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Newton's method with a discontinuous function  Recall from that the bisection method had a difficulty with the equation , mistaking a discontinuity of this function for its root. How does Newton's method behave here, and why?   Newton's method has no issues with this function: if the starting point is close to a discontinuity, it will move away from it, toward the nearest zero. It will never overshoot the zero because of the concavity of the function: it is concave away from the x-axis, which means the tangent lines are between the graph and the x-axis.   Newton's method works fine for the tangent function  Generally, vertical asymptotes are not a problem for Newton's method: horizontal asymptotes (and horizontal tangent lines) are.     Rate of convergence of the secant method  It is difficult to analyze the convergence of secant method in general. A representative example where such analysis can be done is . Find a simplified form of the function and try to justify the statement that the rate of convergence is faster than linear, assuming that and converge to 0.   Simplification shows that Since , the denominator is close to 1. Therefore, the method goes from to approximately where is the point preceding . For comparison, linear convergence would mean going from to approximately where is a fixed number. Since the factor itself goes to zero, the secant method has faster than linear rate of convergence.   The behavior of fzero near a singularity  Try using fzero to solve the equation on the interval . Is there any warning that the result may be incorrect? Then try again with the option of displaying each iteration.   If we try fzero(@(x) tan(x), [1 2]) then the result is and no warning is shown. But with the verbose option, options = optimset('Display', 'iter'); fzero(@(x) tan(x), [1 2], options) Matlab will display an additional statement at the end: Current point x may be near a singular point. The interval [1, 2] reduced to the requested tolerance and the function changes sign in the interval, but f(x) increased in magnitude as the interval reduced.   Equation with no solution  What happens if either Newton's method or secant method is applied to the equation (which, of course, has no solutions)?  Another equation with no solution  What happens if Newton's method is applied to the equation (which has no solutions)?  "
},
{
  "id": "example-newton-discontinuous",
  "level": "2",
  "url": "examples-newton-secant.html#example-newton-discontinuous",
  "type": "Example",
  "number": "9.6.1",
  "title": "Newton’s method with a discontinuous function.",
  "body": " Newton's method with a discontinuous function  Recall from that the bisection method had a difficulty with the equation , mistaking a discontinuity of this function for its root. How does Newton's method behave here, and why?   Newton's method has no issues with this function: if the starting point is close to a discontinuity, it will move away from it, toward the nearest zero. It will never overshoot the zero because of the concavity of the function: it is concave away from the x-axis, which means the tangent lines are between the graph and the x-axis.   Newton's method works fine for the tangent function  Generally, vertical asymptotes are not a problem for Newton's method: horizontal asymptotes (and horizontal tangent lines) are.   "
},
{
  "id": "example-secant-speed",
  "level": "2",
  "url": "examples-newton-secant.html#example-secant-speed",
  "type": "Example",
  "number": "9.6.3",
  "title": "Rate of convergence of the secant method.",
  "body": " Rate of convergence of the secant method  It is difficult to analyze the convergence of secant method in general. A representative example where such analysis can be done is . Find a simplified form of the function and try to justify the statement that the rate of convergence is faster than linear, assuming that and converge to 0.   Simplification shows that Since , the denominator is close to 1. Therefore, the method goes from to approximately where is the point preceding . For comparison, linear convergence would mean going from to approximately where is a fixed number. Since the factor itself goes to zero, the secant method has faster than linear rate of convergence. "
},
{
  "id": "example-fzero-singularity",
  "level": "2",
  "url": "examples-newton-secant.html#example-fzero-singularity",
  "type": "Example",
  "number": "9.6.4",
  "title": "The behavior of <code class=\"code-inline tex2jax_ignore\">fzero<\/code> near a singularity.",
  "body": " The behavior of fzero near a singularity  Try using fzero to solve the equation on the interval . Is there any warning that the result may be incorrect? Then try again with the option of displaying each iteration.   If we try fzero(@(x) tan(x), [1 2]) then the result is and no warning is shown. But with the verbose option, options = optimset('Display', 'iter'); fzero(@(x) tan(x), [1 2], options) Matlab will display an additional statement at the end: Current point x may be near a singular point. The interval [1, 2] reduced to the requested tolerance and the function changes sign in the interval, but f(x) increased in magnitude as the interval reduced.  "
},
{
  "id": "examples-newton-secant-6",
  "level": "2",
  "url": "examples-newton-secant.html#examples-newton-secant-6",
  "type": "Question",
  "number": "9.6.5",
  "title": "Equation with no solution.",
  "body": "Equation with no solution  What happens if either Newton's method or secant method is applied to the equation (which, of course, has no solutions)? "
},
{
  "id": "examples-newton-secant-7",
  "level": "2",
  "url": "examples-newton-secant.html#examples-newton-secant-7",
  "type": "Question",
  "number": "9.6.6",
  "title": "Another equation with no solution.",
  "body": "Another equation with no solution  What happens if Newton's method is applied to the equation (which has no solutions)? "
},
{
  "id": "exercises-newton-secant",
  "level": "1",
  "url": "exercises-newton-secant.html",
  "type": "Exercises",
  "number": "9.7",
  "title": "Homework",
  "body": " Homework    (Theoretical problem.) Suppose that Newton's method is used to solve with . Show that the function (extended by ) has a nonzero derivative at . (Hence, is not a super-attracting point for Newton's method in this example.)   Hint: To simplify , you can multiply the numerator and denominator by and recognize that they both can be factored. One possible approach to computing is to take the limit of as using L'Hospital's rule.      (Theoretical problem.) Show that if we use in the previous problem, this function has , which makes a superattracting fixed point.    Write a script that attempts to solve the equation using Newton's method (Note that Matlab's notation for arctangent is atan .) Similarly to and , the script should show the number of steps it took to find a solution, or report that it failed to converge. Allow the algorithm up to 10000 steps before giving up. As the initial point x0 , use the number formed by the first two digits of your SUID. (Note: it is expected that your script will fail to converge.)  Introduce a relaxation parameter in your script to help it converge. What value of achieves convergence? Be careful: should be small, but if it is too small, the algorithm will fail to converge because it takes too long.  Include a comment on what values of you found to be too large for convergence, what value was too small for convergence, and what value achieved convergence.    "
},
{
  "id": "exercises-newton-secant-2",
  "level": "2",
  "url": "exercises-newton-secant.html#exercises-newton-secant-2",
  "type": "Exercise",
  "number": "9.7.1",
  "title": "",
  "body": "  (Theoretical problem.) Suppose that Newton's method is used to solve with . Show that the function (extended by ) has a nonzero derivative at . (Hence, is not a super-attracting point for Newton's method in this example.)   Hint: To simplify , you can multiply the numerator and denominator by and recognize that they both can be factored. One possible approach to computing is to take the limit of as using L'Hospital's rule.   "
},
{
  "id": "exercises-newton-secant-3",
  "level": "2",
  "url": "exercises-newton-secant.html#exercises-newton-secant-3",
  "type": "Exercise",
  "number": "9.7.2",
  "title": "",
  "body": "  (Theoretical problem.) Show that if we use in the previous problem, this function has , which makes a superattracting fixed point. "
},
{
  "id": "exercises-newton-secant-4",
  "level": "2",
  "url": "exercises-newton-secant.html#exercises-newton-secant-4",
  "type": "Exercise",
  "number": "9.7.3",
  "title": "",
  "body": "  Write a script that attempts to solve the equation using Newton's method (Note that Matlab's notation for arctangent is atan .) Similarly to and , the script should show the number of steps it took to find a solution, or report that it failed to converge. Allow the algorithm up to 10000 steps before giving up. As the initial point x0 , use the number formed by the first two digits of your SUID. (Note: it is expected that your script will fail to converge.)  Introduce a relaxation parameter in your script to help it converge. What value of achieves convergence? Be careful: should be small, but if it is too small, the algorithm will fail to converge because it takes too long.  Include a comment on what values of you found to be too large for convergence, what value was too small for convergence, and what value achieved convergence.   "
},
{
  "id": "section-nonlinear-systems",
  "level": "1",
  "url": "section-nonlinear-systems.html",
  "type": "Section",
  "number": "10.1",
  "title": "Systems of nonlinear equations",
  "body": " Systems of nonlinear equations  Consider a non-linear system of more than one equation, such as What method could we use to solve it numerically?  Bisection method does not apply. If we try to imitate it by taking a rectangle in the xy-plane and dividing it into 4 equal subrectangles, it is not clear which rectangle should be kept and why. The issue is that Intermediate Value Theorem, on which this method is based, does not generalize to systems.  Fixed point iteration still makes sense: we can rewrite the system as and start iteration from some point : that is, , and so on. If the process converges, we have a solution of the original system. But since there are more directions in which points can move under iteration, convergence is less likely than it was in one dimension.  Newton's method, which is essentially a systematic approach to fixed-point iteration, still works. This is the method we will use in this section.  It is not clear whether secant method makes sense, but its general idea - modifying Newton's method to avoid the use of derivatives - can be carried out. This will be considered later.   For notational convenience, we express a nonlinear system of equations with unknowns as a vector equation  where is an unknown vector with components. For example, to express in vector form we write   How should we write a vector function in Matlab? It can be an anonymous function.  F = @(x) [x(1)^2*exp(3*x(2)) - 30; x(1)*x(2) - sin(x(1) + x(2)^2)]; x = [3; -2]; disp(F(x))  In this example, the argument of F is a vector and the value it returns is also a vector. Note that F(3, -2) would result in an error too many input arguments because F takes only one argument (which is a vector). It needs to be F([3; -2]) . Writing the input as a row vector, F([3, -2]) would have the same effect but for consistency with the formulas below it is better to use column vectors.  When the notation x(1), x(2) becomes too cumbersome, one can consider writing F as a named function, where the input vector is first unpacked into separate variables such as x, y . This makes the formula more readable. The downside is the restriction on named functions in Matlab, noted in .  function v = F(u) x = u(1); y = u(2); v = [x^2*exp(3*y) - 30; x*y - sin(x + y^2)]; end  "
},
{
  "id": "section-nonlinear-systems-3",
  "level": "2",
  "url": "section-nonlinear-systems.html#section-nonlinear-systems-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector equation "
},
{
  "id": "section-multivariate-newton",
  "level": "1",
  "url": "section-multivariate-newton.html",
  "type": "Section",
  "number": "10.2",
  "title": "Multivariate Newton’s method",
  "body": " Multivariate Newton's method  Newton's method ( ) is based on the idea of replacing a nonlinear function with its linear approximation, and solving the resulting linear equation. The linear approximation comes from the derivative. In the setting of several variables we have partial derivatives which are arranged into the Jacobian matrix . The entry of the Jacobian matrix is the derivative of the th component of with respect to the th component of : (or more rows\/columns if there are more variables).  Find the Jacobian matrix  Find the Jacobian matrix of the function . Express it as an anonymous function in Matlab.  The Jacobian matrix is As a Matlab function, it can be written as follows.  J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)];  The linebreak between matrix rows is optional but improves readability.   The linear approximation to at a point is where is a matrix-vector product.   Find the linear approximation  Find the linear approximation to function using x = [2; -1] and h = [0.3, 0.2] . Compare the approximation to the actual value of F(x+h) .  F = @(x) [x(1)^2*exp(3*x(2)) - 30; x(1)*x(2) - sin(x(1) + x(2)^2)]; J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)]; x = [2; -1]; h = [0.3; 0.2]; fprintf(\"Linear approximation: (%g, %g)\\n\", F(x) + J(x)*h) fprintf(\"Actual value: (%g, %g)\\n\", F(x + h))  The output:  Linear approximation: (-29.6216, -2.14012) Actual value: (-29.5201, -2.04023)  These are close, so the approximation is good. Note the use of formatted strings with vectors: Matlab automatically unpacks vectors when they are used in fprintf . This means one should have a formatting code for every entry of the vector, like (%g, %g) above. The formatting code %g without any specification of precision means the numbers are shown as Matlab would normally shows them.   As with the single-variable Newton method, we equate the linear approximation to zero and solve the linear equation. The solution of is . This formula is only for writing down the theoretical approach, in practice we do not invert the matrix and simply ask Matlab to solve the linear system (this is more efficient than computing the inverse matrix). So, in Matlab terms the formula is h = -J\\F(x) . Having found the vector we replace with and repeat. The process stops when the steps becomes sufficiently small, indicating we approached a solution. The size of vectors is measured by their norm: norm(h) .  The typical behavior of Newton's method is that it jumps around for several steps, but once it gets in a neighborhood of a solution, it converges to it very quickly.   Solve a system using Newton's method  Solve the system using Newton's method. Try different initial points. Does the method always converge? Does it converge to the same solution?  Following the structure of single-variable Newton method with notational adjustments:  F = @(x) [x(1)^2*exp(3*x(2)) - 30; x(1)*x(2) - sin(x(1) + x(2)^2)]; J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)]; x = [2; 1]; max_tries = 10000; for k = 1:max_tries h = -J(x)\\F(x); x = x + h; if norm(h) < 100*eps(norm(x)) break end end if k < max_tries fprintf('Found a solution after %d steps:\\n', k); disp(x) fprintf('The norm of F(x) is %g\\n', norm(F(x))) else disp('Failed to converge') end  It is reasonable to increase the max tries number in Newton's method when several variables are involved, as convergence may take longer. In the above example, with initial point [2; 1] , a solution [-0.0019; 5.3185] is found in 15 steps. With initial point [1; 2] the method fails to converge. With initial point [2; 2] it converges in 10 steps to a different solution, [-0.2734; 1.9982] .   "
},
{
  "id": "section-multivariate-newton-2",
  "level": "2",
  "url": "section-multivariate-newton.html#section-multivariate-newton-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivatives Jacobian matrix "
},
{
  "id": "section-multivariate-newton-3",
  "level": "2",
  "url": "section-multivariate-newton.html#section-multivariate-newton-3",
  "type": "Example",
  "number": "10.2.1",
  "title": "Find the Jacobian matrix.",
  "body": "Find the Jacobian matrix  Find the Jacobian matrix of the function . Express it as an anonymous function in Matlab.  The Jacobian matrix is As a Matlab function, it can be written as follows.  J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)];  The linebreak between matrix rows is optional but improves readability.  "
},
{
  "id": "example-linear-approx-multivariate",
  "level": "2",
  "url": "section-multivariate-newton.html#example-linear-approx-multivariate",
  "type": "Example",
  "number": "10.2.2",
  "title": "Find the linear approximation.",
  "body": " Find the linear approximation  Find the linear approximation to function using x = [2; -1] and h = [0.3, 0.2] . Compare the approximation to the actual value of F(x+h) .  F = @(x) [x(1)^2*exp(3*x(2)) - 30; x(1)*x(2) - sin(x(1) + x(2)^2)]; J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)]; x = [2; -1]; h = [0.3; 0.2]; fprintf(\"Linear approximation: (%g, %g)\\n\", F(x) + J(x)*h) fprintf(\"Actual value: (%g, %g)\\n\", F(x + h))  The output:  Linear approximation: (-29.6216, -2.14012) Actual value: (-29.5201, -2.04023)  These are close, so the approximation is good. Note the use of formatted strings with vectors: Matlab automatically unpacks vectors when they are used in fprintf . This means one should have a formatting code for every entry of the vector, like (%g, %g) above. The formatting code %g without any specification of precision means the numbers are shown as Matlab would normally shows them.  "
},
{
  "id": "example-multivariate-newton-solve",
  "level": "2",
  "url": "section-multivariate-newton.html#example-multivariate-newton-solve",
  "type": "Example",
  "number": "10.2.3",
  "title": "Solve a system using Newton’s method.",
  "body": " Solve a system using Newton's method  Solve the system using Newton's method. Try different initial points. Does the method always converge? Does it converge to the same solution?  Following the structure of single-variable Newton method with notational adjustments:  F = @(x) [x(1)^2*exp(3*x(2)) - 30; x(1)*x(2) - sin(x(1) + x(2)^2)]; J = @(x) [2*x(1)*exp(3*x(2)), 3*x(1)^2*exp(3*x(2)); x(2) - cos(x(1) + x(2)^2), x(1) - 2*x(2)*cos(x(1) + x(2)^2)]; x = [2; 1]; max_tries = 10000; for k = 1:max_tries h = -J(x)\\F(x); x = x + h; if norm(h) < 100*eps(norm(x)) break end end if k < max_tries fprintf('Found a solution after %d steps:\\n', k); disp(x) fprintf('The norm of F(x) is %g\\n', norm(F(x))) else disp('Failed to converge') end  It is reasonable to increase the max tries number in Newton's method when several variables are involved, as convergence may take longer. In the above example, with initial point [2; 1] , a solution [-0.0019; 5.3185] is found in 15 steps. With initial point [1; 2] the method fails to converge. With initial point [2; 2] it converges in 10 steps to a different solution, [-0.2734; 1.9982] .  "
},
{
  "id": "section-multivariate-newton-method-issues",
  "level": "1",
  "url": "section-multivariate-newton-method-issues.html",
  "type": "Section",
  "number": "10.3",
  "title": "Potential issues",
  "body": " Potential issues  All of the issues of single-variable method in are present here as well. In particular, the problem with derivative being zero (or close to it) now becomes the problem with the Jacobian matrix being singular (not invertible) or close to being such. This is when Matlab displays the warning Matrix is close to singular or badly scaled. Results may be inaccurate. Note that despite this warning, the final outcome may be an accurate solution. Indeed, the issue with solving the linear system for may result in a wrong value of at some step. But this only means that at that particular step, the algorithm jumps where it should not have. It may still converge to a solution afterwards if at the new value of the Jacobian matrix behaves better. The script in displays the norm of at the end as a reassurance that the method indeed found a solution, despite the possible problems at intermediate steps.  A new issue is the scaling of variables. When the components of unknown vector have very different orders of magnitude, it is hard to understand what changes are significant or not. Suppose we are solving a system involving the distance and speed of New Horizons probe which is traveling at the speed of about 14 km\/s and has distance about km from the Sun (as of 2020). So the vector we work with will look like [14; 6.43e9] . The difference between this vector and, for example, [20; 6.43e9] looks relatively small: the difference has norm about times the norm of the original vector, one billionth. But of course the difference between 14 and 20 is quite significant. To avoid this, one should try to use units in which the quantities involved have about the same order of magnitude. For New Horizons, one could measure distance in astronomical units (AU) which makes it about 43. So the vector becomes [14; 43] which is much better numerically.  "
},
{
  "id": "section-multivariate-newton-method-issues-3",
  "level": "2",
  "url": "section-multivariate-newton-method-issues.html#section-multivariate-newton-method-issues-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scaling "
},
{
  "id": "examples-multivariate-newton",
  "level": "1",
  "url": "examples-multivariate-newton.html",
  "type": "Section",
  "number": "10.4",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Rewriting a polynomial equation in multivariate form  Consider a polynomial equation, for example . This is a scalar equation with one scalar variable, so it could be solved by the methods of previous chapters, including Newton's method in one variable. But then we would get only one root (depending on initial position), not all three. Rewrite this equation as a system of three equations for three roots , using the fact that the polynomial factors as .   Expanding the product, we find where , , and . Equating the coefficients, we get the system If we can solve this system, the solution will consist of all three roots of the original equation.     Find all roots of a polynomial simultaneously  Use the multivariate Newton method to solve the system from .   We have the vector function and its Jacobian matrix is Use the code from with these functions:  F = @(x) [x(1) + x(2) + x(3) + 2; x(1)*x(2) + x(1)*x(3) + x(2)*x(3) + 7; x(1)*x(2)*x(3) + 1]; J = @(x) [1, 1, 1; x(2) + x(3), x(1) + x(3), x(1) + x(2); x(2)*x(3), x(1)*x(3), x(1)*x(2)];  The initial point should be a point with distinct coordinates, because at points with equal coordinates like [0; 0; 0] or [1; 1; 1] the Jacobian matrix is singular (it has equal columns). For example, [1; 2; 3] works just fine.  Found a solution after 9 steps: 1.7240 0.1497 -3.8737  Although an algebraic formula for the roots of a cubic (degree 3) equation exists, the symbolic form of the roots is often too complicated to be of any use. See what Wolfram Alpha shows as a solution of this equation.  The above process, in a polished and simplified form, is known as the Durand-Kerner method for finding all polynomial roots at once.  Another cubic equation  If we apply the logic of to the equation (so, just replace 1 by 5 in the formula for F ), the method fails to converge. Why?  A trigonometric system  What goes wrong if we try to use Newton's method to solve the system for some given values of ?  Number of variables different from the number of equations  What prevents us from using Newton's method for systems where the number of equations is not equal to the number of unknowns? For example, the equation has a unique solution: can we find it with Newton's method?  "
},
{
  "id": "example-durand-kerner-setup",
  "level": "2",
  "url": "examples-multivariate-newton.html#example-durand-kerner-setup",
  "type": "Example",
  "number": "10.4.1",
  "title": "Rewriting a polynomial equation in multivariate form.",
  "body": " Rewriting a polynomial equation in multivariate form  Consider a polynomial equation, for example . This is a scalar equation with one scalar variable, so it could be solved by the methods of previous chapters, including Newton's method in one variable. But then we would get only one root (depending on initial position), not all three. Rewrite this equation as a system of three equations for three roots , using the fact that the polynomial factors as .   Expanding the product, we find where , , and . Equating the coefficients, we get the system If we can solve this system, the solution will consist of all three roots of the original equation.   "
},
{
  "id": "example-durand-kerner-solve",
  "level": "2",
  "url": "examples-multivariate-newton.html#example-durand-kerner-solve",
  "type": "Example",
  "number": "10.4.2",
  "title": "Find all roots of a polynomial simultaneously.",
  "body": " Find all roots of a polynomial simultaneously  Use the multivariate Newton method to solve the system from .   We have the vector function and its Jacobian matrix is Use the code from with these functions:  F = @(x) [x(1) + x(2) + x(3) + 2; x(1)*x(2) + x(1)*x(3) + x(2)*x(3) + 7; x(1)*x(2)*x(3) + 1]; J = @(x) [1, 1, 1; x(2) + x(3), x(1) + x(3), x(1) + x(2); x(2)*x(3), x(1)*x(3), x(1)*x(2)];  The initial point should be a point with distinct coordinates, because at points with equal coordinates like [0; 0; 0] or [1; 1; 1] the Jacobian matrix is singular (it has equal columns). For example, [1; 2; 3] works just fine.  Found a solution after 9 steps: 1.7240 0.1497 -3.8737  Although an algebraic formula for the roots of a cubic (degree 3) equation exists, the symbolic form of the roots is often too complicated to be of any use. See what Wolfram Alpha shows as a solution of this equation.  The above process, in a polished and simplified form, is known as the Durand-Kerner method for finding all polynomial roots at once. "
},
{
  "id": "examples-multivariate-newton-5",
  "level": "2",
  "url": "examples-multivariate-newton.html#examples-multivariate-newton-5",
  "type": "Question",
  "number": "10.4.3",
  "title": "Another cubic equation.",
  "body": "Another cubic equation  If we apply the logic of to the equation (so, just replace 1 by 5 in the formula for F ), the method fails to converge. Why? "
},
{
  "id": "examples-multivariate-newton-6",
  "level": "2",
  "url": "examples-multivariate-newton.html#examples-multivariate-newton-6",
  "type": "Question",
  "number": "10.4.4",
  "title": "A trigonometric system.",
  "body": "A trigonometric system  What goes wrong if we try to use Newton's method to solve the system for some given values of ? "
},
{
  "id": "examples-multivariate-newton-7",
  "level": "2",
  "url": "examples-multivariate-newton.html#examples-multivariate-newton-7",
  "type": "Question",
  "number": "10.4.5",
  "title": "Number of variables different from the number of equations.",
  "body": "Number of variables different from the number of equations  What prevents us from using Newton's method for systems where the number of equations is not equal to the number of unknowns? For example, the equation has a unique solution: can we find it with Newton's method? "
},
{
  "id": "exercises-multivariate-newton",
  "level": "1",
  "url": "exercises-multivariate-newton.html",
  "type": "Exercises",
  "number": "10.5",
  "title": "Homework",
  "body": " Homework    (Theoretical problem.) Let Find the Jacobian matrix of . (The matrix entries will involve the variables ).     At which of the following points is the Jacobian matrix from the previous exercise invertible? To save time, use Matlab: define an anonymous function like J = @(x,y,z) [... ; ... ; ...] so that you can then do rank(J(1,1,1)) and so on, without computing the matrices yourself. Note the difference between this approach to J and the approach of : here the function J takes three scalar arguments, instead of one vector argument.    Let , , and where is the first digit of your SUID. Write a Matlab script which uses Newton's method to find the dimensions of a rectangular box with volume , surface area , and space diagonal . The computations in Problem 1 will be helpful, because a box with dimensions has volume , surface area , and space diagonal .  Reminder: the vector function that you define should be such that expresses the system of equations that you wish to solve. Since should be differentiable, try to set it up so that there is no square root in .    "
},
{
  "id": "exercises-multivariate-newton-2",
  "level": "2",
  "url": "exercises-multivariate-newton.html#exercises-multivariate-newton-2",
  "type": "Exercise",
  "number": "10.5.1",
  "title": "",
  "body": "  (Theoretical problem.) Let Find the Jacobian matrix of . (The matrix entries will involve the variables ).  "
},
{
  "id": "exercises-multivariate-newton-3",
  "level": "2",
  "url": "exercises-multivariate-newton.html#exercises-multivariate-newton-3",
  "type": "Exercise",
  "number": "10.5.2",
  "title": "",
  "body": "  At which of the following points is the Jacobian matrix from the previous exercise invertible? To save time, use Matlab: define an anonymous function like J = @(x,y,z) [... ; ... ; ...] so that you can then do rank(J(1,1,1)) and so on, without computing the matrices yourself. Note the difference between this approach to J and the approach of : here the function J takes three scalar arguments, instead of one vector argument. "
},
{
  "id": "exercises-multivariate-newton-4",
  "level": "2",
  "url": "exercises-multivariate-newton.html#exercises-multivariate-newton-4",
  "type": "Exercise",
  "number": "10.5.3",
  "title": "",
  "body": "  Let , , and where is the first digit of your SUID. Write a Matlab script which uses Newton's method to find the dimensions of a rectangular box with volume , surface area , and space diagonal . The computations in Problem 1 will be helpful, because a box with dimensions has volume , surface area , and space diagonal .  Reminder: the vector function that you define should be such that expresses the system of equations that you wish to solve. Since should be differentiable, try to set it up so that there is no square root in .   "
},
{
  "id": "section-broyden-intro",
  "level": "1",
  "url": "section-broyden-intro.html",
  "type": "Section",
  "number": "11.1",
  "title": "Idea of Broyden’s method",
  "body": " Idea of Broyden's method  The basic idea is: since we do not know the derivative, we are going to guess its value and then improve our guess at every step of the algorithm.  Let us return to one-variable situation first. Newton's method proceeds in steps computed as which requires the knowledge of . Suppose we do not know the derivative but are willing to guess. For notational convenience, let us say we are guessing the value of . We want some non-zero number. Knowing nothing whatsoever, we can guess \"1\". Let us call this guess . Armed with this number, we proceed as usual in Newton's method: make the step arriving at the point .  Our next guess, for the value of can be better educated: we can think of the secant line through the two points and , and decide it would be logical for to be the reciprocal of the slope of this secant line. This means we pick so that Then the process continues: we make the step , arrive at and use the secant slope through the two newest points, Apart from the initial uneducated guess for this is exactly the secant method, expressed in different notation.  In higher dimensions, we need a guess for the inverse of the Jacobian matrix, which is used in Newton's method . At first we take an uneducated guess for the value of , namely , the identity matrix. This enables us to make a step . Now comes the important part we want our next guess to be better informed than the previous one. Looking back at , it seems we should choose a matrix so that How to do that? We cannot divide a vector by another , the formula makes no sense (this is the difference between one variable and several variables.) We need to use linear algebra.  "
},
{
  "id": "section-broyden-linear-algebra",
  "level": "1",
  "url": "section-broyden-linear-algebra.html",
  "type": "Section",
  "number": "11.2",
  "title": "Outer products",
  "body": " Outer products  If a and b are column vectors with entries, then a'*b in Matlab is their scalar product (also called the inner product or the dot product): where multiplication is carried out by the rules of matrix products: 1 n matrix times n 1 matrix gives a 1 1 matrix, a single number. The rules of matrix multiplication also allow us to compute a*b' : This matrix is the outer product of vectors and . Since all of its rows are proportional to one another, its rank is at most 1. The rank is 0 if one of two vectors is the zero vector; otherwise it is equal to 1.   Random outer product  Let be the outer product of two random vectors with 5 entries, generated with rand . Display the rank and determinant of .  a = rand(5, 1); b = rand(5, 1); M = a*b'; disp(rank(M)) disp(det(M))  The result should be: rank is 1, and the determinant is some extremely small (but nonzero) number, for example 3.2391e-69 . Mathematically this is impossible: a 5 5 matrix of rank less than 5 must have determinant equal to 0. But the reality of computer arithmetic is that floating point numbers rarely add up exactly to zero, as noted in . Matlab's rank command takes this into account and reports the rank as 1 when the matrix is close enough to actually having rank 1.   In mathematical notation, the outer product would be written as , with T indicating the transposed vector (column turned into row). Since is a matrix, we can apply it to some vector . The associative property of matrix multiplication shows that that is, we get the vector multiplied by the dot product . Formula gives us an easy way to find a matrix which satisfies the equation for given vectors . Namely, we can let which is an outer product of two vectors with a scalar factor in front. The associative property shows that Note that the choice of is up to us: any vector will work as as long as .  Once more, to make this point clear: one cannot solve  for by dividing vector by . But the process outlined above produces some matrix that satisfies this equation.  "
},
{
  "id": "section-broyden-linear-algebra-2",
  "level": "2",
  "url": "section-broyden-linear-algebra.html#section-broyden-linear-algebra-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outer product "
},
{
  "id": "example-random-outer-product",
  "level": "2",
  "url": "section-broyden-linear-algebra.html#example-random-outer-product",
  "type": "Example",
  "number": "11.2.1",
  "title": "Random outer product.",
  "body": " Random outer product  Let be the outer product of two random vectors with 5 entries, generated with rand . Display the rank and determinant of .  a = rand(5, 1); b = rand(5, 1); M = a*b'; disp(rank(M)) disp(det(M))  The result should be: rank is 1, and the determinant is some extremely small (but nonzero) number, for example 3.2391e-69 . Mathematically this is impossible: a 5 5 matrix of rank less than 5 must have determinant equal to 0. But the reality of computer arithmetic is that floating point numbers rarely add up exactly to zero, as noted in . Matlab's rank command takes this into account and reports the rank as 1 when the matrix is close enough to actually having rank 1.  "
},
{
  "id": "section-broyden-method",
  "level": "1",
  "url": "section-broyden-method.html",
  "type": "Section",
  "number": "11.3",
  "title": "Details of Broyden’s method",
  "body": " Details of Broyden's method  Recall from that we seek to improve our guess for the inverse of Jacobian by finding a matrix such that To simplify notation, let and ; both these vectors are known. We need  Why would not an outer product work here?  We already know how to find a matrix that satisfies , by taking an outer product multiplied by a scalar . But this would be a bad, illogical choice for . Why?   We want to have some similarity to in the hope that the process of improving guesses will converge to something, rather than just jump around. We want to improve the previous guess, not replace it entirely. So, let where can be constructed from an outer product as in . Namely, we want so According to we can achieve this by letting where the chose the term to be . To summarize, the formula for updating our guess for inverse Jacobian is It looks messy, but at least the derivation was logical.  The matrix is still a guess, it may be very different from the actual inverse of Jacobian matrix. But it is a more educated guess, and as this process repeats, these repeated corrections will produce more accurate guesses.  "
},
{
  "id": "section-broyden-method-3",
  "level": "2",
  "url": "section-broyden-method.html#section-broyden-method-3",
  "type": "Question",
  "number": "11.3.1",
  "title": "Why would not an outer product work here?",
  "body": "Why would not an outer product work here?  We already know how to find a matrix that satisfies , by taking an outer product multiplied by a scalar . But this would be a bad, illogical choice for . Why?  "
},
{
  "id": "examples-broyden",
  "level": "1",
  "url": "examples-broyden.html",
  "type": "Section",
  "number": "11.4",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Use Broyden's method to find all roots of a cubic polynomial  Redo using Broyden's method instead of Newton's method.   We have the same vector function to be equated to zero but no longer use its Jacobian matrix. The code is modified by computing the steps as h = -B*F(x) and updating the matrix B according to Broyden's method.  F = @(x) [x(1) + x(2) + x(3) + 2; x(1)*x(2) + x(1)*x(3) + x(2)*x(3) + 7; x(1)*x(2)*x(3) + 1]; x = [1; 2; 3]; B = eye(3); max_tries = 10000; for k = 1:max_tries h = -B*F(x); w = F(x+h) - F(x); B = B + (h - B*w)*h'*B \/ (h'*B*w); x = x + h; if norm(h) < 100*eps(norm(x)) break end end if k < max_tries fprintf('Found a solution after %d steps:\\n', k); disp(x) fprintf('The norm of F(x) is %g\\n', norm(F(x))) else disp('Failed to converge') end  Starting from the same point [1; 2; 3] as we used for Newton's method, we get:  Found a solution after 1359 steps: 1.7240 -3.8737 0.1497  By contrast, Newton's method converged in 9 steps. There is a price to pay for the lack of Jacobian matrix.   The role of the initial point  The initial point [1; 2; 3] seems unfortunately chosen in , because if we start with [1; 1; 1] instead, the method converges much faster: in 37 steps. Recall that for Newton's method this initial point did not work at all: the Jacobian was not invertible. Why is it possible to use it for Broyden't method?  The initial point [1; -2; 3] leads to even faster convergence.   The role of the initial matrix  If we keep the initial point [1; 2; 3] in but change the initial guess for inverse Jacobian to the matrix B = 0.1*eye(3); the algorithm converges much faster: in 53 steps. Why could this be? In what way does the smaller matrix help?  "
},
{
  "id": "example-durand-kerner-broyden",
  "level": "2",
  "url": "examples-broyden.html#example-durand-kerner-broyden",
  "type": "Example",
  "number": "11.4.1",
  "title": "Use Broyden’s method to find all roots of a cubic polynomial.",
  "body": " Use Broyden's method to find all roots of a cubic polynomial  Redo using Broyden's method instead of Newton's method.   We have the same vector function to be equated to zero but no longer use its Jacobian matrix. The code is modified by computing the steps as h = -B*F(x) and updating the matrix B according to Broyden's method.  F = @(x) [x(1) + x(2) + x(3) + 2; x(1)*x(2) + x(1)*x(3) + x(2)*x(3) + 7; x(1)*x(2)*x(3) + 1]; x = [1; 2; 3]; B = eye(3); max_tries = 10000; for k = 1:max_tries h = -B*F(x); w = F(x+h) - F(x); B = B + (h - B*w)*h'*B \/ (h'*B*w); x = x + h; if norm(h) < 100*eps(norm(x)) break end end if k < max_tries fprintf('Found a solution after %d steps:\\n', k); disp(x) fprintf('The norm of F(x) is %g\\n', norm(F(x))) else disp('Failed to converge') end  Starting from the same point [1; 2; 3] as we used for Newton's method, we get:  Found a solution after 1359 steps: 1.7240 -3.8737 0.1497  By contrast, Newton's method converged in 9 steps. There is a price to pay for the lack of Jacobian matrix.  "
},
{
  "id": "examples-broyden-4",
  "level": "2",
  "url": "examples-broyden.html#examples-broyden-4",
  "type": "Question",
  "number": "11.4.2",
  "title": "The role of the initial point.",
  "body": "The role of the initial point  The initial point [1; 2; 3] seems unfortunately chosen in , because if we start with [1; 1; 1] instead, the method converges much faster: in 37 steps. Recall that for Newton's method this initial point did not work at all: the Jacobian was not invertible. Why is it possible to use it for Broyden't method?  The initial point [1; -2; 3] leads to even faster convergence.  "
},
{
  "id": "examples-broyden-5",
  "level": "2",
  "url": "examples-broyden.html#examples-broyden-5",
  "type": "Question",
  "number": "11.4.3",
  "title": "The role of the initial matrix.",
  "body": "The role of the initial matrix  If we keep the initial point [1; 2; 3] in but change the initial guess for inverse Jacobian to the matrix B = 0.1*eye(3); the algorithm converges much faster: in 53 steps. Why could this be? In what way does the smaller matrix help? "
},
{
  "id": "exercises-broyden",
  "level": "1",
  "url": "exercises-broyden.html",
  "type": "Exercises",
  "number": "11.5",
  "title": "Homework",
  "body": " Homework    (Theoretical problem.) Find a matrix of rank 1 such that      Use Broyden's method to solve the nonlinear system where is the number formed by the first two digits of your SUID.  Try at least two different starting points (or more, if needed to find a solution). Report the outcome of running the method for each starting point. Was the root you found always the same?   "
},
{
  "id": "exercises-broyden-2",
  "level": "2",
  "url": "exercises-broyden.html#exercises-broyden-2",
  "type": "Exercise",
  "number": "11.5.1",
  "title": "",
  "body": "  (Theoretical problem.) Find a matrix of rank 1 such that   "
},
{
  "id": "exercises-broyden-3",
  "level": "2",
  "url": "exercises-broyden.html#exercises-broyden-3",
  "type": "Exercise",
  "number": "11.5.2",
  "title": "",
  "body": "  Use Broyden's method to solve the nonlinear system where is the number formed by the first two digits of your SUID.  Try at least two different starting points (or more, if needed to find a solution). Report the outcome of running the method for each starting point. Was the root you found always the same?  "
},
{
  "id": "section-differentiation-intro",
  "level": "1",
  "url": "section-differentiation-intro.html",
  "type": "Section",
  "number": "12.1",
  "title": "Definition of derivative and the order of error",
  "body": " Definition of derivative and the order of error  The definition of derivative says: This suggests a way to approximate : take two consecutive values of , subtract, divide by difference of x-values: Here the value of is some concrete number, so the two sides are only approximately equal. One can express this more precisely as where the error term is a function of . The accuracy of approximation is measured by the order of the error term, which is a number such that is bounded by some multiple of .  There is a method to determine the order of error of an approximation to some derivative of :  Let  Plug into the formula and find the error term.  If the error term is some nonzero multiple of a power of , the exponent of is the order of the error term.  If the error term is zero, increase by and return to step 2.     Find the order of error of approximation to   Find the order of error of the formula .    With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term for this function is .  In conclusion, the formula has order of error 1.  The importance of the order of error can be illustrated by an example. Suppose we want to find with absolute error at most .  If the error term of our formula is , we need to use extremely small ; that is .  If the error term is , we need which is still small but not as extreme.  If the error term is , we need .  If the error term is , we need .  Thus, a higher-order formula should allow us to obtain an accurate result while avoidung extremely small values of . But why do we want to avoid extremely small ? This is explained in next section.  "
},
{
  "id": "section-differentiation-intro-2",
  "level": "2",
  "url": "section-differentiation-intro.html#section-differentiation-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "example-error-diff-f1",
  "level": "2",
  "url": "section-differentiation-intro.html#example-error-diff-f1",
  "type": "Example",
  "number": "12.1.1",
  "title": "Find the order of error of approximation to <span class=\"process-math\">\\(f'\\)<\/span>.",
  "body": " Find the order of error of approximation to   Find the order of error of the formula .    With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term for this function is .  In conclusion, the formula has order of error 1. "
},
{
  "id": "section-loss-significance",
  "level": "1",
  "url": "section-loss-significance.html",
  "type": "Section",
  "number": "12.2",
  "title": "Loss of significance",
  "body": " Loss of significance  Loss of significance may occur when we subtract two numbers that are very close to each other. This can occur in any context, not just numeric differentiation. But since differentiation involves expressions like with small , it is particularly vulnerable to the loss of significance.  A simplified illustration of the loss of significance: suppose we can only have three decimal digits, any others have to be rounded. This can still be useful for approximate computations like or (note the rounding here). These approximate results are relatively close to what we would get with exact arithmetic. But when subtraction of nearly equal quantities are involved, the results can be less satisfactory: while the exact arithmetic gives . The error is nearly .  An actual illustration is the following attempt to compute the derivative of at the point . Note that and . Both looks like reasonable numbers. Let us try to use the approximation with the values , in Matlab console:  >> x = 1e6; >> h = 1e-9; (sqrt(x+h) - sqrt(x))\/h ans = 5.6843e-04 >> h = 1e-10; (sqrt(x+h) - sqrt(x))\/h ans = 0.0011 >> h = 1e-11; (sqrt(x+h) - sqrt(x))\/h ans = 0  The first result is off by about , the second is more than twice the real answer, the third is even worse. All this is due to the loss of significant digits similar to what we see in .  Sometimes one can avoid the loss of significance by rearranging the expression algebraically. For example, Algebraically these expressions are identical, but in Matlab, 1\/(sqrt(x+h) + sqrt(x)) produces accurate answer 5.0000e-04 for any of the above values of .   Two forms of the quadratic formula   An important case of such rearrangement in the quadratic formula: its familiar form leads to loss of significance when is much larger than . The following code erroneously returns 0 as a root of the quadratic equation .  >> a=1; b=1e9; c=1; >> (-b+sqrt(b^2-4*a*c))\/(2*a) ans = 0  The alternative form of is where the signs indicate that the root we would get with in is obtained with in . To compute both roots without loss of significance, one uses both formulas and with the sign opposite to the sign of .  >> (2*c)\/(-b-sqrt(b^2-4*a*c)) ans = -1.0000e-09 >> r = roots([1 1e9 1]); r(2) ans = -1.0000e-09  As this sample shows, Matlab takes the numerically safe approach in its roots function for finding roots of polynomials.    Matlab also has some built-in logic for avoiding loss of significance in two frequently encountered situations: and when . These are the functions expm1 and log1p . To see the difference, compare the results of (exp(x)-1)\/x and expm1(x)\/x when x=1e-20 .  Another situation where loss of significance may occur is the evaluation of a polynomial of high degree: .  "
},
{
  "id": "section-loss-significance-2",
  "level": "2",
  "url": "section-loss-significance.html#section-loss-significance-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Loss of significance "
},
{
  "id": "example-quadratic-formula-variants",
  "level": "2",
  "url": "section-loss-significance.html#example-quadratic-formula-variants",
  "type": "Example",
  "number": "12.2.1",
  "title": "Two forms of the quadratic formula.",
  "body": " Two forms of the quadratic formula   An important case of such rearrangement in the quadratic formula: its familiar form leads to loss of significance when is much larger than . The following code erroneously returns 0 as a root of the quadratic equation .  >> a=1; b=1e9; c=1; >> (-b+sqrt(b^2-4*a*c))\/(2*a) ans = 0  The alternative form of is where the signs indicate that the root we would get with in is obtained with in . To compute both roots without loss of significance, one uses both formulas and with the sign opposite to the sign of .  >> (2*c)\/(-b-sqrt(b^2-4*a*c)) ans = -1.0000e-09 >> r = roots([1 1e9 1]); r(2) ans = -1.0000e-09  As this sample shows, Matlab takes the numerically safe approach in its roots function for finding roots of polynomials.   "
},
{
  "id": "section-symmetric-difference",
  "level": "1",
  "url": "section-symmetric-difference.html",
  "type": "Section",
  "number": "12.3",
  "title": "Symmetric difference formulas",
  "body": " Symmetric difference formulas  Although the formula looks natural, it is not the best way to find the approximate value of . The following symmetric difference formula works better: The following computation explains why.   Order of error of symmetric difference approximation to   Find the order of error of the formula .    With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term for this function is .  In conclusion, the formula has order of error equal to 2.  Here is a quick computation in Matlab console which compares the performance of both formulas on the function at with . The error of symmetric difference formula is about 30 times smaller in this example, despite the same value of and the same amount of computations involved.  >> x = 0; h = 0.1; >> (exp(x+h)-exp(x))\/h ans = 1.0517 >> (exp(x+h)-exp(x-h))\/(2*h) ans = 1.0017  The second order derivative also has a convenient symmetric formula: One can derive many other formulas for derivative of any order , starting with Taylor series for : One can use with values like , , , or maybe , and so on; and then take a linear combination of these expressions so that the derivatives of orders less than cancel out, while the derivative of order remains. The order of error of this formula will depends on what derivative of order greater than remain in the linear combination. To have order of error , one needs to make sure that the derivatives of orders between and also cancel out.  "
},
{
  "id": "section-symmetric-difference-2",
  "level": "2",
  "url": "section-symmetric-difference.html#section-symmetric-difference-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric difference "
},
{
  "id": "example-error-diff-f1-symm",
  "level": "2",
  "url": "section-symmetric-difference.html#example-error-diff-f1-symm",
  "type": "Example",
  "number": "12.3.1",
  "title": "Order of error of symmetric difference approximation to <span class=\"process-math\">\\(f'\\)<\/span>.",
  "body": " Order of error of symmetric difference approximation to   Find the order of error of the formula .    With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term is zero for this function.  With we get and , so the error term for this function is .  In conclusion, the formula has order of error equal to 2. "
},
{
  "id": "section-richardson-extrapolation",
  "level": "1",
  "url": "section-richardson-extrapolation.html",
  "type": "Section",
  "number": "12.4",
  "title": "Richardson extrapolation",
  "body": " Richardson extrapolation  Richardson extrapolation is a method that allows one to reduce the error of an approximate formula, provided that the order of this error is known. The idea is to use two different step sizes, for example and . If the order of error is , then the second approximation will have an error that is about times greater. How can we use this information?  Let be the quantity we want to find. Using step size we get an approximation with error term , meaning that Using step size we get an approximation with error term , meaning that Since we know that is close to , we can try to cancel out the error terms: multiply by and subtract . The result is Since the error terms should almost cancel each other, the new approximation should be much more accurate than the original approximation . The formula expresses the method of Richardson extrapolation. This idea is not specific to numerical differentiation; it can be used any time a computed quantity has an error proportional to a known power of step size.   Apply Richardson extrapolation to the symmetric formula for  Use Richardson extrapolation to improve the accuracy of the symmetric difference formula .  Recall from that the symmetric difference formula has error of order 2. Therefore, in the equation we have . The approximation is the original formula To get we replace by : The formula now tells us that which is the extrapolated approximation to .  "
},
{
  "id": "section-richardson-extrapolation-2",
  "level": "2",
  "url": "section-richardson-extrapolation.html#section-richardson-extrapolation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Richardson extrapolation "
},
{
  "id": "example-apply-richardson",
  "level": "2",
  "url": "section-richardson-extrapolation.html#example-apply-richardson",
  "type": "Example",
  "number": "12.4.1",
  "title": "Apply Richardson extrapolation to the symmetric formula for <span class=\"process-math\">\\(f'\\)<\/span>.",
  "body": " Apply Richardson extrapolation to the symmetric formula for  Use Richardson extrapolation to improve the accuracy of the symmetric difference formula .  Recall from that the symmetric difference formula has error of order 2. Therefore, in the equation we have . The approximation is the original formula To get we replace by : The formula now tells us that which is the extrapolated approximation to . "
},
{
  "id": "examples-numerical-differentiation",
  "level": "1",
  "url": "examples-numerical-differentiation.html",
  "type": "Section",
  "number": "12.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Rewrite a formula to avoid the loss of significance  The formula is prone to loss of significance when is close to . Rewrite it in a mathematically equivalent way which avoids this issue. Compare the performance of both formulas in Matlab with .   The issue is that is close to and we subtract it from . The identity can be used to avoid this issue. According to it, There is no loss of significance in the formula on the right. Compare in Matlab:  f = @(x) (1-cos(x))\/x^2; g = @(x) sin(x)^2\/(x^2*(1+cos(x))); disp(f(1e-9)) disp(g(1e-9))  The first formula produces , the second produces . The second value is correct. Indeed,    Compare the accuracy of three approximations to  Consider the function on the interval . Compare the accuracy of the three approximations to its derivative ( , , ) by plotting the error for each of them on the logarithmic scale (with semilogy ). Use .   f = @(x) sin(x); fp = @(x) cos(x); x = linspace(0, 5, 500); h = 0.1; orig = (f(x+h) - f(x))\/h; symm = (f(x+h) - f(x-h))\/(2*h); extr = 2*(f(x+h) - f(x-h))\/(3*h) - (f(x+2*h) - f(x-2*h))\/(12*h); exact = fp(x); semilogy(x, abs(orig-exact), x, abs(symm-exact), x, abs(extr-exact)) legend('original', 'symmetric', 'extrapolated')  The result indicates that the error is about for the original formula (from the definition of derivative), about for the symmetric formula, and about for the extrapolated formula.   What makes the error smaller in some places?  As we see in , the size of error suddently becomes much smaller in certain parts of the interval. What is special about those places that makes the approximation more accurate?  Recall the connection with Taylor series: the error term involves derivatives of higher order.   "
},
{
  "id": "example-avoid-loss-of-significance",
  "level": "2",
  "url": "examples-numerical-differentiation.html#example-avoid-loss-of-significance",
  "type": "Example",
  "number": "12.5.1",
  "title": "Rewrite a formula to avoid the loss of significance.",
  "body": " Rewrite a formula to avoid the loss of significance  The formula is prone to loss of significance when is close to . Rewrite it in a mathematically equivalent way which avoids this issue. Compare the performance of both formulas in Matlab with .   The issue is that is close to and we subtract it from . The identity can be used to avoid this issue. According to it, There is no loss of significance in the formula on the right. Compare in Matlab:  f = @(x) (1-cos(x))\/x^2; g = @(x) sin(x)^2\/(x^2*(1+cos(x))); disp(f(1e-9)) disp(g(1e-9))  The first formula produces , the second produces . The second value is correct. Indeed,  "
},
{
  "id": "example-plot-log-difference",
  "level": "2",
  "url": "examples-numerical-differentiation.html#example-plot-log-difference",
  "type": "Example",
  "number": "12.5.2",
  "title": "Compare the accuracy of three approximations to <span class=\"process-math\">\\(f'\\)<\/span>.",
  "body": " Compare the accuracy of three approximations to  Consider the function on the interval . Compare the accuracy of the three approximations to its derivative ( , , ) by plotting the error for each of them on the logarithmic scale (with semilogy ). Use .   f = @(x) sin(x); fp = @(x) cos(x); x = linspace(0, 5, 500); h = 0.1; orig = (f(x+h) - f(x))\/h; symm = (f(x+h) - f(x-h))\/(2*h); extr = 2*(f(x+h) - f(x-h))\/(3*h) - (f(x+2*h) - f(x-2*h))\/(12*h); exact = fp(x); semilogy(x, abs(orig-exact), x, abs(symm-exact), x, abs(extr-exact)) legend('original', 'symmetric', 'extrapolated')  The result indicates that the error is about for the original formula (from the definition of derivative), about for the symmetric formula, and about for the extrapolated formula.  "
},
{
  "id": "examples-numerical-differentiation-5",
  "level": "2",
  "url": "examples-numerical-differentiation.html#examples-numerical-differentiation-5",
  "type": "Question",
  "number": "12.5.3",
  "title": "What makes the error smaller in some places?",
  "body": "What makes the error smaller in some places?  As we see in , the size of error suddently becomes much smaller in certain parts of the interval. What is special about those places that makes the approximation more accurate?  Recall the connection with Taylor series: the error term involves derivatives of higher order.  "
},
{
  "id": "exercises-numerical-differentiation",
  "level": "1",
  "url": "exercises-numerical-differentiation.html",
  "type": "Exercises",
  "number": "12.6",
  "title": "Homework",
  "body": " Homework    Find the order of error of the formula (theoretical exercise).     Rewrite the formula to avoid the loss of significance when is close to . Evaluate both the original and rewritten formulas when . How different are the results?     A function has been evaluated at the points (in Matlab notation, x = 0:0.1:1 ). Its values are  y = [1, 0.99, 0.96, 0.91, 0.85, 0.78, 0.7, 0.61, 0.53, 0.44, 0.37]  Write a script which plots this function together with its first derivative and its second derivative . Use symmetric difference formulas with .   Expressions like y(3:end) - y(1:end-2) will be useful. Note that while the values of can be plotted against the given vector x , the derivatives need to be plotted against x(2:end-1) because the symmetric formulas do not apply at the endpoints. Recall we can combine several functions in one plot command like plot(x, y, xx, yy) .  "
},
{
  "id": "exercises-numerical-differentiation-2",
  "level": "2",
  "url": "exercises-numerical-differentiation.html#exercises-numerical-differentiation-2",
  "type": "Exercise",
  "number": "12.6.1",
  "title": "",
  "body": "  Find the order of error of the formula (theoretical exercise).  "
},
{
  "id": "exercises-numerical-differentiation-3",
  "level": "2",
  "url": "exercises-numerical-differentiation.html#exercises-numerical-differentiation-3",
  "type": "Exercise",
  "number": "12.6.2",
  "title": "",
  "body": "  Rewrite the formula to avoid the loss of significance when is close to . Evaluate both the original and rewritten formulas when . How different are the results?  "
},
{
  "id": "exercises-numerical-differentiation-4",
  "level": "2",
  "url": "exercises-numerical-differentiation.html#exercises-numerical-differentiation-4",
  "type": "Exercise",
  "number": "12.6.3",
  "title": "",
  "body": "  A function has been evaluated at the points (in Matlab notation, x = 0:0.1:1 ). Its values are  y = [1, 0.99, 0.96, 0.91, 0.85, 0.78, 0.7, 0.61, 0.53, 0.44, 0.37]  Write a script which plots this function together with its first derivative and its second derivative . Use symmetric difference formulas with .   Expressions like y(3:end) - y(1:end-2) will be useful. Note that while the values of can be plotted against the given vector x , the derivatives need to be plotted against x(2:end-1) because the symmetric formulas do not apply at the endpoints. Recall we can combine several functions in one plot command like plot(x, y, xx, yy) . "
},
{
  "id": "section-riemann-sums",
  "level": "1",
  "url": "section-riemann-sums.html",
  "type": "Section",
  "number": "13.1",
  "title": "Riemann sums",
  "body": " Riemann sums  Numerical integration problem amounts to the following: we have a function on some interval , and we try to compute based on evaluating at some points of this interval. To begin with, recall that by definition, is the limit of Riemann sums of . The process of computing a Riemann sum is as follows.  Divide into subintervals. It can be divided into subintervals by choosing some points so that and . The subintervals are where  Evaluate at some point (a sample point) of each subinterval .  Compute the sum of the products for . This is the Riemann sum:   Therefore, a basic strategy of numeric integration consists of choosing subintervals and then choosing a point in each.  The simplest choice of subintervals is to have subintervals of equal length, meaning each has length , which makes . We will eventually see that this choice is not as good as it seems, but it will do for now.  "
},
{
  "id": "section-riemann-sums-2",
  "level": "2",
  "url": "section-riemann-sums.html#section-riemann-sums-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann sums "
},
{
  "id": "section-left-right-midpoint",
  "level": "1",
  "url": "section-left-right-midpoint.html",
  "type": "Section",
  "number": "13.2",
  "title": "Left, right, midpoint rules",
  "body": " Left, right, midpoint rules  The three rules considered here use equal subintervals, but different choices of same points. In a subinterval we have three natural choices for a sample point: left endpoint , right endpoint , and midpoint . They give us three ways of approximating the integral:  Left endpoint approximation  Right endpoint approximation  Midpoint Rule:    Computing with left- right- and midpoint rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with  f = @(x) sin(x.^2); a = 1; b = 3; n = 10; h = (b-a)\/n; x = a:h:b; L = sum(f(x(1:end-1)))*h; R = sum(f(x(2:end)))*h; midpoints = (x(1:end-1) + x(2:end))\/2; M = sum(f(midpoints))*h; fprintf('Leftpoint %g, Rightpoint %g, Midpoint %g\\n', L, R, M);  The output is Leftpoint 0.483958, Rightpoint 0.398087, Midpoint 0.474599 . (One can check with WolframAlpha that the actual value of the integral is about 0.4633.)   "
},
{
  "id": "example-lrm-rules",
  "level": "2",
  "url": "section-left-right-midpoint.html#example-lrm-rules",
  "type": "Example",
  "number": "13.2.1",
  "title": "Computing with left- right- and midpoint rules.",
  "body": "Computing with left- right- and midpoint rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with  f = @(x) sin(x.^2); a = 1; b = 3; n = 10; h = (b-a)\/n; x = a:h:b; L = sum(f(x(1:end-1)))*h; R = sum(f(x(2:end)))*h; midpoints = (x(1:end-1) + x(2:end))\/2; M = sum(f(midpoints))*h; fprintf('Leftpoint %g, Rightpoint %g, Midpoint %g\\n', L, R, M);  The output is Leftpoint 0.483958, Rightpoint 0.398087, Midpoint 0.474599 . (One can check with WolframAlpha that the actual value of the integral is about 0.4633.)  "
},
{
  "id": "section-trapezoidal-rulet",
  "level": "1",
  "url": "section-trapezoidal-rulet.html",
  "type": "Section",
  "number": "13.3",
  "title": "Trapezoidal rule",
  "body": " Trapezoidal rule  When a function is increasing, the leftpoint rule underestimates its integral, and rightpoint rule overestimates it. So, their average should be a better approximation. This is the Trapezoidal Rule : In Matlab, the computation is similar to  T = (f(x(1)) + f(x(end))) * h\/2 + sum(f(x(2:end-1)))*h; It may be simpler to compute the vector y = f(x) first, which reduces the number of calls to function f and the number of parentheses: T = (y(1) + y(end)) * h\/2 + sum(y(2:end-1))*h;   Comparing the accuracy of four rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with and find the error of each approximation (that is, its difference with the actual integral).  f = @(x) exp(x); a = -1; b = 1; n = 10; h = (b-a)\/n; x = a:h:b; y = f(x); L = sum(y(1:end-1))*h; R = sum(y(2:end))*h; T = (y(1) + y(end)) * h\/2 + sum(y(2:end-1))*h; midpoints = (x(1:end-1) + x(2:end))\/2; M = sum(f(midpoints))*h; exact = exp(1)-exp(-1); er = abs([L R T M] - exact); fprintf('Errors: Leftpoint %g, Rightpoint %g, Trapezoidal %g, Midpoint %g\\n', er);  Here fprintf  unpacks the vector er , inserting its entries in the right places.   "
},
{
  "id": "section-trapezoidal-rulet-2",
  "level": "2",
  "url": "section-trapezoidal-rulet.html#section-trapezoidal-rulet-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trapezoidal Rule "
},
{
  "id": "example-lrmt-rules-compare",
  "level": "2",
  "url": "section-trapezoidal-rulet.html#example-lrmt-rules-compare",
  "type": "Example",
  "number": "13.3.1",
  "title": "Comparing the accuracy of four rules.",
  "body": "Comparing the accuracy of four rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with and find the error of each approximation (that is, its difference with the actual integral).  f = @(x) exp(x); a = -1; b = 1; n = 10; h = (b-a)\/n; x = a:h:b; y = f(x); L = sum(y(1:end-1))*h; R = sum(y(2:end))*h; T = (y(1) + y(end)) * h\/2 + sum(y(2:end-1))*h; midpoints = (x(1:end-1) + x(2:end))\/2; M = sum(f(midpoints))*h; exact = exp(1)-exp(-1); er = abs([L R T M] - exact); fprintf('Errors: Leftpoint %g, Rightpoint %g, Trapezoidal %g, Midpoint %g\\n', er);  Here fprintf  unpacks the vector er , inserting its entries in the right places.  "
},
{
  "id": "section-lrtm-error-estimates",
  "level": "1",
  "url": "section-lrtm-error-estimates.html",
  "type": "Section",
  "number": "13.4",
  "title": "Error estimates",
  "body": " Error estimates  How to estimate the accuracy of integration rules? Here is an empirical method which is similar to how we estimated the accuracy of differentiation rules in .  There is a method to determine the order of error of an approximation to some derivative of :  Let  Apply the integration rule to on the interval , with the smallest possible number of evaluation points. Find the error term.  If the error term is zero, increase by and return to step 2.  Express the error as with an explicit constant . Note that the factorial is here because it is the derivative of of order , which is the source of the error.  The error bound for a single subinterval is .  When the estimate is applied on an interval with step size , the error estimate is multiplied by ; thus the final result is .    The error of midpoint rule  Using the process describe above, estimate the error of the midpoint rule.  The midpoint rule is exact for and . But for it predicts , while the true value is . So we stop at with the error of , which can be written as . Therefore, the constant factor in the error formula: is . In conclusion, the error of the midpoint rule is at most   "
},
{
  "id": "example-error-midpoint-rule",
  "level": "2",
  "url": "section-lrtm-error-estimates.html#example-error-midpoint-rule",
  "type": "Example",
  "number": "13.4.1",
  "title": "The error of midpoint rule.",
  "body": "The error of midpoint rule  Using the process describe above, estimate the error of the midpoint rule.  The midpoint rule is exact for and . But for it predicts , while the true value is . So we stop at with the error of , which can be written as . Therefore, the constant factor in the error formula: is . In conclusion, the error of the midpoint rule is at most  "
},
{
  "id": "examples-trapezoid-midpoint",
  "level": "1",
  "url": "examples-trapezoid-midpoint.html",
  "type": "Section",
  "number": "13.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.  The error of rightpoint rule  Estimate the error of the rightpoint rule.  The rightpoint rule is exact for . But for it predicts , while the true value is . So we stop at with the error of , which cam be written as . Therefore, the constant factor in the error formula: is . In conclusion, the error of the rightpoint rule is at most   Using substitution to evaluate an improper integral  The integral is improper (of first kind, meaning the interval of integration is infinite). Having an integration limit is not good for any of the integration rules in this chapter. Make a substitution to transform this integral into a proper one.  The substitution works well here. Since and , it follows that The integral on the right is proper. As , the logarithm tends to negative infinity, but this only makes the integrand zero; so it is a continuous function on the interval of integration.  Note that the substitution does not bring us any closer to the symbolic solution, since cannot be integrated with calculus methods either. But it makes a more convenient integral for numerical methods.   Failure of error estimates  The integral could be approximated using any of the rules in this chapter. The endpoint 0 is not a problem, because Matlab is okay with 1\/log(0) : it simply evaluates it as 0. But it is still a good idea to avoid this endpoint, so the midpoint rule is preferable. Try it with , for example. Then try to estimate the error of this rule using the formula in . What goes wrong, and what does this mean for the approximation?   An improper integral of second kind  The integral is improper (of second kind) but it converges. Which of the above integration rules could be used to evaluate this integral? Which of those rules would you use?   "
},
{
  "id": "example-error-rightpoint-rule",
  "level": "2",
  "url": "examples-trapezoid-midpoint.html#example-error-rightpoint-rule",
  "type": "Example",
  "number": "13.5.1",
  "title": "The error of rightpoint rule.",
  "body": "The error of rightpoint rule  Estimate the error of the rightpoint rule.  The rightpoint rule is exact for . But for it predicts , while the true value is . So we stop at with the error of , which cam be written as . Therefore, the constant factor in the error formula: is . In conclusion, the error of the rightpoint rule is at most  "
},
{
  "id": "example-improper-substitution",
  "level": "2",
  "url": "examples-trapezoid-midpoint.html#example-improper-substitution",
  "type": "Example",
  "number": "13.5.2",
  "title": "Using substitution to evaluate an improper integral.",
  "body": "Using substitution to evaluate an improper integral  The integral is improper (of first kind, meaning the interval of integration is infinite). Having an integration limit is not good for any of the integration rules in this chapter. Make a substitution to transform this integral into a proper one.  The substitution works well here. Since and , it follows that The integral on the right is proper. As , the logarithm tends to negative infinity, but this only makes the integrand zero; so it is a continuous function on the interval of integration.  Note that the substitution does not bring us any closer to the symbolic solution, since cannot be integrated with calculus methods either. But it makes a more convenient integral for numerical methods.  "
},
{
  "id": "examples-trapezoid-midpoint-5",
  "level": "2",
  "url": "examples-trapezoid-midpoint.html#examples-trapezoid-midpoint-5",
  "type": "Question",
  "number": "13.5.3",
  "title": "Failure of error estimates.",
  "body": "Failure of error estimates  The integral could be approximated using any of the rules in this chapter. The endpoint 0 is not a problem, because Matlab is okay with 1\/log(0) : it simply evaluates it as 0. But it is still a good idea to avoid this endpoint, so the midpoint rule is preferable. Try it with , for example. Then try to estimate the error of this rule using the formula in . What goes wrong, and what does this mean for the approximation?  "
},
{
  "id": "examples-trapezoid-midpoint-6",
  "level": "2",
  "url": "examples-trapezoid-midpoint.html#examples-trapezoid-midpoint-6",
  "type": "Question",
  "number": "13.5.4",
  "title": "An improper integral of second kind.",
  "body": "An improper integral of second kind  The integral is improper (of second kind) but it converges. Which of the above integration rules could be used to evaluate this integral? Which of those rules would you use?  "
},
{
  "id": "exercises-trapezoid-midpoint",
  "level": "1",
  "url": "exercises-trapezoid-midpoint.html",
  "type": "Exercises",
  "number": "13.6",
  "title": "Homework",
  "body": " Homework    Estimate the error of the trapezoidal rule following the procedure in (theoretical exercise).     Calculate an approximate value of using from the formula Two approximations must be made here: replacing in the integral with a large number , and using the trapezoidal rule with a large number of subintervals . While avoiding extremely large and that might freeze your computer, calculate the value of integral with enough precision so that round(8*I^2, 2) (rounding to 2 places) produces 3.14, a reasonable approximation to .  Questions to answer: (a) What values of and did you use to achieve 3.14? (b) If you increase while keeping fixed, does the answer become more precise or less precise? Why? (Hint: think of the error estimate formula)  (For Octave users: round(x, 2) is not currently available in Octave: it only has round(x) , rounding to the nearest integer. As a workaround, use round(x*100)\/100 which has the same effect as round(x, 2) in Matlab.)   "
},
{
  "id": "exercises-trapezoid-midpoint-2",
  "level": "2",
  "url": "exercises-trapezoid-midpoint.html#exercises-trapezoid-midpoint-2",
  "type": "Exercise",
  "number": "13.6.1",
  "title": "",
  "body": "  Estimate the error of the trapezoidal rule following the procedure in (theoretical exercise).  "
},
{
  "id": "exercises-trapezoid-midpoint-3",
  "level": "2",
  "url": "exercises-trapezoid-midpoint.html#exercises-trapezoid-midpoint-3",
  "type": "Exercise",
  "number": "13.6.2",
  "title": "",
  "body": "  Calculate an approximate value of using from the formula Two approximations must be made here: replacing in the integral with a large number , and using the trapezoidal rule with a large number of subintervals . While avoiding extremely large and that might freeze your computer, calculate the value of integral with enough precision so that round(8*I^2, 2) (rounding to 2 places) produces 3.14, a reasonable approximation to .  Questions to answer: (a) What values of and did you use to achieve 3.14? (b) If you increase while keeping fixed, does the answer become more precise or less precise? Why? (Hint: think of the error estimate formula)  (For Octave users: round(x, 2) is not currently available in Octave: it only has round(x) , rounding to the nearest integer. As a workaround, use round(x*100)\/100 which has the same effect as round(x, 2) in Matlab.)  "
},
{
  "id": "section-simpson-rule",
  "level": "1",
  "url": "section-simpson-rule.html",
  "type": "Section",
  "number": "14.1",
  "title": "Simpson’s rule",
  "body": " Simpson's rule  Consider the trapezoidal rule on the interval with . It has , so Surprisingly, the approximation can be made much more precise without doing more computations. As in , we use the Richardson extrapolation to improve the accuracy. The same trapezoidal rule with doubled step size yields Since the error of trapezoidal rule is proportional to (the rule has second order of accuracy), we expect the second approximation to have error 4 times greater than the first approximation . To cancel out most of the error, we divide by 4 and subtract it from . The result is Hence The approximation uses the same information about function as the trapezoidal rule : the values at -1, 0, 1. But the result is much more accurate. Consider, for example, the integral . The trapezoidal rule approximates it by with the error of 0.1927. The formula produces with the error of 0.0117. This is 16 times more accurate. This improvement was achieved by changing the weights (coefficients) attached to the values : for trapezoidal rule they are , but the formula uses the weights . The formula is Simpson's rule (with subintervals) on the interval . On a general interval it becomes, via a change of variable, Check that is consistent with : the midpoint gets greater weight than the endpoints by the factor of 4, and the sum of weights is .  Simpson's rule can be used with more subintervals, but their number has to be even, since we are combining trapezoidal rule with and subintervals. With we get A better way to think of this formula is that we first divide the interval into some number of equal parts and then use Simpson's rule on each part. The result is called composite Simpson's rule in contrast to the simple Simpson's rule that we started with.  To summarize: Simpson's rule is the result of Richardson extrapolation of the Trapezoidal rule. Following the process in one can find that its order of accuracy is 4, meaning the error is proportional to .  "
},
{
  "id": "section-simpson-rule-2",
  "level": "2",
  "url": "section-simpson-rule.html#section-simpson-rule-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weights "
},
{
  "id": "section-simpson-other-derivation",
  "level": "1",
  "url": "section-simpson-other-derivation.html",
  "type": "Section",
  "number": "14.2",
  "title": "Other derivations of Simpson’s rule",
  "body": " Other derivations of Simpson's rule  A simple way to arrive at Simpson's rule is to observe that Midpoint rule and Trapezoidal rule have errors of opposite signs due to concavity. This suggests averaging them to improve the accuracy. But the simple average would not achieve much because the error of midpoint rule is about half of the error of trapezoidal rule, according to the estimates in . Instead, the weighted average is used, giving weight to Midpoint and to Trapezoidal. The result is Simpson's rule.  But historically Simpson's rule was derived from parabolic interpolation , following the same line of reasoning that produces Trapezoid rule from linear interpolation . For simplicity, consider a function on the interval . We are looking for a parabola that agrees with at three points . This can be done by observing that        We arrive at which is Simpson's rule.  "
},
{
  "id": "section-newton-cotes",
  "level": "1",
  "url": "section-newton-cotes.html",
  "type": "Section",
  "number": "14.3",
  "title": "Newton-Cotes rules",
  "body": " Newton-Cotes rules  One can create rules of any given order of accuracy, using enough sample points. Usually such rules are derived for the convenient interval , and then applied to other intervals by change of variable.  Let be some points in the interval . We want to come up with an integration rule where are coefficients (weights). For example, Simpson's rule (in its simple form) has evaluation points and weights .  How to find the weights that make the rule as accurate as possible? We can require both sides to be equal when is each of the following: . This gives linear equations with unknowns . Then solve the system, perhaps using Matlab. The resulting rules are called Newton-Cotes rules when the points are distributed at equal intervals. They include trapezoidal rule (2 points) and Simpson's rule (3 points) as special cases.   Find the weights for a 5-point Newton-Cotes formula  Let evaluation points on be . What will their weights be?   We need 5 linear equations involving integrals of . If we number them by index running from 1 to 5, then the equation has on the right hand side, which is . On the left we have the sum which means the coefficients of the unknown is . We can create a matrix using outer exponentiation of a row vector by a column vector.  n = 5; x = linspace(-1, 1, n); i = (1:n)'; A = x.^(i-1); b = (1-(-1).^i).\/i; w = A\\b; disp(rats(w'))  Here rats is used to display the solution as rational numbers (which they are) rather than the usual decimal approximation.  Having computed the weights as above, we can integrate any function f on [-1, 1] simply by executing f(x)*w , which is the dot product of a vector with function values with the vector of weights. Try this for the exponential function.   Although one can get rules of arbitrarily high order in this way, the gain in practice does not justify the increasing complexity. (Try computing the 9-point rule, for example). It turns out that using many equally spaced points on an interval is generally a bad idea. We need a smarter way of choosing the points, which we will start working on next time.  "
},
{
  "id": "example-find-cotes-weights",
  "level": "2",
  "url": "section-newton-cotes.html#example-find-cotes-weights",
  "type": "Example",
  "number": "14.3.1",
  "title": "Find the weights for a 5-point Newton-Cotes formula.",
  "body": " Find the weights for a 5-point Newton-Cotes formula  Let evaluation points on be . What will their weights be?   We need 5 linear equations involving integrals of . If we number them by index running from 1 to 5, then the equation has on the right hand side, which is . On the left we have the sum which means the coefficients of the unknown is . We can create a matrix using outer exponentiation of a row vector by a column vector.  n = 5; x = linspace(-1, 1, n); i = (1:n)'; A = x.^(i-1); b = (1-(-1).^i).\/i; w = A\\b; disp(rats(w'))  Here rats is used to display the solution as rational numbers (which they are) rather than the usual decimal approximation.  Having computed the weights as above, we can integrate any function f on [-1, 1] simply by executing f(x)*w , which is the dot product of a vector with function values with the vector of weights. Try this for the exponential function.  "
},
{
  "id": "examples-simpson-newton-cotes",
  "level": "1",
  "url": "examples-simpson-newton-cotes.html",
  "type": "Section",
  "number": "14.4",
  "title": "Examples and questions",
  "body": " Examples and questions  Comparing the accuracy of Simpson's, trapezoidal, and midpoint rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with and find the error of each approximation (that is, its difference with the actual integral).  Then repeat the same with . What could explain the lackluster performance of Simpson's rule here?   f = @(x) exp(x); % or exp(sqrt(x)) a = 0; b = 1; exact = exp(1)-1; % or 2 n = 10; h = (b-a)\/n; x = a:h:b; y = f(x); T = (h\/2)*(y(1) + y(end) + 2*sum(y(2:end-1))); S = (h\/3)*(y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-2))); midpoints = (x(1:end-1) + x(2:end))\/2; M = h*sum(f(midpoints)); er = abs([T M S] - exact); fprintf('Errors: Trapezoidal %g, Midpoint %g, Simpson %g\\n', er);  The function is not differentiable at . This behavior affects higher order methods more because they are based on comparing the function to a smooth one (such as a parabola). The midpoint method has an advantage in that it does not use the problematic point .   Richardson extrapolation of the midpoint rule  We derived Simpson's rule from trapezoidal rule using the Richardson extrapolation. Why not do the same starting from the midpoint rule instead of trapezoidal?   "
},
{
  "id": "example-simpson-rule-compare",
  "level": "2",
  "url": "examples-simpson-newton-cotes.html#example-simpson-rule-compare",
  "type": "Example",
  "number": "14.4.1",
  "title": "Comparing the accuracy of Simpson’s, trapezoidal, and midpoint rules.",
  "body": "Comparing the accuracy of Simpson's, trapezoidal, and midpoint rules  For the function on the interval , use Matlab to compute the left-, right, and midpoint approximations with and find the error of each approximation (that is, its difference with the actual integral).  Then repeat the same with . What could explain the lackluster performance of Simpson's rule here?   f = @(x) exp(x); % or exp(sqrt(x)) a = 0; b = 1; exact = exp(1)-1; % or 2 n = 10; h = (b-a)\/n; x = a:h:b; y = f(x); T = (h\/2)*(y(1) + y(end) + 2*sum(y(2:end-1))); S = (h\/3)*(y(1) + y(end) + 4*sum(y(2:2:end-1)) + 2*sum(y(3:2:end-2))); midpoints = (x(1:end-1) + x(2:end))\/2; M = h*sum(f(midpoints)); er = abs([T M S] - exact); fprintf('Errors: Trapezoidal %g, Midpoint %g, Simpson %g\\n', er);  The function is not differentiable at . This behavior affects higher order methods more because they are based on comparing the function to a smooth one (such as a parabola). The midpoint method has an advantage in that it does not use the problematic point .  "
},
{
  "id": "examples-simpson-newton-cotes-3",
  "level": "2",
  "url": "examples-simpson-newton-cotes.html#examples-simpson-newton-cotes-3",
  "type": "Question",
  "number": "14.4.2",
  "title": "Richardson extrapolation of the midpoint rule.",
  "body": "Richardson extrapolation of the midpoint rule  We derived Simpson's rule from trapezoidal rule using the Richardson extrapolation. Why not do the same starting from the midpoint rule instead of trapezoidal?  "
},
{
  "id": "exercises-simpson-newton-cotes",
  "level": "1",
  "url": "exercises-simpson-newton-cotes.html",
  "type": "Exercises",
  "number": "14.5",
  "title": "Homework",
  "body": " Homework    Sometimes one needs an open-ended version of Newton-Cotes rules, which does not use the values of the function at the endpoints (because the function may not be defined at the endpoints). Find the coefficients in the integration rule so that the rule is precise for , , and . (You can use Matlab for solving the system of equations for the weights.)     Apply the integration rule derived in the previous exercise to . How close is the result to the actual value of the integral (you can find it, for example, with WolframAlpha)?     In a loop over n=2:10 , do the following. First, compute the weights for -point Newton-Cotes rule (of the standard type, as in ). Then use this rule to approximate . After the loop ends you should have 9 approximations to this integral. Show how their accuracy changes with by plotting the absolute value of the difference between the integral and approximation, as a function of . Use semilogy instead of plot to show the plot on logarithmic scale.   "
},
{
  "id": "exercises-simpson-newton-cotes-2",
  "level": "2",
  "url": "exercises-simpson-newton-cotes.html#exercises-simpson-newton-cotes-2",
  "type": "Exercise",
  "number": "14.5.1",
  "title": "",
  "body": "  Sometimes one needs an open-ended version of Newton-Cotes rules, which does not use the values of the function at the endpoints (because the function may not be defined at the endpoints). Find the coefficients in the integration rule so that the rule is precise for , , and . (You can use Matlab for solving the system of equations for the weights.)  "
},
{
  "id": "exercises-simpson-newton-cotes-3",
  "level": "2",
  "url": "exercises-simpson-newton-cotes.html#exercises-simpson-newton-cotes-3",
  "type": "Exercise",
  "number": "14.5.2",
  "title": "",
  "body": "  Apply the integration rule derived in the previous exercise to . How close is the result to the actual value of the integral (you can find it, for example, with WolframAlpha)?  "
},
{
  "id": "exercises-simpson-newton-cotes-4",
  "level": "2",
  "url": "exercises-simpson-newton-cotes.html#exercises-simpson-newton-cotes-4",
  "type": "Exercise",
  "number": "14.5.3",
  "title": "",
  "body": "  In a loop over n=2:10 , do the following. First, compute the weights for -point Newton-Cotes rule (of the standard type, as in ). Then use this rule to approximate . After the loop ends you should have 9 approximations to this integral. Show how their accuracy changes with by plotting the absolute value of the difference between the integral and approximation, as a function of . Use semilogy instead of plot to show the plot on logarithmic scale.  "
},
{
  "id": "section-legendre-motivation",
  "level": "1",
  "url": "section-legendre-motivation.html",
  "type": "Section",
  "number": "15.1",
  "title": "Motivation: search for better evaluation points",
  "body": " Motivation: search for better evaluation points  What is the most accurate approximation to using two points of evaluations? So far we saw the trapezoidal rule, which is . For example, if we have while , so the rule makes a significant error, overestimating the integral by . The concavity of the function is responsible for this error.  It turns out there is a much more accurate two-point integration rule: For the exponential function it gives , the error of only 0.0077. This is about 100 times more accurate than the trapezoidal rule, with the same number of function evaluations.  Where does come from? It will take some time to develop a general theory leading to this choice, but a quick way to justify it is to consider small powers of :  If , then holds for any choice of points  If , then holds whenever the points are symmetric about 0, meaning that .  If , then and . The two things are equal when .  As a bonus, the rule is also accurate for , by virtue of symmetry, so its order of accuracy is 4.  There is a general method of choosing evaluation points in an optimal way: they will be the roots of some special -th degree polynomial. This method is called Gaussian integration and it is built into TI-83 calculators and many software packages, including Matlab ( quadgk command). But before we get to actual integration, we have to study the orthogonal polynomials themselves. The process of using them for integration will be covered in next chapter.  "
},
{
  "id": "section-legendre-polynomials",
  "level": "1",
  "url": "section-legendre-polynomials.html",
  "type": "Section",
  "number": "15.2",
  "title": "Legendre polynomials",
  "body": " Legendre polynomials  The idea of orthogonality can be taken from linear algebra and applied to functions. Two functions and are orthogonal on an interval if their inner product  is zero: . For example, and are orthogonal on . And is orthogonal to on this interval, but it is not orthogonal to . Is there a second-degree polynomial that is orthogonal to both  and ? Yes, there is: (check this).  This process continues indefinitely: for every positive integer we can find a polynomial of degree , say , which is orthogonal to all polynomials of degrees up to , by the Gram-Schmidt algorithm. The roots of this polynomial turn out to be contained in the interval . These roots will shown to be useful as the evaluation\/sample points.  In the above process, the polynomials are determined up to a multiplicative constant. It is convenient to normalize them by requiring . This makes the unique -th degree polynomial such that for , and . Note that for every polynomial with degree .  The polynomials are called Legendre polynomials , and they come up in a number of contexts. They originated in physics: in a 1782 paper by Legendre, he used them to expand the electrostatic potential into a power series. A practical way to compute Legendre polynomials is the recursive formula which can be used to compute all these polynomials starting with and .  Using the recursive formula for Legendre polynomials  Using the formula , find the polynomials for . What are their roots?  Properties of Legendre polynomials  What patterns in the polynomials do you observe on the basis of the examples computed above?  "
},
{
  "id": "section-legendre-polynomials-5",
  "level": "2",
  "url": "section-legendre-polynomials.html#section-legendre-polynomials-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre polynomials "
},
{
  "id": "section-legendre-polynomials-6",
  "level": "2",
  "url": "section-legendre-polynomials.html#section-legendre-polynomials-6",
  "type": "Example",
  "number": "15.2.1",
  "title": "Using the recursive formula for Legendre polynomials.",
  "body": "Using the recursive formula for Legendre polynomials  Using the formula , find the polynomials for . What are their roots? "
},
{
  "id": "section-legendre-polynomials-7",
  "level": "2",
  "url": "section-legendre-polynomials.html#section-legendre-polynomials-7",
  "type": "Question",
  "number": "15.2.2",
  "title": "Properties of Legendre polynomials.",
  "body": "Properties of Legendre polynomials  What patterns in the polynomials do you observe on the basis of the examples computed above? "
},
{
  "id": "section-laguerre-polynomials",
  "level": "1",
  "url": "section-laguerre-polynomials.html",
  "type": "Section",
  "number": "15.3",
  "title": "Laguerre polynomials",
  "body": " Laguerre polynomials  In an earlier homework we found that finding integrals of the form is hard: we had to pick some large upper limit (mostly by guessing) to replace the infinite upper limit. Otherwise, there was no way to choose evaluation points by placing them at equal distances throughout the interval.  But now we have a way of choosing evaluation points differently, as roots of orthogonal polynomials. So we can try to integrate on an infinite interval by using orthogonal polynomials on such an interval.  However, on an infinite interval we cannot define the inner product of polynomials in the sense of the integral , the integral will diverge. Instead we define dot product as , introducing a weight  which allows the integral to converge. This way we can build orthogonal polynomials: for example, and are orthogonal (check).  The Laguerre polynomial of degree , denoted , is the unique -th degree polynomial such that for , and . Note that for every polynomial with degree .  Similarly to Legendre polynomials, the Laguerre polynomials have a recursive formula: which can be used to compute them starting with and .  Using the recursive formula for Laguerre polynomials  Using the formula , find the polynomials for . What are their roots?  Properties of Laguerre polynomials  What patterns in the polynomials do you observe on the basis of the examples computed above?  "
},
{
  "id": "section-laguerre-polynomials-4",
  "level": "2",
  "url": "section-laguerre-polynomials.html#section-laguerre-polynomials-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weight "
},
{
  "id": "section-laguerre-polynomials-5",
  "level": "2",
  "url": "section-laguerre-polynomials.html#section-laguerre-polynomials-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laguerre polynomial "
},
{
  "id": "section-laguerre-polynomials-7",
  "level": "2",
  "url": "section-laguerre-polynomials.html#section-laguerre-polynomials-7",
  "type": "Example",
  "number": "15.3.1",
  "title": "Using the recursive formula for Laguerre polynomials.",
  "body": "Using the recursive formula for Laguerre polynomials  Using the formula , find the polynomials for . What are their roots? "
},
{
  "id": "section-laguerre-polynomials-8",
  "level": "2",
  "url": "section-laguerre-polynomials.html#section-laguerre-polynomials-8",
  "type": "Question",
  "number": "15.3.2",
  "title": "Properties of Laguerre polynomials.",
  "body": "Properties of Laguerre polynomials  What patterns in the polynomials do you observe on the basis of the examples computed above? "
},
{
  "id": "examples-legendre-laguerre",
  "level": "1",
  "url": "examples-legendre-laguerre.html",
  "type": "Section",
  "number": "15.4",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Computing and plotting Legendre polynomials  Recursively find the coefficients and roots of Legendre polynomials of degrees up to 10. Plot all of them on the interval . The polynomials should be represented as vectors of coefficients, for example q = [1 0] represents . Once the coefficients are computed, one can use polyval(q, x) to evaluate the polynomial at every point of vector x , so that, for example, plot(x, polyval(q, x)) can be used to plot it.  We have to start with [1] and [1 0] which represent and . Once a vector of coefficients q exists, one can use concatenation [q 0] to shift the coefficients to the left, representing multiplication by .  p = [1]; q = [1 0]; x = linspace(-1, 1, 1000); hold on plot(x, polyval(p, x), x, polyval(q, x)); for n = 1:9 r = ((2*n+1)*[q 0] - n*[0 0 p])\/(n+1); p = q; q = r; disp(r); plot(x, polyval(r, x)) end hold off  The loop runs up to because the polynomial being computed has degree . In the loop, q is a polynomial of degree and p is a polynomial of degree . Concatenation [0 0 p] adds zero terms to the latter polynomial; this does not change it mathematically but makes it possible to do vector addition of coefficients.    The roots of Legendre polynomials  Adapt the code in to find and plot the roots of Legendre polynomials of degrees 2 through 10.    The command roots can be used to find the roots. A convenient way to plot them so that one can tell the difference between different degrees is to use the y-coordinate for the degree.  p = [1]; q = [1 0]; hold on for n = 1:9 r = ((2*n+1)*[q 0] - n*[0 0 p])\/(n+1); p = q; q = r; plot(roots(r), n+1, 'b*'); end hold off   Patterns in the roots of Legendre polynomials  What patterns do you observe in the roots found in ?  "
},
{
  "id": "example-computation-legendre-coefficients",
  "level": "2",
  "url": "examples-legendre-laguerre.html#example-computation-legendre-coefficients",
  "type": "Example",
  "number": "15.4.1",
  "title": "Computing and plotting Legendre polynomials.",
  "body": " Computing and plotting Legendre polynomials  Recursively find the coefficients and roots of Legendre polynomials of degrees up to 10. Plot all of them on the interval . The polynomials should be represented as vectors of coefficients, for example q = [1 0] represents . Once the coefficients are computed, one can use polyval(q, x) to evaluate the polynomial at every point of vector x , so that, for example, plot(x, polyval(q, x)) can be used to plot it.  We have to start with [1] and [1 0] which represent and . Once a vector of coefficients q exists, one can use concatenation [q 0] to shift the coefficients to the left, representing multiplication by .  p = [1]; q = [1 0]; x = linspace(-1, 1, 1000); hold on plot(x, polyval(p, x), x, polyval(q, x)); for n = 1:9 r = ((2*n+1)*[q 0] - n*[0 0 p])\/(n+1); p = q; q = r; disp(r); plot(x, polyval(r, x)) end hold off  The loop runs up to because the polynomial being computed has degree . In the loop, q is a polynomial of degree and p is a polynomial of degree . Concatenation [0 0 p] adds zero terms to the latter polynomial; this does not change it mathematically but makes it possible to do vector addition of coefficients.  "
},
{
  "id": "example-computation-legendre-roots",
  "level": "2",
  "url": "examples-legendre-laguerre.html#example-computation-legendre-roots",
  "type": "Example",
  "number": "15.4.2",
  "title": "The roots of Legendre polynomials.",
  "body": " The roots of Legendre polynomials  Adapt the code in to find and plot the roots of Legendre polynomials of degrees 2 through 10.    The command roots can be used to find the roots. A convenient way to plot them so that one can tell the difference between different degrees is to use the y-coordinate for the degree.  p = [1]; q = [1 0]; hold on for n = 1:9 r = ((2*n+1)*[q 0] - n*[0 0 p])\/(n+1); p = q; q = r; plot(roots(r), n+1, 'b*'); end hold off  "
},
{
  "id": "examples-legendre-laguerre-5",
  "level": "2",
  "url": "examples-legendre-laguerre.html#examples-legendre-laguerre-5",
  "type": "Question",
  "number": "15.4.3",
  "title": "Patterns in the roots of Legendre polynomials.",
  "body": "Patterns in the roots of Legendre polynomials  What patterns do you observe in the roots found in ? "
},
{
  "id": "exercises-legendre-laguerre",
  "level": "1",
  "url": "exercises-legendre-laguerre.html",
  "type": "Exercises",
  "number": "15.5",
  "title": "Homework",
  "body": " Homework    Adapt to Laguerre polynomials. That is, compute and plot Laguerre polynomials up to degree 10. Use as an interval for plotting since we cannot plot on . Also, comment on some pattern you observe in their behavior.   Note that the degree 1 polynomial is no longer q = [1 0] . Also, the recursive formula needs to be changed. When changing it, think of as and find the vector of coefficients for each of these three terms.     Adapt to Laguerre polynomials. That is, compute and plot the roots of Laguerre polynomials of degrees 2 to 10. Also, comment on some pattern you observe in their behavior.   "
},
{
  "id": "exercises-legendre-laguerre-2",
  "level": "2",
  "url": "exercises-legendre-laguerre.html#exercises-legendre-laguerre-2",
  "type": "Exercise",
  "number": "15.5.1",
  "title": "",
  "body": "  Adapt to Laguerre polynomials. That is, compute and plot Laguerre polynomials up to degree 10. Use as an interval for plotting since we cannot plot on . Also, comment on some pattern you observe in their behavior.   Note that the degree 1 polynomial is no longer q = [1 0] . Also, the recursive formula needs to be changed. When changing it, think of as and find the vector of coefficients for each of these three terms.  "
},
{
  "id": "exercises-legendre-laguerre-3",
  "level": "2",
  "url": "exercises-legendre-laguerre.html#exercises-legendre-laguerre-3",
  "type": "Exercise",
  "number": "15.5.2",
  "title": "",
  "body": "  Adapt to Laguerre polynomials. That is, compute and plot the roots of Laguerre polynomials of degrees 2 to 10. Also, comment on some pattern you observe in their behavior.  "
},
{
  "id": "section-orthogonal-polynomials-recap",
  "level": "1",
  "url": "section-orthogonal-polynomials-recap.html",
  "type": "Section",
  "number": "16.1",
  "title": "Brief recap of orthogonal polynomials",
  "body": " Brief recap of orthogonal polynomials  Last time we studied Legendre polynomials and Laguerre polynomials . They have degree , and their main property is orthogonality, which means different things for different families of orthogonal polynomials.  where is the Legendre polynomial of degree and is any polynomial of degree .  where is the Laguerre polynomial of degree and is any polynomial of degree .   A general fact about orthogonal polynomials is that all their roots are real and are contained in the interval over which they are orthogonal: for Legendre polynomials and for Laguerre polynomials.  As an aside, there are many other important families of orthogonal polynomials which we do not study, for example Hermite polynomials which are orthogonal on the entire line with the weight . The theory of orthogonal polynomials is a vast subject.  "
},
{
  "id": "section-gauss-legendre",
  "level": "1",
  "url": "section-gauss-legendre.html",
  "type": "Section",
  "number": "16.2",
  "title": "Gauss-Legendre integration",
  "body": " Gauss-Legendre integration  The Gauss-Legendre integration rule is to let the evaluation points be the roots of and then choose their weights so that the rule is exact for , . The second part is not new; this is exactly what we did for Newton-Cotes rules. But with this specific choice of evaluation points, the integration rule is exact for all polynomials of degrees , not just . This means the Gauss-Legendre integration has order of accuracy : for example, it has order if we use 7 points.  Proof . Given a polynomial of degree , use long division of polynomials to write it as with and having degree (why is this possible?). Plug this into the integral: where the term integrates to zero because of orthogonality. Since , the Gauss-Legendre integration rule is exact for . Therefore, where the last step uses the fact that by virtue of . This completes the proof that   It turns out the Gauss-Legendre integration rule has the best possible order of accuracy. That is, there is no integration rule with evaluation points that is exact for all polynomials of degrees . Indeed, suppose such a rule exists, with some evaluation points . Let which is a polynomial of degree . Since for every , the evaluation rule will produce , no matter what the weights. But because in between the evaluation points.  Another nice feature of the integration rules based on orthogonal polynomials is that all weights are positive (unlike in the Newton-Cotes rules, which may give negative weights to some points). To see why, consider the polynomial where is as in the previous paragraph. Since cancels out, is a polynomial of degree . Therefore, the integration rule is exact for it: where the right hand side has just one term because for all indices . Since is a square, the left hand side is positive and is also positive. Hence .  Since these integration rules are exact for the constant function (a polynomial of degree 0), we have . As a consequence, all weights are between and .  "
},
{
  "id": "section-gauss-legendre-2",
  "level": "2",
  "url": "section-gauss-legendre.html#section-gauss-legendre-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Legendre integration rule "
},
{
  "id": "section-gauss-laguerre",
  "level": "1",
  "url": "section-gauss-laguerre.html",
  "type": "Section",
  "number": "16.3",
  "title": "Gauss-Laguerre integration",
  "body": " Gauss-Laguerre integration  The Gauss-Laguerre integration rule is stated for integrals of the form . This means that if we want to calculate, for example, , then the function to use is .  Apart from the presence of the weight function , the rest goes as in . Let be the roots of Laguerre polynomial . Then solve a linear system for the weights so that the rule is exact for with . This choice and the orthogonality property make the rule exact when is a polynomial of degree less than .  It is important to recognize that although there is an exponential term on the left hand side of , it does not appear on the right hand side. Think of it as being subsumed by the weights . Aside: in terms of measure theory, we are approximating the continuous measure by the discrete measure which puts mass at the point for each .  One difference is the right hand side of the system which we use to solve for the weights . For Gauss-Legendre integration we have there. For Gauss-Laguerre integration we have which takes a but more work. Integration by parts helps: which shows, by induction, that .  For example, has roots and . The system for weights consists of for . This simplifies to and . The solution can be found by hand: and .  Note that while for Gauss-Legendre integration the sum of weights is , for the Gauss-Laguerre integration the sum is .  Let's apply two-point Gauss-Laguerre integration to .  x = [2-sqrt(2), 2+sqrt(2)]; w = [(2+sqrt(2))\/4, (2-sqrt(2))\/4]'; f = @(x) exp(x).\/(x.^3+4); disp(f(x)*w);  The result is while the true value of the integral is . Not too bad a result after using just two evaluation points on an infinite interval. Even though this integral can be computed by hand, this is not an enjoyable task.  "
},
{
  "id": "examples-gaussian-integration",
  "level": "1",
  "url": "examples-gaussian-integration.html",
  "type": "Section",
  "number": "16.4",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Compute the Gauss-Legendre points and weights  For a given integer , find the Gauss-Legendre evaluation points and weights.   Combine the code from (computation of Legendre roots) and (computing the weights). This only requires some changes in variable names and in the orientation of vectors (row\/column).  n = input('n = '); p = [1]; q = [1 0]; for m = 1:n-1 r = ((2*m+1)*[q 0] - m*[0 0 p])\/(m+1); p = q; q = r; end x = roots(r)'; disp(x); % the evaluation points i = (1:n)'; A = x.^(i-1); b = (1-(-1).^i).\/i; w = A\\b; disp(w'); % the weights    Apply the Gauss-Legendre integration rule  For a given integer , apply the Gauss-Legendre rule to the integrals and . In each case, find the difference between the approximate and exact values.   Not repeating the code from , assume it already ran and computed x, w . With exp(x)*w we get an approximation to the integral of . And f(x)*w does the same for the second function, if we define it as f = @(x) (9*x.^2+1).^(-1) .  approx = exp(x)*w; exact = exp(1)-exp(-1); disp(abs(approx-exact)); f = @(x) (9*x.^2+1).^(-1); approx = f(x)*w; exact = (2\/3)*atan(3); disp(abs(approx-exact));  With the error is about for the first integral and about for the second. Somehow, the rule is 100 million times more accurate for the first function than for the second, even though they are both perfectly smooth functions on the interval . The reason for such a different behavior is that is easy to approximate by polynomials while is not so easy; it has to do with the Taylor series of these functions. This will come up again when we study approximation of functions.   One could theoretically derive an estimate for the error of Gauss-Legendre integration rule in terms of the derivative of of order . But this is impractical, because useful estimates of, for example, 10th derivative, are rarely available. The following example approaches the error estimation from another point of view.   Estimating the accuracy of the Gauss-Legendre integration  Suppose that is a function on and there exists a polynomial of degree such that for all . Estimate the error of the 5-point Gauss-Legendre rule applied to .  The integral triangle inequality yields Also by the triangle inequality, where the last step uses a remark at the end of . Finally, since the degree of is , we have . Combining the above, we conclude that   In general, the estimates above show that if can be approximated within by some polynomial of degree , then the error of -point Gauss-Legendre rule is at most .  "
},
{
  "id": "example-find-gauss-legendre-weights",
  "level": "2",
  "url": "examples-gaussian-integration.html#example-find-gauss-legendre-weights",
  "type": "Example",
  "number": "16.4.1",
  "title": "Compute the Gauss-Legendre points and weights.",
  "body": " Compute the Gauss-Legendre points and weights  For a given integer , find the Gauss-Legendre evaluation points and weights.   Combine the code from (computation of Legendre roots) and (computing the weights). This only requires some changes in variable names and in the orientation of vectors (row\/column).  n = input('n = '); p = [1]; q = [1 0]; for m = 1:n-1 r = ((2*m+1)*[q 0] - m*[0 0 p])\/(m+1); p = q; q = r; end x = roots(r)'; disp(x); % the evaluation points i = (1:n)'; A = x.^(i-1); b = (1-(-1).^i).\/i; w = A\\b; disp(w'); % the weights  "
},
{
  "id": "example-apply-gauss-legendre",
  "level": "2",
  "url": "examples-gaussian-integration.html#example-apply-gauss-legendre",
  "type": "Example",
  "number": "16.4.2",
  "title": "Apply the Gauss-Legendre integration rule.",
  "body": " Apply the Gauss-Legendre integration rule  For a given integer , apply the Gauss-Legendre rule to the integrals and . In each case, find the difference between the approximate and exact values.   Not repeating the code from , assume it already ran and computed x, w . With exp(x)*w we get an approximation to the integral of . And f(x)*w does the same for the second function, if we define it as f = @(x) (9*x.^2+1).^(-1) .  approx = exp(x)*w; exact = exp(1)-exp(-1); disp(abs(approx-exact)); f = @(x) (9*x.^2+1).^(-1); approx = f(x)*w; exact = (2\/3)*atan(3); disp(abs(approx-exact));  With the error is about for the first integral and about for the second. Somehow, the rule is 100 million times more accurate for the first function than for the second, even though they are both perfectly smooth functions on the interval . The reason for such a different behavior is that is easy to approximate by polynomials while is not so easy; it has to do with the Taylor series of these functions. This will come up again when we study approximation of functions.  "
},
{
  "id": "example-error-gauss-legendre",
  "level": "2",
  "url": "examples-gaussian-integration.html#example-error-gauss-legendre",
  "type": "Example",
  "number": "16.4.3",
  "title": "Estimating the accuracy of the Gauss-Legendre integration.",
  "body": " Estimating the accuracy of the Gauss-Legendre integration  Suppose that is a function on and there exists a polynomial of degree such that for all . Estimate the error of the 5-point Gauss-Legendre rule applied to .  The integral triangle inequality yields Also by the triangle inequality, where the last step uses a remark at the end of . Finally, since the degree of is , we have . Combining the above, we conclude that   In general, the estimates above show that if can be approximated within by some polynomial of degree , then the error of -point Gauss-Legendre rule is at most . "
},
{
  "id": "exercises-gaussian-integration",
  "level": "1",
  "url": "exercises-gaussian-integration.html",
  "type": "Exercises",
  "number": "16.5",
  "title": "Homework",
  "body": " Homework    Write a script which, when given an integer , finds and displays the Gauss-Laguerre evaluation points and weights. This can be done by adapting the code in , similarly to exercises in . Note that the right-hand side of a system for weights will involve factorials; in Matlab they can be computed with factorial function, for example factorial(i-1) .     Apply the Gauss-Laguerre rule with to the integral whose exact value is . The script should display the approximation obtained, and the error (the absolute value of the difference between the approximate and exact values).   "
},
{
  "id": "exercises-gaussian-integration-2",
  "level": "2",
  "url": "exercises-gaussian-integration.html#exercises-gaussian-integration-2",
  "type": "Exercise",
  "number": "16.5.1",
  "title": "",
  "body": "  Write a script which, when given an integer , finds and displays the Gauss-Laguerre evaluation points and weights. This can be done by adapting the code in , similarly to exercises in . Note that the right-hand side of a system for weights will involve factorials; in Matlab they can be computed with factorial function, for example factorial(i-1) .  "
},
{
  "id": "exercises-gaussian-integration-3",
  "level": "2",
  "url": "exercises-gaussian-integration.html#exercises-gaussian-integration-3",
  "type": "Exercise",
  "number": "16.5.2",
  "title": "",
  "body": "  Apply the Gauss-Laguerre rule with to the integral whose exact value is . The script should display the approximation obtained, and the error (the absolute value of the difference between the approximate and exact values).  "
},
{
  "id": "section-motivation-adaptive-integration",
  "level": "1",
  "url": "section-motivation-adaptive-integration.html",
  "type": "Section",
  "number": "17.1",
  "title": "Why we need adaptive methods",
  "body": " Why we need adaptive methods  We have developed several methods of numerical integration: a family of Newton-Cotes methods, including Simpson's rule, and Gaussian integration methods. But the theory built so far has some weak points.  One weak point is the error estimation. When an integration rule has order of accuracy, its error can be estimated by some multiple of the derivative of order . For example, Simpson's rule is of order and has error estimate involving the fourth derivative of : where, as with all such estimates, the maximum of the absolute value of the derivative is taken over the interval of integration. But a high-order derivative may be difficult to find, and if found, difficult to estimate. And even if it is easy to find and estimate, the output of may be too conservative or completely useless.   Error of Simpson's method  Apply Simpson's method with to the integral . Find the actual error of the method and compare it to the estimate .  Here and , so according to the formula  The exact value of this integral is . So, the error is , relatively small.  To use the estimate we need the fourth derivative of , which is . The absolute value of this function is maximal at , so . Also, . So says Indeed, but we see that the error estimate does not give the right idea of how large the error actually is.   It gets worse for the integral . The exact value is and Simpson's rule gives so the error is . But since the fourth derivative is , it is unbounded on the interval . So the right hand side of is infinite. It is a true statement that but it is not a useful statement.  The above situation is not uncommon. When one derives an error bound for some numerical method, one has to consider the worst-case scenario , with all possible errors accumulating in the worse possible way. In practice this rarely happens.  Moreover, formulas like are difficult to implement in an algorithm. We know how to differentiate numerically ( ) but finding the absolute maximum of some function on an interval is not easy at all, as we will see later in the course.  The second weak point is that the function being integrated may have discontinuities or other special points, such as corners like . Numerical integration performs worse where the function is not smooth, and this requires using smaller step size around such features (but not elsewhere).  So we need an algorithm that estimates the error of numerical integration and adapts to any unusual features of the function.  "
},
{
  "id": "example-simpson-error-estimate-poor",
  "level": "2",
  "url": "section-motivation-adaptive-integration.html#example-simpson-error-estimate-poor",
  "type": "Example",
  "number": "17.1.1",
  "title": "Error of Simpson’s method.",
  "body": " Error of Simpson's method  Apply Simpson's method with to the integral . Find the actual error of the method and compare it to the estimate .  Here and , so according to the formula  The exact value of this integral is . So, the error is , relatively small.  To use the estimate we need the fourth derivative of , which is . The absolute value of this function is maximal at , so . Also, . So says Indeed, but we see that the error estimate does not give the right idea of how large the error actually is.  "
},
{
  "id": "section-adaptive-integration-error-estimate",
  "level": "1",
  "url": "section-adaptive-integration-error-estimate.html",
  "type": "Section",
  "number": "17.2",
  "title": "Estimating error by using two step sizes",
  "body": " Estimating error by using two step sizes  A practical way to estimate the error of some method of integration is to use it twice with two different step sizes, and compare the results. Typically, one compares the computations with steps and . Say, the first computation resulted in and the second, more accurate, in . If the exact value is , then we expect where is the order of accuracy of the method. By the triangle inequality, which gives us an idea of the error involved in (the more accurate approximation): where the symbol means the error is bounded by something like the right hand side. We do not assert this is an exact inequality, because the relation involving is only approximate.  Let us return to where Simpson's method with was used to get an approximation . Reducing the step size to we get a second approximation: Since Simpson's rule has order , the error of second approximation can be estimated by as follows: Recalling that the exact value is , we see that . So our error estimate, while not rigorous, is much closer to reality than the theoretical estimate .  "
},
{
  "id": "section-adaptive-integration-bisection",
  "level": "1",
  "url": "section-adaptive-integration-bisection.html",
  "type": "Section",
  "number": "17.3",
  "title": "Recursive subdivision algorithm",
  "body": " Recursive subdivision algorithm  The previous section showed how the accuracy of integration can be automatically estimated. Next question is, what can be done when it is insufficient? Using more evaluation points is logical. But if the algorithm keeps the interval of integration the same and just increases the number of points on that interval (e.g., in Simpson's rule), this is not the best way to adapt. Typically, the accuracy is poor because of insufficient smoothness or large derivative at some parts of the interval, while other parts are fine.  A better way to adapt is recursive subdivision .  Given an interval , compute the integral over it and estimate the error.  If the error is small enough, return the result of computation.  If the error is too large, divide the interval into two halves and where , and restart the process from step 1, for each half separately.  This process involves recursion , because at step 3 the function evaluating the integral has to call itself. Schematically it looks like this.  function I = adaptive(f, a, b) I1 = % first computation I2 = % second computation, more accurate if abs(I1 - I2) % \"small enough\" I = I2; else c = (a+b)\/2; I = adaptive(f, a, c) + adaptive(f, c, b); end end  One has to carefully consider when the difference abs(I1 - I2) is small enough . One approach is to ask for small relative error, like abs(I1 - I2) < 1e-6 * abs(I2) . However this risks infinite recursion for functions like near , which is both small and poorly behaved. No matter how small an interval we use, dividing it further will result in a change that is not very small in relative terms. The process terminates with Matlab reporting: Out of memory. The likely cause is an infinite recursion within the program.  If one uses an absolute error bound like abs(I1 - I2) < 1e-6 , there is another issue. We do not know how many subintervals will be used in the process, so even if each of them contributes an error of less than , the total may be significantly higher.  A third approach is to enforce enforce error bound relative to the size of interval , for example abs(I1 - I2) < 1e-6 * (b-a) . This avoids the issue with functions that are problematic and small, such as near . But it runs into the same issue with functions that are problematic and large, such as near .  A combination approach, such as abs(I1 - I2) < 1e-6 * (b-a) + 1e-9 , allows the process to stop if the difference became small relative to interval size or just very small in absolute terms. This allows the subdivision to end even for functions like .  "
},
{
  "id": "section-adaptive-integration-bisection-3",
  "level": "2",
  "url": "section-adaptive-integration-bisection.html#section-adaptive-integration-bisection-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive subdivision recursion "
},
{
  "id": "section-adaptive-integration-rules",
  "level": "1",
  "url": "section-adaptive-integration-rules.html",
  "type": "Section",
  "number": "17.4",
  "title": "Combining two rules",
  "body": " Combining two rules  What combination of two rules should we use for approximations and ? These rules should be of different accuracy; for example, it would be a bad idea to use the left endpoint and right endpoint rules. Both of these are about equally imprecise, so they may give the same answer which is still wrong by some large amount.  One can use, for example, the trapezoidal rule (order 2) and Simpson's rule (order 4). This has an advantage in that of of three evaluation points in Simpson's rule, two are also in trapezoidal rule. So one can compute function values once, for example y = f([a, (a+b)\/2, b]); and obtain both trapezoidal and Simpson's rules from the vector y . This property of two rules being nested (evaluation points of one rule are contained in the other) is valuable for speeding up the computation.  Since the Gauss integration rule is the most accurate of those we discussed, one may decide to use it for both and , just with different number of evaluation points, perhaps and . A downside is that Gauss evaluation points are not nested. In practice, the Gauss rule is used for and the Kronrod rule (also based on orthogonal polynomials, but beyond our scope) is used for . The Kronrod rule is designed to include all of the points used by the Gauss rule, and some additional ones. A popular choice, e.g., in TI graphing calculators, is (G7, K15), meaning 7-point Gauss rule combined with 15-point Kronrod rule. Python library SciPy uses (G10, K21) combination.  "
},
{
  "id": "examples-adaptive-integration",
  "level": "1",
  "url": "examples-adaptive-integration.html",
  "type": "Section",
  "number": "17.5",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   Adaptive Gauss integration  Implement adaptive integration as in using the midpoint rule for and Gauss rule with for . Test it on the integral .   When implementing Gauss rules on a general interval , it helps to introduce the midpoint and half-length . This is because the rule was originally designed for and the linear function from to is . The coefficient will appear in the formulas due to the change of variable formula.  f = @ (x) x.^(-1\/2); fprintf('The integral is %.6f\\n', adaptive(f, 0, 9)); function I = adaptive(f, a, b) c = (a+b)\/2; k = (b-a)\/2; I1 = k*2*f(c); % midpoint, same as Gauss n=1 I2 = k*(f(c - k\/sqrt(3)) + f(c + k\/sqrt(3))); % Gauss n=2 if abs(I1 - I2) < 1e-6 * (b-a) + 1e-9 I = I2; else I = adaptive(f, a, c) + adaptive(f, c, b); end end  Note that the function is not defined at 0 which is an endpoints of the interval of integration. This would be a problem if we used, for example, trapezoidal or Simpson's rules. Not a problem for midpoint or Gauss rules. By the way, the midpoint rule can be viewed as the Gauss rule with 1 point, because the degree 1 Legendre polynomial is , with the zero at the middle of interval  Gauss-Kronrod error estimate  The current version of Wikipedia article Gauss–Kronrod quadrature formula says: The integral is then estimated by the Kronrod rule K15 and the error can be estimated as |G7-K15| . This estimate, while reasonable, is quite conservative: the actual error will be much less. Can you explain why?  "
},
{
  "id": "example-implement-adaptive-gauss",
  "level": "2",
  "url": "examples-adaptive-integration.html#example-implement-adaptive-gauss",
  "type": "Example",
  "number": "17.5.1",
  "title": "Adaptive Gauss integration.",
  "body": " Adaptive Gauss integration  Implement adaptive integration as in using the midpoint rule for and Gauss rule with for . Test it on the integral .   When implementing Gauss rules on a general interval , it helps to introduce the midpoint and half-length . This is because the rule was originally designed for and the linear function from to is . The coefficient will appear in the formulas due to the change of variable formula.  f = @ (x) x.^(-1\/2); fprintf('The integral is %.6f\\n', adaptive(f, 0, 9)); function I = adaptive(f, a, b) c = (a+b)\/2; k = (b-a)\/2; I1 = k*2*f(c); % midpoint, same as Gauss n=1 I2 = k*(f(c - k\/sqrt(3)) + f(c + k\/sqrt(3))); % Gauss n=2 if abs(I1 - I2) < 1e-6 * (b-a) + 1e-9 I = I2; else I = adaptive(f, a, c) + adaptive(f, c, b); end end  Note that the function is not defined at 0 which is an endpoints of the interval of integration. This would be a problem if we used, for example, trapezoidal or Simpson's rules. Not a problem for midpoint or Gauss rules. By the way, the midpoint rule can be viewed as the Gauss rule with 1 point, because the degree 1 Legendre polynomial is , with the zero at the middle of interval "
},
{
  "id": "examples-adaptive-integration-4",
  "level": "2",
  "url": "examples-adaptive-integration.html#examples-adaptive-integration-4",
  "type": "Question",
  "number": "17.5.2",
  "title": "Gauss-Kronrod error estimate.",
  "body": "Gauss-Kronrod error estimate  The current version of Wikipedia article Gauss–Kronrod quadrature formula says: The integral is then estimated by the Kronrod rule K15 and the error can be estimated as |G7-K15| . This estimate, while reasonable, is quite conservative: the actual error will be much less. Can you explain why? "
},
{
  "id": "exercises-adaptive-integration",
  "level": "1",
  "url": "exercises-adaptive-integration.html",
  "type": "Exercises",
  "number": "17.6",
  "title": "Homework",
  "body": " Homework    Estimate the error of computing using Simpson's rule with , according to the error bound .     Calculate the actual error in , that is, the difference between what Simpson's rule gives and the exact value of the integral. Is the actual error similar in size to the error estimate found in ?     Rewrite the adaptive integration script in so that it uses trapezoidal rule for and Simpson's rule for . Test it on the integral to make sure the script returns a correct result.  (For Octave users: recursive functions in Octave have some restrictions: the file must be named as the function itself, and the call to the function must come from the command line or from another file. For example, the Fibonacci recursion in Octave would be saved in file fib.m with the contents function f = fib(n) if n < 1 f = 1; else f = fib(n-1) + fib(n-2); endif endfunction and then one would use it by entering, for example, fib(8) in the command line.)   "
},
{
  "id": "ex-simpson-1",
  "level": "2",
  "url": "exercises-adaptive-integration.html#ex-simpson-1",
  "type": "Exercise",
  "number": "17.6.1",
  "title": "",
  "body": "  Estimate the error of computing using Simpson's rule with , according to the error bound .  "
},
{
  "id": "exercises-adaptive-integration-3",
  "level": "2",
  "url": "exercises-adaptive-integration.html#exercises-adaptive-integration-3",
  "type": "Exercise",
  "number": "17.6.2",
  "title": "",
  "body": "  Calculate the actual error in , that is, the difference between what Simpson's rule gives and the exact value of the integral. Is the actual error similar in size to the error estimate found in ?  "
},
{
  "id": "exercises-adaptive-integration-4",
  "level": "2",
  "url": "exercises-adaptive-integration.html#exercises-adaptive-integration-4",
  "type": "Exercise",
  "number": "17.6.3",
  "title": "",
  "body": "  Rewrite the adaptive integration script in so that it uses trapezoidal rule for and Simpson's rule for . Test it on the integral to make sure the script returns a correct result.  (For Octave users: recursive functions in Octave have some restrictions: the file must be named as the function itself, and the call to the function must come from the command line or from another file. For example, the Fibonacci recursion in Octave would be saved in file fib.m with the contents function f = fib(n) if n < 1 f = 1; else f = fib(n-1) + fib(n-2); endif endfunction and then one would use it by entering, for example, fib(8) in the command line.)  "
},
{
  "id": "section-integration-rectangle",
  "level": "1",
  "url": "section-integration-rectangle.html",
  "type": "Section",
  "number": "18.1",
  "title": "Double integrals over rectangles",
  "body": " Double integrals over rectangles  A rectangle is the easiest two-dimensional domain to integrate over: in Calculus we would compute Suppose we pick two integration rules: one for the interval , say , the other for interval , say . The function here is a placeholder; the rule consists of the choice of evaluation points and their weights. Note that the weights and points depend on the interval, so they will probably be different even if we use the same integration method for both variables. With this setup, the two-dimensional integration rule for this rectangle can be expressed as a double sum:    Set up Simpson's rule over a rectangle  Write out explicitly the sum for the integral of function over the rectangle using the simple Simpson's rule in both variables.   In the direction, the evaluation points are with the weights . In the direction, the evaluation points are with the weights . So the sum has 9 terms:   Given the large number of terms in double sum , we should try to organize such computations efficiently. The first thing to do is to evaluate the function on a rectangular grid formed by all points. A useful Matlab command is meshgrid , which is used as [X, Y] = meshgrid(x, y) where x,y are vectors with evaluation points. The output consists of two matrices X, Y which represent the rectangular grid: X has the x-coordinates of all the grid points, and Y has their y-coordinates. The reason this is useful is that f(X, Y) can now be used to evaluate the function on the entire grid at once (producing a matrix of its values), provided is written so that it can handle matrix input.  Having computed V = f(X, Y) , we need to combine it with weights and to get a single number at the end. Recall in one dimension we would do this as f(x)*w where w is a column vector of x-weights. We should still do this, but to also multiply and sum over the y-weights, we need v*f(X, Y)*w where v is a row of vector of y-weights.   Implement Simpson's rule over a rectangle  Write a Matlab script to integrate the function over the rectangle in , using the integration points and weights from that example.    x = [-2 0 2]; y = [-1 0 1]; w = (2\/3)*[1 4 1]; v = (1\/3)*[1 4 1]; f = @(x, y) sqrt(x.*y + y.^3 + 4); [X, Y] = meshgrid(x, y); disp(v*f(X, Y)*w')  The first four lines do not involve the function; they are setting the stage. The function is evaluated on the rectangular grid and its values are conveniently aggregated using matrix-vector multiplication. The result is 15.8859. WolframAlpha gives 15.9219.   The rectangular grid computation can also be used to quickly plot the function: surf(X, Y, f(X, Y)) does this.  "
},
{
  "id": "example-rectangle-simpson",
  "level": "2",
  "url": "section-integration-rectangle.html#example-rectangle-simpson",
  "type": "Example",
  "number": "18.1.1",
  "title": "Set up Simpson’s rule over a rectangle.",
  "body": " Set up Simpson's rule over a rectangle  Write out explicitly the sum for the integral of function over the rectangle using the simple Simpson's rule in both variables.   In the direction, the evaluation points are with the weights . In the direction, the evaluation points are with the weights . So the sum has 9 terms:  "
},
{
  "id": "example-rectangle-simpson-eval",
  "level": "2",
  "url": "section-integration-rectangle.html#example-rectangle-simpson-eval",
  "type": "Example",
  "number": "18.1.2",
  "title": "Implement Simpson’s rule over a rectangle.",
  "body": " Implement Simpson's rule over a rectangle  Write a Matlab script to integrate the function over the rectangle in , using the integration points and weights from that example.    x = [-2 0 2]; y = [-1 0 1]; w = (2\/3)*[1 4 1]; v = (1\/3)*[1 4 1]; f = @(x, y) sqrt(x.*y + y.^3 + 4); [X, Y] = meshgrid(x, y); disp(v*f(X, Y)*w')  The first four lines do not involve the function; they are setting the stage. The function is evaluated on the rectangular grid and its values are conveniently aggregated using matrix-vector multiplication. The result is 15.8859. WolframAlpha gives 15.9219.  "
},
{
  "id": "section-integration-general-2d",
  "level": "1",
  "url": "section-integration-general-2d.html",
  "type": "Section",
  "number": "18.2",
  "title": "Double integrals over general regions",
  "body": " Double integrals over general regions  One way to evaluate for a general region is to define to be outside of , and integrate this redefined function over some rectangle containing . This approach is problematic because the redefined function will probably be discontinuous on the boundary of , and discontinuities cause large errors in numerical integration rules.  Instead, one can literally adopt the iterated integration approach from calculus courses: do integration in one variable at a time. Suppose the integration is done in variable first ( vertical slicing ). Then the limits of the inner integral will be functions of . These functions will need to be implemented in Matlab, and will be called in a loop.   Implement Simpson's rule over a non-rectangular region  Rewrite to integrate the same function over the interior of the ellipse inscribed in the rectangle . (The ellipse with the equation .) Use composite Simpson's rule with subintervals in both variables.   We need functions for top and bottom boundaries, according to the integral structure In the x-variable, the points and weights are set once. But in the y-direction they are calculated within a loop, because different x-values produce different limits of integration for y. The vector innerint is used below to store the values of the inner integral.  f = @(x, y) sqrt(x.*y + y.^3 + 4); top = @(x) sqrt(1-x.^2\/4); bottom = @(x) -sqrt(1-x.^2\/4); a = -2; b = 2; n = 4; x = linspace(a, b, n+1); w = [1 4 2 4 1]*(b-a)\/(3*n); innerint = zeros(size(x)); for k = 1:numel(x) c = bottom(x(k)); d = top(x(k)); y = linspace(c, d, n+1)'; v = [1 4 2 4 1]*(d-c)\/(3*n); innerint(k) = v*f(x(k), y); end disp(innerint*w');  The result is 11.8764, compared to the WolframAlpha output 12.5419. This is less accurate than what we got for rectangle. Note that all points with are wasted because there is no interval to integrate over with respect to . For this reason, open-ended rules such as Gaussian integration is preferable. Replacing the choice of x, w above with the 3-point Gaussian rule x = [-sqrt(3\/5) 0 sqrt(3\/5)]*(b-a)\/2 + (a+b)\/2; w = [5\/9 8\/9 5\/9]*(b-a)\/2; we get 12.7081, which is much more accurate.  "
},
{
  "id": "example-rectangle-simpson-ellipse",
  "level": "2",
  "url": "section-integration-general-2d.html#example-rectangle-simpson-ellipse",
  "type": "Example",
  "number": "18.2.1",
  "title": "Implement Simpson’s rule over a non-rectangular region.",
  "body": " Implement Simpson's rule over a non-rectangular region  Rewrite to integrate the same function over the interior of the ellipse inscribed in the rectangle . (The ellipse with the equation .) Use composite Simpson's rule with subintervals in both variables.   We need functions for top and bottom boundaries, according to the integral structure In the x-variable, the points and weights are set once. But in the y-direction they are calculated within a loop, because different x-values produce different limits of integration for y. The vector innerint is used below to store the values of the inner integral.  f = @(x, y) sqrt(x.*y + y.^3 + 4); top = @(x) sqrt(1-x.^2\/4); bottom = @(x) -sqrt(1-x.^2\/4); a = -2; b = 2; n = 4; x = linspace(a, b, n+1); w = [1 4 2 4 1]*(b-a)\/(3*n); innerint = zeros(size(x)); for k = 1:numel(x) c = bottom(x(k)); d = top(x(k)); y = linspace(c, d, n+1)'; v = [1 4 2 4 1]*(d-c)\/(3*n); innerint(k) = v*f(x(k), y); end disp(innerint*w');  The result is 11.8764, compared to the WolframAlpha output 12.5419. This is less accurate than what we got for rectangle. Note that all points with are wasted because there is no interval to integrate over with respect to . For this reason, open-ended rules such as Gaussian integration is preferable. Replacing the choice of x, w above with the 3-point Gaussian rule x = [-sqrt(3\/5) 0 sqrt(3\/5)]*(b-a)\/2 + (a+b)\/2; w = [5\/9 8\/9 5\/9]*(b-a)\/2; we get 12.7081, which is much more accurate. "
},
{
  "id": "section-integration-monte-carlo",
  "level": "1",
  "url": "section-integration-monte-carlo.html",
  "type": "Section",
  "number": "18.3",
  "title": "High-dimensional integration: Monte-Carlo method",
  "body": " High-dimensional integration: Monte-Carlo method  Integration over a -dimensional region with large presents new challenges. One is setting up all the boundaries for multiple variables. Another is the number of evaluation points. If we use evaluation points for each of variables, the total number of evaluations is which grows exponentially with dimension. It becomes crucial to not have large , which is why Gaussian integration is often used.  There is an alternative: the Monte-Carlo integration method consists of picking evaluation points at random, from the uniform distribution over the region . Averaging the computed values of , we obtain an approximation to the average of over . To find the integral, multiply the average by the volume of .  In terms of probability theory, the random choice of makes a random variable . This random variable has mean value  equal to the average of over . Its variance  is the average of over . The Central Limit Theorem tells us that the mean of independent samples is approximately normally distributed with mean and variance . In particular, with probability about the sample mean is within three standard deviations of the mean, which means the error of Monte-Carlo method is very likely to be bounded by . On one hand, this tends to zero quite slowly. On another hand, the rate at which it tends to zero is independent of dimension .   Implement the Monte-Carlo method over a high-dimensional cube  Integrate the function over the 10-dimensional unit cube using the Monte-Carlo method.    f = @(x) sqrt(1 + x*x'); d = 10; N = 1e6; s = 0; for k = 1:N x = rand(1, d); s = s + f(x); end disp(s\/N)  The output is, of course, random, but usually it is about 2.069. If your computer handles a million samples ( N = 1e6 ) easily, you may want to try 1e7 . It would be tedious to compute this integral with WolframAlpha; just entering the limits would take long.  The above code is not vectorized: it uses a loop to evaluate at consecutive points. One could generate all these points at once with rand(N, d) and try to get all values of at once. But this requires coding f in such a way that it can consume a matrix and produce a vector of values, and this may be difficult.  Averaging over a sphere  Monte-Carlo method can also be used to average a function over a sphere with the help of normal distribution . Here is a brief summary of random number generators in Matlab:   rand(m, n) generates an matrix of random real numbers taken from the uniform distribution on the interval .   randi([A B], m, n) generates an matrix of random integer numbers taken from the discrete uniform distribution on the finite set .   randn(m, n) generates an matrix of random real numbers taken from the standard normal distribution on the real line.  Try them out with rand(1, 5) , randi([2 7], 1, 5) , and randn(1, 5) to observe the differences in output.  One of the distinguishing features of the normal distribution is the following: if one generates a random -dimensional vector by taking each component independently from the normal distribution, the vector is equally likely to point in any given direction. More precisely, the unit vectors are uniformly distributed over the unit sphere. With Matlab, this process amounts to the computations x = randn(1, d); x = x\/norm(x); Note that x = randn(1, d)\/norm(randn(1, d)) would not do the job, because each use of randn leads to a new random vector.  If one replaces x = rand(1, d) in with the above code for generating random unit vectors, the result is an approximate value of the average of function over the unit sphere .  A remark for those familiar with probability theory: the process of generating vectors uniformly distributed over the unit sphere is based on the normal distribution because of the following property of its probability density function : the product depends only on the norm of vector .  "
},
{
  "id": "section-integration-monte-carlo-4",
  "level": "2",
  "url": "section-integration-monte-carlo.html#section-integration-monte-carlo-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "random variable mean value variance "
},
{
  "id": "example-monte-carlo-box",
  "level": "2",
  "url": "section-integration-monte-carlo.html#example-monte-carlo-box",
  "type": "Example",
  "number": "18.3.1",
  "title": "Implement the Monte-Carlo method over a high-dimensional cube.",
  "body": " Implement the Monte-Carlo method over a high-dimensional cube  Integrate the function over the 10-dimensional unit cube using the Monte-Carlo method.    f = @(x) sqrt(1 + x*x'); d = 10; N = 1e6; s = 0; for k = 1:N x = rand(1, d); s = s + f(x); end disp(s\/N)  The output is, of course, random, but usually it is about 2.069. If your computer handles a million samples ( N = 1e6 ) easily, you may want to try 1e7 . It would be tedious to compute this integral with WolframAlpha; just entering the limits would take long.  The above code is not vectorized: it uses a loop to evaluate at consecutive points. One could generate all these points at once with rand(N, d) and try to get all values of at once. But this requires coding f in such a way that it can consume a matrix and produce a vector of values, and this may be difficult. "
},
{
  "id": "remark-normal-distribution",
  "level": "2",
  "url": "section-integration-monte-carlo.html#remark-normal-distribution",
  "type": "Remark",
  "number": "18.3.2",
  "title": "Averaging over a sphere.",
  "body": "Averaging over a sphere  Monte-Carlo method can also be used to average a function over a sphere with the help of normal distribution . Here is a brief summary of random number generators in Matlab:   rand(m, n) generates an matrix of random real numbers taken from the uniform distribution on the interval .   randi([A B], m, n) generates an matrix of random integer numbers taken from the discrete uniform distribution on the finite set .   randn(m, n) generates an matrix of random real numbers taken from the standard normal distribution on the real line.  Try them out with rand(1, 5) , randi([2 7], 1, 5) , and randn(1, 5) to observe the differences in output.  One of the distinguishing features of the normal distribution is the following: if one generates a random -dimensional vector by taking each component independently from the normal distribution, the vector is equally likely to point in any given direction. More precisely, the unit vectors are uniformly distributed over the unit sphere. With Matlab, this process amounts to the computations x = randn(1, d); x = x\/norm(x); Note that x = randn(1, d)\/norm(randn(1, d)) would not do the job, because each use of randn leads to a new random vector.  If one replaces x = rand(1, d) in with the above code for generating random unit vectors, the result is an approximate value of the average of function over the unit sphere .  A remark for those familiar with probability theory: the process of generating vectors uniformly distributed over the unit sphere is based on the normal distribution because of the following property of its probability density function : the product depends only on the norm of vector . "
},
{
  "id": "exercises-multivariable-integration",
  "level": "1",
  "url": "exercises-multivariable-integration.html",
  "type": "Exercises",
  "number": "18.4",
  "title": "Homework",
  "body": " Homework    Rewrite so that the number of subintervals can be entered by the user. The input should be rejected with error('n must be even') if an odd number is entered. The command mod(n, 2) will be useful for checking this. The code producing the weights w, v will need to be generalized so that it works for general .  Try choosing large enough so that the displayed integral value is 12.5419 (or at least within 0.0001 of this value). In a comment, state the value of which achieved the above. How many evaluation points were used with this ?     Use to find the averages of the following functions over the unit sphere in :  , the sum of coordinates.  , the first coordinate squared.  , the square of the sum of all coordinates.  The Matlab function sum will be useful.  Based on the numeric results, try to guess the exact values of these averages. (You do not need to prove your guesses.)   "
},
{
  "id": "exercises-multivariable-integration-2",
  "level": "2",
  "url": "exercises-multivariable-integration.html#exercises-multivariable-integration-2",
  "type": "Exercise",
  "number": "18.4.1",
  "title": "",
  "body": "  Rewrite so that the number of subintervals can be entered by the user. The input should be rejected with error('n must be even') if an odd number is entered. The command mod(n, 2) will be useful for checking this. The code producing the weights w, v will need to be generalized so that it works for general .  Try choosing large enough so that the displayed integral value is 12.5419 (or at least within 0.0001 of this value). In a comment, state the value of which achieved the above. How many evaluation points were used with this ?  "
},
{
  "id": "exercises-multivariable-integration-3",
  "level": "2",
  "url": "exercises-multivariable-integration.html#exercises-multivariable-integration-3",
  "type": "Exercise",
  "number": "18.4.2",
  "title": "",
  "body": "  Use to find the averages of the following functions over the unit sphere in :  , the sum of coordinates.  , the first coordinate squared.  , the square of the sum of all coordinates.  The Matlab function sum will be useful.  Based on the numeric results, try to guess the exact values of these averages. (You do not need to prove your guesses.)  "
},
{
  "id": "section-ode-intro",
  "level": "1",
  "url": "section-ode-intro.html",
  "type": "Section",
  "number": "19.1",
  "title": "Ordinary differential equations",
  "body": " Ordinary differential equations  Suppose that is an unknown function of variable , with the property that for all . This qualifies as a differential equation, although a very simple one: since the right hand side is explicit, integration with respect to tells us where is some undetermined constant. If we also know the value of at some point (an initial condition ), then can be determined. So, indefinite integration (finding antiderivatives) is a special case of solving differential equations.  Suppose that satisfies for all . This is a more typical example of a differential equation. We cannot find by integrating the right hand side because it is unknown. The solutions of this equation are where is again an undetermined constant.  Usually the argument of unknown function is omitted, so the above equation would be written as . Higher order derivatives may appear, for example . Despite the appearance of terms like , this differential equation is considered to be linear , because the unknown function and its derivative enter it linearly. The simplest equation of a nonlinear differential equation is .  A system of differential equations involves equations with unknown functions, for example This is usually considered as a single equation with an unknown vector-valued function : An equation (or system of equations) involving higher derivatives can be rewritten as a system that involves only the first derivatives. The trick is to consider as another unknown function, say , and add the relation to the system. For example, becomes the system Or in vector form, letting :   We will not need theoretical methods of solving differential equations, but you should be able to rewrite an equation\/system of higher order as a first-order system such as .  A terminological remark: all of the above are called ordinary differential equations (ODE) because there is only one independent variable, . With more than one independent variable such equations involve partial derivatives and are called partial differential equations (PDE). We will not consider PDE in this course.  "
},
{
  "id": "section-ode-intro-2",
  "level": "2",
  "url": "section-ode-intro.html#section-ode-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial condition "
},
{
  "id": "section-ode-intro-4",
  "level": "2",
  "url": "section-ode-intro.html#section-ode-intro-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear nonlinear "
},
{
  "id": "section-ode-intro-5",
  "level": "2",
  "url": "section-ode-intro.html#section-ode-intro-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system "
},
{
  "id": "section-euler-method",
  "level": "1",
  "url": "section-euler-method.html",
  "type": "Section",
  "number": "19.2",
  "title": "Euler’s method",
  "body": " Euler's method  To solve an ODE numerically, we discretize it: instead of variable varying continuously over some interval, we choose step size and work with , , , and so on. (An adaptive method will change the step size based on the outcome of computation; more on this later.) We try to find approximate values of at the points , starting with which is known (initial condition). The idea of Euler's method is geometric: draw the line segment starting at with the slope . When it reaches the abscissa , we have new point . Then process is repeated. In a formula, it is expressed as    Implement Euler's method  Implement Euler's method to solve the differential equation with initial condition . Plot the result on the interval and compare it with the exact solution, which is . Try different step sizes: 0.3, 0.1, 0.01.  Repeat the above for , where the exact solution is .   f = @(t, y) -t*y; % or without - h = 0.3; % or 0.1, 0.01 t = 0:h:3; y0 = 1; y = y0*ones(size(t)); for k = 1:numel(t)-1 y(k+1) = y(k) + h*f(t(k), y(k)); end exact = exp(-t.^2 \/2); % or without - plot(t, y, t, exact) legend('Euler', 'exact')  As shows, a weakness of Euler's method is its tendency to fall behind the solution when the solution is increasing and concave up, or decreasing and concave down. The reason is that it uses the rate of change from point for the entire interval . When applied to an ODE of the form , Euler's method becomes the left endpoint method of integration. So it is not very accurate.  "
},
{
  "id": "example-implement-euler",
  "level": "2",
  "url": "section-euler-method.html#example-implement-euler",
  "type": "Example",
  "number": "19.2.1",
  "title": "Implement Euler’s method.",
  "body": " Implement Euler's method  Implement Euler's method to solve the differential equation with initial condition . Plot the result on the interval and compare it with the exact solution, which is . Try different step sizes: 0.3, 0.1, 0.01.  Repeat the above for , where the exact solution is .   f = @(t, y) -t*y; % or without - h = 0.3; % or 0.1, 0.01 t = 0:h:3; y0 = 1; y = y0*ones(size(t)); for k = 1:numel(t)-1 y(k+1) = y(k) + h*f(t(k), y(k)); end exact = exp(-t.^2 \/2); % or without - plot(t, y, t, exact) legend('Euler', 'exact') "
},
{
  "id": "section-ode-order-accuracy",
  "level": "1",
  "url": "section-ode-order-accuracy.html",
  "type": "Section",
  "number": "19.3",
  "title": "Estimating the accuracy of numeric ODE methods",
  "body": " Estimating the accuracy of numeric ODE methods  Evaluating the accuracy of ODE solution methods is a more complex issue because they involve approximate computations based on the results of previous other approximate computations. A convenient model problem to use is with . Its exact solution at is The approximate solution at will be some other expression. The difference gives us the local error of the method (for one step). The cumulative error can be estimated by multiplying the local error by the necessary number of steps to cover an interval , which is .  Euler's method has , hence , the local error is of second order. The cumulative error is of order . This is consistent with what we know about left endpoint method of integration.  The above does not capture the entire picture. Although errors might accumulate, they do not always do that. When solving an equation like (exponential decay) we get . As long as , we have and so the approximate solution decays exponentially as it should. But if , the solution grows in magnitude instead of decreasing. This leads to the subject of stability of numerical ODE methods, which is beyond our scope.  "
},
{
  "id": "section-ode-order-accuracy-2",
  "level": "2",
  "url": "section-ode-order-accuracy.html#section-ode-order-accuracy-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local error "
},
{
  "id": "section-ode-euler-improved",
  "level": "1",
  "url": "section-ode-euler-improved.html",
  "type": "Section",
  "number": "19.4",
  "title": "Improving Euler’s method",
  "body": " Improving Euler's method  By analogy with Trapezoidal rule for numerical integration, one can try to improve the accuracy by using the average of both endpoints of an interval. That is, we would like to write However, this means we need to know in order to find . So we first make a prediction for and then use it to compute again, more accurately. Namely, we use the original Euler's method to compute predictor  and then compute the corrector  This is one of many predictor-corrector methods for solving ODE. This particular method goes by various names (modified Euler method, improved Euler method); I prefer to call it the trapezoidal method, because this name describes the logic of .   Implement trapezoidal method for ODE  Modify to use the trapezoidal method.   f = @(t, y) -t*y; % or without - h = 0.3; % or 0.1, 0.01 t = 0:h:3; y0 = 1; y = y0*ones(size(t)); for k = 1:numel(t)-1 pred = y(k) + h*f(t(k), y(k)); y(k+1) = y(k) + h\/2*(f(t(k), y(k)) + f(t(k+1), pred)); end exact = exp(-t.^2 \/2); % or without - plot(t, y, t, exact) legend('trapezoid', 'exact')  Theoretical analysis of accuracy confirms the above observation that trapezoidal method is much more accurate. For the model equation it gives , which matches exact solution up to term. Therefore, the cumulative error is of order .  A close relative is midpoint method . In it the trapezoidal corrector is replaced by where is computed as in .  It is not so easy to improve accuracy further. There is a family of higher-order ODE solution methods (Runge-Kutta methods) of which the 4th order method is most popular; it involves several predictor-corrector steps. As with adaptive integration, one can compare the results of two methods of different orders in order to decide if the step size should be reduced. This is what Matlab's ODE solvers do; for example, ode45 is a solver that combines a 4th order method with a 5th order method. We will use it later.  "
},
{
  "id": "section-ode-euler-improved-2",
  "level": "2",
  "url": "section-ode-euler-improved.html#section-ode-euler-improved-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "predictor-corrector "
},
{
  "id": "example-implement-trapezoidal-ode",
  "level": "2",
  "url": "section-ode-euler-improved.html#example-implement-trapezoidal-ode",
  "type": "Example",
  "number": "19.4.1",
  "title": "Implement trapezoidal method for ODE.",
  "body": " Implement trapezoidal method for ODE  Modify to use the trapezoidal method.   f = @(t, y) -t*y; % or without - h = 0.3; % or 0.1, 0.01 t = 0:h:3; y0 = 1; y = y0*ones(size(t)); for k = 1:numel(t)-1 pred = y(k) + h*f(t(k), y(k)); y(k+1) = y(k) + h\/2*(f(t(k), y(k)) + f(t(k+1), pred)); end exact = exp(-t.^2 \/2); % or without - plot(t, y, t, exact) legend('trapezoid', 'exact') "
},
{
  "id": "section-ode-euler-improved-5",
  "level": "2",
  "url": "section-ode-euler-improved.html#section-ode-euler-improved-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "midpoint method "
},
{
  "id": "section-ode-systems",
  "level": "1",
  "url": "section-ode-systems.html",
  "type": "Section",
  "number": "19.5",
  "title": "Solving systems of differential equations",
  "body": " Solving systems of differential equations  Conceptually, any of the above methods can be directly applied to systems of differential equations, just by interpreting as a vector function . The notation becomes awkward: now refer to the second component of , while the value might be denoted . There are also a few changes in Matlab notation regarding y : it will now be a matrix, where rows correspond to components and columns correspond to points of evaluation. The right-hand side function f should return a column vector of the same dimesion .   Implement trapezoidal method for ODE system  Solve the system with initial condition , on the interval using the trapezoidal method with the step . Plot the solution.   f = @(t, y) [t-3*y(2); 2*y(1)]; h = 0.01; t = 0:h:10; y0 = [1; 0]; y = y0*ones(size(t)); for k = 1:numel(t)-1 pred = y(:, k) + h*f(t(k), y(:, k)); y(:, k+1) = y(:, k) + h\/2*(f(t(k), y(:, k)) + f(t(k+1), pred)); end plot(t, y)  The most visible difference is the notation y(:, k) which takes the entire th column of the matrix y . Its mathematical meaning is the approximation to . The initial condition y0 is a column vector, which makes the computation y = y0*ones(size(t)); an outer product: it creates a matrix in which every column is equal to y0 . This is convenient because we need the first column to be equal, and the other columns will be rewritten anyway.  The plot displayed by is a time series plot in which one axis represents the independent variable (usually time) and the other axis shows the components of . The other option we have is to make a phase plot in which each component of gets its own axis, and there is no time axis. This is achieved with plot(y(1,:), y(2,:)) The phase plot may be preferable when the system does not involve time directly (an autonomous system ). Try both kinds of plots for the autonomous system f = @(t, y) [y(2)-y(2)^3; 2*y(1)];  "
},
{
  "id": "example-implement-trapezoidal-ode-system",
  "level": "2",
  "url": "section-ode-systems.html#example-implement-trapezoidal-ode-system",
  "type": "Example",
  "number": "19.5.1",
  "title": "Implement trapezoidal method for ODE system.",
  "body": " Implement trapezoidal method for ODE system  Solve the system with initial condition , on the interval using the trapezoidal method with the step . Plot the solution.   f = @(t, y) [t-3*y(2); 2*y(1)]; h = 0.01; t = 0:h:10; y0 = [1; 0]; y = y0*ones(size(t)); for k = 1:numel(t)-1 pred = y(:, k) + h*f(t(k), y(:, k)); y(:, k+1) = y(:, k) + h\/2*(f(t(k), y(:, k)) + f(t(k+1), pred)); end plot(t, y)  The most visible difference is the notation y(:, k) which takes the entire th column of the matrix y . Its mathematical meaning is the approximation to . The initial condition y0 is a column vector, which makes the computation y = y0*ones(size(t)); an outer product: it creates a matrix in which every column is equal to y0 . This is convenient because we need the first column to be equal, and the other columns will be rewritten anyway. "
},
{
  "id": "section-ode-systems-4",
  "level": "2",
  "url": "section-ode-systems.html#section-ode-systems-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "time series plot phase plot autonomous system "
},
{
  "id": "exercises-ode-euler",
  "level": "1",
  "url": "exercises-ode-euler.html",
  "type": "Exercises",
  "number": "19.6",
  "title": "Homework",
  "body": " Homework    (Theoretical) Rewrite the second-order equation as a system of two first-order equations.     Use the midpoint method  with step size to solve the autonomous system with initial condition on the interval . Display both time series plot and phase plot side by side, for example subplot(1, 2, 1) plot(t, y) subplot(1, 2, 2) plot(y(1,:), y(2,:)) How would you describe the long-term behaviour of this solution?   "
},
{
  "id": "exercises-ode-euler-2",
  "level": "2",
  "url": "exercises-ode-euler.html#exercises-ode-euler-2",
  "type": "Exercise",
  "number": "19.6.1",
  "title": "",
  "body": "  (Theoretical) Rewrite the second-order equation as a system of two first-order equations.  "
},
{
  "id": "exercises-ode-euler-3",
  "level": "2",
  "url": "exercises-ode-euler.html#exercises-ode-euler-3",
  "type": "Exercise",
  "number": "19.6.2",
  "title": "",
  "body": "  Use the midpoint method  with step size to solve the autonomous system with initial condition on the interval . Display both time series plot and phase plot side by side, for example subplot(1, 2, 1) plot(t, y) subplot(1, 2, 2) plot(y(1,:), y(2,:)) How would you describe the long-term behaviour of this solution?  "
},
{
  "id": "section-ode-epidemiology",
  "level": "1",
  "url": "section-ode-epidemiology.html",
  "type": "Section",
  "number": "20.1",
  "title": "Models of an epidemic",
  "body": " Models of an epidemic  A basic model of epidemic divides the population into three groups: susceptible (able to be infected), infected , and removed (not able to be infected). Often group is called recovered but it also contains deceased and vaccinated. One can modify the model in various ways: include a separate group for deceased, allow for a possibility of reinfection, etc. The sum remains constant in time, because other demographic factors such as births do not substantially change the picture of an epidemic.  It is convenient to express as a proportion of total population. This means these quantities are between and and their sum is . An important assumption of the model is that the rate of infection is proportional to the product . This is based on the simplifying idea that any two people in the population are equally likely to meet and transmit the disease, and since is the number of all susceptible-infected pairings, the number of transmissions will be proportional to it. This is not too far from reality when population means, for example, student population on some campus. When modeling the population of a large country, one would have to consider the effects of geography.  Thus, the rate of new infections is where is the coefficient of proportionality that depends on how contagious the disease is and what preventive measures are taken by the population. At the same time, the rate of new recoveries can be reasonably assumed to be , proportional to the number of currently infected. So we have the system with some initial conditions where typically and is small. The constants are the parameters of this system. Their values have a major impact on the long-term behavior of solutions; yet these values are very difficult to estimate in practice (especially ). One might try to estimate them by studying a small-scale outbreak closely and fitting a model to the observed counts of infected and recovered people.  We could solve the system - - numerically using the methods of but to keep the focus on the modeling aspect, we use Matlab's solver ode45 . Its basic syntax is [t, y] = ode45(rhs, [a, b], y0); where rhs is the right hand side of the ODE system, [a, b] is the interval on which solution must be found, and y0 is the initial condition at the left endpoint of that interval. The initial condition can be a single number (when solving a single equation) or a vector (when solving a system). It is preferable to use a row vector for y0 when solving a system, because of how the solution is presented by ode45 : see below. Note that rhs must take two variables in this order: rhs = @(t, y) ... even if the system does not involve time (is autonomous). The output of function rhs must be a column vector (it can be a single number if we are solving one equation).  The solver returns a vector of -values and a vector or matrix of corresponding -values. It is a matrix if we solve a system; in this case y(:,1) approximates the first unknown function, y(:,2) the second, and so on. The -values are not uniformly spaced in general; they are chosen based on the behavior of the system. One can plot the solution with plot(t, y) .  Sometimes it is desirable to compute the solution at specific points of interval , for example at equally spaced points with step . This is achieved by replacing the interval parameter with a vector of -values, for example h = 0.1; [t, y] = ode45(rhs, a:h:b, y0);    Implement SIR model  Use ode45 to solve the equations - - on the interval with , , and .   beta = 0.3; gamma = 0.2; y0 = [0.99, 0.01, 0]; rhs = @(t, y) [-beta*y(1)*y(2); beta*y(1)*y(2) - gamma*y(2); gamma*y(2)]; [t, y] = ode45(rhs, [0, 100], y0); plot(t, y, 'LineWidth', 3) legend('Susceptible', 'Infected', 'Recovered')  In this scenario a part of the population (less then half) escapes the infection because the epidemic ends on its own after the transmission rate drops. Try varying the coefficients and observe the effect.  In reality, is not necessarily constant in time. Let us introduce seasonality into the model by making a periodic function of , for example beta = @(t) 0.3 + 0.2*cos(0.2*t); which is a periodic function that varies between and . Try this out (note that beta should be replaced by beta(t) in the formula for rhs ).  "
},
{
  "id": "section-ode-epidemiology-4",
  "level": "2",
  "url": "section-ode-epidemiology.html#section-ode-epidemiology-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameters "
},
{
  "id": "example-SIR-1",
  "level": "2",
  "url": "section-ode-epidemiology.html#example-SIR-1",
  "type": "Example",
  "number": "20.1.1",
  "title": "Implement SIR model.",
  "body": " Implement SIR model  Use ode45 to solve the equations - - on the interval with , , and .   beta = 0.3; gamma = 0.2; y0 = [0.99, 0.01, 0]; rhs = @(t, y) [-beta*y(1)*y(2); beta*y(1)*y(2) - gamma*y(2); gamma*y(2)]; [t, y] = ode45(rhs, [0, 100], y0); plot(t, y, 'LineWidth', 3) legend('Susceptible', 'Infected', 'Recovered')  In this scenario a part of the population (less then half) escapes the infection because the epidemic ends on its own after the transmission rate drops. Try varying the coefficients and observe the effect. "
},
{
  "id": "section-ode-predator-prey",
  "level": "1",
  "url": "section-ode-predator-prey.html",
  "type": "Section",
  "number": "20.2",
  "title": "Predator-prey models",
  "body": " Predator-prey models  A traditional example of predator-prey relation is foxes and rabbits (in SU neighborhood, it could be hawks and squirrels instead). The Lotka-Volterra model of this relationship involves four positive parameters : The first equation indicates that without foxes, rabbit population would grow at a constant relative rate. As in SIR model, the number of interactions is proportional to the product . Each interaction has a chance of reducing the number of rabbits. These interactions also contribute to the growth of foxes but not necessarily at the same rate (an eaten rabbit does not mean there is now an extra fox; we are not modeling a zombie apocalipse). Finally, the minus sign in ensures that without rabbits, foxes die out.   Implement Lotka-Volterra model  Use ode45 to solve the equations - on the interval with  a = 0.1; b = 0.004; c = 0.2; d = 0.001; y0 = [100, 30];   To the code lines written above, we only have to add  rhs = @(t, y) [a*y(1) - b*y(1)*y(2); -c*y(2) + d*y(1)*y(2)]; [t, y] = ode45(rhs, [0, 100], y0); plot(t, y, 'LineWidth', 3) legend('Rabbits', 'Foxes')  Observing the periodicity of the solution, one may want to summarize it with a phase plot in addition to time-series plot: figure() plot(y(:,1), y(:,2), 'LineWidth', 3) xlabel('Rabbits') ylabel('Foxes')    The Lotka-Volterra model has two equilibrium points : and , meaning that a solution with either of these initial conditions stays constant. The former is mutual extinction, the latter is stable coexistence. But since the solution is periodic, it does not converge to either equilibrium.  "
},
{
  "id": "example-LV-1",
  "level": "2",
  "url": "section-ode-predator-prey.html#example-LV-1",
  "type": "Example",
  "number": "20.2.1",
  "title": "Implement Lotka-Volterra model.",
  "body": " Implement Lotka-Volterra model  Use ode45 to solve the equations - on the interval with  a = 0.1; b = 0.004; c = 0.2; d = 0.001; y0 = [100, 30];   To the code lines written above, we only have to add  rhs = @(t, y) [a*y(1) - b*y(1)*y(2); -c*y(2) + d*y(1)*y(2)]; [t, y] = ode45(rhs, [0, 100], y0); plot(t, y, 'LineWidth', 3) legend('Rabbits', 'Foxes')  Observing the periodicity of the solution, one may want to summarize it with a phase plot in addition to time-series plot: figure() plot(y(:,1), y(:,2), 'LineWidth', 3) xlabel('Rabbits') ylabel('Foxes')   "
},
{
  "id": "section-ode-predator-prey-4",
  "level": "2",
  "url": "section-ode-predator-prey.html#section-ode-predator-prey-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium points "
},
{
  "id": "examples-ode-modeling",
  "level": "1",
  "url": "examples-ode-modeling.html",
  "type": "Section",
  "number": "20.3",
  "title": "Examples and questions",
  "body": " Examples and questions  These are additional examples for reviewing the topic we have covered. When reading each example, try to find your own solution before clicking Answer . There are also questions for reviewing the concepts of this section.   A natural limit of the growth of prey   The original Lotka-Volterra model assumes that on their own, rabbit population would grow exponentially: leads to . But in reality, population is constrained by available resources (food and habitat). Modify the equation by replacing with where is the carrying capacity of the population. Adjust the parameters to d = 0.003; K = 200; and solve the system on the interval .  Vaccination  How could one model the introduction of a vaccine during an epidemic?   "
},
{
  "id": "example-ode-LV-capacity",
  "level": "2",
  "url": "examples-ode-modeling.html#example-ode-LV-capacity",
  "type": "Example",
  "number": "20.3.1",
  "title": "A natural limit of the growth of prey.",
  "body": " A natural limit of the growth of prey   The original Lotka-Volterra model assumes that on their own, rabbit population would grow exponentially: leads to . But in reality, population is constrained by available resources (food and habitat). Modify the equation by replacing with where is the carrying capacity of the population. Adjust the parameters to d = 0.003; K = 200; and solve the system on the interval . "
},
{
  "id": "examples-ode-modeling-4",
  "level": "2",
  "url": "examples-ode-modeling.html#examples-ode-modeling-4",
  "type": "Question",
  "number": "20.3.2",
  "title": "Vaccination.",
  "body": "Vaccination  How could one model the introduction of a vaccine during an epidemic?  "
},
{
  "id": "exercises-ode-modeling",
  "level": "1",
  "url": "exercises-ode-modeling.html",
  "type": "Exercises",
  "number": "20.4",
  "title": "Homework",
  "body": " Homework    (Theoretical) Expand the Lotka-Volterra model - to include a second kind of predator, wolves , which eats both rabbits and foxes. Note that the rate at which wolves eat rabbits would be different from the rate at which they eat foxes.     (Theoretical) The SIR model assumes that any two individuals are equally likely to mix , i.e., to meet and potentially transmit the disease. Modify the model to account for different groups within a population (for example, on-campus and off-campus students). This means having two groups of susceptible individuals: and , and two groups of infected ones: and . The recovered\/removed ones can be all in one group since their interactions do not matter. Since there should be more interaction within each group than between the two groups, the products and should have larger coefficients in the system than and .     Choose one of the two models you constructed in the previous exercises, and implement it in Matlab. Try to choose the coefficients and initial conditions so that the change of size of each group is visible on the plot (meaning the plot does not just show a horizontal line).   "
},
{
  "id": "exercises-ode-modeling-2",
  "level": "2",
  "url": "exercises-ode-modeling.html#exercises-ode-modeling-2",
  "type": "Exercise",
  "number": "20.4.1",
  "title": "",
  "body": "  (Theoretical) Expand the Lotka-Volterra model - to include a second kind of predator, wolves , which eats both rabbits and foxes. Note that the rate at which wolves eat rabbits would be different from the rate at which they eat foxes.  "
},
{
  "id": "exercises-ode-modeling-3",
  "level": "2",
  "url": "exercises-ode-modeling.html#exercises-ode-modeling-3",
  "type": "Exercise",
  "number": "20.4.2",
  "title": "",
  "body": "  (Theoretical) The SIR model assumes that any two individuals are equally likely to mix , i.e., to meet and potentially transmit the disease. Modify the model to account for different groups within a population (for example, on-campus and off-campus students). This means having two groups of susceptible individuals: and , and two groups of infected ones: and . The recovered\/removed ones can be all in one group since their interactions do not matter. Since there should be more interaction within each group than between the two groups, the products and should have larger coefficients in the system than and .  "
},
{
  "id": "exercises-ode-modeling-4",
  "level": "2",
  "url": "exercises-ode-modeling.html#exercises-ode-modeling-4",
  "type": "Exercise",
  "number": "20.4.3",
  "title": "",
  "body": "  Choose one of the two models you constructed in the previous exercises, and implement it in Matlab. Try to choose the coefficients and initial conditions so that the change of size of each group is visible on the plot (meaning the plot does not just show a horizontal line).  "
},
{
  "id": "section-monomial-basis",
  "level": "1",
  "url": "section-monomial-basis.html",
  "type": "Section",
  "number": "21.1",
  "title": "Interpolation in the monomial basis",
  "body": " Interpolation in the monomial basis  Given data points with , where all are different, we are looking for a polynomial of degree such that for . Such interpolating polynomial exists and is unique. Existence will be shown below, and uniqueness is a consequence of the fact that a polynomial of degree less than cannot have distinct zeros. Outside of exceptional cases, the interpolating polynomial will have degree . The main question is how to construct it.  A straightforward way is to do this is to write and solve a linear system for ; it has equations with unknowns. But this process is both slow and numerically fragile; the matrix of the linear system is likely to be ill-conditioned. And even if we could find the coefficients of monomials easily, we do not necessarily want to, for the following reason.  We are used to seeing polynomials written in terms of the monomial basis  , that is, as a linear combination of the monomials. But this basis is ill-suited for numerical computations away from the point , as the following example shows.   Loss of significance in the monomial basis  Consider the polynomial . Expand this formula in the monomial basis and try using it to plot the polynomial on the interval . Also plot the original formula for comparison.  In the code below, c is a vector of coefficients; the ellipsis notation allows it to by split between lines for readability (without , a linebreak would be understood as the beginning of a new row of a matrix). c = [1, -105, 5145, -156065, 3277365, -50471421, 588833245, -5299499205, ... 37096494435, -201969803035, 848273172747, -2699051004195, 6297785676455, ... -10173346092735, 10173346092735, -4747561509943]; d = 15; x = linspace(6, 8, 1000); p = zeros(size(x)); for k=1:d+1 p = p + c(k)*x.^(d+1-k); end subplot(1, 2, 1) plot(x, p) subplot(1, 2, 2) plot(x, (x-7).^15)  There is a catastrophic loss of significance here. If one uses p = polyval(c, x) , the result is not much better, even though this command tries to avoid the loss of significance. Expanding this polynomial in the monomial basis is numerically unwise.   "
},
{
  "id": "section-monomial-basis-4",
  "level": "2",
  "url": "section-monomial-basis.html#section-monomial-basis-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "monomial basis "
},
{
  "id": "example-monomial-basis-loss-of-significance",
  "level": "2",
  "url": "section-monomial-basis.html#example-monomial-basis-loss-of-significance",
  "type": "Example",
  "number": "21.1.1",
  "title": "Loss of significance in the monomial basis.",
  "body": " Loss of significance in the monomial basis  Consider the polynomial . Expand this formula in the monomial basis and try using it to plot the polynomial on the interval . Also plot the original formula for comparison.  In the code below, c is a vector of coefficients; the ellipsis notation allows it to by split between lines for readability (without , a linebreak would be understood as the beginning of a new row of a matrix). c = [1, -105, 5145, -156065, 3277365, -50471421, 588833245, -5299499205, ... 37096494435, -201969803035, 848273172747, -2699051004195, 6297785676455, ... -10173346092735, 10173346092735, -4747561509943]; d = 15; x = linspace(6, 8, 1000); p = zeros(size(x)); for k=1:d+1 p = p + c(k)*x.^(d+1-k); end subplot(1, 2, 1) plot(x, p) subplot(1, 2, 2) plot(x, (x-7).^15)  There is a catastrophic loss of significance here. If one uses p = polyval(c, x) , the result is not much better, even though this command tries to avoid the loss of significance. Expanding this polynomial in the monomial basis is numerically unwise.  "
},
{
  "id": "section-lagrange-polynomial",
  "level": "1",
  "url": "section-lagrange-polynomial.html",
  "type": "Section",
  "number": "21.2",
  "title": "Lagrange interpolating polynomial",
  "body": " Lagrange interpolating polynomial  Thinking of the set of all polynomials of degree less than is a vector space of dimension , we should realize this space may have a better basis for our task than . Given interpolation data with , we can construct one such basis as follows. The Lagrange basis polynomials are They are constructed so that when and . Consequently, in this basis the interpolation problem is solved with the Lagrange interpolating polynomial which obviously satisfies . The coefficients of interpolating polynomial in this basis are just the given -values.  Sum of Lagrange basis polynomials  What is the sum of all Lagrange basis polynomials, that is, ?   For the sake of efficiency and numerical stability, the evaluation of can be arranged as follows. Since the denominators in do not involve , they can be computed in advance. Introduce barycentric weights  which are related to Lagrange basis polynomials as . Rewrite as a quotient Finally, divide the numerator and denominator by the product of all to conclude that the Lagrange interpolating polynomial can be computed as: The idea of computing a polynomial as the quotient of two rational functions is counterintuitive. But the formula wins over the original formula in terms of numerical stability and computational speed, because it avoids a large number of multiplications involving for every point . A slight disadvantage of is that one cannot plug in into , but we know that anyway.   Plot the Lagrange polynomial through 10 points  Plot the Lagrange polynomial each of the following data sets:  the points , ;  the points with as above, and chosen randomly from the standard normal distribution.     n = 10; x = 1:n; y = sin(x); % or y = randn(1, n); w = ones(1, n); for k = 1:n for j = 1:n if j ~= k w(k) = w(k)\/(x(k)-x(j)); end end end p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(min(x)-0.01, max(x)+0.01, 1000); plot(t, p(t), x, y, 'r*')  The double loop computes the weights w which do not involve the argument of the interpolating polynomial p . This argument is called t because x is already used for the data points. The interval for plotting is chosen to contain the given x-values with a small margin on both sides: this helps both visualization and evaluation, because we avoid plugging in . The barycentric evaluation of the polynomial is vectorized. When t is a scalar, t - x' is a column vector. Taking reciprocals element-wise gives another column vector. Dot-product with w or y.*w implements the sums such as .  How does p accept a row vector as t ? The expression t - x' is the difference of a row vector and a column vector; in Matlab this creates a matrix where entry is . Subsequent operations proceed as above, and the result is a row vector of values .   "
},
{
  "id": "section-lagrange-polynomial-2",
  "level": "2",
  "url": "section-lagrange-polynomial.html#section-lagrange-polynomial-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange basis polynomials "
},
{
  "id": "section-lagrange-polynomial-3",
  "level": "2",
  "url": "section-lagrange-polynomial.html#section-lagrange-polynomial-3",
  "type": "Question",
  "number": "21.2.1",
  "title": "Sum of Lagrange basis polynomials.",
  "body": "Sum of Lagrange basis polynomials  What is the sum of all Lagrange basis polynomials, that is, ?  "
},
{
  "id": "example-lagrange-polynomial",
  "level": "2",
  "url": "section-lagrange-polynomial.html#example-lagrange-polynomial",
  "type": "Example",
  "number": "21.2.2",
  "title": "Plot the Lagrange polynomial through 10 points.",
  "body": " Plot the Lagrange polynomial through 10 points  Plot the Lagrange polynomial each of the following data sets:  the points , ;  the points with as above, and chosen randomly from the standard normal distribution.     n = 10; x = 1:n; y = sin(x); % or y = randn(1, n); w = ones(1, n); for k = 1:n for j = 1:n if j ~= k w(k) = w(k)\/(x(k)-x(j)); end end end p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(min(x)-0.01, max(x)+0.01, 1000); plot(t, p(t), x, y, 'r*')  The double loop computes the weights w which do not involve the argument of the interpolating polynomial p . This argument is called t because x is already used for the data points. The interval for plotting is chosen to contain the given x-values with a small margin on both sides: this helps both visualization and evaluation, because we avoid plugging in . The barycentric evaluation of the polynomial is vectorized. When t is a scalar, t - x' is a column vector. Taking reciprocals element-wise gives another column vector. Dot-product with w or y.*w implements the sums such as .  How does p accept a row vector as t ? The expression t - x' is the difference of a row vector and a column vector; in Matlab this creates a matrix where entry is . Subsequent operations proceed as above, and the result is a row vector of values .  "
},
{
  "id": "section-newton-polynomial",
  "level": "1",
  "url": "section-newton-polynomial.html",
  "type": "Section",
  "number": "21.3",
  "title": "Newton interpolating polynomial",
  "body": " Newton interpolating polynomial  Newton polynomial is a third way of constructing an interpolating polynomial of degree through given points. It is still the same polynomial, since there is only one such polynomial. But the method is different because, yet again, we use a different basis. The Newton basis is somewhere between monomial basis and Lagrange basis, in the following sense. Let be the vector of coefficients of interpolating polynomial in some basis; these coefficients are obtained from a linear system where the square matrix depends on the basis.  For the monomial basis, the matrix is dense and often ill-conditioned (it has entries and is known as the Vandermonde matrix .)  For the Lagrange basis, the matrix is the identity matrix, so the coefficients are simply the given values .  For the Newton basis, the matrix is triangular . This means there is some work to be done to obtain from but it is straightforward.  The Newton polynomial basis consists of and so on. An advantage of Newton polynomial is that it is easier to evaluate than Lagrange polynomial. Also, we will see that adding a new data point is very easy to handle because the computation processes one step at a time. A key fact is that when .  We are looking for such that the polynomial has .  At only is nonzero, so we must have   At only are nonzero, so . We can solve this for .  At only are nonzero, so . We can solve this for . And so on.  The process of solving for can be described algorithmically, in terms of getting the vector from the vector . Indeed, we are trying to match two sides of As noted above, . Next, subtract from both sides of and divide them by : The coefficient is the value of the left hand side at . In Matlab terms, it's the second entry of the array of y-values after we applied the subtract-and-divide process to it.  This repeats: we start with c=y and repeat the subtract-and-divide step to turn its term into the coefficients of the Newton polynomial. c = y; for k=2:n c(k:n) = (c(k:n)-c(k-1)).\/(x(k:n)-x(k-1)) end At the end of the loop, the vector c contains the coefficients of Newton polynomial.  Evaluation of Newton's polynomial is done in a similar way, with repeated multiply-and-add process, using one coefficient at a time. Indeed, since (and similarly for higher degrees), the evaluation of p(t) goes as is: Thus: begin with constant function , then in the loop multiply by and add , where goes from to . p = c(n)*ones(size(t)); for k=n-1:-1:1 p = p.*(t-x(k)) + c(k); end While being simpler than barycentric evaluation of the Lagrange polynomial, the evaluation of Newton polynomial does not fit into an anonymous function because it uses a loop.   Plot the Newton polynomial through 11 points  Plot the Newton polynomial for the points , . Then repeat with 5 replaced by 8.   x = -5:5; n = numel(x); y = atan(x); c = y; for k=2:n c(k:n) = (c(k:n)-c(k-1)).\/(x(k:n)-x(k-1)); end t = linspace(min(x)-0.01, max(x)+0.01, 1000); p = c(n)*ones(size(t)); for k=n-1:-1:1 p = p.*(t-x(k)) + c(k); end plot(t, p, x, y, 'r*')   "
},
{
  "id": "section-newton-polynomial-2",
  "level": "2",
  "url": "section-newton-polynomial.html#section-newton-polynomial-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton polynomial basis "
},
{
  "id": "example-newton-polynomial",
  "level": "2",
  "url": "section-newton-polynomial.html#example-newton-polynomial",
  "type": "Example",
  "number": "21.3.1",
  "title": "Plot the Newton polynomial through 11 points.",
  "body": " Plot the Newton polynomial through 11 points  Plot the Newton polynomial for the points , . Then repeat with 5 replaced by 8.   x = -5:5; n = numel(x); y = atan(x); c = y; for k=2:n c(k:n) = (c(k:n)-c(k-1)).\/(x(k:n)-x(k-1)); end t = linspace(min(x)-0.01, max(x)+0.01, 1000); p = c(n)*ones(size(t)); for k=n-1:-1:1 p = p.*(t-x(k)) + c(k); end plot(t, p, x, y, 'r*')  "
},
{
  "id": "exercises-polynomial-interpolation",
  "level": "1",
  "url": "exercises-polynomial-interpolation.html",
  "type": "Exercises",
  "number": "21.4",
  "title": "Homework",
  "body": " Homework    (Theoretical) Write down explicitly the Newton polynomial that interpolates the points , , . Its coefficients will depend on .     (Theoretical) Integrate the polynomial found in over the interval . (It is easier to integrate its general form first and then plug in the formulas for coefficients.) Explain how this is related to Simpson's integration rule.     Use either Lagrange method or Newton method to interpolate the points , where . Then do the same with the points , where . Plot both side by side using subplot . Do you observe a difference in the quality of interpolating curves?   "
},
{
  "id": "exercises-polynomial-interpolation-1",
  "level": "2",
  "url": "exercises-polynomial-interpolation.html#exercises-polynomial-interpolation-1",
  "type": "Exercise",
  "number": "21.4.1",
  "title": "",
  "body": "  (Theoretical) Write down explicitly the Newton polynomial that interpolates the points , , . Its coefficients will depend on .  "
},
{
  "id": "exercises-polynomial-interpolation-2",
  "level": "2",
  "url": "exercises-polynomial-interpolation.html#exercises-polynomial-interpolation-2",
  "type": "Exercise",
  "number": "21.4.2",
  "title": "",
  "body": "  (Theoretical) Integrate the polynomial found in over the interval . (It is easier to integrate its general form first and then plug in the formulas for coefficients.) Explain how this is related to Simpson's integration rule.  "
},
{
  "id": "exercises-polynomial-interpolation-3",
  "level": "2",
  "url": "exercises-polynomial-interpolation.html#exercises-polynomial-interpolation-3",
  "type": "Exercise",
  "number": "21.4.3",
  "title": "",
  "body": "  Use either Lagrange method or Newton method to interpolate the points , where . Then do the same with the points , where . Plot both side by side using subplot . Do you observe a difference in the quality of interpolating curves?  "
},
{
  "id": "section-error-polynomial-interpolation",
  "level": "1",
  "url": "section-error-polynomial-interpolation.html",
  "type": "Section",
  "number": "22.1",
  "title": "Estimating the error of polynomial interpolation",
  "body": " Estimating the error of polynomial interpolation  One of the uses of polynomial interpolation ( ) is to approximate a possible complicated function by a polynomial, interpolating the values of the function at some points . Indeed, this is what we tried in for the functions and , with mixed success. The following theorem is a first step toward understanding what is going on.  Suppose a polynomial of degree less than interpolates a smooth function at some points of an interval . Then for each there exists a point such that where is the th derivative of .  The above theorem is easier to prove than one might expect. If is one of interpolation points, then both sides of are equal to 0. Suppose is not equal to any interpolation point. Then we can let so that . Consider the function and notice that it has at least roots on the interval , namely . Between any two roots of there is a root of : this is Rolle's theorem . Therefore, has at least roots on the interval . Repeat this argument: has at least roots, , has at least 1 root. Call this root and notice that according to , hence , completing the proof of .  What guidance can we extract from ? To minimize the interpolation error, we want the product to be small on the interval . If the points are equally spaced, the product can become large toward the endpoints, as the following Matlab example shows for 11 points on the interval .   Plot the product with equally spaced roots  Plot the product for 11 equally spaced points on the interval .  a = 0; b = 7; n = 11; x = linspace(a, b, n); % interpolation points x1, ..., xn. t = linspace(a, b, 1000); % points for plotting plot(t, prod(t - x'))   Using larger in would only make things worse. This indicates that polynomial interpolation at a large number of equally spaced points is unadvisable. As it was with numerical integration, a smarter choice of points is possible, and once again it is provided by the roots of certain orthogonal polynomials.  "
},
{
  "id": "example-product-plot",
  "level": "2",
  "url": "section-error-polynomial-interpolation.html#example-product-plot",
  "type": "Example",
  "number": "22.1.1",
  "title": "Plot the product with equally spaced roots.",
  "body": " Plot the product with equally spaced roots  Plot the product for 11 equally spaced points on the interval .  a = 0; b = 7; n = 11; x = linspace(a, b, n); % interpolation points x1, ..., xn. t = linspace(a, b, 1000); % points for plotting plot(t, prod(t - x'))  "
},
{
  "id": "section-chebyshev-polynomials-interpolation",
  "level": "1",
  "url": "section-chebyshev-polynomials-interpolation.html",
  "type": "Section",
  "number": "22.2",
  "title": "Chebyshev polynomials and interpolation",
  "body": " Chebyshev polynomials and interpolation  In we studied Legendre polynomials which are orthogonal on the interval in the sense that when . We also use Laguerre polynomials which are orthogonal on with the weight function , meaning that when . The Chebyshev polynomials  are orthogonal on the interval with the weight function , meaning that As for other families of orthogonal polynomials, we have a recursive formula for Chebyshev polynomials: starting with and we can compute the rest as The recursion is simpler than for or : there is no division, so all polynomials have integer coefficients.   Plot Chebyshev polynomials   Recursively find the coefficients of Chebyshev polynomials for . Plot all of them on the interval .  This is a straightforward modification of .  p = [1]; q = [1 0]; x = linspace(-1, 1, 1000); hold on plot(x, polyval(p, x), x, polyval(q, x)); for n = 1:5 r = 2*[q 0] - [0 0 p]; p = q; q = r; plot(x, polyval(r, x)) end hold off   indicates that Chebyshev polynomials oscillate between and on the interval . The following remarkable identity confirms this observation: for all . The proof is by induction. Base of induction is : for and the validity of is obvious. For the inductive step, assume holds for and use : where the second step involves the identity   The right hand side of is zero when is an odd multiple of , hence . Plugging we find that and since the polynomial can have at most real roots, these are all of its roots. They are easy to visualize: draw a semi-circle with interval as diameter, divide it into equal arcs, and project the midpoint of each arc back to the interval.   Chebyshev points of the first kind  The recursive formula shows that the leading coefficient of is . Therefore, where are the roots . It follows that the absolute value of the product is bounded by . It can be proved that is as small as one can get for any choice of points on the interval . This suggests that Chebyshev points should work well for polynomial interpolation, and they do. Let us re-do with random data to illustrate this.   An interpolating polynomial using Chebyshev points  Let be the roots of . Choose randomly from the standard normal distribution, and draw the interpolating polynomial through the points .   The only change to is replacing the x-coordinates.  n = 10; x = cos((2*(1:n)-1)*pi\/(2*n)); y = randn(1, n); w = ones(1, n); for k = 1:n for j = 1:n if j ~= k w(k) = w(k)\/(x(k)-x(j)); end end end p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(min(x)-0.01, max(x)+0.01, 1000); plot(t, p(t), x, y, 'r*')   Running the code several times, we see that the interpolating polynomial behaves reasonably, without unnatural oscillations that come from interpolating at equally spaced points.  "
},
{
  "id": "section-chebyshev-polynomials-interpolation-2",
  "level": "2",
  "url": "section-chebyshev-polynomials-interpolation.html#section-chebyshev-polynomials-interpolation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chebyshev polynomials "
},
{
  "id": "example-computation-chebyshev-coefficients",
  "level": "2",
  "url": "section-chebyshev-polynomials-interpolation.html#example-computation-chebyshev-coefficients",
  "type": "Example",
  "number": "22.2.1",
  "title": "Plot Chebyshev polynomials <span class=\"process-math\">\\(T_n\\)<\/span>.",
  "body": " Plot Chebyshev polynomials   Recursively find the coefficients of Chebyshev polynomials for . Plot all of them on the interval .  This is a straightforward modification of .  p = [1]; q = [1 0]; x = linspace(-1, 1, 1000); hold on plot(x, polyval(p, x), x, polyval(q, x)); for n = 1:5 r = 2*[q 0] - [0 0 p]; p = q; q = r; plot(x, polyval(r, x)) end hold off  "
},
{
  "id": "chebroots1-png",
  "level": "2",
  "url": "section-chebyshev-polynomials-interpolation.html#chebroots1-png",
  "type": "Figure",
  "number": "22.2.2",
  "title": "",
  "body": " Chebyshev points of the first kind "
},
{
  "id": "example-lagrange-polynomial-chebyshev",
  "level": "2",
  "url": "section-chebyshev-polynomials-interpolation.html#example-lagrange-polynomial-chebyshev",
  "type": "Example",
  "number": "22.2.3",
  "title": "An interpolating polynomial using Chebyshev points.",
  "body": " An interpolating polynomial using Chebyshev points  Let be the roots of . Choose randomly from the standard normal distribution, and draw the interpolating polynomial through the points .   The only change to is replacing the x-coordinates.  n = 10; x = cos((2*(1:n)-1)*pi\/(2*n)); y = randn(1, n); w = ones(1, n); for k = 1:n for j = 1:n if j ~= k w(k) = w(k)\/(x(k)-x(j)); end end end p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(min(x)-0.01, max(x)+0.01, 1000); plot(t, p(t), x, y, 'r*')  "
},
{
  "id": "section-chebyshev-extreme-points",
  "level": "1",
  "url": "section-chebyshev-extreme-points.html",
  "type": "Section",
  "number": "22.3",
  "title": "Chebyshev extreme points",
  "body": " Chebyshev extreme points  involves the midpoints of equal arcs, which should remind us of the Midpoint Rule. There is a parallel trapezoidal story, in which we consider the endpoints of all these arcs and give half the weight to the smallest and largest.   Chebyshev points of the second kind  These projections are called Chebyshev extreme points or Chebyshev points of the second kind . Explicitly, they are In Matlab one could write x = cos(linspace(0, pi, n+1)); While the midpoint projections (Chebyshev points of the first kind) are the roots of polynomials , the points are the extreme points of . Indeed, the identity says that attains extreme values when , hence , hence .  Note that in this section, unlike the previous ones, we have points of interpolation, rather than . This is more convenient notation-wise, similarly to how the Trapezoidal rule with subintervals uses points of evaluation, while the Midpoint rule with the same subintervals uses points.  An advantage of using Chebyshev extreme points as the points of interpolation is that one does not need to compute the weights like we did in . For this specific choice of points, the weights in the barycentric formula turn out to be This means that the barycentric formula for interpolation can be written as where primes over summation signs mean that the terms with should be divided by 2 (the trapezoidal adjustment). Formula also works for an arbitrary interval , where the Chebyshev extreme points are Note that the function is in fact a polynomial of degree , even if the formula does not look like it. The straightforward way of expressing a polynomial of high degree, as a sum of powers with constant coefficients, is likely to cause numerical issues (see ), while the barycentric formula is numerically stable.   Interpolate through Chebyshev extreme points  Use the formula to interpolate a few functions such as   on    on    on   on   on  Use Chebyshev extreme points (or more if you prefer).  f = @(x) 1.\/(x.^2+1); % or another f n = 19; % there will be n+1 = 20 points a = -5; % or another a b = 5; % or another b x = cos(linspace(0, pi, n+1)) * (b-a)\/2 + (a+b)\/2; % Chebyshev extreme points y = f(x); w = (-1).^(0:n); % simple formula for weights w([1 end]) = w([1 end])\/2; % trapezoidal adjustment p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(a-0.01, b+0.01, 1000); plot(x, y, 'k*', t, f(t), 'r', t, p(t), 'b')  The plot includes the points of interpolation as black asterisks, the original function is a red curve, and the interpolating polynomial as a blue curve. Often the blue curve follows the red one so precisely that it covers it completely.   "
},
{
  "id": "cheb-points-2-png",
  "level": "2",
  "url": "section-chebyshev-extreme-points.html#cheb-points-2-png",
  "type": "Figure",
  "number": "22.3.1",
  "title": "",
  "body": " Chebyshev points of the second kind "
},
{
  "id": "example-chebyshev-extreme-interpolation",
  "level": "2",
  "url": "section-chebyshev-extreme-points.html#example-chebyshev-extreme-interpolation",
  "type": "Example",
  "number": "22.3.2",
  "title": "Interpolate through Chebyshev extreme points.",
  "body": " Interpolate through Chebyshev extreme points  Use the formula to interpolate a few functions such as   on    on    on   on   on  Use Chebyshev extreme points (or more if you prefer).  f = @(x) 1.\/(x.^2+1); % or another f n = 19; % there will be n+1 = 20 points a = -5; % or another a b = 5; % or another b x = cos(linspace(0, pi, n+1)) * (b-a)\/2 + (a+b)\/2; % Chebyshev extreme points y = f(x); w = (-1).^(0:n); % simple formula for weights w([1 end]) = w([1 end])\/2; % trapezoidal adjustment p = @(t) (y.*w*(t - x').^(-1)) .\/ (w*(t - x').^(-1)); t = linspace(a-0.01, b+0.01, 1000); plot(x, y, 'k*', t, f(t), 'r', t, p(t), 'b')  The plot includes the points of interpolation as black asterisks, the original function is a red curve, and the interpolating polynomial as a blue curve. Often the blue curve follows the red one so precisely that it covers it completely.  "
},
{
  "id": "exercises-chebyshev",
  "level": "1",
  "url": "exercises-chebyshev.html",
  "type": "Exercises",
  "number": "22.4",
  "title": "Homework",
  "body": " Homework    (Theoretical) The Chebyshev polynomials of the second kind  can be defined as follows: , , and after that, (This is the same recursive formula as for , but it produces different polynomials because is different from .) Prove that for all and all .  Hint: follow the proof of .     (Theoretical) Use to prove that the Chebyshev extreme points with are the roots of polynomial .  (This is where the name Chebyshev points of the second kind comes form.)     Suppose we want to draw a smooth parametric curve through 10 given points on xy-plane. The points are represented by vectors of their x- and y-coordinates: X = [1 3 5 6 4 1 0 1 3 5]; Y = [1 0 0 2 4 4 6 9 9 7]; The command plot(X, Y) can join these points by line segments, but that does not make a smooth curve. To obtain a smooth curve, adapt as follows:  Your script should create two interpolating polynomials ( px and py ) on the interval . One is computed from the values X and the other from the values Y .  At the end of the script, the curve through the given points can be displayed with t = linspace(-1, 1, 1000); plot(X, Y, 'r*', px(t), py(t), 'b')  The plot should show a smooth S-shaped curve passing through the points marked by asterisks.   "
},
{
  "id": "exercises-chebyshev-2",
  "level": "2",
  "url": "exercises-chebyshev.html#exercises-chebyshev-2",
  "type": "Exercise",
  "number": "22.4.1",
  "title": "",
  "body": "  (Theoretical) The Chebyshev polynomials of the second kind  can be defined as follows: , , and after that, (This is the same recursive formula as for , but it produces different polynomials because is different from .) Prove that for all and all .  Hint: follow the proof of .  "
},
{
  "id": "exercises-chebyshev-3",
  "level": "2",
  "url": "exercises-chebyshev.html#exercises-chebyshev-3",
  "type": "Exercise",
  "number": "22.4.2",
  "title": "",
  "body": "  (Theoretical) Use to prove that the Chebyshev extreme points with are the roots of polynomial .  (This is where the name Chebyshev points of the second kind comes form.)  "
},
{
  "id": "exercises-chebyshev-4",
  "level": "2",
  "url": "exercises-chebyshev.html#exercises-chebyshev-4",
  "type": "Exercise",
  "number": "22.4.3",
  "title": "",
  "body": "  Suppose we want to draw a smooth parametric curve through 10 given points on xy-plane. The points are represented by vectors of their x- and y-coordinates: X = [1 3 5 6 4 1 0 1 3 5]; Y = [1 0 0 2 4 4 6 9 9 7]; The command plot(X, Y) can join these points by line segments, but that does not make a smooth curve. To obtain a smooth curve, adapt as follows:  Your script should create two interpolating polynomials ( px and py ) on the interval . One is computed from the values X and the other from the values Y .  At the end of the script, the curve through the given points can be displayed with t = linspace(-1, 1, 1000); plot(X, Y, 'r*', px(t), py(t), 'b')  The plot should show a smooth S-shaped curve passing through the points marked by asterisks.  "
},
{
  "id": "section-piecewise-linear-interpolation",
  "level": "1",
  "url": "section-piecewise-linear-interpolation.html",
  "type": "Section",
  "number": "23.1",
  "title": "Piecewise linear interpolation",
  "body": " Piecewise linear interpolation  The current version of SU COVID dashboard uses piecewise linear interpolation . Geometrically this concept is clear: connect the points by straight lines, which is also what Matlab's plot does.   Piecewise linear interpolation  Formally, piecewise linear interpolation means that given some points on an interval and corresponding y-values , we define a function by the piecewise formula where the right hand side is a linear function through two points and . So, instead of interpolating polynomial of degree we use polynomials of degree . The function is a spline of degree 1 meaning it is a piecewise function where the pieces are polynomials of degree 1.  A more abstract approach to the construction of degree 1 spline is as follows:  We have subintervals between data points.  On each subinterval we choose a degree 1 polynomial; this means we have coefficients to choose.  But we want to spline to be continuous, so the values at each interior data point from the left and from the right must match. There are interior data points, so the continuity imposes equations.  Finally, the spline must pass through each of data points. This adds equations.  The total is equations with unknowns, so we expect (and get) a unique solution.   There are infinitely many ways to connect given data points. The function does so by a curve of minimal length, meaning that the graph of is the shortest curve passing through the given data points. This is a reasonable way of connecting the points, but not necessarily the best or most natural way. The corners at the data points do not look natural. The piecewise linear graph does not give much insight into the rate of change of the function because it treats the rate as constant on each interval. For example, given the function values x = 1:5; y = [8 5.5 5.3333 5.75 6.4]; what is the derivative of the function at ? Differentiating the piecewise linear interpolant gives some information but not much. Another question one might ask is: where is the minimum of this function? The minimum of piecewise linear interpolant is exactly at but we understand the actual function probably has its minimum between and .  "
},
{
  "id": "dashboard-pl-png",
  "level": "2",
  "url": "section-piecewise-linear-interpolation.html#dashboard-pl-png",
  "type": "Figure",
  "number": "23.1.1",
  "title": "",
  "body": " Piecewise linear interpolation "
},
{
  "id": "section-cubic-splines",
  "level": "1",
  "url": "section-cubic-splines.html",
  "type": "Section",
  "number": "23.2",
  "title": "Cubic splines",
  "body": " Cubic splines  A cubic spline is a function that is piecewise a degree 3 polynomial, and such that are continuous (have the same value from both sides at the points where pieces meet). In our context of fitting to data points , , it is natural to have each cubic polynomial defined on . The continuity of first and second derivatives means that the graph of a cubic spline has no corners of sudden changes of curvature, it flows quite naturally. Compare the plots below, for the same data set.   Piecewise linear interpolation   Interpolating polynomial   Cubic spline  Cubic splines were also used by the first version of SU COVID dashboard:   Dashboard with splines  Let us count unknowns and equations involved in the construction of a cubic spline.  We have subintervals between data points.  On each subinterval we choose a degree 3 polynomial; this means we have coefficients to choose.  In order for to be continuous at each of interior data points, there are equations to satisfy.  The spline must pass through each of data points. This adds equations.  The total is equations with unknowns, so need two more equations to make the solution unique.    When discussing spline coefficients, it should be noted they are not necessarily the coefficients of powers of . It is more natural and numerically safer to represent the spline on each subinterval in terms of the powers of . That is, where the coefficients are to be determined. Of course, but to find the rest one needs to solve a linear system.  Here are three different ways to add two more equations to the linear system for coefficients; they result in three different kinds of cubic splines:  Require . This is a natural spline .  Require and for some values . This is a clamped spline .  Require to be continuous at and at . This is a not-a-knot spline .   This terminology needs some explanation. The word spline used to refer to a long thin strip of flexible material (e.g., metal) which, if constrained at several points, assumes the shape of a smooth curve passing through these points. Unlike an elastic band which minimizes its length (creating a piecewise linear shape), the spline minimizes its bending energy . A mathematical idealization of the bending energy of a curve is the integral . It can be shown that among all functions (of whatever form) that satisfy the constraints , the natural spline has the smallest value of . This attractive mathematical property earned it the natural name but upon further reflection, the boundary conditions are actually not that natural. If we are interpolating some smooth function , there is no reason to assume that happens to be at the endpoints.  Clamped splines refer to holding the ends of the metal strip with a clamp , which restricts not only its position but also the angle. This spline is useful for for modeling a problem with boundary conditions on the derivative.  The knots of a spline are the transition points where it turns from one polynomial to another. These are often, but not always, the points from the given data. Requiring to be continuous at implies we have the same polynomial on both intervals and (why?), and therefore is not a knot for this spline. Same for . The not-a-knot condition is the standard choice when we do not have any reason to impose other conditions.  Is this a cubic spline?  Is the following function a spline? Why or why not?   Complete the formula for a natural spline  Complete the formula given that it describes a natural spline on .  The continuity of implies that the difference of two polynomials used on both sides of must be a constant multiple of . Therefore, the second polynomial must be of the form . Using the natural spline condition we can find . Thus,   "
},
{
  "id": "pl-example-png",
  "level": "2",
  "url": "section-cubic-splines.html#pl-example-png",
  "type": "Figure",
  "number": "23.2.1",
  "title": "",
  "body": " Piecewise linear interpolation "
},
{
  "id": "interpol-example-png",
  "level": "2",
  "url": "section-cubic-splines.html#interpol-example-png",
  "type": "Figure",
  "number": "23.2.2",
  "title": "",
  "body": " Interpolating polynomial "
},
{
  "id": "spline-example-png",
  "level": "2",
  "url": "section-cubic-splines.html#spline-example-png",
  "type": "Figure",
  "number": "23.2.3",
  "title": "",
  "body": " Cubic spline "
},
{
  "id": "dashboard-spline-png",
  "level": "2",
  "url": "section-cubic-splines.html#dashboard-spline-png",
  "type": "Figure",
  "number": "23.2.4",
  "title": "",
  "body": " Dashboard with splines "
},
{
  "id": "section-cubic-splines-14",
  "level": "2",
  "url": "section-cubic-splines.html#section-cubic-splines-14",
  "type": "Question",
  "number": "23.2.5",
  "title": "Is this a cubic spline?",
  "body": "Is this a cubic spline?  Is the following function a spline? Why or why not?  "
},
{
  "id": "example-find-missing-piece",
  "level": "2",
  "url": "section-cubic-splines.html#example-find-missing-piece",
  "type": "Example",
  "number": "23.2.6",
  "title": "Complete the formula for a natural spline.",
  "body": "Complete the formula for a natural spline  Complete the formula given that it describes a natural spline on .  The continuity of implies that the difference of two polynomials used on both sides of must be a constant multiple of . Therefore, the second polynomial must be of the form . Using the natural spline condition we can find . Thus,  "
},
{
  "id": "section-using-cubic-splines",
  "level": "1",
  "url": "section-using-cubic-splines.html",
  "type": "Section",
  "number": "23.3",
  "title": "Using cubic splines",
  "body": " Using cubic splines  We do not go into the process of finding the coefficients of a cubic spline: it involves solving a linear system with only a few nonzero diagonals. In Matlab, the command spline computes a not-a-knot spline from given data, for example x = 1:7; y = [1 3 2 4 4 1 5]; s = spline(x, y); disp(s.coefs) Each row of the output contains the coefficients A, B, C, D of cubic polynomial which is used on the interval . We could use these coefficients to evaluate the spline, but Matlab can do this automatically with ppval (meaning Piecewise Polynomial VALues ). Specifically, ppval(s, t) evaluates the spline at a value (or vector of values) t . Thus, t = linspace(min(x), max(x), 1000); plot(t, ppval(s, t)) plots the spline computed above.  There is also an option to combine construction and evaluation of a spline into the same command spline , by feeding t as a third argument. That is, spline(x, y, t) constructs a spline from x, y and immediately evaluates it at t . For example: t = linspace(min(x), max(x), 1000); plot(t, spline(x, y, t)) We can also plot it with the original data points marked: plot(t, spline(x, y, t), x, y, 'r*')   How else could we use the spline data? The formula shows that , which is the entry of the 3rd column of matrix s.coefs . Try s.coefs(:, 3)' and compare the values with the slope of the spline at the data points. This is another approach to numerical differentiation , different from what we did in : given discrete data, fit a spline to it and differentiate the spline.  Looking at the coefficients, we can also find the critical points of a spline, answering the question raised at the end of . Indeed, we have coefficients of a cubic polynomial, so its derivative is a quadratic polynomial with coefficients . We can find its roots with roots but one must be careful to check if a root indeed falls into the subinterval on which this polynomial is used.  Critical points of a cubic spline  Find and plot the critical points of the spline constructed from the data  x = 1:7; y = [1 3 2 4 4 1 5];   Since the number of critical points is not known in advance, we can gather them by appending each new critical point to the vector critpts . To qualify for inclusion, a root of derivative of the cubic polynomial used on must be real and must lie within this interval.  s = spline(x, y); critpts = []; for k=1:numel(x)-1 r = roots([3 2 1].*s.coefs(k, 1:3)); for j = 1:numel(r) if isreal(r(j)) && r(j) >= 0 && r(j) <= x(k+1)-x(k) critpts = [critpts, x(k)+r(j)]; end end end t = linspace(min(x), max(x), 1000); plot(t, ppval(s, t), x, y, 'r+', critpts, ppval(s, critpts), 'k*')  The script uses ppval since the spline s is already constructed; calling spline(x, y, ...) repeatedly with the same x, y seems wasteful.   "
},
{
  "id": "example-critical-points-spline",
  "level": "2",
  "url": "section-using-cubic-splines.html#example-critical-points-spline",
  "type": "Example",
  "number": "23.3.1",
  "title": "Critical points of a cubic spline.",
  "body": "Critical points of a cubic spline  Find and plot the critical points of the spline constructed from the data  x = 1:7; y = [1 3 2 4 4 1 5];   Since the number of critical points is not known in advance, we can gather them by appending each new critical point to the vector critpts . To qualify for inclusion, a root of derivative of the cubic polynomial used on must be real and must lie within this interval.  s = spline(x, y); critpts = []; for k=1:numel(x)-1 r = roots([3 2 1].*s.coefs(k, 1:3)); for j = 1:numel(r) if isreal(r(j)) && r(j) >= 0 && r(j) <= x(k+1)-x(k) critpts = [critpts, x(k)+r(j)]; end end end t = linspace(min(x), max(x), 1000); plot(t, ppval(s, t), x, y, 'r+', critpts, ppval(s, critpts), 'k*')  The script uses ppval since the spline s is already constructed; calling spline(x, y, ...) repeatedly with the same x, y seems wasteful.  "
},
{
  "id": "exercises-spline-interpolation",
  "level": "1",
  "url": "exercises-spline-interpolation.html",
  "type": "Exercises",
  "number": "23.4",
  "title": "Homework",
  "body": " Homework    (Theoretical) Complete the following formula for a clamped spline with boundary conditions and :      Adapt to find and plot the inflection points of the same cubic spline (these are the points where the second derivative is zero.)   "
},
{
  "id": "exercises-spline-interpolation-2",
  "level": "2",
  "url": "exercises-spline-interpolation.html#exercises-spline-interpolation-2",
  "type": "Exercise",
  "number": "23.4.1",
  "title": "",
  "body": "  (Theoretical) Complete the following formula for a clamped spline with boundary conditions and :   "
},
{
  "id": "exercises-spline-interpolation-3",
  "level": "2",
  "url": "exercises-spline-interpolation.html#exercises-spline-interpolation-3",
  "type": "Exercise",
  "number": "23.4.2",
  "title": "",
  "body": "  Adapt to find and plot the inflection points of the same cubic spline (these are the points where the second derivative is zero.)  "
},
{
  "id": "section-drawbacks-spline-interpolation",
  "level": "1",
  "url": "section-drawbacks-spline-interpolation.html",
  "type": "Section",
  "number": "24.1",
  "title": "Weak points of spline interpolation",
  "body": " Weak points of spline interpolation  Looking closely at we can notice that the blue curve is not quite an increasing function: there is a small interval in which it decreases. This is not really logical since the curve follows the data (cumulative number of recovered cases) which cannot decrease. A smaller example is below.  x = 1:6; y = [0 0 1 1 2 2]; t = linspace(1, 6, 1000); plot(t, spline(x, y, t), x, y, 'r*')  So, cubic splines do not preserve monotonicity (while piecewise linear interpolation does). Note that SU COVID dashboard later replaced splines with piecewise linear functions, which are monotone when the data values are monotone.  Another issue is that spline interpolation may produce negative values from positive data .  x = 1:6; y = [9 9 1 1 9 9]; disp(spline(x, y, 3.5))  The result is . This becomes a serious issue if the quantity being interpolated cannot in principle be negative (mass, density, number of people) and if the way in which the data is used relies on it not being negative (maybe one takes square root or plots the data on logarithmic scale).  Note again that this is something that piecewise linear interpolation would not do. A piecewise linear function through points with stays positive.  "
},
{
  "id": "section-b-splines",
  "level": "1",
  "url": "section-b-splines.html",
  "type": "Section",
  "number": "24.2",
  "title": "Hat functions and B-splines",
  "body": " Hat functions and B-splines  We look for a way to smoothly model the data while avoiding the issues in . To simplify the computations, assume the x-values are equally spaced, which means that after shifting and scaling we can assume for . Then the linear interpolation can be expressed as the sum where is a function whose graph is a triangle with base . Functions like are sometimes called the hat functions based on the appearance of the graph. An important feature of the functions is that they add up to everywhere on the interval (why?). This ensures that interpolation of constant values produces a constant function, which is a necessary condition for the algorithm to preserve monotonicity of data.  As we know, piecewise linear interpolation lacks smoothness, and this is seen in the angular shape of the hat function . We would like to replace it with something of similar shape but smooth. Here is a piecewise cubic function which does the job. Its graph on is shown below, with the hat function for comparison. In technical terms, both and are cardinal B-splines of degrees 1 and 3, respectively.   Cardinal B-splines of degrees 1 and 3  Smoothness of cardinal B-spline  Despite the presence of absolute value and , both potential sources of non-smoothness, the function is differentiable and even twice differentiable, with continuous . (This qualifies it as a cubic spline.) Why is this so?   Before considering how the smooth bump function was constructed, let us try using it. One is the straightforward approach: replace with in the formula , obtaining a cubic spline The first thing to notice is that the spline  does not interpolate the data . Indeed, from we have and , which implies that which is a Simpson-style averaging of neighboring -values. It may be disappointing not to have but on the other hand, averaging raw data values within some moving window is a standard approach to eliminating noise and short-term fluctuations.  It is also possible to derive an interpolating spline as a linear combination of bumps , by solving a simple linear system. Indeed, we can find the coefficients such that by solving the system where is the tridiagonal matrix But this brings back the kind of splines in with the deficiencies noted earlier, so we do not pursue this approach further.  As written, the formula has an issue at the boundary, where instead of averages we get because there is no or . This is an issue because, for example, with constant values we get , failing monotonicity. To fix the boundary behavior, we should extend the sum with two more terms: This is typical when computing with values on a grid: sometimes our formulas refer to out-of-grid points, and instead of just ignoring such terms we should somehow extrapolate the known values outside of the grid.   Implement cubic spline approximation  Use the examples from to demonstrate that the spline formula preserves monotonicity and positivity.  B = @(t) (1\/6)*max(0, 2-abs(t)).^3 - (2\/3)*max(0, 1-abs(t)).^3; x = 1:6; y = [0 0 1 1 2 2]; xe = [x(1)-1, x, x(end)+1]; ye = [y(1), y, y(end)]; t = linspace(min(x), max(x), 1000); S = ye*B(t - xe'); plot(t, S, x, y, 'r*')  As discussed above, the x-y values are extended by two points to the left and right; this is what the vectors xe and ye represent. After that, the spline is evaluating in a single vectorized computation. The plot shows a smoothly increasing function. Trying this again with y = [9 9 1 1 9 9] we get a smooth positive function.   "
},
{
  "id": "B-spline-png",
  "level": "2",
  "url": "section-b-splines.html#B-spline-png",
  "type": "Figure",
  "number": "24.2.1",
  "title": "",
  "body": " Cardinal B-splines of degrees 1 and 3 "
},
{
  "id": "section-b-splines-5",
  "level": "2",
  "url": "section-b-splines.html#section-b-splines-5",
  "type": "Question",
  "number": "24.2.2",
  "title": "Smoothness of cardinal B-spline.",
  "body": "Smoothness of cardinal B-spline  Despite the presence of absolute value and , both potential sources of non-smoothness, the function is differentiable and even twice differentiable, with continuous . (This qualifies it as a cubic spline.) Why is this so?  "
},
{
  "id": "example-approximating-spline",
  "level": "2",
  "url": "section-b-splines.html#example-approximating-spline",
  "type": "Example",
  "number": "24.2.3",
  "title": "Implement cubic spline approximation.",
  "body": " Implement cubic spline approximation  Use the examples from to demonstrate that the spline formula preserves monotonicity and positivity.  B = @(t) (1\/6)*max(0, 2-abs(t)).^3 - (2\/3)*max(0, 1-abs(t)).^3; x = 1:6; y = [0 0 1 1 2 2]; xe = [x(1)-1, x, x(end)+1]; ye = [y(1), y, y(end)]; t = linspace(min(x), max(x), 1000); S = ye*B(t - xe'); plot(t, S, x, y, 'r*')  As discussed above, the x-y values are extended by two points to the left and right; this is what the vectors xe and ye represent. After that, the spline is evaluating in a single vectorized computation. The plot shows a smoothly increasing function. Trying this again with y = [9 9 1 1 9 9] we get a smooth positive function.  "
},
{
  "id": "section-construct-cardinal-splines",
  "level": "1",
  "url": "section-construct-cardinal-splines.html",
  "type": "Section",
  "number": "24.3",
  "title": "Construction of cardinal B-splines",
  "body": " Construction of cardinal B-splines  The formula deserves some explanation. The idea is to start with the linear interpolant (degree 1 spline) defined by and repeatedly smoothen it using a moving average with a window of size :  and so on. The fundamental theorem of calculus shows that in particular has continuous first derivative. Similarly, so is continuous as well.  The function defined by is the approximating cubic spline discussed above, while is a quadratic spline. But these integral formulas should be simplified for practical use. By linearity of integrals, where the integral can be evaluated explicitly: it is a cardinal B-spline of degree 2, which can be written out Quadratic B-splines are awkward to use because of the fractional transition points above, which do not align with grid points. Averaging again by improves the situation and leads, after tedious case-by-case computations, to the formula .  "
},
{
  "id": "section-construct-cardinal-splines-2",
  "level": "2",
  "url": "section-construct-cardinal-splines.html#section-construct-cardinal-splines-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moving average "
},
{
  "id": "exercises-spline-approximation",
  "level": "1",
  "url": "exercises-spline-approximation.html",
  "type": "Exercises",
  "number": "24.4",
  "title": "Homework",
  "body": " Homework    Following , plot an approximating cubic spline for the data , . For comparison, also plot the actual function on the interval . How accurate is the approximation? Plot the difference of the spline and arctangent to answer this question.  (Recall that arctangent is atan in Matlab.)     Let us revisit , changing it to the following.  k = 2; A = rand(k, 1e7) - 1\/2; S = sum(A, 1); histogram(S, 100, 'Normalization', 'pdf')  (If using Octave where histogram is not available, replace the last line with hist(S, 100, 100\/k) .)  This produces a normalized histogram of sample sums, with numbers in each sample. The numbers are chosen from uniform distribution on . Normalization means that the area under the histogram is 1 (in probability terms, this histogram approximates the probability density function of sample sums, hence the option pdf .)  What should the value be in order for the histogram to resemble the cardinal B-spline of degree 3 shown in ? Find the answer experimentally after trying a few values of . Having found a suitable , confirm your guess by adding the graph of the cardinal spline to the histogram plot (recall hold on \/ hold off are useful for combining graphs.)   "
},
{
  "id": "exercises-spline-approximation-2",
  "level": "2",
  "url": "exercises-spline-approximation.html#exercises-spline-approximation-2",
  "type": "Exercise",
  "number": "24.4.1",
  "title": "",
  "body": "  Following , plot an approximating cubic spline for the data , . For comparison, also plot the actual function on the interval . How accurate is the approximation? Plot the difference of the spline and arctangent to answer this question.  (Recall that arctangent is atan in Matlab.)  "
},
{
  "id": "exercises-spline-approximation-3",
  "level": "2",
  "url": "exercises-spline-approximation.html#exercises-spline-approximation-3",
  "type": "Exercise",
  "number": "24.4.2",
  "title": "",
  "body": "  Let us revisit , changing it to the following.  k = 2; A = rand(k, 1e7) - 1\/2; S = sum(A, 1); histogram(S, 100, 'Normalization', 'pdf')  (If using Octave where histogram is not available, replace the last line with hist(S, 100, 100\/k) .)  This produces a normalized histogram of sample sums, with numbers in each sample. The numbers are chosen from uniform distribution on . Normalization means that the area under the histogram is 1 (in probability terms, this histogram approximates the probability density function of sample sums, hence the option pdf .)  What should the value be in order for the histogram to resemble the cardinal B-spline of degree 3 shown in ? Find the answer experimentally after trying a few values of . Having found a suitable , confirm your guess by adding the graph of the cardinal spline to the histogram plot (recall hold on \/ hold off are useful for combining graphs.)  "
},
{
  "id": "section-periodic-functions",
  "level": "1",
  "url": "section-periodic-functions.html",
  "type": "Section",
  "number": "25.1",
  "title": "Periodic functions and trigonometric polynomials",
  "body": " Periodic functions and trigonometric polynomials  A function is periodic if there exists a constant such that for all . Examples include , , and their combinations called trigonometric polynomials : The function has period . Using Euler's identity one can express trigonometric polynomials in complex exponential form : Indeed, the identity implies and , so the expression can be rewritten as a linear combination of complex exponentials as in . Conversely, expression can be rewritten in terms of trigonometric functions using .  It is important to recognize that even if the coefficients were real, the corresponding coefficients will in general be complex. Complex numbers in Matlab can be entered directly like 3 + 4i (note there is no * between 4 and i). If you have variables a, b and want to construct , then a + 1i*b works. Also, the letter j can be used in place of i .  The most common values of are and . Each choice makes some formulas simpler at the cost of making other formulas more complicated. This is why the theory of Fourier transform is presented in different sources with different notational conventions.   Plot a random trigonometric polynomial  Plot a random trigonometric polynomial of degree 3, using complex exponential form with complex coefficients taken from the normal distribution. Note that Matlab command plot(z) when given a single vector z with complex values, interprets it as plot(real(z), imag(z)) .  This example uses (the choice of period does not change these plots). Note the vectorized evaluation c*exp(1i*k'*t) and recognize the role of transpose k' here.  n = 3; c = randn(1, 2*n+1) + 1i*randn(1, 2*n+1); t = linspace(0, 2*pi, 1000); k = -n:n; z = c*exp(1i*k'*t); plot(z)    "
},
{
  "id": "section-periodic-functions-2",
  "level": "2",
  "url": "section-periodic-functions.html#section-periodic-functions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic "
},
{
  "id": "example-plot-trig-polynomial",
  "level": "2",
  "url": "section-periodic-functions.html#example-plot-trig-polynomial",
  "type": "Example",
  "number": "25.1.1",
  "title": "Plot a random trigonometric polynomial.",
  "body": " Plot a random trigonometric polynomial  Plot a random trigonometric polynomial of degree 3, using complex exponential form with complex coefficients taken from the normal distribution. Note that Matlab command plot(z) when given a single vector z with complex values, interprets it as plot(real(z), imag(z)) .  This example uses (the choice of period does not change these plots). Note the vectorized evaluation c*exp(1i*k'*t) and recognize the role of transpose k' here.  n = 3; c = randn(1, 2*n+1) + 1i*randn(1, 2*n+1); t = linspace(0, 2*pi, 1000); k = -n:n; z = c*exp(1i*k'*t); plot(z)   "
},
{
  "id": "section-fourier-series",
  "level": "1",
  "url": "section-fourier-series.html",
  "type": "Section",
  "number": "25.2",
  "title": "Fourier series",
  "body": " Fourier series  Using the period , we find that the functions are orthonormal with respect to the inner product (For other periods they are orthogonal but not orthonormal.) This makes it easy to compute the Fourier coefficients of a given function in the basis : For sufficiently nice periodic functions (having a continuous derivative is enough), the Fourier series  converges to function .   Compute Fourier coefficients  Use the built-in command integral to compute the Fourier coefficients for for the complex-valued function Then plot both the function and its partial Fourier sum for comparison.   The syntax of integral is integral(@(x) ..., a, b) where are the limits of integration and the function is expressed in a form that allows vectorized evaluation. Here is the computation of Fourier coefficient  f = @(x) sqrt(1 + cos(2*pi*x)) + 1i*log(2 + sin(2*pi*x)); n = 3; c = zeros(1, 2*n+1); for k = -n:n c(k+n+1) = integral(@(x) f(x).*exp(-2*pi*1i*k*x), 0, 1); end disp(c)  Then we combine both complex plots using different colors.  t = linspace(0, 1, 1000); k = -n:n; p = c*exp(2*pi*1i*k'*t); hold on plot(f(t)) plot(p, 'r') hold off  Note that the lack of smoothness at one point slows down the convergence of Fourier series. If the function had sqrt(1.1 + cos(2*pi*x)) instead, the convergence would be much better.    "
},
{
  "id": "section-fourier-series-2",
  "level": "2",
  "url": "section-fourier-series.html#section-fourier-series-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier coefficients Fourier series "
},
{
  "id": "example-compute-fourier-coefficients",
  "level": "2",
  "url": "section-fourier-series.html#example-compute-fourier-coefficients",
  "type": "Example",
  "number": "25.2.1",
  "title": "Compute Fourier coefficients.",
  "body": " Compute Fourier coefficients  Use the built-in command integral to compute the Fourier coefficients for for the complex-valued function Then plot both the function and its partial Fourier sum for comparison.   The syntax of integral is integral(@(x) ..., a, b) where are the limits of integration and the function is expressed in a form that allows vectorized evaluation. Here is the computation of Fourier coefficient  f = @(x) sqrt(1 + cos(2*pi*x)) + 1i*log(2 + sin(2*pi*x)); n = 3; c = zeros(1, 2*n+1); for k = -n:n c(k+n+1) = integral(@(x) f(x).*exp(-2*pi*1i*k*x), 0, 1); end disp(c)  Then we combine both complex plots using different colors.  t = linspace(0, 1, 1000); k = -n:n; p = c*exp(2*pi*1i*k'*t); hold on plot(f(t)) plot(p, 'r') hold off  Note that the lack of smoothness at one point slows down the convergence of Fourier series. If the function had sqrt(1.1 + cos(2*pi*x)) instead, the convergence would be much better.   "
},
{
  "id": "section-discrete-fourier-transform",
  "level": "1",
  "url": "section-discrete-fourier-transform.html",
  "type": "Section",
  "number": "25.3",
  "title": "Discrete Fourier Transform",
  "body": " Discrete Fourier Transform  There is a discrete version of the Fourier series theory outlined in . In it we fix an integer and replace a function by its sampled values , . The discrete version of inner product is The functions , , are orthogonal with respect to this inner product. (Not orthonormal, as .) Note we only need of these functions (why?).  The Fourier coefficients of a given discretized function are computed as: and from there, the function is precisely reconstructed as Some people put in instead of , and some put in both, for symmetry.  The computation of Fourier coefficients amounts to matrix-vector multiplication where is the Fourier matrix defined as follows. Let . The matrix has size , with entries given by . Explicitly, Normally, matrix-vector multiplication takes on the order of operations. The Fast Fourier Transform (FFT) is an algorithm that uses the specific structure of to reduce the number of computations to something of the order . The reconstruction of function values from coefficients is very similar. Besides the factor of , the only other difference is replacing matrix with matrix of the same form but with .  In Matlab, the computation is implemented by command fft while is implemented by ifft ( i for inverse ). Try applying them to standard basis vectors and compare the output to the columns of or . (The commands also allow matrix input: fft(eye(n)) and ifft(eye(n)) return the matrices and .)  "
},
{
  "id": "section-discrete-fourier-transform-3",
  "level": "2",
  "url": "section-discrete-fourier-transform.html#section-discrete-fourier-transform-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier coefficients "
},
{
  "id": "section-discrete-fourier-transform-4",
  "level": "2",
  "url": "section-discrete-fourier-transform.html#section-discrete-fourier-transform-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier matrix Fast Fourier Transform "
},
{
  "id": "section-trigonometric-interpolation",
  "level": "1",
  "url": "section-trigonometric-interpolation.html",
  "type": "Section",
  "number": "25.4",
  "title": "Trigonometric Interpolation",
  "body": " Trigonometric Interpolation  Discrete Fourier Transform allows us to interpolate any periodic function by a trigonometric polynomial by first discretizing it as , , applying FFT to compute Fourier coefficients , and then constructing a trigonometric polynomial with these coefficients. By literally following the formula we arrive at the trigonometric polynomial This indeed interpolates the function but not in a good way, as the following code shows. It interpolates the function in using n=9 points, which are marked as black asterisks.  f = @(x) sqrt(1 + cos(2*pi*x)) + 1i*log(2 + sin(2*pi*x)); n = 9; z = f((0:n-1)\/n); c = fft(z); k = 0:n-1; p = @(t) c\/n*exp(2*pi*1i*k'*t); t = linspace(0, 1, 1000); hold on plot(f(t)) plot(p(t), 'r') plot(z, 'k*') hold off  The problem is that our formula for p involves complex exponential functions with frequencies  which is not how trigonometric polynomials normally look. The high frequencies create the oscillatory behavior which, while matching the data, does not create a reasonable interpolant.  A key term here is aliasing , which is the fact that different trigonometric (or complex exponential) functions may coincide when restricted to a discrete grid of points ( illustration ). Specifically, In order to avoid extraneous oscillations we should subtract from large elements of the vector k = 0:n-1 above, so that instead of k = [0 1 2 3 4 5 6 7 8]; we have k = [0 1 2 3 4 -4 -3 -2 -1]; Replacing k = 0:n-1 in the above code with k = [0:(n-1)\/2 (1-n)\/2:-1]; corrects the issue.  The previous paragraph operates with an odd number which is more natural in this context because trigonometric polynomials normally contain an odd number of terms. If we have an even number of points to interpolate through, the aliasing gets more involved: for example, with points we have frequencies 0, 1, 2, 3, 4, 5 and it is not clear whether to keep as is or to replace it with . The best approach is to split this term in two, so that the list of coefficients becomes 0, 1, 2, 3, -3, -2, -1. The corresponding Fourier coefficient is split in two halves accordingly: c = [c(1:n\/2) c(n\/2+1)\/2 c(n\/2+1)\/2 c(n\/2+2:end)]; k = [0:n\/2 -n\/2:-1]; If it is not known whether is even or odd, one can use a conditional statement to handle both cases:  if mod(n, 2) == 1 k = [0:(n-1)\/2 (1-n)\/2:-1]; else c = [c(1:n\/2) c(n\/2+1)\/2 c(n\/2+1)\/2 c(n\/2+2:end)]; k = [0:n\/2 -n\/2:-1]; end   Create a closed curve similar to the logo of Meta  Choose a few points in the complex plane so that trigonometric interpolation through these points creates a curve similar to Meta logo .   It is natural to place the self-intersection point at , then the points of interpolation will be symmetric about the vertical (imaginary) axis. Trial and error leads to the choice z = [6, 6-6i, 2-3i, -2+3i, -6, -6-6i, -2-3i, 2+3i]; which describes the curve starting from the upper right part, going down, then diagonally to top left, then down, and diagonally to top right again. We have points, so the above discussion about odd\/even distinction is relevant. For the sake of reusability, the code uses a conditional statement that can handle both odd and even cases.  n = numel(z); c = fft(z); if mod(n, 2) == 1 k = [0:(n-1)\/2 (1-n)\/2:-1]; else c = [c(1:n\/2) c(n\/2+1)\/2 c(n\/2+1)\/2 c(n\/2+2:end)]; k = [0:n\/2 -n\/2:-1]; end p = @(t) c\/n*exp(2*pi*1i*k'*t); t = linspace(0, 1, 1000); plot(p(t), 'linewidth', 30) hold on plot(z, 'k.', 'markersize', 30) hold off axis equal  The curve is made extra thick because this is how Meta logo looks. The code also marks the eight points of interpolation.    The preceding examples had complex-valued data, but the same approach allows us to interpolate real-valued data with a real trigonometric polynomial. The main difference is in plotting the real-valued periodic function: we want the horizontal axis to represent while the vertical axis shows the values of the function.   Interpolation by a real trigonometric polynomial  Plot a trigonometric polynomial with period which attains prescribed (random) real values at the points .   Here (the number of interpolation points), and z = rand(1, n) (real numbers). Theoretically, the interpolating polynomial will be real-valued but due to limited precision, some small imaginary component may appear. So we should take the real part real(p(t)) .  n = 5; z = rand(1, n); c = fft(z); k = [0:(n-1)\/2 (1-n)\/2:-1]; p = @(t) c\/n*exp(2*pi*1i*k'*t); t = linspace(0, 1, 1000); plot(t, real(p(t)), (0:n-1)\/n, z, 'r*')  Note that by construction.    "
},
{
  "id": "section-trigonometric-interpolation-5",
  "level": "2",
  "url": "section-trigonometric-interpolation.html#section-trigonometric-interpolation-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "aliasing "
},
{
  "id": "example-meta-interpolation",
  "level": "2",
  "url": "section-trigonometric-interpolation.html#example-meta-interpolation",
  "type": "Example",
  "number": "25.4.1",
  "title": "Create a closed curve similar to the logo of Meta.",
  "body": " Create a closed curve similar to the logo of Meta  Choose a few points in the complex plane so that trigonometric interpolation through these points creates a curve similar to Meta logo .   It is natural to place the self-intersection point at , then the points of interpolation will be symmetric about the vertical (imaginary) axis. Trial and error leads to the choice z = [6, 6-6i, 2-3i, -2+3i, -6, -6-6i, -2-3i, 2+3i]; which describes the curve starting from the upper right part, going down, then diagonally to top left, then down, and diagonally to top right again. We have points, so the above discussion about odd\/even distinction is relevant. For the sake of reusability, the code uses a conditional statement that can handle both odd and even cases.  n = numel(z); c = fft(z); if mod(n, 2) == 1 k = [0:(n-1)\/2 (1-n)\/2:-1]; else c = [c(1:n\/2) c(n\/2+1)\/2 c(n\/2+1)\/2 c(n\/2+2:end)]; k = [0:n\/2 -n\/2:-1]; end p = @(t) c\/n*exp(2*pi*1i*k'*t); t = linspace(0, 1, 1000); plot(p(t), 'linewidth', 30) hold on plot(z, 'k.', 'markersize', 30) hold off axis equal  The curve is made extra thick because this is how Meta logo looks. The code also marks the eight points of interpolation.   "
},
{
  "id": "example-real-trigonometric-interpolation",
  "level": "2",
  "url": "section-trigonometric-interpolation.html#example-real-trigonometric-interpolation",
  "type": "Example",
  "number": "25.4.2",
  "title": "Interpolation by a real trigonometric polynomial.",
  "body": " Interpolation by a real trigonometric polynomial  Plot a trigonometric polynomial with period which attains prescribed (random) real values at the points .   Here (the number of interpolation points), and z = rand(1, n) (real numbers). Theoretically, the interpolating polynomial will be real-valued but due to limited precision, some small imaginary component may appear. So we should take the real part real(p(t)) .  n = 5; z = rand(1, n); c = fft(z); k = [0:(n-1)\/2 (1-n)\/2:-1]; p = @(t) c\/n*exp(2*pi*1i*k'*t); t = linspace(0, 1, 1000); plot(t, real(p(t)), (0:n-1)\/n, z, 'r*')  Note that by construction.   "
},
{
  "id": "exercises-discrete-fourier-transform",
  "level": "1",
  "url": "exercises-discrete-fourier-transform.html",
  "type": "Exercises",
  "number": "25.5",
  "title": "Homework",
  "body": " Homework    Modify to create and plot two real trigonometric polynomials such that the values are the 9 digits of your SUID number. One polynomial should use the aliased reconstruction formula k = [0:(n-1)\/2 (1-n)\/2:-1]; and the other the non-aliased formula k = 0:n-1 .  The command subplot can help display these polynomials in one figure, for example subplot(2, 1, 1) before the first plot and then subplot(2, 1, 2) before the second. Which polynomial creates a more natural curve through given points?     Choose some complex numbers (with odd ) so that connecting them in this order (and connecting to ) one gets a closed curve similar to letter B. Then use Discrete Fourier Transform to plot a complex trigonometric polynomial interpolating these numbers ( may be helpful). Does the plot look like letter B?   "
},
{
  "id": "exercises-discrete-fourier-transform-2",
  "level": "2",
  "url": "exercises-discrete-fourier-transform.html#exercises-discrete-fourier-transform-2",
  "type": "Exercise",
  "number": "25.5.1",
  "title": "",
  "body": "  Modify to create and plot two real trigonometric polynomials such that the values are the 9 digits of your SUID number. One polynomial should use the aliased reconstruction formula k = [0:(n-1)\/2 (1-n)\/2:-1]; and the other the non-aliased formula k = 0:n-1 .  The command subplot can help display these polynomials in one figure, for example subplot(2, 1, 1) before the first plot and then subplot(2, 1, 2) before the second. Which polynomial creates a more natural curve through given points?  "
},
{
  "id": "exercises-discrete-fourier-transform-3",
  "level": "2",
  "url": "exercises-discrete-fourier-transform.html#exercises-discrete-fourier-transform-3",
  "type": "Exercise",
  "number": "25.5.2",
  "title": "",
  "body": "  Choose some complex numbers (with odd ) so that connecting them in this order (and connecting to ) one gets a closed curve similar to letter B. Then use Discrete Fourier Transform to plot a complex trigonometric polynomial interpolating these numbers ( may be helpful). Does the plot look like letter B?  "
},
{
  "id": "section-image-compression",
  "level": "1",
  "url": "section-image-compression.html",
  "type": "Section",
  "number": "26.1",
  "title": "Working with images in Matlab",
  "body": " Working with images in Matlab  An image is loaded into Matlab with a command like im = imread('filename.jpg') . Try this using, for example, the winter scene (first save the file in Matlab\/Octave current directory). There are several things to learn about this im object:   size(im) shows its size (dimensions) as 462 692 3. This is a three-dimensional array, where the last index means the color channel : Red, Green, Blue. The first two indices are rows and columns. One can access individual channels with im(:, :, 1) (for red). Matlab can also work with grayscale images which have just one channel for brightness; such images are represented by matrices which makes them easier to work with.   class(im) says uint8 . All other Matlab objects we encountered so far have class double meaning they contain floating-point numbers with double-precision, able to store about 16 decimal digits. But uint8 is different: it is an unsigned 8-bit integer , with possible values 0, 1, , 255. This reflects the image format: in each channel, the brightness of each pixel ranges from 0 to 255. (How many possible colors does this create?) Since 8 bits form a byte , the data in our image requires bytes for storage. But the JPEG file with this image is much smaller, due to built-in compression which will be described later.    The command imshow(im) displays the image. An image (an array of numbers) can be transformed in multiple ways and then either saved as a file with imwrite or just displayed with imshow ; we will do the latter, which is simpler. Try the following and observe the effects:  Remove one of colors entirely, for example im(:, :, 3) = 0;  Set all pixels darker than some level to black (0) with im(im < 128) = 0;  Set the intensity of some color to some specific value, for example im(:, :, 2) = 64;     If you do something that causes the array to lose its class uint8 , that can usually be fixed with the command uint8(...) .  "
},
{
  "id": "section-image-compression-2",
  "level": "2",
  "url": "section-image-compression.html#section-image-compression-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "color channel grayscale unsigned 8-bit integer "
},
{
  "id": "section-2d-dft",
  "level": "1",
  "url": "section-2d-dft.html",
  "type": "Section",
  "number": "26.2",
  "title": "Two-dimensional DFT",
  "body": " Two-dimensional DFT  Since images are two-dimensional (considering either grayscale images, or working with each color channel separately), they can be processed using the two-dimensional version of Discrete Fourier Transform, implemented in Matlab as fft2 and (inverse) ifft2 . The formulas for 2D transform follow the same logic as one-dimensional formulas and . Namely, the 2D Fourier coefficients of a given matrix with indices , are computed as: The matrix is reconstructed from its coefficients by inverse transform The fact that Matlab indices begin with 1 means they have to be shifted by 1 in the above formulas, but since we will just use fft2 and (inverse) ifft2 , we will not worry about this.  Let us try this with the grayscale version of the winter image, saved here as a PNG file for lossless compression.   Grayscale PNG image  After loading the image with im = imread('winter.png') , check this is a matrix (no separate channels for colors). Try fc = fft2(im); which produces a matrix of the same size but with complex entries. It is not easy to understand all of it. Small pieces can be inspected with fc(1:5, 1:5) for example: when doing this, notice the special role of fc(1, 1) , the upper left number. A histogram can help visualize the distribution of the magnitudes of Fourier coefficients: histogram(abs(fc(:)), 50) . (Recall that fc(:) means flattening a matrix to a vector.) Looks like nearly all coefficients are much smaller than the largest ones.  We can set all small Fourier coefficients (less than some threshold thr ) to zero using fc(abs(fc) < thr) = 0; . One way to determine the threshold reasonably is to use percentiles : for example, thr = prctile(abs(fc(:)), 75); returns the number thr such that 75 percent of Fourier coefficients are less than it, and the other are greater (in absolute value).   Compress an image using Discrete Fourier Transform  Given a percentage p , such as 75, compress the winter image by setting p percent of its Fourier coefficients to zero.  p = 75; im = imread('winter.png'); fc = fft2(im); thr = prctile(abs(fc(:)), p); fc(abs(fc) < thr) = 0; im2 = uint8(real(ifft2(fc))); imshow(im2)  The inverse Fourier transform may have imaginary part due to the truncation of Fourier coefficients and rounding errors in computations. This imaginary part is removed with real . The result is converted to unsigned 8-bit integers with uint8 .    The JPEG compression algorithm is based on the Fourier Transform but differs from the above example in several ways: It divides the image into 8 8 pixel blocks and operates on each block separately.  It uses Discrete Cosine Transform in which the role of complex exponentials is played by cosine functions . This improves the efficiency and eliminates the appearance of complex numbers.  In addition to setting small Fourier coefficients to 0, it quantizes the other ones: rounds to the nearest integer, or nearest multiple of 5, etc.  Since setting many elements to 0 does not by itself make a matrix smaller, the final step of the process is running a lossless compression algorithm which exploits the existence of many equal entries in the matrix.    "
},
{
  "id": "section-2d-dft-2",
  "level": "2",
  "url": "section-2d-dft.html#section-2d-dft-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "2D Fourier coefficients "
},
{
  "id": "winter-png",
  "level": "2",
  "url": "section-2d-dft.html#winter-png",
  "type": "Figure",
  "number": "26.2.1",
  "title": "",
  "body": " Grayscale PNG image "
},
{
  "id": "section-2d-dft-6",
  "level": "2",
  "url": "section-2d-dft.html#section-2d-dft-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percentiles "
},
{
  "id": "example-compress-image",
  "level": "2",
  "url": "section-2d-dft.html#example-compress-image",
  "type": "Example",
  "number": "26.2.2",
  "title": "Compress an image using Discrete Fourier Transform.",
  "body": " Compress an image using Discrete Fourier Transform  Given a percentage p , such as 75, compress the winter image by setting p percent of its Fourier coefficients to zero.  p = 75; im = imread('winter.png'); fc = fft2(im); thr = prctile(abs(fc(:)), p); fc(abs(fc) < thr) = 0; im2 = uint8(real(ifft2(fc))); imshow(im2)  The inverse Fourier transform may have imaginary part due to the truncation of Fourier coefficients and rounding errors in computations. This imaginary part is removed with real . The result is converted to unsigned 8-bit integers with uint8 .   "
},
{
  "id": "section-cosine-interpolation",
  "level": "1",
  "url": "section-cosine-interpolation.html",
  "type": "Section",
  "number": "26.3",
  "title": "Cosine interpolation of non-periodic functions",
  "body": " Cosine interpolation of non-periodic functions  This is an optional section, feel free to skip it.  In we worked with periodic functions, approximating them by trigonometric polynomials. Can we use trigonometric polynomials to approximate non-periodic functions? For example, suppose we solved the initial-value problem with [t, y] = ode45(@(t, y) sin(y^2) + t, 0:0.1:3, 1); Note that in contrast to the second argument is given not as an interval (two-element vector) [0 3] but as a set of t-values at which the solution needs to be found. This ensures that we get y-values for these specific t-values. But now that we have them, how can we get a simple approximate solution?  Polynomial interpolation? Hopeless, a degree 30 polynomial through 31 equally spaced points is not even worth trying.  Cubic spline interpolation? It would make a nice plot but in terms of a formula, the spline would have 120 coefficients (4 for each of 30 subintervals). This is hardly a simple solution.  Trigonometric polynomials? But they are periodic, and our function has different values at 0 and 3.    Compare the behavior of cosines and sines on the interval . The cosines have different values at while the sines are always 0 at both ends. This makes cosines, specifically in the form , preferable for approximating a non-periodic function on . The Discrete Cosine Transform is a tool used to find the coefficients of a given function in the cosine basis. It is somewhat technical (there are 4 different types of the transform), but the essence of the method can be stated simply: apply Fourier transform to the even periodic extension of the given function.  The discrete version of even periodic extension is as follows: given function values , we extend them to (for the total of values). In Matlab terms, the extended vector is ye = [y y(end-1:-1:2)]; Why not simply [y y(end:-1:1)] ? Repeating the endpoint values would distort the picture of this function. They should appear once while the rest appear twice; this can be viewed as yet another form of trapezoidal adjustment .  Having found the Fourier coefficients c = fft(ye)\/numel(ye) we observe they are all real (any imaginary component is due to round-off errors). This makes it possible to fold the sum of complex exponentials into a cosine sum: for the pair of terms is aliased to (here is a multiple of .) The terms and do not have a counterpart among the coefficients , so the cosine sum ends up being And of course, Matlab indexing of the coefficients begins with 1, forcing another adjustment: see the following example.   Interpolate with cosines  Apply the cosine interpolation to the numerical solution of ODE .  Since ode45 returns y as a column, it is transposed in the code below. Then we extend this vector to ye , take its Fourier Transform c , and fold it into cosine coefficients cf . Then plot the resulting sum of cosines.  [t, y] = ode45(@(t, y) sin(y^2) + t, 0:0.1:3, 1); y = y'; n = numel(y); ye = [y y(end-1:-1:2)]; c = real(fft(ye))\/numel(ye); cf = [c(1) 2*c(2:n-1) c(n)]; L = 3; x = linspace(0, L, 1000); k = 0:n-1; g = cf*cos(k'*x*pi\/L); plot(x, g, t, y, 'r*')    The cosine sum in has 31 terms, as many as there are data points. But many of them are very close to zero, as plot(cf) shows. For example, we could keep the first m=8 of them and still have a good approximation for this function.  m = 8; k = 0:m-1; g = cf(1:m)*cos(k'*x*pi\/L);  This is essentially a one-dimensional version of image compression discussed in .  "
},
{
  "id": "section-cosine-interpolation-4",
  "level": "2",
  "url": "section-cosine-interpolation.html#section-cosine-interpolation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Discrete Cosine Transform even periodic extension "
},
{
  "id": "example-cosine-interpolation",
  "level": "2",
  "url": "section-cosine-interpolation.html#example-cosine-interpolation",
  "type": "Example",
  "number": "26.3.1",
  "title": "Interpolate with cosines.",
  "body": " Interpolate with cosines  Apply the cosine interpolation to the numerical solution of ODE .  Since ode45 returns y as a column, it is transposed in the code below. Then we extend this vector to ye , take its Fourier Transform c , and fold it into cosine coefficients cf . Then plot the resulting sum of cosines.  [t, y] = ode45(@(t, y) sin(y^2) + t, 0:0.1:3, 1); y = y'; n = numel(y); ye = [y y(end-1:-1:2)]; c = real(fft(ye))\/numel(ye); cf = [c(1) 2*c(2:n-1) c(n)]; L = 3; x = linspace(0, L, 1000); k = 0:n-1; g = cf*cos(k'*x*pi\/L); plot(x, g, t, y, 'r*')   "
},
{
  "id": "exercises-dft-applications",
  "level": "1",
  "url": "exercises-dft-applications.html",
  "type": "Exercises",
  "number": "26.4",
  "title": "Homework",
  "body": " Homework    Instead of deciding in advance how many coefficients to discard, it is usually preferable to maintain some degree of quality of the image. This is often measured in terms of energy , defined as the sum of squares of absolute values of Fourier coefficients (except the constant one). That, is to have 95% quality, we want to keep enough Fourier coefficients so that the sum of their squares is at least 95% of the total sum of squares. Equivalently, we discard the coefficients that contribute 5% of the energy.  The goal of this exercise is to modify so that the input value is quality q such as 90 or 95, and the image in is compressed based on the energy consideration.  Suggestions: sort the Fourier coefficients from largest to smallest using sorted = sort(abs(fc(:)), 'descend'); and remove the largest of them (the constant term): sorted = sorted(2:end); The total energy is total = sum(sorted.^2); The key step is writing a loop that sums the squares of the elements of sorted array until the sum reaches the desired proportion of the total energy. When the loop exits, you will know what threshold value thr should be used for truncating Fourier coefficients.  Compare the quality of compressed image with q = 90 , q = 80 , and q = 70 . In addition to showing the compressed image, the script should display the percentage of Fourier coefficients that were kept as non-zero values: for example, 100*numel(nonzeros(fc))\/numel(fc) .   Consider a small example: the sorted array of nonconstant coefficients is [10 8 7 5 4 2 1] which makes its total energy . Suppose we want to determine the threshold thr that preserves 90% of energy, which is . Start adding the squares of coefficients until the required amount is reached:   , not enough  add , get , still not enough  add , get , still not enough  add , get , which is enough  At the conclusion of this process (which can be either a while loop or a for loop with a break statement) we find that is the smallest coefficient that we should keep; any smaller ones should be discarded. Thus, in this example thr = 5 would be the correct choice of threshold. Once the threshold is determined, the rest proceeds as in .  Note that the command prctile is not needed in this homework.    "
},
{
  "id": "exercises-dft-applications-2",
  "level": "2",
  "url": "exercises-dft-applications.html#exercises-dft-applications-2",
  "type": "Exercise",
  "number": "26.4.1",
  "title": "",
  "body": "  Instead of deciding in advance how many coefficients to discard, it is usually preferable to maintain some degree of quality of the image. This is often measured in terms of energy , defined as the sum of squares of absolute values of Fourier coefficients (except the constant one). That, is to have 95% quality, we want to keep enough Fourier coefficients so that the sum of their squares is at least 95% of the total sum of squares. Equivalently, we discard the coefficients that contribute 5% of the energy.  The goal of this exercise is to modify so that the input value is quality q such as 90 or 95, and the image in is compressed based on the energy consideration.  Suggestions: sort the Fourier coefficients from largest to smallest using sorted = sort(abs(fc(:)), 'descend'); and remove the largest of them (the constant term): sorted = sorted(2:end); The total energy is total = sum(sorted.^2); The key step is writing a loop that sums the squares of the elements of sorted array until the sum reaches the desired proportion of the total energy. When the loop exits, you will know what threshold value thr should be used for truncating Fourier coefficients.  Compare the quality of compressed image with q = 90 , q = 80 , and q = 70 . In addition to showing the compressed image, the script should display the percentage of Fourier coefficients that were kept as non-zero values: for example, 100*numel(nonzeros(fc))\/numel(fc) .   Consider a small example: the sorted array of nonconstant coefficients is [10 8 7 5 4 2 1] which makes its total energy . Suppose we want to determine the threshold thr that preserves 90% of energy, which is . Start adding the squares of coefficients until the required amount is reached:   , not enough  add , get , still not enough  add , get , still not enough  add , get , which is enough  At the conclusion of this process (which can be either a while loop or a for loop with a break statement) we find that is the smallest coefficient that we should keep; any smaller ones should be discarded. Thus, in this example thr = 5 would be the correct choice of threshold. Once the threshold is determined, the rest proceeds as in .  Note that the command prctile is not needed in this homework.   "
},
{
  "id": "section-lsq-overview",
  "level": "1",
  "url": "section-lsq-overview.html",
  "type": "Section",
  "number": "27.1",
  "title": "Overview of least squares",
  "body": " Overview of least squares  Least squares fit is about more than just fitting a curve to some points like . In its general form we have a vector of observations and vectors of explanatory variables , say . Our goal is to approximate by a linear combination of , say . What are these vectors in the polynomial model?  If is the best prediction, then the difference is orthogonal to each . That is, for each . These are linear equations for parameters. Let us express them in matrix form. Let be the matrix formed by vectors as columns. Then is the column vector with entries , matching the right hand side of . The left hand side of involves where is the vector of coefficients that we are looking for. With this, we recognize that is the vector whose entries match the left hand side. In conclusion, the matrix form of is which is known as the normal equations associated to the overdetermined system . Note that is invertible if and only if the explanatory vectors are linearly independent (which they should be; otherwise we have redundant ones). However, in practice we do not obtain by solving the system : it is more efficient for Matlab to find it directly from the overdetermined system : the command beta = X\\y does this by using QR decomposition (covered in an Applied Linear Algebra course).  The goodness of fit could be measured in several ways. One indicator is the norm of the residual vector , or better yet, the squared norm However this quantity has the units of squared, and a unit-free quantity is preferable. A popular approach is to compare the residual sum fo squares to the total sum of squares We want our model to predict better than the baseline guess (which does not use any explanatory variables). So, if is much smaller than , the fit is good. The goodness-of-fit is then measured by the coefficient of determination  which shows how much of the variability in observation is predicted by the model. The value does not exceed 1, with 1 being exact fit and close to 0 being a rather useless model ( example ). The quantity may even be negative if the model does a worse job than the constant predictor . The notation comes from the fact that for linear regression (without testing-training split), it is the square of correlation coefficient. But in general it is not a square of anything.  "
},
{
  "id": "section-lsq-overview-2",
  "level": "2",
  "url": "section-lsq-overview.html#section-lsq-overview-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explanatory variables "
},
{
  "id": "section-lsq-overview-3",
  "level": "2",
  "url": "section-lsq-overview.html#section-lsq-overview-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "section-lsq-overview-4",
  "level": "2",
  "url": "section-lsq-overview.html#section-lsq-overview-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient of determination "
},
{
  "id": "section-overfitting",
  "level": "1",
  "url": "section-overfitting.html",
  "type": "Section",
  "number": "27.2",
  "title": "Overfitting, training and testing",
  "body": " Overfitting, training and testing  Recall in which we find a best-fitting parabola to given data. The code is extended below to allow arbitrary degree of the polynomial, and to add the computation of according to . Note the use of column vectors below.   Fitting a polynomial of any degree  Improve to work with polynomials of any degree , and add a computation of to it.  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; % data d = 2; % degree of polynomial X = x.^(0:d); % matrix of linear system for parameters beta = X\\y; % optimal parameters f = @(x) (x.^(0:d))*beta; % best-fitting function f t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*') total = norm(y - mean(y))^2; residual = norm(y - f(x))^2; fprintf('R^2 for degree %d is %g\\n', d, 1 - residual\/total);  If we increase toward , the curve gets closer to the points but it also becomes more wiggly. Most importantly, the prediction it makes for , that is , becomes less realistic. This is overfitting , which describes the situation in which our model mostly memorizes the data instead of learning from it. ( Food for thought from xkcd )  A simple but effective way to combad overfitting is to split the data into two parts: one (training set) is used to compute the coefficients , and then another part (testing set) is used to evaluate goodness of fit. The split may be done randomly, perhaps 50:50 or 60:40 proportion. Which of the following 50:50 splits looks better? x_train = x(1:8); x_test = x(9:end); (and similarly for y ) or x_train = x(1:2:end); x_test = x(2:2:end);    Training-testing split  Use the training-testing split in .  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; x_train = x(1:2:end); y_train = y(1:2:end); x_test = x(2:2:end); y_test = y(2:2:end); d = 2; X = x_train.^(0:d); beta = X\\y_train; f = @(x) (x.^(0:d))*beta; t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*') total = norm(y_test - mean(y_test))^2; residual = norm(y_test - f(x_test))^2; fprintf('R^2 for degree %d is %g\\n', d, 1 - residual\/total);  An additional detail: when one reports the model performance (not in this class, but perhaps for a publication), the reported value of or other estimate of goodness-of-fit should be computed on a separate validation set which was not used for either training or testing. Using the testing set for reporting introduces a subtle source of bias: if many models are tested, and one of them wins, it is more likely than not that the winning model had better luck with the specific data set used for testing, and that would lead us to overestimate its goodness-of-fit. (Here is an example of testing too many models and not validating.)  "
},
{
  "id": "example-best-fit-polynomial",
  "level": "2",
  "url": "section-overfitting.html#example-best-fit-polynomial",
  "type": "Example",
  "number": "27.2.1",
  "title": "Fitting a polynomial of any degree.",
  "body": " Fitting a polynomial of any degree  Improve to work with polynomials of any degree , and add a computation of to it.  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; % data d = 2; % degree of polynomial X = x.^(0:d); % matrix of linear system for parameters beta = X\\y; % optimal parameters f = @(x) (x.^(0:d))*beta; % best-fitting function f t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*') total = norm(y - mean(y))^2; residual = norm(y - f(x))^2; fprintf('R^2 for degree %d is %g\\n', d, 1 - residual\/total); "
},
{
  "id": "section-overfitting-4",
  "level": "2",
  "url": "section-overfitting.html#section-overfitting-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overfitting "
},
{
  "id": "example-training-testing",
  "level": "2",
  "url": "section-overfitting.html#example-training-testing",
  "type": "Example",
  "number": "27.2.2",
  "title": "Training-testing split.",
  "body": " Training-testing split  Use the training-testing split in .  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; x_train = x(1:2:end); y_train = y(1:2:end); x_test = x(2:2:end); y_test = y(2:2:end); d = 2; X = x_train.^(0:d); beta = X\\y_train; f = @(x) (x.^(0:d))*beta; t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*') total = norm(y_test - mean(y_test))^2; residual = norm(y_test - f(x_test))^2; fprintf('R^2 for degree %d is %g\\n', d, 1 - residual\/total); "
},
{
  "id": "section-overfitting-7",
  "level": "2",
  "url": "section-overfitting.html#section-overfitting-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "validation set "
},
{
  "id": "section-standard-error",
  "level": "1",
  "url": "section-standard-error.html",
  "type": "Section",
  "number": "27.3",
  "title": "The standard error of parameters",
  "body": " The standard error of parameters  A more statistics-oriented approach to model selection is to examine the randomness of the parameters we found: we study the hypothesis that the true value of a particular parameter is zero, meaning that the value we found for it is nonzero only due to chance. This approach does not really say whether a model is good for describing the data, but whether a particular parameter actually helps in it.  With this approach, we think of as a vector of observations of a random variables with degrees of freedom (where is the number of parameters). The variance of such a random variable is estimated as You may have seen this formula with which corresponds to the constant model .  Solving for optimal parameters (theoretically) involves inverting the matrix , seen in . The matrix can be considered the covariance matrix of estimated parameters. Specifically, its diagonal element in position is the variance of . The square root of variance gives the standard error of . As a rule of thumb, if (a parameter is within two standard errors of 0), this parameter should be considered inessential and possibly removed from the model. The following computation implements this statistical analysis.  s2 = norm(y-z)^2\/(n-p); % variance of error C = s2*inv(X'*X); % covariance matrix for parameters ts = beta.\/sqrt(diag(C)); % the t-statistics of the parameters  The parameters with should be considered for removal. In the example of fitting polynomials of degree , we have parameters. The consideration should be focused on the leading coefficient, because if it appears to be inessential, we should remove it by decreasing the degree by . Note that the removal of one parameter causes all others to be recalculated, so the rest may become essential now.   Computing the t-statistics of parameters  Modify to include the computation of t-statistics for each coefficient of the polynomial.  Note that the vector of t-statistics, which is called ts below, contains the statistics for the coefficients of in this order. This means that is really the value of most interest here.  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; d = 2; X = x.^(0:d); beta = X\\y; f = @(x) (x.^(0:d))*beta; [n, p] = size(X); s2 = norm(y-f(x))^2\/(n-p); C = s2*inv(X'*X); ts = beta.\/sqrt(diag(C)); disp(ts)  "
},
{
  "id": "section-standard-error-4",
  "level": "2",
  "url": "section-standard-error.html#section-standard-error-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "covariance matrix standard error "
},
{
  "id": "example-t-statistics-parameters",
  "level": "2",
  "url": "section-standard-error.html#example-t-statistics-parameters",
  "type": "Example",
  "number": "27.3.1",
  "title": "Computing the t-statistics of parameters.",
  "body": " Computing the t-statistics of parameters  Modify to include the computation of t-statistics for each coefficient of the polynomial.  Note that the vector of t-statistics, which is called ts below, contains the statistics for the coefficients of in this order. This means that is really the value of most interest here.  x = (0:14)'; y = [9 8 5 5 3 1 2 5 4 7 8 8 7 7 8]'; d = 2; X = x.^(0:d); beta = X\\y; f = @(x) (x.^(0:d))*beta; [n, p] = size(X); s2 = norm(y-f(x))^2\/(n-p); C = s2*inv(X'*X); ts = beta.\/sqrt(diag(C)); disp(ts) "
},
{
  "id": "section-multiple-regression",
  "level": "1",
  "url": "section-multiple-regression.html",
  "type": "Section",
  "number": "27.4",
  "title": "Multiple regression",
  "body": " Multiple regression  Least squares method, as outlined at the beginning of , includes multiple linear regression , in which we model a dependent variable by a linear combination of several independent variables. In this form, the matrix consists not of various powers of one variable, but of several explanatory variables. In the following example the observations modeled are the scores on a final exam, while explanatory variables are Homework average, Quiz average, Exam 1 score, Exam 2, and Exam 3. After fitting a linear combination of these five variable to the final exam score, the code calculates and -statistics.  hw = [97 99 90 76 96 80 100 55 69 85 89 100 73 89 95 98 98 73 100 84]'; quiz = [94 104 101 76 102 83 90 81 101 101 105 99 91 98 95 101 88 77 97 95]'; exam1 = [96 100 93 79 95 62 83 88 86 96 95 96 74 91 88 94 96 98 97 94]'; exam2 = [71 80 59 31 70 26 63 65 69 78 79 65 38 75 71 75 68 64 73 68]'; exam3 = [83 86 65 42 82 55 69 38 70 77 65 80 50 79 70 88 75 75 73 56]'; y = [82 92 74 57 77 56 51 42 79 92 89 79 49 84 88 84 71 88 83 89]'; % final exam X = [hw quiz exam1 exam2 exam3]; beta = X\\y; z = X*beta; % predicted final scores total = norm(y - mean(y))^2; residual = norm(y - z)^2; disp('Parameters:') disp(beta'); fprintf('R^2 is %g\\n', 1 - residual\/total); [n, p] = size(X); % X is a matrix of size n by p s2 = norm(y-z)^2\/(n-p); C = s2*inv(X'*X); ts = beta.\/sqrt(diag(C)); disp('t-statistic values'); disp(ts')  How to intepret these results? Can the model be improved by discarding some explanatory variables which fail to explain anything?  "
},
{
  "id": "section-multiple-regression-2",
  "level": "2",
  "url": "section-multiple-regression.html#section-multiple-regression-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiple linear regression "
},
{
  "id": "exercises-linear-least-squares",
  "level": "1",
  "url": "exercises-linear-least-squares.html",
  "type": "Exercises",
  "number": "27.5",
  "title": "Homework",
  "body": " Homework    Modify so that it runs a loop over degrees from 1 to 7 and within that loop, is computed for each degree . The code should find the value of with maximal , display this value, and plot the graph of polynomial with optimal .     The number of active Covid cases at SU during October 1 - October 23, 2020, is given below. y = [5 5 4 5 9 25 45 65 77 87 87 89 97 101 90 74 57 26 20 13 12 12 13]'; A good choice for x-values is x = (-11:11)' because centering the interval at 0 improves the performance of the monomial basis.  Write a script that takes degree as input, fits a polynomial of degree to the data, displays the t-statistic for the leading coefficient as in , and plots the polynomial together with the data points. What value of works best for this data, based on the t-statistic and the plot?  "
},
{
  "id": "exercises-linear-least-squares-2",
  "level": "2",
  "url": "exercises-linear-least-squares.html#exercises-linear-least-squares-2",
  "type": "Exercise",
  "number": "27.5.1",
  "title": "",
  "body": "  Modify so that it runs a loop over degrees from 1 to 7 and within that loop, is computed for each degree . The code should find the value of with maximal , display this value, and plot the graph of polynomial with optimal .  "
},
{
  "id": "exercises-linear-least-squares-3",
  "level": "2",
  "url": "exercises-linear-least-squares.html#exercises-linear-least-squares-3",
  "type": "Exercise",
  "number": "27.5.2",
  "title": "",
  "body": "  The number of active Covid cases at SU during October 1 - October 23, 2020, is given below. y = [5 5 4 5 9 25 45 65 77 87 87 89 97 101 90 74 57 26 20 13 12 12 13]'; A good choice for x-values is x = (-11:11)' because centering the interval at 0 improves the performance of the monomial basis.  Write a script that takes degree as input, fits a polynomial of degree to the data, displays the t-statistic for the leading coefficient as in , and plots the polynomial together with the data points. What value of works best for this data, based on the t-statistic and the plot? "
},
{
  "id": "section-example-exponential-fit",
  "level": "1",
  "url": "section-example-exponential-fit.html",
  "type": "Section",
  "number": "28.1",
  "title": "Exponential fit",
  "body": " Exponential fit  Exponential growth is modeled by a function of the form . Suppose we have some data , , and think that it describes exponential growth (which naturally occurs in ecology and epidemiology). A direct attempt to minimize the sum of differences squared: is possible but requires optimization methods which we will consider later. There is an alternative approach: instead of fitting to the values , fit its logarithm, , to the values . This means we will minimize the sum of squares of differences of (natural) logarithms:   It is important to understand the two problems and are not equivalent. If exact fit is possible, either approach will find it. But in general, some deviations (nonzero residuals) are inevitable, and the two approaches penalize deviations in different ways.  For example, if the given y-values are [1 2 10] and we have two competing exponential functions: one predicts [0.5 2 10] while the other predicts [1 2 11] . Using the penalty function , the first model has the penalty while the second has penalty , so the first looks better. But if we look at the differences of logarithms, then the first has penality while the second has penalty , so the second looks much better.  Most importantly, the minimization problem can be easily solved using the method of . For notational convenience let and . If the left hand side of was zero, that would mean that is a solution of the overdetermined linear system The least squares solution of is the vector that minimizes .   Fit an exponential to Covid data  The following are new Covid infections in France as reported on Fridays in September-October 2020 (from Sep 4 to Oct 23). y = [6011 7742 9335 12048 10946 14618 20399 29472]'; Fit an exponential function to this data, using week numbers 1:8 as x-values. Extend it two weeks into the future by plotting it up to . Include the original data on the plot.   The vector y is already defined above, but we need yt = log(y) to get transformed y-values.  x = (1:8)'; yt = log(y); X = x.^(0:1); beta = X\\yt; f = @(x) exp((x.^(0:1))*beta); t = linspace(1, 10, 1000)'; plot(t, f(t), 'b', x, y, 'r*')  "
},
{
  "id": "example-best-fit-exponential",
  "level": "2",
  "url": "section-example-exponential-fit.html#example-best-fit-exponential",
  "type": "Example",
  "number": "28.1.1",
  "title": "Fit an exponential to Covid data.",
  "body": " Fit an exponential to Covid data  The following are new Covid infections in France as reported on Fridays in September-October 2020 (from Sep 4 to Oct 23). y = [6011 7742 9335 12048 10946 14618 20399 29472]'; Fit an exponential function to this data, using week numbers 1:8 as x-values. Extend it two weeks into the future by plotting it up to . Include the original data on the plot.   The vector y is already defined above, but we need yt = log(y) to get transformed y-values.  x = (1:8)'; yt = log(y); X = x.^(0:1); beta = X\\yt; f = @(x) exp((x.^(0:1))*beta); t = linspace(1, 10, 1000)'; plot(t, f(t), 'b', x, y, 'r*') "
},
{
  "id": "section-example-logistic-fit",
  "level": "1",
  "url": "section-example-logistic-fit.html",
  "type": "Section",
  "number": "28.2",
  "title": "Logistic fit",
  "body": " Logistic fit  If we simplify the SIR model ( ) by removing the recovering process, the proportion of infected people in the population grows according to the ODE with some coefficient . This ODE has an explicit solution with depending on coefficient (which we usually don't know in practice) and the initial condition (which we might not know either). But if we can collect some data, we can fit a logistic function to it. As written, the model includes parameters in a nonlinear way. But applying the logit transformation we obtain Thus, we can fit a linear function to the values and then apply the inverse of the transformation , which is .  The logistic model can reasonable apply to other processes which are slow initially, speed up, and then slow down again. The following example, where population consists of Covid-positive students, models the process of their recovery.   Fit a logistic function to Covid data  There were at least 121 reported Covid infections among SU students between October 8 and October 26 of 2020. The following are the cumulative counts of people recovered, day by day, starting with October 9. R = [1 1 1 5 8 10 27 44 62 93 101 110 112 115 116 117 118 120]'; Fit a logistic function to these proportion of the total population of 121 that recovered on each day.   We need to compute proportions y = R\/121 and transform them by yt = log(y.\/(1-y)) . Then the usual linear regression is applied.  x = (1:numel(R))'; y = R\/121; yt = log(y.\/(1-y)); X = x.^(0:1); beta = X\\yt; f = @(x) 1 .\/ (1 + exp(-(x.^(0:1))*beta)); t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*')  Here the logistic function is written as with parameters contained in the vector beta .   The result in is not entirely satisfactory. The logit transformation over-emphasizes the values near 0 and 1, and de-emphasizes those in between. One way to address this issue is to introduce weights, which we do in next section.  "
},
{
  "id": "example-best-fit-logistic",
  "level": "2",
  "url": "section-example-logistic-fit.html#example-best-fit-logistic",
  "type": "Example",
  "number": "28.2.1",
  "title": "Fit a logistic function to Covid data.",
  "body": " Fit a logistic function to Covid data  There were at least 121 reported Covid infections among SU students between October 8 and October 26 of 2020. The following are the cumulative counts of people recovered, day by day, starting with October 9. R = [1 1 1 5 8 10 27 44 62 93 101 110 112 115 116 117 118 120]'; Fit a logistic function to these proportion of the total population of 121 that recovered on each day.   We need to compute proportions y = R\/121 and transform them by yt = log(y.\/(1-y)) . Then the usual linear regression is applied.  x = (1:numel(R))'; y = R\/121; yt = log(y.\/(1-y)); X = x.^(0:1); beta = X\\yt; f = @(x) 1 .\/ (1 + exp(-(x.^(0:1))*beta)); t = linspace(min(x), max(x), 1000)'; plot(t, f(t), 'b', x, y, 'r*')  Here the logistic function is written as with parameters contained in the vector beta .  "
},
{
  "id": "section-weighted-least-squares",
  "level": "1",
  "url": "section-weighted-least-squares.html",
  "type": "Section",
  "number": "28.3",
  "title": "Weighted least squares",
  "body": " Weighted least squares  When we solve an overdetermined linear system as z = A\\b , the result is the least squares solution which minimizes the sum (the penalty). For example, the difference of between and contributes to the penalty, no matter what is. But in some contexts we may want to treat different data points differently:  We are more certain about some of the numbers than others.  Some of the numbers are much larger than others, and we expect the absolute errors for them to be larger.  We applied some transformation to the data, like in the previous sections.  In such cases we may want to introduce weights  (some positive numbers) and minimize the sum instead of . Larger weights mean that we penalize the residuals (the differences between the model and the data) more. To solve this weighted least squares problem in Matlab, we need to multiply the first equation in by , the second by , and so on. To do this, arrange the weights into a column vector w and let z = (A.*w)\\(b.*w); The array operations .* take care of multiplying each equation by its weight.  Weights can be used to mitigate the distortion caused by data transformation of the form . Indeed, the application of magnifies the errors around by the factor of . If this is undesirable, we should use the weights to compensate.  In we used the logit transformation . Its derivative is . This is a positive quantity, so we do not need absolute value; the weights are simply .   Use weighted least squares to fit a logistic function  Improve the solution of by using weights to compensate for data transformation. Compare the results to the previous ones.  We continue the code from by adding the following lines.  w = y.*(1-y); % weights beta = (X.*w)\\(yt.*w); % weighted least squares solution f = @(x) 1 .\/ (1 + exp(-(x.^(0:1))*beta)); figure(); plot(t, f(t), 'b', x, y, 'r*') title('Weighted Least Squares')  The first two lines compute new parameters for logistic function , using weights. The rest proceeds as before. The plot is shown on a new figure.   Note that we do not always want to compensate for data transformation by using weights . Linear regression works best if the standard deviation of different values (assumed to include random errors) is about the same. When the values grow exponentially and are measured with the same relative accuracy, the standard deviation will grow with the values. In this case, the logarithmic transformation may help with non-linearity of the model and with the uniformity of standard deviations.  "
},
{
  "id": "example-weighted-fit-logistic",
  "level": "2",
  "url": "section-weighted-least-squares.html#example-weighted-fit-logistic",
  "type": "Example",
  "number": "28.3.1",
  "title": "Use weighted least squares to fit a logistic function.",
  "body": " Use weighted least squares to fit a logistic function  Improve the solution of by using weights to compensate for data transformation. Compare the results to the previous ones.  We continue the code from by adding the following lines.  w = y.*(1-y); % weights beta = (X.*w)\\(yt.*w); % weighted least squares solution f = @(x) 1 .\/ (1 + exp(-(x.^(0:1))*beta)); figure(); plot(t, f(t), 'b', x, y, 'r*') title('Weighted Least Squares')  The first two lines compute new parameters for logistic function , using weights. The rest proceeds as before. The plot is shown on a new figure.  "
},
{
  "id": "section-example-implicit-equation",
  "level": "1",
  "url": "section-example-implicit-equation.html",
  "type": "Section",
  "number": "28.4",
  "title": "Fitting an implicit equation",
  "body": " Fitting an implicit equation  This is an optional section, feel free to skip it.  Not all data points represent a function of the form . They may happen to accumulate along some closed curve such as an ellipse. General implicit equation of an ellipse is There are five unknown coefficients here. So, given a set of points , , we get a linear system by plugging each point into . Its least squares solution describes an ellipse that fits the data best in the sense of having the smallest sum which should hopefully fit the ellipse.   Fit an ellipse to given points  Plot an ellipse that fits the given 7 data points: x = [1 2 4 5 4 3 1]'; y = [2 0 -1 1 2 3 4]'; Then plot it together with the points, using fimplicit command. Its syntax is fimplicit(@(x, y) ..., [xmin xmax ymin ymax]) where the first argument is the implicit equation (something equated to 0), and the second is the plot window.    X = [x.^2 x.*y y.^2 x y]; b = X\\ones(7, 1); hold on plot(x, y, 'r*') fun = @(x, y) b(1)*x.^2 + b(2)*x.*y + b(3)*y.^2 + b(4)*x + b(5)*y - 1; win = [min(x)-1 max(x)+1 min(y)-1 max(y)+1]; fimplicit(fun, win) hold off  Here the vector of parameters is called b instead of beta to shorten the implicit formula. It is obtained by solving a system with 1 on the right hand side, according to . The plot window is calculated from the data to allow margins of 1 unit on all sides.  Note that while it's safe to leave spaces around + signs in the formula fun (some find it improves readability), one has to be extra careful with such spaces within a vector. Indeed, [min(x) -1 max(x) +1 min(y) -1 max(y) +1] would be a vector of 8 numbers, not 4. Matlab does understand [min(x) - 1 max(x) + 1 min(y) - 1 max(y) + 1]; as a vector of 4 numbers, however.   Vectorizing a function for implicit plot  It is tempting to write the anonymous function as fun = @(x, y) [x.^2 x.*y y.^2 x y]*b - 1 which is shorter and consistent with how we used parameters in the past. And this works but Matlab complains: Warning: Function behaves unexpectedly on array inputs. To improve performance, properly vectorize your function to return an output with the same size and shape as the input arguments. What is it complaining about?   "
},
{
  "id": "example-best-fit-ellipse",
  "level": "2",
  "url": "section-example-implicit-equation.html#example-best-fit-ellipse",
  "type": "Example",
  "number": "28.4.1",
  "title": "Fit an ellipse to given points.",
  "body": " Fit an ellipse to given points  Plot an ellipse that fits the given 7 data points: x = [1 2 4 5 4 3 1]'; y = [2 0 -1 1 2 3 4]'; Then plot it together with the points, using fimplicit command. Its syntax is fimplicit(@(x, y) ..., [xmin xmax ymin ymax]) where the first argument is the implicit equation (something equated to 0), and the second is the plot window.    X = [x.^2 x.*y y.^2 x y]; b = X\\ones(7, 1); hold on plot(x, y, 'r*') fun = @(x, y) b(1)*x.^2 + b(2)*x.*y + b(3)*y.^2 + b(4)*x + b(5)*y - 1; win = [min(x)-1 max(x)+1 min(y)-1 max(y)+1]; fimplicit(fun, win) hold off  Here the vector of parameters is called b instead of beta to shorten the implicit formula. It is obtained by solving a system with 1 on the right hand side, according to . The plot window is calculated from the data to allow margins of 1 unit on all sides.  Note that while it's safe to leave spaces around + signs in the formula fun (some find it improves readability), one has to be extra careful with such spaces within a vector. Indeed, [min(x) -1 max(x) +1 min(y) -1 max(y) +1] would be a vector of 8 numbers, not 4. Matlab does understand [min(x) - 1 max(x) + 1 min(y) - 1 max(y) + 1]; as a vector of 4 numbers, however.  "
},
{
  "id": "section-example-implicit-equation-5",
  "level": "2",
  "url": "section-example-implicit-equation.html#section-example-implicit-equation-5",
  "type": "Question",
  "number": "28.4.2",
  "title": "Vectorizing a function for implicit plot.",
  "body": "Vectorizing a function for implicit plot  It is tempting to write the anonymous function as fun = @(x, y) [x.^2 x.*y y.^2 x y]*b - 1 which is shorter and consistent with how we used parameters in the past. And this works but Matlab complains: Warning: Function behaves unexpectedly on array inputs. To improve performance, properly vectorize your function to return an output with the same size and shape as the input arguments. What is it complaining about?  "
},
{
  "id": "exercises-transforming-data",
  "level": "1",
  "url": "exercises-transforming-data.html",
  "type": "Exercises",
  "number": "28.5",
  "title": "Homework",
  "body": " Homework    A power law is a function of the form . By taking logarithm on both sides we get , which is a linear function of . So, to fit a power law to given data , we apply the logarithm to both and , and follow the linear regression process. Try this with France Covid data . Does the power law fit better or worse than exponential? (Compare visually, on the basis of plots.)     The number of active Covid cases at SU during October 1-23, 2020, is given below. y = [5 5 4 5 9 25 45 65 77 87 87 89 97 101 90 74 57 26 20 13 12 12 13]'; The x-values can be x = (1:23)' . Try to fit a bell-shaped Gaussian function (where ) to the data. This can be done by the logarithmic transformation yt = log(y) followed by fitting a quadratic function to yt . Fit a quadratic function by solving a system with the matrix X = x.^(0:2) , without weights. Having found the parameters beta , we get a suitable function f = @(x) exp(x.^(0:2)*beta) which should be plotted together with the data points.    Repeat , using weights as explained in . Does the new curve fit better or worse than the curve in ?  "
},
{
  "id": "exercises-transforming-data-2",
  "level": "2",
  "url": "exercises-transforming-data.html#exercises-transforming-data-2",
  "type": "Exercise",
  "number": "28.5.1",
  "title": "",
  "body": "  A power law is a function of the form . By taking logarithm on both sides we get , which is a linear function of . So, to fit a power law to given data , we apply the logarithm to both and , and follow the linear regression process. Try this with France Covid data . Does the power law fit better or worse than exponential? (Compare visually, on the basis of plots.)  "
},
{
  "id": "exercise-transforming-data-2",
  "level": "2",
  "url": "exercises-transforming-data.html#exercise-transforming-data-2",
  "type": "Exercise",
  "number": "28.5.2",
  "title": "",
  "body": "  The number of active Covid cases at SU during October 1-23, 2020, is given below. y = [5 5 4 5 9 25 45 65 77 87 87 89 97 101 90 74 57 26 20 13 12 12 13]'; The x-values can be x = (1:23)' . Try to fit a bell-shaped Gaussian function (where ) to the data. This can be done by the logarithmic transformation yt = log(y) followed by fitting a quadratic function to yt . Fit a quadratic function by solving a system with the matrix X = x.^(0:2) , without weights. Having found the parameters beta , we get a suitable function f = @(x) exp(x.^(0:2)*beta) which should be plotted together with the data points. "
},
{
  "id": "exercises-transforming-data-4",
  "level": "2",
  "url": "exercises-transforming-data.html#exercises-transforming-data-4",
  "type": "Exercise",
  "number": "28.5.3",
  "title": "",
  "body": "  Repeat , using weights as explained in . Does the new curve fit better or worse than the curve in ? "
},
{
  "id": "section-nls-motivation",
  "level": "1",
  "url": "section-nls-motivation.html",
  "type": "Section",
  "number": "29.1",
  "title": "Motivating examples for Nonlinear Least Squares",
  "body": " Motivating examples for Nonlinear Least Squares  Suppose we observe population growth over time, and expect that it should be governed by a differential equation of the form which means the growth, initially exponential, is eventually constrained by the carrying capacity  . The general solution of is where depends on the initial condition. In practice, we do not know the values of but we can try to estimate them by fitting a function of type to observations , . It seems impossible to transform the data in a way that will make all three parameters linear (logit transformation works only if is known).  Recall that least squares method means minimizing the sum of squares of residuals, which is a function of parameters : Since is a smooth function, we could theoretically try the multivariable calculus approach: finds its partial derivatives of first order, equate them to zero, and solve the resulting system of equations: But this system will be nonlinear and is unlikely to have a symbolic solution. Should we try some multivariable root-finding method such as Newton's method?  In practice, trying to minimize a function by solving is not the most productive approach: there are probably many critical points, some of them saddle points, and some of them may be points of local maximum rather than minimum. It is better to search for a minimum directly, which is a problem of multivariable optimization . We will study optimization in the last part of this course. For now, we'll use the built-in Matlab tool fminsearch , the underlying principle of which (the Nelder-Mead method) will be considered later.  "
},
{
  "id": "section-nls-motivation-2",
  "level": "2",
  "url": "section-nls-motivation.html#section-nls-motivation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity "
},
{
  "id": "section-nls-motivation-4",
  "level": "2",
  "url": "section-nls-motivation.html#section-nls-motivation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multivariable optimization "
},
{
  "id": "section-using-fminsearch-curvefit",
  "level": "1",
  "url": "section-using-fminsearch-curvefit.html",
  "type": "Section",
  "number": "29.2",
  "title": "Using fminsearch for curve-fitting",
  "body": " Using fminsearch for curve-fitting  The syntax of fminsearch is similar to fsolve (which searchers for solutions ): the first argument is the function to be minimized, the second is initial point from which to start the search. For example, fminsearch(@(x) x^2 + x, 0) returns -0.5 which is where the function is minimal. The choice of initial point does not matter here, since the minimum is unique. But for the second example fminsearch(@(x) x^4 - x^2, 0) the initial point matters: the function may find the minimum 0.7071 or -0.7071. Note that fminsearch is not misled by which is also a critical point: it can tell a difference between minimum and maximum.  As most numerical methods, fminsearch may fail at its task: fminsearch(@(x) exp(x), 0) returns -786.4315 (there are no points of minimum, of course), while fminsearch(@(x) x^3 - x, 4) overlooks the local minimum at and diverges to negative infinity. The success is much more likely if the initial point is chosen with some care. In case of fitting a curve to data, one should try to guess the signs and approximate sizes of the parameters.  Since our models generally have more than one parameter, we need multivariable fminsearch . For example, fminsearch(@(b) b(1)^2 + b(2)^4 + 3*b(1) - b(2), [1; 2]) finds the minimum of (using letter b to shorten the formula, as usually our parameters are called .) Note that the function being minimized still has only one argument, but this argument is now a vector.  Since the choice of initial point is an important step, we need a way to choose reasonable values of the parameters. To do this, let us take a closer look at the logistic curve . The meaning of parameter is not very intuitive, which motivates the following equivalent form of the function: Note that this curve is obtained from the standard logistic function  with  vertical stretching by factor ;  shift to the right by units;  horizontal stretching by factor .  ( Reference and plot .)  Since the standard logistic function rises from 0 to 1 and has maximal slope when , we can relate parameters directly to shape of the curve:   is the x-value at which the curve has the steepest slope;   is the amount by which the curve rises;   measures its horizontal size; the curve is essentially flat outside of the interval .     Fit a logistic function to Covid data  Fit a general logistic curve to the data in without variable transformations.  Once we have the data x, y , we can set up the sum-of-squares function S according to . The parameters are to be represented by the components b(1), b(2), b(3) in some order (I use the order ). First, use a mindless guess for initial point, [0; 0; 1] . The orientation of data vectors x, y does not matter here since we no longer make a linear system out of them.  y = [1 1 1 5 8 10 27 44 62 93 101 110 112 115 116 117 118 120]; x = 1:numel(y); f = @(x, b) b(1).\/(1 + exp(-(x-b(2))\/b(3))); % the model equation opt = fminsearch(@(b) sum((y - f(x, b)).^2), [0; 0; 1]); % optimal (?) b t = linspace(min(x), max(x), 1000)'; plot(t, f(t, opt), 'b', x, y, 'r*') disp(opt)  The two middle lines describe the logic of the method: set up a model as a function of explanatory variable(s) x and parameter(s) b , then minimize the sum of squares of the deviations y - f(x, b) . Finally, the optimal (?) values of parameter b are used to plot the best-fitting curve.  The above code fails, as is often the case with multivariable optimization. We should think of a better way to choose the initial point. For example, the first parameter is the carrying capacity, and this is clearly at least as large as 120. The second parameter is the -coordinate of its center which looks like 10. And the third parameter is about a tenth of the horizontal span of the non-flat part, maybe 2. An initial point like [120; 10; 2] does the job. Note that the fit is much better than what we achieved in .  The fminsearch optimization includes limits on the number of function evaluations, and on the number of iterations that it can do before stopping. If you get a warning that the process stopped because of these limits, try increasing them. For example, options = optimset('MaxFunEvals', 10000, 'MaxIter', 10000); opt = fminsearch(..., options); The first line creates a structure (which would be called a dictionary in some languages) which records the options for the optimization algorithm.  "
},
{
  "id": "section-using-fminsearch-curvefit-5",
  "level": "2",
  "url": "section-using-fminsearch-curvefit.html#section-using-fminsearch-curvefit-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard logistic function "
},
{
  "id": "example-best-fit-logistic-nls",
  "level": "2",
  "url": "section-using-fminsearch-curvefit.html#example-best-fit-logistic-nls",
  "type": "Example",
  "number": "29.2.1",
  "title": "Fit a logistic function to Covid data.",
  "body": " Fit a logistic function to Covid data  Fit a general logistic curve to the data in without variable transformations.  Once we have the data x, y , we can set up the sum-of-squares function S according to . The parameters are to be represented by the components b(1), b(2), b(3) in some order (I use the order ). First, use a mindless guess for initial point, [0; 0; 1] . The orientation of data vectors x, y does not matter here since we no longer make a linear system out of them.  y = [1 1 1 5 8 10 27 44 62 93 101 110 112 115 116 117 118 120]; x = 1:numel(y); f = @(x, b) b(1).\/(1 + exp(-(x-b(2))\/b(3))); % the model equation opt = fminsearch(@(b) sum((y - f(x, b)).^2), [0; 0; 1]); % optimal (?) b t = linspace(min(x), max(x), 1000)'; plot(t, f(t, opt), 'b', x, y, 'r*') disp(opt)  The two middle lines describe the logic of the method: set up a model as a function of explanatory variable(s) x and parameter(s) b , then minimize the sum of squares of the deviations y - f(x, b) . Finally, the optimal (?) values of parameter b are used to plot the best-fitting curve.  The above code fails, as is often the case with multivariable optimization. We should think of a better way to choose the initial point. For example, the first parameter is the carrying capacity, and this is clearly at least as large as 120. The second parameter is the -coordinate of its center which looks like 10. And the third parameter is about a tenth of the horizontal span of the non-flat part, maybe 2. An initial point like [120; 10; 2] does the job. Note that the fit is much better than what we achieved in . "
},
{
  "id": "section-source-location",
  "level": "1",
  "url": "section-source-location.html",
  "type": "Section",
  "number": "29.3",
  "title": "Beyond curve-fitting: source location",
  "body": " Beyond curve-fitting: source location  Suppose someone took water samples at various points and measured the concentration of some pollutant (microplastics, oil, etc) at each point. Let's use for these amounts. A question of interest is the source of this pollution.  The theory of partial differential equations tells us that if a substance diffuses from a point source at under somewhat idealized conditions (ignoring currents, decay, etc) then its concentration after some time will be expressed by the two-dimensional Gaussian function Here are the shape parameters of the Gaussian (describing how tall and wide it is) and are its location parameters (where it is centered). We are really interested in the latter, but all four will need to be determined by the nonlinear least squares process.  One can visualize the above as surface-fitting: given the points we seek to fit a surface of type to them, with the ultimate goal of locating the center of that Gaussian. Suppose the data is as follows.  x = [1 3 5 1 2 4 6 1 2 5 7]; y = [1 2 1 3 2 4 3 4 4 5 3]; z = [3 9 8 4 6 9 8 3 6 6 5];   Find the source of pollution  Fit a two-dimensional Gaussian to the above data and report the expected location of the source.  The problem is solved in three lines: model function, optimization, output. The components of vector b below represent the parameters in this order.  f = @(x, y, b) b(1)*exp(-((x-b(3)).^2 + (y-b(4)).^2)\/b(2)); opt = fminsearch(@(b) sum((z - f(x, y, b)).^2), [1; 1; 1; 1]); fprintf('The source is located near (%g, %g) \\n', opt(3:4));   "
},
{
  "id": "section-source-location-2",
  "level": "2",
  "url": "section-source-location.html#section-source-location-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source "
},
{
  "id": "example-best-fit-2d-gaussian",
  "level": "2",
  "url": "section-source-location.html#example-best-fit-2d-gaussian",
  "type": "Example",
  "number": "29.3.1",
  "title": "Find the source of pollution.",
  "body": " Find the source of pollution  Fit a two-dimensional Gaussian to the above data and report the expected location of the source.  The problem is solved in three lines: model function, optimization, output. The components of vector b below represent the parameters in this order.  f = @(x, y, b) b(1)*exp(-((x-b(3)).^2 + (y-b(4)).^2)\/b(2)); opt = fminsearch(@(b) sum((z - f(x, y, b)).^2), [1; 1; 1; 1]); fprintf('The source is located near (%g, %g) \\n', opt(3:4));  "
},
{
  "id": "exercises-nonlinear-least-squares",
  "level": "1",
  "url": "exercises-nonlinear-least-squares.html",
  "type": "Exercises",
  "number": "29.4",
  "title": "Homework",
  "body": " Homework    Consider the count of world-wide Covid cases ( source ) from Fall 2020:   New reported cases  The graph shows three stages of accelerated growth: March-April, June-July, and from October onward. Since the total reflects the spread of disease in different regions, it is natural that it looks like the sum of different logistic curves.  Accordingly, we try modeling this by the sum of three logistic curves. To reduce the amount of data, we use the 7-day averages reported on the 1st, 11th, and 21th of every month, from March 1 to November 21. These 27 data values (measured in thousands) are below.  y = [1 4 21 67 80 79 77 85 94 110 126 148 180 205 230 257 259 254 265 267 292 295 337 389 503 573 588];  The corresponding x-values are simply x = 1:numel(y) . Run plot(x, y, '*') to visualize the data: this will help with choosing initial parameters, as described below.  High-dimensional optimization is difficult, and fminsearch will need your help in the form of a good initial point ( ones(9, 1) is not good enough). The logistic equation leads to the 9-parameter model Reasonable initial guesses would be:   are the x-values of places where the three waves are the steepest   are the sizes of the three waves (how much each of them adds to the total)   are about a tenth of the non-flat span of the wave.    Follow the examples such as in plotting the best-fitting curve together with the data. Since the main interest in building a model like this is to predict future development, extend the curve by a month into the future (this means 3 units on x-axis). What does it predict for December 21?   "
},
{
  "id": "exercises-nonlinear-least-squares-2",
  "level": "2",
  "url": "exercises-nonlinear-least-squares.html#exercises-nonlinear-least-squares-2",
  "type": "Exercise",
  "number": "29.4.1",
  "title": "",
  "body": "  Consider the count of world-wide Covid cases ( source ) from Fall 2020:   New reported cases  The graph shows three stages of accelerated growth: March-April, June-July, and from October onward. Since the total reflects the spread of disease in different regions, it is natural that it looks like the sum of different logistic curves.  Accordingly, we try modeling this by the sum of three logistic curves. To reduce the amount of data, we use the 7-day averages reported on the 1st, 11th, and 21th of every month, from March 1 to November 21. These 27 data values (measured in thousands) are below.  y = [1 4 21 67 80 79 77 85 94 110 126 148 180 205 230 257 259 254 265 267 292 295 337 389 503 573 588];  The corresponding x-values are simply x = 1:numel(y) . Run plot(x, y, '*') to visualize the data: this will help with choosing initial parameters, as described below.  High-dimensional optimization is difficult, and fminsearch will need your help in the form of a good initial point ( ones(9, 1) is not good enough). The logistic equation leads to the 9-parameter model Reasonable initial guesses would be:   are the x-values of places where the three waves are the steepest   are the sizes of the three waves (how much each of them adds to the total)   are about a tenth of the non-flat span of the wave.    Follow the examples such as in plotting the best-fitting curve together with the data. Since the main interest in building a model like this is to predict future development, extend the curve by a month into the future (this means 3 units on x-axis). What does it predict for December 21?  "
},
{
  "id": "section-introduction-optimization",
  "level": "1",
  "url": "section-introduction-optimization.html",
  "type": "Section",
  "number": "30.1",
  "title": "Basic concepts of optimization",
  "body": " Basic concepts of optimization  Optimization may be naturally stated as search for maximum (for example, maximum profit) or minimum (minimum cost). But since every point of maximum of a function is also a point of minimum of , it is enough to study the minimization problem.  Suppose is a real-valued function on some set . The function attains its global minimum at if for all . It is possible to have several points of global minimum, for example on the interval attains global minimum of at the points and .  The Extreme Value Theorem states that if is a continuous function and the set is closed (includes all its boundary points) and bounded (is contained in some cube), then there is a point at which attains its global minimum.  A function attains its local minimum at if there exists such that for all such that . That is, there exists a neighborhood of point such that the smallest value of in that neighborhood is .  A major source of difficulty of optimization is searching for global minimum and finding only a local one. There is no universal recipe for avoiding this problem. Consider the function on some long interval such as . Where is its global minimum? There is no reliable and efficient way to find it.  A function that has only one point of local minimum on some set is called unimodal . For example, is unimodal on the interval but is not (according to our definition; when people focus on maximum instead of minimum, the situation is reversed). Working with unimodal functions is much easier because our algorithm is much more likely to find minimum.  A function is convex (also called concave up in calculus) if its graph lies below its secant lines, meaning A function is strictly convex if the inequality is strict. Such a function is unimodal on any interval. (Can you find a unimodal function that is not convex?)  Also, is called concave (in calculus, concave down ) if the sign of inequality in is reversed.  "
},
{
  "id": "section-introduction-optimization-3",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "global minimum "
},
{
  "id": "section-introduction-optimization-4",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Extreme Value Theorem "
},
{
  "id": "section-introduction-optimization-5",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local minimum "
},
{
  "id": "section-introduction-optimization-7",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unimodal "
},
{
  "id": "section-introduction-optimization-8",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convex strictly convex "
},
{
  "id": "section-introduction-optimization-9",
  "level": "2",
  "url": "section-introduction-optimization.html#section-introduction-optimization-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "concave "
},
{
  "id": "section-brute-force",
  "level": "1",
  "url": "section-brute-force.html",
  "type": "Section",
  "number": "30.2",
  "title": "Brute force search",
  "body": " Brute force search  This is a very direct approach to minimization of : choose some large number of points on the interval, equally spaced, evaluate at each point, take the minimum of . How close will this be to the actual global minimum? If is differentiable and on the interval, the mean value theorem implies for all . Placing points on the interval, we have intervals of size between them. Hence, each point of the interval is within distance of some grid point . Therefore, This may be good enough for a rough estimate of global minimum. One can also refine this estimate by applying a more advanced method on the interval around the point where is attained.  In Matlab, the code for brute force search may look like x = linspace(a, b, n); y = f(x); [fm, ind] = min(y); Note the two-outputs form of min command: when used in this way, the first output is the value of minimum, and the second is the index at which it was found. So, y(ind) is the same as fm but more importantly, x(ind) is the corresponding -value.   Using brute force search on an interval  Minimize on the interval using points. Then use to estimate the true global minimum of on this interval.   f = @(x) sin(x) + sin(sqrt(2)*x); a = 0; b = 100; n = 100000; % number of points x = linspace(a, b, n); y = f(x); [fm, ind] = min(y); fprintf('Minimum %g attained near %g \\n', fm, x(ind));  The output is Minimum -1.99306 attained near 29.9413 . To estimate the accurac, note that everywhere, and that . So and therefore, the true global minimum of lies between and .   Brute force search requires many function evaluations, especially with several parameters. It is not practical as the primary search method, but may be useful in combination with other methods.  "
},
{
  "id": "example-brute-force",
  "level": "2",
  "url": "section-brute-force.html#example-brute-force",
  "type": "Example",
  "number": "30.2.1",
  "title": "Using brute force search on an interval.",
  "body": " Using brute force search on an interval  Minimize on the interval using points. Then use to estimate the true global minimum of on this interval.   f = @(x) sin(x) + sin(sqrt(2)*x); a = 0; b = 100; n = 100000; % number of points x = linspace(a, b, n); y = f(x); [fm, ind] = min(y); fprintf('Minimum %g attained near %g \\n', fm, x(ind));  The output is Minimum -1.99306 attained near 29.9413 . To estimate the accurac, note that everywhere, and that . So and therefore, the true global minimum of lies between and .  "
},
{
  "id": "section-newton-method-min",
  "level": "1",
  "url": "section-newton-method-min.html",
  "type": "Section",
  "number": "30.3",
  "title": "Newton method for minimization",
  "body": " Newton method for minimization  If we can find the derivative (or gradient in higher dimensions), it may be possible to apply one of root-finding methods of to it. For example, Newton's method was one of those. But since we are solving , the method will involve the second derivative of : it amounts to iteration of the function Let's try this out on a simple example.   Using Newton method for minimization  Minimize using the Newton method with initial point . How does the result depend on the initial point?   First compute the derivatives and . Then iterate the function from as in . Most of the code is copied from there.  f = @(x) x.^4 - 3*x.^2 + x + 1; fp = @(x) 4*x.^3 - 6*x + 1; fpp = @(x) 12*x.^2 - 6; g = @(x) x - fp(x)\/fpp(x); x0 = 0; max_tries = 1000; for k = 1:max_tries x1 = g(x0); if abs(x1-x0) < 100*eps(x0) break end x0 = x1; end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', x1, f(x1), k); else disp('Failed to converge') end  The result is obtained quickly: Found x = 0.169938 with f(x) = 1.08414 after 5 steps . But is this a minimum? Try t = linspace(-2, 2, 1000); plot(t, f(t)) to check. Also, note that looking at a graph like this is essentially a human-assisted brute-force search, since the function was evaluated on a uniform grid through the interval .  Do we get a better result with a different starting point?  The issue demonstrated by is that applying Newton's method (or another root-finding method) to is equally likely to lead to a maximum as to a minimum. However, this can be useful when we know that a function has just one critical point and that point is a minimum.  "
},
{
  "id": "example-newton-method-min",
  "level": "2",
  "url": "section-newton-method-min.html#example-newton-method-min",
  "type": "Example",
  "number": "30.3.1",
  "title": "Using Newton method for minimization.",
  "body": " Using Newton method for minimization  Minimize using the Newton method with initial point . How does the result depend on the initial point?   First compute the derivatives and . Then iterate the function from as in . Most of the code is copied from there.  f = @(x) x.^4 - 3*x.^2 + x + 1; fp = @(x) 4*x.^3 - 6*x + 1; fpp = @(x) 12*x.^2 - 6; g = @(x) x - fp(x)\/fpp(x); x0 = 0; max_tries = 1000; for k = 1:max_tries x1 = g(x0); if abs(x1-x0) < 100*eps(x0) break end x0 = x1; end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', x1, f(x1), k); else disp('Failed to converge') end  The result is obtained quickly: Found x = 0.169938 with f(x) = 1.08414 after 5 steps . But is this a minimum? Try t = linspace(-2, 2, 1000); plot(t, f(t)) to check. Also, note that looking at a graph like this is essentially a human-assisted brute-force search, since the function was evaluated on a uniform grid through the interval .  Do we get a better result with a different starting point? "
},
{
  "id": "section-golden-section",
  "level": "1",
  "url": "section-golden-section.html",
  "type": "Section",
  "number": "30.4",
  "title": "Golden section search",
  "body": " Golden section search  This is a bracket-based method for minimization which is similar to bisection method. However, if we applied bisection method to we might find a local maximum. The golden section search will not do that; it is designed to search for a minimum.  The bisection method was based on the idea that if (and is continuous), then there is a root of on the interval . What do we need to be sure there is at least a local minimum on ? Some point such that and . However, if we divide the interval into and , it is not clear what to do next: which part should we keep?  Instead, the bracket should include two interior points, say . Then we can compare and ; the smaller one will point to us which interval to keep, either (if is smaller) or (if is smaller).  The choice of two points is not obvious. We could place them of the way from each end, namely and . Then if, for example, , we know there is a point of minimum in . To keep the process going, need to pick two interior evaluation points on . Frustratingly, the point which is in , does not fit our algorithm because it is in the middle of , not from an edge.  Golden section method improves on the above by choosing as follows: The number is related to golden ratio by . The following intervals are all in the golden ratio to each other: The result of this invariance of the ratio is that when the bracket is reduced, the remaining interior point again divides it in the golden ratio.   Golden section search  With each step of iteration, only one additional evaluation of is needed. The bracket size is divided by at every step. This is linear rate of convergence, which is slow but reliable (if the function is unimodal), and we don't need the derivative of to use this method.  What if the function is not unimodal? If we are lucky, the process may converge to the global minimum. But it's quite possible that the global minimum will be lost from the bracket at some step and then we'll converge to a local minimum instead.   Minimize by golden section  Minimize using the golden section method on the interval .    f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 2; r = (3-sqrt(5))\/2; while b-a >= 100*eps(a) c = a + r*(b-a); d = b - r*(b-a); if f(c) < f(d) b = d; else a = c; end end fprintf('Found a minimum x = %g with f(x) = %g \\n', c, f(c));  The code in does not store previously computed values of the function and therefore they get recomputed again for the same -value. In some languages, such caching of previously computed function values may happen behind the scenes. In Matlab it does not (currently), so we need to store the values to be reused. The following version of the above code does this.   Efficient golden section search  Improve the efficiency of the code in by storing and reusing some function values.    We use the variables fc and fd to store the values of at the points c and d . When the algorithm replaces of these points with the other, the previously computed value is reused without executing the function again. This approach requires more work to be done before the main loop, in order to initialize fc and fd .  f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 2; r = (3-sqrt(5))\/2; c = a + r*(b-a); % preparation fc = f(c); d = b - r*(b-a); fd = f(d); while b-a >= 100*eps(a) if fc < fd b = d; d = c; fd = fc; % reused value c = a + r*(b-a); fc = f(c); % newly computed value else a = c; c = d; fc = fd; % reused value d = b - r*(b-a); fd = f(d); % newly computed value end end  The code is longer than but it runs faster because at every execution of the loop there is only one call to function instead of two.   Since the function used in and is easy to compute, the gain of optimized implementation may not be evident. To make it visible, replace the function with the following, which takes relatively long to evaluate: f = @(x) x.^4 - 3*x.^2 + x + 1 + 0*sum(rand(1, 1e6)); and time the script with tic  toc as in .  "
},
{
  "id": "section-golden-section-2",
  "level": "2",
  "url": "section-golden-section.html#section-golden-section-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "golden section "
},
{
  "id": "golden-png",
  "level": "2",
  "url": "section-golden-section.html#golden-png",
  "type": "Figure",
  "number": "30.4.1",
  "title": "",
  "body": " Golden section search "
},
{
  "id": "example-golden-section",
  "level": "2",
  "url": "section-golden-section.html#example-golden-section",
  "type": "Example",
  "number": "30.4.2",
  "title": "Minimize by golden section.",
  "body": " Minimize by golden section  Minimize using the golden section method on the interval .    f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 2; r = (3-sqrt(5))\/2; while b-a >= 100*eps(a) c = a + r*(b-a); d = b - r*(b-a); if f(c) < f(d) b = d; else a = c; end end fprintf('Found a minimum x = %g with f(x) = %g \\n', c, f(c)); "
},
{
  "id": "example-golden-section-optimized",
  "level": "2",
  "url": "section-golden-section.html#example-golden-section-optimized",
  "type": "Example",
  "number": "30.4.3",
  "title": "Efficient golden section search.",
  "body": " Efficient golden section search  Improve the efficiency of the code in by storing and reusing some function values.    We use the variables fc and fd to store the values of at the points c and d . When the algorithm replaces of these points with the other, the previously computed value is reused without executing the function again. This approach requires more work to be done before the main loop, in order to initialize fc and fd .  f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 2; r = (3-sqrt(5))\/2; c = a + r*(b-a); % preparation fc = f(c); d = b - r*(b-a); fd = f(d); while b-a >= 100*eps(a) if fc < fd b = d; d = c; fd = fc; % reused value c = a + r*(b-a); fc = f(c); % newly computed value else a = c; c = d; fc = fd; % reused value d = b - r*(b-a); fd = f(d); % newly computed value end end  The code is longer than but it runs faster because at every execution of the loop there is only one call to function instead of two.  "
},
{
  "id": "exercises-single-variable-minimization",
  "level": "1",
  "url": "exercises-single-variable-minimization.html",
  "type": "Exercises",
  "number": "30.5",
  "title": "Homework",
  "body": " Homework    (Theoretical) For each of the following functions, use the derivative to determine if it is unimodal on the given interval. You do not need to actually find the minimum.   on    on    on    on       One can combine the reliability of golden section method with the speed of Newton's method as follows: start with golden section, and when the bracket becomes small (say, less than ), switch to Newton's method. This makes sense because once we get close to a root of , Newton's method converges to that specific root very quickly.  Apply the idea of previous paragraph to the minimization problem in . This means exiting the while loop sooner, and following after that.  "
},
{
  "id": "exercises-single-variable-minimization-2",
  "level": "2",
  "url": "exercises-single-variable-minimization.html#exercises-single-variable-minimization-2",
  "type": "Exercise",
  "number": "30.5.1",
  "title": "",
  "body": "  (Theoretical) For each of the following functions, use the derivative to determine if it is unimodal on the given interval. You do not need to actually find the minimum.   on    on    on    on    "
},
{
  "id": "exercises-single-variable-minimization-3",
  "level": "2",
  "url": "exercises-single-variable-minimization.html#exercises-single-variable-minimization-3",
  "type": "Exercise",
  "number": "30.5.2",
  "title": "",
  "body": "  One can combine the reliability of golden section method with the speed of Newton's method as follows: start with golden section, and when the bracket becomes small (say, less than ), switch to Newton's method. This makes sense because once we get close to a root of , Newton's method converges to that specific root very quickly.  Apply the idea of previous paragraph to the minimization problem in . This means exiting the while loop sooner, and following after that. "
},
{
  "id": "section-parabolic-interpolation",
  "level": "1",
  "url": "section-parabolic-interpolation.html",
  "type": "Section",
  "number": "31.1",
  "title": "Successive parabolic interpolation",
  "body": " Successive parabolic interpolation  Recall that Newton's method for root-finding, namely , has a geometric interpretation: draw a tangent line to at , and use the intersection of that line with the horizontal axis as the new -value. This geometric construction naturally led to the secant method: just replace a tangent line by a secant line. Is there a geometric interpretation for minimization using Newton's method, that is ?  Yes, there is. Let be the Taylor polynomial at of degree 2, namely The critical point of this polynomial is found by equating to zero: since we get . Therefore, the logic of minimization by Newton's method is to draw a tangent parabola at and use its critical point (hopefully a minimum) as the new -value.  Having made this geometric observation, we can eliminate derivatives from the picture by constructing a secant parabola instead, which is a parabola passing through three points on the graph of a function. Following the logic of the secant method, we should replace the oldest of the three points used to construct the parabola by the critical point of this parabola. The process repeats until it (hopefully) converges to a point of minimum. This is the method of successive parabolic interpolation .  How to find the critical point of parabola passing through points , , ? Newton interpolating polynomial is one way: it provides the interpolating polynomial in the form from where we can find , hence The coefficients are determined from and , namely    Minimize by successive parabolic interpolation  Minimize using successive parabolic interpolation with initial triple of points .    f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 0; c = 2; max_tries = 10000; for k = 1:max_tries alpha = (f(b)-f(a))\/(b-a); beta = (f(c)-f(a)-alpha*(c-a))\/((c-a)*(c-b)); x = (a+b)\/2 - alpha\/(2*beta); a = b; b = c; c = x; if max([a b c]) - min([a b c]) < 1e-6 break end end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', c, f(c), k); else disp('Failed to converge') end   As shows, parabolic interpolation can converge to a local maximum. Indeed, a closer look shows it does not distinguish between and , so it can maximize just as well as minimize (same issue as with Newton's method). So this method should be used in combination with another one, so that when the interpolated parabola is not acceptable (is upside down ), we fall back on the second method.  "
},
{
  "id": "section-parabolic-interpolation-4",
  "level": "2",
  "url": "section-parabolic-interpolation.html#section-parabolic-interpolation-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "successive parabolic interpolation "
},
{
  "id": "example-successive-parabolic-interpolation",
  "level": "2",
  "url": "section-parabolic-interpolation.html#example-successive-parabolic-interpolation",
  "type": "Example",
  "number": "31.1.1",
  "title": "Minimize by successive parabolic interpolation.",
  "body": " Minimize by successive parabolic interpolation  Minimize using successive parabolic interpolation with initial triple of points .    f = @(x) x.^4 - 3*x.^2 + x + 1; a = -2; b = 0; c = 2; max_tries = 10000; for k = 1:max_tries alpha = (f(b)-f(a))\/(b-a); beta = (f(c)-f(a)-alpha*(c-a))\/((c-a)*(c-b)); x = (a+b)\/2 - alpha\/(2*beta); a = b; b = c; c = x; if max([a b c]) - min([a b c]) < 1e-6 break end end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', c, f(c), k); else disp('Failed to converge') end  "
},
{
  "id": "section-fminbnd",
  "level": "1",
  "url": "section-fminbnd.html",
  "type": "Section",
  "number": "31.2",
  "title": "How <code class=\"code-inline tex2jax_ignore\">fminbnd<\/code> works",
  "body": " How fminbnd works  Matlab has a built-in command fminbnd for minimizing a function on a given interval . Its format is x = fminbnd(f, a, b) . We can get additional information about its work from the option optimset('Display', 'iter') which displays every step of the algorithm.  f = @(x) sin(x)+sin(4*x); a = -4; b = 5; x = fminbnd(f, a, b, optimset('Display', 'iter')); t = linspace(a, b, 1000); plot(t, f(t), 'b', x, f(x), 'r*')  The log shows that fminbnd uses the combination of parabolic interpolation (fast but fails often) with golden section (fallback method, reliable but slow). Toward the end, when the search arrives in a neighborhood of a minimum, parabolic interpolation takes over. In general, the minimum will be a local one.  Try the above code with the function f = @(x) cos(x\/3) instead. There is not a single use of parabolic interpolation anymore. Why?  There are three ways to learn more about Matlab functions such as this one.  help fminbnd shows a brief plain-text description, focused on the syntax and examples of use  doc fminbnd opens a new window with more information, including an outline of the algorithm used and its limitations  open fminbnd shows the code of the function if it is itself written in Matlab (for example, fzero , fminbnd and fminsearch are but fft is not)  The source code shows that fminbnd tries parabolic interpolation first and falls back on golden section when the parabola is considered unacceptable.  "
},
{
  "id": "section-gradient-descent-1d",
  "level": "1",
  "url": "section-gradient-descent-1d.html",
  "type": "Section",
  "number": "31.3",
  "title": "Gradient descent in one dimension",
  "body": " Gradient descent in one dimension  The method of gradient descent uses only the first derivative of function to determine the direction in which to look for its minimum. As a motivating example, suppose we started Newton's method at and found and . According to Newton's method our next point should be . But since the function is increasing near , should not the search move to the left instead of to the right?  In its simplest, one-dimensional form, gradient descent amounts to repeatedly computing where a parameter may be a fixed number or be somehow adjusted in the process. The idea is to make a small step in the direction where the function decreases.   First attempt at gradient descent  Minimize the function from using gradient descent with and initial point .   f = @(x) x.^4 - 3*x.^2 + x + 1; fp = @(x) 4*x.^3 - 6*x + 1; beta = 0.1; a = 0; max_tries = 10000; for k = 1:max_tries x = a - beta*fp(a); if abs(x-a) < 100*eps(a) break end a = x; end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The code takes more steps than Newton's method in but it actually minimizes the function.   If no formula for is available, the methods of numerical differentiation ( ) can be used to implement gradient descent, for example with with some small .  Unfortunately, gradient descent with fixed is not a reliable method. Simply multiplying both f and fp by 2 in results in failure to converge (why? add disp(x) to the loop to see). We could make smaller and restore convergence, but this is manual fine-tuning. The underlying issue is scaling : multiplying by a positive constant does not change the location of its minima, yet it affects the gradient descent if it uses the same value. (Newton's method is invariant under scaling because is invariant.)   Model case of gradient descent  Determine for what values of the gradient descent will converge for the function where .   Here , hence . This converges to if and only if . This means we need , and the optimal value of is . Note that .   The message of is that we should try to adjust to be of the size , even if we do not have a formula for . One way to do this is to start with a guess like and then update  after every step using . This makes approximately the reciprocal of . (Similar idea was used in Broyden's method in .) To implement this idea, we insert the line beta = abs(x-a)\/abs(fp(x)-fp(a)); into the loop in (where?). Now if the function is multiplied by 2 or even 2000, the method continues to converge.  "
},
{
  "id": "example-simplest-form-gradient-descent",
  "level": "2",
  "url": "section-gradient-descent-1d.html#example-simplest-form-gradient-descent",
  "type": "Example",
  "number": "31.3.1",
  "title": "First attempt at gradient descent.",
  "body": " First attempt at gradient descent  Minimize the function from using gradient descent with and initial point .   f = @(x) x.^4 - 3*x.^2 + x + 1; fp = @(x) 4*x.^3 - 6*x + 1; beta = 0.1; a = 0; max_tries = 10000; for k = 1:max_tries x = a - beta*fp(a); if abs(x-a) < 100*eps(a) break end a = x; end if k < max_tries fprintf('Found x = %g with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The code takes more steps than Newton's method in but it actually minimizes the function.  "
},
{
  "id": "example-model-case-gradient-descent",
  "level": "2",
  "url": "section-gradient-descent-1d.html#example-model-case-gradient-descent",
  "type": "Example",
  "number": "31.3.2",
  "title": "Model case of gradient descent.",
  "body": " Model case of gradient descent  Determine for what values of the gradient descent will converge for the function where .   Here , hence . This converges to if and only if . This means we need , and the optimal value of is . Note that .  "
},
{
  "id": "exercises-parabolic-interpolation-descent",
  "level": "1",
  "url": "exercises-parabolic-interpolation-descent.html",
  "type": "Exercises",
  "number": "31.4",
  "title": "Homework",
  "body": " Homework    Parabolic interpolation is also useful when applied just once, without iteration. For example, after evaluating on a grid and choosing with smallest (i.e., brute force minimization) we can get a more precise location of the minimum with parabolic interpolation through the points , .  Write a script that applies the above idea to the function on the interval . Use points for brute force minimization, locating a grid point with the smallest function value . Then find a more precise point of minimum using parabolic interpolation once . Since the exact point of minimum is , the script should display the differences and to illustrate the improvement achieved with parabolic interpolation.  There should be no loops in the script.   "
},
{
  "id": "exercises-parabolic-interpolation-descent-2",
  "level": "2",
  "url": "exercises-parabolic-interpolation-descent.html#exercises-parabolic-interpolation-descent-2",
  "type": "Exercise",
  "number": "31.4.1",
  "title": "",
  "body": "  Parabolic interpolation is also useful when applied just once, without iteration. For example, after evaluating on a grid and choosing with smallest (i.e., brute force minimization) we can get a more precise location of the minimum with parabolic interpolation through the points , .  Write a script that applies the above idea to the function on the interval . Use points for brute force minimization, locating a grid point with the smallest function value . Then find a more precise point of minimum using parabolic interpolation once . Since the exact point of minimum is , the script should display the differences and to illustrate the improvement achieved with parabolic interpolation.  There should be no loops in the script.  "
},
{
  "id": "section-gradient-descent-nd",
  "level": "1",
  "url": "section-gradient-descent-nd.html",
  "type": "Section",
  "number": "32.1",
  "title": "Gradient descent in several variables",
  "body": " Gradient descent in several variables  In order to minimize a function , we can start with initial vector and compute , then replace with and repeat until convergence is achieved (or the limit on steps is reached). This is the -dimensional version of the gradient descent method in . We already saw that the choice of is difficult even in one dimension. It gets worse in several dimensions.  Consider the function with the minimum at . Its gradient is . So, the process described above is There is no good value of to use here. If , the second coordinate grows exponentially. If , for example (which is optimal for the second coordinate), it will take a million steps just to reduce the first coordinate, say, from to .  The underlying issue is that the direction does not really point toward the minimum of in this example. The steepest descent goes sideways due to very different rates of change in different variables. This is one of main reasons why optimization in several variables is hard, and why it is sensitive to scaling of the variables. We would not have such difficulties with .  One way to improve the situation is to run a one-variable minimization algorithm, line search at each step, to find the minimum of on the line of steepest descent. This means minimizing the function where . If we find the exact minimum on the line each time, then the minimization process for function converges to the minimum quickly. But for slightly more complicated functions the difficulty emerges again. Consider Rosenbrock's function  Its graph has a curved valley along the parabola . One-dimensional minimization along the line of steepest descent leads to each consecutive direction being perpendicular to the previous one (why?). So the algorithm ends up zig-zagging in tiny steps in the deep narrow valley, making very little progress toward minimum. And since each step is its own minimization problem (in one dimension), the entire process may take too long.  In order to try the method of previous paragraph in practice, we need a line-search subroutine such as Matlab's command fminbnd for one-dimensional minimization on an interval. Recall from that this command uses a combination of parabolic interpolation and golden section methods to find a local minimum: for example fminbnd(@(t) t*cos(t), 0, 12) returns even though the absolute minimum of on the interval is at . But it is fast, and for our current purpose, a line search at each step of gradient descent, being fast is more important than finding the absolute minimum.   Gradient descent with line search  Minimize Rosenbrock's function using line search in the direction of steepest descent, , at each step. Use a random starting point randn(2, 1) . Plot the path of the search.   The gradient of Rosenbrock's function is The code uses a matrix path to record the path taken by the search.  f = @(x) (x(1)-1).^2 + 100*(x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 400*x(1)*(x(1).^2 - x(2)); -200*(x(1).^2 - x(2))]; x = randn(2, 1); max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = x; g = -fg(x); % direction of descent t_min = fminbnd(@(t) f(x + t*g), 0, 1); dx = t_min*g; x = x + dx; if norm(dx) < 1e-6 break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  Whether the code converges or fails depends on the initial point. Often it fails despite being on the right track, because of too many tiny zigzagging steps.   Note there is a reason to have a less restrictive stopping conditions for step size norm(dx) when the goal is minimization (compared to root-finding). A smooth function changes slowly near a point of minimum (like a parabola near its vertex), so an error of size in terms of location of the minimum could mean an error of about for the minimal value.  There are several weak line search methods designed to determine a step size that makes the function noticeably smaller without finding its exact minimum. They can speed up the process but do not completely resolve the zigzagging issue which is the root of the difficulty in . The directions seem to be a problem, not just the step sizes.  "
},
{
  "id": "section-gradient-descent-nd-5",
  "level": "2",
  "url": "section-gradient-descent-nd.html#section-gradient-descent-nd-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "line search "
},
{
  "id": "example-gradient-descent-line-search",
  "level": "2",
  "url": "section-gradient-descent-nd.html#example-gradient-descent-line-search",
  "type": "Example",
  "number": "32.1.1",
  "title": "Gradient descent with line search.",
  "body": " Gradient descent with line search  Minimize Rosenbrock's function using line search in the direction of steepest descent, , at each step. Use a random starting point randn(2, 1) . Plot the path of the search.   The gradient of Rosenbrock's function is The code uses a matrix path to record the path taken by the search.  f = @(x) (x(1)-1).^2 + 100*(x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 400*x(1)*(x(1).^2 - x(2)); -200*(x(1).^2 - x(2))]; x = randn(2, 1); max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = x; g = -fg(x); % direction of descent t_min = fminbnd(@(t) f(x + t*g), 0, 1); dx = t_min*g; x = x + dx; if norm(dx) < 1e-6 break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  Whether the code converges or fails depends on the initial point. Often it fails despite being on the right track, because of too many tiny zigzagging steps.  "
},
{
  "id": "section-newton-method-min-nd",
  "level": "1",
  "url": "section-newton-method-min-nd.html",
  "type": "Section",
  "number": "32.2",
  "title": "Newton’s method for multivariate minimization",
  "body": " Newton's method for multivariate minimization  Recall from that the Newton method for solving a vector equation proceeds in iterative steps of the form where is the Jacobian matrix of . For the purpose of minimizing a scalar function , we let . The Jacobian matrix of then becomes the Hessian matrix of , which is the matrix of all second-order partial derivatives. Thus, the Newton method for minimization proceeds in steps . One can view the application of as the course correction : with rare exceptions, the method does not choose the direction of steepest descent. For the badly scaled quadratic function the Newton direction is right on target: since the step taken from any point is so we arrive at the minimum after one step. This works for any quadratic function.  Since a smooth function locally looks like a quadratic polynomial (2nd order Taylor polynomial), Newton's method has a chance of improving the situation even for challenging functions like Rosenbrock's. Let us try it out.   Multivariate minimization with Newton's method  Minimize Rosenbrock's function using Newton's method with a random starting point randn(2, 1) . Plot the path of the search.   The gradient of Rosenbrock's function is and its Hessian matrix is   f = @(x) (x(1)-1).^2 + 100*(x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 400*(x(1).^2 - x(2))*x(1); -200*(x(1).^2 - x(2))]; fh = @(x) [2 + 400*(x(1)^2-x(2)) + 800*x(1)^2, -400*x(1); -400*x(1), 200]; x = randn(2, 1); max_tries = 10000; path = zeros(2, max_tries); for k=1:max_tries path(:, k) = x; dx = -fh(x)\\fg(x); x = x + dx; if norm(dx) < 1e-6 break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The process usually makes a few seemingly random jumps but then quickly converges.   The downsides of Newton's method were already noted in : it requires second-order derivatives, and it could just as well converge to a local maximum.  "
},
{
  "id": "section-newton-method-min-nd-2",
  "level": "2",
  "url": "section-newton-method-min-nd.html#section-newton-method-min-nd-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hessian matrix "
},
{
  "id": "example-newton-min-rosenbrock",
  "level": "2",
  "url": "section-newton-method-min-nd.html#example-newton-min-rosenbrock",
  "type": "Example",
  "number": "32.2.1",
  "title": "Multivariate minimization with Newton’s method.",
  "body": " Multivariate minimization with Newton's method  Minimize Rosenbrock's function using Newton's method with a random starting point randn(2, 1) . Plot the path of the search.   The gradient of Rosenbrock's function is and its Hessian matrix is   f = @(x) (x(1)-1).^2 + 100*(x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 400*(x(1).^2 - x(2))*x(1); -200*(x(1).^2 - x(2))]; fh = @(x) [2 + 400*(x(1)^2-x(2)) + 800*x(1)^2, -400*x(1); -400*x(1), 200]; x = randn(2, 1); max_tries = 10000; path = zeros(2, max_tries); for k=1:max_tries path(:, k) = x; dx = -fh(x)\\fg(x); x = x + dx; if norm(dx) < 1e-6 break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The process usually makes a few seemingly random jumps but then quickly converges.  "
},
{
  "id": "section-conjugate-gradient",
  "level": "1",
  "url": "section-conjugate-gradient.html",
  "type": "Section",
  "number": "32.3",
  "title": "Conjugate gradient method",
  "body": " Conjugate gradient method  The methods considered so far in this chapter have one thing in common: lack of memory. Each step is taken as if it was the first. In contrast, conjugate gradient method uses its previous step to determine the direction of next one. The primary benefit is avoiding sharp turns which create a zigzagging pattern we saw in . The method described below is sometimes called nonlinear conjugate gradient method because conjugate gradient method often refers specifically to minimization of a quadratic function as a way of approximately solving the linear system .  Suppose we arrived to point from point , following the direction vector . With the conjugate gradient method, the direction of our next move will be where . Large means we keep mostly the same direction as before, small means we go with the gradient. We should make smaller, giving more importance to the gradient, if is much closer to the minimum than . This progress can be measured by the ratio (small if we arrived in the vicinity of minimum), so we use this quantity as .   Conjugate gradient method  Modify so that it minimizes the simplified Rosenbrock's function using conjugate gradient method. Use a random starting point randn(2, 1) . Plot the path of the search.    f = @(x) (x(1)-1).^2 + (x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 4*x(1)*(x(1).^2 - x(2)); -2*(x(1).^2 - x(2))]; x = randn(2, 1); v = zeros(2, 1); gamma = 0; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = x; w = -fg(x) + gamma*v; % with correction t_min = fminbnd(@(t) f(x + t*w), 0, 1); dx = t_min*w; if norm(dx) < 1e-6 break end gamma = norm(fg(x+dx))^2\/norm(fg(x))^2; % update gamma x = x + dx; % update x v = w; % record the step for the future end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  Compare the search path to what we get without correction in w : it is less zigzagging. However, if we use the original Rosenbrock function which is very far from quadratic or convex, the search diverges to infinity. Several other correction terms (different choices for coefficient) have been proposed for the nonlinear conjugate gradient method. But it appears that the narrow valley landscape of the Rosenbrock function is best navigated either by using both first and second order derivatives (the Newton method) or by using no derivatives at all (the Nelder-Mead method, to be considered later).   "
},
{
  "id": "section-conjugate-gradient-2",
  "level": "2",
  "url": "section-conjugate-gradient.html#section-conjugate-gradient-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjugate gradient method "
},
{
  "id": "example-conjugate-gradient",
  "level": "2",
  "url": "section-conjugate-gradient.html#example-conjugate-gradient",
  "type": "Example",
  "number": "32.3.1",
  "title": "Conjugate gradient method.",
  "body": " Conjugate gradient method  Modify so that it minimizes the simplified Rosenbrock's function using conjugate gradient method. Use a random starting point randn(2, 1) . Plot the path of the search.    f = @(x) (x(1)-1).^2 + (x(1).^2 - x(2)).^2; fg = @(x) [2*(x(1)-1) + 4*x(1)*(x(1).^2 - x(2)); -2*(x(1).^2 - x(2))]; x = randn(2, 1); v = zeros(2, 1); gamma = 0; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = x; w = -fg(x) + gamma*v; % with correction t_min = fminbnd(@(t) f(x + t*w), 0, 1); dx = t_min*w; if norm(dx) < 1e-6 break end gamma = norm(fg(x+dx))^2\/norm(fg(x))^2; % update gamma x = x + dx; % update x v = w; % record the step for the future end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  Compare the search path to what we get without correction in w : it is less zigzagging. However, if we use the original Rosenbrock function which is very far from quadratic or convex, the search diverges to infinity. Several other correction terms (different choices for coefficient) have been proposed for the nonlinear conjugate gradient method. But it appears that the narrow valley landscape of the Rosenbrock function is best navigated either by using both first and second order derivatives (the Newton method) or by using no derivatives at all (the Nelder-Mead method, to be considered later).  "
},
{
  "id": "exercises-gradient-newton-conjugate",
  "level": "1",
  "url": "exercises-gradient-newton-conjugate.html",
  "type": "Exercises",
  "number": "32.4",
  "title": "Homework",
  "body": " Homework    Modify to include the idea of Broyden's method from : the script should not use the Hessian matrix fh , instead relying on an approximation to its inverse obtained with Broyden's method. The following modification should help with convergence: start with small initial guess B = 0.001*eye(2); and make the stopping condition less restrictive: norm(h) < 1e-6 Re-run the script several times (about five): since it has a random initial point, the results may differ. Does the minimization process converge to the minimum every time?   Remark: the combination of ideas of Broyden's method and line search, with some modifications, is known as the BFGS algorithm , which is widely used for gradient-based unconstrained optimization. It is implemented in Matlab ( fminunc command), Python scientific library SciPy, etc.  "
},
{
  "id": "exercises-gradient-newton-conjugate-2",
  "level": "2",
  "url": "exercises-gradient-newton-conjugate.html#exercises-gradient-newton-conjugate-2",
  "type": "Exercise",
  "number": "32.4.1",
  "title": "",
  "body": "  Modify to include the idea of Broyden's method from : the script should not use the Hessian matrix fh , instead relying on an approximation to its inverse obtained with Broyden's method. The following modification should help with convergence: start with small initial guess B = 0.001*eye(2); and make the stopping condition less restrictive: norm(h) < 1e-6 Re-run the script several times (about five): since it has a random initial point, the results may differ. Does the minimization process converge to the minimum every time?  "
},
{
  "id": "section-nelder-mead-reflect",
  "level": "1",
  "url": "section-nelder-mead-reflect.html",
  "type": "Section",
  "number": "33.1",
  "title": "First attempt at derivative-free minimization",
  "body": " First attempt at derivative-free minimization  The intuitive picture of steepest descent (the gradient method) is a drop of water sliding down the graph of a function under the force of gravity: the water follows the steepest way down. The intuition of the Nelder-Mead method is a geometric shape like a triangle or a tetrahedron tumbling down a sloped surface. In two dimensions, the shape is a triangle, in three dimensions it is a tetrahedron; in dimensions it is an -dimensional simplex , meaning points that are not contained in any hyperplane. To keep the explanation simple, we focus on the case .  Given a triangle in -plane, we evaluate the function at its vertices. The vertex with the largest value of (for example, ) might get replaced by its reflection. One could imagine reflecting about the opposite side by dropping a perpendicular line from onto and following it. However, this kind of reflection is not invariant under linear transformations of plane, such as the scaling of coordinates. The Nelder-Mead method uses reflection about the midpoint of . The midpoint can be computed as , and then the reflected point is   However, it would be pointless to replace by if this did not make the function smaller. So the replacement only happens if . Otherwise the program stops and reports the center of the last computed triangle as an approximate point of minimum. This is a reflection-only version of the Nelder-Mead method.   Reflection-only Nelder-Mead method  Minimize the function using the reflection-only version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , with small (this makes a small right isosceles triangle). Plot the path of the search.   It is convenient to arrange column vectors into a matrix representing a triangle. This makes it easy to replace the vertex with greatest value of after identifying it with two-output max command. The command mean(T, 2) computes the mean while sum(T, 2) is .  f = @(x) x(1)^4 + x(2)^2 - sin(x(1)+x(2)); A = randn(2, 1); B = A + [0.01; 0]; C = A + [0; 0.01]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; % midpoint of opposite side R = 2*M - T(:, ind); if f(R) < fmax T(:, ind) = R; else break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end   "
},
{
  "id": "section-nelder-mead-reflect-2",
  "level": "2",
  "url": "section-nelder-mead-reflect.html#section-nelder-mead-reflect-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simplex "
},
{
  "id": "example-reflection-nelder-mead",
  "level": "2",
  "url": "section-nelder-mead-reflect.html#example-reflection-nelder-mead",
  "type": "Example",
  "number": "33.1.1",
  "title": "Reflection-only Nelder-Mead method.",
  "body": " Reflection-only Nelder-Mead method  Minimize the function using the reflection-only version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , with small (this makes a small right isosceles triangle). Plot the path of the search.   It is convenient to arrange column vectors into a matrix representing a triangle. This makes it easy to replace the vertex with greatest value of after identifying it with two-output max command. The command mean(T, 2) computes the mean while sum(T, 2) is .  f = @(x) x(1)^4 + x(2)^2 - sin(x(1)+x(2)); A = randn(2, 1); B = A + [0.01; 0]; C = A + [0; 0.01]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; % midpoint of opposite side R = 2*M - T(:, ind); if f(R) < fmax T(:, ind) = R; else break end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  "
},
{
  "id": "section-nelder-mead-contract",
  "level": "1",
  "url": "section-nelder-mead-contract.html",
  "type": "Section",
  "number": "33.2",
  "title": "Reflection-contraction combination",
  "body": " Reflection-contraction combination  One issue with the reflection-only method of is the fixed size of the triangle. With a large triangle, we will only have a rough idea of where the minimum is when the search ends. Also, a large triangle will not detect any fine features of the landscape such as the narrow valley of Rosenbrock's function. On the other hand, a small triangle necessarily moves in small steps and is therefore slow.  There is a way to improve the situation: instead of stopping when reflection does not work, reduce the size of triangle in half, contracting it toward the best vertex (the one is the with lowest value). The contraction map is where is the vertex toward which we contract. This reflection-contraction method needs a stopping criterion, so it does not run forever. We can stop when the triangle becomes very small, with vertices getting close to one another.   Reflection-contraction Nelder-Mead method  Minimize the function using the reflection-contraction version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , , so that the initial triangle is not small anymore. Plot the path of the search.   The code is mostly the same as in , with additional lines noted in comments.  f = @(x) x(1)^4 + x(2)^2 - sin(x(1)+x(2)); % f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2; A = randn(2, 1); B = A + [1; 0]; C = A + [0; 1]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break % stop, the triangle is small enough end values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; R = 2*M - T(:, ind); if f(R) < fmax T(:, ind) = R; else [fmin, ind] = min(values); % find the best vertex T = (T + T(:, ind))\/2; % contract toward it end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end   works fine in terms of speed and accuracy. However, replacing the relatively simple function in with Rosenbrock's function  f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2 we find the search usually fails. The moving triangle has to become very small to fit into the narrow valley of this function, which makes subsequent movement along the valley floor very slow. As as the valley is long, it fails to reach the minimum within the allowed number of steps.  "
},
{
  "id": "example-reflection-contraction-nelder-mead",
  "level": "2",
  "url": "section-nelder-mead-contract.html#example-reflection-contraction-nelder-mead",
  "type": "Example",
  "number": "33.2.1",
  "title": "Reflection-contraction Nelder-Mead method.",
  "body": " Reflection-contraction Nelder-Mead method  Minimize the function using the reflection-contraction version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , , so that the initial triangle is not small anymore. Plot the path of the search.   The code is mostly the same as in , with additional lines noted in comments.  f = @(x) x(1)^4 + x(2)^2 - sin(x(1)+x(2)); % f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2; A = randn(2, 1); B = A + [1; 0]; C = A + [0; 1]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break % stop, the triangle is small enough end values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; R = 2*M - T(:, ind); if f(R) < fmax T(:, ind) = R; else [fmin, ind] = min(values); % find the best vertex T = (T + T(:, ind))\/2; % contract toward it end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  "
},
{
  "id": "section-nelder-mead-expand",
  "level": "1",
  "url": "section-nelder-mead-expand.html",
  "type": "Section",
  "number": "33.3",
  "title": "Reflection-contraction-expansion Nelder-Mead method",
  "body": " Reflection-contraction-expansion Nelder-Mead method  The reason for the lack of success with Rosenbrock's function is that the version of Nelder-Mead method described in does not allow the triangle to change its shape to fit the geometry of the graph. A long narrow valley calls for a long narrow triangle.  The process of changing the shape of the triangle is expansion , which is introduced as an alternative to reflection from . Suppose that the current triangle qualifies for reflection: for example, is the point with largest value, and . Consider the possibility of replacing with a point that lies beyond , thus making the triangle longer. The point is determined by the following equation, which shows that it is as far from as is from the center of reflection : If , then we replace with rather than . In other words, the highest vertex of the triangle is replaced by whichever of is lower.  Having both contraction and expansion in the process means the triangle can grow smaller and larger, moving faster when the path is clear, or becoming very narrow to fit into a difficult to reach valley.   Reflection-contraction-expansion Nelder-Mead method  Minimize Rosenbrock's function using the reflection-contraction-expansion version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , . Plot the path of the search.   The code is mostly the same as in , with additional lines noted in comments.  f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2; A = randn(2, 1); B = A + [1; 0]; C = A + [0; 1]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break end values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; R = 2*M - T(:, ind); if f(R) < fmax E = 2*R - M; % consider expansion if f(E) < f(R) T(:, ind) = E; % choose to expand else T(:, ind) = R; % choose to reflect end else [fmin, ind] = min(values); T = (T + T(:, ind))\/2; end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end   The algorithm described above works quite well, considering we are minimizing a challenging function without using any derivative information. The version of the Nelder-Mead algorithm implemented in Matlab is a little different in that it chooses between three ways of contracting a simplex (called contract inside , contract outside , shrink ) but the main ideas are the same. To observe the process of fminsearch optimization, run f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2; options = optimset('Display', 'iter'); fminsearch(f, randn(2, 1), options)   "
},
{
  "id": "example-rce-nelder-mead",
  "level": "2",
  "url": "section-nelder-mead-expand.html#example-rce-nelder-mead",
  "type": "Example",
  "number": "33.3.1",
  "title": "Reflection-contraction-expansion Nelder-Mead method.",
  "body": " Reflection-contraction-expansion Nelder-Mead method  Minimize Rosenbrock's function using the reflection-contraction-expansion version of the Nelder-Mead method. Use a random starting point randn(2, 1) as one vertex of the initial triangle, and let other vertices be , . Plot the path of the search.   The code is mostly the same as in , with additional lines noted in comments.  f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2; A = randn(2, 1); B = A + [1; 0]; C = A + [0; 1]; T = [A B C]; max_tries = 10000; path = zeros(2, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break end values = [f(T(:,1)) f(T(:,2)) f(T(:,3))]; [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/2; R = 2*M - T(:, ind); if f(R) < fmax E = 2*R - M; % consider expansion if f(E) < f(R) T(:, ind) = E; % choose to expand else T(:, ind) = R; % choose to reflect end else [fmin, ind] = min(values); T = (T + T(:, ind))\/2; end end plot(path(1, 1:k), path(2, 1:k), '-+') if k < max_tries x = mean(T, 2); fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  "
},
{
  "id": "section-nelder-mead-ndim",
  "level": "1",
  "url": "section-nelder-mead-ndim.html",
  "type": "Section",
  "number": "33.4",
  "title": "Nelder-Mead method in higher dimensions",
  "body": " Nelder-Mead method in higher dimensions  This is an optional section, feel free to skip it.  The code in works only for functions of two variables but it can be adapted for -dimensional optimization. Instead of the initial triangle A = randn(2, 1); B = A + [1; 0]; C = A + [0; 1]; T = [A B C]; we create initial -dimensional simplex using implicit array expansion: A = randn(n, 1); T = [A A+eye(n)]; The search path will be path = zeros(n, max_tries) which we will only use for visualization when .  The line values = [f(T(:,1)) f(T(:,2)) f(T(:,3))] resists vectorization unless we rewrite f (which we probably should not do because in practice, the objective function is user-provided code). So it becomes a loop: values = zeros(1, n+1); for j = 1:n+1 values(j) = f(T(:, j)); end The remaining adjustments are small: the midpoint of opposite side is now M = (sum(T, 2) - T(:, ind))\/n but the formulas for reflection , expansion , and contraction remain the same. The plot of search path and formatting of text output need cosmetic changes, as shown in the following example.   Implementing the Nelder-Mead method in higher dimensions  Generalize to higher dimensions. Use it to minimize the 3-variable Rosenbrock function .   The code collects the lines from the previous paragraphs.  f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2 + 100*(x(2)^2 - x(3))^2; n = 3; % number of variables A = randn(n, 1); T = [A, A+eye(n)]; max_tries = 10000; path = zeros(n, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break end values = zeros(1, n+1); for j = 1:n+1 values(j) = f(T(:, j)); end [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/n; R = 2*M - T(:, ind); if f(R) < fmax E = 2*R - M; if f(E) < f(R) T(:, ind) = E; else T(:, ind) = R; end else [fmin, ind] = min(values); T = (T + T(:, ind))\/2; end end if n == 2 plot(path(1, 1:k), path(2, 1:k), '-+') elseif n == 3 plot3(path(1, 1:k), path(2, 1:k), path(3, 1:k), '-+') end if k < max_tries x = mean(T, 2); fprintf('Found x with f(x) = %g after %d steps\\n x =', f(x), k); disp(x'); else disp('Failed to converge') end   "
},
{
  "id": "example-rce-nelder-mead-ndim",
  "level": "2",
  "url": "section-nelder-mead-ndim.html#example-rce-nelder-mead-ndim",
  "type": "Example",
  "number": "33.4.1",
  "title": "Implementing the Nelder-Mead method in higher dimensions.",
  "body": " Implementing the Nelder-Mead method in higher dimensions  Generalize to higher dimensions. Use it to minimize the 3-variable Rosenbrock function .   The code collects the lines from the previous paragraphs.  f = @(x) (x(1)-1)^2 + 100*(x(1)^2 - x(2))^2 + 100*(x(2)^2 - x(3))^2; n = 3; % number of variables A = randn(n, 1); T = [A, A+eye(n)]; max_tries = 10000; path = zeros(n, max_tries); for k = 1:max_tries path(:, k) = mean(T, 2); if max(abs(T - mean(T, 2))) < 1e-6 break end values = zeros(1, n+1); for j = 1:n+1 values(j) = f(T(:, j)); end [fmax, ind] = max(values); M = (sum(T, 2) - T(:, ind))\/n; R = 2*M - T(:, ind); if f(R) < fmax E = 2*R - M; if f(E) < f(R) T(:, ind) = E; else T(:, ind) = R; end else [fmin, ind] = min(values); T = (T + T(:, ind))\/2; end end if n == 2 plot(path(1, 1:k), path(2, 1:k), '-+') elseif n == 3 plot3(path(1, 1:k), path(2, 1:k), path(3, 1:k), '-+') end if k < max_tries x = mean(T, 2); fprintf('Found x with f(x) = %g after %d steps\\n x =', f(x), k); disp(x'); else disp('Failed to converge') end  "
},
{
  "id": "exercises-nelder-mead",
  "level": "1",
  "url": "exercises-nelder-mead.html",
  "type": "Exercises",
  "number": "33.5",
  "title": "Homework",
  "body": " Homework    Apply the code in to Easom function  The global minimum is with but it is difficult to find because the function has many local minima and its landscape does not naturally lead to the global minimum. If you run the code based on five times (simply pressing F5 repeatedly), how many times does it converge to the global minimum ?  To improve the situation, add a stochastic (random) step to the minimization process, as an alternative to contraction. That is, when the algorithm in wants to contract the triangle, try the following point first. S = T(:, ind) + randn(2, 1); If the value of at S is smaller than the value at T(:, ind) , then replace T(:, ind) with S . Otherwise, perform the contraction step.  If you run the stochastic Nelder-Mead method five times (pressing F5 repeatedly) how many times does it converge to the global minimum?  Remark : The documentation of SciPy optimize package provides an overview of many other optimization methods. There are a few bracket-based methods for functions of one variable (including golden section), several multivariate methods (such as Nelder-Mead), and in addition, some methods designed for finding the global minimum. Most of the latter group are stochastic methods: they intentionally make the search process subject to chance.  "
},
{
  "id": "exercises-nelder-mead-2",
  "level": "2",
  "url": "exercises-nelder-mead.html#exercises-nelder-mead-2",
  "type": "Exercise",
  "number": "33.5.1",
  "title": "",
  "body": "  Apply the code in to Easom function  The global minimum is with but it is difficult to find because the function has many local minima and its landscape does not naturally lead to the global minimum. If you run the code based on five times (simply pressing F5 repeatedly), how many times does it converge to the global minimum ?  To improve the situation, add a stochastic (random) step to the minimization process, as an alternative to contraction. That is, when the algorithm in wants to contract the triangle, try the following point first. S = T(:, ind) + randn(2, 1); If the value of at S is smaller than the value at T(:, ind) , then replace T(:, ind) with S . Otherwise, perform the contraction step.  If you run the stochastic Nelder-Mead method five times (pressing F5 repeatedly) how many times does it converge to the global minimum? "
},
{
  "id": "section-penalty-method",
  "level": "1",
  "url": "section-penalty-method.html",
  "type": "Section",
  "number": "34.1",
  "title": "Penalty method",
  "body": " Penalty method  A typical problem of constrained optimization is to find the minimum of a function on some region of . One approach is to add a penalty for being outside of , for example let where is a large number, say . Then try to minimize , with the expectation that the minimum will be in . Since within , such a minimum will also be a minimum of .  The constant penalty  has several disadvantages. It makes discontinuous, and it does not eliminate local minima outside of . Since minimization methods often converge to a local minimum, we may end up outside of even though there are much smaller values within .  A way to correct both of the above issues is to add to a continuous penalty function that is equal to inside and is positive outside of . Then minimize . One way to construct is to describe the region by way of an inequality , for example describes a disk of radius . There are multiple ways to use such an inequality to form a penalty function. For example, the linear penalty (with a large constant ) and quadratic penalty The linear penalty is continuous but not differentiable on the boundary of . The quadratic penalty is differentiable, which is preferable for the methods that rely on the gradient. Indeed, the gradient of is On the other hand, the fact that starts off with zero slope makes it more likely that the minimum of will be slightly outside of the region . So there is a tradeoff between reaching the minimum and enforcing the constraint.  Let us try both methods with a simple function: minimize on the disk . We could use our own implementation of Nelder-Mead method from but fminsearch already does that, so it is used below.   Comparing two penalty functions  Minimize on the disk by using fminsearch with a penalty term.    f = @(x) (x(1) + 7*x(2)).^3; c = @(x) x(1).^2 + x(2).^2 - 1; M = 1e6; x0 = randn(2, 1); xm1 = fminsearch(@(x) f(x) + M*max(c(x), 0), x0); xm2 = fminsearch(@(x) f(x) + M*max(c(x), 0).^2, x0); fprintf('Linear penalty: found x = (%g, %g), |x| = %g, f(x) = %g \\n', xm1, norm(xm1), f(xm1)); fprintf('Quadratic penalty: found x = (%g, %g), |x| = %g, f(x) = %g \\n', xm2, norm(xm2), f(xm2));  With the linear penalty, the minimization process sometimes fails to converge within the allowed attempts; but if it converges, it stays in the unit disk. With the quadratic penalty, the convergence is more reliable but the norm of the point of minimum is usually greater than .   In practice, quadratic penalty is usually preferable and the issue of the minimum being slightly out of bounds is dealt with by increasing and using the previously found point of minimum as a new starting point. This is done below.   Iterative minimization on the unit disk  Minimize on the disk by iteratively using fminsearch with a quadratic penalty term.    f = @(x) (x(1) + 7*x(2)).^3; c = @(x) x(1).^2 + x(2).^2 - 1; x0 = randn(2, 1); for M = [1e3, 1e6, 1e9, 1e12] x0 = fminsearch(@(x) f(x) + M*max(c(x), 0).^2, x0); end fprintf('Found x = (%g, %g), |x| = %g, f(x) = %g \\n', x0, norm(x0), f(x0));   Note that the penalty method works just as well with equality constraints of the form . In this case one adds instead of to the objective function. And if there are multiple constraints, they are all added.  "
},
{
  "id": "example-comparing-penalty-functions",
  "level": "2",
  "url": "section-penalty-method.html#example-comparing-penalty-functions",
  "type": "Example",
  "number": "34.1.1",
  "title": "Comparing two penalty functions.",
  "body": " Comparing two penalty functions  Minimize on the disk by using fminsearch with a penalty term.    f = @(x) (x(1) + 7*x(2)).^3; c = @(x) x(1).^2 + x(2).^2 - 1; M = 1e6; x0 = randn(2, 1); xm1 = fminsearch(@(x) f(x) + M*max(c(x), 0), x0); xm2 = fminsearch(@(x) f(x) + M*max(c(x), 0).^2, x0); fprintf('Linear penalty: found x = (%g, %g), |x| = %g, f(x) = %g \\n', xm1, norm(xm1), f(xm1)); fprintf('Quadratic penalty: found x = (%g, %g), |x| = %g, f(x) = %g \\n', xm2, norm(xm2), f(xm2));  With the linear penalty, the minimization process sometimes fails to converge within the allowed attempts; but if it converges, it stays in the unit disk. With the quadratic penalty, the convergence is more reliable but the norm of the point of minimum is usually greater than .  "
},
{
  "id": "example-iterative-constrained-minimization",
  "level": "2",
  "url": "section-penalty-method.html#example-iterative-constrained-minimization",
  "type": "Example",
  "number": "34.1.2",
  "title": "Iterative minimization on the unit disk.",
  "body": " Iterative minimization on the unit disk  Minimize on the disk by iteratively using fminsearch with a quadratic penalty term.    f = @(x) (x(1) + 7*x(2)).^3; c = @(x) x(1).^2 + x(2).^2 - 1; x0 = randn(2, 1); for M = [1e3, 1e6, 1e9, 1e12] x0 = fminsearch(@(x) f(x) + M*max(c(x), 0).^2, x0); end fprintf('Found x = (%g, %g), |x| = %g, f(x) = %g \\n', x0, norm(x0), f(x0));  "
},
{
  "id": "section-penalty-method-9",
  "level": "2",
  "url": "section-penalty-method.html#section-penalty-method-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equality constraints "
},
{
  "id": "section-lagrange-multiplier",
  "level": "1",
  "url": "section-lagrange-multiplier.html",
  "type": "Section",
  "number": "34.2",
  "title": "Lagrange multiplier method",
  "body": " Lagrange multiplier method  Suppose we want to minimize subject to equality constraint in -dimensional space. A point of such constrained minimum must have perpendicular to the surface . Therefore, is parallel to . We can express this as where is the Lagrange multiplier (so far unknown). We have the system of equations with unknowns. The Jacobian of this system is the block matrix where is the Hessian of . It is feasible to solve the system using multivarible Newton's method, for example.   Using the Lagrange multiplier method  Minimize on the circle using the Lagrange multiplier method.   The code is similar to but with more complicated gradient and Hessian. To avoid notational confusion, it uses x for the vector and v for the vector . The functions Fg and Fh below are the gradient and Hessian of the function We equate Fg to zero vector, and use Fh according to Newton's method.  f = @(x) x(1)^4 + exp(3*x(1)+x(2)); Fg = @(v) [4*v(1)^3 + 3*exp(3*v(1) + v(2)) - v(3)*(2*v(1)); ... exp(3*v(1) + v(2)) - v(3)*(2*v(2)); ... -(v(1)^2 + v(2)^2 - 1)]; Fh = @(v) [12*v(1)^2 + 9*exp(3*v(1) + v(2)) - v(3)*2, 3*exp(3*v(1) + v(2)), -(2*v(1)); ... 3*exp(3*v(1) + v(2)), exp(3*v(1) + v(2)) - v(3)*2, -(2*v(2)); ... -2*v(1), -2*v(2), 0]; v = randn(3, 1); max_tries = 10000; for k=1:max_tries dv = -Fh(v)\\Fg(v); v = v + dv; if norm(dv) < 1e-6 break end end x = v(1:2); if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The method converges quickly and the point it finds satisfies to constraint. But this point is often a maximum rather than a minimum of the function. As usual with Newton's method, the situation can be improved by running a rough search algorithm first, just to locate a good starting point.   Matlab provides a command fmincon which implements constrained minimization with various constraints, both equality and inequality types. However, its availability may vary depending on version, and Octave does not have it built-in.  "
},
{
  "id": "section-lagrange-multiplier-2",
  "level": "2",
  "url": "section-lagrange-multiplier.html#section-lagrange-multiplier-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange multiplier "
},
{
  "id": "example-lagrange-multiplier",
  "level": "2",
  "url": "section-lagrange-multiplier.html#example-lagrange-multiplier",
  "type": "Example",
  "number": "34.2.1",
  "title": "Using the Lagrange multiplier method.",
  "body": " Using the Lagrange multiplier method  Minimize on the circle using the Lagrange multiplier method.   The code is similar to but with more complicated gradient and Hessian. To avoid notational confusion, it uses x for the vector and v for the vector . The functions Fg and Fh below are the gradient and Hessian of the function We equate Fg to zero vector, and use Fh according to Newton's method.  f = @(x) x(1)^4 + exp(3*x(1)+x(2)); Fg = @(v) [4*v(1)^3 + 3*exp(3*v(1) + v(2)) - v(3)*(2*v(1)); ... exp(3*v(1) + v(2)) - v(3)*(2*v(2)); ... -(v(1)^2 + v(2)^2 - 1)]; Fh = @(v) [12*v(1)^2 + 9*exp(3*v(1) + v(2)) - v(3)*2, 3*exp(3*v(1) + v(2)), -(2*v(1)); ... 3*exp(3*v(1) + v(2)), exp(3*v(1) + v(2)) - v(3)*2, -(2*v(2)); ... -2*v(1), -2*v(2), 0]; v = randn(3, 1); max_tries = 10000; for k=1:max_tries dv = -Fh(v)\\Fg(v); v = v + dv; if norm(dv) < 1e-6 break end end x = v(1:2); if k < max_tries fprintf('Found x = (%g, %g) with f(x) = %g after %d steps\\n', x, f(x), k); else disp('Failed to converge') end  The method converges quickly and the point it finds satisfies to constraint. But this point is often a maximum rather than a minimum of the function. As usual with Newton's method, the situation can be improved by running a rough search algorithm first, just to locate a good starting point.  "
},
{
  "id": "exercises-constrained-optimization",
  "level": "1",
  "url": "exercises-constrained-optimization.html",
  "type": "Exercises",
  "number": "34.3",
  "title": "Homework",
  "body": " Homework    (Theoretical) Use the Lagrange multiplier method to find the critical points of the function on the circle . Compare with the result of .    Using the penalty method of , find four numbers on the interval for which the product of all pairwise distances is as large as possible. What pattern do you observe in the points that achieve this maximum?  Remark: such maximization problem makes sense for any number of points, and on any bounded set. The points that maximize the product of distances are known as Fekete points and are used in approximation theory, specifically for polynomial interpolation.  Hint: to improve the performance of fminsearch , do not use absolute value: instead, minimize the product This product can be concisely expressed in Matlab as prod(x(1:3)-x(4))*prod(x(1:2)-x(3))*(x(1)-x(2)) The constraint function c could be simply max(abs(x)) - 1 ; this constrains all four points to the interval at once.   "
},
{
  "id": "exercises-constrained-optimization-2",
  "level": "2",
  "url": "exercises-constrained-optimization.html#exercises-constrained-optimization-2",
  "type": "Exercise",
  "number": "34.3.1",
  "title": "",
  "body": "  (Theoretical) Use the Lagrange multiplier method to find the critical points of the function on the circle . Compare with the result of . "
},
{
  "id": "exercises-constrained-optimization-3",
  "level": "2",
  "url": "exercises-constrained-optimization.html#exercises-constrained-optimization-3",
  "type": "Exercise",
  "number": "34.3.2",
  "title": "",
  "body": "  Using the penalty method of , find four numbers on the interval for which the product of all pairwise distances is as large as possible. What pattern do you observe in the points that achieve this maximum?  Remark: such maximization problem makes sense for any number of points, and on any bounded set. The points that maximize the product of distances are known as Fekete points and are used in approximation theory, specifically for polynomial interpolation.  Hint: to improve the performance of fminsearch , do not use absolute value: instead, minimize the product This product can be concisely expressed in Matlab as prod(x(1:3)-x(4))*prod(x(1:2)-x(3))*(x(1)-x(2)) The constraint function c could be simply max(abs(x)) - 1 ; this constrains all four points to the interval at once.  "
},
{
  "id": "section-linear-programming-introduction",
  "level": "1",
  "url": "section-linear-programming-introduction.html",
  "type": "Section",
  "number": "35.1",
  "title": "Introduction to linear programming",
  "body": " Introduction to linear programming  Suppose we want to maximize the function subject to constraints and . This is a linear programming (LP) problem, since each constraint is a linear inequality and the objective function is linear.  There are various standard forms to which linear programming problems can be transformed by manipulations such as the following:  An equality constraint can be expressed as the combination of and constraints.  Any constraint becomes after multiplication by .  Maximization of is equivalent to minimization of .    Using the transformations described above, any LP can be expressed as: where the inequality between vectors is understood as a system of linear inequalities: each component on the left is less than or equal to the corresponding component on the right. Compare this to how means a system of linear equations.  Sometimes the nature of the problem requires the variables to be nonnegative, which leads to Or, one may have linear equations instead of inequalities: One can convert between these three standard forms as follows.  From to : replace each variable with the difference , and require to be nonnegative. Since every real number is the difference of two nonnegative numbers, this does not change the essence of the problem. In terms of , this transformation keeps the same but doubles the size of by appending to the right. The vector is similarly doubled.  From to : add linear inequalities of the form . This means appending to the bottom of matrix , with zeros added to the bottom of vector .  From to : introduce slack variables  . Then replace all linear inequalities with nonnegativity constraints . What remains is the definition of slack variables, which is a system of linear equations .  From to : rewrite each linear equation as two linear inequalities. That is, a system of linear equations is equivalent to having two systems of linear inequalities: and . The latter system is rewritten as and appended to the former.  In Matlab, the problem is solved with x = linprog(c, A, b) which returns the optimal . One can get the optimal value of objective function with c'*x .   A simple linear programming problem  Maximize subject to constraints and .   Rephrasing this as the minimization of , we see that the coefficient vector should be [-1 -1] . Executing linprog([-1; -1], [1 2; 3 1], [4; 5]) yields [1.2; 1.4] . (Try to visualize this problem and its solution.)   illustrates basic use of linprog . This command allows more parameters which express equality constraints and additional lower and upper bounds on the variables: see help linprog .  Octave-specific remark . The current version of Octave has a similar function glpk instead of linprog . The main difference is that glpk(c, A, b) solves instead of . However, the fourth argument of glpk can be used to set lower bounds to instead of , the fifth argument (for upper bounds) can be left empty [] , and the sixth argument is a string indicating the form of constraints, with letters 'U' for . So, with Octave would be glpk([-1; -1], [1 2; 3 1], [4; 5], [-Inf; -Inf], [], 'UU') See help glpk for more.  As an additional example, let us solve the problem at the beginning of this section. The objective function was to be maximized, so we minimize which means c = [-1; -2; 5] . The constraints become , , , and . Finally, becomes . We arrive at a system of five linear constraints, summarized in A, b below: c = [-1; -2; 5]; A = [-1 0 0; 1 -1 0; 0 1 -1; 0 0 1; 1 0 -2]; b = [0; 0; 0; 10; -3]; x = linprog(c, A, b); fprintf('Found x = (%g, %g, %g) with c*x = %g \\n', x, c'*x) ; Note that A*x is the vector [0; -1.5; 0; 1.5; -3] where three of components are equal to the components of b and the others are strictly less. The equality means that the corresponding constraints, such as , are active at the optimal point: the point pushes against them. The constraints and are inactive at this point: they hold as strict inequalities. The solution would stay the same if the inactive constraints were removed.  The following terms may appear in error messages or warnings issued by linprog or its analogues in other software.  A feasible point is a vector that satisfies the constraints. The set of all such points is the feasible set.  A problem is infeasible if there are no feasible points. (Example: , , .) Such a problem has no solution.  A problem is unbounded if the objective function takes arbitrarily small values on the feasible set (in case of minimization) or arbitrarily large values (in case of maximization). Such a problem has no solution.  If the feasible set is nonempty and bounded, the problem surely has a solution. But it is possible to have an unbounded feasible set on which the objective function is bounded: recall .    Applied LP problems tend to have many variables and constraints, and a lot of work went into developing refining its solution methods such as the simplex method (walking along the edges of the feasible set) and interior point methods (moving through the interior of the feasible set toward its boundary).  "
},
{
  "id": "section-linear-programming-introduction-2",
  "level": "2",
  "url": "section-linear-programming-introduction.html#section-linear-programming-introduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(LP) "
},
{
  "id": "section-linear-programming-introduction-3",
  "level": "2",
  "url": "section-linear-programming-introduction.html#section-linear-programming-introduction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard forms "
},
{
  "id": "section-linear-programming-introduction-8",
  "level": "2",
  "url": "section-linear-programming-introduction.html#section-linear-programming-introduction-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slack variables "
},
{
  "id": "example-solving-with-linprog",
  "level": "2",
  "url": "section-linear-programming-introduction.html#example-solving-with-linprog",
  "type": "Example",
  "number": "35.1.1",
  "title": "A simple linear programming problem.",
  "body": " A simple linear programming problem  Maximize subject to constraints and .   Rephrasing this as the minimization of , we see that the coefficient vector should be [-1 -1] . Executing linprog([-1; -1], [1 2; 3 1], [4; 5]) yields [1.2; 1.4] . (Try to visualize this problem and its solution.)  "
},
{
  "id": "section-linear-programming-introduction-14",
  "level": "2",
  "url": "section-linear-programming-introduction.html#section-linear-programming-introduction-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "active inactive "
},
{
  "id": "section-linear-programming-introduction-15",
  "level": "2",
  "url": "section-linear-programming-introduction.html#section-linear-programming-introduction-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "feasible point infeasible unbounded "
},
{
  "id": "section-linear-programming-duality",
  "level": "1",
  "url": "section-linear-programming-duality.html",
  "type": "Section",
  "number": "35.2",
  "title": "Duality in linear programming",
  "body": " Duality in linear programming  The main differences between the standard forms of LP problems can be summarized as:  Constraints: I nequalities or E quations  Variables: R eal or N onnegative  Other differences: minimization vs maximization, inequalities vs , are relatively minor: changing the signs of , or takes care of those variations. So, one can imagine four major types of LP problems: IR, IN, ER, and EN. However, ER type problems are not really interesting, because a system of linear equations with real variables determines a hyperplane, and the restriction of a linear function to a hyperplane is either unbounded or constant. This leaves us with three types: IR, IN, EN, the examples of which are given by , , and , respectively.  This section will describe how each LP problem has a dual LP problem. Specifically:  A problem of type IR has a dual of type EN  A problem of type EN has a dual of type IR  A problem of type IN has a dual of type IN  In general, the dual of the dual problem is the original ( primal ) problem. The IN-IN duality is symmetric while IR-EN duality is asymmetric.  Specifically, symmetric duality states that the dual of is Asymmetric duality states that the dual of is Note that in both cases, the variables and constraints trade places; the dual has as many constraints as the original problem had variables (not counting the nonnegativity requirements). Also, the dual of a maximization problem is a minimization problem (and the other way around).  Strong Duality Theorem : Suppose that the primal LP problem has an optimal solution . Then the dual problem has an optimal solution where . Thus, although these problems have different objective functions, both objective functions have the same extreme (optimal) value.  Every feasible point of gives a lower bound on its optimal value: that is, . On the other hand, every feasible point of gives an upper bound on its optimal value: that is, . Since the optimal value (so far unknown) is the same for both problems, it is contained somewhere between known quantities and . This leads to the idea of moving the points through the feasible sets so that the duality gap  is decreased. Once the gap reaches zero, we have the solution. Or, if the gap becomes extremely small, we have a point that is almost as good as the optimal one.  Without going into the detailed proof of the Strong Duality Theorem, here is a sketch for asymmetric duality. Suppose is an optimal point for . If is any feasible point of , then which shows that each value of the objective function of the dual problem gives an upper bound for the primal problem (this part is the weak duality theorem ). It remains to show that there exists for which equality holds in .  Imagine applying force to the point : if it can be moved in this direction, the objective function will increase. Since such an increase is impossible, the force must be balanced by reaction forces of the walls , i.e., hyperplanes , which represent constraints. Only the active constraints, those for which , are relevant here, since does not touch the hyperplanes of inactive constraints. The normal vectors of the constraint hyperplanes are given by the rows of . Transposition makes a linear combination of the columns of with nonnegative coefficients; moreover, the coefficients of inactive constraints are zero. This means that for some vector such that if (inactive constraint) then . Returning to we see that with it becomes an equality.  "
},
{
  "id": "section-linear-programming-duality-3",
  "level": "2",
  "url": "section-linear-programming-duality.html#section-linear-programming-duality-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dual primal "
},
{
  "id": "section-linear-programming-duality-5",
  "level": "2",
  "url": "section-linear-programming-duality.html#section-linear-programming-duality-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Strong Duality Theorem "
},
{
  "id": "section-lp-duality-economic",
  "level": "1",
  "url": "section-lp-duality-economic.html",
  "type": "Section",
  "number": "35.3",
  "title": "Interpretation of duality in microeconomics",
  "body": " Interpretation of duality in microeconomics  The following example is adapted from Wikipedia article Dual linear program , available under the Creative Commons Attribution-ShareAlike License .  Consider a farmer who may grow wheat and barley with the set provision of some land, fertilizer and pesticide. To grow one unit of wheat, one unit of land, units of fertilizer and units of pesticide must be used. Similarly, to grow one unit of barley, one unit of land, units of fertilizer and units of pesticide must be used.  The primal problem would be the farmer deciding how much wheat ( ) and barley ( ) to grow if their sell prices are and per unit. The goal is to maximize the total revenue: subject to constraints:  (cannot use more land than available)  (cannot use more fertilizer than available)  (cannot use more pesticide than available)  (cannot grow negative amounts)    For the dual problem assume that unit prices for each of these means of production (inputs) are set by a planning board. The planning board's job is to minimize the total cost of procuring the set amounts of inputs while providing the farmer with a floor on the unit price of each of his crops (outputs), for wheat and for barley. This corresponds to the following problem: minimize the total cost subject to constraints:  (the farmer must receive at least for each unit of wheat)  (the farmer must receive at least for each unit of barley)  (prices cannot be negative)    In matrix form this becomes: minimize subject to: and   The primal problem deals with physical quantities. With all inputs available in limited quantities, and assuming the unit prices of all outputs is known, what quantities of outputs to produce so as to maximize total revenue? The dual problem deals with economic values. With floor guarantees on all output unit prices, and assuming the available quantity of all inputs is known, what input unit pricing scheme to set so as to minimize total expenditure?  To each variable in the primal space corresponds an inequality to satisfy in the dual space, both indexed by output type. To each inequality to satisfy in the primal space corresponds a variable in the dual space, both indexed by input type.  The coefficients that bound the inequalities in the primal space are used to compute the objective in the dual space, input quantities in this example. The coefficients used to compute the objective in the primal space bound the inequalities in the dual space, output unit prices in this example.  Both the primal and the dual problems make use of the same matrix. In the primal space, this matrix expresses the consumption of physical quantities of inputs necessary to produce set quantities of outputs. In the dual space, it expresses the creation of the economic values associated with the outputs from set input unit prices.  "
},
{
  "id": "section-lp-duality-transportation",
  "level": "1",
  "url": "section-lp-duality-transportation.html",
  "type": "Section",
  "number": "35.4",
  "title": "Duality in optimal transportation",
  "body": " Duality in optimal transportation  This is an optional section, feel free to skip it.  The book Topics in Optimal Transportation by Cédric Villani presents the following illustration of duality, credited by the author to Luis Caffarelli . In this book the duality theorem is named after Leonid Kantorovich .   Suppose for instance that you are both a mathematician and an industrialist, and want to transfer a huge amount of coal from your mines to your factories. You can hire trucks to do this transportation problem, but you have to pay them for each ton of coal which is transported from place to place . Both the amount of coal which you can extract from each mine, and the amount which each factory should receive, are fixed. As you are trying to [ ] minimize the price you have to pay, another mathematician comes to you and tells you:  My friend, let me handle this for you: I will ship all your coal with my own trucks and you won't have to worry about what goes where. I will just set a price for loading one ton of coal at place , and a price for unloading it at destination . I will set the prices in such a way that your financial interest will be to let me handle all your transportation! Indeed, you can check very easily that for any and , the sum will always be (in order to achieve this goal, I am even ready to give financial compensations for some places, in the form of negative prices!) .  Of course you accept the deal. Now, what Kantorovich's duality tells you is that if this shipper is clever enough, then he can arrange the prices in such a way that you will pay [ ] as much as you would have been ready to spend by the other method.   What form of duality is this, and where do negative prices come from? This is an example of asymmetric duality, where the primal problem is of type EN (moving nonnegative amounts of coal, which must add up exactly to what is available or required), and the dual problem is of type IR (setting possibly negative prices, allowing for inequalities ). Here is a concrete example with two coal mines and three factories: the amounts of production, consumption, and transportation costs per unit are stated on the diagram.   Optimal transportation problem with amounts and unit costs  Let be the amounts sent from Mine 1 to Factories 1, 2, 3. Also let be the amounts sent from Mine 2 to Factories 1, 2, 3. The constraints can be expressed in matrix form as where The coefficients of objective functions are the unit cost, . And of course, : even if we wanted to allow factories to send excess coal back to a mine, this would not fit the LP model since the cost of such transportation would not be negative.  To solve the linear program in Matlab, we use expanded syntax of linprog : x = linprog(c, A, b, Aeq, beq, lb, ub); where the additional parameters Aeq , beq express a linear system of equality constraints, and the vectors lb , ub provide lower and upper bounds on the variables. In our case, we do not have any inequality constraints so the second and third arguments are empty. The last one is omitted since we do not have upper bounds.  A = [1 1 1 0 0 0; 0 0 0 1 1 1; 1 0 0 1 0 0; 0 1 0 0 1 0; 0 0 1 0 0 1]; b = [55; 65; 30; 40; 50]; c = [4; 4; 5; 3; 9; 9]; x = linprog(c, [], [], A, b, zeros(6, 1)); fprintf('Found x = (%g, %g, %g, %g, %g, %g) with total cost %g \\n', x, c'*x);  The solution is pictured below.   Solution of the transportation problem  According to , the dual problem is to maximize subject to the constraint . The vector expresses the pricing policy of the second mathematician (or a shipping company): they charge to load a unit of coal at Mines 1, 2, and also charge to unload it at Factories 1, 2, 3. The constraint is what the company needs to win your business, and the amount maximized, , is their total revenue.  y = linprog(-b, A', c); fprintf('Found y = (%g, %g, %g, %g, %g) with total revenue %g \\n', y, b'*y);  The solution is pictured below. The costs are included to demonstrate that the constraints are satisfied. The message Found y = (4, 8, -5, 0, 1) with total revenue 640 shows that the company will subsidize unloading at Factory 1 in order to maximize its revenue while undercutting any competition.   Solution of the dual problem  If we required the loading\/unloading prices to be nonnegative, the transportation company would not be able to realize the same revenue.  y = linprog(-b, A', c, [], [], zeros(5, 1)); fprintf('Found y = (%g, %g, %g, %g, %g) with total revenue %g \\n', y, b'*y);  Found y = (0, 3, 0, 4, 5) with total revenue 605  "
},
{
  "id": "transportation-problem-svg",
  "level": "2",
  "url": "section-lp-duality-transportation.html#transportation-problem-svg",
  "type": "Figure",
  "number": "35.4.1",
  "title": "",
  "body": " Optimal transportation problem with amounts and unit costs "
},
{
  "id": "transportation-solution-svg",
  "level": "2",
  "url": "section-lp-duality-transportation.html#transportation-solution-svg",
  "type": "Figure",
  "number": "35.4.2",
  "title": "",
  "body": " Solution of the transportation problem "
},
{
  "id": "transportation-dual-svg",
  "level": "2",
  "url": "section-lp-duality-transportation.html#transportation-dual-svg",
  "type": "Figure",
  "number": "35.4.3",
  "title": "",
  "body": " Solution of the dual problem "
},
{
  "id": "exercises-linear-programming",
  "level": "1",
  "url": "exercises-linear-programming.html",
  "type": "Exercises",
  "number": "35.5",
  "title": "Homework",
  "body": " Homework    Use Matlab to solve the primal problem in with the following data:  Available amounts are , ,  Each unit of wheat requires units of fertilizer and units of pesticide  Each unit of barley requires units of fertilizer and units of pesticide  The sell prices are for wheat and for barley.  One way is to convert this LP problem to the form (including the nonnegativity requirements in the system of linear inequalities) and apply linprog(c, A, b) . Another is to follow the examples in (or read help linprog ) and directly impose the lower bound of on the variables.  In a comment, answer the questions: how should the land be used? What will the total revenue be? Will there be any leftover land, fertilizer, or pesticide, and if so, how much?     Use Matlab to solve the dual problem in with the same data as in .  In a comment, answer the questions: What prices should the planning board set? What will the total cost be?   "
},
{
  "id": "exercise-linear-programming-1",
  "level": "2",
  "url": "exercises-linear-programming.html#exercise-linear-programming-1",
  "type": "Exercise",
  "number": "35.5.1",
  "title": "",
  "body": "  Use Matlab to solve the primal problem in with the following data:  Available amounts are , ,  Each unit of wheat requires units of fertilizer and units of pesticide  Each unit of barley requires units of fertilizer and units of pesticide  The sell prices are for wheat and for barley.  One way is to convert this LP problem to the form (including the nonnegativity requirements in the system of linear inequalities) and apply linprog(c, A, b) . Another is to follow the examples in (or read help linprog ) and directly impose the lower bound of on the variables.  In a comment, answer the questions: how should the land be used? What will the total revenue be? Will there be any leftover land, fertilizer, or pesticide, and if so, how much?  "
},
{
  "id": "exercises-linear-programming-3",
  "level": "2",
  "url": "exercises-linear-programming.html#exercises-linear-programming-3",
  "type": "Exercise",
  "number": "35.5.2",
  "title": "",
  "body": "  Use Matlab to solve the dual problem in with the same data as in .  In a comment, answer the questions: What prices should the planning board set? What will the total cost be?  "
},
{
  "id": "section-classification-logistic-regression",
  "level": "1",
  "url": "section-classification-logistic-regression.html",
  "type": "Section",
  "number": "36.1",
  "title": "Classification and logistic regression",
  "body": " Classification and logistic regression  We focus on the case of two categories, represented by the binary outcome variable attaining two possible values, and . The model may involve one or more explanatory variables , and the goal is to predict the outcome based on these variables. Some examples:  Explanatory variables: temperature, humidity, atmospheric pressure. Outcome: rain (1) or no rain (0).  Explanatory variables: patient's weight, height, age, activity level. Outcome: has diabetes (1) or not (0).  In the examples such as these, it is understood that the prediction may be far from certain. A way to think of such a model as assigning a probability of outcome (1), based on the data available. This leads to the idea of a model being a function that takes values between and . The standard logistic function ( ) has this property: In order to include several explanatory variables in this model, we use the composite function where the coefficients are to be determined by training the model on some data set with known outcomes.  In our training method was to minimize the sum of squares However, in the context of probability there is a more natural method: maximizing the likelihood function. Think of as the probability that , and therefore is the probability that . Assuming the independence of outcomes, the probability of observing the data that was actually observed is Since the outcomes already occurred, this expression is not really the probability of a random event; it is the likelihood of the parameters being . We want to maximize this likelihood. Since the product may be very small when there are many observations, it is easier to maximize the log-likelihood , the logarithm of :   Once we find which maximizes , the model can then be used to make predictions about unobserved outcomes on the basis of explanatory variables . If is close to , we expect the outcome ; it is close to , we expect the outcome . The quantity may be interpreted as the probability of , predicted by the model.  Unless the explanatory variables are centered (have zero mean by design), the exponential should include a constant term, as shown in the following example.   Smoking, age and blood pressure  The following data, taken from Matlab's built-in patients data sample ( reference ), records the ages and systolic pressure of 10 smokers ( ) and 12 nonsmokers ( ). Train a logistic regression model on this data.  age1 = [38 33 39 48 32 27 44 28 30 45]; sys1 = [124 130 130 130 124 123 128 129 127 134]; age0 = [43 38 40 49 46 40 28 31 45 42 25 36]; sys0 = [109 125 117 122 121 115 115 118 114 115 127 114];  Then test the model on a separate data set, generating predictions for the people based on their age and systolic pressure:  age = [38 45 30 48 48 25 44 49 45 48]; sys = [138 124 130 123 129 128 124 119 136 114];  Finally, compare the model's prediction with actual smoker status in the test dataset.  actual = [1 0 0 0 0 1 1 0 1 0];   We set up the log-likelihood function LogL , maximize it, and use the optimal parameters cc to predict the status of the 10 people who were not a part of the training set.  LogL = @(c) sum(log(1.\/(1+exp(-c(1)*age1-c(2)*sys1-c(3))))) + sum(log(1 - 1.\/(1+exp(-c(1)*age0-c(2)*sys0-c(3))))); cc = fminsearch(@(c) -LogL(c), [0; 0; 0]); age = [38 45 30 48 48 25 44 49 45 48]; sys = [138 124 130 123 129 128 124 119 136 114]; prediction = 1.\/(1+exp(-cc(1)*age-cc(2)*sys-cc(3))); actual = [1 0 0 0 0 1 1 0 1 0]; disp([prediction' actual']);  Excluding the cases where prediction is a number close to (which should be considered a don't know answer), the model got 6 out of 8 right.    "
},
{
  "id": "section-classification-logistic-regression-3",
  "level": "2",
  "url": "section-classification-logistic-regression.html#section-classification-logistic-regression-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "likelihood likelihood log-likelihood "
},
{
  "id": "section-classification-logistic-regression-5",
  "level": "2",
  "url": "section-classification-logistic-regression.html#section-classification-logistic-regression-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centered "
},
{
  "id": "example-smoker-logistic-regression",
  "level": "2",
  "url": "section-classification-logistic-regression.html#example-smoker-logistic-regression",
  "type": "Example",
  "number": "36.1.1",
  "title": "Smoking,  age and blood pressure.",
  "body": " Smoking, age and blood pressure  The following data, taken from Matlab's built-in patients data sample ( reference ), records the ages and systolic pressure of 10 smokers ( ) and 12 nonsmokers ( ). Train a logistic regression model on this data.  age1 = [38 33 39 48 32 27 44 28 30 45]; sys1 = [124 130 130 130 124 123 128 129 127 134]; age0 = [43 38 40 49 46 40 28 31 45 42 25 36]; sys0 = [109 125 117 122 121 115 115 118 114 115 127 114];  Then test the model on a separate data set, generating predictions for the people based on their age and systolic pressure:  age = [38 45 30 48 48 25 44 49 45 48]; sys = [138 124 130 123 129 128 124 119 136 114];  Finally, compare the model's prediction with actual smoker status in the test dataset.  actual = [1 0 0 0 0 1 1 0 1 0];   We set up the log-likelihood function LogL , maximize it, and use the optimal parameters cc to predict the status of the 10 people who were not a part of the training set.  LogL = @(c) sum(log(1.\/(1+exp(-c(1)*age1-c(2)*sys1-c(3))))) + sum(log(1 - 1.\/(1+exp(-c(1)*age0-c(2)*sys0-c(3))))); cc = fminsearch(@(c) -LogL(c), [0; 0; 0]); age = [38 45 30 48 48 25 44 49 45 48]; sys = [138 124 130 123 129 128 124 119 136 114]; prediction = 1.\/(1+exp(-cc(1)*age-cc(2)*sys-cc(3))); actual = [1 0 0 0 0 1 1 0 1 0]; disp([prediction' actual']);  Excluding the cases where prediction is a number close to (which should be considered a don't know answer), the model got 6 out of 8 right.   "
},
{
  "id": "section-classification-linear-programming",
  "level": "1",
  "url": "section-classification-linear-programming.html",
  "type": "Section",
  "number": "36.2",
  "title": "Classification and linear programming",
  "body": " Classification and linear programming  Linear programming offers a very different, geometric approach to classification. Think of observations with explanatory variables as points in , which are colored (say, red or blue) according to their category. Our goal is to find a plane (or surface) that separates the points of different colors as cleanly as possible.  To help with visualization, consider the case when the explanatory variables are more conveniently labeled . We are looking for a line such that the points of one category are above it, and the points of other category are below it. If such a line exists, it is not unique, so we want to choose it to maximize the width of separation. That is, we look for maximal such that in the first set (above the line) and in the second set (below the line). This is a linear programming problem, with three variables , objective function , and the linear constraints stated above.  The same idea applies to separation by a curve (for example, a polynomial).   Complete nonlinear separation  Find and plot the best parabola separating the points , , and (the top group) from and (the bottom group).   We maximize subject to constraints in the first group and in the second. Rewrite the constraints as in the first group and in the second. Also, is required by the geometric meaning of as the width of separation. Given the vectors xt, yt describing the first group and xb, yb for the second, we can form a system of linear inequalities as below  xt = [2; 4; 7]; yt = [3; 6; 4]; xb = [3; 5]; yb = [4; 5]; A = [xt.^2 xt xt.^0 xt.^0; -xb.^2 -xb -xb.^0 xb.^0; 0 0 0 -1]; b = [yt; -yb; 0]; opt = linprog([0; 0; 0; -1], A, b); t = linspace(min([xt; xb]), max([xt; xb]), 1000); y = opt(1)*t.^2 + opt(2)*t + opt(3); plot(xt, yt, 'b*', xb, yb, 'r*', t, y, 'k')  Instead of including as one of the inequalities in the system , we can impose this constraint separately as a lower bound in linprog .  A = [xt.^2 xt xt.^0 xt.^0; -xb.^2 -xb -xb.^0 xb.^0]; b = [yt; -yb]; opt = linprog([0; 0; 0; -1], A, b, [], [], [-Inf; -Inf; -Inf; 0]);  The result is the same. With either version of the code, if the data points are changed so that there is no parabola that separates them completely, we get the message No feasible solution found. Linprog stopped because no point satisfies the constraints.    Complete separation of the categories may be impossible (which makes the linear programming problem infeasible, as Matlab would report). Perhaps some data points have incorrect measurement values, or are mislabeled by category, or perhaps (quite likely) one simply cannot predict the outcome with certainty, based on the explanatory variables we have. In such a case we can still look for a separating line or curve, but the separation will be incomplete , with some points left on the wrong side.  We look for a line that minimizes the sum of penalties, the penalty being the amount by which a point falls into the wrong group. Formally, we minimize where are the penalties, subject to constraints for points in the top category and for points in the bottom category. This is still a linear programming problem, but there are more variables now: , and the objective function is .   Incomplete linear separation  Find and plot the best line that separates (probably not completely) 8 random points from 7 other random points, which are generated as follows:  xt = randn(8, 1); yt = randn(8, 1) + 1; xb = randn(7, 1); yb = randn(7, 1);   We minimize subject to constraints in the first group and in the second. Rewrite the constraints as in the first group and in the second. We also require . Given the vectors xt, yt describing the first group and xb, yb for the second, we can form a system of linear inequalities and separately impose the nonnegativity requirement on (though not on the coefficients of the line).  A = [xt xt.^0; -xb -xb.^0]; n = numel(xt) + numel(xb); A = [A -eye(n)]; b = [yt; -yb]; opt = linprog([0; 0; ones(n, 1)], A, b, [], [], [-Inf; -Inf; zeros(n, 1)]); t = linspace(min([xt; xb]), max([xt; xb]), 1000); y = opt(1)*t + opt(2); plot(xt, yt, 'b*', xb, yb, 'r*', t, y, 'k')  The reason that the presence of penalties changes the matrix as A = [A -eye(n)]; is that we subtract from the first inequality, from the second, and so on. The penalties make it possible for all the constraints to be satisfied, but their sum needs to be minimized. In this example, the variables are and accordingly, the coefficients of the objective function are .   "
},
{
  "id": "example-separate-by-parabola",
  "level": "2",
  "url": "section-classification-linear-programming.html#example-separate-by-parabola",
  "type": "Example",
  "number": "36.2.1",
  "title": "Complete nonlinear separation.",
  "body": " Complete nonlinear separation  Find and plot the best parabola separating the points , , and (the top group) from and (the bottom group).   We maximize subject to constraints in the first group and in the second. Rewrite the constraints as in the first group and in the second. Also, is required by the geometric meaning of as the width of separation. Given the vectors xt, yt describing the first group and xb, yb for the second, we can form a system of linear inequalities as below  xt = [2; 4; 7]; yt = [3; 6; 4]; xb = [3; 5]; yb = [4; 5]; A = [xt.^2 xt xt.^0 xt.^0; -xb.^2 -xb -xb.^0 xb.^0; 0 0 0 -1]; b = [yt; -yb; 0]; opt = linprog([0; 0; 0; -1], A, b); t = linspace(min([xt; xb]), max([xt; xb]), 1000); y = opt(1)*t.^2 + opt(2)*t + opt(3); plot(xt, yt, 'b*', xb, yb, 'r*', t, y, 'k')  Instead of including as one of the inequalities in the system , we can impose this constraint separately as a lower bound in linprog .  A = [xt.^2 xt xt.^0 xt.^0; -xb.^2 -xb -xb.^0 xb.^0]; b = [yt; -yb]; opt = linprog([0; 0; 0; -1], A, b, [], [], [-Inf; -Inf; -Inf; 0]);  The result is the same. With either version of the code, if the data points are changed so that there is no parabola that separates them completely, we get the message No feasible solution found. Linprog stopped because no point satisfies the constraints.   "
},
{
  "id": "example-separate-by-line",
  "level": "2",
  "url": "section-classification-linear-programming.html#example-separate-by-line",
  "type": "Example",
  "number": "36.2.2",
  "title": "Incomplete linear separation.",
  "body": " Incomplete linear separation  Find and plot the best line that separates (probably not completely) 8 random points from 7 other random points, which are generated as follows:  xt = randn(8, 1); yt = randn(8, 1) + 1; xb = randn(7, 1); yb = randn(7, 1);   We minimize subject to constraints in the first group and in the second. Rewrite the constraints as in the first group and in the second. We also require . Given the vectors xt, yt describing the first group and xb, yb for the second, we can form a system of linear inequalities and separately impose the nonnegativity requirement on (though not on the coefficients of the line).  A = [xt xt.^0; -xb -xb.^0]; n = numel(xt) + numel(xb); A = [A -eye(n)]; b = [yt; -yb]; opt = linprog([0; 0; ones(n, 1)], A, b, [], [], [-Inf; -Inf; zeros(n, 1)]); t = linspace(min([xt; xb]), max([xt; xb]), 1000); y = opt(1)*t + opt(2); plot(xt, yt, 'b*', xb, yb, 'r*', t, y, 'k')  The reason that the presence of penalties changes the matrix as A = [A -eye(n)]; is that we subtract from the first inequality, from the second, and so on. The penalties make it possible for all the constraints to be satisfied, but their sum needs to be minimized. In this example, the variables are and accordingly, the coefficients of the objective function are .  "
},
{
  "id": "exercises-classification",
  "level": "1",
  "url": "exercises-classification.html",
  "type": "Exercises",
  "number": "36.3",
  "title": "Homework",
  "body": " Homework    (Theoretical) Write down the system of linear constraints used in in an explicit form, as a system of inequalities such as .    (Computational) Modify the code in to separate the points (not completely) by a parabola rather than by a line.  "
},
{
  "id": "exercises-classification-2",
  "level": "2",
  "url": "exercises-classification.html#exercises-classification-2",
  "type": "Exercise",
  "number": "36.3.1",
  "title": "",
  "body": "  (Theoretical) Write down the system of linear constraints used in in an explicit form, as a system of inequalities such as . "
},
{
  "id": "exercises-classification-3",
  "level": "2",
  "url": "exercises-classification.html#exercises-classification-3",
  "type": "Exercise",
  "number": "36.3.2",
  "title": "",
  "body": "  (Computational) Modify the code in to separate the points (not completely) by a parabola rather than by a line. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
