import java.util.Random
/**
 * This is Caeser Encryption
 *
 * WHAT IS CAESER-ENCRYPTION 
 *
 * The Caesar cipher is a basic encryption technique that shifts each letter 
 * in the plaintext by a fixed number of positions in the alphabet.
 * 
 * STANDARD CAESER ENCRYPTION 
 * 
 * The standard number of shifts in the Caesar cipher is typically in the range of 1 to 25. 
 * The direction of the shift can be either to the right (positive shift) or to the left (negative shift) in the alphabet.
 * 
 * RESULT 
 * The output of the Caesar cipher encryption process is called the ciphertext.
 *
 * @author Isaac Jerryson
 * @version 21.02.mm.ss.ll.oo
 */
public class CaeserEncryption {
  /**
   * This is  the Standard/Random/Caeser/Encrypt
   * @param pathText: a string a message
   */ 
  public void standardRandomCaeserEncrypt (String pathText, String cipherText) {
     if(pathText != null) {
        Random rando = new Random();// intializing rando 
        int shifter = rando.nextInt(26);// encryption can shift the positions all the way to th left or the right
	int direction = rando.nextInt(2)// shifter's direction is determined here

        char[] alphabetArray = new char[26];// initializing the alphabet Array to store in all 

	for(int i = 0;i < alphabetArray.length;i++){
	    alphabetArray[i] = (char) ('a' + i);
	}
	     
	if(direction == 0){// if direction is 0 then we go left 
	    for(int i = 0;i <= pathText.length;i++){// containing the length of the message
		char chr = pathText.charAt(0);
		int letterIndex = 0;
		int moves = 0;

		for(int j = 0;j < alphabetArray.length;j++){
		    
		}

		for(int j = 0;j <= shifter;j++){
		   
		}
	    }
	}else{// else the direction is right cus it's 0
	     
	}
                 
     } else throw new NullPointerException("Dear User, the message is null and cannot be encrypted !!");
  }

  public static int binarySearch(char[] array, char target) {
        int low = 0;
        int high = array.length - 1;
	int intTarget = (int) target

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (array[mid] == intTarget) {
                return mid; // Element found, return its index
            } else if (array[mid] < intTarget) {
                low = mid + 1; // Discard the left half
            } else {
                high = mid - 1; // Discard the right half
            }
        }

        return '/u000'; // Element not found
    }
}
  
