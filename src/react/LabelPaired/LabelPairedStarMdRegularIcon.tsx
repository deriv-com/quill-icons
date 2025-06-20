import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.063 9.281c-.157.313-.438.5-.75.563l-4.282.625 3.094 3.094c.25.218.344.562.281.874l-.718 4.376L8.5 16.75a1.06 1.06 0 0 1 .969 0l3.812 2.063-.719-4.375a.92.92 0 0 1 .282-.876l3.094-3.093-4.282-.625c-.344-.063-.625-.25-.75-.563L8.97 5.344zm6.187 10.657h.031L9 17.625l-4.281 2.313c-.25.125-.563.093-.813-.063-.219-.187-.344-.469-.281-.75l.813-4.844-3.47-3.437a.74.74 0 0 1-.187-.781c.094-.25.313-.47.594-.5l4.781-.72 2.157-4.405c.124-.25.374-.438.656-.438.312 0 .562.188.687.438l2.156 4.406 4.782.719c.281.03.5.25.593.5a.74.74 0 0 1-.187.78l-3.469 3.438.813 4.844c.062.281-.063.563-.281.75a.84.84 0 0 1-.813.063' />
    </g>
    <defs>
      <clipPath id='9341b6b7852094cc8e2db39e5aa84c10__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdRegularIcon);
export default ForwardRef;
