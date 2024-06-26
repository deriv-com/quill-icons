import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDtrendedIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#85ACB0'
      d='m5.38 8.64 1.65 6.602c.216.865 1.37 1.036 1.827.272l1.882-3.135 2.312 6.937c.304.912 1.594.912 1.898 0l2.396-7.19L19.2 14.6c.55.733 1.713.403 1.796-.51l1-11a1 1 0 0 0-1.992-.18l-.764 8.41L17.8 9.4a1 1 0 0 0-1.749.284L14 15.838l-2.051-6.154a1 1 0 0 0-1.806-.198l-1.758 2.93L5.97 2.756c-.27-1.081-1.84-.976-1.964.133l-2 18a1 1 0 1 0 1.988.22z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyDtrendedIcon);
export default ForwardRef;
