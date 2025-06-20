import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalCaptionBoldIcon = (
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
      <path d='M0 6.313C0 5.188.914 4.25 2.063 4.25h8.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937H8.25v1.125H2.063A2.05 2.05 0 0 1 0 12.688zm2.25.75c0-.305.234-.563.563-.563h7.124A2.08 2.08 0 0 1 12 8.563v.703a7 7 0 0 0-1.125-.375v-.328a.94.94 0 0 0-.937-.938H2.811a.54.54 0 0 1-.562-.562m6.75 3c0-.305.234-.563.563-.563 3 0 5.437 2.438 5.437 5.438a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562c0-2.368-1.945-4.313-4.312-4.313A.54.54 0 0 1 9 10.063m0 2.25c0-.305.234-.563.563-.563a3.19 3.19 0 0 1 3.187 3.188.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562 2.08 2.08 0 0 0-2.062-2.063.54.54 0 0 1-.563-.562m0 2.437c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='0d27c67ebf012c214a264cddde9a8776__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalCaptionBoldIcon);
export default ForwardRef;
