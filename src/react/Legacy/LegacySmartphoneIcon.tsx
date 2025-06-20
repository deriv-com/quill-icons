import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySmartphoneIcon = (
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
        d='M5.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 2a1 1 0 0 1 1-1H6a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 10 1h.5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='4659d0ea3a0c79bd64db70a585d9d087__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySmartphoneIcon);
export default ForwardRef;
