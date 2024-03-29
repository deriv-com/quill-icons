import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneXmarkFillIcon = (
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
    <path d='M21.86 12.398 17.757 16.5l4.101 4.14c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0L16 18.297l-4.14 4.101a1.205 1.205 0 0 1-1.758 0 1.204 1.204 0 0 1 0-1.757l4.101-4.141-4.101-4.102a1.204 1.204 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L16 14.742l4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkFillIcon);
export default ForwardRef;
