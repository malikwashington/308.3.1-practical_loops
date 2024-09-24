
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
        const key = {0:2, 1:2, 2:3,4:5,5:7, 3:5}
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


// 4 cells per row, \n escape char print all the cells
//
//

const exampleString = 'Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232'


const parseCSV=(str, esc='\r\n')=>{
        let s = str.split(esc)
        const key = s.shift().split(',')
        for(const [i,e] of s.entries())
                s[i]=Object.fromEntries(e.split(',').slice(1).map((e,i)=>[key[i],e]))
        return s
}

const res = parseCSV(exampleString, '\n')
console.table(res)
