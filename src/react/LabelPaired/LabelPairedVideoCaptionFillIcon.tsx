import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 6.5c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-6a1.48 1.48 0 0 1-1.5-1.5zm13.102-.656c.234.14.398.398.398.656v6c0 .281-.164.54-.398.68-.258.117-.54.117-.774-.047l-2.25-1.5-.328-.211v-3.82l.328-.211 2.25-1.5c.235-.164.516-.164.774-.047' />
    </g>
    <defs>
      <clipPath id='d1f3493e08df8b129224907d537a705b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionFillIcon);
export default ForwardRef;
