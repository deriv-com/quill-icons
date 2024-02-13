import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 12q-.063 2.97-1.875 5.063t-4.656 2.593V14.25h1.812l.344-2.25H9.219v-1.469q-.032-.468.25-.812.28-.375 1-.375h.969V7.438q-.031-.032-.532-.094A10 10 0 0 0 9.72 7.28q-1.344 0-2.125.782-.781.78-.813 2.218V12H4.813v2.25H6.78v5.406q-2.844-.5-4.656-2.593T.25 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.845 4.28 8 4.25q2.157.03 3.906 1.063a7.74 7.74 0 0 1 2.781 2.78Q15.72 9.845 15.75 12' />
    </g>
    <defs>
      <clipPath id='74386a786286ecc6de3c0b9bc0f428d4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMdIcon);
export default ForwardRef;
