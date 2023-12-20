import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartTrendDownRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M27.523 25.836a.641.641 0 0 1-.859-.273l-3.555-7.188H17.25c-.273 0-.469-.117-.586-.312l-4.727-9.454-6.914 3.477c-.312.156-.703 0-.859-.274a.641.641 0 0 1 .274-.859l7.5-3.75a.641.641 0 0 1 .859.274l4.805 9.648H23.5c.234 0 .43.156.547.352l3.75 7.5a.641.641 0 0 1-.274.859'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTrendDownRegularIcon);
export default ForwardRef;
