import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5c0-.82.656-1.5 1.5-1.5h4.242c.399 0 .774.164 1.055.445l1.758 1.758c.28.281.445.656.445 1.055v1.406a4.13 4.13 0 0 0-3 3.961c0 1.383.68 2.625 1.71 3.375H1.75A1.48 1.48 0 0 1 .25 14zM7 12.125c0-1.852 1.5-3.375 3.375-3.375a3.39 3.39 0 0 1 3.375 3.375 3.376 3.376 0 0 1-3.375 3.375A3.36 3.36 0 0 1 7 12.125m1.5 0c0 .21.164.375.375.375h2.086l-.68.68a.397.397 0 0 0 0 .539c.14.14.399.14.54 0l1.312-1.313a.397.397 0 0 0 0-.539l-1.313-1.312a.397.397 0 0 0-.539 0 .397.397 0 0 0 0 .539l.68.656H8.875a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='064b9227316a0a34fafd37256530d0cf__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightCaptionFillIcon);
export default ForwardRef;
