import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2SmRegularIcon = (
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
      <path d='M2.188 5.5a.45.45 0 0 0-.438.438v2.625c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437V5.937a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H2.188A1.296 1.296 0 0 1 .875 8.563zM2.188 12.5a.45.45 0 0 0-.438.438v2.624c0 .247.191.438.438.438h2.625a.45.45 0 0 0 .437-.437v-2.626a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.624c0 .739-.602 1.313-1.312 1.313H2.188a1.296 1.296 0 0 1-1.313-1.312zM11.813 5.5H9.187a.45.45 0 0 0-.437.438v2.625c0 .246.191.437.438.437h2.624a.45.45 0 0 0 .438-.437V5.937a.47.47 0 0 0-.437-.437m-2.626-.875h2.626c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H9.187a1.296 1.296 0 0 1-1.312-1.312V5.937c0-.71.574-1.312 1.313-1.312m0 7.875a.45.45 0 0 0-.437.438v2.624c0 .247.191.438.438.438h2.624a.45.45 0 0 0 .438-.437v-2.626a.47.47 0 0 0-.437-.437zm-1.312.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.624c0 .739-.602 1.313-1.312 1.313H9.187a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='2119b86c5a8a680eb8b402ffaa56bd6d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2SmRegularIcon);
export default ForwardRef;
