import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMobileMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 5.5q-.469.031-.5.5v8H11v2H1.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 14.5q.031-.469.5-.5H2V6q.03-.843.594-1.406Q3.157 4.032 4 4h10q.844.03 1.406.594Q15.97 5.156 16 6v1h-1.5V6q-.03-.469-.5-.5zm8 4q.03-.625.438-1.062A1.63 1.63 0 0 1 13.5 8h5q.625.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 18.5 20h-5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 12 18.5zm1.5 0v9h5v-9z' />
    </g>
    <defs>
      <clipPath id='7a8d471df158c23599e9b2d7b82bdfc3__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileMdBoldIcon);
export default ForwardRef;
