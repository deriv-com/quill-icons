import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.188 8.125c-.793 0-1.504-.41-1.915-1.094-.382-.656-.382-1.504 0-2.187.41-.657 1.122-1.094 1.914-1.094.766 0 1.477.438 1.887 1.094.383.683.383 1.531 0 2.187-.41.684-1.12 1.094-1.886 1.094m10.062 0c-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.187.41-.657 1.121-1.094 1.914-1.094.766 0 1.477.438 1.887 1.094.383.683.383 1.531 0 2.187-.41.684-1.121 1.094-1.887 1.094m-14 3.8C.25 10.313 1.535 9 3.148 9h1.176c.438 0 .848.11 1.23.273-.054.192-.054.41-.054.602 0 1.066.438 1.996 1.176 2.625H.824a.56.56 0 0 1-.574-.574m11.074.575h-.027A3.42 3.42 0 0 0 12.5 9.875c0-.191-.027-.41-.055-.602A2.9 2.9 0 0 1 13.648 9h1.176a2.93 2.93 0 0 1 2.926 2.926c0 .328-.273.574-.602.574zM9 8.563c-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.312.246.41.656.656 1.148.656.465 0 .875-.246 1.121-.656.246-.383.246-.902 0-1.312-.246-.383-.656-.656-1.121-.656M9 12.5a2.65 2.65 0 0 1-2.297-1.312 2.65 2.65 0 0 1 0-2.626C7.195 7.77 8.043 7.25 9 7.25c.93 0 1.777.52 2.27 1.313.464.82.464 1.832 0 2.624-.493.82-1.34 1.313-2.27 1.313m-1.613 2.188c-1.094 0-1.996.765-2.27 1.75h7.738c-.273-.985-1.175-1.75-2.27-1.75zm0-1.313h3.199a3.664 3.664 0 0 1 3.664 3.664c0 .41-.328.711-.738.711H4.46a.706.706 0 0 1-.711-.71c0-2.024 1.613-3.665 3.637-3.665' />
    </g>
    <defs>
      <clipPath id='776441a49692f3a547d22d37b1dac64b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersSmBoldIcon);
export default ForwardRef;
