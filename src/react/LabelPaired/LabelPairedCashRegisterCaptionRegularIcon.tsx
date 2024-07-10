import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterCaptionRegularIcon = (
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
      <path d='M6.375 4.25h-4.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375m-4.5-.75h4.5c.61 0 1.125.516 1.125 1.125v.75c0 .633-.516 1.125-1.125 1.125H4.5v.75h5.438c.75 0 1.382.563 1.476 1.29l.563 3.866c0 .07.023.14.023.211V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14v-1.593l.563-3.868A1.49 1.49 0 0 1 2.039 7.25H3.75V6.5H1.875A1.11 1.11 0 0 1 .75 5.375v-.75c0-.61.492-1.125 1.125-1.125M.75 14c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75v-.75H.75zm9.938-5.344c-.07-.375-.376-.656-.75-.656H2.039c-.375 0-.68.281-.75.656L.75 12.5h10.477zm-8.063.281a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562m1.688.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m-.563 1.313a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562M6.563 9.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563M6 10.813a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562M8.813 9.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563m-.563 1.313a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562' />
    </g>
    <defs>
      <clipPath id='646094c2befd09d927913234aa0ac7db__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterCaptionRegularIcon);
export default ForwardRef;
