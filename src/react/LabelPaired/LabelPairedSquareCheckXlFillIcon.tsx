import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 7.5h15c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3m12.797 8.297h-.047c.469-.422.469-1.125 0-1.594a1.103 1.103 0 0 0-1.547 0L9 19.453 6.797 17.25c-.469-.469-1.172-.469-1.594 0a1.027 1.027 0 0 0 0 1.547l3 3c.422.469 1.125.469 1.594 0z' />
    </g>
    <defs>
      <clipPath id='cf7a4a85edbf3ecbb64832429a7df23d__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlFillIcon);
export default ForwardRef;
