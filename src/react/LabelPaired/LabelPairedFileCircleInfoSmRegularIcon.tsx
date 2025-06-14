import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoSmRegularIcon = (
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
      <path d='M1.875 16.875h6.344c.273.328.574.629.902.875H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93v.956a3.1 3.1 0 0 0-.875.356V9H6.688a1.296 1.296 0 0 1-1.313-1.312V4.624h-3.5A.88.88 0 0 0 1 5.5V16c0 .492.383.875.875.875m7.848-8.75c-.028-.055-.055-.137-.11-.191L6.441 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zM15 13.813c0-1.094-.602-2.079-1.531-2.626a2.94 2.94 0 0 0-3.063 0 3 3 0 0 0-1.531 2.626 3.01 3.01 0 0 0 1.531 2.652c.93.574 2.106.574 3.063 0A3.07 3.07 0 0 0 15 13.813m-7 0c0-1.395.738-2.68 1.969-3.391a3.9 3.9 0 0 1 3.937 0c1.203.71 1.969 1.996 1.969 3.39a3.97 3.97 0 0 1-1.969 3.419c-1.23.71-2.734.71-3.937 0A3.92 3.92 0 0 1 8 13.811m3.938-.876a.63.63 0 0 1-.657-.656c0-.355.274-.656.656-.656.356 0 .657.3.657.656 0 .383-.301.656-.656.656m-.876 2.626a.45.45 0 0 1 .438-.438v-.875a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438h.438a.47.47 0 0 1 .437.438v1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H11.5a.43.43 0 0 1-.437-.437' />
    </g>
    <defs>
      <clipPath id='06aa68e81e2237b20c4f8731fff7cc69__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoSmRegularIcon);
export default ForwardRef;
