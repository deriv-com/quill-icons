import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyInformationIcon = (
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
      <path
        fillRule='evenodd'
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7 4V7a1 1 0 0 0-1-1H6a1 1 0 0 0 1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0-1-1m0-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='27f233be9365158a60bc26f5c56f6c6e__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyInformationIcon);
export default ForwardRef;
