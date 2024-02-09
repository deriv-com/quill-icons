import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.484 26.672q-.75.562-1.64.187Q.047 26.44 0 25.5v-15q.047-.937.844-1.36.89-.375 1.64.188l8.016 6.703v3.938zM12 22.5v-12q.047-.937.844-1.36.89-.375 1.64.188l9 7.5Q24 17.297 24 18q0 .704-.516 1.172l-9 7.5q-.75.562-1.64.187-.797-.42-.844-1.359z' />
    </g>
    <defs>
      <clipPath id='351fb2241dca0c32ab6872c3e651620b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlFillIcon);
export default ForwardRef;
