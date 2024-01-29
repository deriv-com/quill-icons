import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneFacebookIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M25.688 16.5q-.08 3.71-2.344 6.328-2.265 2.618-5.82 3.242v-6.757h2.265l.43-2.813h-2.696v-1.836a1.4 1.4 0 0 1 .313-1.016q.351-.468 1.25-.468h1.21v-2.383q-.038-.039-.663-.117a13 13 0 0 0-1.485-.078q-1.68 0-2.656.976-.976.977-1.015 2.774V16.5h-2.461v2.813h2.46v6.757q-3.555-.624-5.82-3.242T6.312 16.5q.04-2.695 1.329-4.883a9.7 9.7 0 0 1 3.476-3.476Q13.304 6.85 16 6.813q2.695.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFacebookIcon);
export default ForwardRef;
