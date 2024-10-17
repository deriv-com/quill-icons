import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 6.75v5.781c.703.352 1.25 1.29 1.25 2.344 0 1.094-.547 2.031-1.25 2.383V23c0 .508-.312.977-.781 1.172a1.26 1.26 0 0 1-1.367-.274l-1.72-1.718a10 10 0 0 0-7.07-2.93H7.5v5c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25v-5a2.47 2.47 0 0 1-2.5-2.5V13c0-1.367 1.094-2.5 2.5-2.5h5.313a10 10 0 0 0 7.07-2.93l1.719-1.68a1.26 1.26 0 0 1 1.367-.273c.468.196.781.664.781 1.133m-2.5 3.008C13.945 11.868 10.938 13 7.813 13H7.5v3.75h.313c3.125 0 6.132 1.172 8.437 3.281V9.758' />
    </g>
    <defs>
      <clipPath id='b6c078533578ce3fdac854a7e01a65cf__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornLgFillIcon);
export default ForwardRef;
