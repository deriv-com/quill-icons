import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionRegularIcon = (
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
      <path d='m6.258 4.742 4.5 4.5c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 5.538 1.758 9.781a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5c.141-.14.4-.14.54 0m4.5 9c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L6 10.038l-4.242 4.242a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5c.141-.14.4-.14.54 0z' />
    </g>
    <defs>
      <clipPath id='93662a723d46da644b025fc3fbe3536e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionRegularIcon);
export default ForwardRef;
