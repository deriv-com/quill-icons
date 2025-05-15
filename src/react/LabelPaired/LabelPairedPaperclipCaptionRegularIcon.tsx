import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipCaptionRegularIcon = (
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
      <path d='M9.156 5.094a1.74 1.74 0 0 0-2.46 0l-4.5 4.5a2.787 2.787 0 0 0 0 3.96 2.787 2.787 0 0 0 3.96 0L9.72 9.993c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-3.563 3.562a3.58 3.58 0 0 1-5.039 0c-1.383-1.406-1.383-3.656 0-5.04l4.5-4.5a2.533 2.533 0 0 1 3.54 0c.96.985.96 2.555 0 3.54l-4.313 4.312c-.656.656-1.758.586-2.344-.14a1.575 1.575 0 0 1 .117-2.086L6.72 6.617c.14-.14.398-.14.539 0 .14.14.14.399 0 .54l-3.563 3.562a.795.795 0 0 0-.07 1.078c.305.375.89.422 1.219.07l4.312-4.312a1.74 1.74 0 0 0 0-2.461' />
    </g>
    <defs>
      <clipPath id='8b82ea99d1d9f37533fba50d5b384094__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipCaptionRegularIcon);
export default ForwardRef;
