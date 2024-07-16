import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.047 7.719C1 7.766 1 7.789 1 7.836c0 .094.07.164.164.164h5.649C6.906 8 7 7.93 7 7.836a.13.13 0 0 0-.07-.117L4.117 5.07A.13.13 0 0 0 4 5q-.105 0-.14.07zm-.516-.54 2.813-2.671A.92.92 0 0 1 4 4.25c.234 0 .469.094.633.258L7.445 7.18a.9.9 0 0 1 .305.656.92.92 0 0 1-.937.914H1.164a.9.9 0 0 1-.914-.914c0-.234.094-.492.281-.656m.516 4.126 2.812 2.648C3.883 14 3.93 14 4 14c.047 0 .094 0 .117-.047l2.813-2.648c.047-.047.07-.07.07-.117A.2.2 0 0 0 6.813 11H1.164c-.094 0-.164.094-.164.188 0 .046 0 .07.047.117m-.516.539a.89.89 0 0 1-.281-.656.92.92 0 0 1 .914-.938h5.649a.94.94 0 0 1 .937.938.9.9 0 0 1-.305.656l-2.812 2.672c-.164.164-.399.234-.633.234-.258 0-.492-.07-.656-.234z' />
    </g>
    <defs>
      <clipPath id='28bc8ec5319d7b0af3fac881e3f9358c__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionRegularIcon);
export default ForwardRef;
