import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCalendarRangeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.313 4.063V5h3.375v-.937q.046-.516.562-.563.515.047.563.563V5h.937q.633.024 1.055.445.421.423.445 1.055V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-7.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .75 14V6.5q.024-.632.445-1.055Q1.618 5.024 2.25 5h.938v-.937q.045-.516.562-.563.516.047.563.563M1.874 8v6q.023.352.375.375h7.5q.352-.023.375-.375V8zM3 10.25a.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21q.21.212.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54m5.25 1.5a.73.73 0 0 1 .54.21q.21.212.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21m-3-1.5q.047-.516.563-.562h2.625q.514.045.562.562-.047.515-.562.563H5.812q-.514-.048-.562-.563m.938 1.688q.514.045.562.562-.047.515-.562.563H3.563Q3.047 13.015 3 12.5q.047-.516.563-.562z' />
    </g>
    <defs>
      <clipPath id='08a8f2b4a632d31decfca8873c599d52__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeCaptionBoldIcon);
export default ForwardRef;
