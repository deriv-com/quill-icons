import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 16.438q.165.027.52-.247.355-.247.793-1.066a9 9 0 0 0 .601-1.75H5.086q.247 1.012.601 1.75.438.82.793 1.066.355.274.52.247m-2.105-4.375h4.238q.054-.63.055-1.313 0-.684-.055-1.312H4.895q-.082.628-.082 1.312 0 .683.082 1.313m.19-3.938h3.83a9 9 0 0 0-.602-1.75q-.438-.82-.793-1.066-.355-.274-.52-.247-.165-.027-.52.247-.355.247-.793 1.066a9 9 0 0 0-.601 1.75m5.36 1.313q.055.628.055 1.312 0 .683-.055 1.313h2.078q.165-.63.165-1.313 0-.684-.165-1.312zm1.614-1.313a5.73 5.73 0 0 0-2.707-2.543q.573 1.067.902 2.543zm-8.313 0q.3-1.476.902-2.543a5.73 5.73 0 0 0-2.707 2.543zm-2.27 1.313a5.2 5.2 0 0 0-.163 1.312q0 .683.164 1.313h2.078A15 15 0 0 1 3.5 10.75q0-.684.055-1.312zm7.876 6.48a5.73 5.73 0 0 0 2.707-2.543h-1.805q-.3 1.476-.902 2.543m-4.704 0q-.573-1.067-.902-2.543H1.941a5.73 5.73 0 0 0 2.707 2.543M7 17.75q-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93 1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93' />
    </g>
    <defs>
      <clipPath id='e427c578a956abbd__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeSmBoldIcon);
export default ForwardRef;
