import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUserBoldIcon = (
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
    <path d='M19.125 11.5q-.04-1.758-1.562-2.695-1.563-.86-3.125 0-1.524.937-1.563 2.695.039 1.758 1.563 2.695 1.562.86 3.124 0 1.524-.937 1.563-2.695M11 11.5q0-1.368.664-2.5A5.17 5.17 0 0 1 13.5 7.164 5 5 0 0 1 16 6.5q1.328 0 2.5.664A5.17 5.17 0 0 1 20.336 9Q21 10.132 21 11.5t-.664 2.5a5.17 5.17 0 0 1-1.836 1.836 5 5 0 0 1-2.5.664 5 5 0 0 1-2.5-.664A5.17 5.17 0 0 1 11.664 14 4.85 4.85 0 0 1 11 11.5M9.164 24.625h13.672q-.312-1.914-1.68-3.125-1.405-1.21-3.36-1.25h-3.593q-1.953.04-3.32 1.25-1.406 1.21-1.719 3.125m-1.914.703q.079-2.93 2.031-4.922 1.992-1.953 4.922-2.031h3.594q2.93.079 4.922 2.031 1.953 1.992 2.031 4.922 0 .508-.352.82-.312.352-.82.352H8.422q-.508 0-.82-.352-.352-.312-.352-.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserBoldIcon);
export default ForwardRef;
