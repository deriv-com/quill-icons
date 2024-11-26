import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCrosshairDisabledIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 7a1 1 0 0 1 1 1A4.5 4.5 0 0 0 8 12.5a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2zM8 0a1 1 0 0 1 1 1v.576a6.47 6.47 0 0 1 3.597 1.827A6.47 6.47 0 0 1 14.424 7H15a1 1 0 1 1 0 2h-.576a6.5 6.5 0 0 1-1.173 2.835l1.456 1.458a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 1.414-1.414l1.458 1.456A6.5 6.5 0 0 1 7 1.576V1a1 1 0 0 1 1-1m3.183 4.817a4.5 4.5 0 0 0-5.58-.629l6.209 6.208a4.5 4.5 0 0 0-.63-5.579' />
    </g>
    <defs>
      <clipPath id='b99a48ebc70ebb4dead64268dd3734c7__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyCrosshairDisabledIcon);
export default ForwardRef;
