/* Demonstrate usage of core JavaScript functionality */

describe 'JavaScript'
    describe 'date handling'
        it 'should create date in the past'
            // new Date(year,month,day,hour,minutes,seconds,milliseconds); 
            var ny2010 = new Date(2010,0,1,12,0,0,0);
            var year = ny2010.getFullYear();
            var month = ny2010.getMonth();
        
            year.should.be 2010
            month.should.be 0 
        end

        it 'should get the date a week from now'
            var nowMS = (new Date()).getTime();
            var weekMS = 1000*60*60*24*7; 
            var oneWeekFromNow = new Date(nowMS + weekMS);
            
            (oneWeekFromNow.getTime()).should.be_greater_than nowMS 
        end
    end
    
    describe 'regular expressions'
        it 'should search string using regex'
            testString = 'To be, or not to be.' 
            var regex = /or/
            
            var foundPosition = testString.search(regex);
            foundPosition.should.be 7 
        end

        it 'extract regex match'
            var testString = 'The file is logo.gif'; 
            var regex = /\S*\.gif/i; 
            
            var results = testString.match(regex) 
            var file = results[0]
            file.should.be 'logo.gif'
        end

        it 'should extract multiple matches'
            var testString = 'Apr is shorthand for April'
            var regex = /Apr(il)?\b/g; 
            
            var matches = testString.match(regex)
            matches[0].should.be 'Apr'
            matches[1].should.be 'April'
        end

        it 'should replace text matching regex'
            var dateStr='10.28.2008'; 
            var regex = /\./g 
            dateStr = dateStr.replace(regex, '/'); 

            dateStr.should.be '10/28/2008'
        end

        it 'should replace text matching multiple regex'
            var dates = ['10 28 2008', '10-28-2008', '10.28.2008']

            var regex = /([01]?\d)[-\/ .]([0123]?\d)[- \/ .](\d{4})/
            var pattern = '$1/$2/$3'
            
            for(var i=0; i<dates.length; i++) {
                var dateStr = dates[i].replace(regex, pattern)
                dateStr.should.be '10/28/2008'
            }
        end
    end

    // Arrays
    describe 'array usage'
        before_each
            numbers = [1,2,3,4] 
        end
       
        it 'should create a empty array'
            var days = []
            days.length.should.be 0
        end
        
        it 'should fill an empty array' 
            var days = []
            days[0] = 'Mon'
            days[1] = 'Tues'
            days[2] = 'Wed'
            days.length.should.be 3

            days[1].should.be 'Tues'
        end

        it 'should get a random element from the array'
            var random = Math.floor(Math.random() * numbers.length); 
            var randomNumber = numbers[random];
        
            randomNumber.should.be_within 0..4
        end

        // use push/unshift (adds element to array and returns length of new array)
        it 'should add elements in begining and end off array' 
            // push element to end of array
            var numElm = numbers.push(5)
            numElm.should.be 5 

            // add multiple elements to end of array
            numbers.push(6,7)
            var lastNum = numbers[numbers.length-1]
            lastNum.should.be 7

            // unshift to add element in begining of array
            numElm = numbers.unshift(0)
            numElm.should.be 8 
            
            // add multiple element in begining of array
            numbers.unshift(-2,-1)
            var firstNum = numbers[0]
            firstNum.should.be -2
        end

        // use pop/shift (removes element and returns removed value)
        it 'should remove elements in begining and end off array' 
            // pop to remove from end of array 
            var removed = numbers.pop()
            removed.should.be 4 
            numbers.length.should.be 3

            // unshift
            removed = numbers.shift()
            removed.should.be 1 
            numbers.length.should.be 2 
        end

        // splice(from, to) = remove from index to index
        it 'should remove second and third element from array' 
            numbers.splice(1,2)
            
            numbers[1].should.be 4
            numbers.length.should.be 2 
        end
        
        // splice(pos, zero, elements...) = add elements from pos
        it 'should insert two new elements between the second and third position in array' 
            numbers.splice(2, 0, 'a', 'b')
            
            numbers[2].should.be 'a'
            numbers[3].should.be 'b'
            numbers.length.should.be 6 
        end

        // splice(pos, num, elements...) = replace num elements from pos
        it 'should replace second and third element in array' 
            numbers.splice(2, 2, 'a', 'b')
            
            numbers[2].should.be 'a'
            numbers[3].should.be 'b'
            numbers.length.should.be 4 
        end
   end

    // Strings
    describe 'string functions'
        before
            str = 'To be, or not to be.' 
        end

        // string comparison
        it 'should compare strings by content' 
            var str1 = 'hello', str2 = 'HELLO', str3 = 'hello'
            (str1 == str2).should.not.be true 
            (str1 == str3).should.be true 
        end

        // length
        it 'should return length of string'
            var res = str.length
            res.should.be 20 
        end    

        // toUpperCase()
        it 'should return string in all upper case' 
            var upper = str.toUpperCase()
            upper.should.be 'TO BE, OR NOT TO BE.'
        end

        // toLowerCase()
        it 'should return string in all lower case'
            var lower = str.toLowerCase()
            lower.should.be 'to be, or not to be.'
        end

        // charAt()
        it 'should return the char located at position in string' 
            var aChar = str.charAt(10);
            aChar.should.be 'n'
        end

        // indexOf()
        it 'should return position of first occurence of word'
            var firstPos = str.indexOf('be') 
            firstPos.should.be 3 
        
            // search for non existing word
            var noPos = str.indexOf('bogus')
            noPos.should.be -1
        end
 
        // lastIndexOf()
        it 'should return position of last occurence of word'
            var lastPos = str.lastIndexOf('be') 
            lastPos.should.be 17

            // search for non existing word
            var noPos = str.lastIndexOf('bogus')
            noPos.should.be -1
        end
        
        // slice(from)
        it 'should return substring from position until end'
            var res = str.slice(10) 
            res.should.be 'not to be.'
        end

        // slice(from, to)
        it 'should return substring from start position to end position'
            var res = str.slice(7,9) 
            res.should.be 'or'
        end

        // parseInt
        it 'should convert string into number' 
            var aStr = '3'
            aStr.should.not.be 3 
            // note how (unlike above) JS autoboxes here            
            isNaN(aStr).should.not.be true 

            var aInt = parseInt(aStr)
            aInt.should.be 3
        end

        // parseInt (truncate)
        it 'should trucate string into a number'
            var width = '150px'
            width.should.not.be 150
            isNaN(width).should.be true 

            var truncate = parseInt(width)
            truncate.should.be 150
        end

        it 'should parse a string into a float' 
            var space = '4.5 acres' 
            space = parseFloat(space)

            space.should.be 4.5
        end
       
        it 'should cast variable as number'
            var strNum = '1'
            var num = +strNum + 9
            num.should.be 10
        end

        it 'should construct variable as a number'
            var strNum = '1'
            var num = Number(strNum) + 9
            num.should.be 10
        end
    end

    describe 'numbers'
        it 'should round floats to nearest integer'
            var decimal = 10.25; 
            var rounded = Math.round(decimal)
            rounded.should.be 10

            var upper = 4.0001
            upper  = Math.ceil(upper)
            upper.should.be 5 
            
            var lower = 4.9999
            lower = Math.floor(lower)
            lower.should.be 4
        end
        
        it 'should convert numbers to fixed precisions'
            var cost = 10 
            var printCost = '$' + cost.toFixed(2)
            printCost.should.be '$10.00'
            
            cost = 10.289 
            printCost = '$' + cost.toFixed(2) 
            printCost.should.be '$10.29'
        end

        it 'should generate a random number between 0 and 9' 
            var rand = Math.floor(Math.random()*10)
            rand.should.be_within 0..9
        end
        
        it 'should simulate a die role (random number between 1 and 6)'
            var roll = Math.floor(Math.random()*6 + 1)
            roll.should.be_within 1..6
        end
    end

    // Iterative loops and logical conditions
    describe 'loops and conditions'
        it 'should loop while condition is true'
            var num = 0
            while(num < 10) {
                num++
            }
            num.should.be 10 
        end

        it 'should do loop at least once'
            var num = 20, cond = false
            do {
                cond = true
            } while(num < 10) 
            cond.should.be true 
        end

        it 'should loop for entire length of array' 
            var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            var str = ''
            for (var i=0; i<days.length; i++) {     
                str += days[i]
            }
            (str.length).should.be 50 
        end

        it 'should check multiple conditions'
            var check = -1
            if (check < 0) {  
                check = 'taken'
            } else if (check > 0) {  
                check = 'not taken as the first conditon is true' 
            } else {  
                check = 'not taken either' 
            }
            check.should.be 'taken' 
        end
    end
    
    describe 'browser handling and DOM'
        it 'should get browser type'
            var browser = navigator.userAgent; 
            if (browser.indexOf('MSIE') != -1) {   
                // this is Internet Explorer 
            }
            browser.should.not.be_empty
        end

        it 'should retrieve dom element and set new value'
            var sandbox = document.getElementById('sandbox')
            var randomLink = Math.random()
            sandbox.innerHTML = '<a href="' + randomLink + '">random link</a>'
           
            var anchors = document.getElementsByTagName("a")
            anchors.should.not.be_null
            var foundLink = false
            for (var anchor = 0; anchor<anchors.length; anchor++){
                var link = anchors[anchor].href
                if( link.match(""+randomLink+"") ) {
                    foundLink = true
                }
            }
            foundLink.should.be true 
        end

        it 'should navigate the immediate family of a document element'
            var elem = document.getElementById('row3')
            
            var children = elem.childNodes
            var childText = children[1].innerHTML
            childText.should.be 'r3c1'
            
            var parentElem = elem.parentNode
            (parentElem.id).should.be 'tablebody'
        end            
    end
end
