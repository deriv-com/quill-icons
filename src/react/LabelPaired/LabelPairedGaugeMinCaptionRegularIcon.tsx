import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinCaptionRegularIcon = (
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
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m.563-9.75A.555.555 0 0 1 6 6.313a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562m-1.313 6c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 11a.755.755 0 0 0-.75.75m2.25 0-.023.023c0 .82-.657 1.5-1.5 1.5-.82 0-1.5-.68-1.5-1.5 0-.164.023-.304.07-.445l-2.508-1.5a.37.37 0 0 1-.117-.515.37.37 0 0 1 .516-.118l2.507 1.5A1.41 1.41 0 0 1 6 10.25c.82 0 1.5.68 1.5 1.5M3.938 6.875a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562m5.812 3.188a.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563m-.562-3.188a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562' />
    </g>
    <defs>
      <clipPath id='bd8b3a248c34e9ad7413d8a83267ad2e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinCaptionRegularIcon);
export default ForwardRef;
