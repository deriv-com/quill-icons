import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.594c0 1.469.531 2.906 1.5 4l.219.25c.281.312.344.719.187 1.094-.156.343-.531.562-.906.562H1c-.406 0-.781-.219-.937-.562a1.01 1.01 0 0 1 .187-1.094l.219-.25a6.08 6.08 0 0 0 1.531-4V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m1.406 15.438A1.96 1.96 0 0 1 7 20c-.531 0-1.062-.187-1.437-.562S5 18.53 5 18h4c0 .531-.219 1.063-.594 1.438' />
    </g>
    <defs>
      <clipPath id='10399b11d1666896bca81bfecf72fb61__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellMdFillIcon);
export default ForwardRef;
