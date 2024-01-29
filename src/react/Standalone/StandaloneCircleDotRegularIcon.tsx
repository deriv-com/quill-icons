import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleDotRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m12.5 0q-.04-1.406-1.25-2.148-1.25-.705-2.5 0-1.21.741-1.25 2.148.04 1.407 1.25 2.148 1.25.705 2.5 0 1.21-.741 1.25-2.148m-6.25 0q0-1.015.508-1.875A3.759 3.759 0 0 1 16 12.75a3.76 3.76 0 0 1 3.242 1.875 3.6 3.6 0 0 1 .508 1.875 3.6 3.6 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.76 3.76 0 0 1-3.242-1.875 3.6 3.6 0 0 1-.508-1.875' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDotRegularIcon);
export default ForwardRef;
