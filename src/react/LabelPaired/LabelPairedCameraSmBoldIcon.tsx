import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.441 4.625h3.09a1.56 1.56 0 0 1 1.477 1.066l.219.684h2.023c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h1.996l.246-.684.602.192-.602-.192a1.53 1.53 0 0 1 1.45-1.066m-.218 1.477L4.84 7.25c-.082.273-.328.438-.63.438H1.75a.45.45 0 0 0-.437.437v7c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438v-7a.47.47 0 0 0-.438-.437H9.762c-.301 0-.547-.165-.63-.438L8.75 6.102a.24.24 0 0 0-.219-.165h-3.09a.24.24 0 0 0-.218.165M7 14.688a3.01 3.01 0 0 1-2.652-1.532 2.94 2.94 0 0 1 0-3.062A3.07 3.07 0 0 1 7 8.563c1.094 0 2.078.601 2.625 1.53a2.94 2.94 0 0 1 0 3.063A3 3 0 0 1 7 14.687m-1.75-3.063c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504' />
    </g>
    <defs>
      <clipPath id='37ce68123b2a9d40e965123b9828fa5b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraSmBoldIcon);
export default ForwardRef;
