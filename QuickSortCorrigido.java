import java.util.Arrays;

public class QuickSortCorrigido {
    
    public static void main(String[] args) {

        //Criando o array
        int[] array = new int[100000];
  
       // Preenchendo o array com valores aleatórios
       for (int i = 0; i < array.length; i++) {
           array[i] = (int) Math.floor(Math.random() * array.length);
       }

       // ATENÇÃO - Preenchendo o array com valores ordenados, se descomentar esse trecho de código
       // e utilizar ele pra gerar os valores do array, aparece o erro stack overflow (pelo menos na minha máuqina)
       // devido ao fato de que as partições do array ficam muito desbalanceadas.
       //    for (int i = 0; i < array.length; i++) {
       //    array[i] = i;
       //    }

        System.out.println("Array desordenado\nInício da lista:" + comecoArray(array) + "\nFinal da lista: " + fimArray(array));
        
        //Contabilizando tempo inicial de execução do programa
        long tempoInicial = System.currentTimeMillis();

        //Chamando o quicksort, passando o array o indice 0 e o último indice
        quickSort(array, 0, array.length - 1);

        //Contabilizando tempo inicial de execução do programa
        long tempoFinal = System.currentTimeMillis();
        
        System.out.println("\nArray ordenado\nInício da lista:" + comecoArray(array) + "\nFinal da lista: " + fimArray(array));

        System.out.println("Tempo de execução(ms):" + (tempoFinal-tempoInicial));
    }

    public static String comecoArray(int[] array){
        String comecoListaFinal = "";
        for(int x=0; x<6; x++){
            String comecoLista = array[x] + "...";
            comecoListaFinal += comecoLista;
        }
        return comecoListaFinal;
    }

    public static String fimArray(int[] array){
        String fimListaFinal = "";
        for(int x=array.length-1; x>array.length-5; x--){
            String fimLista = array[x] + "...";
            fimListaFinal += fimLista;
        }
        return fimListaFinal;
    }
    
    
    public static void quickSort(int[] array, int start, int end) {
        // Verifica se o início do array é menor que o final

        if (start < end) {

            // Chama a função que 
            int pivotIndex = partition(array, start, end);
            quickSort(array, start, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, end);
        }
    }
    
    public static int partition(int[] array, int start, int end) {
        
        //Define o pivot como o primeiro elemento do array
        int pivot = array[start];

        //Indice do pivot + 1
        int i = start + 1;

        //Último elemento do array
        int j = end;

        //Enquanto o começo for menor ou igual ao final
        while (i <= j) {
            //Verificar se o array na posição i é menor ou igual ao pivot atual
            if (array[i] <= pivot) {
                //Se for, adiciona +1 ao indice inicial
                i++;
            } 
            //Se não for, verifica se o array na posição final é maior que o pivot
            else if (array[j] > pivot) {
            //Se verdadeiro, retira 1 do indice final   
                j--;
            } else {
                //Senão, chama a função
                trocar(array, i, j);
            }
        }
        trocar(array, start, j);
        return j;
    }
    
    public static void trocar(int[] array, int i, int j) {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}
