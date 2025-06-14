import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyLocation1pxIcon = (
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
      <path d='M8 0c3.316 0 6 2.745 6 6.125a6.75 6.75 0 0 1-.643 2.949c-.391.843-.954 1.688-1.893 2.891-.106.137-.384.484-.736.923l-.245.305-.26.324-1.83 2.291a.5.5 0 0 1-.787 0 196 196 0 0 0-1.2-1.507l-.364-.454-.854-1.064-.862-1.09c-.815-1.061-1.322-1.84-1.683-2.62A6.75 6.75 0 0 1 2 6.126C2 2.745 4.684 0 8 0m0 1C5.241 1 3 3.292 3 6.125c0 .93.174 1.717.55 2.528.352.76.878 1.549 1.774 2.697L8 14.693l2.276-2.84.6-.761c.776-1.011 1.249-1.738 1.574-2.439.376-.81.55-1.598.55-2.528C13 3.292 10.759 1 8 1m0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4' />
    </g>
    <defs>
      <clipPath id='c41b1823e6d0f6c2c3639f6567700ff6__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyLocation1pxIcon);
export default ForwardRef;
