import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourCaptionBoldIcon = (
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
      <path d='M4.43 5.07 1.5 10.625h4.875V7.063q.047-.516.563-.563.514.047.562.563v3.562h.938q.514.047.562.563-.047.514-.562.562H7.5v2.438q-.047.514-.562.562-.516-.047-.563-.562V11.75H.563q-.306 0-.493-.281a.55.55 0 0 1 0-.54l3.375-6.374q.282-.445.75-.235.445.282.235.75' />
    </g>
    <defs>
      <clipPath id='9d65e3df22c31ce44846ab4dfecf40dd__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionBoldIcon);
export default ForwardRef;
