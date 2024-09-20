
const fizzBuzz = n =>{
        let i = 1;
        while(i<=n){
                console.log('Fizz'.repeat(i%3==0) + 'Buzz'.repeat(i%5==0) || i)
                i++
        }
}


fizzBuzz(100)

const nextPrime = () => {
        const ranNum = Math.floor(Math.random()*99)
        const key = {0:2, 1:2, 2:3,4:5,5:7}
        if(ranNum in key) return `Our random number is ${ranNum}, the next prime is ${key[ranNum]}`
        let n = Math.floor(ranNum/6)
        while(n){
                let low = 6*n-1
                if(low > ranNum && low%5!=0) return `Our random number is ${ranNum}, the next prime is ${low}`
                let hi = 6*n+1
                if(hi > ranNum && hi%5!=0) return `Our random number is ${ranNum}, the next prime is ${hi}`
                n++
        }
}

console.log(nextPrime())
