import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9v2h4.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3v2c0 .781-.219 1.563-.594 2.281L2 17.5h7.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75c-.281 0-.531-.125-.656-.344-.125-.25-.156-.531-.031-.75l1.03-1.843c.25-.5.407-1.032.407-1.563v-2H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.75V9c0-2.219 1.781-4 3.969-4 .406 0 .843.094 1.25.219l2.5.843c.406.125.625.532.469.938-.126.406-.532.594-.938.469l-2.5-.813a2.3 2.3 0 0 0-.781-.156C4.094 6.5 3 7.625 3 9' />
    </g>
    <defs>
      <clipPath id='1c1ba8ee7d5ace6ce623eebad7ec1a3b__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdBoldIcon);
export default ForwardRef;
