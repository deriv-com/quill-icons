import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneCaptionFillIcon = (
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
      <path d='M6.75 14v-1.5h1.5V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V8.75c0-.82.656-1.5 1.5-1.5H3v1.5H1.5V14zm-1.5-2.25a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5z' />
    </g>
    <defs>
      <clipPath id='4ea0ff9f2a9075fe898e7905a63eaef7__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionFillIcon);
export default ForwardRef;
