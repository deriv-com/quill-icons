import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 5.938c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H1.688A1.296 1.296 0 0 1 .375 8.563zm1.75.437v1.75h1.75v-1.75zm-1.75 6.563c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.624c0 .739-.602 1.313-1.312 1.313H1.688a1.296 1.296 0 0 1-1.313-1.312zm1.75.437v1.75h1.75v-1.75zm6.563-8.75h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312V5.937c0-.71.574-1.312 1.313-1.312m2.187 1.75h-1.75v1.75h1.75zm-3.5 5.688a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.624a.45.45 0 0 1-.437.438h-1.75a.43.43 0 0 1-.438-.437.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v1.75a.45.45 0 0 1-.437.437h-.876a.43.43 0 0 1-.437-.437zm3.063 4.812a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437m1.75 0a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437' />
    </g>
    <defs>
      <clipPath id='fb7bc2d049f9ef96f078d3ef6a1e0491__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeSmFillIcon);
export default ForwardRef;
