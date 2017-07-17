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
  describe('float number multiplications', () => {
    it('should return -11x85="-935"', () => {
      expect(multiply('-11', '85')).to.be.equal('-935');
    });
    it('should return 32.12x0.5="16.06"', () => {
      expect(multiply('32.12', '0.5')).to.be.equal('16.06');
    });
    it('should return 32.12x0.="0"', () => {
      expect(multiply('32.12', '0.')).to.be.equal('0');
    });
    it('should return 3212x0.="0"', () => {
      expect(multiply('3212', '0.')).to.be.equal('0');
    });
    it('should return 3212x0.="3212"', () => {
      expect(multiply('3212', '1.')).to.be.equal('3212');
    });
    it('should return 32.12x0.500="16.06"', () => {
      expect(multiply('32.12', '0.500')).to.be.equal('16.06');
    });
    it('should return -0.00x0.0000="0"', () => {
      expect(multiply('-0.00', '0.0000')).to.be.equal('0');
    });
    it('should return -0.01x-0.0000="0"', () => {
      expect(multiply('-0.01', '0.0000')).to.be.equal('0');
    });
    it('should return 2.01x-3.0000="6.03"', () => {
      expect(multiply('2.01', '3.0000')).to.be.equal('6.03');
    });
    it('should return 2x-3.000001="-6.000002"', () => {
      expect(multiply('2', '-3.000001')).to.be.equal('-6.000002');
    });
    it('should return -5.0908x-123.1="626.67748"', () => {
      expect(multiply('-5.0908', '-123.1')).to.be.equal('626.67748');
    });
    it('should return 00.0908x0.01="626.67748"', () => {
      expect(multiply('00.0908', '0.01')).to.be.equal('0.000908');
    });
    it('should return 56.65x200="11330"', () => {
      expect(multiply('56.65', '200')).to.be.equal('11330');
    });
    it('should return 56.65x100="5665"', () => {
      expect(multiply('56.65', '100')).to.be.equal('5665');
    });
    it('should return 56.65x100.1="5670.665"', () => {
      expect(multiply('56.65', '100.1')).to.be.equal('5670.665');
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
