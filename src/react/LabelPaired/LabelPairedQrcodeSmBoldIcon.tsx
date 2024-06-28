import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeSmBoldIcon = (
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
      <path d='M4.313 5.938H1.688v2.625h2.625zM1.688 4.625h2.625c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H1.688A1.296 1.296 0 0 1 .375 8.563V5.937c0-.71.574-1.312 1.313-1.312m2.625 8.313H1.688v2.624h2.625zm-2.625-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.624c0 .739-.602 1.313-1.312 1.313H1.688a1.296 1.296 0 0 1-1.313-1.312v-2.626c0-.71.574-1.312 1.313-1.312m7-5.687v2.625h2.624V5.937zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312zM2.344 7.03a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.78a.43.43 0 0 1-.437-.437zm.437 6.563h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.78a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437M9.344 7.03a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H9.78a.43.43 0 0 1-.437-.437zm-1.969 5.032a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438c0 .246.191.437.438.437h.874a.45.45 0 0 0 .438-.437.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v2.624a.45.45 0 0 1-.437.438h-1.75a.43.43 0 0 1-.438-.437.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v1.75a.45.45 0 0 1-.437.437h-.876a.43.43 0 0 1-.437-.437zM10.438 16a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438m1.75 0a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='8bd825dff7fe40fc66599e494cc53e4c__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeSmBoldIcon);
export default ForwardRef;
