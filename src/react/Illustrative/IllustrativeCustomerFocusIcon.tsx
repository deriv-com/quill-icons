import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeCustomerFocusIcon = (
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
    <g>
      <path d='M14 17.333c1.653 0 3-1.346 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3m0-4.666A1.667 1.667 0 1 1 13.999 16 1.667 1.667 0 0 1 14 12.667M16 18c-.367 0-.667.3-.667.667 0 .366.3.666.667.666.733 0 1.333.6 1.333 1.334v2c0 .366-.3.666-.666.666h-5.334a.67.67 0 0 1-.666-.666v-2c0-.734.6-1.334 1.333-1.334.367 0 .667-.3.667-.666S12.367 18 12 18a2.666 2.666 0 0 0-2.667 2.667v2c0 1.1.9 2 2 2h5.334c1.1 0 2-.9 2-2v-2A2.666 2.666 0 0 0 16 18' />
      <path d='M26 17.333h-.7c-.333-5.72-4.913-10.3-10.633-10.633V6c0-.367-.3-.667-.667-.667s-.667.3-.667.667v.7c-5.72.333-10.3 4.913-10.633 10.633H2c-.367 0-.667.3-.667.667s.3.667.667.667h.7c.333 5.72 4.913 10.3 10.633 10.633v.7c0 .367.3.667.667.667s.667-.3.667-.667v-.7c5.72-.333 10.3-4.913 10.633-10.633h.7c.367 0 .667-.3.667-.667s-.3-.667-.667-.667M14.667 27.967v-.634c0-.366-.3-.666-.667-.666s-.667.3-.667.666v.634c-4.98-.334-8.966-4.32-9.3-9.3h.634c.366 0 .666-.3.666-.667s-.3-.667-.666-.667h-.634c.334-4.98 4.32-8.966 9.3-9.3v.634c0 .366.3.666.667.666s.667-.3.667-.666v-.634c4.98.334 8.966 4.32 9.3 9.3h-.634c-.366 0-.666.3-.666.667s.3.667.666.667h.634c-.334 4.98-4.32 8.966-9.3 9.3M26.333 6A.33.33 0 0 1 26 5.667C26 5.3 25.7 5 25.333 5c-.366 0-.666.3-.666.667 0 .92.746 1.666 1.666 1.666.367 0 .667-.3.667-.666S26.7 6 26.333 6' />
      <path d='M29.827 8.22c.526-.713.84-1.6.84-2.553A4.333 4.333 0 1 0 26.333 10c.954 0 1.834-.313 2.554-.84l.64.64c.133.133.3.193.473.193s.34-.066.473-.193c.26-.26.26-.68 0-.94l-.64-.64zm-3.494.447c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.346 3 3-1.346 3-3 3M17.613 10.12a.67.67 0 0 0-.886.327.677.677 0 0 0 .326.886 7.3 7.3 0 0 1 4.047 4.834c.08.3.347.5.647.5.053 0 .113 0 .166-.02a.664.664 0 0 0 .48-.814 8.63 8.63 0 0 0-4.78-5.713M11.407 10.4a.673.673 0 0 0-.88-.347 8.73 8.73 0 0 0-4.927 5.78.667.667 0 1 0 1.293.334 7.37 7.37 0 0 1 4.167-4.887.67.67 0 0 0 .347-.88M21.767 20.04a.67.67 0 0 0-.854.407 7 7 0 0 1-.566 1.22.67.67 0 0 0 .24.913.673.673 0 0 0 .913-.247c.267-.46.493-.946.667-1.446a.674.674 0 0 0-.407-.854zM7.08 20.447a.669.669 0 0 0-1.26.446c.173.5.4.987.667 1.447a.67.67 0 0 0 .913.247.666.666 0 0 0 .24-.914 7.5 7.5 0 0 1-.567-1.22z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCustomerFocusIcon);
export default ForwardRef;
