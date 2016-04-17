describe('App', function() {

   beforeEach(function() {
       browser.get('');
   });

   it('should have an app header', function() {
       expect(element(by.css('app-header')).isPresent()).toEqual(true);
   });

   it('should have an app sidebar', function() {
       expect(element(by.css('app-sidebar')).isPresent()).toEqual(true);
   });

});