import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.438 7c-.657 0-1.313.281-1.782.75l-.969.969a.964.964 0 0 1-1.406 0 .964.964 0 0 1 0-1.406l.969-.97C2.094 5.5 3.25 5 4.438 5A4.55 4.55 0 0 1 9 9.563c0 1.187-.5 2.343-1.344 3.187L3.406 17H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.406 0-.781-.219-.937-.594a1.01 1.01 0 0 1 .218-1.093l5.969-5.97c.469-.468.75-1.124.75-1.78A2.574 2.574 0 0 0 4.438 7' />
    </g>
    <defs>
      <clipPath id='310d099b03d60b2bf8e64a0924a775b9__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdFillIcon);
export default ForwardRef;
