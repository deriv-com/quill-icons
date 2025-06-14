import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.156 10.594a.53.53 0 0 1-.5.406c-.312 0-.562-.25-.5-.562C1.875 7.344 4.656 5 8 5c2.531 0 4.75 1.375 6 3.406V6.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.688a6.002 6.002 0 0 0-11.032 1.594m11.657 2.844a.564.564 0 0 1 .53-.438c.282 0 .532.281.47.594A7.004 7.004 0 0 1 8 19a6.96 6.96 0 0 1-6-3.375V17.5c0 .281-.219.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5h3c.281 0 .5.25.5.5 0 .281-.219.5-.5.5H2.781C3.812 16.813 5.75 18 8 18a5.97 5.97 0 0 0 5.813-4.562' />
    </g>
    <defs>
      <clipPath id='d3f8d0749cdbed9fabca515c2f77ad69__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdRegularIcon);
export default ForwardRef;
