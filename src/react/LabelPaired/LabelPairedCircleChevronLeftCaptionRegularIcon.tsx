import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleChevronLeftCaptionRegularIcon = (
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
      <path d='M.75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0a5.228 5.228 0 0 0 0-9.07 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5M12 9.5a6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18M6.469 6.617c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L4.64 9.5l2.367 2.367c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L3.845 9.78a.397.397 0 0 1 0-.539z' />
    </g>
    <defs>
      <clipPath id='6e485ac41cb91b43f3f11023e811d2fe__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleChevronLeftCaptionRegularIcon);
export default ForwardRef;
