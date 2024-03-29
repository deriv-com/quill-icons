import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialLinkedinBrandIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#fff'
        d='M16.498 12.19h-4.307v15.238h4.57V20.11c0-2.553 1.096-4.109 3.395-4.109 1.892 0 2.701 1.779 2.701 3.805v7.623h4.571v-8.457c0-4.527-1.284-6.971-5.888-6.971-2.398 0-4.337 1.202-4.994 2.387h-.048zM9.143 27.428H4.572V12.19h4.57zm.354-19.477a2.87 2.87 0 0 0-.005-2.197 2.847 2.847 0 0 0-2.635-1.751 2.856 2.856 0 1 0 2.64 3.948'
      />
      <path
        fill='#0073B0'
        d='M29.682 0H2.412C1.108 0 0 1.032 0 2.302v27.394C0 30.968.727 32 2.031 32h27.27C30.607 32 32 30.968 32 29.696V2.302A2.294 2.294 0 0 0 29.682 0M12.191 12.19h4.307v2.197h.048C17.203 13.202 19.142 12 21.54 12c4.604 0 5.888 2.444 5.888 6.971v8.457h-4.57v-7.623c0-2.026-.81-3.805-2.702-3.805-2.299 0-3.394 1.556-3.394 4.11v7.318H12.19zM4.57 27.428h4.572V12.19H4.572zM9.715 6.857a2.87 2.87 0 0 1-.836 2.02 2.87 2.87 0 0 1-2.02.838A2.86 2.86 0 0 1 4.22 7.952a2.85 2.85 0 0 1 .619-3.113 2.856 2.856 0 0 1 4.876 2.018'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SocialLinkedinBrandIcon);
export default ForwardRef;
