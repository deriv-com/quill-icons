import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneChartAreaFillIcon = (
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
    <path d='M8.5 9v13.125c0 .352.273.625.625.625H24.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.125C7.367 25.25 6 23.883 6 22.125V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m3.75 11.25v.04c-.703 0-1.25-.587-1.25-1.25v-3.282c0-.313.078-.625.273-.86l3.125-3.515a1.262 1.262 0 0 1 1.915 0l1.523 1.836a.915.915 0 0 0 1.367.078l.82-.82c.508-.508 1.368-.508 1.836.078l2.578 2.968c.196.235.313.547.313.82V19c0 .703-.586 1.25-1.25 1.25z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartAreaFillIcon);
export default ForwardRef;
