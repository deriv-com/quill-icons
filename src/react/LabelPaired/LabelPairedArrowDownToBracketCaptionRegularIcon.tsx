import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketCaptionRegularIcon = (
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
      <path d='m8.758 8.656-3 3a.397.397 0 0 1-.54 0l-3-3a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l2.367 2.367V3.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v6.61l2.344-2.368c.14-.14.398-.14.539 0 .14.14.14.399 0 .54M1 11.375v2.25a1.11 1.11 0 0 0 1.125 1.125h6.75c.61 0 1.125-.492 1.125-1.125v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25A1.866 1.866 0 0 1 8.875 15.5h-6.75A1.85 1.85 0 0 1 .25 13.625v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='d848f144667f07133bb9a6709d679754__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionRegularIcon);
export default ForwardRef;
