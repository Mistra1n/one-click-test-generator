
// String and array utilities
export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  export function chunkArray(arr, size) {
    if (!Array.isArray(arr)) throw new Error('Input must be an array');
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }