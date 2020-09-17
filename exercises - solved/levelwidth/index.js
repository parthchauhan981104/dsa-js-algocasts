// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr1 = [root, 's'];
    const arr2 = [0];

    while(arr1.length > 1) {

        const node = arr1.shift();

        if(node === 's'){
            arr2.push(0);
            arr1.push('s');
        } else {
            arr1.push(...node.children);
            arr2[arr2.length - 1]++;
        }
        
    }

    return arr2;
}

module.exports = levelWidth;
