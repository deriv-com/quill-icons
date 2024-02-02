import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCaptionRegularIcon = (
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
      <path d='M9.281 4.438 7.992 5.703l1.805 1.805 1.265-1.29q.33-.397 0-.796l-.984-.984q-.398-.33-.797 0M7.453 6.242 1.945 11.75a1.7 1.7 0 0 0-.375.656l-.633 2.156 2.157-.632q.375-.117.656-.375l5.508-5.508zm3.14-2.344 1.009 1.008q.375.399.375.914 0 .54-.375.938L4.266 14.07a2.1 2.1 0 0 1-.938.586l-2.836.82q-.234.07-.375-.093-.164-.14-.094-.352l.82-2.836a2.2 2.2 0 0 1 .563-.96l7.336-7.337q.399-.375.938-.375.515 0 .914.375' />
    </g>
    <defs>
      <clipPath id='5c2d46736cc54096bb0a645f0320e09f__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCaptionRegularIcon);
export default ForwardRef;
