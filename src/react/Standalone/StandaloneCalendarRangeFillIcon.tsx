import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCalendarRangeFillIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M11 7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V9h5V7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V9h1.875c1.016 0 1.875.86 1.875 1.875v1.875H7.25v-1.875C7.25 9.859 8.07 9 9.125 9H11zM24.75 14v10.625c0 1.055-.86 1.875-1.875 1.875H9.125a1.85 1.85 0 0 1-1.875-1.875V14zm-12.5 3.75c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M21 24c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m-6.25-6.25c0 .547.39.938.938.938h5.624c.508 0 .938-.391.938-.938a.95.95 0 0 0-.937-.937h-5.625a.925.925 0 0 0-.938.937m1.563 4.063h-5.625a.925.925 0 0 0-.938.937c0 .547.39.938.938.938h5.624c.508 0 .938-.391.938-.938a.95.95 0 0 0-.937-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRangeFillIcon);
export default ForwardRef;
