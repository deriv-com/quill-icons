import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadCaptionFillIcon = (
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
      <path d='M.25 5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v.75H.25zm0 1.5h10.5V14c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14zM2.5 8.75c0 .21.164.375.375.375h5.25A.385.385 0 0 0 8.5 8.75a.4.4 0 0 0-.375-.375h-5.25a.385.385 0 0 0-.375.375m0 2.25c0 .21.164.375.375.375h5.25A.385.385 0 0 0 8.5 11a.4.4 0 0 0-.375-.375h-5.25A.385.385 0 0 0 2.5 11m0 2.25c0 .21.164.375.375.375h2.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-2.25a.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='284d4a199769c0160332e42efcd41a32__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadCaptionFillIcon);
export default ForwardRef;
