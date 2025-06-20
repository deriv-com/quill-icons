import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.129 16.602a.8.8 0 0 1-.629.273c-.246 0-.492-.082-.656-.273l-2.406-2.625a.867.867 0 0 1 .054-1.23.867.867 0 0 1 1.23.054l.903.957V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.258l.875-.957a.867.867 0 0 1 1.23-.055.867.867 0 0 1 .055 1.23zM8.875 12.5c0-.465.383-.875.875-.875h3.5c.328 0 .656.219.793.547a.88.88 0 0 1-.191.957l-1.997 1.996h1.395a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-3.5c-.355 0-.684-.191-.82-.52a.89.89 0 0 1 .191-.957l1.996-2.023H9.75a.864.864 0 0 1-.875-.875M11.5 4.625c.328 0 .629.191.766.492l1.75 3.5.437.875a.866.866 0 0 1-.383 1.176.867.867 0 0 1-1.175-.383l-.192-.41H10.27l-.192.41a.867.867 0 0 1-1.176.383.867.867 0 0 1-.382-1.176l.437-.875 1.75-3.5a.85.85 0 0 1 .793-.492m-.574 3.938h1.12L11.5 7.469z' />
    </g>
    <defs>
      <clipPath id='0c1e332b1d74bf0946a26efbad666343__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZSmFillIcon);
export default ForwardRef;
