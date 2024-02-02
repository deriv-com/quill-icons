import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftCaptionBoldIcon = (
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
      <path d='M1.313 13.25q-.516-.047-.563-.562V7.062q.047-.514.563-.562.514.047.562.563v4.265l5.414-5.414q.399-.328.797 0 .328.399 0 .797l-5.414 5.414h4.265q.516.047.563.563-.047.514-.562.562z' />
    </g>
    <defs>
      <clipPath id='5ecfc4997cf8a468__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionBoldIcon);
export default ForwardRef;
