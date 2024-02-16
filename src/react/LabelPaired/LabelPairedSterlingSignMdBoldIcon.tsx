import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignMdBoldIcon = (
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
      <path d='M3 8.969V11h4.25q.687.063.75.75-.063.687-.75.75H3v1.969q0 1.218-.594 2.281L2 17.5h7.25q.687.063.75.75-.063.687-.75.75H.75q-.406 0-.656-.375-.187-.344 0-.719l1-1.875q.406-.719.406-1.562V12.5H.75q-.687-.063-.75-.75.063-.687.75-.75h.75V8.969q.03-1.688 1.156-2.813T5.47 5q.656 0 1.281.219l2.5.812q.625.281.469.969-.281.625-.969.469l-2.5-.844a2.5 2.5 0 0 0-.781-.125q-1.032.03-1.75.719-.688.718-.719 1.75' />
    </g>
    <defs>
      <clipPath id='eeac330038c94a6fb4eed7558724ce5e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdBoldIcon);
export default ForwardRef;
