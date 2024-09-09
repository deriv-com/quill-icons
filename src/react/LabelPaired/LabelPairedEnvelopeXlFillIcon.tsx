import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 9h19.5C22.969 9 24 10.031 24 11.25c0 .75-.375 1.406-.937 1.828l-10.172 7.64a1.48 1.48 0 0 1-1.828 0L.89 13.079C.328 12.656 0 12 0 11.25A2.25 2.25 0 0 1 2.25 9M0 14.25l10.172 7.688a3.02 3.02 0 0 0 3.61 0L24 14.25V24c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3z' />
    </g>
    <defs>
      <clipPath id='e7d725068ae11cc4f2582e17d3efc0b2__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlFillIcon);
export default ForwardRef;
