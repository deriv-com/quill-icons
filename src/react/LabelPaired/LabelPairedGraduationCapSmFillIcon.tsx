import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 4.625c.219 0 .438.055.629.137l7.684 2.761a.65.65 0 0 1 0 1.23l-7.684 2.763c-.191.082-.41.109-.656.109-.22 0-.438-.027-.63-.11L3.97 9.93c.246-.246.547-.438.875-.575L9.137 7.66c.246-.082.355-.328.246-.574a.425.425 0 0 0-.547-.246L4.543 8.535a3.3 3.3 0 0 0-1.367.985 3.7 3.7 0 0 0-.739 2.214v.684c.165.355.274.766.356 1.148.164.739.3 1.805.055 2.98-.028.11-.082.22-.192.274s-.219.082-.328.055l-1.75-.437a.42.42 0 0 1-.328-.274c-.027-.137 0-.3.082-.41.219-.328.438-.684.602-1.04.328-.628.629-1.421.629-2.214v-.766c0-.875.246-1.695.683-2.406L.66 8.754c-.246-.082-.41-.328-.41-.629 0-.273.164-.52.41-.602l7.684-2.761c.191-.082.41-.137.656-.137M3.75 14.906l.41-3.965 3.883 1.395a2.777 2.777 0 0 0 1.887 0l3.883-1.395.437 3.965c0 .985-2.352 1.969-5.25 1.969s-5.25-.984-5.25-1.969' />
    </g>
    <defs>
      <clipPath id='37acac999f7f7c9585f719070279f214__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapSmFillIcon);
export default ForwardRef;
