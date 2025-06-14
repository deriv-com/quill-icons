import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImagePolaroidUserMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 16H1v1c0 .563.438 1 1 1h10c.531 0 1-.437 1-1v-1zm-.062-1H13V7c0-.531-.469-1-1-1H2c-.562 0-1 .469-1 1v8h2.531c.25-1.125 1.25-2 2.469-2h2a2.51 2.51 0 0 1 2.438 2m-5.876 0h4.844c-.219-.562-.781-1-1.406-1H6c-.656 0-1.219.438-1.437 1M14 7v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2m-6 3c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1M7 8c.688 0 1.344.406 1.719 1 .344.625.344 1.406 0 2A2.02 2.02 0 0 1 7 12a2.03 2.03 0 0 1-1.75-1c-.344-.594-.344-1.375 0-2C5.625 8.406 6.281 8 7 8' />
    </g>
    <defs>
      <clipPath id='4fb89633a289815d612c1332e08f3734__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImagePolaroidUserMdRegularIcon);
export default ForwardRef;
