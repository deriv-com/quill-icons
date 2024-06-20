import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoSmBoldIcon = (
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
      <path d='M1.875 16.438h6.016q.492.779 1.23 1.312H1.875c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h4.512c.465 0 .902.191 1.23.52l2.488 2.488c.329.328.52.765.52 1.23v1.203a4.1 4.1 0 0 0-1.312.602V8.125H7.124a.864.864 0 0 1-.875-.875V5.063H1.875a.45.45 0 0 0-.437.437V16c0 .246.19.438.437.438m10.063-6.563c1.394 0 2.68.766 3.39 1.969a3.9 3.9 0 0 1 0 3.937 3.9 3.9 0 0 1-3.39 1.969 3.92 3.92 0 0 1-3.418-1.969 3.9 3.9 0 0 1 0-3.937 3.97 3.97 0 0 1 3.418-1.969m0 2.625a.65.65 0 0 0 .656-.656c0-.356-.301-.656-.656-.656-.383 0-.657.3-.657.656 0 .383.274.656.656.656m-.876 1.313c0 .246.192.437.438.437v1.313a.45.45 0 0 0-.437.437c0 .246.19.438.437.438h.875a.45.45 0 0 0 .438-.438.47.47 0 0 0-.438-.437v-1.75a.47.47 0 0 0-.437-.438H11.5a.45.45 0 0 0-.437.438' />
    </g>
    <defs>
      <clipPath id='16abb02bb740f83baf30836d0f1343d0__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoSmBoldIcon);
export default ForwardRef;
