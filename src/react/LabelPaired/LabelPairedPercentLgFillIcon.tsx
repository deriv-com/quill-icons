import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.61 10.148-12.5 12.5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l12.5-12.5a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757M5 10.5c0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 0 10.5c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0C4.492 8.82 5 9.64 5 10.5m10 10c0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 10 20.5c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0C14.492 18.82 15 19.64 15 20.5' />
    </g>
    <defs>
      <clipPath id='46f722c2ad519984352c3cc37b61ad33__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentLgFillIcon);
export default ForwardRef;
