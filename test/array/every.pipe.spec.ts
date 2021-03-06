import { SomePipe } from '../../index';


describe('MapPipe', () => {
    
    let pipe: SomePipe;
    
    const fn = function (item) {
        return item === 2;
    };
    
    beforeEach(() => {
       pipe = new SomePipe(); 
    });
    
    it('Should return false', () => {
       
       const array = [0, 1, 2, 3];
       
       expect(pipe.transform(array, fn)).toEqual(false); 
       expect(array).toEqual([0, 1, 2, 3]); // Check integrity
    });
    
    it('Should return true', () => {
       
       expect(pipe.transform([2, 2, 2], fn)).toEqual(true); 
    });
    
    it('Should return the value unchanged', () => {
       
       expect(pipe.transform('a', null)).toEqual('a'); 
    });
    
})