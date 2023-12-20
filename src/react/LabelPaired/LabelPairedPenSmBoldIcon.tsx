import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.984 13.621c.128-.4.338-.738.63-1.012l8.312-8.34c.364-.328.774-.492 1.23-.492.474 0 .884.164 1.23.493l1.095 1.093.218.274c.219.346.31.72.274 1.12-.037.402-.2.757-.493 1.067l-8.312 8.313-.11.11a2.6 2.6 0 0 1-.93.519l-2.132.629-1.148.328a.625.625 0 0 1-.657-.164.625.625 0 0 1-.164-.657l.328-1.148zm1.258.356-.164.656-.465 1.504 1.504-.438.656-.191c.164-.055.32-.146.465-.274l6.235-6.261-1.696-1.696-6.234 6.235-.027.027-.028.027c-.11.128-.191.265-.246.41'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenSmBoldIcon);
export default ForwardRef;
