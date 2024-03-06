import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.625 5.938v9.625q-.027.41-.437.437-.411-.027-.438-.437V5.938q.027-.411.438-.438.41.027.437.438M9.863 11.05l-3.5 3.5q-.3.273-.601 0-.274-.3 0-.602l2.734-2.761H.813q-.411-.028-.438-.438.027-.41.438-.437h7.683L5.762 7.55q-.274-.3 0-.602.3-.273.601 0l3.5 3.5q.274.3 0 .602' />
    </g>
    <defs>
      <clipPath id='40e51e0456e06fe52796377ba97b227e__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineSmRegularIcon);
export default ForwardRef;
