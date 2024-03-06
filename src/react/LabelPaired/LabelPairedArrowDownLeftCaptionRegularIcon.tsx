import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 13.25q-.352-.023-.375-.375v-5.25q.023-.352.375-.375.352.023.375.375v4.336l6.117-6.094q.258-.234.516 0 .234.258 0 .516L2.039 12.5h4.336q.352.023.375.375-.023.352-.375.375z' />
    </g>
    <defs>
      <clipPath id='e945bac9a4f824d763301fa209e972e1__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionRegularIcon);
export default ForwardRef;
