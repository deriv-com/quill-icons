import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyArrowDown2pxIcon = (
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
    <g clipPath='url(#fd90b7357f56ec94ed8f468fa12d061d__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M8 0a1 1 0 0 1 1 1v11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L7 12.586V1a1 1 0 0 1 1-1'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='fd90b7357f56ec94ed8f468fa12d061d__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyArrowDown2pxIcon);
export default ForwardRef;
