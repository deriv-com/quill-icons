import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 6.938q0-.406.281-.657A.84.84 0 0 1 7.938 6q.312 0 .562.188l7.188 5.218A.69.69 0 0 1 16 12q0 .375-.312.594L8.5 17.813a.9.9 0 0 1-.562.187.84.84 0 0 1-.657-.281.84.84 0 0 1-.281-.657V13.97l-5.531 3.875A1 1 0 0 1 .937 18a.84.84 0 0 1-.656-.281.84.84 0 0 1-.281-.657V6.938q0-.406.281-.656A.84.84 0 0 1 .938 6a.9.9 0 0 1 .53.156L7 10.031zm0 4.937L1.5 8.031V16L7 12.125zm6.969.125L8.5 8.031v7.938z' />
    </g>
    <defs>
      <clipPath id='b03cea08ce7635cb275a43e0ce96f56c__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardMdBoldIcon);
export default ForwardRef;
