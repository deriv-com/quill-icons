import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankCaptionRegularIcon = (
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
      <path d='m6.188 3.547 5.437 3.094q.352.21.375.632 0 .305-.21.516a.7.7 0 0 1-.517.211H.727a.7.7 0 0 1-.516-.21A.7.7 0 0 1 0 7.272a.74.74 0 0 1 .375-.632l5.438-3.094a.4.4 0 0 1 .375 0M7.195 7.25h4.008L6 4.297.797 7.25h4.008a1.34 1.34 0 0 1-.117-.562q.022-.563.375-.938.375-.352.937-.375.563.023.938.375.351.375.375.938 0 .304-.118.562M6 6.125q-.516.047-.562.563.045.514.562.562.516-.047.563-.562-.048-.516-.563-.563M1.5 11.75v-3h.75v3h1.875v-3h.75v3h2.25v-3h.75v3H9.75v-3h.75v3q.352.023.375.375-.023.352-.375.375h-9q-.352-.023-.375-.375.023-.352.375-.375m-.562 1.5h10.125q.351.023.374.375-.023.352-.374.375H.938q-.353-.023-.375-.375.022-.352.375-.375m-.563 1.5h11.25q.352.023.375.375-.023.352-.375.375H.375q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='a64383efc49bfb39__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankCaptionRegularIcon);
export default ForwardRef;
