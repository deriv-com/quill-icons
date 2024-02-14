import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.688 15.5q-.08 3.71-2.344 6.328-2.265 2.618-5.82 3.242v-6.757h2.265l.43-2.813h-2.696v-1.836a1.4 1.4 0 0 1 .313-1.016q.351-.468 1.25-.468h1.21V9.797q-.038-.039-.663-.117a13 13 0 0 0-1.485-.078q-1.68 0-2.656.976-.976.977-1.015 2.774V15.5H6.016v2.813h2.46v6.757q-3.555-.624-5.82-3.242T.313 15.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q7.305 5.85 10 5.813q2.696.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883' />
    </g>
    <defs>
      <clipPath id='779c137c91163edbcea1ba10bfd24dd8__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookLgIcon);
export default ForwardRef;
