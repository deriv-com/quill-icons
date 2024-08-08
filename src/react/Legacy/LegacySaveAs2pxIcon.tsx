import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacySaveAs2pxIcon = (
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
    <g
      fill='#333'
      fillRule='evenodd'
      clipPath='url(#e3fd56e9ba613a434f5d9a328a35cf87__a)'
      clipRule='evenodd'
    >
      <path d='M1 4a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879L14.415 4 13 5.414l-2-2V5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1v-3a2 2 0 0 1 2-2h4v2H6v5H4a3 3 0 0 1-3-3zm5-1v2h3V3zM15.707 7.293a1 1 0 0 1 0 1.414L8.414 16H7v-1.414l7.293-7.293a1 1 0 0 1 1.414 0' />
    </g>
    <defs>
      <clipPath id='e3fd56e9ba613a434f5d9a328a35cf87__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacySaveAs2pxIcon);
export default ForwardRef;
