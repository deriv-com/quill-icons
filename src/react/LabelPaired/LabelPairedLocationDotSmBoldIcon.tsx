import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLocationDotSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9.438 9c-.037-1.112-.42-2.042-1.149-2.79C7.542 5.483 6.612 5.1 5.5 5.064c-1.112.036-2.042.419-2.79 1.148C1.983 6.958 1.6 7.888 1.564 9c0 .346.136.866.41 1.559.31.692.701 1.421 1.175 2.187a53.32 53.32 0 0 0 1.204 1.832c.419.584.802 1.094 1.148 1.531.346-.437.73-.948 1.148-1.53.42-.584.82-1.195 1.204-1.833.474-.766.865-1.495 1.175-2.187.274-.693.41-1.213.41-1.559Zm1.312 0c-.037.82-.328 1.768-.875 2.844a27.489 27.489 0 0 1-1.914 3.117c-.711 1.02-1.313 1.832-1.805 2.434-.182.218-.4.328-.656.328-.255 0-.474-.11-.656-.328-.492-.602-1.094-1.413-1.805-2.434a27.489 27.489 0 0 1-1.914-3.117C.578 10.768.286 9.82.25 9c.036-1.495.547-2.734 1.531-3.719.985-.984 2.224-1.495 3.719-1.531 1.495.036 2.734.547 3.719 1.531.984.985 1.495 2.224 1.531 3.719ZM6.375 9a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629c0 .255.082.465.246.629a.852.852 0 0 0 .629.246.852.852 0 0 0 .629-.246A.852.852 0 0 0 6.375 9ZM3.312 9c.019-.82.383-1.45 1.094-1.887.73-.4 1.459-.4 2.188 0C7.304 7.551 7.669 8.18 7.687 9c-.018.82-.382 1.45-1.093 1.887-.73.4-1.459.4-2.188 0C3.696 10.449 3.331 9.82 3.313 9Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmBoldIcon);
export default ForwardRef;
