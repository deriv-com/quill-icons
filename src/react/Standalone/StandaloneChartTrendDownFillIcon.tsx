import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartTrendDownFillIcon = (
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
    <path d='M11.664 6.656a1.24 1.24 0 0 1 1.68.547l4.648 9.297H23.5c.469 0 .898.273 1.094.703l3.75 7.5a1.24 1.24 0 0 1-.547 1.68 1.24 1.24 0 0 1-1.68-.547L22.72 19H17.25c-.508 0-.937-.234-1.133-.664L11.664 9.43l-6.367 3.203a1.24 1.24 0 0 1-1.68-.547 1.24 1.24 0 0 1 .547-1.68z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTrendDownFillIcon);
export default ForwardRef;
