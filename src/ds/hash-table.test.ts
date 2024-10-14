// import {describe, expect, test} from '@jest/globals';
// import {HashTable} from "./hash-table";
//
// describe('HashTable', () => {
//     test('Can be created with capacity', () => {
//         const ht = new HashTable(1245);
//         const result = ht.capacity;
//         expect(result).toBe(1245);
//     });
//    
//     test('Can set value', () => {
//         const ht = new HashTable(100);
//         ht.set(1, "Test");
//        
//         const result = ht.get(1);
//        
//         expect(result).toBe("Test");
//     });
//    
//     test('Can get values', () => {
//        const ht = new HashTable(1000);
//        ht.set(1, "Test 1");
//        ht.set(6, "Test 6");
//        ht.set(890, "Test 890");
//        ht.set(240, "Test 240");
//       
//        let resOne = ht.get(1);
//        let resTwo = ht.get(6);
//        let resThree = ht.get(890);
//        let resFour = ht.get(240);
//       
//        expect(resOne).toBe("Test 1");
//        expect(resTwo).toBe("Test 6");
//        expect(resThree).toBe("Test 890");
//        expect(resFour).toBe("Test 240");
//     });
//    
//     test('Can remove values', () => {
//         const ht = new HashTable(1000);
//         ht.set(1, "Test 1");
//         ht.set(6, "Test 6");
//        
//         ht.remove(1);
//         ht.remove(6);
//        
//         const resOne = ht.get(1);
//         const resTwo = ht.get(6);
//        
//         expect(resOne).toBeFalsy();
//         expect(resTwo).toBeFalsy();
//     });
//    
//    
//     test('Indicates when has value', () => {
//         const ht = new HashTable(1000);
//         ht.set(1, "Test 1");
//         ht.set(890, "Test 890");
//        
//         const result = ht.contains(890);
//         expect(result).toBeTruthy();
//     });
//    
//     test('Indicates length', () => {
//         const ht = new HashTable(1000);
//         ht.set(1, "Test 1");
//         ht.set(6, "Test 6");
//        
//         const length = ht.length;
//        
//         expect(length).toBe(2);
//        
//     });
// });