import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartLineFillIcon = (
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
    <path d='M8.5 9v13.125c0 .352.273.625.625.625H24.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.125C7.367 25.25 6 23.883 6 22.125V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m15.86 3.398-5 5a1.205 1.205 0 0 1-1.758 0l-2.227-2.226-3.516 3.476a1.205 1.205 0 0 1-1.757 0 1.204 1.204 0 0 1 0-1.757l4.375-4.375a1.205 1.205 0 0 1 1.757 0l2.266 2.226 4.102-4.101a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartLineFillIcon);
export default ForwardRef;
