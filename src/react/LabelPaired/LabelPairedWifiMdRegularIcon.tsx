import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiMdRegularIcon = (
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
      <path d='M.844 9.75q-.345.312-.688 0-.312-.344 0-.687a13.7 13.7 0 0 1 4.438-2.97Q7.093 5.032 10 5q2.907.03 5.406 1.094a13.7 13.7 0 0 1 4.438 2.968q.312.345 0 .688-.345.312-.688 0A13.2 13.2 0 0 0 15.031 7Q12.687 6.03 10 6q-2.688.03-5.031 1A13.3 13.3 0 0 0 .844 9.75M10 11a7.7 7.7 0 0 0-3.094.625q-1.469.625-2.562 1.719-.345.28-.688 0-.312-.375 0-.719A8.9 8.9 0 0 1 6.5 10.719 8.55 8.55 0 0 1 10 10q1.875 0 3.5.719a8.9 8.9 0 0 1 2.844 1.906q.312.344 0 .719-.345.28-.688 0a8 8 0 0 0-2.562-1.719A7.7 7.7 0 0 0 10 11m0 5a.97.97 0 0 0-.719.281A.97.97 0 0 0 9 17q0 .438.281.719A.97.97 0 0 0 10 18a.97.97 0 0 0 .719-.281A.97.97 0 0 0 11 17a.97.97 0 0 0-.281-.719A.97.97 0 0 0 10 16m0 3q-1.125-.03-1.719-1-.562-1 0-2 .594-.97 1.719-1 1.125.03 1.719 1 .562 1 0 2-.594.97-1.719 1' />
    </g>
    <defs>
      <clipPath id='20a160484526d0604f7402fa90bc1f64__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiMdRegularIcon);
export default ForwardRef;
