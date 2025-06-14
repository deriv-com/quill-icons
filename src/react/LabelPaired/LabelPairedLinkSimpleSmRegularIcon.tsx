import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleSmRegularIcon = (
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
      <path d='M.125 10.75A4.37 4.37 0 0 1 4.5 6.375h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.5a3.507 3.507 0 0 0-3.5 3.5 3.49 3.49 0 0 0 3.5 3.5h2.188a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H4.5A4.353 4.353 0 0 1 .125 10.75m15.75 0a4.37 4.37 0 0 1-4.375 4.375H9.313a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438H11.5c1.914 0 3.5-1.559 3.5-3.5 0-1.914-1.586-3.5-3.5-3.5H9.313a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438H11.5a4.39 4.39 0 0 1 4.375 4.375m-11.594-.437h7.438a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H4.28a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='a6335976c25c8c82a72e59843f40242c__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleSmRegularIcon);
export default ForwardRef;
