export default () => {
    self.addEventListener("message", e => {
        // eslint-disable-line no-restricted-globals
        if (!e) return;

        const { minRange, maxRange } = e.data;

        console.log('Request: ', `(${minRange}, ${maxRange})`)
        console.time('time');

        let pointer = minRange;
        let flag = null;
        let how_many = 0;
    
        while (pointer < maxRange + 1) {
            flag = 0;
    
            for (let i = 2; i < pointer; i++) {
                if ((pointer % i) == 0) {
                    flag = 1;
                    break;
                }
            }
    
            if (flag == 0) {
                how_many++;
            }
    
            pointer++;
        }
        console.timeEnd('time');

        postMessage(how_many);
    });
};