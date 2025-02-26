import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySmartphone3Icon = (
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
        d='M5.5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 3h7v10h-7zM8 15.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='3858a89e878feaba638550063682a4fa__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySmartphone3Icon);
export default ForwardRef;
