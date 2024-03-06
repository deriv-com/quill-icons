import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.563 4.25q.514.047.562.563v9.375q-.047.514-.562.562-.516-.047-.563-.562V4.813q.047-.516.563-.563m2.062 0q.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375v-9.75q.023-.352.375-.375m1.688 0q.514.047.562.563v9.375q-.047.514-.562.562-.516-.047-.563-.562V4.813q.047-.516.563-.563m2.625 0q.514.047.562.563v9.375q-.047.514-.562.562-.516-.047-.563-.562V4.813q.047-.516.563-.563m3.937.563q.047-.516.563-.563.514.047.562.563v9.375q-.047.514-.562.562-.516-.047-.563-.562zm-1.5-.188q.023-.352.375-.375.352.023.375.375v9.75q-.023.352-.375.375-.352-.023-.375-.375z' />
    </g>
    <defs>
      <clipPath id='d50ff6ec8e1c0025db53c63a6d6d1ae8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionBoldIcon);
export default ForwardRef;
