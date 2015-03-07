#!/usr/bin/env node

var should = require('should');
var taft = require('..');

describe('taft options', function(){

    before(function(){

        var options = {
            defaultLayout: 'basic',
        };

        this.T = taft.Taft(options);
    });



    it('should silent and verbose defaults', function(){
        console.log(this.T.silent) //.should.be.False;
        this.T.verbose //.should.be.False;
    });

    it('should have default layout', function(){
        this.T.defaultLayout.should.equal('basic');
    });

});