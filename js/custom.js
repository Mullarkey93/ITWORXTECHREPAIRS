/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$(function(){
      // hide all city select boxes
      $('.brands').hide();
      //make default selected country's city visible
      $('.' + $('select[name=brand]').val() ).show();
      $('select[name=brand]').change(function(){
        // hide all city select boxes
        $('.brands').hide();
        //show city select box for selected country 
        var selectedCountry = $(this).val();
        $('.' + selectedCountry ).show();
      });
  });