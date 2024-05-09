import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyEdit1pxIcon = (
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
        d='M11.146 1.146a2.621 2.621 0 0 1 3.708 3.708L3.707 16H0v-3.707zm3 .708a1.62 1.62 0 0 0-2.292 0l-.647.646L13.5 4.793l.646-.647a1.62 1.62 0 0 0 0-2.292M12.793 5.5 10.5 3.207 2.707 11 5 13.293zM1 12.707l1-1L4.293 14l-1 1H1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='2b48305a81d58656e3436174c896126c__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyEdit1pxIcon);
export default ForwardRef;
