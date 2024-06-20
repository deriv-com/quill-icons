import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownCaptionRegularIcon = (
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
      <path d='M3.86 13.953C3.882 14 3.93 14 4 14c.047 0 .094 0 .117-.047l2.813-2.648c.047-.047.07-.07.07-.117A.2.2 0 0 0 6.813 11H1.164c-.094 0-.164.094-.164.188 0 .046 0 .07.047.117zm-.516.563L.53 11.844a.89.89 0 0 1-.281-.656.92.92 0 0 1 .914-.938h5.649a.94.94 0 0 1 .937.938.9.9 0 0 1-.305.656l-2.812 2.672c-.164.164-.399.234-.633.234-.258 0-.492-.07-.656-.234' />
    </g>
    <defs>
      <clipPath id='1b9b818b809e474e38ba7d79bff2d766__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionRegularIcon);
export default ForwardRef;
