import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCaptionBoldIcon = (
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
      <path d='M2.063 4.25h8.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937h7.874a.925.925 0 0 0 .938-.937V8.561a.94.94 0 0 0-.937-.937H2.811a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h7.124A2.08 2.08 0 0 1 12 8.563v4.124a2.066 2.066 0 0 1-2.062 2.063H2.061A2.05 2.05 0 0 1 0 12.688V6.312C0 5.188.914 4.25 2.063 4.25M9 11.375a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='baeb6f8b67d68666197343648d145023__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionBoldIcon);
export default ForwardRef;
