import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineCaptionRegularIcon = (
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
      <path d='M.25 13.625v-8.25C.25 5.188.414 5 .625 5 .813 5 1 5.188 1 5.375v8.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375m2.344-4.383 3-3c.14-.14.398-.14.539 0 .14.14.14.399 0 .54L3.766 9.124h6.609c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H3.766l2.367 2.367c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0l-3-3a.397.397 0 0 1 0-.54' />
    </g>
    <defs>
      <clipPath id='566cb2a442827d39cc838ad9a09ae448__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionRegularIcon);
export default ForwardRef;
