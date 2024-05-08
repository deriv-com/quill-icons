import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 8.25V22.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75M1.5 28.125C.844 28.125.375 27.656.375 27c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 1.5 28.125' />
    </g>
    <defs>
      <clipPath id='a2613b34b1a8785e9518347c20649708__a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlRegularIcon);
export default ForwardRef;
