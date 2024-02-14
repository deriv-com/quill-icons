import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.5v11q.03.625.438 1.063.436.405 1.062.437h13q.47.031.5.5-.03.47-.5.5h-13q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-11q.031-.469.5-.5.47.031.5.5m9 0v1.531q.438.095.719.438.28.312.281.781v2.5q-.063.969-1 1.219V13.5q-.03.47-.5.5-.469-.03-.5-.5v-1.531a1.24 1.24 0 0 1-.719-.438A1.12 1.12 0 0 1 8 10.75v-2.5q.063-.969 1-1.219V5.5q.031-.469.5-.5.47.031.5.5M5.5 6q.47.031.5.5v1.531q.437.095.719.438.28.313.281.781v3.5q-.063.969-1 1.219V15.5q-.03.47-.5.5-.469-.03-.5-.5v-1.531a1.24 1.24 0 0 1-.719-.438A1.12 1.12 0 0 1 4 12.75v-3.5q.063-.969 1-1.219V6.5q.031-.469.5-.5M10 8.25q-.03-.22-.25-.25h-.5q-.22.03-.25.25v2.5q.03.22.25.25h.5q.22-.03.25-.25zM13.25 11q-.22.03-.25.25v1.5q.03.22.25.25h.5q.22-.03.25-.25v-1.5q-.03-.22-.25-.25zM13 10V8.5q.031-.469.5-.5.47.031.5.5v1.531q.438.095.719.438.28.313.281.781v1.5q-.063.969-1 1.219V15.5q-.03.47-.5.5-.469-.03-.5-.5v-1.531a1.24 1.24 0 0 1-.719-.438A1.13 1.13 0 0 1 12 12.75v-1.5q.063-.969 1-1.219zM5.75 9h-.5q-.22.03-.25.25v3.5q.03.22.25.25h.5q.22-.03.25-.25v-3.5q-.03-.22-.25-.25' />
    </g>
    <defs>
      <clipPath id='09cf59fcb0ba410659e534632b133025__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickMdRegularIcon);
export default ForwardRef;
