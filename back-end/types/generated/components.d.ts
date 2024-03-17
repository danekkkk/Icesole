import type { Schema, Attribute } from '@strapi/strapi';

export interface ColorsProductColor extends Schema.Component {
  collectionName: 'components_colors_product_colors';
  info: {
    displayName: 'product_color';
    icon: 'paint';
    description: '';
  };
  attributes: {
    product_images: Attribute.Media & Attribute.Required;
    XS: Attribute.Integer & Attribute.Required;
    S: Attribute.Integer & Attribute.Required;
    M: Attribute.Integer & Attribute.Required;
    L: Attribute.Integer & Attribute.Required;
    XL: Attribute.Integer & Attribute.Required;
    XXL: Attribute.Integer & Attribute.Required;
    product_color: Attribute.Enumeration<
      [
        'Czarny',
        'Bia\u0142y',
        'Czerwony',
        'Niebieski',
        'Zielony',
        '\u017B\u00F3\u0142ty'
      ]
    > &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'colors.product-color': ColorsProductColor;
    }
  }
}
