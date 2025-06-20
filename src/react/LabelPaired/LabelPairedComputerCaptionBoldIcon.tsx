import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedComputerCaptionBoldIcon = (
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
      <path d='M9 5.375H1.5a.385.385 0 0 0-.375.375V11c0 .21.164.375.375.375H9A.385.385 0 0 0 9.375 11V5.75A.4.4 0 0 0 9 5.375M1.5 12.5A1.48 1.48 0 0 1 0 11V5.75c0-.82.656-1.5 1.5-1.5H9c.82 0 1.5.68 1.5 1.5V11c0 .844-.68 1.5-1.5 1.5H6.96l.376 1.125h1.101a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H2.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563H3.14l.375-1.125zm2.836 1.125H6.14L5.766 12.5H4.71zm8.039-8.25v.75h1.5v-.75zm0 1.875V8h1.5v-.75zm1.5 1.875h-1.5v4.5h1.5zm-2.625-3.75c0-.61.492-1.125 1.125-1.125h1.5c.61 0 1.125.516 1.125 1.125v8.25c0 .633-.516 1.125-1.125 1.125h-1.5a1.11 1.11 0 0 1-1.125-1.125zm1.875 6.563a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563' />
    </g>
    <defs>
      <clipPath id='265096d2c60815b25d13d167cc12e99e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionBoldIcon);
export default ForwardRef;
