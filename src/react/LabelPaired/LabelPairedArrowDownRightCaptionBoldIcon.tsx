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
      <path d='M7.688 13.25H2.063a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h4.265L.914 6.711C.68 6.5.68 6.148.914 5.914c.211-.21.563-.21.797 0l5.414 5.438v-4.29c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v5.625a.555.555 0 0 1-.562.562' />
    </g>
    <defs>
      <clipPath id='582e9ccf097a1c888a686c4349d7e7c3__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightCaptionBoldIcon);
export default ForwardRef;
