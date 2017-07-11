/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import multiply from './index';

describe('multiply', () => {
  describe('Some simple multiplications', () => {
    it('should return 2x3="6"', () => {
      expect(multiply('2', '3')).to.be.equal('6');
    });
    it('should return 30x69="2070"', () => {
      expect(multiply('30', '69')).to.be.equal('2070');
    });
    it('should return 11x85="935"', () => {
      expect(multiply('11', '85')).to.be.equal('935');
    });
  });
  describe('Some corner case', () => {
    it('should return 2x0="0"', () => {
      expect(multiply('2', '0')).to.be.equal('0');
    });
    it('should return "0"', () => {
      expect(multiply('0', '30')).to.be.equal('0');
    });
    it('should return 0000001x3="3"', () => {
      expect(multiply('0000001', '3')).to.be.equal('3');
    });
    it('should return 1009x03="3027"', () => {
      expect(multiply('1009', '03')).to.be.equal('3027');
    });
  });
  describe('Some big multiplications', () => {
    it('should return 98765x56894="5619135910"', () => {
      expect(multiply('98765', '56894')).to.be.equal('5619135910');
    });
    it('should return 81129638414606663681390495662081', () => {
      expect(multiply('9007199254740991', '9007199254740991')).to.be.equal('81129638414606663681390495662081');
    });
    it('should return 2830869077153280552556547081187254342445169156730', () => {
      expect(multiply('1020303004875647366210', '2774537626200857473632627613')).to.be.equal('2830869077153280552556547081187254342445169156730');
    });
    it('should return 444625839871840560024489175424316205566214109298', () => {
      expect(multiply('7586374672263726736374', '58608473622772837728372827').length).to.be.equal('444625839871840560024489175424316205566214109298'.length);
    });
  });
});
