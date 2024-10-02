public class demo {
    public static void main(String[] args) {
        int i = 2;
        int n = 5;
        i = (~0) << i;
        n = n & i;
        System.out.println(n);
    }
}
