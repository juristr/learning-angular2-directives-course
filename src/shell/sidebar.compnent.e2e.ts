describe('sidebar', function() {

  beforeEach(function() {
      browser.get('');
  });

  it('should have the user profile', function() {
      expect(element(by.css('user-profile')).isPresent()).toEqual(true);
  });

  it('should have the app menu', function() {
      expect(element(by.css('app-menu')).isPresent()).toEqual(true);
  });

});
