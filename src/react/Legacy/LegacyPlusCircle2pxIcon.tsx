import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyPlusCircle2pxIcon = (
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
    <g fill='#333' clipPath='url(#0da35bc91a184cdba90b059a7d671c95__a)'>
      <path d='M7 5a1 1 0 0 1 2 0v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0V9H5a1 1 0 0 1 0-2h2z' />
      <path
        fillRule='evenodd'
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-2 0A6 6 0 1 1 2 8a6 6 0 0 1 12 0'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='0da35bc91a184cdba90b059a7d671c95__a'>
        <rect width={16} height={16} fill='#fff' rx={8} />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyPlusCircle2pxIcon);
export default ForwardRef;
