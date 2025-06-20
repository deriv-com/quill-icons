import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdSmBoldIcon = (
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
      <path d='M1.875 5.938a.45.45 0 0 0-.437.437v8.75c0 .246.19.438.437.438h12.25a.45.45 0 0 0 .438-.438v-8.75a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm6.262 2.133 1.968 3.937a.647.647 0 0 1-.3.875c-.301.164-.711.028-.875-.3l-.137-.301H4.555l-.137.3a.647.647 0 0 1-.875.301.647.647 0 0 1-.3-.875L5.21 8.508a.67.67 0 0 1 .601-.383c.247 0 .465.137.575.383m-.574 1.75-.602 1.148h1.176zm5.03.492c-.382 0-.655.3-.655.656 0 .383.273.656.656.656a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656m.657-1.176v-.793c0-.355.273-.656.656-.656.356 0 .656.3.656.656v3.938c0 .383-.3.656-.656.656-.191 0-.355-.055-.465-.191a1.8 1.8 0 0 1-.847.191 1.96 1.96 0 0 1-1.969-1.969c0-1.066.875-1.969 1.969-1.969.219 0 .437.055.656.137' />
    </g>
    <defs>
      <clipPath id='a826f465531edb6d6fdcfa017e881cdd__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmBoldIcon);
export default ForwardRef;
