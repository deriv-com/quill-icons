import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyPaste1pxIcon = (
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
        d='M4.085 1A1.5 1.5 0 0 1 5.5 0h2a1.5 1.5 0 0 1 1.415 1H9.5A1.5 1.5 0 0 1 11 2.5V4h1.5A1.5 1.5 0 0 1 14 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 13.5V13H3.5A1.5 1.5 0 0 1 2 11.5v-9A1.5 1.5 0 0 1 3.5 1zM5 12V5.5A1.5 1.5 0 0 1 6.5 4H10V2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5zm1-6.5v8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5m1 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='de89020ebce7d88577ef31ee12fa7321__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyPaste1pxIcon);
export default ForwardRef;
