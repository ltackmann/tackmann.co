/* Demonstrate usage of core JQuery functionality */

describe 'JQuery'
    describe 'array usage'
        it 'should compare arrays' 
            var a = [1,2,3,4] 
            var b = new Array(1, 2, 3, 4)
            
            var res = $(a).compare(b)
            res.should.be true
        end
    end
    
    describe 'filters usage'
        it 'should find every even row in a table'
            $('table.striped tr:even').addClass('evenElm')

            // a table with 5 rows contains 3 even rows since rows are array indexed (rows[0], rows[1], rows[2],...)
            var count = $(".evenElm").length
            count.should.be 3
        end

        it 'should find every <a> tag except the ones with a nav class' 
            var notNavs = $('#hidden a:not(.nav)')
            (notNavs.length).should.be 1 
        end

        it 'should find every <a> tag that does not begin with http:'
            var notHTTP = $('#hidden a:not([href^=http://])')
            (notHTTP.length).should.be 1
        end

        it 'should find all <td> tags that have text <input> tags inside them' 
            var inputCells = $('td:has(input[type=text])')
            (inputCells.length).should.be 1 
        end
        
        it 'should find all <a> tags that contains the text "About" in them'
            var aboutLinks = $('a:contains(About)')
            (aboutLinks.length).should.be 1
        end
    end

    describe 'dom manipulation'
        it 'should select element by id and set its inner HTML'
            var newHTML = '<h1>JavaScript was here</h1>'
            var sandbox = $('#sandbox')
            sandbox.html(newHTML)
           
            (sandbox.html()).should.be newHTML
        end

        it 'should set height and width of element'
            $('#sandbox').width(300).height(300)
            
            var width = $('#sandbox').width()
            width.should.be 300
            
            var height = $('#sandbox').height()
            height.should.be 300
        end

        it 'should use hide and show elements'
            $('#sandbox h1').hide()
           
            var hidden = $('#sandbox h1:hidden')
            (hidden.length).should.be_greater_than 0

            $('#sandbox h1').show()
            var visible = $('#sandbox h1:visible')
            (visible.length).should.be_greater_than 0
        end
    end

    describe 'selector usage'
        it 'should select divs that are direct children of the body tag'
            var divs = $('body > div')
            (divs.length).should.be 4
        end

        it 'should select select the first tag of a given type that appears directly after another tag (adjacent siblings)'
            var p = $('h2 + p')
            (p.attr("id")).should.be 'p1'
        end

        it 'should find table rows that have the id attribute set'
             var idRows = $('#testdom tr[id]')
             (idRows.length).should.be 3
        end

        it 'should select all form text input elements'
            var inputs = $('form input[type=text]')
            (inputs.length).should.be 1
        end

        it 'should match links by the content of their href attribute'
            var httpLinks = $('#testdom a[href^=http://]')
            (httpLinks.length).should.be 2
            
            var pdfLinks = $('#testdom a[href$=.pdf]')
            (pdfLinks.length).should.be 1

            var orgLinks = $('a[href*=.org]')
            (orgLinks.length).should.be 3
        end
    end
end
