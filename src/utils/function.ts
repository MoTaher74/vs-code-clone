import type { IFile } from "../interfaces/interface";

{/**
 * Checks if a file object with the specified ID exists in the given array.
 *
 * @param arr - The array of file objects to search through.
 * @param id - The ID to search for within the file objects.
 * @returns `true` if a file object with the given ID exists in the array, otherwise `false`.
 *
 * @used This utility function can be used to verify the existence of a file by its ID,
 *        for example, before adding a new file to prevent duplicates or when selecting a file.
 */}
export const doesFileObjectExist = (arr:IFile[],id:string)=>{
return arr.some(obj => obj.id === id) 

}