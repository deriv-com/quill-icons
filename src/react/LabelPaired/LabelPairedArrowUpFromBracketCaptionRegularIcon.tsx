import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketCaptionRegularIcon = (
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
      <path d='m5.758 3.617 3 3c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L5.876 4.788v6.586c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V4.789L2.758 7.156a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l3-3c.141-.14.4-.14.54 0M1 11.375v2.25a1.11 1.11 0 0 0 1.125 1.125h6.75c.61 0 1.125-.492 1.125-1.125v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25A1.866 1.866 0 0 1 8.875 15.5h-6.75A1.85 1.85 0 0 1 .25 13.625v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='a450c3f0c00af2eacc21e015dad506f1__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketCaptionRegularIcon);
export default ForwardRef;
