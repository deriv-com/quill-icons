import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownCaptionRegularIcon = (
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
      <path d='M6.258 12.781a.397.397 0 0 1-.54 0l-4.5-4.5a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0L6 11.984l4.219-4.242c.14-.14.398-.14.539 0 .14.14.14.399 0 .54z' />
    </g>
    <defs>
      <clipPath id='5b0380a4eb7c78e2fe0247842eae77ad__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownCaptionRegularIcon);
export default ForwardRef;
