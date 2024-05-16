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
      <path d='M1.313 13.25a.54.54 0 0 1-.563-.562V7.062c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v4.289l5.414-5.438c.211-.21.563-.21.774 0 .234.234.234.586 0 .797l-5.415 5.414h4.29a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562z' />
    </g>
    <defs>
      <clipPath id='d13bc623e206438f0db210000eb36b04__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionBoldIcon);
export default ForwardRef;
