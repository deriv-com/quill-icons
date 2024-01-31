import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.938 4.813q.045.514.562.562.516-.047.563-.562-.048-.516-.563-.563-.516.047-.562.563m1.874 0q-.023.75-.656 1.125-.656.375-1.312 0-.632-.375-.656-1.125.023-.75.656-1.125.656-.375 1.312 0 .632.374.657 1.124M4.196 7.25q-.234 0-.445.094V11h1.5V7.25zm-.445 7.875q-.023.352-.375.375-.352-.023-.375-.375v-6.89l-1.172 2.203q-.188.28-.492.14-.305-.187-.164-.492l1.383-2.602q.54-.937 1.64-.984H7.5V4.625q.024-.468.328-.797.328-.304.797-.328h5.25q.469.024.797.328.304.329.328.797v5.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-5.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797V8h.75v1.875q.023.352.375.375h5.25q.352-.023.375-.375v-5.25q-.023-.352-.375-.375h-5.25q-.352.023-.375.375V6.5h1.125q.352.023.375.375-.023.352-.375.375H6v7.875q-.023.352-.375.375-.352-.023-.375-.375V11.75h-1.5z' />
    </g>
    <defs>
      <clipPath id='d2f00ab8d9fb89ba__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionRegularIcon);
export default ForwardRef;
