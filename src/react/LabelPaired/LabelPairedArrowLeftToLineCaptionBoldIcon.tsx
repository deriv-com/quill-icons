import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 13.438V5.562C.25 5.259.484 5 .813 5a.57.57 0 0 1 .562.563v7.875A.555.555 0 0 1 .813 14a.54.54 0 0 1-.563-.562m3.164-4.336 3.188-3c.234-.211.585-.211.796.023s.211.586-.023.797L5.219 8.938h4.968a.57.57 0 0 1 .563.562.555.555 0 0 1-.562.563h-4.97l2.157 2.039c.234.21.234.562.023.796-.21.235-.562.235-.796.024l-3.188-3A.56.56 0 0 1 3.25 9.5c0-.14.047-.305.164-.398' />
    </g>
    <defs>
      <clipPath id='f06b31e345964e487de7ee8b1b43157e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionBoldIcon);
export default ForwardRef;
