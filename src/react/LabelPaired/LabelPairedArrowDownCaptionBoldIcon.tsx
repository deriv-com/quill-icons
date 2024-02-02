import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.102 14.586.164 10.46q-.327-.422.023-.797.399-.328.774 0l2.976 3.117V4.812q.048-.514.563-.562.516.047.563.563v7.968l2.976-3.094q.375-.351.797-.023.328.375 0 .797l-3.938 4.125a.54.54 0 0 1-.398.164.54.54 0 0 1-.398-.164' />
    </g>
    <defs>
      <clipPath id='289e4f970721270d__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionBoldIcon);
export default ForwardRef;
