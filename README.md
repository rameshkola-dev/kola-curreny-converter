kola-currency-converter: Currency Converter
Kola Currency Converter is a free currency converter package that aims to make currency conversions as easy as possible in your project.

Installation
npm
npm install --save 'kola-currency-converter'
yarn
yarn add kola-currency-converter

Import
import {convertcurrency } from 'kola-currency-converter';

Usage

convertcurrency('USD', 'INR', 1000).then( res => console.log(res));
