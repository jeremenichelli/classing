/* classing.js tests */
describe('classing', function(){

    describe('addClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = newClass;

        el.addClass(newClass);
        oneMoreEl.addClass(oneMoreClass);

        it('Add a class to an element with no classes', function(){
            expect(el.className === newClass).toBe(true);
        });

        it('Add a class to an element with already a class', function(){
            expect(oneMoreEl.className === newClass + ' ' + oneMoreClass).toBe(true);
        });
    });

    describe('_addClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = newClass;

        _addClass(el, newClass);
        _addClass(oneMoreEl, oneMoreClass);

        it('Add a class to an element with no classes', function(){
            expect(el.className === newClass).toBe(true);
        });

        it('Add a class to an element with already a class', function(){
            expect(oneMoreEl.className === newClass + ' ' + oneMoreClass).toBe(true);
        });
    });

    describe('removeClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        el.removeClass(newClass);
        oneMoreEl.removeClass(oneMoreClass)

        it('Remove a class to an element with no classes', function(){
            expect(el.className === '').toBe(true);
        });

        it('Remove a class to an element with classes', function(){
            expect(oneMoreEl.className === newClass).toBe(true);
        });
    });

    describe('_removeClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        _removeClass(el, newClass);
        _removeClass(oneMoreEl, oneMoreClass)

        it('Remove a class to an element with no classes', function(){
            expect(el.className === '').toBe(true);
        });

        it('Remove a class to an element with classes', function(){
            expect(oneMoreEl.className === newClass).toBe(true);
        });
    });

    describe('toggleClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        el.toggleClass(newClass);
        oneMoreEl.toggleClass(newClass);

        it('Toggle to add a class to an element with no classes', function(){
            expect(el.className === newClass).toBe(true);
        });

        it('Toggle to remove a class to an element with classes', function(){
            expect(oneMoreEl.className === oneMoreClass).toBe(true);
        });
    });

    describe('_toggleClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        _toggleClass(el, newClass);
        _toggleClass(oneMoreEl, newClass);

        it('Toggle to add a class to an element with no classes', function(){
            expect(el.className === newClass).toBe(true);
        });

        it('Toggle to remove a class to an element with classes', function(){
            expect(oneMoreEl.className === oneMoreClass).toBe(true);
        });
    });

    describe('hasClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        it('Checks if an element with no classes has a class', function(){
            expect(el.hasClass(newClass)).toBe(false);
        });

        it('Checks if an element with classes has a class', function(){
            expect(oneMoreEl.hasClass(newClass)).toBe(true);
        });
    });

    describe('_hasClass', function(){
        var el = document.createElement('div'),
            oneMoreEl = document.createElement('div'),
            newClass = 'dummyClass',
            oneMoreClass = 'anotherDummyClass';

        oneMoreEl.className = oneMoreClass + ' ' + newClass;

        it('Checks if an element with no classes has a class', function(){
            expect(_hasClass(el, newClass)).toBe(false);
        });

        it('Checks if an element with classes has a class', function(){
            expect(_hasClass(oneMoreEl, newClass)).toBe(true);
        });
    });

});