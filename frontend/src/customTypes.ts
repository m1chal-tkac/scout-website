export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
      formats: {
        [name: string]: {
          url: string;
          width: number;
        };
      };
    };
  };
};

export type StrapiImages = {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
      formats: {
        [name: string]: {
          url: string;
          width: number;
        };
      };
    };
  }[];
};
