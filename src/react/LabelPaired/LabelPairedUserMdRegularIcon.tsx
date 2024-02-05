import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 8q0-.813-.406-1.5A3.007 3.007 0 0 0 7 5a3.01 3.01 0 0 0-2.594 1.5Q4.001 7.187 4 8q0 .813.406 1.5T5.5 10.594Q6.22 11 7 11a3.01 3.01 0 0 0 2.594-1.5Q10 8.813 10 8M3 8q0-1.094.531-2A4.13 4.13 0 0 1 5 4.531 4 4 0 0 1 7 4q1.062 0 2 .531A4.13 4.13 0 0 1 10.469 6Q11 6.906 11 8q0 1.095-.531 2A4.13 4.13 0 0 1 9 11.469 4 4 0 0 1 7 12a4 4 0 0 1-2-.531A4.13 4.13 0 0 1 3.531 10 3.9 3.9 0 0 1 3 8M1 19h12q-.063-1.905-1.375-3.187-1.281-1.25-3.187-1.313H5.562q-1.905.063-3.187 1.313Q1.063 17.093 1 19m-1 .063q.062-2.344 1.625-3.938 1.594-1.562 3.938-1.625h2.875q2.343.063 3.937 1.625 1.563 1.594 1.625 3.938 0 .406-.281.656a.84.84 0 0 1-.656.281H.938a.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657' />
    </g>
    <defs>
      <clipPath id='9c4a72ecf8c82d3a972638895e8e44d4__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMdRegularIcon);
export default ForwardRef;
