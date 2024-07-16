import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCaptionRegularIcon = (
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
      <path d='M1.875 4.25h9c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9C1.242 5 .75 5.516.75 6.125v6.75A1.11 1.11 0 0 0 1.875 14h8.25c.61 0 1.125-.492 1.125-1.125v-5.25A1.14 1.14 0 0 0 10.125 6.5h-7.5a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h7.5A1.88 1.88 0 0 1 12 7.625v5.25a1.866 1.866 0 0 1-1.875 1.875h-8.25A1.85 1.85 0 0 1 0 12.875v-6.75C0 5.094.82 4.25 1.875 4.25M9 10.813a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563' />
    </g>
    <defs>
      <clipPath id='e768e77be9eb4014a030d583969402d8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionRegularIcon);
export default ForwardRef;
