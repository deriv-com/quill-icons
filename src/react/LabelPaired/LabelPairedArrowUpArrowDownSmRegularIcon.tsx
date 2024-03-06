import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m4.8 4.762 2.626 2.625q.273.3 0 .601-.3.274-.602 0l-1.886-1.86v10.31q-.029.41-.438.437-.41-.027-.437-.437V6.127l-1.887 1.86q-.3.274-.602 0-.273-.3 0-.601L4.2 4.762q.3-.274.602 0m9.626 9.351L11.8 16.738q-.3.274-.602 0l-2.625-2.625q-.273-.3 0-.601.3-.274.602 0l1.886 1.86V5.061q.028-.41.438-.437.41.027.438.438V15.37l1.886-1.86q.3-.273.602 0 .273.302 0 .602' />
    </g>
    <defs>
      <clipPath id='43adc693b9de9738cb3a080928928414__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownSmRegularIcon);
export default ForwardRef;
