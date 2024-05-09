import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDonchianIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M5.78 9h2.424l2.822 12.225A1 1 0 0 0 12 22h4a1 1 0 0 0 .992-.876l1.944-15.546 2.619-1.746a1 1 0 0 0-1.11-1.664l-3 2a1 1 0 0 0-.437.708L15.118 20h-2.322L9.974 7.775A1 1 0 0 0 9 7H5a1 1 0 0 0-.97.757l-2 8a1 1 0 1 0 1.94.486z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyDonchianIcon);
export default ForwardRef;
