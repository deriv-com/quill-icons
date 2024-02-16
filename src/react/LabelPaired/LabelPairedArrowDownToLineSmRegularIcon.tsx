import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.688 16.875q-.411-.027-.438-.437.027-.411.438-.438h9.625q.41.027.437.438-.027.41-.437.437zM5.8 14.113q-.3.274-.602 0l-3.5-3.5q-.273-.3 0-.601.3-.274.602 0l2.762 2.734V5.063q.027-.411.437-.438.41.027.438.438v7.683l2.761-2.734q.3-.274.602 0 .273.3 0 .601z' />
    </g>
    <defs>
      <clipPath id='e1f2f90b8738d3a7fe22ecb33bb25f98__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineSmRegularIcon);
export default ForwardRef;
