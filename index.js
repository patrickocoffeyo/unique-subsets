/**
 * @file
 * Finds all possible unique subsets of a superset.
 */

'use strict'

/**
 * Get unique sets of elements from a superset, where the length of the subsets is given.
 *
 * @param array set array of items (any type).
 * @param int subsetSize size of combination to search for.
 *
 * @return array combinations found in set where combination size is 'count'.
 */
let uniqueSubsetsAtSize = function(set, subsetSize) {

  // If the subset size is greater than the length of the set, return empty.
  if (subsetSize > set.length) {
    return [];
  }

  // If the subset size is the length of the set, return the set.
  if (subsetSize === set.length) {
    return [set];
  }

  // If the subset size is 1, return set where subsets contain one value.
  if (subsetSize === 1) {
    return set.map((item) => {
      return [item];
    });
  }

  // (set.length > subsetSize > 1) is true, recurse.
  let combinations = [], prefix, suffixes, i, j;

  for (i = 0; i < set.length - subsetSize + 1; i++) {
    prefix = set.slice(i, (i + 1));
    suffixes = uniqueSubsetsAtSize(set.slice(i + 1), subsetSize - 1);

    for (j = 0; j < suffixes.length; j++) {
      combinations.push(prefix.concat(suffixes[j]));
    }
  }

  return combinations;
}

/**
 * Finds all possible unique subsets of a superset.
 *
 * @param array set collection of items from which combinations will be formed.
 *
 * @example
 * uniqueSubsets([1, 2, 3]);
 * // Returns: [ [ 1 ], [ 2 ], [ 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
 *
 * @returns array all possible combinations.
 */
let getUniqueSubsets = function(set) {
  let i, j, allSubsets, uniqueCombinations = [];

  for (i = 1; i < set.length + 1; i++) {
    allSubsets = uniqueSubsetsAtSize(set, i);
    for (j = 0; j < allSubsets.length; j++) {
      uniqueCombinations.push(allSubsets[j]);
    }
  }

  return uniqueCombinations;
}

module.exports = getUniqueSubsets;
