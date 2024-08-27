import java.util.Scanner;

public class bj1188 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt(); // 소시지 개수
        int M = sc.nextInt(); // 평론가 수

        // 최소 자르기 횟수 계산
        int cuts = minCuts(N, M);
        
        System.out.println(cuts);
        
        sc.close();
    }

    // 최소 자르기 횟수를 계산하는 함수
    public static int minCuts(int N, int M) {
        // N개의 소시지를 M명의 평론가에게 나눠주기 위해서는 
        // 각각의 소시지에서 동일한 양을 얻을 수 있어야 하므로
        // 이를 위해 N과 M의 최소공배수를 찾아야 됨
        int lcm = lcm(N, M);
        
        // 최소공배수 lcm을 만들기 위해 소시지를 자르는 횟수를 계산
        return (lcm / N) * (N - 1);
    }

    // 두 수의 최소공배수(LCM) 계산
    public static int lcm(int a, int b) {
        return a * b / gcd(a, b);
    }

    // 두 수의 최대공약수(GCD) 계산 (유클리드 호제법)
    public static int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
}