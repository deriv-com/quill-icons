import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 11.008c2.46 0 4.492 2.031 4.492 4.492 0 2.5-2.031 4.492-4.492 4.492A4.47 4.47 0 0 1 4.508 15.5 4.493 4.493 0 0 1 9 11.008m0 7.422c1.602 0 2.89-1.29 2.89-2.93A2.884 2.884 0 0 0 9 12.61c-1.64 0-2.93 1.288-2.93 2.89 0 1.64 1.328 2.93 2.93 2.93m5.703-7.578a1.05 1.05 0 0 0-1.055-1.055 1.05 1.05 0 0 0-1.054 1.055 1.05 1.05 0 0 0 1.054 1.054 1.05 1.05 0 0 0 1.055-1.054m2.969 1.054c.078 1.446.078 5.781 0 7.227-.078 1.406-.39 2.617-1.406 3.672C15.25 23.82 14 24.133 12.594 24.21c-1.446.078-5.781.078-7.227 0-1.406-.078-2.617-.39-3.672-1.406C.68 21.75.367 20.539.29 19.133c-.078-1.445-.078-5.781 0-7.227C.367 10.5.68 9.25 1.695 8.234 2.75 7.22 3.961 6.906 5.367 6.828c1.446-.078 5.781-.078 7.227 0 1.406.078 2.656.39 3.672 1.406 1.015 1.016 1.328 2.266 1.406 3.672m-1.875 8.75c.469-1.133.351-3.867.351-5.156 0-1.25.118-3.984-.351-5.156-.313-.742-.899-1.367-1.64-1.64-1.173-.47-3.907-.352-5.157-.352-1.29 0-4.023-.118-5.156.351a3.01 3.01 0 0 0-1.68 1.64c-.469 1.173-.352 3.907-.352 5.157 0 1.29-.117 4.023.352 5.156a2.96 2.96 0 0 0 1.68 1.68c1.133.469 3.867.352 5.156.352 1.25 0 3.984.117 5.156-.352.742-.313 1.367-.898 1.64-1.68' />
    </g>
    <defs>
      <clipPath id='dc56ac9529b08f4510377867fde4a552__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramLgIcon);
export default ForwardRef;
