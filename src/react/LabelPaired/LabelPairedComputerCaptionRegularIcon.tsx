import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerCaptionRegularIcon = (
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
      <path d='M9 5H1.5a.755.755 0 0 0-.75.75V11c0 .422.328.75.75.75H9c.398 0 .75-.328.75-.75V5.75A.77.77 0 0 0 9 5m-7.5 7.5A1.48 1.48 0 0 1 0 11V5.75c0-.82.656-1.5 1.5-1.5H9c.82 0 1.5.68 1.5 1.5V11c0 .844-.68 1.5-1.5 1.5H6.703l.492 1.5h1.43c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-6.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.406l.492-1.5zM4.078 14h2.32l-.492-1.5H4.57zm8.297-9a.385.385 0 0 0-.375.375V6.5h2.25V5.375A.4.4 0 0 0 13.875 5zM12 7.25V8h2.25v-.75zm0 6.375c0 .21.164.375.375.375h1.5a.385.385 0 0 0 .375-.375V8.75H12zm-.75-8.25c0-.61.492-1.125 1.125-1.125h1.5c.61 0 1.125.516 1.125 1.125v8.25c0 .633-.516 1.125-1.125 1.125h-1.5a1.11 1.11 0 0 1-1.125-1.125zm1.875 6.563a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563' />
    </g>
    <defs>
      <clipPath id='457c6238421860d79514c3d7de27a512__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionRegularIcon);
export default ForwardRef;
