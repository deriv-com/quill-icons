import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCommissionIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#333' fillRule='evenodd' clipRule='evenodd'>
      <path d='M4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M11.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M12.854 3.146a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyCommissionIcon);
export default ForwardRef;
