import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterCaptionBoldIcon = (
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
      <path d='M1.5 3.5h5.25c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75H4.875v.75h5.063c.75 0 1.382.563 1.476 1.29l.563 3.866c0 .07.023.14.023.211V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14v-1.593l.563-3.868A1.49 1.49 0 0 1 2.039 7.25h1.336V6.5H1.5a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75m.75 1.125A.385.385 0 0 0 1.875 5c0 .21.164.375.375.375H6A.385.385 0 0 0 6.375 5 .4.4 0 0 0 6 4.625zM1.125 14c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375v-.375h-9.75zm9.188-5.297a.38.38 0 0 0-.376-.328H2.04a.38.38 0 0 0-.375.328L1.125 12.5h9.727zm-7.688.235a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562m1.688.562c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m-.563 1.313a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562M6.563 9.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563M6 10.813a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562M8.813 9.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m-.563 1.313a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562' />
    </g>
    <defs>
      <clipPath id='9a870f812f17fcc34371386b2bc321f3__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterCaptionBoldIcon);
export default ForwardRef;
