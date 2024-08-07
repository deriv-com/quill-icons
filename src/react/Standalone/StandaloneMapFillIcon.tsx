import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneMapFillIcon = (
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
    <path d='m19.75 25.133-7.5-2.149V7.906l7.5 2.149zm1.25-.078V9.977l4.96-1.993c.587-.234 1.29.196 1.29.86V21.93c0 .39-.234.742-.625.86zM5.336 10.25 11 7.984v15.079l-5 1.992a.916.916 0 0 1-1.25-.86V11.11c0-.39.234-.742.586-.859' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMapFillIcon);
export default ForwardRef;
