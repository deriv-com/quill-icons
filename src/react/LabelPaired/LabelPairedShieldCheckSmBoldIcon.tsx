import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckSmBoldIcon = (
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
      <path d='M1.996 7.223q-.246.136-.246.355 0 1.285.438 2.953.437 1.641 1.53 3.227 1.122 1.559 3.118 2.57.165.055.328 0 1.996-1.011 3.117-2.57 1.095-1.586 1.531-3.227.438-1.668.438-2.953 0-.219-.246-.355L7 5.09zM12.523 6.02q.465.191.739.601.3.411.3.957.028 1.395-.464 3.281-.491 1.887-1.778 3.664-1.257 1.806-3.61 2.98a1.62 1.62 0 0 1-1.42 0q-2.353-1.174-3.61-2.98Q1.394 12.746.902 10.86.41 8.973.438 7.58q0-.547.3-.958.274-.41.739-.601l5.168-2.188A.8.8 0 0 1 7 3.75q.192 0 .355.082zM8.531 9.438q-.054.956-.875 1.394v1.887q-.054.601-.656.656-.602-.055-.656-.656v-1.887q-.82-.438-.875-1.395.027-.656.437-1.093.438-.411 1.094-.438.656.027 1.094.438.41.437.437 1.094' />
    </g>
    <defs>
      <clipPath id='cef2b47869ced0d9147d41fa523e711c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckSmBoldIcon);
export default ForwardRef;
