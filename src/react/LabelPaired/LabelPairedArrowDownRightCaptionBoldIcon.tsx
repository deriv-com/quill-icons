import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightCaptionBoldIcon = (
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
      <path d='M7.688 13.25H2.063q-.516-.047-.563-.562.047-.516.563-.563h4.265L.914 6.711q-.328-.399 0-.797.398-.328.797 0l5.414 5.414V7.063q.047-.516.563-.563.514.047.562.563v5.625q-.047.514-.562.562' />
    </g>
    <defs>
      <clipPath id='2faab5a4ad6022dd__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionBoldIcon);
export default ForwardRef;
