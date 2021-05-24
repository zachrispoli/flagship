/**
 * Tag dimensions
 * https://developer.bazaarvoice.com/conversations-api/tutorials/field-types#tags---tag-dimensions
 */
export interface ReviewTagDimensions {
  /**
   * Identifier for the tag dimension
   *
   * @example "FavoriteDays"
   */
  id?: string;

  /**
   * Label for the tag dimension
   *
   * @example "I like using this product on the following days"
   */
  label?: string;

  /**
   * Values for the tag dimension
   *
   * @example ["Thursday", "Saturday"]
   */
  values?: string[];
}
