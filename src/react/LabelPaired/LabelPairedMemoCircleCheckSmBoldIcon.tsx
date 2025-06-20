import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckSmBoldIcon = (
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
      <path d='M1.875 5.063a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438h6.016q.492.779 1.23 1.312H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h7c.957 0 1.75.793 1.75 1.75v3.691a4.1 4.1 0 0 0-1.312.602V5.5a.47.47 0 0 0-.438-.437zM3.406 7.25h3.938c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H3.406a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656m0 2.625h3.938c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.406a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656m0 2.625H4.72c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H3.406a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656m12.469 1.313a3.97 3.97 0 0 1-1.969 3.417c-1.23.711-2.734.711-3.937 0A3.92 3.92 0 0 1 8 13.813c0-1.394.738-2.68 1.969-3.39a3.9 3.9 0 0 1 3.937 0c1.203.71 1.969 1.996 1.969 3.39m-2.105-1.176a.463.463 0 0 0-.63 0l-1.64 1.668-.793-.793a.463.463 0 0 0-.629 0 .463.463 0 0 0 0 .629l1.094 1.093a.463.463 0 0 0 .629 0l1.969-1.968a.463.463 0 0 0 0-.63' />
    </g>
    <defs>
      <clipPath id='1c9568c13e6233c77be2e3b8fc77566b__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmBoldIcon);
export default ForwardRef;
