import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyUnarchive2pxIcon = (
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
    <g fill='#333' clipPath='url(#6bd3623e13295fbe1a1b03141ac8956f__a)'>
      <path d='M7.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V12a.75.75 0 0 1-1.5 0V9.81l-.72.72a.75.75 0 1 1-1.06-1.06z' />
      <path
        fillRule='evenodd'
        d='M1.574 1.336A3 3 0 0 1 4.07 0h7.86a3 3 0 0 1 2.496 1.336l.734 1.102A5 5 0 0 1 16 5.21V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5.211a5 5 0 0 1 .84-2.773zM4.07 2a1 1 0 0 0-.832.445l-.734 1.102A3 3 0 0 0 2.255 4h11.49a3 3 0 0 0-.249-.453l-.734-1.102A1 1 0 0 0 11.93 2zM14 6H2v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='6bd3623e13295fbe1a1b03141ac8956f__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyUnarchive2pxIcon);
export default ForwardRef;
