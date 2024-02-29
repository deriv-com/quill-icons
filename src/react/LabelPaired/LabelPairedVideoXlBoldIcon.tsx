import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 11.25q-.703.047-.75.75v12q.046.704.75.75h12q.703-.046.75-.75V12q-.047-.703-.75-.75zM0 12q.047-1.266.89-2.11Q1.735 9.048 3 9h12q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24zm24.75 11.016V12.984l-5.25 2.344v-2.484l4.875-2.156q.375-.188.797-.188.75 0 1.265.563.563.514.563 1.312v11.297q0 .75-.562 1.265a1.65 1.65 0 0 1-1.266.563q-.422 0-.797-.14L19.5 23.155v-2.484z' />
    </g>
    <defs>
      <clipPath id='7152de47161839d2404bb6633fdabc3e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlBoldIcon);
export default ForwardRef;
