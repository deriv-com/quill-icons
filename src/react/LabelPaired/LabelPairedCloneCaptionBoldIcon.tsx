import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneCaptionBoldIcon = (
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
      <path d='M1.5 14.375h5.25A.385.385 0 0 0 7.125 14v-1.5H8.25V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V8.75c0-.82.656-1.5 1.5-1.5H3v1.125H1.5a.385.385 0 0 0-.375.375V14c0 .21.164.375.375.375m3.75-3.75h5.25a.385.385 0 0 0 .375-.375V5a.4.4 0 0 0-.375-.375H5.25A.385.385 0 0 0 4.875 5v5.25c0 .21.164.375.375.375m-1.5-.375V5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5H5.25a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='064b7532dd24054606033da53d04a930__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionBoldIcon);
export default ForwardRef;
