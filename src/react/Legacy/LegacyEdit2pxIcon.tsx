import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyEdit2pxIcon = (
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
    <g clipPath='url(#74f530901441388e984843e8dba77b20__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M10.293 1.293a3.121 3.121 0 1 1 4.414 4.414L4.414 16H0v-4.414zm3 1.414a1.12 1.12 0 0 0-1.586 0l-.97.97 1.586 1.586.97-.97a1.12 1.12 0 0 0 0-1.586m-2.03 3.616L9.677 4.738l-5.44 5.439 1.586 1.586zM2 12.414l1.177-1.176 1.586 1.585L3.586 14H2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='74f530901441388e984843e8dba77b20__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyEdit2pxIcon);
export default ForwardRef;
