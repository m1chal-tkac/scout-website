import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultAlbum extends Schema.Component {
  collectionName: 'components_default_albums';
  info: {
    displayName: 'Album';
  };
  attributes: {
    Nazev: Attribute.String & Attribute.Required;
    Odkaz: Attribute.String & Attribute.Required;
  };
}

export interface DefaultKlubovna extends Schema.Component {
  collectionName: 'components_default_klubovnas';
  info: {
    displayName: 'Klubovna';
    description: '';
  };
  attributes: {
    Obrazky: Attribute.Media;
    Nazev: Attribute.String & Attribute.Required;
    Adresa: Attribute.String & Attribute.Required;
    MapyCzKod: Attribute.String & Attribute.Required;
    spravce: Attribute.Relation<
      'default.klubovna',
      'oneToOne',
      'api::jeden-vedouci.jeden-vedouci'
    >;
  };
}

export interface DefaultKontakt extends Schema.Component {
  collectionName: 'components_default_kontakts';
  info: {
    displayName: 'Kontakt';
  };
  attributes: {
    Funkce: Attribute.String & Attribute.Required;
    vedouci: Attribute.Relation<
      'default.kontakt',
      'oneToOne',
      'api::jeden-vedouci.jeden-vedouci'
    >;
  };
}

export interface DefaultSocialniSit extends Schema.Component {
  collectionName: 'components_default_socialni_sit';
  info: {
    displayName: 'Soci\u00E1ln\u00ED s\u00ED\u0165';
    description: '';
  };
  attributes: {
    Typ: Attribute.Enumeration<['Instagram', 'Facebook']>;
    Odkaz: Attribute.String & Attribute.Required;
  };
}

export interface DefaultSponzor extends Schema.Component {
  collectionName: 'components_default_sponzors';
  info: {
    displayName: 'Sponzor';
    description: '';
  };
  attributes: {
    Obrazek: Attribute.Media & Attribute.Required;
    Nazev: Attribute.String & Attribute.Required;
    Odkaz: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default.album': DefaultAlbum;
      'default.klubovna': DefaultKlubovna;
      'default.kontakt': DefaultKontakt;
      'default.socialni-sit': DefaultSocialniSit;
      'default.sponzor': DefaultSponzor;
    }
  }
}
