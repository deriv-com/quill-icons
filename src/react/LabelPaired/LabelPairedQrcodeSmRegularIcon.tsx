import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeSmRegularIcon = (
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
      <path d='M4.313 5.5H1.688a.45.45 0 0 0-.438.438v2.625c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437V5.937a.47.47 0 0 0-.437-.437m-2.625-.875h2.625c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H1.688A1.296 1.296 0 0 1 .375 8.563V5.937c0-.71.574-1.312 1.313-1.312M4.313 12.5H1.688a.45.45 0 0 0-.438.438v2.624c0 .247.191.438.438.438h2.625a.45.45 0 0 0 .437-.437v-2.626a.47.47 0 0 0-.437-.437m-2.625-.875h2.625c.71 0 1.312.602 1.312 1.313v2.624c0 .739-.602 1.313-1.312 1.313H1.688a1.296 1.296 0 0 1-1.313-1.312v-2.626c0-.71.574-1.312 1.313-1.312m7-6.125a.45.45 0 0 0-.438.438v2.625c0 .246.191.437.438.437h2.624a.45.45 0 0 0 .438-.437V5.937a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.625c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312zm0 6.125a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438v1.859h1.75v-1.86a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v2.296a.45.45 0 0 1-.437.438H9.562a.43.43 0 0 1-.437-.438V12.5H8.25v4.156a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.438zm-4.594-5.47h.438a.47.47 0 0 1 .437.438v.438a.45.45 0 0 1-.437.437H2.78a.43.43 0 0 1-.437-.437V7.03a.45.45 0 0 1 .437-.437m-.437 7.438a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.78a.43.43 0 0 1-.437-.437zM9.78 6.594h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H9.78a.43.43 0 0 1-.437-.437V7.03a.45.45 0 0 1 .437-.437M9.125 16a.45.45 0 0 1 .438-.437H10a.47.47 0 0 1 .438.437v.438a.45.45 0 0 1-.438.437h-.437a.43.43 0 0 1-.438-.437zm2.625-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437V16a.45.45 0 0 1 .437-.437' />
    </g>
    <defs>
      <clipPath id='c7daa7488c4d581d62edff66f2c90cfc__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeSmRegularIcon);
export default ForwardRef;
