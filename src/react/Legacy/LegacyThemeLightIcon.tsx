import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyThemeLightIcon = (
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
      <path d='M8 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4m0-7C6.35 5 5 6.35 5 8s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m.5-2.5v-2C8.5.22 8.28 0 8 0s-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5m3.74 1.96 1.11-1.11c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.11 1.11c-.2.2-.2.51 0 .71a.485.485 0 0 0 .7 0zm1.11 8.89c.2-.2.2-.51 0-.71l-1.11-1.11c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.11 1.11a.485.485 0 0 0 .7 0zm-10 0 1.11-1.11c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.11 1.11c-.2.2-.2.51 0 .71a.485.485 0 0 0 .7 0zm1.11-8.89c.2-.2.2-.51 0-.71L3.35 2.64c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.11 1.11a.485.485 0 0 0 .7 0zM16 8c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5m-7.5 7.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5M3 8c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5' />
    </g>
    <defs>
      <clipPath id='dec02e0ccc2674e2be6064bc2c6382cc__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyThemeLightIcon);
export default ForwardRef;
