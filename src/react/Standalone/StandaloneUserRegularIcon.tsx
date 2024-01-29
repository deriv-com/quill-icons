import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneUserRegularIcon = (
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
    <path d='M19.75 11.5a3.6 3.6 0 0 0-.508-1.875A3.759 3.759 0 0 0 16 7.75a3.76 3.76 0 0 0-3.242 1.875 3.6 3.6 0 0 0-.508 1.875q0 1.015.508 1.875A3.759 3.759 0 0 0 16 15.25a3.76 3.76 0 0 0 3.242-1.875 3.6 3.6 0 0 0 .508-1.875m-8.75 0q0-1.368.664-2.5A5.17 5.17 0 0 1 13.5 7.164 5 5 0 0 1 16 6.5q1.328 0 2.5.664A5.17 5.17 0 0 1 20.336 9Q21 10.132 21 11.5t-.664 2.5a5.17 5.17 0 0 1-1.836 1.836 5 5 0 0 1-2.5.664 5 5 0 0 1-2.5-.664A5.17 5.17 0 0 1 11.664 14 4.85 4.85 0 0 1 11 11.5M8.5 25.25h15q-.078-2.383-1.719-3.984-1.601-1.563-3.984-1.641h-3.594q-2.382.078-3.984 1.64Q8.578 22.868 8.5 25.25m-1.25.078q.079-2.93 2.031-4.922 1.992-1.953 4.922-2.031h3.594q2.93.079 4.922 2.031 1.953 1.992 2.031 4.922 0 .508-.352.82-.312.352-.82.352H8.422q-.508 0-.82-.352-.352-.312-.352-.82' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneUserRegularIcon);
export default ForwardRef;
