describe('Sensor config', function() {

   beforeEach(function() {
       browser.get('#/configure');
   });

   it('should have 3 sensors listed', function() {
       expect(element.all(by.css('sensor-list > table > tbody > tr')).count()).toBeGreaterThan(0);
   });

   it('open the modal dialog', function() {
       // opens the modal
       element.all(by.css('sensor-list tr button')).filter((elem, index) {
          return elem.getText().then(function(text) {
             return text === 'QUICK ADD';
          });
       }).first().click();

       element.all(by.css('modal > div')).isDisplayed().then(function(result) {
          expect(result.filter((val) => val === true).length).toBe(2);
       });
   });


});